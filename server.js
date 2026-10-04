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
  const u = db.prepare('SELECT id,name,email,level,intensity,theme FROM users WHERE id = ?').get(info.lastInsertRowid);
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
  const u = db.prepare('SELECT id,name,email,level,intensity,theme FROM users WHERE id = ?').get(req.user.id);
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
  const u = db.prepare('SELECT id,name,email,level,intensity,theme FROM users WHERE id = ?').get(req.user.id);
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

// ---- Stats ----
app.get('/api/stats', auth, (req, res) => {
  const lessons = db.prepare('SELECT COUNT(*) c FROM progress WHERE user_id = ?').get(req.user.id).c;
  const quizzes = db.prepare('SELECT COUNT(*) c, AVG(CASE WHEN total > 0 THEN score * 100.0 / total ELSE 0 END) avg FROM quiz_results WHERE user_id = ?').get(req.user.id);
  const streak = db.prepare(`SELECT COUNT(DISTINCT date(updated_at)) c FROM progress WHERE user_id = ? AND date(updated_at) >= date('now','-6 days')`).get(req.user.id).c;
  res.json({ lessons_done: lessons, quiz_count: quizzes.c, quiz_avg: Math.round(quizzes.avg || 0), streak_days: streak });
});

app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.listen(PORT, () => console.log(`[nihongo] jalan di http://localhost:${PORT}`));
