/* Nihongo Learn — Vue 3 SPA (redesign bersih + 7 pola referensi) */
const { createApp, reactive } = Vue;

const store = reactive({
  user: null, token: localStorage.getItem('nl_token') || '', authChecked: false,
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

// ===== Ikon SVG modern (gaya garis tipis, elegan) =====
const ICONS = {
  home: '<path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
  book: '<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/>',
  gamepad: '<path d="M17.3 5H6.7a4.7 4.7 0 0 0-4.6 5.6l.9 4.6A3 3 0 0 0 6 17.7c.8 0 1.6-.3 2.1-.9l1.2-1.2h5.4l1.2 1.2c.5.6 1.3.9 2.1.9a3 3 0 0 0 3-2.5l.9-4.6A4.7 4.7 0 0 0 17.3 5Z"/><path d="M7 11v3M5.5 12.5h3"/><circle cx="15.5" cy="11.5" r=".8"/><circle cx="18" cy="13.5" r=".8"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c.8-3.6 3.9-5.5 7.5-5.5s6.7 1.9 7.5 5.5"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="16" rx="2.5"/><path d="M8 3v4M16 3v4M3.5 10h17"/><path d="m9.5 15 1.8 1.8 3.2-3.2"/>',
  layers: '<path d="m12 3 9 4.5-9 4.5-9-4.5z"/><path d="m3 12.5 9 4.5 9-4.5"/><path d="m3 17 9 4.5L21 17"/>',
  menu: '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>',
  trophy: '<path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4.5a2.5 2.5 0 0 0 2.6 4.5M17 6h2.5a2.5 2.5 0 0 1-2.6 4.5"/><path d="M12 14v3M8.5 21h7M10 17c0 1.5-1 2-2.5 2.5M14 17c0 1.5 1 2 2.5 2.5"/>',
  chart: '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M8 17v-4M13 17V7M18 17v-7"/>',
  sliders: '<path d="M4 21v-6M4 9V3M12 21v-9M12 6V3M20 21v-4M20 11V3"/><path d="M2 15h4M10 8h4M18 17h4"/>',
  play: '<path d="M7 4.5v15l12-7.5z"/>',
  check: '<path d="m4.5 12.5 5 5 10-11"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  volume: '<path d="M11 5 6.5 9H3v6h3.5L11 19z"/><path d="M15 9a4.5 4.5 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11"/>',
  back: '<path d="M15 5l-7 7 7 7"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  refresh: '<path d="M20 12a8 8 0 1 1-2.3-5.6"/><path d="M20 3v4h-4"/>',
  sparkles: '<path d="M12 3l1.7 5.6a2 2 0 0 0 1.3 1.3L20.5 12l-5.5 1.7a2 2 0 0 0-1.3 1.3L12 20.5l-1.7-5.5a2 2 0 0 0-1.3-1.3L3.5 12 9 10.3a2 2 0 0 0 1.3-1.3z"/><path d="M19 3.5v3M20.5 5h-3"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
  headphones: '<path d="M4 15v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="7" rx="1.5"/><rect x="17" y="14" width="4" height="7" rx="1.5"/>',
  filetext: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/>',
  flame: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5C14.5 8 13 6.5 13 3.5c-3 2-5 4.5-5.5 7C6 11 5 12.5 5 15a7 7 0 0 0 7 7z"/><path d="M12 22a3.5 3.5 0 0 0 3.5-3.5c0-1-.5-2-1.5-2.7C13 15 12.5 14 12.5 12.5c-1.8 1.2-3 2.7-3.2 4.2"/>',
  coin: '<circle cx="9" cy="9" r="6"/><path d="M14.5 5.5a6 6 0 1 1-9 9"/><path d="M9 6.5v5M7 8.5h4"/>',
  chat: '<path d="M21 12a8 8 0 0 1-8 8H4l1.5-3.2A8 8 0 1 1 21 12z"/>',
  star: '<path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6-5.4-2.9-5.4 2.9 1.1-6L3.2 9.4l6.1-.8z"/>',
  shuffle: '<path d="M3 7h4l10 10h4"/><path d="m18 14 3 3-3 3"/><path d="M3 17h4l2.5-2.5"/><path d="M13.5 9.5 17 7h4"/><path d="m18 4 3 3-3 3"/>',
  eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>',
  pen: '<path d="M17 3a2.8 2.8 0 1 1 4 4L8 20l-5 1 1-5z"/>',
  card: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3 10h18"/>',
  send: '<path d="m21 3-9.5 9.5"/><path d="M21 3 14 21l-2.5-8.5z"/>',
  lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  route: '<circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="5" r="2.5"/><path d="M8.5 19H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5"/>',
};
function ic(name, size) {
  return `<svg class="svg-ic" ${size ? `style="width:${size}px;height:${size}px"` : ''} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ''}</svg>`;
}

// acak array (Fisher-Yates) & acak pilihan jawaban soal
function shuffled(arr) {
  const x = arr.slice();
  for (let i = x.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[x[i], x[j]] = [x[j], x[i]]; }
  return x;
}
function shuffleQuestion(q) {
  const order = shuffled(q.o.map((_, i) => i));
  return { ...q, o: order.map(i => q.o[i]), a: order.indexOf(q.a) };
}

// kana -> romaji (untuk cek jawaban flashcard kanji)
const RM_F = { 'あ':'a','い':'i','う':'u','え':'e','お':'o','か':'ka','き':'ki','く':'ku','け':'ke','こ':'ko','さ':'sa','し':'shi','す':'su','せ':'se','そ':'so','た':'ta','ち':'chi','つ':'tsu','て':'te','と':'to','な':'na','に':'ni','ぬ':'nu','ね':'ne','の':'no','は':'ha','ひ':'hi','ふ':'fu','へ':'he','ほ':'ho','ま':'ma','み':'mi','む':'mu','め':'me','も':'mo','や':'ya','ゆ':'yu','よ':'yo','ら':'ra','り':'ri','る':'ru','れ':'re','ろ':'ro','わ':'wa','を':'wo','ん':'n','が':'ga','ぎ':'gi','ぐ':'gu','げ':'ge','ご':'go','ざ':'za','じ':'ji','ず':'zu','ぜ':'ze','ぞ':'zo','だ':'da','ぢ':'ji','づ':'zu','で':'de','ど':'do','ば':'ba','び':'bi','ぶ':'bu','べ':'be','ぼ':'bo','ぱ':'pa','ぴ':'pi','ぷ':'pu','ぺ':'pe','ぽ':'po','きゃ':'kya','きゅ':'kyu','きょ':'kyo','しゃ':'sha','しゅ':'shu','しょ':'sho','ちゃ':'cha','ちゅ':'chu','ちょ':'cho','にゃ':'nya','にゅ':'nyu','にょ':'nyo','ひゃ':'hya','ひゅ':'hyu','ひょ':'hyo','みゃ':'mya','みゅ':'myu','みょ':'myo','りゃ':'rya','りゅ':'ryu','りょ':'ryo','ぎゃ':'gya','ぎゅ':'gyu','ぎょ':'gyo','じゃ':'ja','じゅ':'ju','じょ':'jo','びゃ':'bya','びゅ':'byu','びょ':'byo','ぴゃ':'pya','ぴゅ':'pyu','ぴょ':'pyo','ぁ':'a','ぃ':'i','ぅ':'u','ぇ':'e','ぉ':'o','っ':'','ゃ':'ya','ゅ':'yu','ょ':'yo','ー':'-' };
function kanaToRomaji(kana) {
  const hira = kana.replace(/[\u30a1-\u30f6]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60)).replace(/\./g, '');
  let out = '', i = 0;
  while (i < hira.length) {
    const two = hira.slice(i, i + 2);
    if (RM_F[two]) { out += RM_F[two]; i += 2; continue; }
    const c = hira[i];
    if (c === 'っ') { const nx = RM_F[hira.slice(i+1, i+3)] || RM_F[hira[i+1]] || ''; out += nx[0] || ''; i++; continue; }
    out += RM_F[c] || ''; i++;
  }
  return out.toLowerCase();
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
const TYPE_ICON = { kana: 'star', kotoba: 'filetext', kanji: 'pen', bunpou: 'book', choukai: 'headphones' };
// ---- Modul (pusat materi) ----
const MODUL_CATS = [
  { id: 'bunpou', icon: '📖', name: 'Bunpou JLPT', desc: 'Pola grammar N5–N1 · bisa dicari' },
  { id: 'kotoba', icon: '📝', name: 'Kosakata', desc: 'Kotoba per level & bab' },
  { id: 'kanji', icon: '🈁', name: 'Kanji', desc: 'Kanji per level & bab' },
  { id: 'bank', icon: '📚', name: 'Bank Soal JLPT', desc: 'Soal tahun 2018–2024' },
  { id: 'jft', icon: '🗣️', name: 'JFT-Basic', desc: 'Info & contoh soal' },
  { id: 'ssw', icon: '💼', name: 'SSW', desc: 'Per bidang pekerjaan' },
];
const SSW_FIELDS = [
  { id: 'kaigo', name: 'Kaigo', sub: '介護 · Perawat lansia' },
  { id: 'restoran', name: 'Restoran', sub: '外食 · Food service' },
  { id: 'pabrik', name: 'Pabrik Makanan', sub: '飲食料品製造業' },
  { id: 'cleaning', name: 'Building Cleaning', sub: 'ビルクリーニング' },
  { id: 'manufaktur', name: 'Manufaktur', sub: '製造業' },
];
const BANK_YEARS = ['2024', '2023', '2022', '2021', '2020', '2019', '2018'];
const LIB_TYPES = [
  { id: 'all', label: 'Semua', icon: 'layers' },
  { id: 'kotoba', label: 'Kotoba', icon: 'filetext' },
  { id: 'kanji', label: 'Kanji', icon: 'pen' },
  { id: 'bunpou', label: 'Bunpou', icon: 'book' },
  { id: 'choukai', label: 'Choukai', icon: 'headphones' },
];

const app = createApp({
  data: () => ({
    mode: 'login', fName: '', fEmail: '', fPass: '', fLevel: 'hiragana', fIntensity: 'sedang',
    tab: ['home','library','quiz','kamus','tanya','saya'].includes(localStorage.getItem('nl_tab')) ? localStorage.getItem('nl_tab') : 'home',
    learnLevel: 'hiragana', openLesson: null,
    libQ: '', libType: 'all',
    // modul (pusat materi)
    modulQ: '', modulCat: null, modulLevel: 'n5', modulSub: null, modulCh: null, modulPat: null, kvgOpen: {},
    simPkg: null, sim: null,
    // quiz
    quizMode: 'acak', qLevel: 'n5', qSec: 0, qIdx: 0, qAns: [], qTime: 0, qTimer: null, qDone: false, qScore: 0, secScores: [],
    genQs: [], shuffledQs: [], quizResume: null,
    // chapter (jalur belajar Soumatome)
    chapterProgress: {}, openChapter: null, chQuiz: null,
    // tanya AI (Muse Sensei)
    askMsgs: [], askInput: '', askLoading: false,
    // kamus
    kamusQ: '', kamusTab: 'kotoba', kamusJlpt: 0, kamusResults: [], kamusLoading: false, kamusDetail: null, kamusTimer: null, kamusId: '', kamusKanjiId: '', translating: false,
    // srs
    srsDue: [], srsTotal: 0, srsIdx: 0, srsShow: false, srsTyped: '', srsDone: 0,
    // saya
    myWeekly: 0,
    sbHidden: localStorage.getItem('nl_sb') === '1',
  }),
  computed: {
    pageTitle() {
      const t = { home: 'Beranda', library: 'Modul', quiz: 'Quiz', quizrun: 'Quiz', adaptiverun: 'Quiz Adaptif', kamus: 'Kamus', tanya: 'Tanya AI', saya: 'Saya', srsrun: 'Review' };
      return t[this.tab] || '';
    },
    user() { return store.user; },
    myChapters() {
      const lv = (store.user && store.user.level ? store.user.level : 'n5').toLowerCase();
      return CHAPTERS[lv] || CHAPTERS['n5'] || [];
    },
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
    dailyLessons() {
      // antrean harian: mulai dari level user saat daftar, lewati yang sudah tuntas (tidak mengulang),
      // lanjut ke materi baru; berhenti di level yang masih terkunci
      const n = { sedikit: 3, sedang: 6, banyak: 10 }[store.user?.intensity || 'sedang'];
      const out = [];
      const startIdx = Math.max(0, LEVEL_ORDER.indexOf(store.user?.level || 'hiragana'));
      for (let i = startIdx; i < LEVEL_ORDER.length; i++) {
        const lv = LEVEL_ORDER[i];
        if (i > startIdx && this.levelProgress[LEVEL_ORDER[i - 1]] < 1) break;
        for (const l of ALL_LESSONS.filter(x => x.level === lv)) {
          if (!this.doneSet.has(l.key)) { out.push(l); if (out.length >= n) return out; }
        }
      }
      return out;
    },
    libLessons() {
      return ALL_LESSONS.filter(l => l.level === this.learnLevel && (this.libType === 'all' || l.type === this.libType));
    },
    libSearch() {
      const q = this.libQ.trim().toLowerCase();
      if (q.length < 2) return [];
      const groups = [
        { type: 'kotoba', label: 'Kotoba', items: [] },
        { type: 'kanji', label: 'Kanji', items: [] },
        { type: 'bunpou', label: 'Bunpou', items: [] },
        { type: 'choukai', label: 'Choukai', items: [] },
      ];
      const hit = (v) => (v || '').toLowerCase().includes(q);
      for (const lv of LEVEL_ORDER) {
        const L = LESSONS[lv] || {};
        for (const w of (L.kotoba || [])) if (hit(w.jp) || hit(w.kj) || hit(w.r) || hit(w.id))
          groups[0].items.push({ key: `${lv}-kotoba`, level: lv, type: 'kotoba', title: `${w.jp} (${w.r})`, sub: w.id });
        for (const k of (L.kanji || [])) if (hit(k.kj) || hit(k.id) || hit(k.on) || hit(k.kun))
          groups[1].items.push({ key: `${lv}-kanji`, level: lv, type: 'kanji', title: `${k.kj} — ${k.id}`, sub: `On: ${k.on} · Kun: ${k.kun}` });
        for (const b of (L.bunpou || [])) if (hit(b.t) || hit(b.e))
          groups[2].items.push({ key: `${lv}-bunpou`, level: lv, type: 'bunpou', title: b.t, sub: b.e });
        for (const c of (L.choukai || [])) if (hit(c.q) || hit(c.a))
          groups[3].items.push({ key: `${lv}-choukai`, level: lv, type: 'choukai', title: c.a, sub: c.q });
      }
      for (const g of groups) g.items = g.items.slice(0, 12);
      return groups.filter(g => g.items.length);
    },
    // ---- Modul: cari & jelajahi bunpou/kotoba/kanji ----
    modulChapters() {
      if (this.modulCat === 'kanji' && (this.modulLevel === 'n5' || this.modulLevel === 'n4') && typeof KANJI_NC !== 'undefined' && KANJI_NC[this.modulLevel]) {
        const lv = this.modulLevel;
        return KANJI_NC[lv].map(l => ({ id: 'nc-' + lv + '-' + l.lesson, bab: String(l.lesson), title: 'Bab ' + l.lesson + ': ' + l.title_id, title_jp: l.title_jp, nc: true, ncLesson: l }));
      }
      return CHAPTERS[this.modulLevel] || [];
    },
    modulChItems() {
      const ch = this.modulChapters.find(c => c.id === this.modulCh);
      if (!ch) return [];
      if (ch.nc) return ch.ncLesson.kanji;
      const s = ch.sections.find(x => x.type === this.modulCat);
      return (s && s.items) || [];
    },
    modulPatterns() {
      const out = [];
      for (const ch of this.modulChapters) {
        const b = ch.sections.find(s => s.type === 'bunpou');
        const k = ch.sections.find(s => s.type === 'kaiwa');
        for (const it of (b ? b.items : [])) out.push(this._modPat(ch, it, k));
      }
      return out;
    },
    modulSearchRes() {
      const q = this.modulQ.trim().toLowerCase();
      if (q.length < 2) return [];
      const out = [];
      for (const lv of ['n5', 'n4', 'n3', 'n2', 'n1'])
        for (const ch of (CHAPTERS[lv] || [])) {
          const b = ch.sections.find(s => s.type === 'bunpou');
          const k = ch.sections.find(s => s.type === 'kaiwa');
          for (const it of (b ? b.items : []))
            if ((it.pattern + ' ' + (it.arti || '')).toLowerCase().includes(q)) out.push(this._modPat(ch, it, k, lv));
        }
      return out.slice(0, 60);
    },
    // ---- Simulasi bank soal ----
    bankPkgs() { return (typeof BANK_PACKAGES === 'undefined') ? [] : BANK_PACKAGES; },
    jlptPkgs() { return this.bankPkgs.filter(p => p.cat === 'jlpt' && String(p.year) === String(this.modulSub) && p.level === this.modulLevel); },
    jftPkgs() { return this.bankPkgs.filter(p => p.cat === 'jft'); },
    sswPkgs() { return this.bankPkgs.filter(p => p.cat === 'ssw' && p.field === this.modulSub); },
    bankYearCount() {
      const c = {};
      for (const p of this.bankPkgs) if (p.cat === 'jlpt') c[String(p.year)] = (c[String(p.year)] || 0) + 1;
      return c;
    },
    simSecQs() {
      if (!this.sim) return [];
      const sec = this.sim.secs[this.sim.secIdx];
      const out = [];
      this.sim.pkg.questions.forEach((q, i) => { if (!this.sim.pkg.sections || (q.sec || q.s) === sec.id) out.push({ q, i }); });
      return out;
    },
    simCur() { return this.sim ? (this.simSecQs[this.sim.qPos] || null) : null; },
    simScore() {
      if (!this.sim) return null;
      let ok = 0, tot = 0;
      this.sim.pkg.questions.forEach((q, i) => {
        if (q.a === null || q.a === undefined) return;
        tot++;
        if (this.sim.ans[i] === q.a) ok++;
      });
      return { ok, tot, pct: tot ? Math.round(ok / tot * 100) : 0 };
    },
    quizQs() {
      if (this.quizMode === 'acak') return this.genQs;
      return this.shuffledQs.length ? this.shuffledQs : (QUIZ[this.qLevel] || []);
    },
    quizSecs() {
      if (this.quizMode === 'acak') return [{ id: 'goi', name: 'Kuis Acak', time: 600 }];
      return QUIZ_RULES[this.qLevel].sections;
    },
    secQs() { return this.quizQs.filter(q => q.s === this.quizSecs[this.qSec].id); },
    weakSpots() {
      return this.secScores.filter(s => s.pct < 60);
    },
  },
  watch: {
    tab() { this.saveTab(); if (this.tab !== 'library') this.closeSim(); window.scrollTo({ top: 0, behavior: 'smooth' }); },
    openChapter() { this.saveChapterState(); },
    chQuiz: { deep: true, handler() { this.saveChapterState(); } },
  },
  methods: {
    fmtQ(t) {
      if (!t) return '';
      var lines = String(t).split('\n');
      var out = [];
      for (var i = 0; i < lines.length; i++) {
        var ln = lines[i].trim();
        if (!ln) { out.push(''); continue; }
        var prev = out.length ? out[out.length - 1] : null;
        var startMarker = /^(\d+\s*[\)\.]|\uff08|\[|[・\u2022\-])/.test(ln);
        if (prev && prev !== '' && !startMarker && !/[。、！？：:;?.!」』）)\]\}]$/.test(prev)) {
          out[out.length - 1] = prev + ' ' + ln;
        } else { out.push(ln); }
      }
      return out.join('\n').replace(/\n{3,}/g, '\n\n').replace(/^\n+|\n+$/g, '');
    },
    toggleKvgBox(k) {
      const kj = (k && typeof k === 'object') ? (k.kj || k.ch) : k;
      if (!kj) return;
      this.kvgOpen[kj] = !this.kvgOpen[kj];
    },
    kanjisOf(j) { const m = String(j || '').match(/[一-鿿]/g); return m || []; },

    saveTab() { const m = { quizrun: 'quiz', quizdone: 'quiz', adaptiverun: 'quiz', srsrun: 'saya', games: 'tanya' }; localStorage.setItem('nl_tab', m[this.tab] || this.tab); },
    saveQuizProgress() {
      if (!['quizrun', 'adaptiverun'].includes(this.tab) || this.qDone) return;
      try {
        const data = { tab: this.tab, quizMode: this.quizMode, qLevel: this.qLevel, qSec: this.qSec, qIdx: this.qIdx, qTime: this.qTime, qAns: this.qAns, savedAt: Date.now() };
        data.questions = this.tab === 'quizrun' ? (this.quizMode === 'acak' ? this.genQs : this.shuffledQs) : this.adaptiveQs;
        if (!data.questions || !data.questions.length) return;
        localStorage.setItem('nl_quiz', JSON.stringify(data));
      } catch {}
    },
    // ---- Simulasi bank soal ----
    simTimeStr(s) { const m = Math.floor(s / 60); return m + ':' + String(s % 60).padStart(2, '0'); },
    simTimeFor(pkg) { return Math.min(120, Math.max(30, pkg.questions.length)); },
    startSim(pkg) {
      this.stopSimTimer();
      const secs = pkg.sections || [{ id: 'all', name: 'Latihan', time: this.simTimeFor(pkg) }];
      this.simPkg = null;
      this.sim = { pkg, secs, secIdx: 0, qPos: 0, ans: {}, tLeft: secs[0].time * 60, timer: null, done: false };
      this.tickSim();
    },
    tickSim() {
      this.stopSimTimer();
      this.sim.timer = setInterval(() => {
        if (!this.sim || this.sim.done) return this.stopSimTimer();
        this.sim.tLeft--;
        if (this.sim.tLeft <= 0) this.nextSimSection();
      }, 1000);
    },
    stopSimTimer() { if (this.sim && this.sim.timer) { clearInterval(this.sim.timer); this.sim.timer = null; } },
    simAnswer(oi) { const c = this.simCur; if (!c || this.sim.done) return; this.sim.ans[c.i] = oi; },
    simGo(d) { const n = this.sim.qPos + d; if (n >= 0 && n < this.simSecQs.length) this.sim.qPos = n; },
    nextSimSection() {
      if (this.sim.secIdx < this.sim.secs.length - 1) {
        this.sim.secIdx++; this.sim.qPos = 0;
        this.sim.tLeft = this.sim.secs[this.sim.secIdx].time * 60;
        this.tickSim();
      } else this.finishSim();
    },
    finishSim() { this.stopSimTimer(); this.sim.done = true; },
    closeSim() { this.stopSimTimer(); this.sim = null; this.simPkg = null; },
    clearQuizProgress() { localStorage.removeItem('nl_quiz'); this.quizResume = null; },
    _modPat(ch, it, k, lv) {
      return { level: lv || this.modulLevel, bab: ch.bab, chTitle: ch.title, pattern: it.pattern, arti: String(it.arti || '').replace(/<[^>]+>/g, ''), item: it, kaiwa: k ? k.lines : [] };
    },
    modulSecCount(ch) {
      if (ch.nc) return ch.ncLesson.kanji.length;
      const s = ch.sections.find(x => x.type === this.modulCat);
      return (s && s.items ? s.items.length : 0);
    },
    // ---- posisi baca bab & quiz bab: tetap stay saat refresh ----
    saveChapterState() {
      try {
        if (!this.openChapter && !this.chQuiz) { localStorage.removeItem('nl_chapter'); return; }
        const ch = this.chQuiz ? this.chQuiz.chapter : this.openChapter;
        const data = { chapter_id: ch.id, savedAt: Date.now(), quiz: null };
        if (this.chQuiz) {
          const cq = this.chQuiz;
          data.quiz = { qs: cq.qs, idx: cq.idx, ans: cq.ans, done: cq.done, score: cq.score, pct: cq.pct };
        }
        localStorage.setItem('nl_chapter', JSON.stringify(data));
      } catch {}
    },
    restoreChapterState() {
      try {
        if (!store.user) return;
        const s = JSON.parse(localStorage.getItem('nl_chapter') || 'null');
        if (!s || !s.chapter_id) return;
        const ch = Object.values(CHAPTERS).flat().find(c => c.id === s.chapter_id);
        if (!ch) { localStorage.removeItem('nl_chapter'); return; }
        this.openChapter = ch;
        if (s.quiz && s.quiz.qs && s.quiz.qs.length) {
          this.chQuiz = { chapter: ch, qs: s.quiz.qs, idx: Math.min(s.quiz.idx || 0, s.quiz.qs.length - 1), ans: s.quiz.ans || [], done: !!s.quiz.done, score: s.quiz.score || 0, pct: s.quiz.pct || 0, lock: false };
        }
        this.$nextTick(() => window.scrollTo({ top: 0 }));
      } catch { localStorage.removeItem('nl_chapter'); }
    },
    resumeTimer() {
      clearInterval(this.qTimer);
      this.qTimer = setInterval(() => { this.qTime--; if (this.qTime <= 0) { clearInterval(this.qTimer); this.nextSec(); } }, 1000);
    },
    resumeSavedQuiz() {
      const sq = this.quizResume; if (!sq) return;
      this.quizMode = sq.quizMode; this.qLevel = sq.qLevel; this.qSec = sq.qSec || 0;
      this.qIdx = sq.qIdx; this.qTime = sq.qTime; this.qAns = sq.qAns || [];
      this.qDone = false; this.qScore = 0; this.secScores = [];
      if (sq.tab === 'quizrun') {
        if (sq.quizMode === 'acak') { this.genQs = sq.questions; this.shuffledQs = []; }
        else { this.shuffledQs = sq.questions; this.genQs = []; }
        this.tab = 'quizrun'; this.$nextTick(() => this.resumeTimer());
      } else {
        this.adaptiveQs = sq.questions; this.tab = 'adaptiverun';
      }
      this.quizResume = null;
      toast('Quiz dilanjutkan! 💪');
    },
    discardSavedQuiz() { this.clearQuizProgress(); },
    // ---- chapter (jalur belajar) ----
    chapterState(ch) {
      const chs = this.myChapters;
      const idx = chs.findIndex(c => c.id === ch.id);
      if (idx < 0) return 'locked';
      if (this.chapterProgress[ch.id] && this.chapterProgress[ch.id].passed) return 'done';
      if (idx === 0) return 'open';
      const prev = chs[idx - 1];
      return (this.chapterProgress[prev.id] && this.chapterProgress[prev.id].passed) ? 'open' : 'locked';
    },
    async loadChapterProgress() {
      try {
        const d = await api('/api/chapters/progress');
        const o = {};
        for (const p of (d.progress || [])) o[p.chapter_id] = p;
        this.chapterProgress = o;
      } catch {}
    },
    openChapterDetail(ch) {
      if (this.chapterState(ch) === 'locked') { toast('Selesaikan bab sebelumnya dulu! 🔒'); return; }
      this.openChapter = ch; this.chQuiz = null;
      this.$nextTick(() => window.scrollTo({ top: 0 }));
    },
    startChapterQuiz(ch) {
      // bank soal: ambil 10 acak dari bank 30 soal, acak urutan soal + acak pilihan jawaban
      const qs = shuffled(ch.quiz).slice(0, 10).map(shuffleQuestion);
      this.chQuiz = { chapter: ch, qs, idx: 0, ans: [], done: false, score: 0, pct: 0 };
      this.$nextTick(() => window.scrollTo({ top: 0 }));
    },
    answerChapterQuiz(i) {
      if (!this.chQuiz || this.chQuiz.done || this.chQuiz.lock) return;
      this.chQuiz.lock = true;
      const q = this.chQuiz.qs[this.chQuiz.idx];
      const ok = i === q.a;
      this.chQuiz.ans.push({ pick: i, ok });
      setTimeout(() => {
        this.chQuiz.lock = false;
        if (this.chQuiz.idx + 1 < this.chQuiz.qs.length) this.chQuiz.idx++;
        else this.finishChapterQuiz();
      }, 650);
    },
    async finishChapterQuiz() {
      const cq = this.chQuiz;
      const total = cq.qs.length;
      const score = cq.ans.filter(a => a.ok).length;
      const pct = Math.round(score / total * 100);
      cq.done = true; cq.score = score; cq.pct = pct;
      try {
        const d = await api('/api/chapters/complete', { method: 'POST', body: JSON.stringify({ chapter_id: cq.chapter.id, score, total }) });
        await this.loadChapterProgress();
        if (d.passed) { try { this.gainXP(50, 'chapter ' + cq.chapter.id); } catch {} toast('Bab lulus! 🎉 +50 XP'); }
        else toast('Belum lulus, coba lagi! 💪');
      } catch {}
      this.$nextTick(() => window.scrollTo({ top: 0 }));
    },
    lvName(lv) { const l = LEVELS.find(x => x.id === lv); return l ? l.name : lv.toUpperCase(); },
    libCount(t) { return ALL_LESSONS.filter(l => l.level === this.learnLevel && (t === 'all' || l.type === t)).length; },
    libLessonSub(l) {
      const L = LESSONS[l.level] || {};
      if (l.type === 'kotoba') return (L.kotoba || []).length + ' kata';
      if (l.type === 'kanji') return (L.kanji || []).length + ' kanji';
      if (l.type === 'bunpou') return (L.bunpou || []).length + ' pola';
      if (l.type === 'choukai') return (L.choukai || []).length + ' latihan';
      return 'kana';
    },
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
    logout() { saveToken(''); store.user = null; this.tab = 'home'; this.openChapter = null; this.chQuiz = null; localStorage.removeItem('nl_chapter'); },
    async refresh() {
      if (!store.token) { store.authChecked = true; return; }
      try {
        const d = await api('/api/me'); store.user = d.user; setTheme(d.user.theme || 'sakura');
      } catch { this.logout(); store.authChecked = true; return; }
      store.authChecked = true;
      const [p, s, h, b, sr] = await Promise.allSettled([
        api('/api/progress'), api('/api/stats'), api('/api/quiz/history'),
        api('/api/leaderboard'), api('/api/srs'),
      ]);
      if (p.status === 'fulfilled') store.done = p.value.done;
      if (s.status === 'fulfilled') store.stats = s.value;
      if (h.status === 'fulfilled') store.quizHist = h.value.history;
      if (b.status === 'fulfilled') { store.board = b.value.board; this.myWeekly = b.value.my_weekly; }
      if (sr.status === 'fulfilled') { this.srsDue = sr.value.due; this.srsTotal = sr.value.total; }
      this.loadChapterProgress();
    },
    toggleTheme() { setTheme(store.theme === 'sakura' ? 'zen' : 'sakura'); toast(store.theme === 'sakura' ? '🌸 Tema Sakura' : '⛩️ Tema Zen'); },
    applySb() { document.documentElement.classList.toggle('sb-hidden', this.sbHidden); },
    toggleSb() { this.sbHidden = !this.sbHidden; localStorage.setItem('nl_sb', this.sbHidden ? '1' : '0'); this.applySb(); },
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
    async startQuiz() {
      this.clearQuizProgress();
      this.qSec = 0; this.qIdx = 0; this.qAns = []; this.qDone = false; this.qScore = 0; this.secScores = [];
      if (this.quizMode === 'acak') {
        // soal baru tiap main: dibuat server dari materi, yang sudah pernah dikerjakan disingkirkan dulu
        try {
          const d = await api(`/api/quiz/gen?level=${this.qLevel}&count=20`);
          if (!d.questions || !d.questions.length) { toast('Gagal menyusun soal, coba lagi'); return; }
          this.genQs = d.questions; this.shuffledQs = [];
        } catch (e) { toast(e.message); return; }
      } else {
        this.genQs = [];
        // acak urutan soal & pilihan jawaban tiap permainan; soal baru diprioritaskan
        let qs = (QUIZ[this.qLevel] || []).map((q, i) => ({ ...shuffleQuestion(q), _qid: `${this.qLevel}:${i}` }));
        try {
          const s = await api(`/api/quiz/seen?level=${this.qLevel}`);
          const seen = new Set(s.seen || []);
          qs = shuffled(qs.filter(q => !seen.has(q._qid))).concat(shuffled(qs.filter(q => seen.has(q._qid))));
        } catch { qs = shuffled(qs); }
        this.shuffledQs = qs;
      }
      this.tab = 'quizrun'; this.$nextTick(() => this.runSec());
    },
    async startAdaptive() {
      this.clearQuizProgress();
      try {
        const d = await api('/api/quiz/weak');
        if (!d.weak.length) { toast('Belum ada data. Kerjakan quiz dulu ya!'); return; }
        const qs = [];
        for (const w of d.weak.slice(0, 10)) {
          if (w.qid.startsWith('gen:')) {
            // soal generated: buat ulang dari qid-nya
            try {
              const g = await api(`/api/quiz/regen?qid=${encodeURIComponent(w.qid)}`);
              if (g.question) qs.push({ ...g.question, _lv: g.level });
            } catch {}
          } else {
            const [lv, ix] = w.qid.split(':');
            const q = (QUIZ[lv] || [])[parseInt(ix)];
            if (q) qs.push({ ...shuffleQuestion(q), _lv: lv });
          }
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
      this.qAns.push({ q, pick: i, ok, qid: q.qid || q._qid || `${this.qLevel}:${this.qIdx}` });
      this.saveQuizProgress();
      setTimeout(() => {
        if (this.qIdx + 1 < this.secQs.length) this.qIdx++;
        else this.nextSec();
        this.saveQuizProgress();
      }, 700);
    },
    adaptAnswer(i) {
      const q = this.adaptiveQs[this.qIdx];
      const ok = i === q.a;
      this.qAns.push({ q, pick: i, ok, qid: q.qid || `${q._lv}:${(QUIZ[q._lv] || []).indexOf(q)}` });
      this.saveQuizProgress();
      setTimeout(() => {
        if (this.qIdx + 1 < this.adaptiveQs.length) this.qIdx++;
        else this.finishAdaptive();
        this.saveQuizProgress();
      }, 700);
    },
    nextSec() {
      clearInterval(this.qTimer);
      if (this.qSec + 1 < this.quizSecs.length) { this.qSec++; this.runSec(); }
      else this.finishQuiz();
    },
    async finishQuiz() {
      clearInterval(this.qTimer);
      this.clearQuizProgress();
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
      this.clearQuizProgress();
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
    // ---- Tanya AI (Muse Sensei) ----
    async loadAsk() {
      // cache lokal dulu biar instan, lalu sinkron dari server (per akun)
      try {
        const h = JSON.parse(localStorage.getItem('nl_ask') || '[]');
        this.askMsgs = Array.isArray(h) ? h.slice(-50) : [];
      } catch { this.askMsgs = []; }
      if (!store.token) return;
      try {
        const d = await api('/api/ask/history');
        if (Array.isArray(d.history) && d.history.length) {
          this.askMsgs = d.history.flatMap(m => [
            { role: 'user', text: m.q },
            { role: 'ai', text: m.a },
          ]);
          this.saveAsk(); this.scrollAsk();
        }
      } catch {}
    },
    saveAsk() {
      try { localStorage.setItem('nl_ask', JSON.stringify(this.askMsgs.slice(-50))); } catch {}
    },
    async clearAsk() {
      if (!confirm('Hapus semua riwayat chat Tanya AI?\nTindakan ini tidak bisa dibatalkan.')) return;
      this.askMsgs = []; this.saveAsk();
      if (store.token) { try { await api('/api/ask/history', { method: 'DELETE' }); } catch {} }
    },
    scrollAsk() { this.$nextTick(() => { const b = this.$refs.askBox; if (b) b.scrollTop = b.scrollHeight; }); },
    async sendAsk() {
      const q = this.askInput.trim();
      if (!q || this.askLoading) return;
      if (!store.token) { toast('Login dulu ya untuk tanya Muse Sensei'); return; }
      this.askInput = '';
      this.askMsgs.push({ role: 'user', text: q });
      this.askLoading = true; this.scrollAsk();
      try {
        const hist = this.askMsgs.slice(-7, -1).map(m => ({ role: m.role, text: m.text }));
        // long-poll: koneksi ditahan sampai Muse Sensei selesai jawab
        const d = await api('/api/ask', { method: 'POST', body: JSON.stringify({ q, hist }) });
        if (d.a) this.askMsgs.push({ role: 'ai', text: d.a });
        else this.askMsgs.push({ role: 'ai', text: '😅 Muse Sensei belum sempat jawab, coba kirim ulang ya' });
      } catch (e) {
        this.askMsgs.push({ role: 'ai', text: '😅 ' + (e.message || 'Gagal mengirim, coba lagi ya') });
      }
      this.askLoading = false; this.saveAsk(); this.scrollAsk();
    },    kamusType() { clearTimeout(this.kamusTimer); this.kamusTimer = setTimeout(() => this.searchKamus(), 400); },
    async searchKamus() {
      const q = this.kamusQ.trim();
      this.kamusDetail = null; // BUGFIX: jangan tampilkan detail lama saat cari baru
      this.kamusJlpt = 0;
      if (q.length < 1) { this.kamusResults = []; return; }
      this.kamusLoading = true;
      try {
        const d = await api(`/api/${this.kamusTab === 'kotoba' ? 'dict' : 'kanji'}/search?q=${encodeURIComponent(q)}&limit=20`);
        this.kamusResults = d.results || [];
      } catch { this.kamusResults = []; }
      this.kamusLoading = false;
    },
    async openWord(id) {
      try {
        const d = await api(`/api/dict/word/${id}`);
        this.kamusDetail = { type: 'word', ...d.word };
        this.kamusId = ''; this.translating = true;
        try {
          const t = await api(`/api/dict/translate/${id}`);
          if (this.kamusDetail && this.kamusDetail.id === id && t.gloss_id) this.kamusId = t.gloss_id;
        } catch {}
        this.translating = false;
      }
      catch (e) { toast(e.message); }
    },
    async openKanji(ch) {
      this.tab = 'kamus';
      try {
        const d = await api(`/api/kanji/${encodeURIComponent(ch)}`);
        this.kamusDetail = { type: 'kanji', ...d.kanji, words: d.words };
        this.kamusKanjiId = ''; this.translating = true;
        try {
          const t = await api(`/api/kanji/${encodeURIComponent(ch)}/translate`);
          if (this.kamusDetail && this.kamusDetail.type === 'kanji' && this.kamusDetail.ch === ch && t.meaning_id) this.kamusKanjiId = t.meaning_id;
        } catch {}
        this.translating = false;
      }
      catch (e) { toast(e.message); }
    },
    splitKanji(s) { return [...(s || '')].map(c => ({ c, k: /[\u4e00-\u9faf\u3400-\u4dbf]/.test(c) })); },
    openKanjiChar(e, c) { e.stopPropagation(); this.openKanji(c); },
    posLabel(pos) {
      const M = { 'n': 'kata benda', 'n-pref': 'kata benda (awalan)', 'n-suf': 'kata benda (akhiran)', 'exp': 'ungkapan',
        'adj-na': 'kata sifat-na', 'adj-no': 'kata sifat-no', 'adj-i': 'kata sifat-i', 'adj-f': 'kata sifat',
        'adj-t': 'kata sifat-taru', 'adj-ix': 'kata sifat-i', 'adj-ku': 'kata sifat-ku', 'adj-nari': 'kata sifat-nari',
        'adj-pn': 'kata sifat', 'adj-shiku': 'kata sifat-shiku', 'adv': 'kata keterangan', 'adv-to': 'kata keterangan',
        'v1': 'kata kerja ichidan', 'v1-s': 'kata kerja ichidan', 'vz': 'kata kerja ichidan',
        'v5aru': 'kata kerja godan', 'v5b': 'kata kerja godan', 'v5g': 'kata kerja godan', 'v5k': 'kata kerja godan',
        'v5k-s': 'kata kerja godan', 'v5m': 'kata kerja godan', 'v5n': 'kata kerja godan', 'v5r': 'kata kerja godan',
        'v5r-i': 'kata kerja godan', 'v5s': 'kata kerja godan', 'v5t': 'kata kerja godan', 'v5u': 'kata kerja godan', 'v5u-s': 'kata kerja godan',
        'v4b': 'kata kerja lampau', 'v4g': 'kata kerja lampau', 'v4h': 'kata kerja lampau', 'v4k': 'kata kerja lampau',
        'v4m': 'kata kerja lampau', 'v4r': 'kata kerja lampau', 'v4s': 'kata kerja lampau', 'v4t': 'kata kerja lampau',
        'vs': 'kata kerja suru', 'vs-c': 'kata kerja suru', 'vs-i': 'kata kerja suru', 'vs-s': 'kata kerja suru',
        'vk': 'kata kerja kuru', 'vn': 'kata kerja', 'vr': 'kata kerja', 'v-unspec': 'kata kerja',
        'vi': 'intransitif', 'vt': 'transitif', 'aux': 'kata bantu', 'aux-v': 'kata kerja bantu', 'aux-adj': 'kata sifat bantu',
        'cop': 'kopula', 'prt': 'partikel', 'conj': 'kata sambung', 'pref': 'awalan', 'suf': 'akhiran',
        'ctr': 'kata bantu bilangan', 'num': 'angka', 'pn': 'kata ganti' };
      ['v2a-s','v2b-k','v2d-s','v2g-k','v2g-s','v2h-k','v2h-s','v2k-k','v2k-s','v2m-s','v2n-s','v2r-k','v2r-s','v2s-s','v2t-k','v2t-s','v2w-s','v2y-k','v2y-s','v2z-s'].forEach(t => M[t] = 'kata kerja nidan');
      if (!pos) return '';
      const out = [];
      String(pos).split(',').forEach(t => {
        const k = t.trim();
        const label = M[k] || k;
        if (label && !out.includes(label)) out.push(label);
      });
      return out.join(' · ');
    },
    wordKanji() {
      if (!this.kamusDetail || this.kamusDetail.type !== 'word') return [];
      const s = this.kamusDetail.keb[0] || this.kamusDetail.reb[0] || '';
      const seen = [];
      for (const c of s) { if (/[\u4e00-\u9faf\u3400-\u4dbf]/.test(c) && !seen.includes(c)) seen.push(c); }
      return seen;
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
      if (c.kind === 'kanji') {
        // cek otomatis: terima kana maupun romaji
        const typed = this.srsTyped.trim().toLowerCase();
        const reading = (c.reading || '').toLowerCase();
        const romaji = kanaToRomaji(c.reading || '');
        const ok = typed !== '' && (typed === reading || typed === romaji);
        toast(ok ? 'Benar! 🎉' : `Kurang tepat. Jawaban: ${c.reading}${romaji && romaji !== reading ? ' (' + romaji + ')' : ''}`);
        this.srsGrade(ok);
        return;
      }
      // mode lihat-jawab: user nilai sendiri via tombol
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
    this.refresh().then(() => this.restoreChapterState());
    this.loadAsk();
    this.applySb();
    try {
      const sq = JSON.parse(localStorage.getItem('nl_quiz') || 'null');
      if (sq && sq.questions && sq.questions.length && sq.qIdx < sq.questions.length) this.quizResume = sq;
      else localStorage.removeItem('nl_quiz');
    } catch { localStorage.removeItem('nl_quiz'); }
  },
  template: `
<div>
  <header class="hdr">
    <div class="hdr-left">
      <button class="sb-toggle" @click="toggleSb" aria-label="Sembunyikan/tampilkan menu"><span v-html="ic('menu',20)"></span></button>
      <div class="logo"><span class="jp">日本語</span> NihongoLearn</div>
      <div class="hdr-title">{{ pageTitle }}</div>
    </div>
    <div style="display:flex;gap:8px;align-items:center">
      <span v-if="user" class="chip"><span v-html="ic('coin',14)"></span> {{ user.coins || 0 }}</span>
      <button class="theme-btn" @click="toggleTheme">{{ store.theme === 'sakura' ? '⛩️ Zen' : '🌸 Sakura' }}</button>
    </div>
  </header>

  <div v-if="!store.authChecked" class="skel-page">
    <div class="skel skel-title"></div>
    <div class="skel-card"><div class="skel skel-line" style="width:75%"></div><div class="skel skel-line" style="width:55%"></div></div>
    <div class="skel-card"><div class="skel skel-line" style="width:60%"></div><div class="skel skel-line" style="width:85%"></div><div class="skel skel-line" style="width:40%"></div></div>
  </div>
  <div v-else-if="!user" class="auth-card">
    <div class="mascot">🦉</div>
    <h2>{{ mode === 'login' ? 'Selamat datang kembali!' : 'Mulai petualanganmu!' }}</h2>
    <p class="muted">Belajar bahasa Jepang dari hiragana sampai N1</p>
    <div v-if="mode==='register'">
      <label class="lbl">Nama</label><input v-model="fName" placeholder="Namamu">
      <label class="lbl">Level saat ini</label>
      <select v-model="fLevel"><option v-for="l in ['hiragana','katakana','n5','n4','n3','n2','n1']" :value="l">{{ l.toUpperCase() }}</option></select>
      <label class="lbl">Porsi harian</label>
      <select v-model="fIntensity"><option value="sedikit">Sedikit (3 materi)</option><option value="sedang">Sedang (6 materi)</option><option value="banyak">Banyak (10 materi)</option></select>
    </div>
    <label class="lbl">Email</label><input v-model="fEmail" type="email" placeholder="email@contoh.com">
    <label class="lbl">Password</label><input v-model="fPass" type="password" placeholder="••••••" @keyup.enter="doAuth">
    <button class="btn btn-block" @click="doAuth">{{ mode === 'login' ? 'Masuk' : 'Daftar' }}</button>
    <p class="muted center link" @click="mode = mode==='login'?'register':'login'">{{ mode === 'login' ? 'Belum punya akun? Daftar' : 'Sudah punya akun? Masuk' }}</p>
  </div>

  <div v-else>
    <!-- ============ HOME: materi harian ============ -->
    <section v-if="tab==='home'" class="tabsec">
      <div class="card hero">
        <div class="hero-mascot">{{ mascot.e }}</div>
        <div class="hero-info">
          <h2>Konnichiwa, {{ user.name }}</h2>
          <p class="muted">{{ mascot.t }} · Lv.{{ user.level.toUpperCase() }}</p>
          <div class="xpbar"><i :style="{width: (mascot.next ? Math.min(100, Math.round(user.xp/mascot.next*100)) : 100)+'%'}"></i></div>
          <p class="muted small">{{ mascot.next ? (mascot.next - user.xp) + ' XP menuju level berikutnya' : 'Maskot max!' }} · <b>{{ user.xp }}</b> XP</p>
        </div>
      </div>

      <div class="stat-row">
        <div class="stat"><div class="stat-n streak"><span v-html="ic('flame',18)"></span>{{ store.stats?.streak_days || 0 }}</div><div class="muted small">Streak</div></div>
        <div class="stat"><div class="stat-n">{{ store.stats?.lessons_done || 0 }}</div><div class="muted small">Materi</div></div>
        <div class="stat"><div class="stat-n">{{ store.stats?.quiz_avg || 0 }}%</div><div class="muted small">Quiz</div></div>
        <div class="stat" @click="tab='saya'"><div class="stat-n"><span v-html="ic('card',18)"></span>{{ store.stats?.srs_due || 0 }}</div><div class="muted small">Review</div></div>
      </div>

      <div v-if="!openChapter && !chQuiz">
      <h2 class="ttl"><span v-html="ic('layers')"></span> Jalur Belajar {{ (store.user?.level || 'n5').toUpperCase() }}</h2>
      <p class="muted small">Belajar berurutan ala Soumatome — dari termudah ke tersulit. Lulus quiz (≥70) untuk membuka bab berikutnya.</p>
      <div v-if="!myChapters.length" class="card center muted small">Materi untuk level ini segera hadir! 🚧</div>
      <div v-for="ch in myChapters" :key="ch.id" class="lvl" :class="{ locked: chapterState(ch)==='locked' }" @click="openChapterDetail(ch)">
        <div class="badge" :class="{ done: chapterState(ch)==='done' }">{{ chapterState(ch)==='locked' ? '🔒' : (chapterState(ch)==='done' ? '✓' : ch.bab) }}</div>
        <div class="lvl-body">
          <b>{{ ch.icon }} Bab {{ ch.bab }}: {{ ch.title }}</b>
          <div class="muted small">{{ ch.desc }}</div>
          <div v-if="chapterProgress[ch.id]" class="small" :class="chapterProgress[ch.id].passed ? 'streak' : 'bad'">Nilai: {{ Math.round(chapterProgress[ch.id].score / chapterProgress[ch.id].total * 100) }} {{ chapterProgress[ch.id].passed ? '✅' : '❌ belum lulus' }}</div>
          <div v-else-if="chapterState(ch)==='locked'" class="muted small">🔒 Selesaikan bab sebelumnya</div>
        </div>
        <span v-html="ic(chapterState(ch)==='locked' ? 'x' : 'play', 18)"></span>
      </div>
      </div>

      <div v-if="openChapter && !chQuiz" class="card pop ch-detail">
        <div class="back-row"><button class="btn ghost sm" @click="openChapter=null"><span v-html="ic('back',15)"></span> Jalur Belajar</button></div>
        <h2>{{ openChapter.icon }} Bab {{ openChapter.bab }}: {{ openChapter.title }}</h2>
        <p class="muted small">{{ openChapter.desc }}</p>
        <div v-for="(s, si) in openChapter.sections" :key="si">
          <div v-if="s.type==='penjelasan'">
            <div class="step-tag"><span v-html="ic('book',12)"></span> {{ s.title }}</div>
            <div class="passage penjelasan-text" v-html="s.body"></div>
          </div>
          <div v-if="s.type==='kotoba'">
            <div class="step-tag">📝 {{ s.title }}</div>
            <div v-for="(it, ii) in s.items" :key="ii" class="rowline" style="align-items:flex-start"><div><b>{{ it.kj || it.jp }}</b> <span class="muted small">{{ it.r }}</span><div class="muted small">{{ it.id }}</div><div v-if="it.note" class="small" style="color:var(--pri-d)">💡 {{ it.note }}</div></div><button class="mini-btn" @click="speak(it.jp)">🔊</button></div>
          </div>
          <div v-if="s.type==='bunpou'">
            <div class="step-tag">📐 {{ s.title }}</div>
            <div v-for="(b, bi) in s.items" :key="bi" class="bp-card">
              <div class="bp-head">{{ b.pattern }}</div>
              <div class="bp-body">
                <div class="muted small bp-arti">= {{ b.arti }}</div>
                <div v-if="b.tabel && b.tabel.length" class="bp-table">
                  <div v-for="(t, ti) in b.tabel" :key="ti" class="bp-trow">
                    <div class="bp-tk">{{ t.k }}</div>
                    <div class="bp-tv"><span class="bp-teq">=</span> {{ t.v }}</div>
                  </div>
                </div>
                <p class="small" v-html="b.explain"></p>
                <div class="bp-ex-label">Contoh kalimat:</div>
                <div v-for="(ex, ei) in b.examples" :key="ei" class="ex-box">
                  <div class="ex-jp">{{ ex.jp }}</div>
                  <div v-if="ex.rd" class="ex-rd">{{ ex.rd }}</div>
                  <div class="ex-id">{{ ex.id }}</div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="s.type==='kanji'">
            <div class="step-tag">🈁 {{ s.title }}</div>
            <div class="kana-grid">
              <div v-for="(k, ki) in s.items" :key="ki" class="kana" @click="openKanji(k.ch)"><div class="k">{{ k.ch }}</div><div class="r">{{ k.id.split(';')[0] }}</div></div>
            </div>
            <div v-for="(k, ki) in s.items" :key="'kd'+ki" class="muted small">{{ k.ch }} ({{ k.kun }} / {{ k.on }}) — {{ k.id }}<span v-if="k.note">. {{ k.note }}</span></div>
          </div>
          <div v-if="s.type==='kaiwa'">
            <div class="step-tag">💬 {{ s.title }}</div>
            <div class="passage kaiwa-lines"><div v-for="(ln, li) in s.lines" :key="li" style="margin-bottom:10px"><b>{{ ln.sp }}:</b> {{ ln.jp }}<br><span class="muted small">{{ ln.id }}</span></div></div>
          </div>
        </div>
        <button class="btn btn-block" @click="startChapterQuiz(openChapter)">📝 Quiz Bab {{ openChapter.bab }} (10 soal acak)</button>
      </div>

      <div v-if="chQuiz" class="card pop">
        <div v-if="!chQuiz.done">
          <div class="q-head"><span class="muted small">Quiz Bab {{ chQuiz.chapter.bab }} · Soal {{ chQuiz.idx+1 }}/{{ chQuiz.qs.length }}</span></div>
          <div class="qbar"><i :style="{width: (chQuiz.idx / chQuiz.qs.length * 100)+'%'}"></i></div>
          <div v-if="chQuiz.qs[chQuiz.idx].img"><img :src="chQuiz.qs[chQuiz.idx].img" style="max-width:100%;border-radius:8px;margin:8px 0"></div><h3 class="q-text" style="white-space:pre-line">{{ fmtQ(chQuiz.qs[chQuiz.idx].q) }}</h3>
          <button v-for="(o, oi) in chQuiz.qs[chQuiz.idx].o" :key="oi" class="opt" @click="answerChapterQuiz(oi)">{{ o }}</button>
          <div class="center" style="margin-top:10px"><button class="btn ghost sm" @click="chQuiz=null">Batal</button></div>
        </div>
        <div v-else class="center">
          <div style="font-size:52px">{{ chQuiz.pct >= 70 ? '🎉' : '💪' }}</div>
          <h2>Nilai: {{ chQuiz.pct }}</h2>
          <p class="muted small">{{ chQuiz.pct >= 70 ? 'Lulus! Bab berikutnya sudah terbuka. 🎊' : 'Belum lulus (butuh ≥70). Pelajari bab ini lagi, lalu coba lagi!' }}</p>
          <div v-if="chQuiz.pct < 70" style="text-align:left;margin-top:12px">
            <b>Pembahasan:</b>
            <div v-for="(q, qi) in chQuiz.qs" :key="qi" class="card small" style="margin:8px 0">
              <div v-if="q.img"><img :src="q.img" style="max-width:100%;border-radius:8px;margin:8px 0"></div>
              <b style="white-space:pre-line">{{ qi+1 }}. {{ fmtQ(q.q) }}</b>
              <div class="small" :style="{color: chQuiz.ans[qi].ok ? 'var(--ok)' : 'var(--bad)'}">{{ chQuiz.ans[qi].ok ? '✓ Benar' : '✗ Kurang tepat — jawaban: ' + q.o[q.a] }}</div>
              <div class="muted small">💡 {{ q.explain }}</div>
            </div>
          </div>
          <div class="btn-row center" style="justify-content:center">
            <button v-if="chQuiz.pct < 70" class="btn" @click="startChapterQuiz(chQuiz.chapter)">🔄 Coba Lagi</button>
            <button v-if="chQuiz.pct >= 70" class="btn" @click="chQuiz=null;openChapter=null">Lanjut ➜</button>
            <button class="btn ghost" @click="chQuiz=null">Kembali</button>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ MODUL ============ -->
    <section v-if="tab==='library'" class="tabsec">
      <div v-if="!modulPat">
        <h2 class="ttl"><span v-html="ic('layers')"></span> Modul</h2>
        <p class="muted small">Pusat materi: bunpou, kosakata, kanji, bank soal & info ujian. Bebas dibuka tanpa batas level.</p>
        <div class="searchbar"><span v-html="ic('search',17)"></span><input v-model="modulQ" placeholder="Cari bunpou&hellip; cth: おく, potensial, ば"></div>

        <div v-if="modulQ.trim().length > 1">
          <h3 class="ttl-sm">Hasil pencarian <span class="muted">({{ modulSearchRes.length }})</span></h3>
          <div v-if="!modulSearchRes.length" class="card center muted small">Tidak ditemukan. Coba kata kunci lain.</div>
          <div class="lib-grid">
            <div v-for="(p, pi) in modulSearchRes" :key="'ms'+pi" class="lvl" @click="modulPat=p">
              <div class="badge sm"><b>{{ p.level.toUpperCase() }}</b></div>
              <div class="lvl-body"><b>{{ p.pattern }}</b><div class="muted small">{{ p.arti }} &middot; Bab {{ p.bab }}</div></div>
              <span v-html="ic('play',16)"></span>
            </div>
          </div>
        </div>

        <div v-else-if="!modulCat">
          <div class="lib-grid">
            <div v-for="c in MODUL_CATS" :key="c.id" class="lvl" @click="modulCat=c.id;modulSub=null;modulCh=null;modulLevel='n5';modulQ=''">
              <div class="badge"><span style="font-size:22px">{{ c.icon }}</span></div>
              <div class="lvl-body"><b>{{ c.name }}</b><div class="muted small">{{ c.desc }}</div></div>
              <span v-html="ic('play',16)"></span>
            </div>
          </div>
        </div>

        <div v-else>
          <button class="btn ghost sm" style="margin-bottom:10px" @click="closeSim();modulCat=null;modulSub=null;modulCh=null"><span v-html="ic('back',15)"></span> Modul</button>

          <div v-if="sim">
            <div class="card pop">
              <div class="q-head"><span class="muted small">{{ sim.pkg.title }} &middot; {{ sim.secs[sim.secIdx].name }}</span><b v-if="!sim.done" :style="{color: sim.tLeft < 300 ? 'var(--bad)' : 'inherit'}">&#9201; {{ simTimeStr(sim.tLeft) }}</b></div>
              <div v-if="!sim.done">
                <div v-if="sim.secs[sim.secIdx].id==='choukai' && sim.pkg.audio" style="margin:8px 0">
                  <audio controls preload="none" :src="sim.pkg.audio" style="width:100%"></audio>
                  <div class="muted small">Dengarkan audio, lalu jawab soalnya.</div>
                </div>
                <div class="qbar"><i :style="{width: ((sim.qPos+1)/Math.max(1,simSecQs.length)*100)+'%'}"></i></div>
                <div v-if="simCur">
                  <div class="muted small">Soal {{ sim.qPos+1 }}/{{ simSecQs.length }}</div>
                  <div v-if="simCur.q.img"><img :src="simCur.q.img" style="max-width:100%;border-radius:8px;margin:8px 0"></div>
                  <h3 class="q-text" style="white-space:pre-line">{{ fmtQ(simCur.q.q) }}</h3>
                  <div v-if="simCur.q.rd" class="muted small">{{ simCur.q.rd }}</div>
                  <button v-for="(o, oi) in simCur.q.o" :key="oi" class="opt" :class="{pick: sim.ans[simCur.i]===oi}" @click="simAnswer(oi)">{{ o }}</button>
                </div>
                <div class="palette">
                  <button v-for="(it, pi) in simSecQs" :key="pi" class="pnum" :class="{on: pi===sim.qPos, done: sim.ans[it.i]!==undefined && sim.ans[it.i]!==null}" @click="sim.qPos=pi">{{ pi+1 }}</button>
                </div>
                <div class="btn-row">
                  <button class="btn ghost sm" @click="simGo(-1)">&larr; Prev</button>
                  <button class="btn ghost sm" @click="simGo(1)">Next &rarr;</button>
                </div>
                <div class="btn-row" style="margin-top:8px">
                  <button v-if="sim.secIdx < sim.secs.length-1" class="btn sm" @click="nextSimSection()">Section berikutnya &rarr;</button>
                  <button class="btn sm" @click="finishSim()">Selesai &amp; Nilai</button>
                  <button class="btn ghost sm" @click="closeSim()">Batal</button>
                </div>
              </div>
              <div v-else class="center">
                <div style="font-size:52px">{{ simScore.pct >= 70 ? '&#127881;' : '&#128170;' }}</div>
                <h2>{{ simScore.ok }}/{{ simScore.tot }} ({{ simScore.pct }}%)</h2>
                <p class="muted small">{{ simScore.pct >= 70 ? 'Lulus target latihan! &#127882;' : 'Belum mencapai target 70%. Pelajari lagi, lalu coba lagi!' }}</p>
                <p class="muted small">{{ sim.pkg.source }} &middot; {{ sim.pkg.note }}</p>
                <div style="text-align:left;margin-top:12px"><b>Pembahasan:</b>
                  <div v-for="(qq, qi) in sim.pkg.questions" :key="qi" class="card small" style="margin:8px 0">
                    <div v-if="qq.img"><img :src="qq.img" style="max-width:100%;border-radius:8px;margin:8px 0"></div>
                    <b style="white-space:pre-line">{{ qi+1 }}. {{ fmtQ(qq.q) }}</b>
                    <div v-if="qq.a===null || qq.a===undefined" class="muted small">Kunci menyusul</div>
                    <div v-else class="small" :style="{color: sim.ans[qi]===qq.a ? 'var(--ok)' : 'var(--bad)'}">{{ sim.ans[qi]===qq.a ? '&#10003; Benar' : '&#10007; Kurang tepat &mdash; jawaban: ' + qq.o[qq.a] }}</div>
                    <div v-if="qq.ex" class="muted small">&#128161; {{ qq.ex }}</div>
                  </div>
                </div>
                <div class="btn-row center" style="justify-content:center">
                  <button class="btn" @click="startSim(sim.pkg)">&#128260; Ulangi</button>
                  <button class="btn ghost" @click="closeSim()">Kembali</button>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="simPkg">
            <div class="card pop">
              <b>{{ simPkg.title }}</b>
              <div class="muted small">{{ simPkg.questions.length }} soal &middot; Sumber: {{ simPkg.source }} ({{ simPkg.note }})</div>
              <div v-if="simPkg.sections" class="small" style="margin-top:6px"><b>Aturan waktu (format asli):</b>
                <div v-for="s in simPkg.sections" :key="s.id" class="muted small">&bull; {{ s.name }} &mdash; {{ s.time }} menit</div>
              </div>
              <div v-else class="muted small" style="margin-top:6px">Waktu: {{ simTimeFor(simPkg) }} menit (mode latihan)</div>
              <div v-if="simPkg.audio" class="muted small">&#128266; Termasuk audio listening</div>
              <button class="btn btn-block" style="margin-top:10px" @click="startSim(simPkg)"><span v-html="ic('play',16)"></span> Mulai Simulasi</button>
              <div class="center" style="margin-top:8px"><button class="btn ghost sm" @click="simPkg=null">Kembali</button></div>
            </div>
          </div>
          <div v-else-if="modulCat==='bunpou'">
            <div class="pill-row">
              <button v-for="lv in ['n5','n4','n3','n2','n1']" :key="'mb-'+lv" class="pill" :class="{on: modulLevel===lv}" @click="modulLevel=lv">{{ lv.toUpperCase() }}</button>
            </div>
            <div class="lib-grid">
              <div v-for="(p, pi) in modulPatterns" :key="'mp'+pi" class="lvl" @click="modulPat=p">
                <div class="badge sm"><b>{{ p.bab }}</b></div>
                <div class="lvl-body"><b>{{ p.pattern }}</b><div class="muted small">{{ p.arti }}</div></div>
                <span v-html="ic('play',16)"></span>
              </div>
            </div>
          </div>

          <div v-if="modulCat==='kotoba' || modulCat==='kanji'">
            <div class="pill-row">
              <button v-for="lv in ['n5','n4','n3','n2','n1']" :key="'mk-'+lv" class="pill" :class="{on: modulLevel===lv}" @click="modulLevel=lv;modulCh=null">{{ lv.toUpperCase() }}</button>
            </div>
            <div v-if="!modulCh" class="lib-grid">
              <div v-for="ch in modulChapters" :key="ch.id" class="lvl" @click="modulCh=ch.id">
                <div class="badge"><b>{{ ch.bab }}</b></div>
                <div class="lvl-body"><b>{{ ch.title }}</b><div class="muted small">{{ modulSecCount(ch) }} {{ modulCat==='kotoba' ? 'kosakata' : 'kanji' }}<span v-if="ch.nc"> &middot; Nihongo Challenge</span></div><div v-if="ch.title_jp" class="muted small">{{ ch.title_jp }}</div></div>
                <span v-html="ic('play',16)"></span>
              </div>
            </div>
            <div v-else>
              <button class="btn ghost sm" style="margin-bottom:10px" @click="modulCh=null"><span v-html="ic('back',15)"></span> Daftar bab</button>
              <div v-if="modulCat==='kotoba'">
                <div v-for="w in modulChItems" :key="w.id" class="rowline" style="align-items:flex-start"><div><b>{{ w.kj || w.jp }}</b> <span class="muted small">{{ w.r }}</span><div class="muted small">{{ w.id }}</div><div v-if="w.note" class="small" style="color:var(--pri-d)">&#128161; {{ w.note }}</div></div><button class="mini-btn" @click="speak(w.jp)">&#128266;</button></div>
              </div>
              <div v-if="modulCat==='kanji'" style="margin-top:8px">
                <div v-for="k in modulChItems" :key="k.kj||k.ch" class="card small" style="margin-bottom:10px">
                  <div style="display:flex;gap:12px;align-items:center">
                    <div style="font-size:42px;line-height:1.1">{{ k.kj || k.ch }}</div>
                    <div style="flex:1"><div><b>{{ k.id }}</b></div><div class="muted small">kun: {{ k.kun || '-' }} &middot; on: {{ k.on || '-' }}</div></div>
                    <button class="mini-btn" @click="speak(k.kj||k.ch)">&#128266;</button>
                    <button class="mini-btn" @click="toggleKvgBox(k)" title="Cara tulis">&#9997;</button>
                  </div>
                  <div v-if="kvgOpen[k.kj||k.ch]" class="kvg-box">
                    <StrokeOrder :ch="k.kj||k.ch" />
                  </div>
                  <div v-if="k.ex && k.ex.length" style="margin-top:8px;border-top:1px solid var(--line);padding-top:6px">
                    <div class="muted small" style="margin-bottom:2px">Anak kanji:</div>
                    <div v-for="(e, ei) in k.ex" :key="ei" class="rowline" style="align-items:flex-start"><div><b>{{ e.j }}</b> <span class="muted small">{{ e.r }}</span><div class="muted small">{{ e.i }}</div><div v-if="kvgOpen['ex:'+(k.kj||k.ch)+':'+ei]" style="margin-top:6px"><WordStrokeOrder :kanjis="kanjisOf(e.j)" /></div></div><div style="display:flex;gap:6px;flex-shrink:0"><button v-if="kanjisOf(e.j).length" class="mini-btn" @click="toggleKvgBox('ex:'+(k.kj||k.ch)+':'+ei)" title="Cara tulis">&#9997;</button><button class="mini-btn" @click="speak(e.j)">&#128266;</button></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="modulCat==='bank'">
            <div v-if="!modulSub" class="lib-grid">
              <div v-for="y in BANK_YEARS" :key="'by'+y" class="lvl" @click="modulSub=y;modulLevel='n5'">
                <div class="badge"><span style="font-size:22px">&#128218;</span></div>
                <div class="lvl-body"><b>JLPT {{ y }}</b><div class="muted small">{{ bankYearCount[y] ? bankYearCount[y]+' paket' : 'segera hadir' }}</div></div>
                <span v-html="ic('play',16)"></span>
              </div>
            </div>
            <div v-else>
              <button class="btn ghost sm" style="margin-bottom:10px" @click="modulSub=null"><span v-html="ic('back',15)"></span> Pilih tahun</button>
              <div class="pill-row">
                <button v-for="lv in ['n5','n4','n3','n2','n1']" :key="'bl-'+lv" class="pill" :class="{on: modulLevel===lv}" @click="modulLevel=lv">{{ lv.toUpperCase() }}</button>
              </div>
              <div v-if="jlptPkgs.length" class="lib-grid">
                <div v-for="p in jlptPkgs" :key="p.id" class="lvl" @click="simPkg=p">
                  <div class="badge"><span style="font-size:22px">&#127919;</span></div>
                  <div class="lvl-body"><b>{{ p.title }}</b><div class="muted small">{{ p.questions.length }} soal &middot; {{ p.source }}</div></div>
                  <span v-html="ic('play',16)"></span>
                </div>
              </div>
              <div v-else class="card center pop"><div style="font-size:40px">&#128269;</div><b>Soal {{ modulLevel.toUpperCase() }} {{ modulSub }} segera hadir</b><p class="muted small">Paket soal ini sedang diriset &amp; diverifikasi. Sabar ya! &#128591;</p></div>
            </div>
          </div>

          <div v-if="modulCat==='jft'">
            <div class="card pop">
              <b>&#128483;&#65039; JFT-Basic (Japan Foundation Test)</b>
              <div class="small" style="margin-top:6px">Ujian CBT &plusmn;50 soal, 60 menit: huruf &amp; kosakata, percakapan &amp; ekspresi, listening, reading. Lulus: 200/250 poin. Dibutuhkan untuk visa SSW (Specified Skilled Worker).</div>
            </div>
            <div v-if="jftPkgs.length" class="lib-grid">
              <div v-for="p in jftPkgs" :key="p.id" class="lvl" @click="simPkg=p">
                <div class="badge"><span style="font-size:22px">&#127919;</span></div>
                <div class="lvl-body"><b>{{ p.title }}</b><div class="muted small">{{ p.questions.length }} soal &middot; {{ p.source }}</div></div>
                <span v-html="ic('play',16)"></span>
              </div>
            </div>
            <div v-else class="card center"><div style="font-size:40px">&#128269;</div><b>Bank soal JFT-Basic segera hadir</b><p class="muted small">Soal-soal JFT-Basic sedang diriset &amp; diverifikasi. &#128591;</p></div>
          </div>

          <div v-if="modulCat==='ssw'">
            <div v-if="!modulSub" class="lib-grid">
              <div v-for="f in SSW_FIELDS" :key="f.id" class="lvl" @click="modulSub=f.id">
                <div class="badge"><span style="font-size:22px">&#128188;</span></div>
                <div class="lvl-body"><b>{{ f.name }}</b><div class="muted small">{{ f.sub }}</div></div>
                <span v-html="ic('play',16)"></span>
              </div>
            </div>
            <div v-else>
              <button class="btn ghost sm" style="margin-bottom:10px" @click="modulSub=null"><span v-html="ic('back',15)"></span> Pilih bidang</button>
              <div v-if="sswPkgs.length" class="lib-grid">
                <div v-for="p in sswPkgs" :key="p.id" class="lvl" @click="simPkg=p">
                  <div class="badge"><span style="font-size:22px">&#127919;</span></div>
                  <div class="lvl-body"><b>{{ p.title }}</b><div class="muted small">{{ p.questions.length }} soal &middot; {{ p.source }}</div></div>
                  <span v-html="ic('play',16)"></span>
                </div>
              </div>
              <div v-else class="card center pop"><div style="font-size:40px">&#128269;</div><b>Materi {{ (SSW_FIELDS.find(f=>f.id===modulSub)||{}).name }} segera hadir</b><p class="muted small">Materi &amp; soal bidang ini sedang diriset &amp; diverifikasi. &#128591;</p></div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="card pop">
        <button class="btn ghost sm" style="margin-bottom:10px" @click="modulPat=null"><span v-html="ic('back',15)"></span> Kembali</button>
        <div class="step-tag">&#128214; {{ modulPat.level.toUpperCase() }} &middot; Bab {{ modulPat.bab }}</div>
        <h3 style="margin:6px 0">{{ modulPat.pattern }}</h3>
        <p class="muted small">{{ modulPat.arti }}</p>
        <div class="small" v-html="modulPat.item.explain"></div>
        <div v-if="modulPat.item.tabel && modulPat.item.tabel.length" class="bp-table" style="margin-top:8px">
          <div v-for="(t, ti) in modulPat.item.tabel" :key="ti" class="bp-trow">
            <div class="bp-tk">{{ t.k }}</div>
            <div class="bp-tv"><span class="bp-teq">=</span> {{ t.v }}</div>
          </div>
        </div>
        <div v-if="modulPat.item.examples && modulPat.item.examples.length" style="margin-top:10px">
          <b>Contoh kalimat:</b>
          <div v-for="(ex, ei) in modulPat.item.examples" :key="ei" class="ex-box">
            <div class="ex-jp">{{ ex.jp }}</div>
            <div v-if="ex.rd" class="ex-rd">{{ ex.rd }}</div>
            <div class="ex-id">{{ ex.id }}</div>
          </div>
        </div>
        <div v-if="modulPat.kaiwa && modulPat.kaiwa.length" style="margin-top:10px">
          <b>&#128172; Kaiwa:</b>
          <div class="passage kaiwa-lines" style="margin-top:6px"><div v-for="(ln, li) in modulPat.kaiwa" :key="li" style="margin-bottom:10px"><b>{{ ln.sp }}:</b> {{ ln.jp }}<br><span class="muted small">{{ ln.id }}</span></div></div>
        </div>
      </div>
    </section>

    <!-- ============ QUIZ ============ -->
    <section v-if="tab==='quiz'" class="tabsec">
      <div v-if="quizResume" class="card warn pop">
        <b>📝 Ada quiz yang belum selesai!</b>
        <p class="muted small">{{ quizResume.quizMode === 'cerdas' ? 'Review Cerdas' : (quizResume.quizMode === 'simulasi' ? 'Simulasi Ujian' : 'Kuis Acak') }} · soal {{ quizResume.qIdx + 1 }}/{{ quizResume.questions.length }} · {{ quizResume.qAns.filter(a => a.ok).length }} benar</p>
        <div class="btn-row"><button class="btn sm" @click="resumeSavedQuiz">Lanjutkan</button><button class="btn ghost sm" @click="discardSavedQuiz">Buang</button></div>
      </div>
      <h2 class="ttl"><span v-html="ic('clock')"></span> Quiz</h2>
      <div class="mode-grid">
        <div class="mode" :class="{on: quizMode==='acak'}" @click="quizMode='acak'"><div class="mode-e" v-html="ic('shuffle',30)"></div><b>Kuis Acak</b><div class="muted small">Soal baru tiap main</div></div>
        <div class="mode" @click="closeSim();modulCat='bank';modulSub=null;modulQ='';tab='library'"><div class="mode-e" v-html="ic('target',30)"></div><b>Simulasi Ujian</b><div class="muted small">Soal asli + format asli</div></div>
        <div class="mode" :class="{on: quizMode==='cerdas'}" @click="quizMode='cerdas'"><div class="mode-e" v-html="ic('sparkles',30)"></div><b>Review Cerdas</b><div class="muted small">Fokus soal yang lemah</div></div>
      </div>
      <div v-if="quizMode!=='cerdas'">
        <label class="lbl">Pilih level</label>
        <select v-model="qLevel"><option v-for="lv in ['n5','n4','n3','n2','n1']" :value="lv">{{ lv.toUpperCase() }}</option></select>
        <div class="card">
          <p><b>20 soal acak</b> disusun dari bank soal + materi level {{ qLevel.toUpperCase() }}.</p>
          <p class="muted small">Soal yang sudah pernah kamu kerjakan tidak akan muncul lagi sampai semua soal baru habis. Urutan soal & pilihan jawaban diacak setiap permainan.</p>
        </div>
        <button class="btn btn-block" @click="startQuiz"><span v-html="ic('play',16)"></span> Mulai Kuis Acak</button>
      </div>
      <div v-else class="card">
        <div v-html="illus('quiz')"></div>
        <p><b>Review Cerdas</b> ngumpulin soal-soal yang paling sering kamu salahin, terus ngasih latihan fokus ke situ. Makin sering salah, makin sering muncul!</p>
        <button class="btn btn-block" @click="startAdaptive">Mulai Review</button>
      </div>
      <h2 class="ttl"><span v-html="ic('filetext')"></span> Riwayat</h2>
      <div v-for="h in store.quizHist" :key="h.created_at+h.level" class="rowline"><span><b>{{ h.level.toUpperCase() }}</b> — {{ h.score }}/{{ h.total }}</span><b>{{ Math.round(h.score/h.total*100) }}%</b></div>
      <div v-if="!store.quizHist.length" class="muted small">Belum ada riwayat quiz.</div>
    </section>

    <!-- ============ QUIZ RUN ============ -->
    <section v-if="tab==='quizrun' && secQs.length" class="card pop tabsec">
      <div class="q-head">
        <b>{{ quizSecs[qSec].name }} ({{ qLevel.toUpperCase() }})</b>
        <span class="timer" :class="{low: qTime<60}"><span v-html="ic('clock',17)"></span> {{ fmt(qTime) }}</span>
      </div>
      <div class="muted small">Soal {{ qIdx+1 }}/{{ secQs.length }} · Seksi {{ qSec+1 }}/{{ quizSecs.length }}</div>
      <div class="qbar"><i :style="{width: ((qIdx)/secQs.length*100)+'%'}"></i></div>
      <div v-if="secQs[qIdx].passage" class="passage">{{ secQs[qIdx].q.split('質問')[0] }}</div>
      <h3 class="q-text" style="white-space:pre-line">{{ secQs[qIdx].passage ? '質問：' + fmtQ(secQs[qIdx].q.split('質問：')[1]) : fmtQ(secQs[qIdx].q) }}</h3>
      <button v-if="secQs[qIdx].audio" class="btn ghost sm" @click="playAudio(secQs[qIdx].audio)"><span v-html="ic('volume',15)"></span> Putar audio</button>
      <button v-for="(o,i) in secQs[qIdx].o" :key="i" class="opt"
        :class="{pick: qAns[qAns.length-1]?.q===secQs[qIdx] && qAns[qAns.length-1].pick===i, right: qAns[qAns.length-1]?.q===secQs[qIdx] && i===secQs[qIdx].a, wrong: qAns[qAns.length-1]?.q===secQs[qIdx] && qAns[qAns.length-1].pick===i && i!==secQs[qIdx].a}"
        @click="answer(i)"><b>{{ ['A','B','C','D'][i] }}.</b> {{ o }}</button>
    </section>

    <!-- ============ ADAPTIVE RUN ============ -->
    <section v-if="tab==='adaptiverun' && adaptiveQs && adaptiveQs.length" class="card pop tabsec">
      <div class="q-head"><b>🧠 Review Cerdas</b><span class="muted small">Soal {{ qIdx+1 }}/{{ adaptiveQs.length }}</span></div>
      <div class="qbar"><i :style="{width: (qIdx/adaptiveQs.length*100)+'%'}"></i></div>
      <div v-if="adaptiveQs[qIdx].img"><img :src="adaptiveQs[qIdx].img" style="max-width:100%;border-radius:8px;margin:8px 0"></div><h3 class="q-text" style="white-space:pre-line">{{ fmtQ(adaptiveQs[qIdx].q) }}</h3>
      <button v-for="(o,i) in adaptiveQs[qIdx].o" :key="i" class="opt"
        :class="{pick: qAns[qAns.length-1]?.q===adaptiveQs[qIdx] && qAns[qAns.length-1].pick===i, right: qAns[qAns.length-1]?.q===adaptiveQs[qIdx] && i===adaptiveQs[qIdx].a, wrong: qAns[qAns.length-1]?.q===adaptiveQs[qIdx] && qAns[qAns.length-1].pick===i && i!==adaptiveQs[qIdx].a}"
        @click="adaptAnswer(i)"><b>{{ ['A','B','C','D'][i] }}.</b> {{ o }}</button>
    </section>

    <!-- ============ QUIZ DONE ============ -->
    <section v-if="tab==='quizdone'" class="card center tabsec">
      <div v-html="illus('trophy')"></div>
      <h2>Skor: {{ qScore }}/{{ qAns.length }} ({{ qAns.length ? Math.round(qScore/qAns.length*100) : 0 }}%)</h2>
      <p class="muted">{{ qScore/qAns.length >= .7 ? 'Sugoi! 🎉' : qScore/qAns.length >= .4 ? 'Lumayan, teruskan! 💪' : 'Ayo belajar lagi! 📚' }}</p>
      <div v-if="secScores.length" style="text-align:left;margin-top:8px">
        <h3><span v-html="ic('chart',18)"></span> Bedah nilai per seksi</h3>
        <div v-for="s in secScores" :key="s.name" class="rowline"><span>{{ s.name }}</span><b :class="s.pct<60?'bad':''">{{ s.ok }}/{{ s.total }} ({{ s.pct }}%)</b></div>
        <div v-if="weakSpots.length" class="card warn">
          <b><span v-html="ic('target',16)"></span> Perlu ditingkatkan:</b>
          <div v-for="s in weakSpots" :key="s.name" class="muted small">• {{ s.name }} ({{ s.pct }}%)</div>
          <button class="btn ghost sm" @click="modulCat='bunpou';modulLevel=qLevel;modulQ='';modulPat=null;tab='library'">Pelajari materi {{ qLevel.toUpperCase() }}</button>
        </div>
        <div v-else class="card ok-card"><b><span v-html="ic('sparkles',16)"></span> Semua seksi lolos! Pertahankan!</b></div>
      </div>
      <button class="btn" @click="tab='quiz'">Kembali</button>
    </section>

    <!-- ============ TANYA AI (Muse Sensei) ============ -->
    <section v-if="tab==='tanya'" class="tabsec">
      <h2 class="ttl"><span v-html="ic('chat')"></span> Tanya AI</h2>
      <div class="card" style="padding:12px">
        <div style="display:flex;gap:10px;align-items:center;margin-bottom:10px">
          <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--pri),var(--pri-d));display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0">🌸</div>
          <div><b>Muse Sensei</b><div class="muted small">Sensei AI bahasa Jepangmu — tanya apa aja!</div></div>
          <button v-if="askMsgs.length" class="mini-btn" @click="clearAsk()" title="Hapus riwayat" style="margin-left:auto">🗑️</button>
        </div>
        <div ref="askBox" style="max-height:55vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px;margin-bottom:10px">
          <div v-if="!askMsgs.length" class="center muted small" style="padding:16px 8px">
            <p style="margin-bottom:10px">👋 Halo! Aku <b>Muse Sensei</b>.<br>Tanya soal tata bahasa, kosakata, kanji, JLPT, atau apa pun tentang bahasa Jepang!</p>
            <div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center">
              <button v-for="s in ['Apa bedanya は dan が?','Buatkan contoh kalimat pakai て-form','Jelaskan kanji 愛','Tips lulus JLPT N5']" :key="s" class="mini-btn" @click="askInput=s;sendAsk()">{{ s }}</button>
            </div>
          </div>
          <div v-for="(m,mi) in askMsgs" :key="mi" :style="{alignSelf: m.role==='user' ? 'flex-end' : 'flex-start', maxWidth: '88%'}">
            <div :style="{background: m.role==='user' ? 'var(--pri)' : 'var(--bg2)', color: m.role==='user' ? '#fff' : 'var(--ink)', borderRadius: '14px', padding: '9px 13px', fontSize: '14px', lineHeight: 1.65, whiteSpace: 'pre-line', wordBreak: 'keep-all'}">{{ m.text }}</div>
          </div>
          <div v-if="askLoading" style="align-self:flex-start">
            <div style="background:var(--bg2);border-radius:14px;padding:10px 16px;font-size:14px" class="muted">Muse Sensei mengetik<span class="typing-dots"><span>.</span><span>.</span><span>.</span></span></div>
          </div>
        </div>
        <div style="display:flex;gap:8px">
          <input v-model="askInput" @keyup.enter="sendAsk()" :disabled="askLoading" placeholder="Tanya apa pun tentang bahasa Jepang..." style="flex:1;padding:10px 14px;border:1px solid var(--line);border-radius:20px;font-size:14px;background:var(--bg);color:var(--ink)" maxlength="1000">
          <button class="btn" @click="sendAsk()" :disabled="askLoading || !askInput.trim()" style="border-radius:50%;width:44px;height:44px;padding:0;flex-shrink:0" title="Kirim">➤</button>
        </div>
        <p class="muted small center" style="margin:8px 0 0">Maks 30 pertanyaan/jam · Riwayat tersimpan di akunmu</p>
      </div>
    </section>

    <!-- ============ KAMUS ============ -->
    <section v-if="tab==='kamus'" class="tabsec">
      <h2 class="ttl"><span v-html="ic('search')"></span> Kamus</h2>
      <p class="muted small">218rb+ kosakata & 13rb kanji. Cari pakai kanji, kana, romaji, atau arti.</p>
      <div class="mode-grid" style="grid-template-columns:1fr 1fr">
        <div class="mode" :class="{on: kamusTab==='kotoba'}" @click="kamusTab='kotoba';kamusDetail=null;searchKamus()"><div class="mode-e" v-html="ic('filetext',30)"></div><b>Kotoba</b></div>
        <div class="mode" :class="{on: kamusTab==='kanji'}" @click="kamusTab='kanji';kamusDetail=null;searchKamus()"><div class="mode-e" v-html="ic('pen',30)"></div><b>Kanji</b></div>
      </div>
      <div v-if="kamusTab==='kanji'" class="pill-row">
        <button v-for="j in [0,5,4,3,2,1]" :key="j" class="pill" :class="{on: kamusJlpt===j}" @click="kamusJlpt=j;browseKanji()">{{ j===0 ? 'Semua' : 'N'+j }}</button>
      </div>
      <div class="searchbar"><span v-html="ic('search',17)"></span><input v-model="kamusQ" @input="kamusType" :placeholder="kamusTab==='kotoba' ? 'cth: 食べる / taberu / to eat' : 'cth: 食 / eat'"></div>
      <div v-if="kamusLoading" class="kamus-grid">
        <div v-for="i in 6" :key="'sk'+i" class="skel-card" style="margin:0"><div class="skel skel-line" style="width:45%"></div><div class="skel skel-line" style="width:80%"></div></div>
      </div>
      <div v-if="!kamusDetail">
        <div class="kamus-grid">
        <div v-for="r in kamusResults" :key="r.id||r.ch" class="lvl" @click="kamusTab==='kotoba'?openWord(r.id):openKanji(r.ch)">
          <div class="lvl-body">
            <b class="big">{{ kamusTab==='kotoba' ? (r.keb[0]||r.reb[0]) : r.ch }}</b>
            <span class="muted small">{{ kamusTab==='kotoba' ? r.reb.join('、') : r.meaning }}</span>
            <div class="muted small" v-if="kamusTab==='kotoba'">{{ r.gloss.slice(0,120) }}</div>
            <div v-if="kamusTab==='kanji'"><span class="chip" v-if="r.jlpt">{{ jlptLabel(r.jlpt) }}</span> <span class="muted small">{{ r.strokes }} goresan</span></div>
          </div>
          <span v-html="ic('volume',17)"></span>
        </div>
        </div>
        <div v-if="kamusQ && !kamusLoading && !kamusResults.length" class="card muted small center">Tidak ketemu. Coba kata lain.</div>
      </div>
      <div v-else class="card pop">
        <div class="back-row"><button class="btn ghost sm" @click="kamusDetail=null"><span v-html="ic('back',15)"></span> Hasil cari</button></div>
        <div v-if="kamusDetail.type==='word'">
          <h2>{{ kamusDetail.keb[0] || kamusDetail.reb[0] }}</h2>
          <p class="muted">{{ kamusDetail.reb.join('、') }}</p>
          <div class="step-tag"><span v-html="ic('book',12)"></span> Arti Bahasa Indonesia</div>
          <div class="passage" v-if="kamusId">{{ kamusId }}</div>
          <div class="passage muted" v-else-if="translating">Menerjemahkan…</div>
          <div class="passage muted" v-else>Tidak tersedia. <button class="mini-btn" @click="openWord(kamusDetail.id)">Coba lagi</button></div>
          <div class="step-tag" style="margin-top:8px"><span v-html="ic('book',12)"></span> Arti Bahasa Inggris</div>
          <div class="passage muted small">{{ kamusDetail.gloss }}</div>
          <p class="muted small" v-if="kamusDetail.pos">{{ posLabel(kamusDetail.pos) }}</p>
          <div class="btn-row">
            <button class="btn sm" @click="speak(kamusDetail.reb[0])"><span v-html="ic('volume',15)"></span> Dengarkan</button>
            <button class="btn ghost sm" @click="saveCard('word', kamusDetail.keb[0]||kamusDetail.reb[0], kamusDetail.gloss.slice(0,120), kamusDetail.reb[0])"><span v-html="ic('plus',15)"></span> Flashcard</button>
          </div>
          <div v-if="wordKanji().length" style="margin-top:10px">
            <div class="step-tag"><span v-html="ic('pen',12)"></span> Cara Menulis</div>
            <word-stroke-order :kanjis="wordKanji()" :key="wordKanji().join('')"></word-stroke-order>
          </div>
        </div>
        <div v-if="kamusDetail.type==='kanji'">
          <div class="kanji-big">{{ kamusDetail.ch }}</div>
          <p class="center"><span class="chip" v-if="kamusDetail.jlpt">{{ jlptLabel(kamusDetail.jlpt) }}</span> <span class="chip">{{ kamusDetail.strokes }} goresan</span></p>
          <div class="step-tag"><span v-html="ic('book',12)"></span> Arti Bahasa Indonesia</div>
          <div class="passage" v-if="kamusKanjiId">{{ kamusKanjiId }}</div>
          <div class="passage muted" v-else-if="translating">Menerjemahkan…</div>
          <div class="passage muted" v-else>Belum tersedia. <button class="mini-btn" @click="openKanji(kamusDetail.ch)">Coba lagi</button></div>
          <div class="step-tag" style="margin-top:8px"><span v-html="ic('book',12)"></span> Arti Bahasa Inggris</div>
          <div class="passage muted small">{{ kamusDetail.meaning }}</div>
          <p><b>On:</b> {{ (kamusDetail.onyomi||[]).join('、') || '—' }}</p>
          <p><b>Kun:</b> {{ (kamusDetail.kunyomi||[]).join('、') || '—' }}</p>
          <div class="step-tag"><span v-html="ic('pen',12)"></span> Cara Menulis · {{ kamusDetail.strokes }} goresan</div>
          <stroke-order :ch="kamusDetail.ch" :key="kamusDetail.ch"></stroke-order>
          <div class="btn-row"><button class="btn ghost sm" @click="saveCard('kanji', kamusDetail.ch, kamusDetail.meaning.slice(0,120), (kamusDetail.onyomi[0]||kamusDetail.kunyomi[0]||''))"><span v-html="ic('plus',15)"></span> Flashcard</button></div>
          <h3>Contoh kata</h3>
          <p class="muted small">Ketuk karakter kanji untuk melihat cara menulisnya.</p>
          <div v-for="w in kamusDetail.words" :key="w.id" class="lvl" @click="openWord(w.id)">
            <div class="lvl-body"><b><span v-for="(kc,ki) in splitKanji(w.keb[0]||w.reb[0])" :key="ki" :class="{'kj-link': kc.k}" @click="kc.k ? openKanjiChar($event, kc.c) : null">{{ kc.c }}</span></b> <span class="muted small">{{ w.reb[0] }}</span><div class="muted small">{{ w.gloss.slice(0,80) }}</div></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ SAYA ============ -->
    <section v-if="tab==='saya'" class="tabsec">
      <div class="card hero">
        <div class="hero-mascot">{{ mascot.e }}</div>
        <div class="hero-info">
          <h2>{{ user.name }}</h2>
          <p class="muted">{{ mascot.t }} · <b>{{ user.xp }}</b> XP · <span v-html="ic('coin',14)"></span> <b>{{ user.coins }}</b></p>
          <div class="xpbar"><i :style="{width: (mascot.next ? Math.min(100, Math.round(user.xp/mascot.next*100)) : 100)+'%'}"></i></div>
        </div>
      </div>

      <div class="card" v-if="srsDue.length" @click="srsIdx=0;srsShow=false;srsTyped='';srsDone=0;tab='srsrun'" style="cursor:pointer">
        <b><span v-html="ic('card',18)"></span> {{ srsDue.length }} flashcard siap direview</b>
        <p class="muted small">Tap untuk mulai review (ketik jawaban untuk kanji)</p>
      </div>
      <div class="card muted small" v-else><span v-html="ic('card',15)"></span> {{ srsTotal }} flashcard tersimpan. Tambah dari materi/kamus, review muncul di sini.</div>

      <h2 class="ttl"><span v-html="ic('trophy')"></span> Liga Mingguan</h2>
      <p class="muted small">Kumpulkan XP minggu ini! <b>Kamu: {{ myWeekly }} XP</b></p>
      <div v-for="(b,i) in store.board" :key="b.name+i" class="rowline"><span>{{ ['1.','2.','3.'][i] || (i+1)+'.' }} {{ b.name }}</span><b>{{ b.wxp }} XP</b></div>

      <h2 class="ttl"><span v-html="ic('chart')"></span> Statistik</h2>
      <div class="stat-row">
        <div class="stat"><div class="stat-n streak"><span v-html="ic('flame',18)"></span>{{ store.stats?.streak_days || 0 }}</div><div class="muted small">Streak</div></div>
        <div class="stat"><div class="stat-n">{{ store.stats?.lessons_done || 0 }}</div><div class="muted small">Materi</div></div>
        <div class="stat"><div class="stat-n">{{ store.stats?.quiz_count || 0 }}</div><div class="muted small">Quiz</div></div>
        <div class="stat"><div class="stat-n">{{ store.stats?.quiz_avg || 0 }}%</div><div class="muted small">Rata²</div></div>
      </div>
      <div v-for="lv in LEVEL_ORDER" :key="'p-'+lv" class="lvl">
        <div class="badge">{{ LV_ICON[lv] }}</div>
        <div class="lvl-body"><b>{{ lvName(lv) }}</b><div class="bar"><i :style="{width: Math.round(levelProgress[lv]*100)+'%'}"></i></div></div>
        <div>{{ Math.round(levelProgress[lv]*100) }}%</div>
      </div>

      <h2 class="ttl"><span v-html="ic('sliders')"></span> Pengaturan</h2>
      <div class="card">
        <label class="lbl">Porsi harian</label>
        <select :value="user.intensity" @change="saveSetting('intensity', $event.target.value)">
          <option value="sedikit">Sedikit (3 materi)</option><option value="sedang">Sedang (6 materi)</option><option value="banyak">Banyak (10 materi)</option>
        </select>
        <label class="lbl">Level</label>
        <select :value="user.level" @change="saveSetting('level', $event.target.value)">
          <option v-for="l in LEVEL_ORDER" :value="l">{{ lvName(l) }}</option>
        </select>
      </div>
      <button class="btn ghost btn-block" @click="logout">Keluar</button>
    </section>

    <!-- ============ SRS RUN ============ -->
    <section v-if="tab==='srsrun' && srsDue[srsIdx]" class="card pop center tabsec">
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
      <div class="nav-logo"><span class="jp">日本語</span> NihongoLearn</div>
      <button :class="{on:tab==='home'}" @click="tab='home'"><span v-html="ic('home')"></span>Beranda</button>
      <button :class="{on:tab==='library'}" @click="tab='library'"><span v-html="ic('layers')"></span>Modul</button>
      <button :class="{on:['quiz','quizrun','adaptiverun'].includes(tab)}" @click="tab='quiz'"><span v-html="ic('clock')"></span>Quiz</button>
      <button :class="{on:tab==='kamus'}" @click="tab='kamus'"><span v-html="ic('search')"></span>Kamus</button>
      <button :class="{on:tab==='tanya'}" @click="tab='tanya'"><span v-html="ic('chat')"></span>Tanya AI</button>
      <button :class="{on:['saya','srsrun'].includes(tab)}" @click="tab='saya'"><span v-html="ic('user')"></span>Saya</button>
    </nav>
  </div>
</div>

`,
});

// ===== Animasi urutan goresan kanji (data: KanjiVG, CC BY-SA 3.0) =====
// Sebar posisi angka urutan goresan agar tidak bertabrakan (tolak-menolak sederhana)
function spreadNums(strokes) {
  const pts = strokes.map(s => ({ x: s.x, y: s.y }));
  const MIN = 10;
  for (let it = 0; it < 24; it++) {
    let moved = false;
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[j].x - pts[i].x, dy = pts[j].y - pts[i].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 0.01) { pts[j].x += 5; pts[j].y += 3; moved = true; }
        else if (d < MIN) {
          const push = (MIN - d) / 2, ux = dx / d, uy = dy / d;
          pts[i].x -= ux * push; pts[i].y -= uy * push;
          pts[j].x += ux * push; pts[j].y += uy * push;
          moved = true;
        }
      }
    }
    if (!moved) break;
  }
  pts.forEach((p, k) => {
    strokes[k].nx = Math.max(3, Math.min(106, p.x));
    strokes[k].ny = Math.max(3, Math.min(106, p.y));
  });
  return strokes;
}
app.component('StrokeOrder', {
  props: ['ch'],
  data: () => ({ strokes: [], idx: 0, playing: false, timer: null, error: false, loading: true }),
  computed: {
    urls() {
      if (!this.ch) return [];
      const hex = String(this.ch).codePointAt(0).toString(16).padStart(5, '0');
      return ['kanjivg/' + hex + '.svg', 'https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@master/kanji/' + hex + '.svg'];
    },
  },
  mounted() { this.load(); },
  watch: { ch() { this.reset(); this.load(); } },
  beforeUnmount() { clearTimeout(this.timer); },
  methods: {
    reset() { clearTimeout(this.timer); this.strokes = []; this.idx = 0; this.playing = false; this.error = false; this.loading = true; },
    async load() {
      try {
      for (const u of this.urls()) {
        try {
          const r = await fetch(u);
          const t = await r.text();
          if (!r.ok || !t.includes('<svg')) continue;
          const doc = new DOMParser().parseFromString(t, 'image/svg+xml');
          if (doc.querySelector('parsererror')) continue;
          const ps = [...doc.querySelectorAll('path')].filter(p => /-s\d+$/.test(p.id || ''));
          ps.sort((a, b) => parseInt(a.id.match(/-s(\d+)$/)[1]) - parseInt(b.id.match(/-s(\d+)$/)[1]));
          const st = spreadNums(ps.map(p => {
            const d = p.getAttribute('d') || '';
            const pt = this.strokeStart(d);
            return { d, x: pt.x, y: pt.y };
          }).filter(s => s.d));
          if (st.length) { this.strokes = st; this.loading = false; return; }
        } catch (e) {}
      }
      } catch (e) {}
      if (!this.strokes.length) this.error = true;
      this.loading = false;
    },
    play() {
      if (this.playing) { this.playing = false; clearTimeout(this.timer); return; }
      if (this.idx >= this.strokes.length) this.idx = 0;
      this.playing = true;
      const tick = () => {
        if (!this.playing) return;
        if (this.idx >= this.strokes.length) { this.playing = false; return; }
        this.idx++;
        this.timer = setTimeout(tick, 650);
      };
      tick();
    },
    step(d) { this.playing = false; clearTimeout(this.timer); this.idx = Math.max(0, Math.min(this.strokes.length, this.idx + d)); },
    replay() { this.playing = false; clearTimeout(this.timer); this.idx = 0; this.$nextTick(() => this.play()); },
    playLabel() { return this.playing ? 'Jeda' : (this.idx > 0 && this.idx < this.strokes.length ? 'Lanjut' : 'Putar'); },
    shownStroke() { return Math.min(this.idx, this.strokes.length); }
  },
  template: `
    <div class="stroke-wrap">
      <div v-if="loading" class="skel" style="width:190px;height:190px;border-radius:18px;margin:0 auto"></div>
      <div v-else-if="error" class="muted small center">Animasi goresan belum tersedia untuk kanji ini.</div>
      <div v-else>
        <svg viewBox="0 0 109 109" class="stroke-svg" aria-label="Animasi urutan goresan">
          <path v-for="(s,i) in strokes" :key="'g'+i" :d="s.d" class="ghost" fill="none" />
          <path v-for="(s,i) in strokes" :key="i" :d="s.d" class="trace" :class="{ done: i < idx }" pathLength="1" fill="none" />
          <text v-for="(s,i) in strokes" :key="'n'+i" :x="s.nx" :y="s.ny" class="snum">{{ i + 1 }}</text>
        </svg>
        <p class="muted small center" style="margin:6px 0">Goresan {{ shownStroke() }} / {{ strokes.length }}</p>
        <div class="btn-row center">
          <button class="mini-btn" @click="step(-1)" :disabled="idx <= 0" title="Mundur">‹</button>
          <button class="btn sm" @click="play()">{{ playLabel() }}</button>
          <button class="mini-btn" @click="step(1)" :disabled="idx >= strokes.length" title="Maju">›</button>
          <button class="mini-btn" @click="replay()" title="Ulangi">↺</button>
        </div>
        <p class="muted small center" style="margin-top:6px">Urutan goresan: KanjiVG (CC BY-SA)</p>
      </div>
    </div>`
});

