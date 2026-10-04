/* Nihongo Learn — Vue 3 SPA (redesign bersih + 7 pola referensi) */
const { createApp, reactive } = Vue;

const store = reactive({
  user: null, token: localStorage.getItem('nl_token') || '',
  theme: localStorage.getItem('nl_theme') || 'sakura',
  done: [], stats: null, quizHist: [], board: [],
});
function saveToken(t) { store.token = t || ''; t ? localStorage.setItem('nl_token', t) : localStorage.removeItem('nl_token'); }
async function api(p, o = {}) {
  const h = { 'Content-Type': 'application/json' };
  if (store.token) h['Authorization'] = 'Bearer ' + store.token;
  const r = await fetch(p, { ...o, headers: { ...h, ...(o.headers || {}) } });
  const d = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(d.error || 'Gagal');
  return d;
}
function toast(m) {
  const e = document.createElement('div'); e.className = 'toast'; e.textContent = m;
  document.body.appendChild(e); setTimeout(() => e.remove(), 2600);
}
function speak(jp) {
  try {
    const u = new SpeechSynthesisUtterance(jp); u.lang = 'ja-JP'; u.rate = 0.85;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  } catch {}
}
function setTheme(t) {
  store.theme = t; document.documentElement.dataset.theme = t;
  localStorage.setItem('nl_theme', t);
  if (store.user) api('/api/me', { method: 'PATCH', body: JSON.stringify({ theme: t }) }).catch(() => {});
}
setTheme(store.theme);

function illus(kind) {
  const P = 'var(--pri)', A = 'var(--acc)';
  const m = {
    hiragana: `<svg class="illus" viewBox="0 0 200 120"><text x="40" y="80" font-size="56" fill="${P}">あ</text><text x="105" y="80" font-size="56" fill="${A}">ア</text><circle cx="170" cy="30" r="12" fill="${P}" opacity=".3"/></svg>`,
    study: `<svg class="illus" viewBox="0 0 200 120"><rect x="60" y="20" width="80" height="60" rx="8" fill="${A}" opacity=".25"/><text x="85" y="62" font-size="28">📚</text><text x="40" y="105" font-size="20" fill="${P}">が</text><text x="150" y="105" font-size="20" fill="${A}">ん</text></svg>`,
    quiz: `<svg class="illus" viewBox="0 0 200 120"><circle cx="100" cy="55" r="34" fill="none" stroke="${P}" stroke-width="8"/><text x="88" y="68" font-size="26" fill="${P}">?</text><text x="150" y="40" font-size="22">⏱️</text></svg>`,
    game: `<svg class="illus" viewBox="0 0 200 120"><rect x="30" y="30" width="60" height="60" rx="12" fill="${P}" opacity=".3"/><rect x="110" y="30" width="60" height="60" rx="12" fill="${A}" opacity=".3"/><text x="48" y="70" font-size="28">か</text><text x="128" y="70" font-size="28">ka</text></svg>`,
    trophy: `<svg class="illus" viewBox="0 0 200 120"><text x="75" y="80" font-size="56">🏆</text><circle cx="160" cy="30" r="10" fill="${P}" opacity=".4"/></svg>`,
  };
  return m[kind] || m.study;
}

// maskot berkembang sesuai XP (pola cozy Renshuu/Kanshudo)
function mascotFor(xp) {
  xp = xp || 0;
  if (xp >= 1200) return { e: '🐉', t: 'Master Nihongo', next: null };
  if (xp >= 600) return { e: '🦅', t: 'Petarung Bahasa', next: 1200 };
  if (xp >= 300) return { e: '🦉', t: 'Pembelajar Tekun', next: 600 };
  if (xp >= 100) return { e: '🐥', t: 'Penetas Semangat', next: 300 };
  return { e: '🐣', t: 'Pemula', next: 100 };
}

function buildLessons() {
  const L = [];
  const kanaRows = ['あ行','か行','さ行','た行','な行','は行','ま行','や行','ら行','わ行・ん'];
  kanaRows.forEach((r, i) => {
    L.push({ key: `hiragana-${i+1}`, level: 'hiragana', title: `Hiragana ${r}`, type: 'kana', kanaType: 'hiragana' });
    L.push({ key: `katakana-${i+1}`, level: 'katakana', title: `Katakana ${r}`, type: 'kana', kanaType: 'katakana' });
  });
  for (const lv of ['n5','n4','n3','n2','n1']) {
    L.push({ key: `${lv}-kotoba`, level: lv, title: 'Kotoba (Kosakata)', type: 'kotoba' });
    L.push({ key: `${lv}-kanji`, level: lv, title: 'Kanji', type: 'kanji' });
    L.push({ key: `${lv}-bunpou`, level: lv, title: 'Bunpou (Tata Bahasa)', type: 'bunpou' });
    L.push({ key: `${lv}-choukai`, level: lv, title: 'Choukai (Mendengar)', type: 'choukai' });
  }
  return L;
}
const ALL_LESSONS = buildLessons();
const LEVEL_ORDER = ['hiragana','katakana','n5','n4','n3','n2','n1'];
const LV_ICON = { hiragana: 'あ', katakana: 'ア', n5: '5', n4: '4', n3: '3', n2: '2', n1: '1' };

