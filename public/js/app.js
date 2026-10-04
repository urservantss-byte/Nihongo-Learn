/* Nihongo Learn — Vue 3 SPA */
const { createApp, reactive } = Vue;

const store = reactive({
  user: null, token: localStorage.getItem('nl_token') || '',
  page: 'home', theme: localStorage.getItem('nl_theme') || 'sakura',
  done: [], stats: null, quizHist: [],
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

// ilustrasi SVG per level
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

// definisi pelajaran: key -> {level, title, type, items}
function buildLessons() {
  const L = [];
  const kanaRows = [['あ行','a'],['か行','ka'],['さ行','sa'],['た行','ta'],['な行','na'],['は行','ha'],['ま行','ma'],['や行','ya'],['ら行','ra'],['わ行・ん','wa']];
  kanaRows.forEach((r, i) => {
    L.push({ key: `hiragana-${i+1}`, level: 'hiragana', title: `Hiragana ${r[0]}`, type: 'kana', kanaType: 'hiragana' });
    L.push({ key: `katakana-${i+1}`, level: 'katakana', title: `Katakana ${r[0]}`, type: 'kana', kanaType: 'katakana' });
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

const app = createApp({
  data: () => ({
    // auth
    mode: 'login', fName: '', fEmail: '', fPass: '', fLevel: 'hiragana', fIntensity: 'sedang',
    // nav
    tab: 'home',
    // learn
    learnLevel: 'hiragana', openLesson: null, kanaFilter: '',
    // quiz
    qLevel: 'n5', qSec: 0, qIdx: 0, qAns: [], qTime: 0, qTimer: null, qDone: false, qScore: 0,
    // games
    gTab: 'match', mCards: [], mOpen: [], mHits: 0, mMoves: 0,
    sprintQ: null, sprintScore: 0, sprintTime: 60, sprintTimer: null, sprintOn: false,
  }),
  computed: {
    user() { return store.user; },
    lessonsForLevel() { return ALL_LESSONS.filter(l => l.level === this.learnLevel); },
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
        const prev = LEVEL_ORDER[i-1];
        o[lv] = this.levelProgress[prev] < 1;
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
  },
  methods: {
    // ---- auth ----
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
      } catch { this.logout(); }
    },
    toggleTheme() { setTheme(store.theme === 'sakura' ? 'zen' : 'sakura'); toast(store.theme === 'sakura' ? '🌸 Tema Sakura' : '⛩️ Tema Zen'); },
    // ---- learn ----
    kanaList(les) {
      const base = les.kanaType === 'hiragana' ? KANA.hiragana : KANA.katakana;
      const daku = les.kanaType === 'hiragana' ? KANA.hiraganaDaku : KANA.katakanaDaku;
      const idx = parseInt(les.key.split('-')[1]) - 1;
      const rows = [[0,5],[5,10],[10,15],[15,20],[20,25],[25,30],[30,35],[35,38],[38,43],[43,46]];
      let [a,b] = rows[idx];
      let items = base.slice(a,b).map(x => ({...x}));
      if (idx === 9) items = [...base.slice(43,46)];
      return items;
    },
    async completeLesson(key) {
      try { await api('/api/progress', { method: 'POST', body: JSON.stringify({ lesson_key: key }) }); store.done.push(key); toast('Materi selesai! +1 🎉'); }
      catch (e) { toast(e.message); }
    },
    // ---- quiz ----
    startQuiz() {
      this.qSec = 0; this.qIdx = 0; this.qAns = []; this.qDone = false; this.qScore = 0;
      this.tab = 'quizrun'; this.$nextTick(() => this.runSec());
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
      this.qAns.push({ q, pick: i, ok: i === q.a });
      if (q.audio) speak(q.audio);
      setTimeout(() => {
        if (this.qIdx + 1 < this.secQs.length) this.qIdx++;
        else this.nextSec();
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
      try { await api('/api/quiz/result', { method: 'POST', body: JSON.stringify({ level: this.qLevel, score: this.qScore, total: this.qAns.length }) }); this.refresh(); }
      catch {}
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
            if (this.mHits === 8) { toast(`Menang! ${this.mMoves} langkah 🎉`); api('/api/game/score', { method: 'POST', body: JSON.stringify({ game: 'match', score: Math.max(100 - this.mMoves * 2, 10) }) }).catch(() => {}); }
          }, 400);
        } else setTimeout(() => { a.open = b.open = false; this.mOpen = []; }, 800);
      }
    },
    startSprint() {
      this.sprintScore = 0; this.sprintTime = 60; this.sprintOn = true;
      this.nextSprint();
      clearInterval(this.sprintTimer);
      this.sprintTimer = setInterval(() => { this.sprintTime--; if (this.sprintTime <= 0) { clearInterval(this.sprintTimer); this.sprintOn = false; toast(`Waktu habis! Skor: ${this.sprintScore} 🎯`); api('/api/game/score', { method: 'POST', body: JSON.stringify({ game: 'sprint', score: this.sprintScore }) }).catch(() => {}); } }, 1000);
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
      if (o === this.sprintQ.ans) { this.sprintScore += 10; speak(this.sprintQ.k); } else this.sprintScore = Math.max(0, this.sprintScore - 5);
      this.nextSprint();
    },
  },
  mounted() {
    // kelopak sakura jatuh (hanya tema sakura)
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
      <button class="theme-btn" @click="toggleTheme">{{ store.theme === 'sakura' ? '⛩️ Zen' : '🌸 Sakura' }}</button>
    </header>

    <div v-if="!user" class="card" style="max-width:440px;margin:30px auto">
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
      <label class="lbl">Password</label><input v-model="fPass" type="password" placeholder="••••••">
      <button class="btn" style="width:100%;margin-top:10px" @click="doAuth">{{ mode === 'login' ? 'Masuk' : 'Daftar' }}</button>
      <p class="muted" style="text-align:center;margin-top:10px;cursor:pointer" @click="mode = mode==='login'?'register':'login'">
        {{ mode === 'login' ? 'Belum punya akun? Daftar' : 'Sudah punya akun? Masuk' }}</p>
    </div>

    <div v-else>
      <!-- HOME -->
      <div v-if="tab==='home'">
        <div class="card"><div v-html="illus('study')"></div>
          <h2>Konnichiwa, {{ user.name }}! 👋</h2>
          <p class="muted">Level: <b>{{ user.level.toUpperCase() }}</b> · <span class="streak">🔥 {{ store.stats?.streak_days || 0 }} hari streak</span></p>
          <div class="grid2" style="margin-top:10px">
            <div class="card" style="margin:0;text-align:center"><div style="font-size:28px;font-weight:800">{{ store.stats?.lessons_done || 0 }}</div><div class="muted">Materi selesai</div></div>
            <div class="card" style="margin:0;text-align:center"><div style="font-size:28px;font-weight:800">{{ store.stats?.quiz_avg || 0 }}%</div><div class="muted">Rata-rata quiz</div></div>
          </div>
        </div>
        <h2 class="ttl">🗓️ Materi hari ini</h2>
        <div v-if="!dailyLessons.length" class="card">🎉 Semua materi tuntas! Istirahat atau main quiz yuk.</div>
        <div v-for="l in dailyLessons" :key="l.key" class="lvl" @click="learnLevel=l.level;openLesson=l.key;tab='learn'">
          <div class="badge">{{ LEVELS.find(x=>x.id===l.level).icon }}</div>
          <div style="flex:1"><b>{{ l.title }}</b><div class="muted">{{ LEVELS.find(x=>x.id===l.level).name }}</div></div>
          <div>▶️</div>
        </div>
        <h2 class="ttl">🛤️ Jalur belajar</h2>
        <div v-for="lv in ['hiragana','katakana','n5','n4','n3','n2','n1']" :key="lv"
             class="lvl" :class="{locked: levelLocked[lv]}" @click="!levelLocked[lv] && (learnLevel=lv,tab='learn')">
          <div class="badge">{{ ['hiragana','katakana','n5','n4','n3','n2','n1'].find(x=>x===lv) ? ({hiragana:'あ',katakana:'ア',n5:'5',n4:'4',n3:'3',n2:'2',n1:'1'})[lv] : '' }}</div>
          <div style="flex:1"><b>{{ lv.toUpperCase() }}</b><div class="bar"><i :style="{width: Math.round(levelProgress[lv]*100)+'%'}"></i></div></div>
          <div>{{ levelLocked[lv] ? '🔒' : Math.round(levelProgress[lv]*100)+'%' }}</div>
        </div>
      </div>

      <!-- LEARN -->
      <div v-if="tab==='learn'">
        <h2 class="ttl">📖 Belajar</h2>
        <select v-model="learnLevel" @change="openLesson=null">
          <option v-for="lv in ['hiragana','katakana','n5','n4','n3','n2','n1']" :value="lv" :disabled="levelLocked[lv]">{{ lv.toUpperCase() }} {{ levelLocked[lv] ? '🔒' : '' }}</option>
        </select>
        <div v-if="!openLesson">
          <div v-for="l in lessonsForLevel" :key="l.key" class="lvl" @click="openLesson=l.key">
            <div class="badge">{{ doneSet.has(l.key) ? '✅' : '📝' }}</div>
            <div style="flex:1"><b>{{ l.title }}</b></div><div>▶️</div>
          </div>
        </div>
        <div v-else class="card pop">
          <button class="btn ghost" @click="openLesson=null">← Kembali</button>
          <LessonView :les="lessonsForLevel.find(l=>l.key===openLesson)" :done="doneSet.has(openLesson)" @done="completeLesson(openLesson);openLesson=null" />
        </div>
      </div>

      <!-- QUIZ -->
      <div v-if="tab==='quiz'">
        <h2 class="ttl">⏱️ Quiz JLPT</h2>
        <div v-html="illus('quiz')"></div>
        <label class="lbl">Pilih level</label>
        <select v-model="qLevel"><option v-for="lv in ['n5','n4','n3','n2','n1']" :value="lv">{{ lv.toUpperCase() }}</option></select>
        <div class="card"><b>Aturan waktu (demo, proporsional JLPT):</b>
          <div v-for="s in quizSecs" :key="s.id" class="muted">• {{ s.name }} — {{ fmt(s.time) }}</div>
        </div>
        <button class="btn" style="width:100%" @click="startQuiz">Mulai Quiz 🚀</button>
        <h2 class="ttl">📜 Riwayat</h2>
        <div v-for="h in store.quizHist" :key="h.created_at" class="card" style="padding:10px">{{ h.level.toUpperCase() }} — {{ h.score }}/{{ h.total }} ({{ Math.round(h.score/h.total*100) }}%)</div>
      </div>

      <!-- QUIZ RUN -->
      <div v-if="tab==='quizrun' && secQs.length" class="card pop">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <b>{{ quizSecs[qSec].name }} ({{ qLevel.toUpperCase() }})</b>
          <span class="timer" :class="{low: qTime<60}">⏱️ {{ fmt(qTime) }}</span>
        </div>
        <div class="muted">Soal {{ qIdx+1 }}/{{ secQs.length }} · Seksi {{ qSec+1 }}/{{ quizSecs.length }}</div>
        <div v-if="secQs[qIdx].passage" class="passage">{{ secQs[qIdx].q.split('質問')[0] }}</div>
        <h3 style="margin:12px 0">{{ secQs[qIdx].passage ? '質問：' + secQs[qIdx].q.split('質問：')[1] : secQs[qIdx].q }}</h3>
        <button v-if="secQs[qIdx].audio" class="btn ghost" @click="playAudio(secQs[qIdx].audio)">🔊 Putar audio</button>
        <button v-for="(o,i) in secQs[qIdx].o" :key="i" class="opt"
          :class="{pick: qAns[qAns.length-1]?.q===secQs[qIdx] && qAns[qAns.length-1].pick===i, right: qAns[qAns.length-1]?.q===secQs[qIdx] && i===secQs[qIdx].a, wrong: qAns[qAns.length-1]?.q===secQs[qIdx] && qAns[qAns.length-1].pick===i && i!==secQs[qIdx].a}"
          @click="answer(i)">{{ ['A','B','C','D'][i] }}. {{ o }}</button>
      </div>

      <!-- QUIZ DONE -->
      <div v-if="tab==='quizdone'" class="card" style="text-align:center">
        <div v-html="illus('trophy')"></div>
        <h2>Skor: {{ qScore }}/{{ qAns.length }} ({{ Math.round(qScore/qAns.length*100) }}%)</h2>
        <p class="muted">{{ qScore/qAns.length >= .7 ? 'Sugoi! 🎉' : qScore/qAns.length >= .4 ? 'Lumayan, teruskan! 💪' : 'Ayo belajar lagi! 📚' }}</p>
        <button class="btn" @click="tab='quiz'">Quiz lagi</button>
      </div>

      <!-- GAMES -->
      <div v-if="tab==='games'">
        <h2 class="ttl">🎮 Games</h2>
        <div class="grid2">
          <button class="btn ghost" @click="gTab='match'">🃏 Kana Match</button>
          <button class="btn ghost" @click="gTab='sprint'">⚡ Kana Sprint</button>
        </div>
        <div v-if="gTab==='match'" class="card">
          <div v-html="illus('game')"></div>
          <p class="muted">Cocokkan kana dengan romaji-nya! Langkah: {{ mMoves }}</p>
          <div class="game-board">
            <div v-for="c in mCards" :key="c.k" class="gcard" :class="{open:c.open,hit:c.hit}" @click="flip(c)">{{ c.open||c.hit ? c.t : '❓' }}</div>
          </div>
          <button class="btn" style="margin-top:10px" @click="startMatch">🔄 Ulangi</button>
        </div>
        <div v-if="gTab==='sprint'" class="card" style="text-align:center">
          <p class="muted">Pilih romaji yang benar secepatnya! 60 detik.</p>
          <button v-if="!sprintOn && sprintTime!==0" class="btn" @click="startSprint">Mulai ⚡</button>
          <div v-if="sprintOn || sprintTime===0 && false"></div>
          <div v-if="sprintQ && sprintOn">
            <div style="font-size:64px;margin:10px">{{ sprintQ.k }}</div>
            <div class="timer">⏱️ {{ sprintTime }}s · Skor: {{ sprintScore }}</div>
            <button v-for="o in sprintQ.opts" :key="o" class="opt" style="text-align:center" @click="sprintPick(o)">{{ o }}</button>
          </div>
          <div v-if="!sprintOn && sprintTime===0">Skor akhir: <b>{{ sprintScore }}</b> <button class="btn" @click="startSprint">Main lagi</button></div>
        </div>
      </div>

      <!-- PROGRESS -->
      <div v-if="tab==='progress'">
        <h2 class="ttl">📊 Progresku</h2>
        <div class="grid2">
          <div class="card" style="text-align:center"><div style="font-size:28px;font-weight:800">{{ store.stats?.lessons_done||0 }}</div><div class="muted">Materi tuntas</div></div>
          <div class="card" style="text-align:center"><div style="font-size:28px;font-weight:800">{{ store.stats?.quiz_count||0 }}</div><div class="muted">Quiz dikerjakan</div></div>
          <div class="card" style="text-align:center"><div style="font-size:28px;font-weight:800">{{ store.stats?.quiz_avg||0 }}%</div><div class="muted">Rata-rata quiz</div></div>
          <div class="card" style="text-align:center"><div style="font-size:28px;font-weight:800" class="streak">🔥{{ store.stats?.streak_days||0 }}</div><div class="muted">Hari streak</div></div>
        </div>
        <div v-for="lv in ['hiragana','katakana','n5','n4','n3','n2','n1']" :key="lv" class="lvl">
          <div class="badge">{{ ({hiragana:'あ',katakana:'ア',n5:'5',n4:'4',n3:'3',n2:'2',n1:'1'})[lv] }}</div>
          <div style="flex:1"><b>{{ lv.toUpperCase() }}</b><div class="bar"><i :style="{width: Math.round(levelProgress[lv]*100)+'%'}"></i></div></div>
          <div>{{ Math.round(levelProgress[lv]*100) }}%</div>
        </div>
        <button class="btn ghost" @click="logout" style="width:100%">Keluar</button>
      </div>

      <nav class="nav">
        <button :class="{on:tab==='home'}" @click="tab='home'"><span class="ic">🏠</span>Home</button>
        <button :class="{on:tab==='learn'}" @click="tab='learn'"><span class="ic">📖</span>Belajar</button>
        <button :class="{on:tab==='quiz'||tab==='quizrun'}" @click="tab='quiz'"><span class="ic">⏱️</span>Quiz</button>
        <button :class="{on:tab==='games'}" @click="tab='games'"><span class="ic">🎮</span>Game</button>
        <button :class="{on:tab==='progress'}" @click="tab='progress'"><span class="ic">📊</span>Progres</button>
      </nav>
    </div>
  </div>`,
});

// komponen isi pelajaran
app.component('LessonView', {
  props: ['les', 'done'],
  emits: ['done'],
  methods: {
    kana() {
      const base = this.les.kanaType === 'hiragana' ? KANA.hiragana : KANA.katakana;
      const idx = parseInt(this.les.key.split('-')[1]) - 1;
      const rows = [[0,5],[5,10],[10,15],[15,20],[20,25],[25,30],[30,35],[35,38],[38,43],[43,46]];
      const [a,b] = rows[idx];
      return base.slice(a,b);
    },
    speak,
  },
  template: `
  <div>
    <h2>{{ les.title }}</h2>
    <div v-if="les.type==='kana'">
      <p class="muted">Klik huruf untuk dengar cara baca. Hafalkan bentuk & bunyinya!</p>
      <div class="kana-grid"><div v-for="k in kana()" :key="k.k" class="kana" @click="speak(k.k)"><div class="k">{{ k.k }}</div><div class="r">{{ k.r }}</div></div></div>
      <div class="card"><b>💡 Tips:</b> Tulis berulang di kertas. Bunyi ぢ/づ dan じ/ず sama — ikuti konteks!</div>
    </div>
    <div v-if="les.type==='kotoba'">
      <div v-for="w in (LESSONS[les.level].kotoba||[])" :key="w.jp" class="lvl" @click="speak(w.jp)">
        <div style="flex:1"><b style="font-size:20px">{{ w.jp }}</b> <span class="muted">{{ w.kj }}</span><div class="muted">{{ w.r }} — {{ w.id }}</div></div><div>🔊</div>
      </div>
    </div>
    <div v-if="les.type==='kanji'">
      <div v-for="k in (LESSONS[les.level].kanji||[])" :key="k.kj" class="card">
        <div style="font-size:44px">{{ k.kj }}</div>
        <div><b>{{ k.id }}</b></div><div class="muted">On: {{ k.on }} · Kun: {{ k.kun }}</div>
        <div v-for="e in k.ex" :key="e.j" class="muted" @click="speak(e.j)" style="cursor:pointer">🔊 {{ e.j }} ({{ e.r }}) — {{ e.i }}</div>
      </div>
    </div>
    <div v-if="les.type==='bunpou'">
      <div v-for="b in (LESSONS[les.level].bunpou||[])" :key="b.t" class="card">
        <b style="font-size:18px">{{ b.t }}</b><p style="margin:6px 0">{{ b.e }}</p>
        <div v-for="x in b.x" :key="x.j" class="passage" @click="speak(x.j)" style="cursor:pointer">{{ x.j }}<br><span class="muted">{{ x.i }} 🔊</span></div>
      </div>
    </div>
    <div v-if="les.type==='choukai'">
      <p class="muted">Dengarkan audio (bahasa Jepang), lalu pilih arti yang benar. Ini simulasi seksi Choukai JLPT!</p>
      <div v-for="(c,i) in (LESSONS[les.level].choukai||[])" :key="i" class="card">
        <p>{{ c.q }}</p>
        <button class="btn ghost" @click="speak(c.a)">🔊 Putar audio</button>
        <button v-for="(o,oi) in c.opts" :key="oi" class="opt" @click="o===c.opts[c.ans]?$emit('done'):toast('Belum tepat, coba lagi!')">{{ o }}</button>
      </div>
    </div>
    <button class="btn" style="width:100%;margin-top:12px" @click="$emit('done')" :disabled="done">{{ done ? '✅ Sudah tuntas' : 'Tandai tuntas ✓' }}</button>
  </div>`,
});

app.config.globalProperties.store = store;
app.config.globalProperties.LEVELS = LEVELS;
app.config.globalProperties.LESSONS = LESSONS;
app.config.globalProperties.toast = toast;
app.config.globalProperties.speak = speak;
app.config.globalProperties.illus = illus;
app.mount('#app');