// ===== Animasi goresan gabungan: semua kanji dalam satu kata, sejajar, satu tombol play =====
app.component('WordStrokeOrder', {
  props: ['kanjis'],
  data: () => ({ sets: [], idx: 0, playing: false, timer: null, error: false, loading: true }),
  computed: {
    total() { return this.sets.reduce((a, s) => a + s.strokes.length, 0); },
    activeIdx() {
      let acc = 0;
      for (let i = 0; i < this.sets.length; i++) {
        acc += this.sets[i].strokes.length;
        if (this.idx < acc) return i;
      }
      return Math.max(0, this.sets.length - 1);
    }
  },
  mounted() { this.load(); },
  beforeUnmount() { clearTimeout(this.timer); },
  methods: {
    reset() { clearTimeout(this.timer); this.sets = []; this.idx = 0; this.playing = false; this.error = false; this.loading = true; },
    svgUrls(ch) { const hex = String(ch).codePointAt(0).toString(16).padStart(5, '0'); return ['kanjivg/' + hex + '.svg', 'https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@master/kanji/' + hex + '.svg']; },
    async load() {
      try {
        const arr = await Promise.all((this.kanjis || []).map(async (ch) => {
          for (const u of this.svgUrls(ch)) {
          try {
            const r = await fetch(u);
            const t = await r.text();
            if (!r.ok || t.indexOf('<svg') < 0) continue;
            const doc = new DOMParser().parseFromString(t, 'image/svg+xml');
            if (doc.querySelector('parsererror')) continue;
            const ps = [...doc.querySelectorAll('path')].filter(p => /-s\d+$/.test(p.id || ''));
            ps.sort((a, b) => parseInt(a.id.match(/-s(\d+)$/)[1]) - parseInt(b.id.match(/-s(\d+)$/)[1]));
            const strokes = spreadNums(ps.map(p => {
              const d = p.getAttribute('d') || '';
              const m = /M([0-9.]+),([0-9.]+)/.exec(d);
              return { d, x: m ? +m[1] : 0, y: m ? +m[2] : 0 };
            }).filter(s => s.d));
            if (strokes.length) return { ch, strokes };
          } catch {}
          }
          return { ch, strokes: [] };
        }));
        this.sets = arr.filter(s => s.strokes.length);
        if (!this.sets.length) this.error = true;
      } catch { this.error = true; }
      this.loading = false;
    },
    offset(i) { let a = 0; for (let k = 0; k < i; k++) a += this.sets[k].strokes.length; return a; },
    shownFor(i) { return Math.max(0, Math.min(this.sets[i].strokes.length, this.idx - this.offset(i))); },
    play() {
      if (this.playing) { this.playing = false; clearTimeout(this.timer); return; }
      if (this.idx >= this.total) this.idx = 0;
      this.playing = true;
      const tick = () => {
        if (!this.playing) return;
        if (this.idx >= this.total) { this.playing = false; return; }
        this.idx++;
        this.timer = setTimeout(tick, 650);
      };
      tick();
    },
    step(d) { this.playing = false; clearTimeout(this.timer); this.idx = Math.max(0, Math.min(this.total, this.idx + d)); },
    replay() { this.playing = false; clearTimeout(this.timer); this.idx = 0; this.$nextTick(() => this.play()); },
    playLabel() { return this.playing ? 'Jeda' : (this.idx > 0 && this.idx < this.total ? 'Lanjut' : 'Putar'); }
  },
  template: `
    <div class="stroke-wrap">
      <div v-if="loading" class="skel" style="width:190px;height:190px;border-radius:18px;margin:0 auto"></div>
      <div v-else-if="error" class="muted small center">Animasi goresan belum tersedia untuk kata ini.</div>
      <div v-else>
        <div class="wstroke-row">
          <div v-for="(s, i) in sets" :key="s.ch" class="wstroke-item" :class="{ active: activeIdx === i }">
            <div class="wstroke-ch">{{ s.ch }}</div>
            <svg viewBox="0 0 109 109" class="stroke-svg wsm" aria-label="Animasi urutan goresan">
              <path v-for="(st, j) in s.strokes" :key="'g'+j" :d="st.d" class="ghost" fill="none" />
              <path v-for="(st, j) in s.strokes" :key="j" :d="st.d" class="trace" :class="{ done: j < shownFor(i) }" pathLength="1" fill="none" />
              <text v-for="(st, j) in s.strokes" :key="'n'+j" :x="st.nx" :y="st.ny" class="snum">{{ j + 1 }}</text>
            </svg>
          </div>
        </div>
        <p class="muted small center" style="margin:6px 0">Goresan {{ idx }} / {{ total }}</p>
        <div class="btn-row center">
          <button class="mini-btn" @click="step(-1)" :disabled="idx <= 0" title="Mundur">‹</button>
          <button class="btn sm" @click="play()">{{ playLabel() }}</button>
          <button class="mini-btn" @click="step(1)" :disabled="idx >= total" title="Maju">›</button>
          <button class="mini-btn" @click="replay()" title="Ulangi">↺</button>
        </div>
        <p class="muted small center" style="margin-top:6px">Urutan goresan: KanjiVG (CC BY-SA)</p>
      </div>
    </div>`
});

