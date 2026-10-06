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
// Migrasi: tambah kolom role jika belum ada
try { db.exec(`ALTER TABLE users ADD COLUMN role TEXT DEFAULT 'user'`); } catch {}

function sign(u) { return jwt.sign({ id: u.id, email: u.email, role: u.role || 'user' }, JWT_SECRET, { expiresIn: '30d' }); }
function auth(req, res, next) {
  const h = req.headers.authorization || '';
  const t = h.startsWith('Bearer ') ? h.slice(7) : null;
  if (!t) return res.status(401).json({ error: 'Login dulu ya' });
  try { req.user = jwt.verify(t, JWT_SECRET); next(); }
  catch { return res.status(401).json({ error: 'Sesi habis, login lagi' }); }
}
function admin(req, res, next) {
  auth(req, res, () => {
    // Cek role dari JWT dulu, fallback ke database (untuk token lama)
    let role = req.user.role;
    if (role !== 'admin') {
      try {
        const u = db.prepare('SELECT role FROM users WHERE id = ?').get(req.user.id);
        role = u?.role;
      } catch {}
    }
    if (role !== 'admin') return res.status(403).json({ error: 'Khusus admin' });
    next();
  });
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
  const safe = { id: u.id, name: u.name, email: u.email, level: u.level, intensity: u.intensity, theme: u.theme, role: u.role || 'user' };
  res.json({ user: safe, token: sign(u) });
});

