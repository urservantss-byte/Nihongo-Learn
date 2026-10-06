/* Nihongo Learn — server */
const express = require('express');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Database = require('better-sqlite3');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'nihongo-dev-secret';
const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'nihongo.db');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const db = new Database(DB_PATH);
db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  level TEXT DEFAULT 'hiragana',
  intensity TEXT DEFAULT 'sedang',
  theme TEXT DEFAULT 'sakura',
  created_at TEXT DEFAULT (datetime('now'))
);
CREATE TABLE IF NOT EXISTS progress (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  lesson_key TEXT NOT NULL,
  done INTEGER DEFAULT 1,
  updated_at TEXT DEFAULT (datetime('now')),
  UNIQUE(user_id, lesson_key)
);
CREATE TABLE IF NOT EXISTS quiz_results (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  level TEXT NOT NULL,
  score INTEGER NOT NULL,
  total INTEGER NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);
CREATE TABLE IF NOT EXISTS chapter_progress (
  user_id INTEGER NOT NULL,
  chapter_id TEXT NOT NULL,
  score INTEGER NOT NULL,
  total INTEGER NOT NULL,
  passed INTEGER NOT NULL DEFAULT 0,
  updated_at TEXT DEFAULT (datetime('now')),
  PRIMARY KEY (user_id, chapter_id)
);
CREATE TABLE IF NOT EXISTS game_scores (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  game TEXT NOT NULL,
  score INTEGER NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);
CREATE TABLE IF NOT EXISTS ask_queue (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  question TEXT NOT NULL,
  history TEXT DEFAULT '[]',
  status TEXT DEFAULT 'pending',
  answer TEXT DEFAULT '',
  created_at TEXT DEFAULT (datetime('now')),
  answered_at TEXT
);
-- XP, koin, SRS, statistik soal (pola Duolingo/WaniKani/Renshuu)
`);
// kolom baru users (aman untuk DB lama)
for (const col of ['xp', 'coins']) {
  const has = db.prepare(`PRAGMA table_info(users)`).all().some(c => c.name === col);
  if (!has) db.exec(`ALTER TABLE users ADD COLUMN ${col} INTEGER DEFAULT 0`);
}
db.exec(`
CREATE TABLE IF NOT EXISTS xp_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  amount INTEGER NOT NULL,
  reason TEXT DEFAULT '',
  created_at TEXT DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_xp_log_user_time ON xp_log(user_id, created_at);