// ===== Isi pelajaran: pola Jelas -> Contoh -> Review (Bunpo/LingoDeer) =====
app.component('LessonView', {
  props: ['les', 'done'],
  emits: ['done', 'savecard'],
  data: () => ({ reviewIdx: 0, reviewAns: [], reviewDone: false, reviewQCache: null, reviewLock: false }),
  watch: { les() { this.reviewIdx = 0; this.reviewAns = []; this.reviewDone = false; this.reviewQCache = null; this.reviewLock = false; } },
  methods: {
    kana() {
      const base = this.les.kanaType === 'hiragana' ? KANA.hiragana : KANA.katakana;
      const idx = parseInt(this.les.key.split('-')[1]) - 1;
      const rows = [[0,5],[5,10],[10,15],[15,20],[20,25],[25,30],[30,35],[35,38],[38,43],[43,46]];
      const [a,b] = rows[idx];
      return base.slice(a,b);
    },
    // review bunpou: pilih contoh yang tepat untuk pola ini (di-cache biar tidak reshuffle)
    reviewQs() {
      if (this.reviewQCache) return this.reviewQCache;
      const items = LESSONS[this.les.level].bunpou || [];
      this.reviewQCache = items.slice(0, 3).map((b, i) => {
        const others = items.filter((_, j) => j !== i).slice(0, 2);
        const opts = [{ j: b.x[0].j, i: b.x[0].i, ok: true }]
          .concat(others.map(o => ({ j: o.x[0].j, i: o.x[0].i, ok: false })))
          .sort(() => Math.random() - .5);
        return { t: b.t, opts };
      });
      return this.reviewQCache;
    },
    reviewPick(o, i) {
      if (this.reviewLock) return;
      this.reviewLock = true;
      this.reviewAns.push({ ok: o.ok, pick: i });
      toast(o.ok ? 'Benar! ✓' : 'Kurang tepat ✗');
      setTimeout(() => {
        this.reviewLock = false;
        if (this.reviewIdx + 1 < this.reviewQs().length) this.reviewIdx++;
        else this.reviewDone = true;
      }, 1000);
    },
    speak, toast,
  },
  template: `
  <div>
    <h2 class="ttl">{{ les.title }}</h2>
    <div v-if="les.type==='kana'">
      <p class="muted small">Klik huruf untuk dengar cara baca. Hafalkan bentuk & bunyinya!</p>
      <div class="kana-grid"><div v-for="k in kana()" :key="k.k" class="kana" @click="speak(k.k)"><div class="k">{{ k.k }}</div><div class="r">{{ k.r }}</div></div></div>
      <div class="card tip"><span v-html="ic('sparkles',15)"></span> <b>Tips:</b> Tulis berulang di kertas. Bunyi ぢ/づ dan じ/ず sama — ikuti konteks!</div>
    </div>
    <div v-if="les.type==='kotoba'">
      <p class="muted small">Klik <span v-html="ic('volume',13)"></span> untuk dengar, <span v-html="ic('plus',13)"></span> untuk simpan ke flashcard.</p>
      <div v-for="w in (LESSONS[les.level].kotoba||[])" :key="w.jp" class="lvl">
        <div class="lvl-body" @click="speak(w.jp)"><b class="big">{{ w.jp }}</b> <span class="muted small">{{ w.kj }}</span><div class="muted small">{{ w.r }} — {{ w.id }}</div></div>
        <button class="mini-btn" @click="speak(w.jp)"><span v-html="ic('volume')"></span></button>
        <button class="mini-btn" @click="$emit('savecard','word', w.kj&&w.kj!==w.jp?w.kj:w.jp, w.id, w.jp)"><span v-html="ic('plus')"></span></button>
      </div>
    </div>
    <div v-if="les.type==='kanji'">
      <p class="muted small">Pola WaniKani: pahami mnemonic-nya, lalu hafalkan!</p>
      <div v-for="k in (LESSONS[les.level].kanji||[])" :key="k.kj" class="card kanji-card">
        <div class="kanji-big">{{ k.kj }}</div>
        <div class="center"><b>{{ k.id }}</b></div>
        <div class="muted small center">On: {{ k.on }} · Kun: {{ k.kun }}</div>
        <div v-if="k.m" class="passage">💭 <b>Mnemonic:</b> {{ k.m }}</div>
        <div v-for="e in k.ex" :key="e.j" class="muted small center link" @click="speak(e.j)"><span v-html="ic('volume',13)"></span> {{ e.j }} ({{ e.r }}) — {{ e.i }}</div>
        <div class="center"><button class="btn ghost sm" @click="$emit('savecard','kanji', k.kj, k.id, (k.on||'').split('・')[0]||(k.kun||'').split('・')[0])"><span v-html="ic('plus',14)"></span> Simpan flashcard</button></div>
      </div>
    </div>
    <div v-if="les.type==='bunpou'">
      <div v-for="b in (LESSONS[les.level].bunpou||[])" :key="b.t" class="card">
        <div class="step-tag"><span v-html="ic('book',12)"></span> Penjelasan</div>
        <b class="big">{{ b.t }}</b><p style="margin:6px 0">{{ b.e }}</p>
        <div class="step-tag"><span v-html="ic('chat',12)"></span> Contoh</div>
        <div v-for="x in b.x" :key="x.j" class="passage link" @click="speak(x.j)">{{ x.j }}<br><span class="muted small">{{ x.i }} <span v-html="ic('volume',12)"></span></span></div>
      </div>
      <div class="card">
        <div class="step-tag"><span v-html="ic('sparkles',12)"></span> Review cepat</div>
        <p class="muted small">Pilih contoh yang TEPAT untuk tiap pola:</p>
        <div v-if="!reviewDone && reviewQs()[reviewIdx]">
          <p><b>{{ reviewQs()[reviewIdx].t }}</b></p>
          <button v-for="(o,i) in reviewQs()[reviewIdx].opts" :key="'r'+reviewIdx+'-'+i" class="opt"
            :class="{right: reviewLock && o.ok, wrong: reviewLock && !o.ok && reviewAns[reviewIdx] && reviewAns[reviewIdx].pick===i}"
            @click="reviewPick(o, i)">{{ o.j }}<br><span class="muted small">{{ o.i }}</span></button>
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
        <button class="btn ghost sm" @click="speak(c.a)"><span v-html="ic('volume',15)"></span> Putar audio</button>
        <button v-for="(o,oi) in c.opts" :key="oi" class="opt" @click="o===c.opts[c.ans]?toast('Benar! 🎉'):toast('Belum tepat, coba lagi!')">{{ o }}</button>
      </div>
    </div>
    <button class="btn btn-block" @click="$emit('done')" :disabled="done"><span v-html="ic('check',16)"></span> {{ done ? 'Sudah tuntas' : 'Tandai tuntas +20 XP' }}</button>
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
app.config.globalProperties.ic = ic;
app.config.globalProperties.illus = illus;
app.config.globalProperties.LV_ICON = LV_ICON;
app.config.globalProperties.LIB_TYPES = LIB_TYPES;
app.config.globalProperties.TYPE_ICON = TYPE_ICON;
app.config.globalProperties.MODUL_CATS = MODUL_CATS;
app.config.globalProperties.SSW_FIELDS = SSW_FIELDS;
app.config.globalProperties.BANK_YEARS = BANK_YEARS;
app.config.globalProperties.ALL_LESSONS = ALL_LESSONS;
app.config.globalProperties.LEVEL_ORDER = LEVEL_ORDER;
app.config.globalProperties.CHAPTERS = CHAPTERS;
app.mount('#app');

