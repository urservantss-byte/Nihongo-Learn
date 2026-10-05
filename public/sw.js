/* NihongoLearn PWA — service worker */
const CACHE = 'nihongolearn-v2';
const SHELL = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/maskable-512.png',
  '/icons/apple-touch-icon.png',
  '/icons/favicon-32.png',
  '/css/style.css?v=67',
  '/js/vendor-vue.js?v=55',
  '/js/data-kana.js?v=55',
  '/js/data-lessons.js?v=55',
  '/js/data-quiz.js?v=55',
  '/js/data-chapters.js?v=63',
  '/js/data-kanji-nc.js?v=2',
  '/js/data-banksoal.js?v=1',
  '/js/data-banksoal-n3.js?v=1',
  '/js/data-banksoal-cleaning.js?v=1',
  '/js/data-banksoal-jft2.js?v=1',
  '/js/app.js?v=78'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;

  // Navigasi / HTML: network-first (biar selalu dapat versi terbaru)
  if (e.request.mode === 'navigate' || url.pathname === '/' || url.pathname.endsWith('.html')) {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('/index.html', copy));
          return res;
        })
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  // API: network-only (data user harus live)
  if (url.pathname.startsWith('/api/')) return;

  // Aset statis: cache-first, simpan yang baru
  e.respondWith(
    caches.match(e.request).then(
      (hit) =>
        hit ||
        fetch(e.request).then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(e.request, copy));
          }
          return res;
        })
    )
  );
});