CREATE TABLE IF NOT EXISTS srs_cards (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  kind TEXT NOT NULL,
  front TEXT NOT NULL,
  back TEXT NOT NULL,
  reading TEXT DEFAULT '',
  ease REAL DEFAULT 2.5,
  interval_days INTEGER DEFAULT 0,
  due TEXT DEFAULT (date('now')),
  created_at TEXT DEFAULT (datetime('now')),
  UNIQUE(user_id, front)
);
CREATE TABLE IF NOT EXISTS quiz_item_stats (
  user_id INTEGER NOT NULL,
  qid TEXT NOT NULL,
  asked INTEGER DEFAULT 0,
  correct INTEGER DEFAULT 0,
  PRIMARY KEY (user_id, qid)
);
`);

function sign(u) { return jwt.sign({ id: u.id, email: u.email }, JWT_SECRET, { expiresIn: '30d' }); }
function auth(req, res, next) {
  const h = req.headers.authorization || '';
  const t = h.startsWith('Bearer ') ? h.slice(7) : null;
  if (!t) return res.status(401).json({ error: 'Login dulu ya' });
  try { req.user = jwt.verify(t, JWT_SECRET); next(); }
  catch { return res.status(401).json({ error: 'Sesi habis, login lagi' }); }
}

// ---- Auth ----
app.post('/api/auth/register', (req, res) => {
  const { name, email, password, level, intensity } = req.body || {};
  if (!name || !email || !password) return res.status(400).json({ error: 'Lengkapi nama, email, password' });
  if (String(password).length < 4) return res.status(400).json({ error: 'Password minimal 4 karakter' });
  const exists = db.prepare('SELECT id FROM users WHERE email = ?').get(email.toLowerCase());
  if (exists) return res.status(400).json({ error: 'Email sudah terdaftar, silakan login' });
  const hash = bcrypt.hashSync(password, 10);
  const info = db.prepare('INSERT INTO users (name,email,password,level,intensity) VALUES (?,?,?,?,?)')
    .run(name.slice(0, 50), email.toLowerCase().slice(0, 100), hash,
      ['hiragana','katakana','n5','n4','n3','n2','n1'].includes(level) ? level : 'hiragana',
      ['sedikit','sedang','banyak'].includes(intensity) ? intensity : 'sedang');
  const u = db.prepare('SELECT id,name,email,level,intensity,theme,xp,coins FROM users WHERE id = ?').get(info.lastInsertRowid);
  res.status(201).json({ user: u, token: sign(u) });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body || {};
  const u = db.prepare('SELECT * FROM users WHERE email = ?').get((email || '').toLowerCase());
  if (!u || !bcrypt.compareSync(password || '', u.password)) return res.status(401).json({ error: 'Email/password salah' });
  const safe = { id: u.id, name: u.name, email: u.email, level: u.level, intensity: u.intensity, theme: u.theme };
  res.json({ user: safe, token: sign(u) });
});

app.get('/api/me', auth, (req, res) => {
  const u = db.prepare('SELECT id,name,email,level,intensity,theme,xp,coins FROM users WHERE id = ?').get(req.user.id);
  if (!u) return res.status(404).json({ error: 'User tidak ditemukan' });
  res.json({ user: u });
});

app.patch('/api/me', auth, (req, res) => {
  const { theme, intensity, level } = req.body || {};
  const sets = [], vals = [];
  if (['sakura','zen'].includes(theme)) { sets.push('theme = ?'); vals.push(theme); }
  if (['sedikit','sedang','banyak'].includes(intensity)) { sets.push('intensity = ?'); vals.push(intensity); }
  if (['hiragana','katakana','n5','n4','n3','n2','n1'].includes(level)) { sets.push('level = ?'); vals.push(level); }
  if (sets.length) db.prepare(`UPDATE users SET ${sets.join(',')} WHERE id = ?`).run(...vals, req.user.id);
  const u = db.prepare('SELECT id,name,email,level,intensity,theme,xp,coins FROM users WHERE id = ?').get(req.user.id);
  res.json({ user: u });
});

// ---- Progress ----
app.get('/api/progress', auth, (req, res) => {
  const rows = db.prepare('SELECT lesson_key FROM progress WHERE user_id = ? AND done = 1').all(req.user.id);
  res.json({ done: rows.map(r => r.lesson_key) });
});

app.post('/api/progress', auth, (req, res) => {
  const { lesson_key } = req.body || {};
  if (!lesson_key) return res.status(400).json({ error: 'lesson_key wajib' });
  db.prepare(`INSERT INTO progress (user_id, lesson_key, done, updated_at) VALUES (?,?,1,datetime('now'))
    ON CONFLICT(user_id, lesson_key) DO UPDATE SET done = 1, updated_at = datetime('now')`).run(req.user.id, String(lesson_key).slice(0, 80));
  res.json({ ok: true });
});

// ---- Quiz ----
app.post('/api/quiz/result', auth, (req, res) => {
  const { level, score, total } = req.body || {};
  db.prepare('INSERT INTO quiz_results (user_id, level, score, total) VALUES (?,?,?,?)')
    .run(req.user.id, String(level || 'n5').slice(0, 10), Number(score) || 0, Number(total) || 0);
  res.json({ ok: true });
});

app.get('/api/quiz/history', auth, (req, res) => {
  const rows = db.prepare('SELECT level, score, total, created_at FROM quiz_results WHERE user_id = ? ORDER BY id DESC LIMIT 20').all(req.user.id);
  res.json({ history: rows });
});

// ---- Chapter progress (jalur belajar Soumatome) ----
app.get('/api/chapters/progress', auth, (req, res) => {
  const rows = db.prepare('SELECT chapter_id, score, total, passed, updated_at FROM chapter_progress WHERE user_id = ?').all(req.user.id);
  res.json({ progress: rows });
});
app.post('/api/chapters/complete', auth, (req, res) => {
  const { chapter_id, score, total } = req.body || {};
  if (!chapter_id) return res.status(400).json({ error: 'chapter_id wajib' });
  const passed = (Number(score) / Math.max(1, Number(total))) >= 0.7 ? 1 : 0;
  db.prepare(`INSERT INTO chapter_progress (user_id, chapter_id, score, total, passed)
    VALUES (?,?,?,?,?)
    ON CONFLICT(user_id, chapter_id) DO UPDATE SET score=excluded.score, total=excluded.total,
    passed=CASE WHEN excluded.passed=1 THEN 1 ELSE chapter_progress.passed END,
    updated_at=datetime('now')`)
    .run(req.user.id, String(chapter_id).slice(0, 20), Number(score) || 0, Number(total) || 0, passed);
  res.json({ ok: true, passed: !!passed });
});

// ---- Games ----
app.post('/api/game/score', auth, (req, res) => {
  const { game, score } = req.body || {};
  db.prepare('INSERT INTO game_scores (user_id, game, score) VALUES (?,?,?)')
    .run(req.user.id, String(game || 'kana').slice(0, 20), Number(score) || 0);
  res.json({ ok: true });
});

app.get('/api/game/best', auth, (req, res) => {
  const rows = db.prepare('SELECT game, MAX(score) best FROM game_scores WHERE user_id = ? GROUP BY game').all(req.user.id);
  res.json({ best: rows });
});

// ---- Kamus (JMdict + KANJIDIC2, read-only) ----
let kdb = null;
try {
  const kpath = path.join(__dirname, 'data', 'kamus.db');
  if (require('fs').existsSync(kpath)) { kdb = new Database(kpath, { readonly: true }); console.log('[kamus] loaded'); }
} catch (e) { console.log('[kamus] tidak tersedia:', e.message); }


app.get('/api/dict/search', (req, res) => {
  if (!kdb) return res.status(503).json({ error: 'Kamus belum tersedia' });
  const rawQ = (req.query.q || '').trim().toLowerCase().slice(0, 30);
  if (!rawQ) return res.json({ results: [] });
  const lim = Math.min(parseInt(req.query.limit) || 20, 50);
  // token aman untuk FTS5 (maks 4 kata)
  const toks = rawQ.split(/[\s　]+/).filter(Boolean).slice(0, 4)
    .map(t => t.replace(/["*:^()\-+]/g, '').slice(0, 30)).filter(t => t.length > 0);
  if (!toks.length) return res.json({ results: [] });
  try {
    const mapRow = r => ({ id: r.id, keb: JSON.parse(r.keb || '[]'), reb: JSON.parse(r.reb || '[]'), gloss: r.gloss, pos: [...new Set((r.pos || '').split(',').filter(Boolean))].join(', ') });
    const sel = `SELECT w.id, w.keb, w.reb, w.gloss, w.pos, rank
      FROM words_fts f JOIN words w ON w.id = f.rowid
      WHERE words_fts MATCH ? ORDER BY rank LIMIT ?`;
    // Tahap 1: token persis (whole-word) — paling relevan, mis. "eat" -> 食べる
    const exactQ = toks.map(t => `"${t}"`).join(' ');
    const exact = kdb.prepare(sel).all(exactQ, lim);
    const seen = new Set(exact.map(r => r.id));
    // Tahap 2: prefix — sisanya (eating, eater, ...)
    let prefix = [];
    if (exact.length < lim) {
      const prefixQ = toks.map(t => `"${t}"*`).join(' ');
      prefix = kdb.prepare(sel).all(prefixQ, lim + seen.size).filter(r => !seen.has(r.id));
    }
    const rows = [...exact, ...prefix].slice(0, lim);
    res.json({ results: rows.map(mapRow) });
  } catch (e) { res.json({ results: [] }); }
});

app.get('/api/dict/word/:id', (req, res) => {
  if (!kdb) return res.status(503).json({ error: 'Kamus belum tersedia' });
  const w = kdb.prepare('SELECT * FROM words WHERE id = ?').get(req.params.id);
  if (!w) return res.status(404).json({ error: 'Tidak ketemu' });
  w.keb = JSON.parse(w.keb || '[]'); w.reb = JSON.parse(w.reb || '[]');
  w.pos = [...new Set((w.pos || '').split(',').filter(Boolean))].join(', ');
  res.json({ word: w });
});

// ---- Terjemahan kamus EN -> ID (on-demand + cache di DB) ----
db.exec(`CREATE TABLE IF NOT EXISTS translations (word_id INTEGER PRIMARY KEY, gloss_id TEXT, updated_at TEXT DEFAULT (datetime('now')))`);
// terjemahan arti kanji EN -> ID (on-demand + cache di DB)
db.exec(`CREATE TABLE IF NOT EXISTS kanji_translations (ch TEXT PRIMARY KEY, meaning_id TEXT, updated_at TEXT DEFAULT (datetime('now')))`);
// seed terjemahan awal (dibangun offline dari kata populer)
try {
  const seedPath = path.join(__dirname, 'data', 'translations-seed.json');
  if (require('fs').existsSync(seedPath)) {
    const seed = JSON.parse(require('fs').readFileSync(seedPath, 'utf8'));
    const keys = Object.keys(seed);
    const cnt = db.prepare('SELECT COUNT(*) c FROM translations').get().c;
    if (keys.length && cnt < keys.length) {
      const ins = db.prepare('INSERT OR IGNORE INTO translations (word_id, gloss_id) VALUES (?, ?)');
      db.transaction((ks) => { for (const k of ks) ins.run(parseInt(k), seed[k]); })(keys);
      console.log(`[seed] translations dimuat: ${keys.length} kata`);
    }
  }
} catch (e) { console.log('[seed] translations:', e.message); }
async function fetchWithTimeout(url, ms) {
  const c = new AbortController();
  const t = setTimeout(() => c.abort(), ms);
  try { const r = await fetch(url, { signal: c.signal }); return r; }
  finally { clearTimeout(t); }
}
async function translateGlossEN2ID(text) {
  const src = (text || '').slice(0, 450).trim();
  if (!src) return null;
  const q = encodeURIComponent(src);
  // 1) MyMemory (gratis)
  try {
    const r = await fetchWithTimeout(`https://api.mymemory.translated.net/get?q=${q}&langpair=en|id`, 9000);
    const d = await r.json();
    const t = d && d.responseData && d.responseData.translatedText;
    if (t && !/QUERY LENGTH LIMIT|INVALID EMAIL|MYMEMORY WARNING/i.test(t)) return t;
  } catch {}
  // 2) fallback Google gtx (unofficial)
  try {
    const r = await fetchWithTimeout(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=id&dt=t&q=${q}`, 9000);
    const d = await r.json();
    if (Array.isArray(d) && Array.isArray(d[0])) {
      const t = d[0].map(x => x && x[0]).filter(Boolean).join('');
      if (t) return t;
    }
  } catch {}
  return null;
}
app.get('/api/dict/translate/:id', async (req, res) => {
  if (!kdb) return res.status(503).json({ error: 'Kamus belum tersedia' });
  const id = parseInt(req.params.id);
  if (!id) return res.status(400).json({ error: 'ID tidak valid' });
  try {
    const cached = db.prepare('SELECT gloss_id FROM translations WHERE word_id = ?').get(id);
    if (cached && cached.gloss_id) return res.json({ gloss_id: cached.gloss_id, cached: true });
    const w = kdb.prepare('SELECT gloss FROM words WHERE id = ?').get(id);
    if (!w) return res.status(404).json({ error: 'Tidak ketemu' });
    const t = await translateGlossEN2ID(w.gloss);
    if (!t) return res.json({ gloss_id: null, error: 'Terjemahan gagal, coba lagi nanti' });
    db.prepare('INSERT OR REPLACE INTO translations (word_id, gloss_id) VALUES (?, ?)').run(id, t);
    res.json({ gloss_id: t, cached: false });
  } catch (e) { res.status(500).json({ error: 'Gagal menerjemahkan' }); }
});
app.get('/api/kanji/:ch/translate', async (req, res) => {
  if (!kdb) return res.status(503).json({ error: 'Kamus belum tersedia' });
  const ch = String(req.params.ch).slice(0, 1);
  if (!ch) return res.status(400).json({ error: 'Kanji tidak valid' });
  try {
    const cached = db.prepare('SELECT meaning_id FROM kanji_translations WHERE ch = ?').get(ch);
    if (cached && cached.meaning_id) return res.json({ meaning_id: cached.meaning_id, cached: true });
    const k = kdb.prepare('SELECT meaning FROM kanji WHERE ch = ?').get(ch);
    if (!k) return res.status(404).json({ error: 'Tidak ketemu' });
    const t = await translateGlossEN2ID(k.meaning);
    if (!t) return res.json({ meaning_id: null, error: 'Terjemahan gagal, coba lagi nanti' });
    db.prepare('INSERT OR REPLACE INTO kanji_translations (ch, meaning_id) VALUES (?, ?)').run(ch, t);
    res.json({ meaning_id: t, cached: false });
  } catch (e) { res.status(500).json({ error: 'Gagal menerjemahkan' }); }
});

app.get('/api/kanji/search', (req, res) => {
  if (!kdb) return res.status(503).json({ error: 'Kamus belum tersedia' });
  const q = (req.query.q || '').trim().slice(0, 20);
  if (!q) return res.json({ results: [] });
  let rows;
  if (/[\u4e00-\u9faf]/.test(q)) {
    rows = kdb.prepare('SELECT ch, onyomi, kunyomi, meaning, jlpt, strokes FROM kanji WHERE ch = ? LIMIT 5').all(q[0]);
  } else {
    // whole-word match dulu ("eat" cocok utuh, bukan "wheat"/"heating"), freq NULL ke belakang
    const ql = q.toLowerCase();
    rows = kdb.prepare(`SELECT ch, onyomi, kunyomi, meaning, jlpt, strokes,
      CASE WHEN ('; ' || lower(meaning) || '; ') LIKE '%; ' || ? || '; %' THEN 0 ELSE 1 END AS tier
      FROM kanji WHERE meaning LIKE ? ORDER BY tier, COALESCE(freq, 999999) LIMIT 20`).all(ql, `%${ql}%`);
  }
  res.json({ results: rows.map(k => ({ ...k, onyomi: JSON.parse(k.onyomi || '[]'), kunyomi: JSON.parse(k.kunyomi || '[]') })) });
});

// ---- XP / koin (pola Duolingo) ----
function awardXP(uid, amount, reason) {
  if (!amount) return;
  db.prepare('UPDATE users SET xp = xp + ?, coins = coins + ? WHERE id = ?').run(amount, Math.floor(amount / 5), uid);
  db.prepare('INSERT INTO xp_log (user_id, amount, reason) VALUES (?,?,?)').run(uid, amount, reason || '');
}
app.post('/api/xp', auth, (req, res) => {
  const { amount, reason } = req.body || {};
  const a = Math.max(0, Math.min(500, Number(amount) || 0));
  awardXP(req.user.id, a, String(reason || '').slice(0, 60));
  const u = db.prepare('SELECT xp, coins FROM users WHERE id = ?').get(req.user.id);
  res.json({ xp: u.xp, coins: u.coins });
});
app.get('/api/leaderboard', auth, (req, res) => {
  const rows = db.prepare(`
    SELECT u.name, COALESCE(SUM(x.amount),0) wxp
    FROM users u LEFT JOIN xp_log x ON x.user_id = u.id AND x.created_at >= date('now','-6 days')
    GROUP BY u.id ORDER BY wxp DESC LIMIT 10`).all();
  const me = db.prepare(`SELECT COALESCE(SUM(amount),0) wxp FROM xp_log WHERE user_id = ? AND created_at >= date('now','-6 days')`).get(req.user.id).wxp;
  res.json({ board: rows, my_weekly: me });
});

// ---- Muse Sensei (Tanya AI) — dijawab langsung oleh Muse via antrean ----
const ASK_WORKER_SECRET = process.env.ASK_WORKER_SECRET || '';
const askLimit = {}; // userId -> { n, reset }
app.post('/api/ask', auth, async (req, res) => {
  try {
    const q = String(req.body.q || '').trim();
    if (!q) return res.status(400).json({ error: 'Pertanyaannya kosong' });
    if (q.length > 1000) return res.status(400).json({ error: 'Pertanyaan terlalu panjang (maks 1000 karakter)' });
    const uid = req.user.id, now = Date.now();
    const l = askLimit[uid] || { n: 0, reset: now + 3600000 };
    if (now > l.reset) { l.n = 0; l.reset = now + 3600000; }
    if (l.n >= 30) return res.status(429).json({ error: 'Batas 30 pertanyaan/jam tercapai, coba lagi nanti ya' });
    l.n++; askLimit[uid] = l;
    const hist = Array.isArray(req.body.hist) ? req.body.hist.slice(-6).map(m => ({ role: m.role, text: String(m.text || '').slice(0, 500) })) : [];
    const r = db.prepare(`INSERT INTO ask_queue (user_id, question, history) VALUES (?,?,?)`).run(uid, q, JSON.stringify(hist));
    const qid = r.lastInsertRowid;
    // long-poll: tahan koneksi sampai jawaban siap (maks ~150 detik)
    for (let i = 0; i < 75; i++) {
      await new Promise(rr => setTimeout(rr, 2000));
      const row = db.prepare(`SELECT status, answer FROM ask_queue WHERE id = ?`).get(qid);
      if (row && row.status === 'done' && row.answer) return res.json({ a: row.answer });
    }
    res.json({ a: '', pending: true, id: qid });
  } catch (e) {
    res.status(500).json({ error: 'Gagal mengirim pertanyaan' });
  }
});
app.get('/api/ask/result/:id', auth, (req, res) => {
  const row = db.prepare(`SELECT id, status, answer FROM ask_queue WHERE id = ? AND user_id = ?`).get(req.params.id, req.user.id);
  if (!row) return res.status(404).json({ error: 'Tidak ketemu' });
  res.json({ status: row.status, answer: row.answer || '' });
});
// ---- Riwayat chat Tanya AI per akun (ganti localStorage) ----
app.get('/api/ask/history', auth, (req, res) => {
  const rows = db.prepare(`SELECT question q, answer a FROM ask_queue WHERE user_id = ? AND status = 'done' AND answer IS NOT NULL AND answer != '' ORDER BY id DESC LIMIT 25`).all(req.user.id);
  res.json({ history: rows.reverse() });
});
app.delete('/api/ask/history', auth, (req, res) => {
  const r = db.prepare(`DELETE FROM ask_queue WHERE user_id = ?`).run(req.user.id);
  res.json({ ok: true, deleted: r.changes });
});
function workerAuth(req, res, next) {
  if (!ASK_WORKER_SECRET || req.headers['x-worker-secret'] !== ASK_WORKER_SECRET)
    return res.status(403).json({ error: 'forbidden' });
  next();
}
app.get('/api/ask/pending', workerAuth, (req, res) => {
  const rows = db.prepare(`SELECT id, user_id, question, history FROM ask_queue WHERE status = 'pending' ORDER BY id LIMIT 10`).all();
  if (rows.length) db.prepare(`UPDATE ask_queue SET status = 'processing' WHERE id IN (${rows.map(() => '?').join(',')})`).run(...rows.map(r => r.id));
  res.json({ jobs: rows });
});
app.post('/api/ask/answer', workerAuth, (req, res) => {
  const { id, answer } = req.body || {};
  if (!id || !answer) return res.status(400).json({ error: 'id & answer wajib' });
  db.prepare(`UPDATE ask_queue SET status = 'done', answer = ?, answered_at = datetime('now') WHERE id = ?`).run(String(answer).slice(0, 4000), id);
  res.json({ ok: true });
});

// ---- Muse Worker (inline) — proses antrean ask_queue langsung via Gemini ----
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.0-flash';
const MUSE_SYSTEM = `Kamu adalah "Muse Sensei", asisten belajar bahasa Jepang di aplikasi NihongoLearn.
- Ramah, hangat, sabar — seperti sempai yang menyenangkan.
- Fokus: bahasa Jepang (bunpou, kosakata, kanji), persiapan JLPT/JFT/SSW, dan budaya Jepang.
- Saat menjelaskan grammar, beri contoh kalimat + romaji + arti Indonesia.
- Untuk kanji, sebutkan onyomi/kunyomi bila relevan.
- Pertanyaan di luar bahasa Jepang tetap dijawab dengan senang hati, singkat dan membantu.
- Jawab dalam bahasa Indonesia (atau bahasa yang dipakai user). Format jawaban rapi, tidak terlalu panjang.`;

async function museAskGemini(question, history) {
  const contents = history.map(m => ({
    role: m.role === 'ai' ? 'model' : 'user',
    parts: [{ text: String(m.text || '') }],
  }));
  contents.push({ role: 'user', parts: [{ text: question }] });
  const body = {
    system_instruction: { parts: [{ text: MUSE_SYSTEM }] },
    contents,
    generationConfig: { temperature: 0.8, maxOutputTokens: 1024 },
  };
  const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const d = await r.json();
  const reply = d?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!reply) throw new Error(d?.error?.message || 'AI tidak merespon');
  return reply.slice(0, 4000);
}

if (GEMINI_API_KEY) {
  console.log('[muse] worker aktif (Gemini:', GEMINI_MODEL + ')');
  let museBusy = false;
  setInterval(async () => {
    if (museBusy) return;
    museBusy = true;
    try {
      const jobs = db.prepare(`SELECT id, question, history FROM ask_queue WHERE status = 'pending' ORDER BY id LIMIT 3`).all();
      for (const j of jobs) {
        db.prepare(`UPDATE ask_queue SET status = 'processing' WHERE id = ?`).run(j.id);
        try {
          let hist = [];
          try { hist = JSON.parse(j.history || '[]'); } catch {}
          const answer = await museAskGemini(j.question, Array.isArray(hist) ? hist : []);
          db.prepare(`UPDATE ask_queue SET status = 'done', answer = ?, answered_at = datetime('now') WHERE id = ?`).run(answer, j.id);
        } catch (e) {
          console.log('[muse] gagal jawab #' + j.id + ':', e.message);
          db.prepare(`UPDATE ask_queue SET status = 'done', answer = ?, answered_at = datetime('now') WHERE id = ?`)
            .run('😅 Muse Sensei sedang tidak bisa menjawab (layanan AI bermasalah). Coba lagi sebentar lagi ya!', j.id);
        }
      }
    } catch (e) { console.log('[muse] worker error:', e.message); }
    museBusy = false;
  }, 3000);
} else {
  console.log('[muse] GEMINI_API_KEY tidak diset — worker Tanya AI tidak aktif');
}

// ---- SRS flashcards (pola WaniKani/Mazii) ----
app.get('/api/srs', auth, (req, res) => {
  const due = db.prepare(`SELECT * FROM srs_cards WHERE user_id = ? AND date(due) <= date('now') ORDER BY due LIMIT 30`).all(req.user.id);
  const total = db.prepare('SELECT COUNT(*) c FROM srs_cards WHERE user_id = ?').get(req.user.id).c;
  res.json({ due, total });
});
app.post('/api/srs', auth, (req, res) => {
  const { kind, front, back, reading } = req.body || {};
  if (!front || !back) return res.status(400).json({ error: 'front/back wajib' });
  db.prepare(`INSERT INTO srs_cards (user_id, kind, front, back, reading) VALUES (?,?,?,?,?)
    ON CONFLICT(user_id, front) DO NOTHING`)
    .run(req.user.id, String(kind || 'word').slice(0, 10), String(front).slice(0, 80), String(back).slice(0, 200), String(reading || '').slice(0, 80));
  res.json({ ok: true });
});
app.post('/api/srs/review', auth, (req, res) => {
  const { id, ok } = req.body || {};
  const c = db.prepare('SELECT * FROM srs_cards WHERE id = ? AND user_id = ?').get(id, req.user.id);
  if (!c) return res.status(404).json({ error: 'Kartu tidak ketemu' });
  let ease = c.ease, iv = c.interval_days;
  if (ok) { iv = iv === 0 ? 1 : iv === 1 ? 3 : Math.round(iv * ease); ease = Math.min(3, ease + 0.1); }
  else { iv = 0; ease = Math.max(1.3, ease - 0.2); }
  const due = new Date(Date.now() + iv * 864e5).toISOString().slice(0, 10);
  db.prepare('UPDATE srs_cards SET ease = ?, interval_days = ?, due = ? WHERE id = ?').run(ease, iv, due, id);
  if (ok) awardXP(req.user.id, 3, 'flashcard');
  res.json({ ok: true, next_due: due });
});
app.delete('/api/srs/:id', auth, (req, res) => {
  db.prepare('DELETE FROM srs_cards WHERE id = ? AND user_id = ?').run(req.params.id, req.user.id);
  res.json({ ok: true });
});

// ---- Quiz acak: soal baru tiap main (dibuat dari materi, yang sudah dikerjakan disingkirkan dulu) ----
let LESSONS_SRV = null;
try {
  const src = require('fs').readFileSync(path.join(__dirname, 'public', 'js', 'data-lessons.js'), 'utf8');
  LESSONS_SRV = new Function(src + '\nreturn LESSONS;')();
  console.log('[quiz] pool materi dimuat');
} catch (e) { console.log('[quiz] pool gagal:', e.message); }

function shuf(a) {
  const x = a.slice();
  for (let i = x.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[x[i], x[j]] = [x[j], x[i]]; }
  return x;
}
function firstReading(k) {
  const r = ((k.on || '').split(/[・、]/)[0] || (k.kun || '').split(/[・、]/)[0] || '').trim();
  return r;
}
// bangun satu kandidat soal dari materi (dipakai /gen dan /regen)
function buildCandidate(level, type, i) {
  const L = (LESSONS_SRV || {})[level] || {};
  const kotoba = L.kotoba || [], kanji = L.kanji || [];
  const KJ = (w) => (w.kj && w.kj !== w.jp) ? w.kj : w.jp;
  if (type === 'kr' && kotoba[i]) { const w = kotoba[i]; return { qid: `gen:${level}:kr:${i}`, s: 'goi', q: `「${KJ(w)}」の読み方は？`, correct: w.r, pool: kotoba.map(x => x.r) }; }
  if (type === 'km' && kotoba[i]) { const w = kotoba[i]; return { qid: `gen:${level}:km:${i}`, s: 'goi', q: `「${w.jp}」の意味は？`, correct: w.id, pool: kotoba.map(x => x.id) }; }
  if (type === 'kk' && kotoba[i]) { const w = kotoba[i]; return { qid: `gen:${level}:kk:${i}`, s: 'goi', q: `「${w.r}」の正しい漢字は？`, correct: KJ(w), pool: kotoba.map(KJ) }; }
  if (type === 'jm' && kanji[i]) { const k = kanji[i]; return { qid: `gen:${level}:jm:${i}`, s: 'goi', q: `「${k.kj}」の意味は？`, correct: k.id, pool: kanji.map(x => x.id) }; }
  if (type === 'jr' && kanji[i]) { const k = kanji[i]; const rd = firstReading(k); if (!rd) return null; return { qid: `gen:${level}:jr:${i}`, s: 'goi', q: `「${k.kj}」の読み方は？`, correct: rd, pool: kanji.map(x => firstReading(x)).filter(Boolean) }; }
  return null;
}
function finalizeCandidate(c) {
  const distract = shuf([...new Set(c.pool.filter(p => p && p !== c.correct))]).slice(0, 3);
  const opts = shuf([c.correct, ...distract]);
  return { qid: c.qid, s: c.s, q: c.q, o: opts, a: opts.indexOf(c.correct) };
}
app.get('/api/quiz/gen', auth, (req, res) => {
  if (!LESSONS_SRV) return res.status(503).json({ error: 'Bank soal belum siap' });
  const level = ['n5', 'n4', 'n3', 'n2', 'n1'].includes(req.query.level) ? req.query.level : 'n5';
  const count = Math.min(Math.max(parseInt(req.query.count) || 20, 5), 40);
  const L = LESSONS_SRV[level] || {};
  const seen = new Set(db.prepare('SELECT qid FROM quiz_item_stats WHERE user_id = ? AND asked > 0').all(req.user.id).map(r => r.qid));
  const cand = [];
  const kotoba = L.kotoba || [], kanji = L.kanji || [];
  kotoba.forEach((w, i) => { for (const t of ['kr', 'km', 'kk']) { const c = buildCandidate(level, t, i); if (c) cand.push(c); } });
  kanji.forEach((k, i) => { for (const t of ['jm', 'jr']) { const c = buildCandidate(level, t, i); if (c) cand.push(c); } });
  const fresh = shuf(cand.filter(c => !seen.has(c.qid) && c.correct));
  const used = shuf(cand.filter(c => seen.has(c.qid) && c.correct));
  const picked = fresh.concat(used).slice(0, count);
  res.json({ questions: picked.map(finalizeCandidate), fresh: fresh.length });
});
// buat ulang satu soal generated dari qid-nya (untuk Review Cerdas)
app.get('/api/quiz/regen', auth, (req, res) => {
  const m = String(req.query.qid || '').match(/^gen:(n5|n4|n3|n2|n1):(kr|km|kk|jm|jr):(\d+)$/);
  if (!m || !LESSONS_SRV) return res.status(400).json({ error: 'qid tidak valid' });
  const c = buildCandidate(m[1], m[2], parseInt(m[3]));
  if (!c) return res.status(404).json({ error: 'Soal tidak ketemu' });
  res.json({ question: finalizeCandidate(c), level: m[1] });
});
app.get('/api/quiz/seen', auth, (req, res) => {
  const level = String(req.query.level || 'n5');
  const rows = db.prepare('SELECT qid FROM quiz_item_stats WHERE user_id = ? AND asked > 0 AND qid LIKE ?').all(req.user.id, `${level}:%`);
  res.json({ seen: rows.map(r => r.qid) });
});

// ---- Kanji per level JLPT (dari KANJIDIC2; skala lama 4=N5 … 1=N1) ----
app.get('/api/kanji/by-jlpt', (req, res) => {
  if (!kdb) return res.status(503).json({ error: 'Kamus belum tersedia' });
  const map = { 5: 4, 4: 3, 3: 2, 2: 2, 1: 1 };
  const n = parseInt(req.query.n);
  if (!map[n]) return res.status(400).json({ error: 'n harus 1-5' });
  const rows = kdb.prepare('SELECT ch, onyomi, kunyomi, meaning, jlpt, strokes FROM kanji WHERE jlpt = ? ORDER BY freq LIMIT 400').all(map[n]);
  res.json({ results: rows.map(k => ({ ...k, onyomi: JSON.parse(k.onyomi || '[]'), kunyomi: JSON.parse(k.kunyomi || '[]') })) });
});

app.get('/api/kanji/:ch', (req, res) => {
  if (!kdb) return res.status(503).json({ error: 'Kamus belum tersedia' });
  const k = kdb.prepare('SELECT * FROM kanji WHERE ch = ?').get(req.params.ch);
  if (!k) return res.status(404).json({ error: 'Tidak ketemu' });
  k.onyomi = JSON.parse(k.onyomi || '[]'); k.kunyomi = JSON.parse(k.kunyomi || '[]');
  const ch = String(req.params.ch).slice(0, 1);
  // contoh kata: prioritaskan yang diawali kanji ini, yang pendek dulu (lebih umum)
  const words = kdb.prepare(`SELECT id, keb, reb, gloss FROM words WHERE keb LIKE ?
    ORDER BY CASE WHEN keb LIKE '["' || ? || '%' THEN 0 ELSE 1 END, LENGTH(keb) LIMIT 12`).all(`%${ch}%`, ch)
    .map(w => ({ id: w.id, keb: JSON.parse(w.keb || '[]'), reb: JSON.parse(w.reb || '[]'), gloss: w.gloss }));
  res.json({ kanji: k, words });
});
app.post('/api/quiz/items', auth, (req, res) => {
  const { items } = req.body || {};
  if (!Array.isArray(items)) return res.status(400).json({ error: 'items harus array' });
  const up = db.prepare(`INSERT INTO quiz_item_stats (user_id, qid, asked, correct) VALUES (?,?,1,?)
    ON CONFLICT(user_id, qid) DO UPDATE SET asked = asked + 1, correct = correct + excluded.correct`);
  const tx = db.transaction(list => { for (const it of list.slice(0, 200)) up.run(req.user.id, String(it.qid).slice(0, 40), it.ok ? 1 : 0); });
  tx(items);
  res.json({ ok: true });
});
app.get('/api/quiz/weak', auth, (req, res) => {
  const rows = db.prepare(`SELECT qid, asked, correct FROM quiz_item_stats
    WHERE user_id = ? AND asked >= 1 ORDER BY (correct * 1.0 / asked), asked DESC LIMIT 40`).all(req.user.id);
  res.json({ weak: rows });
});

app.get('/api/stats', auth, (req, res) => {
  const lessons = db.prepare('SELECT COUNT(*) c FROM progress WHERE user_id = ?').get(req.user.id).c;
  const quizzes = db.prepare('SELECT COUNT(*) c, AVG(CASE WHEN total > 0 THEN score * 100.0 / total ELSE 0 END) avg FROM quiz_results WHERE user_id = ?').get(req.user.id);
  const streak = db.prepare(`SELECT COUNT(DISTINCT date(updated_at)) c FROM progress WHERE user_id = ? AND date(updated_at) >= date('now','-6 days')`).get(req.user.id).c;
  const ux = db.prepare('SELECT xp, coins FROM users WHERE id = ?').get(req.user.id);
  const srs = db.prepare('SELECT COUNT(*) c FROM srs_cards WHERE user_id = ?').get(req.user.id).c;
  const srsDue = db.prepare(`SELECT COUNT(*) c FROM srs_cards WHERE user_id = ? AND date(due) <= date('now')`).get(req.user.id).c;
  res.json({ lessons_done: lessons, quiz_count: quizzes.c, quiz_avg: Math.round(quizzes.avg || 0), streak_days: streak, xp: ux.xp || 0, coins: ux.coins || 0, srs_total: srs, srs_due: srsDue });
});

app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.listen(PORT, () => console.log(`[nihongo] jalan di http://localhost:${PORT}`));
