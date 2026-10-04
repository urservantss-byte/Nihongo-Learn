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
CREATE TABLE IF NOT EXISTS game_scores (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  game TEXT NOT NULL,
  score INTEGER NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
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

function ftsQ(q) {
  // sanitasi untuk FTS5 MATCH: ambil token aman
  const toks = (q || '').toLowerCase().split(/[\s　]+/).filter(Boolean).slice(0, 4)
    .map(t => t.replace(/["*:^()\-+]/g, '').slice(0, 30)).filter(t => t.length > 0);
  if (!toks.length) return null;
  return toks.map(t => `"${t}"*`).join(' ');
}

app.get('/api/dict/search', (req, res) => {
  if (!kdb) return res.status(503).json({ error: 'Kamus belum tersedia' });
  const mq = ftsQ(req.query.q);
  if (!mq) return res.json({ results: [] });
  const lim = Math.min(parseInt(req.query.limit) || 20, 50);
  try {
    const rows = kdb.prepare(`
      SELECT w.id, w.keb, w.reb, w.gloss, w.pos, rank
      FROM words_fts f JOIN words w ON w.id = f.rowid
      WHERE words_fts MATCH ? ORDER BY rank LIMIT ?`).all(mq, lim);
    res.json({ results: rows.map(r => ({ id: r.id, keb: JSON.parse(r.keb || '[]'), reb: JSON.parse(r.reb || '[]'), gloss: r.gloss, pos: [...new Set((r.pos || '').split(',').filter(Boolean))].join(', ') })) });
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

app.get('/api/kanji/search', (req, res) => {
  if (!kdb) return res.status(503).json({ error: 'Kamus belum tersedia' });
  const q = (req.query.q || '').trim().slice(0, 20);
  if (!q) return res.json({ results: [] });
  let rows;
  if (/[\u4e00-\u9faf]/.test(q)) {
    rows = kdb.prepare('SELECT ch, onyomi, kunyomi, meaning, jlpt, strokes FROM kanji WHERE ch = ? LIMIT 5').all(q[0]);
  } else {
    rows = kdb.prepare('SELECT ch, onyomi, kunyomi, meaning, jlpt, strokes FROM kanji WHERE meaning LIKE ? ORDER BY freq LIMIT 20').all(`%${q}%`);
  }
  res.json({ results: rows.map(k => ({ ...k, onyomi: JSON.parse(k.onyomi || '[]'), kunyomi: JSON.parse(k.kunyomi || '[]') })) });
});

app.get('/api/kanji/:ch', (req, res) => {
  if (!kdb) return res.status(503).json({ error: 'Kamus belum tersedia' });
  const k = kdb.prepare('SELECT * FROM kanji WHERE ch = ?').get(req.params.ch);
  if (!k) return res.status(404).json({ error: 'Tidak ketemu' });
  k.onyomi = JSON.parse(k.onyomi || '[]'); k.kunyomi = JSON.parse(k.kunyomi || '[]');
  const ch = String(req.params.ch).slice(0, 1);
  const words = kdb.prepare('SELECT id, keb, reb, gloss FROM words WHERE keb LIKE ? LIMIT 12').all(`%${ch}%`)
    .map(w => ({ id: w.id, keb: JSON.parse(w.keb || '[]'), reb: JSON.parse(w.reb || '[]'), gloss: w.gloss }));
  res.json({ kanji: k, words });
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

// ---- Statistik per soal (pola Renshuu: review adaptif) ----
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