app.get('/api/me', auth, (req, res) => {
  const u = db.prepare('SELECT id,name,email,level,intensity,theme,xp,coins,role FROM users WHERE id = ?').get(req.user.id);
  if (!u) return res.status(404).json({ error: 'User tidak ditemukan' });
  res.json({ user: u });
});
// Bootstrap admin pertama (hanya jika belum ada admin sama sekali)
app.post('/api/admin/bootstrap', auth, (req, res) => {
  const c = db.prepare(`SELECT COUNT(*) c FROM users WHERE role = 'admin'`).get().c;
  if (c > 0) return res.status(403).json({ error: 'Admin sudah ada' });
  db.prepare(`UPDATE users SET role = 'admin' WHERE id = ?`).run(req.user.id);
  const u = db.prepare('SELECT * FROM users WHERE id = ?').get(req.user.id);
  res.json({ ok: true, message: 'Kamu sekarang admin!', token: sign(u) });
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

// Mock Test result
app.post('/api/mocktest/result', auth, (req, res) => {
  const { level, section, score, total } = req.body || {};
  if (!level || !section || score == null || !total) return res.status(400).json({ error: 'Data tidak lengkap' });
  
  // Simpan ke quiz_results dengan format khusus untuk mock test
  const mockLabel = `${level.toUpperCase()}-Mock-${section}`;
  db.prepare('INSERT INTO quiz_results (user_id,level,score,total) VALUES (?,?,?,?)').run(req.user.id, mockLabel, score, total);
  
  // Award XP untuk mock test
  const xpGain = Math.floor(total * 2); // 2 XP per soal
  db.prepare('UPDATE users SET xp = xp + ? WHERE id = ?').run(xpGain, req.user.id);
  db.prepare('INSERT INTO xp_log (user_id, amount, reason) VALUES (?,?,?)').run(req.user.id, xpGain, `Mock test ${mockLabel}`);
  
  res.json({ ok: true, xp: xpGain });
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
  const jlpt = parseInt(req.query.jlpt || '0', 10);
  const limit = Math.min(50, Math.max(1, parseInt(req.query.limit || '20', 10)));
  let rows;
  if (jlpt >= 1 && jlpt <= 5 && !q) {
    rows = kdb.prepare('SELECT ch, onyomi, kunyomi, meaning, jlpt, strokes FROM kanji WHERE jlpt = ? ORDER BY COALESCE(freq, 999999) LIMIT ?').all(jlpt, limit);
  } else if (!q) {
    return res.json({ results: [] });
  } else if (/[\u4e00-\u9faf]/.test(q)) {
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
    GROUP BY u.id ORDER BY wxp DESC LIMIT 5`).all();
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

// ==== ADMIN PANEL API ====
const fss = require('fs');
const vmx = require('vm');

// Koneksi writable ke kamus.db untuk admin (kdb yang ada readonly)
let kdbw = null;
try {
  const kpath = path.join(__dirname, 'data', 'kamus.db');
  if (fss.existsSync(kpath)) { kdbw = new Database(kpath); console.log('[admin] kamus writable loaded'); }
} catch (e) { console.log('[admin] kamus writable gagal:', e.message); }

// Kana -> romaji sederhana (untuk FTS)
function kanaToRomajiAdmin(kana) {
  const map = {'あ':'a','い':'i','う':'u','え':'e','お':'o','か':'ka','き':'ki','く':'ku','け':'ke','こ':'ko','さ':'sa','し':'shi','す':'su','せ':'se','そ':'so','た':'ta','ち':'chi','つ':'tsu','て':'te','と':'to','な':'na','に':'ni','ぬ':'nu','ね':'ne','の':'no','は':'ha','ひ':'hi','ふ':'fu','へ':'he','ほ':'ho','ま':'ma','み':'mi','む':'mu','め':'me','も':'mo','や':'ya','ゆ':'yu','よ':'yo','ら':'ra','り':'ri','る':'ru','れ':'re','ろ':'ro','わ':'wa','を':'wo','ん':'n','が':'ga','ぎ':'gi','ぐ':'gu','げ':'ge','ご':'go','ざ':'za','じ':'ji','ず':'zu','ぜ':'ze','ぞ':'zo','だ':'da','ぢ':'ji','づ':'zu','で':'de','ど':'do','ば':'ba','び':'bi','ぶ':'bu','べ':'be','ぼ':'bo','ぱ':'pa','ぴ':'pi','ぷ':'pu','ぺ':'pe','ぽ':'po','きゃ':'kya','きゅ':'kyu','きょ':'kyo','しゃ':'sha','しゅ':'shu','しょ':'sho','ちゃ':'cha','ちゅ':'chu','ちょ':'cho','にゃ':'nya','にゅ':'nyu','にょ':'nyo','ひゃ':'hya','ひゅ':'hyu','ひょ':'hyo','みゃ':'mya','みゅ':'myu','みょ':'myo','りゃ':'rya','りゅ':'ryu','りょ':'ryo','ぎゃ':'gya','ぎゅ':'gyu','ぎょ':'gyo','じゃ':'ja','じゅ':'ju','じょ':'jo','びゃ':'bya','びゅ':'byu','びょ':'byo','ぴゃ':'pya','ぴゅ':'pyu','ぴょ':'pyo','ア':'a','イ':'i','ウ':'u','エ':'e','オ':'o','カ':'ka','キ':'ki','ク':'ku','ケ':'ke','コ':'ko','サ':'sa','シ':'shi','ス':'su','セ':'se','ソ':'so','タ':'ta','チ':'chi','ツ':'tsu','テ':'te','ト':'to','ナ':'na','ニ':'ni','ヌ':'nu','ネ':'ne','ノ':'no','ハ':'ha','ヒ':'hi','フ':'fu','ヘ':'he','ホ':'ho','マ':'ma','ミ':'mi','ム':'mu','メ':'me','モ':'mo','ヤ':'ya','ユ':'yu','ヨ':'yo','ラ':'ra','リ':'ri','ル':'ru','レ':'re','ロ':'ro','ワ':'wa','ヲ':'wo','ン':'n','ガ':'ga','ギ':'gi','グ':'gu','ゲ':'ge','ゴ':'go','ザ':'za','ジ':'ji','ズ':'zu','ゼ':'ze','ゾ':'zo','ダ':'da','ヂ':'ji','ヅ':'zu','デ':'de','ド':'do','バ':'ba','ビ':'bi','ブ':'bu','ベ':'be','ボ':'bo','パ':'pa','ピ':'pi','プ':'pu','ペ':'pe','ポ':'po','キャ':'kya','キュ':'kyu','キョ':'kyo','シャ':'sha','シュ':'shu','ショ':'sho','チャ':'cha','チュ':'chu','チョ':'cho','ニャ':'nya','ニュ':'nyu','ニョ':'nyo','ヒャ':'hya','ヒュ':'hyu','ヒョ':'hyo','ミャ':'mya','ミュ':'myu','ミョ':'myo','リャ':'rya','リュ':'ryu','リョ':'ryo','ギャ':'gya','ギュ':'gyu','ギョ':'gyo','ジャ':'ja','ジュ':'ju','ジョ':'jo','ビャ':'bya','ビュ':'byu','ビョ':'byo','ピャ':'pya','ピュ':'pyu','ピョ':'pyo','ー':'-','っ':'','ッ':''};
  let out = '', i = 0;
  while (i < kana.length) {
    const two = kana.slice(i, i+2);
    if (map[two]) { out += map[two]; i += 2; continue; }
    const one = kana[i];
    out += map[one] !== undefined ? map[one] : one;
    i++;
  }
  return out;
}

// Sync FTS untuk words
function ftsSyncWord(id, keb, reb, gloss, isDelete) {
  if (!kdbw) return;
  const romaji = JSON.parse(reb || '[]').map(kanaToRomajiAdmin).join(' ');
  if (isDelete) {
    kdbw.prepare(`INSERT INTO words_fts(words_fts, rowid, keb, reb, romaji, gloss) VALUES('delete', ?, ?, ?, ?, ?)`).run(id, keb, reb, romaji, gloss);
  } else {
    kdbw.prepare(`INSERT INTO words_fts(rowid, keb, reb, romaji, gloss) VALUES(?, ?, ?, ?, ?)`).run(id, keb, reb, romaji, gloss);
  }
}

// ---- 1. User management ----
app.get('/api/admin/stats', admin, (req, res) => {
  try {
    const users = db.prepare('SELECT COUNT(*) c FROM users').get().c;
    let kotoba = 0, kanji = 0;
    try { kotoba = kdb.prepare('SELECT COUNT(*) c FROM words').get().c; } catch {}
    try { kanji = kdb.prepare('SELECT COUNT(*) c FROM kanji').get().c; } catch {}
    let soal = 0, pkgs = 0;
    try {
      const dir = path.join(__dirname, 'public/js');
      for (const f of fs.readdirSync(dir)) {
        if (!f.startsWith('data-banksoal') || !f.endsWith('.js')) continue;
        const txt = fs.readFileSync(path.join(dir, f), 'utf8');
        const m = txt.match(/BANK_PACKAGES\s*=\s*(\[[\s\S]*?\]);/);
        if (m) {
          const arr = eval(m[1]);
          pkgs += arr.length;
          for (const p of arr) soal += (p.questions || []).length;
        }
      }
    } catch {}
    let chapters = 0;
    try {
      const txt = fs.readFileSync(path.join(__dirname, 'public/js/data-chapters.js'), 'utf8');
      const m = txt.match(/CHAPTERS\s*=\s*(\{[\s\S]*?\});/);
      if (m) { const o = eval('(' + m[1] + ')'); for (const k in o) chapters += o[k].length; }
    } catch {}
    res.json({ users, kotoba, kanji, soal, pkgs, chapters });
  } catch (e) { res.status(500).json({ error: e.message }); }
});
app.get('/api/admin/users', admin, (req, res) => {
  const rows = db.prepare('SELECT id, name, email, level, role, xp, coins, created_at FROM users ORDER BY id DESC LIMIT 200').all();
  res.json({ users: rows });
});

app.post('/api/admin/users/:id/role', admin, (req, res) => {
  const { role } = req.body || {};
  if (!['admin', 'user'].includes(role)) return res.status(400).json({ error: 'role harus admin atau user' });
  const u = db.prepare('SELECT id FROM users WHERE id = ?').get(req.params.id);
  if (!u) return res.status(404).json({ error: 'User tidak ketemu' });
  db.prepare('UPDATE users SET role = ? WHERE id = ?').run(role, req.params.id);
  res.json({ ok: true });
});

// ---- 2. Kamus Kotoba ----
app.get('/api/admin/kotoba', admin, (req, res) => {
  if (!kdbw) return res.status(503).json({ error: 'Kamus tidak tersedia' });
  const q = (req.query.q || '').trim().slice(0, 50);
  const lim = Math.min(parseInt(req.query.limit) || 20, 100);
  let rows;
  if (q) {
    rows = kdbw.prepare(`SELECT id, keb, reb, gloss, pos FROM words WHERE keb LIKE ? OR reb LIKE ? OR gloss LIKE ? LIMIT ?`).all(`%${q}%`, `%${q}%`, `%${q}%`, lim);
  } else {
    rows = kdbw.prepare(`SELECT id, keb, reb, gloss, pos FROM words ORDER BY id DESC LIMIT ?`).all(lim);
  }
  res.json({ results: rows.map(r => ({ ...r, keb: JSON.parse(r.keb || '[]'), reb: JSON.parse(r.reb || '[]') })) });
});

app.post('/api/admin/kotoba', admin, (req, res) => {
  if (!kdbw) return res.status(503).json({ error: 'Kamus tidak tersedia' });
  const { keb, reb, gloss, pos } = req.body || {};
  if (!reb || !gloss) return res.status(400).json({ error: 'reb (kana) dan gloss (arti) wajib' });
  const kebS = JSON.stringify(Array.isArray(keb) ? keb : [String(keb || '')].filter(Boolean));
  const rebS = JSON.stringify(Array.isArray(reb) ? reb : [String(reb)]);
  const info = kdbw.prepare('INSERT INTO words (keb, reb, gloss, pos) VALUES (?, ?, ?, ?)').run(kebS, rebS, String(gloss).slice(0, 500), String(pos || '').slice(0, 50));
  ftsSyncWord(info.lastInsertRowid, kebS, rebS, String(gloss).slice(0, 500), false);
  res.status(201).json({ ok: true, id: info.lastInsertRowid });
});

app.put('/api/admin/kotoba/:id', admin, (req, res) => {
  if (!kdbw) return res.status(503).json({ error: 'Kamus tidak tersedia' });
  const cur = kdbw.prepare('SELECT * FROM words WHERE id = ?').get(req.params.id);
  if (!cur) return res.status(404).json({ error: 'Kata tidak ketemu' });
  const { keb, reb, gloss, pos } = req.body || {};
  const kebS = keb !== undefined ? JSON.stringify(Array.isArray(keb) ? keb : [String(keb)].filter(Boolean)) : cur.keb;
  const rebS = reb !== undefined ? JSON.stringify(Array.isArray(reb) ? reb : [String(reb)]) : cur.reb;
  const glossS = gloss !== undefined ? String(gloss).slice(0, 500) : cur.gloss;
  const posS = pos !== undefined ? String(pos).slice(0, 50) : cur.pos;
  ftsSyncWord(cur.id, cur.keb, cur.reb, cur.gloss, true);
  kdbw.prepare('UPDATE words SET keb = ?, reb = ?, gloss = ?, pos = ? WHERE id = ?').run(kebS, rebS, glossS, posS, req.params.id);
  ftsSyncWord(cur.id, kebS, rebS, glossS, false);
  res.json({ ok: true });
});

app.delete('/api/admin/kotoba/:id', admin, (req, res) => {
  if (!kdbw) return res.status(503).json({ error: 'Kamus tidak tersedia' });
  const cur = kdbw.prepare('SELECT * FROM words WHERE id = ?').get(req.params.id);
  if (!cur) return res.status(404).json({ error: 'Kata tidak ketemu' });
  ftsSyncWord(cur.id, cur.keb, cur.reb, cur.gloss, true);
  kdbw.prepare('DELETE FROM words WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

// ---- 3. Kamus Kanji ----
app.get('/api/admin/kanji', admin, (req, res) => {
  if (!kdbw) return res.status(503).json({ error: 'Kamus tidak tersedia' });
  const q = (req.query.q || '').trim().slice(0, 20);
  const jlpt = parseInt(req.query.jlpt || '0');
  const lim = Math.min(parseInt(req.query.limit) || 50, 200);
  let rows;
  if (q) {
    rows = kdbw.prepare('SELECT ch, onyomi, kunyomi, meaning, jlpt, strokes FROM kanji WHERE ch = ? OR meaning LIKE ? LIMIT ?').all(q[0], `%${q}%`, lim);
  } else if (jlpt >= 1 && jlpt <= 5) {
    rows = kdbw.prepare('SELECT ch, onyomi, kunyomi, meaning, jlpt, strokes FROM kanji WHERE jlpt = ? LIMIT ?').all(jlpt, lim);
  } else {
    rows = kdbw.prepare('SELECT ch, onyomi, kunyomi, meaning, jlpt, strokes FROM kanji LIMIT ?').all(lim);
  }
  res.json({ results: rows.map(r => ({ ...r, onyomi: JSON.parse(r.onyomi || '[]'), kunyomi: JSON.parse(r.kunyomi || '[]') })) });
});

app.post('/api/admin/kanji', admin, (req, res) => {
  if (!kdbw) return res.status(503).json({ error: 'Kamus tidak tersedia' });
  const { ch, onyomi, kunyomi, meaning, jlpt, strokes } = req.body || {};
  if (!ch || !meaning) return res.status(400).json({ error: 'ch (kanji) dan meaning wajib' });
  const exists = kdbw.prepare('SELECT ch FROM kanji WHERE ch = ?').get(ch);
  if (exists) return res.status(400).json({ error: 'Kanji sudah ada' });
  kdbw.prepare('INSERT INTO kanji (ch, onyomi, kunyomi, meaning, jlpt, strokes) VALUES (?, ?, ?, ?, ?, ?)')
    .run(String(ch).slice(0, 5), JSON.stringify(onyomi || []), JSON.stringify(kunyomi || []), String(meaning).slice(0, 500), parseInt(jlpt) || null, parseInt(strokes) || null);
  res.status(201).json({ ok: true });
});

app.put('/api/admin/kanji/:ch', admin, (req, res) => {
  if (!kdbw) return res.status(503).json({ error: 'Kamus tidak tersedia' });
  const cur = kdbw.prepare('SELECT * FROM kanji WHERE ch = ?').get(req.params.ch);
  if (!cur) return res.status(404).json({ error: 'Kanji tidak ketemu' });
  const { onyomi, kunyomi, meaning, jlpt, strokes } = req.body || {};
  kdbw.prepare('UPDATE kanji SET onyomi = ?, kunyomi = ?, meaning = ?, jlpt = ?, strokes = ? WHERE ch = ?').run(
    onyomi !== undefined ? JSON.stringify(onyomi) : cur.onyomi,
    kunyomi !== undefined ? JSON.stringify(kunyomi) : cur.kunyomi,
    meaning !== undefined ? String(meaning).slice(0, 500) : cur.meaning,
    jlpt !== undefined ? parseInt(jlpt) || null : cur.jlpt,
    strokes !== undefined ? parseInt(strokes) || null : cur.strokes,
    req.params.ch
  );
  res.json({ ok: true });
});

app.delete('/api/admin/kanji/:ch', admin, (req, res) => {
  if (!kdbw) return res.status(503).json({ error: 'Kamus tidak tersedia' });
  const cur = kdbw.prepare('SELECT ch FROM kanji WHERE ch = ?').get(req.params.ch);
  if (!cur) return res.status(404).json({ error: 'Kanji tidak ketemu' });
  kdbw.prepare('DELETE FROM kanji WHERE ch = ?').run(req.params.ch);
  res.json({ ok: true });
});

// ---- 4. Bank Soal (file-based) ----
const BANK_DIR = path.join(__dirname, 'public', 'js');
function loadAllPackages() {
  const allPkgs = [];
  const pkgFiles = {};
  const files = fss.readdirSync(BANK_DIR).filter(f => f.startsWith('data-banksoal') && f.endsWith('.js')).sort();
  for (const f of files) {
    try {
      const code = fss.readFileSync(path.join(BANK_DIR, f), 'utf8');
      const ctx = { BANK_PACKAGES: [] };
      vmx.createContext(ctx);
      vmx.runInContext(code, ctx);
      // Kumpulkan dari semua pola: push ke BANK_PACKAGES + const array
      let pkgs = [];
      try { const bp = vmx.runInContext('BANK_PACKAGES', ctx); if (Array.isArray(bp)) pkgs = pkgs.concat(bp); } catch {}
      const mAll = [...code.matchAll(/const (BANK_PACKAGES\w*) =/g)];
      for (const m of mAll) {
        try {
          const arr = vmx.runInContext(m[1], ctx);
          if (Array.isArray(arr)) for (const p of arr) if (p && p.id && !pkgs.find(x => x.id === p.id)) pkgs.push(p);
        } catch {}
      }
      for (const p of pkgs) {
        if (p && p.id) {
          if (!allPkgs.find(x => x.id === p.id)) allPkgs.push(p);
          if (!pkgFiles[p.id]) pkgFiles[p.id] = f;
        }
      }
    } catch (e) { console.log('[admin] gagal load', f, e.message); }
  }
  return { packages: allPkgs, pkgFiles };
}

app.get('/api/admin/banksoal', admin, (req, res) => {
  const { packages, pkgFiles } = loadAllPackages();
  res.json({ packages: packages.map(p => ({ id: p.id, title: p.title, level: p.level, cat: p.cat, year: p.year, session: p.session, soal: (p.questions || []).length, file: pkgFiles[p.id] || '?' })) });
});

app.get('/api/admin/banksoal/:id', admin, (req, res) => {
  const { packages } = loadAllPackages();
  const p = packages.find(x => x.id === req.params.id);
  if (!p) return res.status(404).json({ error: 'Paket tidak ketemu' });
  res.json({ package: p });
});

app.post('/api/admin/banksoal', admin, (req, res) => {
  const { id, title, level, cat, year, session, sections, questions } = req.body || {};
  if (!id || !title || !questions) return res.status(400).json({ error: 'id, title, questions wajib' });
  if (!/^[a-z0-9-]+$/.test(id)) return res.status(400).json({ error: 'id hanya boleh huruf kecil, angka, strip' });
  const { packages } = loadAllPackages();
  if (packages.find(p => p.id === id)) return res.status(400).json({ error: 'id sudah dipakai' });
  // Validasi questions
  if (!Array.isArray(questions) || !questions.length) return res.status(400).json({ error: 'questions harus array tidak kosong' });
  for (const qq of questions) {
    if (!qq.q || !Array.isArray(qq.o) || qq.o.length < 2) return res.status(400).json({ error: 'Setiap soal butuh q dan minimal 2 opsi' });
  }
  const pkg = { id, cat: cat || 'jlpt', field: null, level: level || 'n5', year: year || null, session: session || null, title, source: 'admin panel', note: '', sections: sections || [], questions };
  const customFile = path.join(BANK_DIR, 'data-banksoal-custom.js');
  let arr = [];
  if (fss.existsSync(customFile)) {
    try {
      const ctx = { BANK_PACKAGES: [] };
      vmx.createContext(ctx);
      vmx.runInContext(fss.readFileSync(customFile, 'utf8'), ctx);
      const m = fss.readFileSync(customFile, 'utf8').match(/const (BANK_PACKAGES_\w+) =/);
      if (m) { const a = vmx.runInContext(m[1], ctx); if (Array.isArray(a)) arr = a; }
    } catch {}
  }
  arr.push(pkg);
  const out = `// Bank soal custom — via admin panel.\nconst BANK_PACKAGES_CUSTOM = ${JSON.stringify(arr, null, 2)};\nBANK_PACKAGES.push(...BANK_PACKAGES_CUSTOM);\n`;
  fss.writeFileSync(customFile, out);
  try { vmx.runInContext(out, vmx.createContext({ BANK_PACKAGES: [] })); } catch (e) { return res.status(500).json({ error: 'Gagal validasi: ' + e.message }); }
  res.status(201).json({ ok: true, id });
});

function rewritePackageFile(filename, pkgId, newPkg) {
  // newPkg = object (update) atau null (hapus)
  const fp = path.join(BANK_DIR, filename);
  let code = fss.readFileSync(fp, 'utf8');
  // Coba pola array: const XXX = [...]
  const arrMatch = code.match(/const (BANK_PACKAGES_\w+|BANK_PACKAGES) = (\[[\s\S]*?\n\]);/);
  if (arrMatch) {
    const ctx = { BANK_PACKAGES: [] };
    vmx.createContext(ctx);
    // Evaluasi hanya bagian array
    const arr = vmx.runInContext(arrMatch[2], ctx);
    let found = false;
    const updated = arr.map(p => {
      if (p && p.id === pkgId) { found = true; return newPkg; }
      return p;
    }).filter(Boolean);
    if (!found) return false;
    const newCode = code.replace(arrMatch[0], `const ${arrMatch[1]} = ${JSON.stringify(updated, null, 2)};`);
    fss.writeFileSync(fp, newCode);
    return true;
  }
  // Pola push langsung: BANK_PACKAGES.push({...}); — cari objek dengan id tersebut
  // Gunakan pendekatan: parse semua push, rebuild file
  const pushRe = /BANK_PACKAGES\.push\(\s*(\{[\s\S]*?\n\})\s*\);/g;
  const pushes = [];
  let m, lastIdx = 0, header = '';
  const parts = [];
  while ((m = pushRe.exec(code)) !== null) {
    if (!header) header = code.slice(0, m.index);
    try {
      const obj = vmx.runInContext('(' + m[1] + ')', vmx.createContext({}));
      pushes.push({ obj, raw: m[0] });
    } catch { pushes.push({ obj: null, raw: m[0] }); }
  }
  if (!pushes.length) return false;
  let found = false;
  const newPushes = [];
  for (const p of pushes) {
    if (p.obj && p.obj.id === pkgId) {
      found = true;
      if (newPkg) newPushes.push(`BANK_PACKAGES.push(\n${JSON.stringify(newPkg, null, 2)}\n);`);
    } else {
      newPushes.push(p.raw);
    }
  }
  if (!found) return false;
  fss.writeFileSync(fp, header + newPushes.join('\n') + '\n');
  return true;
}

app.put('/api/admin/banksoal/:id', admin, (req, res) => {
  const { packages, pkgFiles } = loadAllPackages();
  const cur = packages.find(p => p.id === req.params.id);
  if (!cur) return res.status(404).json({ error: 'Paket tidak ketemu' });
  const file = pkgFiles[req.params.id];
  if (!file) return res.status(500).json({ error: 'File sumber tidak ketemu' });
  const b = req.body || {};
  const updated = { ...cur, ...b, id: cur.id };
  if (b.questions) {
    if (!Array.isArray(b.questions) || !b.questions.length) return res.status(400).json({ error: 'questions harus array tidak kosong' });
  }
  if (!rewritePackageFile(file, req.params.id, updated)) return res.status(500).json({ error: 'Gagal update file' });
  try { loadAllPackages(); } catch (e) { return res.status(500).json({ error: 'File rusak setelah update: ' + e.message }); }
  res.json({ ok: true });
});

app.delete('/api/admin/banksoal/:id', admin, (req, res) => {
  const { packages, pkgFiles } = loadAllPackages();
  const cur = packages.find(p => p.id === req.params.id);
  if (!cur) return res.status(404).json({ error: 'Paket tidak ketemu' });
  const file = pkgFiles[req.params.id];
  if (!file) return res.status(500).json({ error: 'File sumber tidak ketemu' });
  if (!rewritePackageFile(file, req.params.id, null)) return res.status(500).json({ error: 'Gagal hapus dari file' });
  res.json({ ok: true });
});

// ---- Per-soal CRUD ----
function getPkgQuestions(pkgId) {
  const { packages, pkgFiles } = loadAllPackages();
  const cur = packages.find(p => p.id === pkgId);
  if (!cur) return { error: 'Paket tidak ketemu', status: 404 };
  const file = pkgFiles[pkgId];
  if (!file) return { error: 'File sumber tidak ketemu', status: 500 };
  return { pkg: cur, file, questions: cur.questions || [] };
}
function savePkgQuestions(pkgId, pkg, file, questions) {
  const updated = { ...pkg, questions };
  if (!rewritePackageFile(file, pkgId, updated)) return false;
  try { loadAllPackages(); } catch { return false; }
  return true;
}
app.get('/api/admin/banksoal/:id/questions', admin, (req, res) => {
  const r = getPkgQuestions(req.params.id);
  if (r.error) return res.status(r.status).json({ error: r.error });
  res.json({ questions: r.questions });
});
app.post('/api/admin/banksoal/:id/questions', admin, (req, res) => {
  const r = getPkgQuestions(req.params.id);
  if (r.error) return res.status(r.status).json({ error: r.error });
  const b = req.body || {};
  if (!b.q || !Array.isArray(b.o) || b.o.length < 2) return res.status(400).json({ error: 'q (soal) dan o (opsi, min 2) wajib' });
  const qs = [...r.questions];
  const no = b.no || (qs.length ? Math.max(...qs.map(q => q.no || 0)) + 1 : 1);
  qs.push({ no, sec: b.sec || 'goi', q: String(b.q), o: b.o.map(String), a: b.a ?? null, ex: String(b.ex || '') });
  if (!savePkgQuestions(req.params.id, r.pkg, r.file, qs)) return res.status(500).json({ error: 'Gagal simpan' });
  res.status(201).json({ ok: true, no });
});
app.put('/api/admin/banksoal/:id/questions/:qi', admin, (req, res) => {
  const r = getPkgQuestions(req.params.id);
  if (r.error) return res.status(r.status).json({ error: r.error });
  const qi = parseInt(req.params.qi);
  if (isNaN(qi) || qi < 0 || qi >= r.questions.length) return res.status(404).json({ error: 'Soal tidak ketemu' });
  const b = req.body || {};
  const qs = [...r.questions];
  const cur = { ...qs[qi] };
  if (b.q !== undefined) cur.q = String(b.q);
  if (b.o !== undefined) { if (!Array.isArray(b.o) || b.o.length < 2) return res.status(400).json({ error: 'o harus array min 2 opsi' }); cur.o = b.o.map(String); }
  if (b.a !== undefined) cur.a = b.a;
  if (b.ex !== undefined) cur.ex = String(b.ex);
  if (b.sec !== undefined) cur.sec = String(b.sec);
  if (b.no !== undefined) cur.no = parseInt(b.no) || cur.no;
  qs[qi] = cur;
  if (!savePkgQuestions(req.params.id, r.pkg, r.file, qs)) return res.status(500).json({ error: 'Gagal simpan' });
  res.json({ ok: true });
});
app.delete('/api/admin/banksoal/:id/questions/:qi', admin, (req, res) => {
  const r = getPkgQuestions(req.params.id);
  if (r.error) return res.status(r.status).json({ error: r.error });
  const qi = parseInt(req.params.qi);
  if (isNaN(qi) || qi < 0 || qi >= r.questions.length) return res.status(404).json({ error: 'Soal tidak ketemu' });
  const qs = r.questions.filter((_, i) => i !== qi);
  if (!savePkgQuestions(req.params.id, r.pkg, r.file, qs)) return res.status(500).json({ error: 'Gagal hapus' });
  res.json({ ok: true });
});

// ---- 5. Chapters ----
function loadChapters() {
  const fp = path.join(BANK_DIR, 'data-chapters.js');
  const code = fss.readFileSync(fp, 'utf8');
  const ctx = {};
  vmx.createContext(ctx);
  vmx.runInContext(code, ctx);
  return { chapters: vmx.runInContext('CHAPTERS', ctx), file: fp };
}

app.get('/api/admin/chapters', admin, (req, res) => {
  const { chapters } = loadChapters();
  const lv = (req.query.level || '').toLowerCase();
  const list = [];
  const levels = lv ? [lv] : Object.keys(chapters);
  for (const l of levels) {
    if (!chapters[l]) continue;
    for (const ch of chapters[l]) list.push({ level: l, bab: ch.bab, id: ch.id, title: ch.title, desc: ch.desc || '' });
  }
  res.json({ chapters: list });
});

app.get('/api/admin/chapters/:id', admin, (req, res) => {
  const { chapters } = loadChapters();
  const id = req.params.id;
  for (const lv of Object.keys(chapters)) {
    const ch = chapters[lv].find(c => c.id === id);
    if (ch) {
      const pen = (ch.sections || []).find(s => s.type === 'penjelasan');
      return res.json({ chapter: { ...ch, penjelasan: pen ? pen.body : '' } });
    }
  }
  res.status(404).json({ error: 'Bab tidak ketemu' });
});

app.put('/api/admin/chapters/:id', admin, (req, res) => {
  const { chapters, file } = loadChapters();
  const id = req.params.id;
  let target = null;
  for (const lv of Object.keys(chapters)) {
    const i = chapters[lv].findIndex(c => c.id === id);
    if (i >= 0) { target = { lv, i }; break; }
  }
  if (!target) return res.status(404).json({ error: 'Bab tidak ketemu' });
  const ch = chapters[target.lv][target.i];
  const b = req.body || {};
  if (b.title !== undefined) ch.title = String(b.title).slice(0, 200);
  if (b.desc !== undefined) ch.desc = String(b.desc).slice(0, 500);
  if (b.icon !== undefined) ch.icon = String(b.icon).slice(0, 10);
  if (b.penjelasan !== undefined) {
    if (!ch.sections) ch.sections = [];
    let pen = ch.sections.find(s => s.type === 'penjelasan');
    if (!pen) { pen = { type: 'penjelasan', title: ch.title, body: '' }; ch.sections.unshift(pen); }
    pen.body = String(b.penjelasan);
    pen.title = ch.title;
  }
  if (b.sections !== undefined && Array.isArray(b.sections)) ch.sections = b.sections;
  const code = fss.readFileSync(file, 'utf8');
  const startIdx = code.indexOf('const CHAPTERS =');
  if (startIdx < 0) return res.status(500).json({ error: 'Gagal menemukan blok CHAPTERS' });
  // File hanya berisi CHAPTERS, replace dari deklarasi sampai akhir
  const newCode = code.slice(0, startIdx) + `const CHAPTERS = ${JSON.stringify(chapters, null, 2)};\n`;
  fss.writeFileSync(file, newCode);
  try { loadChapters(); } catch (e) { return res.status(500).json({ error: 'File rusak: ' + e.message }); }
  res.json({ ok: true });
});

app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.listen(PORT, () => console.log(`[nihongo] jalan di http://localhost:${PORT}`));