const app = createApp({
  data: () => ({
    mode: 'login', fName: '', fEmail: '', fPass: '', fLevel: 'hiragana', fIntensity: 'sedang',
    tab: 'home',
    learnLevel: 'hiragana', openLesson: null,
    // quiz
    quizMode: 'latihan', qLevel: 'n5', qSec: 0, qIdx: 0, qAns: [], qTime: 0, qTimer: null, qDone: false, qScore: 0, secScores: [],
    // games
    gTab: 'match', mCards: [], mOpen: [], mHits: 0, mMoves: 0,
    sprintQ: null, sprintScore: 0, sprintTime: 60, sprintTimer: null, sprintOn: false, sprintStreak: 0,
    // kamus
    kamusQ: '', kamusTab: 'kotoba', kamusResults: [], kamusLoading: false, kamusDetail: null, kamusTimer: null,
    // srs
    srsDue: [], srsTotal: 0, srsIdx: 0, srsShow: false, srsTyped: '', srsDone: 0,
    // saya
    myWeekly: 0,
  }),
  computed: {
    user() { return store.user; },
    mascot() { return mascotFor(store.user?.xp); },
    doneSet() { return new Set(store.done); },
    levelProgress() {
      const o = {};
      for (const lv of LEVEL_ORDER) {
        const ls = ALL_LESSONS.filter(l => l.level === lv);
        o[lv] = ls.filter(l => this.doneSet.has(l.key)).length / ls.length;
      }
      return o;
    },
    levelLocked() {
      const o = {};
      const startIdx = LEVEL_ORDER.indexOf(store.user?.level || 'hiragana');
      LEVEL_ORDER.forEach((lv, i) => {
        if (i <= startIdx) { o[lv] = false; return; }
        o[lv] = this.levelProgress[LEVEL_ORDER[i-1]] < 1;
      });
      return o;
    },
    dailyLessons() {
      const n = { sedikit: 3, sedang: 6, banyak: 10 }[store.user?.intensity || 'sedang'];
      const out = [];
      for (const lv of LEVEL_ORDER) {
        if (this.levelLocked[lv]) break;
        for (const l of ALL_LESSONS.filter(x => x.level === lv)) {
          if (!this.doneSet.has(l.key)) { out.push(l); if (out.length >= n) return out; }
        }
      }
      return out;
    },
    quizQs() { return QUIZ[this.qLevel] || []; },
    quizSecs() { return QUIZ_RULES[this.qLevel].sections; },
    secQs() { return this.quizQs.filter(q => q.s === this.quizSecs[this.qSec].id); },
    weakSpots() {
      return this.secScores.filter(s => s.pct < 60);
    },
  },
  methods: {
    async doAuth() {
      try {
        if (this.mode === 'register') {
          const d = await api('/api/auth/register', { method: 'POST', body: JSON.stringify({ name: this.fName, email: this.fEmail, password: this.fPass, level: this.fLevel, intensity: this.fIntensity }) });
          saveToken(d.token); store.user = d.user;
        } else {
          const d = await api('/api/auth/login', { method: 'POST', body: JSON.stringify({ email: this.fEmail, password: this.fPass }) });
          saveToken(d.token); store.user = d.user;
        }
        setTheme(store.user.theme || 'sakura');
        await this.refresh();
        toast('Selamat datang, ' + store.user.name + '! 🎉');
      } catch (e) { toast(e.message); }
    },
    logout() { saveToken(''); store.user = null; this.tab = 'home'; },
    async refresh() {
      if (!store.token) return;
      try {
        const d = await api('/api/me'); store.user = d.user; setTheme(d.user.theme || 'sakura');
        const p = await api('/api/progress'); store.done = p.done;
        const s = await api('/api/stats'); store.stats = s;
        const h = await api('/api/quiz/history'); store.quizHist = h.history;
        const b = await api('/api/leaderboard'); store.board = b.board; this.myWeekly = b.my_weekly;
        const sr = await api('/api/srs'); this.srsDue = sr.due; this.srsTotal = sr.total;
      } catch { this.logout(); }
    },
    toggleTheme() { setTheme(store.theme === 'sakura' ? 'zen' : 'sakura'); toast(store.theme === 'sakura' ? '🌸 Tema Sakura' : '⛩️ Tema Zen'); },
    async saveSetting(key, val) {
      try { const d = await api('/api/me', { method: 'PATCH', body: JSON.stringify({ [key]: val }) }); store.user = d.user; toast('Disimpan! ✓'); }
      catch (e) { toast(e.message); }
    },
    async gainXP(amount, reason) {
      try {
        const d = await api('/api/xp', { method: 'POST', body: JSON.stringify({ amount, reason }) });
        if (store.user) { store.user.xp = d.xp; store.user.coins = d.coins; }
        if (store.stats) { store.stats.xp = d.xp; store.stats.coins = d.coins; }
      } catch {}
    },
    async completeLesson(key) {
      try {
        await api('/api/progress', { method: 'POST', body: JSON.stringify({ lesson_key: key }) });
        store.done.push(key);
        this.gainXP(20, 'materi');
        toast('Materi tuntas! +20 XP 🎉');
      } catch (e) { toast(e.message); }
    },
    // ---- quiz ----
    startQuiz() {
      this.qSec = 0; this.qIdx = 0; this.qAns = []; this.qDone = false; this.qScore = 0; this.secScores = [];
      this.tab = 'quizrun'; this.$nextTick(() => this.runSec());
    },
    async startAdaptive() {
      try {
        const d = await api('/api/quiz/weak');
        if (!d.weak.length) { toast('Belum ada data. Kerjakan quiz dulu ya!'); return; }
        // petakan qid "level:idx" ke soal
        const qs = [];
        for (const w of d.weak.slice(0, 10)) {
          const [lv, ix] = w.qid.split(':');
          const q = (QUIZ[lv] || [])[parseInt(ix)];
          if (q) qs.push({ ...q, _lv: lv });
        }
        if (!qs.length) { toast('Belum ada data cukup.'); return; }
        this.adaptiveQs = qs; this.qAns = []; this.qIdx = 0; this.qDone = false;
        this.tab = 'adaptiverun';
      } catch (e) { toast(e.message); }
    },
    runSec() {
      clearInterval(this.qTimer);
      this.qTime = this.quizSecs[this.qSec].time; this.qIdx = 0;
      this.qTimer = setInterval(() => {
        this.qTime--;
        if (this.qTime <= 0) { clearInterval(this.qTimer); this.nextSec(); }
      }, 1000);
    },
    answer(i) {
      const q = this.secQs[this.qIdx];
      const ok = i === q.a;
      this.qAns.push({ q, pick: i, ok, qid: `${this.qLevel}:${this.quizQs.indexOf(q)}` });
      setTimeout(() => {
        if (this.qIdx + 1 < this.secQs.length) this.qIdx++;
        else this.nextSec();
      }, 700);
    },
    adaptAnswer(i) {
      const q = this.adaptiveQs[this.qIdx];
      const ok = i === q.a;
      this.qAns.push({ q, pick: i, ok, qid: `${q._lv}:${QUIZ[q._lv].indexOf(q)}` });
      setTimeout(() => {
        if (this.qIdx + 1 < this.adaptiveQs.length) this.qIdx++;
        else this.finishAdaptive();
      }, 700);
    },
    nextSec() {
      clearInterval(this.qTimer);
      if (this.qSec + 1 < this.quizSecs.length) { this.qSec++; this.runSec(); }
      else this.finishQuiz();
    },
    async finishQuiz() {
      clearInterval(this.qTimer);
      this.qDone = true;
      this.qScore = this.qAns.filter(a => a.ok).length;
      // skor per seksi (pola JLPT Sensei: bedah kelemahan)
      this.secScores = this.quizSecs.map(s => {
        const items = this.qAns.filter(a => a.q.s === s.id);
        const ok = items.filter(a => a.ok).length;
        return { name: s.name, ok, total: items.length, pct: items.length ? Math.round(ok / items.length * 100) : 0 };
      });
      try {
        await api('/api/quiz/result', { method: 'POST', body: JSON.stringify({ level: this.qLevel, score: this.qScore, total: this.qAns.length }) });
        await api('/api/quiz/items', { method: 'POST', body: JSON.stringify({ items: this.qAns.map(a => ({ qid: a.qid, ok: a.ok })) }) });
        this.gainXP(this.qScore * 5, 'quiz ' + this.qLevel);
        this.refresh();
      } catch {}
      this.tab = 'quizdone';
    },
    async finishAdaptive() {
      this.qScore = this.qAns.filter(a => a.ok).length;
      try {
        await api('/api/quiz/items', { method: 'POST', body: JSON.stringify({ items: this.qAns.map(a => ({ qid: a.qid, ok: a.ok })) }) });
        this.gainXP(this.qScore * 5, 'review cerdas');
        this.refresh();
      } catch {}
      this.tab = 'quizdone';
    },
    playAudio(t) { speak(t); },
    fmt(s) { return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`; },
    // ---- games ----
    startMatch() {
      const pool = [...KANA.hiragana.slice(0, 20)];
      const pick = pool.sort(() => Math.random() - .5).slice(0, 8);
      const cards = [];
      pick.forEach((k, i) => { cards.push({ id: i, t: k.k, pair: i }); cards.push({ id: i, t: k.r, pair: i }); });
      this.mCards = cards.sort(() => Math.random() - .5).map((c, i) => ({ ...c, k: i, open: false, hit: false }));
      this.mOpen = []; this.mHits = 0; this.mMoves = 0;
    },
    flip(c) {
      if (c.open || c.hit || this.mOpen.length === 2) return;
      c.open = true; this.mOpen.push(c);
      if (this.mOpen.length === 2) {
        this.mMoves++;
        const [a, b] = this.mOpen;
        if (a.pair === b.pair) {
          setTimeout(() => { a.hit = b.hit = true; this.mOpen = []; this.mHits++;
            if (this.mHits === 8) {
              const sc = Math.max(100 - this.mMoves * 2, 10);
              toast(`Menang! ${this.mMoves} langkah 🎉`); this.gainXP(sc, 'kana match');
              api('/api/game/score', { method: 'POST', body: JSON.stringify({ game: 'match', score: sc }) }).catch(() => {});
            }
          }, 400);
        } else setTimeout(() => { a.open = b.open = false; this.mOpen = []; }, 800);
      }
    },
    startSprint() {
      this.sprintScore = 0; this.sprintStreak = 0; this.sprintTime = 60; this.sprintOn = true;
      this.nextSprint();
      clearInterval(this.sprintTimer);
      this.sprintTimer = setInterval(() => { this.sprintTime--; if (this.sprintTime <= 0) { clearInterval(this.sprintTimer); this.sprintOn = false; toast(`Waktu habis! Skor: ${this.sprintScore} 🎯`); this.gainXP(this.sprintScore, 'kana sprint'); api('/api/game/score', { method: 'POST', body: JSON.stringify({ game: 'sprint', score: this.sprintScore }) }).catch(() => {}); } }, 1000);
    },
    nextSprint() {
      const all = KANA.hiragana.concat(KANA.katakana);
      const k = all[Math.floor(Math.random() * all.length)];
      const wrong = all[Math.floor(Math.random() * all.length)].r;
      const opts = [k.r, wrong].sort(() => Math.random() - .5);
      this.sprintQ = { k: k.k, opts, ans: k.r };
    },
    sprintPick(o) {
      if (!this.sprintOn) return;
      if (o === this.sprintQ.ans) { this.sprintScore += 10; this.sprintStreak++; speak(this.sprintQ.k); }
      else { this.sprintScore = Math.max(0, this.sprintScore - 5); this.sprintStreak = 0; }
      this.nextSprint();
    },
    // ---- kamus ----
    kamusType() { clearTimeout(this.kamusTimer); this.kamusTimer = setTimeout(() => this.searchKamus(), 400); },
    async searchKamus() {
      const q = this.kamusQ.trim();
      if (q.length < 1) { this.kamusResults = []; return; }
      this.kamusLoading = true;
      try {
        const d = await api(`/api/${this.kamusTab === 'kotoba' ? 'dict' : 'kanji'}/search?q=${encodeURIComponent(q)}&limit=20`);
        this.kamusResults = d.results || [];
      } catch { this.kamusResults = []; }
      this.kamusLoading = false;
    },
    async openWord(id) {
      try { const d = await api(`/api/dict/word/${id}`); this.kamusDetail = { type: 'word', ...d.word }; }
      catch (e) { toast(e.message); }
    },
    async openKanji(ch) {
      try { const d = await api(`/api/kanji/${encodeURIComponent(ch)}`); this.kamusDetail = { type: 'kanji', ...d.kanji, words: d.words }; }
      catch (e) { toast(e.message); }
    },
    async saveCard(kind, front, back, reading) {
      try {
        await api('/api/srs', { method: 'POST', body: JSON.stringify({ kind, front, back, reading }) });
        this.gainXP(2, 'flashcard baru');
        const sr = await api('/api/srs'); this.srsDue = sr.due; this.srsTotal = sr.total;
        toast('Masuk flashcard! 🃏');
      } catch (e) { toast(e.message); }
    },
    // ---- srs review ----
    srsCheck() {
      const c = this.srsDue[this.srsIdx];
      if (!c) return;
      let ok;
      if (c.kind === 'kanji') {
        ok = this.srsTyped.trim().toLowerCase() === (c.reading || '').toLowerCase();
      } else {
        ok = this.srsShow; // mode lihat-jawab: user nilai sendiri via tombol
        return;
      }
      this.srsGrade(ok);
    },
    async srsGrade(ok) {
      const c = this.srsDue[this.srsIdx];
      if (!c) return;
      try { await api('/api/srs/review', { method: 'POST', body: JSON.stringify({ id: c.id, ok }) }); } catch {}
      this.srsIdx++; this.srsShow = false; this.srsTyped = ''; this.srsDone++;
      if (this.srsIdx >= this.srsDue.length) { toast('Review selesai! 🎉'); this.refresh(); this.tab = 'saya'; }
    },
  },
  mounted() {
    setInterval(() => {
      if (store.theme !== 'sakura' || document.hidden) return;
      if (document.querySelectorAll('.petal').length > 12) return;
      const p = document.createElement('div'); p.className = 'petal'; p.textContent = '🌸';
      p.style.left = Math.random() * 100 + 'vw'; p.style.fontSize = (10 + Math.random() * 14) + 'px';
      p.style.animationDuration = (6 + Math.random() * 6) + 's';
      document.body.appendChild(p); setTimeout(() => p.remove(), 12000);
    }, 1800);
    this.refresh();
    this.startMatch();
  },
  template: `
<div>
  <header class="hdr">
    <div class="logo"><span class="jp">日本語</span> NihongoLearn</div>
    <div style="display:flex;gap:8px;align-items:center">
      <span v-if="user" class="chip">🪙 {{ user.coins || 0 }}</span>
      <button class="theme-btn" @click="toggleTheme">{{ store.theme === 'sakura' ? '⛩️ Zen' : '🌸 Sakura' }}</button>
    </div>
  </header>

  <div v-if="!user" class="auth-card">
    <div class="mascot">🦉</div>
    <h2>{{ mode === 'login' ? 'Selamat datang kembali!' : 'Mulai petualanganmu!' }}</h2>
    <p class="muted">Belajar bahasa Jepang dari hiragana sampai N1</p>
    <div v-if="mode==='register'">
      <label class="lbl">Nama</label><input v-model="fName" placeholder="Namamu">
      <label class="lbl">Level saat ini</label>
      <select v-model="fLevel"><option v-for="l in ['hiragana','katakana','n5','n4','n3','n2','n1']" :value="l">{{ l.toUpperCase() }}</option></select>
      <label class="lbl">Porsi harian</label>
      <select v-model="fIntensity"><option value="sedikit">🌱 Sedikit (3 materi)</option><option value="sedang">🌿 Sedang (6 materi)</option><option value="banyak">🌳 Banyak (10 materi)</option></select>
    </div>
    <label class="lbl">Email</label><input v-model="fEmail" type="email" placeholder="email@contoh.com">
    <label class="lbl">Password</label><input v-model="fPass" type="password" placeholder="••••••" @keyup.enter="doAuth">
    <button class="btn btn-block" @click="doAuth">{{ mode === 'login' ? 'Masuk' : 'Daftar' }}</button>
    <p class="muted center link" @click="mode = mode==='login'?'register':'login'">{{ mode === 'login' ? 'Belum punya akun? Daftar' : 'Sudah punya akun? Masuk' }}</p>
  </div>

  <div v-else>
    <!-- ============ HOME ============ -->
    <section v-if="tab==='home'">
      <div class="card hero">
        <div class="hero-mascot">{{ mascot.e }}</div>
        <div class="hero-info">
          <h2>Konnichiwa, {{ user.name }}! 👋</h2>
          <p class="muted">{{ mascot.t }} · Lv.{{ user.level.toUpperCase() }}</p>
          <div class="xpbar"><i :style="{width: (mascot.next ? Math.min(100, Math.round(user.xp/mascot.next*100)) : 100)+'%'}"></i></div>
          <p class="muted small">{{ mascot.next ? (mascot.next - user.xp) + ' XP lagi jadi ' + {100:'🐥',300:'🦉',600:'🦅',1200:'🐉'}[mascot.next] : 'Maskot max! 🐉' }} · <b>{{ user.xp }}</b> XP</p>
        </div>
      </div>

      <div class="stat-row">
        <div class="stat"><div class="stat-n streak">🔥{{ store.stats?.streak_days || 0 }}</div><div class="muted small">Streak</div></div>
        <div class="stat"><div class="stat-n">{{ store.stats?.lessons_done || 0 }}</div><div class="muted small">Materi</div></div>
        <div class="stat"><div class="stat-n">{{ store.stats?.quiz_avg || 0 }}%</div><div class="muted small">Quiz</div></div>
        <div class="stat" @click="tab='saya'"><div class="stat-n">🃏{{ store.stats?.srs_due || 0 }}</div><div class="muted small">Review</div></div>
      </div>

      <h2 class="ttl">🗓️ Materi Harian</h2>
      <p class="muted small">Sesuai levelmu. Tuntasin semua biar streak jalan! 🔥</p>
      <div v-if="!dailyLessons.length" class="card center">🎉 Materi harian tuntas! Waktunya quiz atau game.</div>
      <div v-for="l in dailyLessons" :key="'d-'+l.key" class="lvl" @click="learnLevel=l.level;openLesson=l.key;tab='learn'">
        <div class="badge">{{ LV_ICON[l.level] }}</div>
        <div class="lvl-body"><b>{{ l.title }}</b><div class="muted small">{{ l.level.toUpperCase() }} · +20 XP</div></div>
        <div>▶️</div>
      </div>

      <h2 class="ttl">📚 Materi Utama</h2>
      <p class="muted small">Bebas pilih materi apa aja, tanpa urutan.</p>
      <div class="lvl-grid">
        <div v-for="lv in LEVEL_ORDER" :key="'m-'+lv" class="lvl-mini" @click="learnLevel=lv;openLesson=null;tab='learn'">
          <div class="badge sm">{{ LV_ICON[lv] }}</div>
          <b>{{ lv.toUpperCase() }}</b>
          <div class="bar"><i :style="{width: Math.round(levelProgress[lv]*100)+'%'}"></i></div>
        </div>
      </div>

      <h2 class="ttl">🛤️ Jalur Level</h2>
      <p class="muted small">Tuntaskan level sebelumnya untuk membuka level berikutnya.</p>
      <div v-for="lv in LEVEL_ORDER" :key="lv" class="lvl" :class="{locked: levelLocked[lv]}" @click="!levelLocked[lv] && (learnLevel=lv,openLesson=null,tab='learn')">
        <div class="badge">{{ LV_ICON[lv] }}</div>
        <div class="lvl-body"><b>{{ lv.toUpperCase() }}</b><div class="bar"><i :style="{width: Math.round(levelProgress[lv]*100)+'%'}"></i></div></div>
        <div>{{ levelLocked[lv] ? '🔒' : Math.round(levelProgress[lv]*100)+'%' }}</div>
      </div>
    </section>

    <!-- ============ BELAJAR ============ -->
    <section v-if="tab==='learn'">
      <h2 class="ttl">📖 Belajar</h2>
      <select v-model="learnLevel" @change="openLesson=null">
        <option v-for="lv in LEVEL_ORDER" :value="lv">{{ lv.toUpperCase() }}</option>
      </select>
      <div v-if="!openLesson">
        <div v-for="l in ALL_LESSONS.filter(x=>x.level===learnLevel)" :key="l.key" class="lvl" @click="openLesson=l.key">
          <div class="badge">{{ doneSet.has(l.key) ? '✅' : '📝' }}</div>
          <div class="lvl-body"><b>{{ l.title }}</b><div class="muted small">+20 XP</div></div><div>▶️</div>
        </div>
      </div>
      <div v-else class="card pop">
        <button class="btn ghost sm" @click="openLesson=null">← Semua materi</button>
        <LessonView :les="ALL_LESSONS.find(l=>l.key===openLesson)" :done="doneSet.has(openLesson)" @done="completeLesson(openLesson);openLesson=null" @savecard="saveCard" />
      </div>
    </section>

    <!-- ============ QUIZ ============ -->
    <section v-if="tab==='quiz'">
      <h2 class="ttl">⏱️ Quiz JLPT</h2>
      <div class="mode-grid">
        <div class="mode" :class="{on: quizMode==='latihan'}" @click="quizMode='latihan'"><div class="mode-e">📝</div><b>Latihan</b><div class="muted small">Per seksi, santai</div></div>
        <div class="mode" :class="{on: quizMode==='simulasi'}" @click="quizMode='simulasi'"><div class="mode-e">🎯</div><b>Simulasi Ujian</b><div class="muted small">Format asli + bedah nilai</div></div>
        <div class="mode" :class="{on: quizMode==='cerdas'}" @click="quizMode='cerdas'"><div class="mode-e">🧠</div><b>Review Cerdas</b><div class="muted small">Fokus soal yang lemah</div></div>
      </div>
      <div v-if="quizMode!=='cerdas'">
        <label class="lbl">Pilih level</label>
        <select v-model="qLevel"><option v-for="lv in ['n5','n4','n3','n2','n1']" :value="lv">{{ lv.toUpperCase() }}</option></select>
        <div class="card"><b>⏱️ Aturan waktu:</b>
          <div v-for="s in QUIZ_RULES[qLevel].sections" :key="s.id" class="muted small">• {{ s.name }} — {{ fmt(s.time) }}</div>
          <p class="muted small" v-if="quizMode==='simulasi'">Mode simulasi: kerjakan semua seksi berurutan seperti ujian asli, lalu dapat bedah nilai per seksi + rekomendasi materi.</p>
        </div>
        <button class="btn btn-block" @click="startQuiz">{{ quizMode==='simulasi' ? 'Mulai Simulasi 🚀' : 'Mulai Latihan 🚀' }}</button>
      </div>
      <div v-else class="card">
        <div v-html="illus('quiz')"></div>
        <p><b>Review Cerdas</b> ngumpulin soal-soal yang paling sering kamu salahin, terus ngasih latihan fokus ke situ. Makin sering salah, makin sering muncul!</p>
        <button class="btn btn-block" @click="startAdaptive">Mulai Review 🧠</button>
      </div>
      <h2 class="ttl">📜 Riwayat</h2>
      <div v-for="h in store.quizHist" :key="h.created_at+h.level" class="rowline"><span><b>{{ h.level.toUpperCase() }}</b> — {{ h.score }}/{{ h.total }}</span><b>{{ Math.round(h.score/h.total*100) }}%</b></div>
      <div v-if="!store.quizHist.length" class="muted small">Belum ada riwayat quiz.</div>
    </section>

    <!-- ============ QUIZ RUN ============ -->
    <section v-if="tab==='quizrun' && secQs.length" class="card pop">
      <div class="q-head">
        <b>{{ quizSecs[qSec].name }} ({{ qLevel.toUpperCase() }})</b>
        <span class="timer" :class="{low: qTime<60}">⏱️ {{ fmt(qTime) }}</span>
      </div>
      <div class="muted small">Soal {{ qIdx+1 }}/{{ secQs.length }} · Seksi {{ qSec+1 }}/{{ quizSecs.length }}</div>
      <div class="qbar"><i :style="{width: ((qIdx)/secQs.length*100)+'%'}"></i></div>
      <div v-if="secQs[qIdx].passage" class="passage">{{ secQs[qIdx].q.split('質問')[0] }}</div>
      <h3 class="q-text">{{ secQs[qIdx].passage ? '質問：' + secQs[qIdx].q.split('質問：')[1] : secQs[qIdx].q }}</h3>
      <button v-if="secQs[qIdx].audio" class="btn ghost sm" @click="playAudio(secQs[qIdx].audio)">🔊 Putar audio</button>
      <button v-for="(o,i) in secQs[qIdx].o" :key="i" class="opt"
        :class="{pick: qAns[qAns.length-1]?.q===secQs[qIdx] && qAns[qAns.length-1].pick===i, right: qAns[qAns.length-1]?.q===secQs[qIdx] && i===secQs[qIdx].a, wrong: qAns[qAns.length-1]?.q===secQs[qIdx] && qAns[qAns.length-1].pick===i && i!==secQs[qIdx].a}"
        @click="answer(i)"><b>{{ ['A','B','C','D'][i] }}.</b> {{ o }}</button>
    </section>

    <!-- ============ ADAPTIVE RUN ============ -->
    <section v-if="tab==='adaptiverun' && adaptiveQs && adaptiveQs.length" class="card pop">
      <div class="q-head"><b>🧠 Review Cerdas</b><span class="muted small">Soal {{ qIdx+1 }}/{{ adaptiveQs.length }}</span></div>
      <div class="qbar"><i :style="{width: (qIdx/adaptiveQs.length*100)+'%'}"></i></div>
      <h3 class="q-text">{{ adaptiveQs[qIdx].q }}</h3>
      <button v-for="(o,i) in adaptiveQs[qIdx].o" :key="i" class="opt"
        :class="{pick: qAns[qAns.length-1]?.q===adaptiveQs[qIdx] && qAns[qAns.length-1].pick===i, right: qAns[qAns.length-1]?.q===adaptiveQs[qIdx] && i===adaptiveQs[qIdx].a, wrong: qAns[qAns.length-1]?.q===adaptiveQs[qIdx] && qAns[qAns.length-1].pick===i && i!==adaptiveQs[qIdx].a}"
        @click="adaptAnswer(i)"><b>{{ ['A','B','C','D'][i] }}.</b> {{ o }}</button>
    </section>

    <!-- ============ QUIZ DONE ============ -->
    <section v-if="tab==='quizdone'" class="card center">
      <div v-html="illus('trophy')"></div>
      <h2>Skor: {{ qScore }}/{{ qAns.length }} ({{ qAns.length ? Math.round(qScore/qAns.length*100) : 0 }}%)</h2>
      <p class="muted">{{ qScore/qAns.length >= .7 ? 'Sugoi! 🎉' : qScore/qAns.length >= .4 ? 'Lumayan, teruskan! 💪' : 'Ayo belajar lagi! 📚' }}</p>
      <div v-if="secScores.length" style="text-align:left;margin-top:8px">
        <h3>📊 Bedah nilai per seksi</h3>
        <div v-for="s in secScores" :key="s.name" class="rowline"><span>{{ s.name }}</span><b :class="s.pct<60?'bad':''">{{ s.ok }}/{{ s.total }} ({{ s.pct }}%)</b></div>
        <div v-if="weakSpots.length" class="card warn">
          <b>🎯 Perlu ditingkatkan:</b>
          <div v-for="s in weakSpots" :key="s.name" class="muted small">• {{ s.name }} ({{ s.pct }}%)</div>
          <button class="btn ghost sm" @click="learnLevel=qLevel;openLesson=null;tab='learn'">Pelajari materi {{ qLevel.toUpperCase() }} 📖</button>
        </div>
        <div v-else class="card ok-card"><b>✨ Semua seksi lolos! Pertahankan!</b></div>
      </div>
      <button class="btn" @click="tab='quiz'">Kembali</button>
    </section>

    <!-- ============ GAMES ============ -->
    <section v-if="tab==='games'">
      <h2 class="ttl">🎮 Games</h2>
      <div class="mode-grid">
        <div class="mode" :class="{on: gTab==='match'}" @click="gTab='match'"><div class="mode-e">🃏</div><b>Kana Match</b></div>
        <div class="mode" :class="{on: gTab==='sprint'}" @click="gTab='sprint'"><div class="mode-e">⚡</div><b>Kana Sprint</b></div>
      </div>
      <div v-if="gTab==='match'" class="card">
        <div class="passage">🃏 <b>Cara main:</b> buka kartu & cocokkan <b>huruf kana</b> dengan <b>cara bacanya</b>. Temukan 8 pasang dengan langkah sesedikit mungkin!</div>
        <p><b>{{ mHits }}/8 pasang</b> · <span class="muted small">{{ mMoves }} langkah</span></p>
        <div class="game-board">
          <div v-for="c in mCards" :key="c.k" class="gcard" :class="{open:c.open,hit:c.hit}" @click="flip(c)">{{ c.open||c.hit ? c.t : '❓' }}</div>
        </div>
        <button class="btn btn-block" @click="startMatch">🔄 Main lagi</button>
      </div>
      <div v-if="gTab==='sprint'" class="card center">
        <div class="passage" style="text-align:left">⚡ <b>Cara main:</b> pilih <b>cara baca</b> yang benar secepat mungkin. Benar <b>+10</b>, salah <b>-5</b>. Kumpulkan skor tertinggi dalam <b>60 detik</b>!</div>
        <button v-if="!sprintOn && sprintTime!==0" class="btn" @click="startSprint">Mulai ⚡</button>
        <div v-if="sprintQ && sprintOn">
          <div class="sprint-kana">{{ sprintQ.k }}</div>
          <div class="timer">⏱️ {{ sprintTime }}s</div>
          <div style="margin:6px 0"><b>Skor: {{ sprintScore }}</b> <span class="streak" v-if="sprintStreak>=3">🔥 x{{ sprintStreak }}</span></div>
          <button v-for="o in sprintQ.opts" :key="o" class="opt center big" @click="sprintPick(o)">{{ o }}</button>
        </div>
        <div v-if="!sprintOn && sprintTime===0" class="pop"><h2>Skor akhir: {{ sprintScore }} 🎯</h2><button class="btn" @click="startSprint">Main lagi ⚡</button></div>
      </div>
    </section>

    <!-- ============ KAMUS ============ -->
    <section v-if="tab==='kamus'">
      <h2 class="ttl">🔍 Kamus</h2>
      <p class="muted small">218rb+ kosakata & 13rb kanji. Cari pakai kanji, kana, romaji, atau arti.</p>
      <div class="mode-grid">
        <div class="mode" :class="{on: kamusTab==='kotoba'}" @click="kamusTab='kotoba';searchKamus()"><div class="mode-e">📝</div><b>Kotoba</b></div>
        <div class="mode" :class="{on: kamusTab==='kanji'}" @click="kamusTab='kanji';searchKamus()"><div class="mode-e">🈁</div><b>Kanji</b></div>
      </div>
      <input v-model="kamusQ" @input="kamusType" :placeholder="kamusTab==='kotoba' ? 'cth: 食べる / taberu / to eat' : 'cth: 食 / eat'">
      <div v-if="kamusLoading" class="muted small">Mencari…</div>
      <div v-if="!kamusDetail">
        <div v-for="r in kamusResults" :key="r.id||r.ch" class="lvl" @click="kamusTab==='kotoba'?openWord(r.id):openKanji(r.ch)">
          <div class="lvl-body">
            <b class="big">{{ kamusTab==='kotoba' ? (r.keb[0]||r.reb[0]) : r.ch }}</b>
            <span class="muted small">{{ kamusTab==='kotoba' ? r.reb.join('、') : r.meaning }}</span>
            <div class="muted small" v-if="kamusTab==='kotoba'">{{ r.gloss.slice(0,120) }}</div>
            <div v-if="kamusTab==='kanji'"><span class="chip" v-if="r.jlpt">N{{ r.jlpt }}</span> <span class="muted small">{{ r.strokes }} goresan</span></div>
          </div>
          <div>🔊</div>
        </div>
        <div v-if="kamusQ && !kamusLoading && !kamusResults.length" class="card muted small center">Tidak ketemu. Coba kata lain.</div>
      </div>
      <div v-else class="card pop">
        <button class="btn ghost sm" @click="kamusDetail=null">← Hasil cari</button>
        <div v-if="kamusDetail.type==='word'">
          <h2>{{ kamusDetail.keb[0] || kamusDetail.reb[0] }}</h2>
          <p class="muted">{{ kamusDetail.reb.join('、') }}</p>
          <div class="passage">{{ kamusDetail.gloss }}</div>
          <p class="muted small">{{ kamusDetail.pos }}</p>
          <div class="btn-row">
            <button class="btn sm" @click="speak(kamusDetail.reb[0])">🔊 Dengarkan</button>
            <button class="btn ghost sm" @click="saveCard('word', kamusDetail.keb[0]||kamusDetail.reb[0], kamusDetail.gloss.slice(0,120), kamusDetail.reb[0])">🃏 + Flashcard</button>
          </div>
        </div>
        <div v-if="kamusDetail.type==='kanji'">
          <div class="kanji-big">{{ kamusDetail.ch }}</div>
          <p class="center"><span class="chip" v-if="kamusDetail.jlpt">JLPT N{{ kamusDetail.jlpt }}</span> <span class="chip">{{ kamusDetail.strokes }} goresan</span></p>
          <div class="passage">{{ kamusDetail.meaning }}</div>
          <p><b>On:</b> {{ (kamusDetail.onyomi||[]).join('、') || '—' }}</p>
          <p><b>Kun:</b> {{ (kamusDetail.kunyomi||[]).join('、') || '—' }}</p>
          <div class="btn-row"><button class="btn ghost sm" @click="saveCard('kanji', kamusDetail.ch, kamusDetail.meaning.slice(0,120), (kamusDetail.onyomi[0]||kamusDetail.kunyomi[0]||''))">🃏 + Flashcard</button></div>
          <h3>Contoh kata</h3>
          <div v-for="w in kamusDetail.words" :key="w.id" class="lvl" @click="openWord(w.id)">
            <div class="lvl-body"><b>{{ w.keb[0]||w.reb[0] }}</b> <span class="muted small">{{ w.reb[0] }}</span><div class="muted small">{{ w.gloss.slice(0,80) }}</div></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ SAYA ============ -->
    <section v-if="tab==='saya'">
      <div class="card hero">
        <div class="hero-mascot">{{ mascot.e }}</div>
        <div class="hero-info">
          <h2>{{ user.name }}</h2>
          <p class="muted">{{ mascot.t }} · <b>{{ user.xp }}</b> XP · 🪙 <b>{{ user.coins }}</b></p>
          <div class="xpbar"><i :style="{width: (mascot.next ? Math.min(100, Math.round(user.xp/mascot.next*100)) : 100)+'%'}"></i></div>
        </div>
      </div>

      <div class="card" v-if="srsDue.length" @click="srsIdx=0;srsShow=false;srsTyped='';srsDone=0;tab='srsrun'" style="cursor:pointer">
        <b>🃏 {{ srsDue.length }} flashcard siap direview!</b>
        <p class="muted small">Tap untuk mulai review (ketik jawaban untuk kanji)</p>
      </div>
      <div class="card muted small" v-else>🃏 {{ srsTotal }} flashcard tersimpan. Tambah dari materi/kamus, review muncul di sini.</div>

      <h2 class="ttl">🏆 Liga Mingguan</h2>
      <p class="muted small">Kumpulkan XP minggu ini! <b>Kamu: {{ myWeekly }} XP</b></p>
      <div v-for="(b,i) in store.board" :key="b.name+i" class="rowline"><span>{{ ['🥇','🥈','🥉'][i] || (i+1)+'.' }} {{ b.name }}</span><b>{{ b.wxp }} XP</b></div>

      <h2 class="ttl">📊 Statistik</h2>
      <div class="stat-row">
        <div class="stat"><div class="stat-n streak">🔥{{ store.stats?.streak_days || 0 }}</div><div class="muted small">Streak</div></div>
        <div class="stat"><div class="stat-n">{{ store.stats?.lessons_done || 0 }}</div><div class="muted small">Materi</div></div>
        <div class="stat"><div class="stat-n">{{ store.stats?.quiz_count || 0 }}</div><div class="muted small">Quiz</div></div>
        <div class="stat"><div class="stat-n">{{ store.stats?.quiz_avg || 0 }}%</div><div class="muted small">Rata²</div></div>
      </div>
      <div v-for="lv in LEVEL_ORDER" :key="'p-'+lv" class="lvl">
        <div class="badge">{{ LV_ICON[lv] }}</div>
        <div class="lvl-body"><b>{{ lv.toUpperCase() }}</b><div class="bar"><i :style="{width: Math.round(levelProgress[lv]*100)+'%'}"></i></div></div>
        <div>{{ Math.round(levelProgress[lv]*100) }}%</div>
      </div>

      <h2 class="ttl">⚙️ Pengaturan</h2>
      <div class="card">
        <label class="lbl">Porsi harian</label>
        <select :value="user.intensity" @change="saveSetting('intensity', $event.target.value)">
          <option value="sedikit">🌱 Sedikit (3)</option><option value="sedang">🌿 Sedang (6)</option><option value="banyak">🌳 Banyak (10)</option>
        </select>
        <label class="lbl">Level</label>
        <select :value="user.level" @change="saveSetting('level', $event.target.value)">
          <option v-for="l in LEVEL_ORDER" :value="l">{{ l.toUpperCase() }}</option>
        </select>
      </div>
      <button class="btn ghost btn-block" @click="logout">Keluar</button>
    </section>

    <!-- ============ SRS RUN ============ -->
    <section v-if="tab==='srsrun' && srsDue[srsIdx]" class="card pop center">
      <p class="muted small">Flashcard {{ srsIdx+1 }}/{{ srsDue.length }} · {{ srsDone }} selesai</p>
      <div class="flash-front">{{ srsDue[srsIdx].front }}</div>
      <div v-if="srsDue[srsIdx].kind==='kanji' && !srsShow">
        <p class="muted small">Ketik cara bacanya (romaji/hiragana):</p>
        <input v-model="srsTyped" placeholder="cth: taberu" @keyup.enter="srsCheck">
        <button class="btn btn-block" @click="srsCheck">Cek ✓</button>
        <button class="btn ghost sm" @click="srsShow=true">Lihat jawaban</button>
      </div>
      <button v-if="srsDue[srsIdx].kind!=='kanji' && !srsShow" class="btn btn-block" @click="srsShow=true">Lihat jawaban 👀</button>
      <div v-if="srsShow" class="pop">
        <div class="passage">{{ srsDue[srsIdx].back }}</div>
        <p class="muted small" v-if="srsDue[srsIdx].reading">🔊 {{ srsDue[srsIdx].reading }}</p>
        <div class="btn-row center">
          <button class="btn ghost sm" @click="srsGrade(false)">✗ Lupa</button>
          <button class="btn sm" @click="srsGrade(true)">✓ Ingat</button>
        </div>
      </div>
    </section>

    <nav class="nav">
      <button :class="{on:tab==='home'}" @click="tab='home'"><span class="ic">🏠</span>Home</button>
      <button :class="{on:tab==='learn'}" @click="tab='learn'"><span class="ic">📖</span>Belajar</button>
      <button :class="{on:tab==='quiz'||tab==='quizrun'||tab==='adaptiverun'}" @click="tab='quiz'"><span class="ic">⏱️</span>Quiz</button>
      <button :class="{on:tab==='kamus'}" @click="tab='kamus'"><span class="ic">🔍</span>Kamus</button>
      <button :class="{on:tab==='games'}" @click="tab='games'"><span class="ic">🎮</span>Game</button>
      <button :class="{on:tab==='saya'||tab==='srsrun'}" @click="tab='saya'"><span class="ic">👤</span>Saya</button>
    </nav>
  </div>
</div>

`,
});

// ===== Isi pelajaran: pola Jelas -> Contoh -> Review (Bunpo/LingoDeer) =====
app.component('LessonView', {
  props: ['les', 'done'],
  emits: ['done', 'savecard'],
  data: () => ({ reviewIdx: 0, reviewAns: [], reviewDone: false }),
  methods: {
    kana() {
      const base = this.les.kanaType === 'hiragana' ? KANA.hiragana : KANA.katakana;
      const idx = parseInt(this.les.key.split('-')[1]) - 1;
      const rows = [[0,5],[5,10],[10,15],[15,20],[20,25],[25,30],[30,35],[35,38],[38,43],[43,46]];
      const [a,b] = rows[idx];
      return base.slice(a,b);
    },
    // review bunpou: pilih contoh yang tepat untuk pola ini
    reviewQs() {
      const items = LESSONS[this.les.level].bunpou || [];
      return items.slice(0, 3).map((b, i) => {
        const others = items.filter((_, j) => j !== i).slice(0, 2);
        const opts = [{ j: b.x[0].j, i: b.x[0].i, ok: true }]
          .concat(others.map(o => ({ j: o.x[0].j, i: o.x[0].i, ok: false })))
          .sort(() => Math.random() - .5);
        return { t: b.t, opts };
      });
    },
    reviewPick(o, i) {
      this.reviewAns.push({ ok: o.ok, pick: i });
      setTimeout(() => {
        if (this.reviewIdx + 1 < this.reviewQs().length) this.reviewIdx++;
        else this.reviewDone = true;
      }, 600);
    },
    speak, toast,
  },
  template: `
  <div>
    <h2 class="ttl">{{ les.title }}</h2>
    <div v-if="les.type==='kana'">
      <p class="muted small">Klik huruf untuk dengar cara baca. Hafalkan bentuk & bunyinya!</p>
      <div class="kana-grid"><div v-for="k in kana()" :key="k.k" class="kana" @click="speak(k.k)"><div class="k">{{ k.k }}</div><div class="r">{{ k.r }}</div></div></div>
      <div class="card tip">💡 <b>Tips:</b> Tulis berulang di kertas. Bunyi ぢ/づ dan じ/ず sama — ikuti konteks!</div>
    </div>
    <div v-if="les.type==='kotoba'">
      <p class="muted small">Klik 🔊 untuk dengar, 🃏 untuk simpan ke flashcard.</p>
      <div v-for="w in (LESSONS[les.level].kotoba||[])" :key="w.jp" class="lvl">
        <div class="lvl-body" @click="speak(w.jp)"><b class="big">{{ w.jp }}</b> <span class="muted small">{{ w.kj }}</span><div class="muted small">{{ w.r }} — {{ w.id }}</div></div>
        <button class="mini-btn" @click="speak(w.jp)">🔊</button>
        <button class="mini-btn" @click="$emit('savecard','word', w.kj&&w.kj!==w.jp?w.kj:w.jp, w.id, w.jp)">🃏</button>
      </div>
    </div>
    <div v-if="les.type==='kanji'">
      <p class="muted small">Pola WaniKani: pahami mnemonic-nya, lalu hafalkan!</p>
      <div v-for="k in (LESSONS[les.level].kanji||[])" :key="k.kj" class="card kanji-card">
        <div class="kanji-big">{{ k.kj }}</div>
        <div class="center"><b>{{ k.id }}</b></div>
        <div class="muted small center">On: {{ k.on }} · Kun: {{ k.kun }}</div>
        <div v-if="k.m" class="passage">💭 <b>Mnemonic:</b> {{ k.m }}</div>
        <div v-for="e in k.ex" :key="e.j" class="muted small center link" @click="speak(e.j)">🔊 {{ e.j }} ({{ e.r }}) — {{ e.i }}</div>
        <div class="center"><button class="btn ghost sm" @click="$emit('savecard','kanji', k.kj, k.id, (k.on||'').split('・')[0]||(k.kun||'').split('・')[0])">🃏 Simpan flashcard</button></div>
      </div>
    </div>
    <div v-if="les.type==='bunpou'">
      <div v-for="b in (LESSONS[les.level].bunpou||[])" :key="b.t" class="card">
        <div class="step-tag">📖 Penjelasan</div>
        <b class="big">{{ b.t }}</b><p style="margin:6px 0">{{ b.e }}</p>
        <div class="step-tag">💬 Contoh</div>
        <div v-for="x in b.x" :key="x.j" class="passage link" @click="speak(x.j)">{{ x.j }}<br><span class="muted small">{{ x.i }} 🔊</span></div>
      </div>
      <div class="card">
        <div class="step-tag">⚡ Review cepat</div>
        <p class="muted small">Pilih contoh yang TEPAT untuk tiap pola:</p>
        <div v-if="!reviewDone && reviewQs()[reviewIdx]">
          <p><b>{{ reviewQs()[reviewIdx].t }}</b></p>
          <button v-for="(o,i) in reviewQs()[reviewIdx].opts" :key="i" class="opt"
            :class="{right: reviewAns[reviewIdx] && o.ok, wrong: reviewAns[reviewIdx] && !o.ok && reviewAns[reviewIdx].pick===i}"
            @click="!reviewAns[reviewIdx] && reviewPick(o, i)">{{ o.j }}<br><span class="muted small">{{ o.i }}</span></button>
        </div>
        <div v-else-if="reviewDone" class="pop">
          <b>Review: {{ reviewAns.filter(a=>a.ok).length }}/{{ reviewAns.length }} benar {{ reviewAns.filter(a=>a.ok).length===reviewAns.length ? '🎉' : '💪' }}</b>
        </div>
      </div>
    </div>
    <div v-if="les.type==='choukai'">
      <p class="muted small">Dengarkan audio, lalu pilih arti yang benar. Simulasi seksi Choukai!</p>
      <div v-for="(c,i) in (LESSONS[les.level].choukai||[])" :key="i" class="card">
        <p>{{ c.q }}</p>
        <button class="btn ghost sm" @click="speak(c.a)">🔊 Putar audio</button>
        <button v-for="(o,oi) in c.opts" :key="oi" class="opt" @click="o===c.opts[c.ans]?toast('Benar! 🎉'):toast('Belum tepat, coba lagi!')">{{ o }}</button>
      </div>
    </div>
    <button class="btn btn-block" @click="$emit('done')" :disabled="done">{{ done ? '✅ Sudah tuntas' : 'Tandai tuntas +20 XP ✓' }}</button>
  </div>`,
});

app.config.globalProperties.store = store;
app.config.globalProperties.LEVELS = LEVELS;
app.config.globalProperties.LESSONS = LESSONS;
app.config.globalProperties.QUIZ = QUIZ;
app.config.globalProperties.QUIZ_RULES = QUIZ_RULES;
app.config.globalProperties.KANA = KANA;
app.config.globalProperties.toast = toast;
app.config.globalProperties.speak = speak;
app.config.globalProperties.illus = illus;
app.config.globalProperties.LV_ICON = LV_ICON;
app.mount('#app');

