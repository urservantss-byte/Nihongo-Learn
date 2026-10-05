/* ============================================================
   CHAPTERS — Jalur belajar ala Soumatome per level JLPT
   Urutan bab dari termudah → tersulit.
   Setiap bab: penjelasan + kotoba/bunpou/kanji/kaiwa + quiz akhir.
   Lulus (skor >= 70) → bab berikutnya terbuka.
   ============================================================ */

const CHAPTERS = {
n5: [
/* ---- BAB 1 ---- */
{
  id: 'n5-1', bab: 1, level: 'n5',
  title: 'Aisatsu & Perkenalan Diri',
  desc: 'Salam sehari-hari dan cara memperkenalkan diri dalam bahasa Jepang',
  icon: '👋',
  sections: [
    {
      type: 'penjelasan', title: 'Kenapa Mulai dari Aisatsu?',
      body: `Orang Jepang sangat memperhatikan <b>aisatsu</b> (挨拶 = salam). Menyapa dengan benar adalah langkah pertama agar diterima dalam percakapan. Di bab ini kamu akan menguasai salam dasar dan pola perkenalan diri yang dipakai setiap hari.\n\n<b>Metode belajar:</b> baca penjelasan → hafalkan kotoba → pahami pola bunpou → tirukan kaiwa dengan suara keras → kerjakan quiz. Jangan lanjut sebelum quiz lulus!`
    },
    {
      type: 'kotoba', title: 'Kosakata Salam',
      items: [
        { jp: 'おはよう', r: 'ohayou', id: 'selamat pagi', note: 'Versi kasual. Formal: おはようございます' },
        { jp: 'こんにちは', r: 'konnichiwa', id: 'selamat siang / halo', note: 'Salam paling umum, dipakai siang hari' },
        { jp: 'こんばんは', r: 'konbanwa', id: 'selamat malam', note: 'Dipakai saat bertemu di malam hari' },
        { jp: 'はじめまして', r: 'hajimemashite', id: 'senang bertemu denganmu', note: 'Wajib saat pertama kali bertemu' },
        { jp: 'よろしくおねがいします', kj: '宜しくお願いします', r: 'yoroshiku onegaishimasu', id: 'mohon bantuannya', note: 'Penutup perkenalan, sangat penting' },
        { jp: 'ありがとう', r: 'arigatou', id: 'terima kasih', note: 'Formal: ありがとうございます' },
        { jp: 'すみません', kj: '済みません', r: 'sumimasen', id: 'maaf / permisi', note: 'Bisa untuk minta maaf ATAU memanggil orang' },
        { jp: 'さようなら', kj: '左様なら', r: 'sayounara', id: 'selamat tinggal', note: 'Untuk perpisahan yang lama' },
        { jp: 'じゃあね', r: 'jaa ne', id: 'dadah (kasual)', note: 'Antar teman saja' },
        { jp: 'おやすみなさい', r: 'oyasuminasai', id: 'selamat tidur', note: 'Saat akan tidur / pulang malam' },
      ]
    },
    {
      type: 'bunpou', title: 'Pola Perkenalan',
      items: [
        {
          pattern: 'わたしは [nama] です',
          arti: 'Saya adalah [nama]',
          explain: 'Pola paling dasar. <b>は</b> (dibaca "wa") adalah partikel topik — menandai siapa yang dibicarakan. <b>です</b> adalah kopula (seperti "adalah") versi sopan.',
          examples: [
            { jp: 'わたしは ブディ です。', id: 'Saya adalah Budi.' },
            { jp: 'わたしは がくせい です。', id: 'Saya adalah murid.' },
          ]
        },
        {
          pattern: '[asal] から きました',
          arti: 'Saya berasal dari [asal]',
          explain: '<b>から</b> artinya "dari". <b>きました</b> adalah bentuk lampau sopan dari きます (datang). Pola ini standar untuk menyebut asal daerah/negara.',
          examples: [
            { jp: 'インドネシア から きました。', id: 'Saya berasal dari Indonesia.' },
          ]
        },
      ]
    },
    {
      type: 'kaiwa', title: 'Percakapan: Perkenalan',
      lines: [
        { sp: 'A', jp: 'はじめまして。わたしは アニ です。', id: 'Senang bertemu denganmu. Saya Ani.' },
        { sp: 'B', jp: 'はじめまして。わたしは たなか です。', id: 'Senang bertemu denganmu. Saya Tanaka.' },
        { sp: 'A', jp: 'インドネシア から きました。', id: 'Saya berasal dari Indonesia.' },
        { sp: 'B', jp: 'そうですか。よろしくおねがいします。', id: 'Oh begitu. Mohon bantuannya.' },
      ]
    },
  ],
  quiz: [
    { q: 'Apa arti "はじめまして"?', o: ['Selamat tinggal', 'Senang bertemu denganmu', 'Terima kasih', 'Selamat pagi'], a: 1, explain: '"はじめまして" diucapkan saat pertama kali bertemu seseorang.' },
    { q: 'Mana yang merupakan salam "selamat malam"?', o: ['おはよう', 'こんにちは', 'こんばんは', 'さようなら'], a: 2, explain: '"こんばんは" (konbanwa) dipakai saat bertemu di malam hari.' },
    { q: 'Partikel は dalam "わたしは ブディ です" dibaca…', o: ['ha', 'wa', 'ho', 'wo'], a: 1, explain: 'Partikel は selalu dibaca "wa" meski ditulis "ha".' },
    { q: 'Apa fungsi です dalam kalimat?', o: ['Kata kerja "pergi"', 'Kopula sopan seperti "adalah"', 'Partikel topik', 'Kata sifat'], a: 1, explain: 'です adalah kopula (penghubung) versi sopan, setara "adalah".' },
    { q: '"インドネシア から きました" artinya…', o: ['Saya pergi ke Indonesia', 'Saya berasal dari Indonesia', 'Saya tinggal di Indonesia', 'Saya suka Indonesia'], a: 1, explain: 'から = dari, きました = telah datang (bentuk lampau sopan).' },
    { q: 'Kapan mengucapkan "よろしくおねがいします"?', o: ['Saat marah', 'Sebagai penutup perkenalan', 'Saat makan', 'Saat tidur'], a: 1, explain: 'Diucapkan di akhir perkenalan sebagai "mohon bantuannya".' },
    { q: 'Bentuk formal dari "ありがとう" adalah…', o: ['ありがとうございます', 'どうも', 'すみません', 'おねがいします'], a: 0, explain: 'ございます membuat ucapan lebih sopan/formal.' },
    { q: '"すみません" TIDAK bisa dipakai untuk…', o: ['Minta maaf', 'Memanggil pelayan', 'Permisi lewat', 'Mengucapkan terima kasih'], a: 3, explain: 'すみません = maaf/permisi, bukan terima kasih.' },
    { q: 'Lengkapi: わたしは がくせい ___。', o: ['です', 'ます', 'は', 'か'], a: 0, explain: 'Pola: [kata benda] です untuk menyatakan "adalah" secara sopan.' },
    { q: 'Mana pasangan salam yang TEPAT untuk pagi hari?', o: ['こんばんは', 'おはようございます', 'おやすみなさい', 'さようなら'], a: 1, explain: 'おはようございます adalah versi formal "selamat pagi".' },
  ]
},
/* ---- BAB 2 ---- */
{
  id: 'n5-2', bab: 2, level: 'n5',
  title: 'Angka, Waktu & Hari',
  desc: 'Menghitung 1–100, jam, menit, hari, tanggal, dan counter dasar',
  icon: '🔢',
  sections: [
    {
      type: 'penjelasan', title: 'Rahasia Bacaan Angka yang Berubah',
      body: `Angka 1–10 wajib hafal mati dulu: <b>いち・に・さん・し・ご・ろく・しち・はち・きゅう・じゅう</b>. Setelah itu polanya sangat logis: 11 = じゅういち (10+1), 20 = にじゅう (2×10), 35 = さんじゅうご. Sampai 99 tidak ada kejutan.\n\nTapi awas, ada <b>lima angka nakal</b> yang bacaannya berubah: <b>300</b> bukan さんひゃく melainkan <b>さんびゃく</b>, <b>600</b> = <b>ろっぴゃく</b>, <b>800</b> = <b>はっぴゃく</b>, <b>3000</b> = <b>さんぜん</b>, dan <b>8000</b> = <b>はっせん</b>.\n\n<b>Kenapa berubah?</b> Ini soal kemudahan lidah — さんひゃく terdengar "kaku", sedangkan さんびゃく mengalir. Polanya: ひゃく→<b>びゃく/ぴゃく</b> dan せん→<b>ぜん/っせん</b> setelah angka 3 dan 8. <b>Tips:</b> cukup hafalkan lima yang spesial ini, sisanya 100% ikut pola normal. <b>Jebakan umum:</b> 90% pemula salah baca 800 sebagai はちひゃく — jangan jadi salah satunya!`
    },
    {
      type: 'penjelasan', title: 'Jam, Menit & Tanggal: Jangan Asal Tebak',
      body: `Jam memakai akhiran <b>〜じ</b>, tapi tiga jam ini spesial: 4時 = <b>よじ</b> (bukan よんじ!), 7時 = <b>しちじ</b>, 9時 = <b>くじ</b>. Menit memakai <b>〜ふん</b> yang sering berubah jadi <b>ぷん</b>: 1分 = <b>いっぷん</b>, 3分 = <b>さんぷん</b>, 6分 = <b>ろっぷん</b>, 8分 = <b>はっぷん</b>, 10分 = <b>じゅっぷん</b>.\n\nTanggal pun punya yang spesial: tanggal 1 = <b>ついたち</b>, 14 = <b>じゅうよっか</b>, 20 = <b>はつか</b>, 24 = <b>にじゅうよっか</b>. Sisanya ikut pola 〜か/にち yang normal (ふつか, みっか, よっか…).\n\n<b>Metode hafal:</b> jangan hafal satu per satu! Kelompokkan yang spesial saja — jam spesial cuma 4, 7, 9; menit spesial cuma 1, 3, 6, 8, 10; tanggal spesial cuma 1, 14, 20, 24. <b>Jebakan umum:</b> membaca 4時 sebagai よんじ atau 7分 sebagai ななふん adalah tanda paling jelas kamu masih pemula — kuasai yang spesial ini dan kamu langsung terdengar beda!`
    },
    {
      type: 'kotoba', title: 'Kosakata Waktu',
      items: [
        { jp: 'いま', kj: '今', r: 'ima', id: 'sekarang', note: 'Dipakai sebelum jam: いま3じです' },
        { jp: 'きょう', kj: '今日', r: 'kyou', id: 'hari ini', note: 'Jangan tertukar dengan きのう!' },
        { jp: 'あした', kj: '明日', r: 'ashita', id: 'besok', note: 'Versi formal: あす' },
        { jp: 'きのう', kj: '昨日', r: 'kinou', id: 'kemarin', note: 'Bacaan kun, bukan さくじつ (formal)' },
        { jp: 'あさ', kj: '朝', r: 'asa', id: 'pagi', note: 'Lawan kata: ばん (malam)' },
        { jp: 'ひる', kj: '昼', r: 'hiru', id: 'siang', note: 'ひるごはん = makan siang' },
        { jp: 'ばん', kj: '晩', r: 'ban', id: 'malam (waktu)', note: 'ばんごはん = makan malam' },
        { jp: 'よる', kj: '夜', r: 'yoru', id: 'malam hari', note: 'Nuansa lebih gelap/larut dari ばん' },
        { jp: 'ごぜん', kj: '午前', r: 'gozen', id: 'pagi hari (AM)', note: 'ごぜん9じ = jam 9 pagi' },
        { jp: 'ごご', kj: '午後', r: 'gogo', id: 'siang/sore (PM)', note: 'ごご3じ = jam 3 sore' },
        { jp: 'まいにち', kj: '毎日', r: 'mainichi', id: 'setiap hari', note: 'まい = setiap: まいあさ, まいばん' },
        { jp: 'はん', kj: '半', r: 'han', id: 'setengah', note: '3じはん = jam 3:30' },
      ]
    },
    {
      type: 'bunpou', title: 'Pola Menghitung & Waktu',
      items: [
        {
          pattern: '[bilangan] + つ / にん / まい / ひき',
          arti: 'menghitung benda / orang / barang tipis / hewan kecil',
          explain: 'Bahasa Jepang punya <b>counter</b> sesuai jenis benda. <b>〜つ</b> untuk benda kecil umum (pakai angka asli Jepang: ひとつ・ふたつ・みっつ). <b>〜にん</b> untuk orang: 3人 = さんにん (pengecualian: ひとり・ふたり). <b>〜まい</b> untuk benda tipis: kertas, baju, piring. <b>〜ひき</b> untuk hewan kecil: 1匹 = いっぴき, 3匹 = さんびき, 6匹 = ろっぴき.',
          examples: [
            { jp: 'りんごを みっつ ください。', id: 'Tolong 3 buah apel.' },
            { jp: 'ねこが さんびき います。', id: 'Ada 3 ekor kucing.' },
          ]
        },
        {
          pattern: 'いま [jam]じ [menit]ふん です',
          arti: 'Sekarang jam [jam] lebih [menit]',
          explain: 'Pola standar menyebut jam. Ingat bacaan spesialnya: 4時=よじ, 7時=しちじ, 9時=くじ. Untuk menit 30, orang Jepang lebih sering bilang <b>〜はん</b> (setengah) daripada さんじゅっぷん.',
          examples: [
            { jp: 'いま 3じです。', id: 'Sekarang jam 3.' },
            { jp: 'いま 7じはんです。', id: 'Sekarang jam setengah 8 (7:30).' },
          ]
        },
        {
          pattern: '[waktu] から [waktu] まで',
          arti: 'dari [waktu] sampai [waktu]',
          explain: '<b>から</b> = titik awal, <b>まで</b> = titik akhir. Pasangan ini selalu dipakai berdua untuk rentang waktu (juga untuk tempat). Bedakan dengan までに yang artinya "paling lambat sebelum" — itu materi N4.',
          examples: [
            { jp: 'がっこうは 8じから 3じまで です。', id: 'Sekolah dari jam 8 sampai jam 3.' },
            { jp: '9じから 5じまで はたらきます。', id: 'Bekerja dari jam 9 sampai jam 5.' },
          ]
        },
      ]
    },
    {
      type: 'kanji', title: 'Kanji Waktu',
      items: [
        { ch: '日', kun: 'ひ・び・か', on: 'ニチ・ジツ', id: 'hari; matahari; Jepang', note: 'Bacaan か dipakai di tanggal: みっか, はつか' },
        { ch: '月', kun: 'つき', on: 'ゲツ・ガツ', id: 'bulan', note: 'ゲツ untuk nama bulan (さんがつ), ガツ khusus beberapa kata' },
        { ch: '年', kun: 'とし', on: 'ネン', id: 'tahun', note: 'ことし (tahun ini), きょねん (tahun lalu)' },
        { ch: '時', kun: 'とき', on: 'ジ', id: 'waktu; jam', note: 'Terdiri dari 日 + 寺. いまなんじ = jam berapa sekarang' },
      ]
    },
    {
      type: 'kaiwa', title: 'Percakapan: Janjian Bertemu',
      lines: [
        { sp: 'A', jp: 'すみません、いま なんじですか。', id: 'Permisi, sekarang jam berapa?' },
        { sp: 'B', jp: '3じはんです。', id: 'Jam setengah 4 (3:30).' },
        { sp: 'A', jp: 'ありがとうございます。あした なんじに あいますか。', id: 'Terima kasih. Besok jam berapa kita bertemu?' },
        { sp: 'B', jp: 'ごぜん10じに えきで あいましょう。', id: 'Bertemu jam 10 pagi di stasiun.' },
        { sp: 'A', jp: 'わかりました。じゃあ、あした！', id: 'Baik. Sampai besok!' },
      ]
    },
  ],
  quiz: [
    { q: '"300" dalam bahasa Jepang dibaca…', o: ['さんひゃく', 'さんびゃく', 'さんぴゃく', 'みつひゃく'], a: 1, explain: '300 = さんびゃく. Bunyi ひゃく berubah jadi びゃく setelah さん.' },
    { q: '"8000" dibaca…', o: ['はちせん', 'はっせん', 'はっぴゃくせん', 'やっせん'], a: 1, explain: '8000 = はっせん. Setelah はち, せん dibaca っせん.' },
    { q: '"4時" dibaca…', o: ['よんじ', 'よじ', 'よっじ', 'しじ'], a: 1, explain: '4時 = よじ. Membaca よんじ adalah kesalahan klasik pemula!' },
    { q: '"1分" dibaca…', o: ['いちふん', 'いっぷん', 'いちぶん', 'ひとふん'], a: 1, explain: '1分 = いっぷん. ふん berubah jadi ぷん.' },
    { q: '"6分" dibaca…', o: ['ろくふん', 'ろっぷん', 'むっふん', 'ろくぷん'], a: 1, explain: '6分 = ろっぷん. Hafalkan kelompok menit spesial: 1, 3, 6, 8, 10.' },
    { q: '"3人" (tiga orang) dibaca…', o: ['みっつ', 'さんにん', 'さんびき', 'みたり'], a: 1, explain: 'Orang memakai counter にん: 3人 = さんにん.' },
    { q: '"Satu ekor kucing ada" dalam bahasa Jepang…', o: ['ねこいちひきいます', 'いっぴきのねこいます', 'ねこが いっぴき います', 'いちひきねこがいます'], a: 2, explain: 'Hewan kecil memakai ひき: 1匹 = いっぴき. Pola: ねこが いっぴき います.' },
    { q: 'Tanggal 20 dibaca…', o: ['にじゅうにち', 'はつか', 'にじゅうか', 'はたち'], a: 1, explain: 'Tanggal 20 spesial: はつか, bukan にじゅうにち.' },
    { q: '"3じはん" artinya…', o: ['Jam 3 lewat', 'Jam setengah 4 (3:30)', 'Jam 4 kurang', 'Jam 3 pagi'], a: 1, explain: 'はん = setengah. 3じはん = 3:30.' },
    { q: '"Kemarin" dalam bahasa Jepang…', o: ['きょう', 'あした', 'きのう', 'あさって'], a: 2, explain: 'きのう = kemarin. きょう = hari ini, あした = besok.' },
  ]
},
/* ---- BAB 3 ---- */
{
  id: 'n5-3', bab: 3, level: 'n5',
  title: 'Kata Benda & Partikel Dasar',
  desc: 'Partikel は・が・を・に・へ・で・の・と dan benda sehari-hari',
  icon: '📦',
  sections: [
    {
      type: 'penjelasan', title: 'は vs が — Duel Paling Membingungkan',
      body: '<b>は</b> (dibaca "wa") menandai <b>topik</b> — hal yang sedang dibicarakan, info lama yang sudah diketahui. <b>が</b> menandai <b>subjek penekanan</b> — info baru, jawaban atas pertanyaan, atau penekanan "YANG ini lho". Bandingkan: わたしは ブディです (Saya Budi — perkenalan netral) vs わたしが ブディです (SAYA-lah Budi, bukan orang lain!).\n\nAturan praktisnya: kata tanya <b>だれ・なに・どこ</b> selalu dijawab dengan <b>が</b> (だれが きましたか → ブディが きました). Dan hafalkan mati: kata sifat <b>すき (suka), きらい (benci), ほしい (ingin), できる (bisa)</b> SELALU memakai が, bukan を! わたしは コーヒーが すきです — ini jebakan favorit soal JLPT.\n\n<b>Jebakan umum:</b> memakai が saat perkenalan diri terdengar seperti kamu sedang membela diri ("Budi itu SAYA!"). Untuk perkenalan netral, selalu pakai は. Sebaliknya, menjawab だれ dengan は terdengar aneh dan tidak natural.'
    },
    {
      type: 'penjelasan', title: 'を・に・へ・で — Empat Serangkai',
      body: '<b>を</b> menandai <b>objek</b> dari kata kerja: ごはんを たべます (makan nasi). <b>に</b> punya tiga wajah: <b>tujuan</b> (がっこうに いきます), <b>waktu pasti</b> (9じに おきます), dan <b>tempat keberadaan</b> (へやに います). <b>へ</b> khusus untuk <b>arah gerak</b> — bisa ditukar dengan に untuk いきます・きます・かえります, tapi へ terasa lebih puitis.\n\n<b>で</b> juga punya dua wajah: <b>tempat beraktivitas</b> (がっこうで べんきょうします) dan <b>sarana</b> (バスで いきます = naik bus). Inilah bedanya dengan に: <b>に = diam/ada</b> (へやに います = ada di kamar), <b>で = bergerak/beraksi</b> (へやで べんきょうします = belajar di kamar).\n\n<b>Jebakan umum:</b> 90% kesalahan pemula adalah tertukar に dan で untuk tempat. Triknya: tanya pada dirimu — "apakah ada AKSI di sana?" Kalau ya → で. Kalau hanya "ada/tinggal" → に. Ujian JLPT suka sekali menguji ini!'
    },
    {
      type: 'penjelasan', title: 'の dan と — Si Kecil Serbaguna',
      body: '<b>の</b> menghubungkan dua kata benda dengan hubungan <b>milik / penjelas</b>: わたしの ほん (bukuku), にほんごの ほん (buku bahasa Jepang), きのうの よる (tadi malam). の bisa dirangkai panjang: わたしの ともだちの くるま (mobil temannya saya). Urutannya selalu <b>penjelas dulu, yang dijelaskan belakangan</b> — kebalikan dari bahasa Indonesia!\n\n<b>と</b> punya dua arti: <b>"dan"</b> untuk daftar benda (ほんと ペン = buku dan pulpen) dan <b>"bersama/dengan"</b> untuk orang (ともだちと いきます = pergi dengan teman). \n\n<b>Jebakan umum:</b> と HANYA untuk kata benda! Untuk menggabung kata kerja, bahasa Jepang memakai bentuk て (たべて、みて), bukan と. Dan ingat: daftar tiga benda atau lebih tetap pakai と di tiap sela (ほんと ペンと かばん) — tidak ada koma seperti bahasa Indonesia.'
    },
    {
      type: 'kotoba', title: 'Benda Sehari-hari',
      items: [
        { jp: 'つくえ', kj: '机', r: 'tsukue', id: 'meja', note: 'Kanji 机 = meja' },
        { jp: 'いす', kj: '椅子', r: 'isu', id: 'kursi', note: 'Hati-hati: すわる = duduk' },
        { jp: 'ほん', kj: '本', r: 'hon', id: 'buku', note: 'Juga counter barang panjang: さんぼん' },
        { jp: 'かばん', kj: '鞄', r: 'kaban', id: 'tas', note: 'かばんをもつ = membawa tas' },
        { jp: 'とけい', kj: '時計', r: 'tokei', id: 'jam (dinding/tangan)', note: 'とけいをみる = melihat jam' },
        { jp: 'でんわ', kj: '電話', r: 'denwa', id: 'telepon', note: 'でんわをかける = menelepon' },
        { jp: 'かぎ', kj: '鍵', r: 'kagi', id: 'kunci', note: 'かぎをかける = mengunci' },
        { jp: 'かさ', kj: '傘', r: 'kasa', id: 'payung', note: 'かさをさす = membuka payung' },
        { jp: 'くつ', kj: '靴', r: 'kutsu', id: 'sepatu', note: 'くつをはく = memakai sepatu' },
        { jp: 'めがね', kj: '眼鏡', r: 'megane', id: 'kacamata', note: 'Selalu jamak dalam bahasa Jepang' },
        { jp: 'さいふ', kj: '財布', r: 'saifu', id: 'dompet', note: 'さいふをわすれる = lupa dompet' },
        { jp: 'しんぶん', kj: '新聞', r: 'shinbun', id: 'koran', note: 'しんぶんをよむ = membaca koran' },
      ]
    },
    {
      type: 'bunpou', title: 'Pola Benda & Partikel',
      items: [
        {
          pattern: 'これ / それ / あれ は [kata benda] です',
          arti: 'Ini / Itu adalah [kata benda]',
          explain: 'Tiga kata tunjuk berdasarkan jarak: <b>これ</b> = dekat pembicara, <b>それ</b> = dekat lawan bicara, <b>あれ</b> = jauh dari keduanya. Pola は〜です membuat kalimat identifikasi yang sopan. Bentuk tanya: これ<b>は</b> なんですか (ini apa?).',
          examples: [
            { jp: 'これは ほんです。', id: 'Ini adalah buku.' },
            { jp: 'あれは とけいです。', id: 'Itu (di sana) adalah jam.' },
          ]
        },
        {
          pattern: '[A] の [B]',
          arti: '[B] milik / yang berkaitan dengan [A]',
          explain: '<b>の</b> menempelkan penjelas (A) ke kata inti (B). Urutan terbalik dari Indonesia: "buku saya" = わたしの ほん (saya-PUNYA buku). Bisa untuk asal (インドネシアの たべもの), bahan (きの つくえ), dan waktu (きのうの よる).',
          examples: [
            { jp: 'これは わたしの かばんです。', id: 'Ini adalah tasku.' },
            { jp: 'たなかさんの くるまは あかいです。', id: 'Mobil Tanaka berwarna merah.' },
          ]
        },
        {
          pattern: '[benda] を ください',
          arti: 'Tolong [benda] / Minta [benda]',
          explain: '<b>ください</b> adalah cara sopan meminta sesuatu — wajib hafal untuk belanja, restoran, dan kantor. <b>を</b> menandai benda yang diminta. Versi kasual: ちょうだい, tapi jangan pakai ke orang yang dihormati!',
          examples: [
            { jp: 'みずを ください。', id: 'Tolong air putih.' },
            { jp: 'このほんを ください。', id: 'Tolong buku yang ini.' },
          ]
        },
      ]
    },
    {
      type: 'kanji', title: 'Kanji Benda',
      items: [
        { ch: '本', kun: 'もと', on: 'ホン', id: 'buku; asal', note: 'Awalnya gambar akar pohon = "asal". Counter barang panjang' },
        { ch: '人', kun: 'ひと', on: 'ジン・ニン', id: 'orang', note: 'Bentuknya seperti orang membungkuk' },
        { ch: '大', kun: 'おお(きい)', on: 'ダイ・タイ', id: 'besar', note: 'Orang merentangkan tangan = besar' },
        { ch: '小', kun: 'ちい(さい)', on: 'ショウ', id: 'kecil', note: 'Kebalikan 大. しょうがっこう = SD' },
      ]
    },
    {
      type: 'kaiwa', title: 'Percakapan: Di Toko',
      lines: [
        { sp: 'A', jp: 'すみません、これは なんですか。', id: 'Permisi, ini apa?' },
        { sp: 'B', jp: 'それは とけいです。', id: 'Itu jam.' },
        { sp: 'A', jp: 'わたしの とけいですか。', id: 'Apakah itu jam saya?' },
        { sp: 'B', jp: 'はい、あなたの とけいです。', id: 'Ya, itu jam Anda.' },
        { sp: 'A', jp: 'ありがとうございます。', id: 'Terima kasih banyak.' },
      ]
    },
  ],
  quiz: [
    { q: 'Lengkapi: わたし___ブディです。(perkenalan)', o: ['が', 'は', 'を', 'に'], a: 1, explain: 'Perkenalan netral memakai は. Memakai が terdengar seperti penekanan "SAYA-lah Budi!".' },
    { q: 'Benda yang dekat dengan lawan bicara disebut…', o: ['これ', 'それ', 'あれ', 'どれ'], a: 1, explain: 'これ = dekat saya, それ = dekat lawan bicara, あれ = jauh dari keduanya.' },
    { q: '"Buku saya" dalam bahasa Jepang…', o: ['わたしとほん', 'わたしのほん', 'わたしはほん', 'わたしがほん'], a: 1, explain: 'の menghubungkan pemilik dan benda: わたしのほん.' },
    { q: 'Lengkapi: みず___ください。', o: ['が', 'は', 'を', 'に'], a: 2, explain: 'ください (tolong beri) memakai を untuk benda yang diminta.' },
    { q: 'Partikel yang tepat: わたしは コーヒー___すきです。', o: ['を', 'が', 'に', 'で'], a: 1, explain: 'Jebakan! Kata sifat seperti すき・きらい・ほしい SELALU memakai が, bukan を.' },
    { q: '"Buku dan pulpen" dalam bahasa Jepang…', o: ['ほんのペン', 'ほんとペン', 'ほんはペン', 'ほんがペン'], a: 1, explain: 'と menghubungkan kata benda dengan arti "dan".' },
    { q: 'Lengkapi: がっこう___べんきょうします。(belajar DI sekolah)', o: ['に', 'で', 'へ', 'を'], a: 1, explain: 'で = tempat melakukan aksi. に untuk tempat keberadaan (diam).' },
    { q: 'Lengkapi: バス___いきます。(pergi NAIK bus)', o: ['に', 'へ', 'で', 'を'], a: 2, explain: 'で juga berarti "dengan/naik": バスで = naik bus.' },
    { q: 'Lengkapi: だれ___きましたか。(SIAPA yang datang?)', o: ['は', 'が', 'を', 'に'], a: 1, explain: 'Kata tanya だれ・なに・どこ memakai が karena menanyakan informasi baru.' },
    { q: 'Mana yang BENAR untuk "jam milik Tanaka"?', o: ['たなかのとけい', 'たなかととけい', 'たなかはとけい', 'たなかがとけい'], a: 0, explain: 'Kepemilikan memakai の: たなかのとけい.' },
  ]
},
/* ---- BAB 4 ---- */
{
  id: 'n5-4', bab: 4, level: 'n5',
  title: 'Kata Kerja Dasar',
  desc: 'Bentuk masu, partikel aktivitas, dan kosakata kerja sehari-hari',
  icon: '🏃',
  sections: [
    {
      type: 'penjelasan', title: 'Bentuk MASU — Satu Pola, Empat Waktu',
      body: 'Kata kerja sopan bahasa Jepang memakai akhiran <b>ます</b>. Kabar baiknya: cukup kuasai SATU pola perubahan untuk semua waktu! <b>たべます</b> (makan, sekarang/akan datang) → <b>たべません</b> (tidak makan) → <b>たべました</b> (sudah makan) → <b>たべませんでした</b> (tidak makan — lampau). Empat bentuk, satu pola!\n\nKata kerja Jepang ada tiga golongan: <b>godan</b> (akhiran u: かく→かきます), <b>ichidan</b> (akhiran -eru/-iru: たべる→たべます), dan dua anak nakal <b>します</b> (melakukan) & <b>きます</b> (datang). Untuk N5, kamu belum perlu menghafal golongan — cukup ingat bentuk masu-nya.\n\n<b>Jebakan umum:</b> ます BUKAN cuma untuk masa kini — たべます juga berarti "akan makan". Waktu ditentukan konteks/kata keterangan (あした たべます = besok akan makan). Dan jangan campur: たべないます itu SALAH TOTAL — negatif sopan selalu ません!'
    },
    {
      type: 'penjelasan', title: 'を・に・へ・で untuk Aktivitas',
      body: 'Empat partikel ini adalah "bumbu" setiap kalimat kerja. <b>を</b> menandai <b>objek</b>: ごはんを たべます (makan nasi), ほんを よみます (membaca buku). <b>に</b> menandai <b>target/tujuan</b>: ともだちに あいます (bertemu teman), 9じに おきます (bangun jam 9).\n\n<b>へ</b> khusus untuk <b>arah gerak</b> bersama いきます・きます・かえります: がっこうへ いきます. Bedanya dengan に? Hampir sama, tapi へ terasa lebih "ke arah sana" dan puitis. <b>で</b> menandai <b>tempat beraktivitas</b>: としょかんで べんきょうします (belajar DI perpustakaan).\n\n<b>Jebakan umum:</b> inilah pasangan paling sering tertukar! Ingat mantra: <b>に = diam</b> (へやに います = ada di kamar), <b>で = aksi</b> (へやで ねます = tidur di kamar). Kalau kalimatmu ada kata kerja aktivitas (makan, belajar, bekerja) di suatu tempat → pakai で, titik!'
    },
    {
      type: 'kotoba', title: 'Kata Kerja Sehari-hari',
      items: [
        { jp: 'たべます', r: 'tabemasu', id: 'makan', note: 'Bentuk kamus: たべる (ichidan)' },
        { jp: 'のみます', r: 'nomimasu', id: 'minum', note: 'Bentuk kamus: のむ (godan). Kanji: 飲' },
        { jp: 'いきます', r: 'ikimasu', id: 'pergi', note: 'Bentuk kamus: いく. Pasangan: きます (datang)' },
        { jp: 'きます', r: 'kimasu', id: 'datang', note: 'Kata kerja tak beraturan! Bentuk kamus: くる' },
        { jp: 'かえります', r: 'kaerimasu', id: 'pulang', note: 'Bentuk kamus: かえる. Selalu pakai へ/に' },
        { jp: 'みます', r: 'mimasu', id: 'melihat', note: 'Bentuk kamus: みる (ichidan). えいがをみます' },
        { jp: 'ききます', r: 'kikimasu', id: 'mendengar', note: 'Bentuk kamus: きく. Juga berarti "bertanya"' },
        { jp: 'はなします', r: 'hanashimasu', id: 'berbicara', note: 'Bentuk kamus: はなす. にほんごをはなします' },
        { jp: 'よみます', r: 'yomimasu', id: 'membaca', note: 'Bentuk kamus: よむ (godan). Kanji: 読' },
        { jp: 'かきます', r: 'kakimasu', id: 'menulis', note: 'Bentuk kamus: かく (godan). Juga berarti "menggambar"' },
        { jp: 'かいます', r: 'kaimasu', id: 'membeli', note: 'Bentuk kamus: かう (godan). Waspada bunyi: かいます' },
        { jp: 'します', r: 'shimasu', id: 'melakukan', note: 'Tak beraturan! べんきょうします = belajar' },
      ]
    },
    {
      type: 'bunpou', title: 'Pola Kalimat Aktivitas',
      items: [
        {
          pattern: '[benda] を [kata kerja]-ます',
          arti: 'me-[kerja] [benda]',
          explain: 'Pola paling sering dipakai! <b>を</b> menandai apa yang dikenai aksi: objeknya. Urutan bahasa Jepang: <b>subjek - objek - kata kerja</b> (kata kerja SELALU di akhir!). Bandingkan: "Saya makan nasi" = わたしは ごはんを たべます.',
          examples: [
            { jp: 'わたしは ごはんを たべます。', id: 'Saya makan nasi.' },
            { jp: 'まいばん ほんを よみます。', id: 'Setiap malam membaca buku.' },
          ]
        },
        {
          pattern: '[tempat] へ / に いきます・きます・かえります',
          arti: 'pergi / datang / pulang ke [tempat]',
          explain: 'Tiga kata kerja gerak ini memakai <b>へ</b> atau <b>に</b> untuk tujuan. Keduanya benar! <b>へ</b> menekankan arah ("ke arah"), <b>に</b> menekankan titik tiba. Untuk N5, pakai mana saja tidak masalah — JLPT menerima keduanya.',
          examples: [
            { jp: 'あした がっこうへ いきます。', id: 'Besok pergi ke sekolah.' },
            { jp: 'うちに かえります。', id: 'Pulang ke rumah.' },
          ]
        },
        {
          pattern: '[tempat] で [aktivitas] します',
          arti: 'melakukan [aktivitas] di [tempat]',
          explain: '<b>で</b> menandai tempat di mana aksi terjadi. Kuncinya: harus ada KATA KERJA AKSI (belajar, makan, bekerja, bermain). Kalau hanya "ada/tinggal", pakai に, bukan で! Pola します serbaguna: べんきょうします, しごとを します, さんぽを します.',
          examples: [
            { jp: 'としょかんで べんきょうします。', id: 'Belajar di perpustakaan.' },
            { jp: 'レストランで ひるごはんを たべます。', id: 'Makan siang di restoran.' },
          ]
        },
      ]
    },
    {
      type: 'kanji', title: 'Kanji Aktivitas',
      items: [
        { ch: '食', kun: 'た(べる)', on: 'ショク', id: 'makan', note: 'Ada di: しょくじ (makanan), たべもの' },
        { ch: '飲', kun: 'の(む)', on: 'イン', id: 'minum', note: 'Ada di: いんりょう (minuman)' },
        { ch: '見', kun: 'み(る)', on: 'ケン', id: 'melihat', note: 'Ada di: けんぶつ (jalan-jalan/melihat-lihat)' },
        { ch: '行', kun: 'い(く)・ゆ(く)', on: 'コウ・ギョウ', id: 'pergi', note: 'Bacaan ゆく lebih puitis/formal' },
      ]
    },
    {
      type: 'kaiwa', title: 'Percakapan: Rencana Akhir Pekan',
      lines: [
        { sp: 'A', jp: 'しゅうまつは なにを しますか。', id: 'Akhir pekan mau ngapain?' },
        { sp: 'B', jp: 'ともだちと えいがを みます。', id: 'Nonton film sama teman.' },
        { sp: 'A', jp: 'どこで みますか。', id: 'Nonton di mana?' },
        { sp: 'B', jp: 'しぶやで みます。いっしょに いきませんか。', id: 'Di Shibuya. Mau ikut pergi?' },
        { sp: 'A', jp: 'いいですね。いきましょう！', id: 'Boleh tuh. Ayo pergi!' },
      ]
    },
  ],
  quiz: [
    { q: 'Bentuk negatif dari たべます…', o: ['たべますない', 'たべません', 'たべないます', 'たべまない'], a: 1, explain: 'ます → ません untuk negatif sopan. たべないます adalah kesalahan fatal!' },
    { q: 'Bentuk lampau dari のみます…', o: ['のみました', 'のみますた', 'のんだます', 'のみましだ'], a: 0, explain: 'ます → ました untuk lampau sopan.' },
    { q: '"Tidak pergi" (lampau): いきます → …', o: ['いきません', 'いきませんでした', 'いきましたない', 'いかなかったです'], a: 1, explain: 'Lampau negatif sopan: ませんでした.' },
    { q: 'Lengkapi: ごはん___たべます。', o: ['が', 'を', 'に', 'で'], a: 1, explain: 'を menandai objek dari kata kerja.' },
    { q: 'Lengkapi: がっこう___いきます。', o: ['を', 'で', 'へ', 'が'], a: 2, explain: 'へ/に untuk arah tujuan. へ lebih bernuansa "ke arah sana".' },
    { q: 'Lengkapi: としょかんで ほん___よみます。', o: ['が', 'を', 'に', 'へ'], a: 1, explain: 'Objek bacaan memakai を.' },
    { q: 'Lengkapi: としょかん___べんきょうします。(belajar DI perpustakaan)', o: ['に', 'で', 'を', 'が'], a: 1, explain: 'で = tempat beraktivitas. Jangan tertukar dengan に (keberadaan)!' },
    { q: '"かえります" artinya…', o: ['pergi', 'datang', 'pulang', 'berlari'], a: 2, explain: 'かえります = pulang (ke rumah).' },
    { q: 'Pilih kalimat yang BENAR untuk "Kemarin menonton film"…', o: ['きのう えいがを みます', 'きのう えいがを みました', 'あした えいがを みました', 'きのう えいがが みます'], a: 1, explain: 'きのう (kemarin) butuh bentuk lampau: みました.' },
    { q: 'Lengkapi: ともだち___あいます。(bertemu DENGAN teman)', o: ['を', 'に', 'で', 'が'], a: 1, explain: 'あいます memakai に untuk orang yang ditemui.' },
  ]
},
/* ---- BAB 5 ---- */
{
  id: 'n5-5', bab: 5, level: 'n5',
  title: 'Kata Sifat: い vs な',
  desc: 'Bedakan i-adjective dan na-adjective + konjugasinya',
  icon: '✨',
  sections: [
    {
      type: 'penjelasan', title: 'Dua Wajah Kata Sifat Jepang',
      body: `Bahasa Jepang punya <b>dua jenis kata sifat</b> dengan aturan yang beda total: <b>i-adjective</b> (berakhiran い, mis. たかい) dan <b>na-adjective</b> (mis. しずか). Salah mengira jenisnya = kalimatmu salah total. Contoh fatal: bilang "きれいい" (salah!) padahal harusnya "きれいな".\n\n<b>Metode:</b> setiap hafal kata sifat baru, langsung tandai jenisnya: [i] atau [na]. Pada i-adjective, huruf い-nya itu "hidup" — ikut berubah saat konjugasi (たかい → たかくない). Pada na-adjective, い-nya "mati" — jangan diutak-atik. <b>Jebakan paling terkenal:</b> きれい・ゆうめい・べんり berakhiran い tapi na-adjective! Tes cepat: coba buang い-nya — kalau sisanya terdengar aneh (きれ?), berarti itu na-adjective.`
    },
    {
      type: 'penjelasan', title: 'Rumus Konjugasi Anti-Hafal Mati',
      body: `Jangan hafal satu per satu — pakai <b>rumus</b> ini:\n\n<b>i-adjective:</b> negatif = buang い + くない (たかい → たかくない) | lampau = buang い + かった (たかい → たかかった) | lampau negatif = buang い + くなかった (たかい → たかくなかった).\n\n<b>na-adjective:</b> negatif = tambah じゃない (しずか → しずかじゃない) | lampau = tambah だった (しずか → しずかだった) | lampau negatif = tambah じゃなかった. Versi formal: ganti じゃない → ではありません, だった → でした.\n\n<b>Tips masa depan:</b> tai-form (ingin…) di Bab 6 berkonjugasi <b>persis seperti i-adjective</b>. Kuasai pola ini sekarang, nanti tinggal pakai ulang!`
    },
    {
      type: 'kotoba', title: 'Kosakata Kata Sifat',
      items: [
        { jp: 'たかい', r: 'takai', id: 'mahal / tinggi', note: '[i] Lawan kata: やすい' },
        { jp: 'やすい', r: 'yasui', id: 'murah', note: '[i] Kanji: 安' },
        { jp: 'おおきい', r: 'ookii', id: 'besar', note: '[i] Kanji: 大' },
        { jp: 'ちいさい', r: 'chiisai', id: 'kecil', note: '[i] Kanji: 小' },
        { jp: 'あたらしい', r: 'atarashii', id: 'baru', note: '[i] Kanji: 新' },
        { jp: 'おいしい', r: 'oishii', id: 'enak (makanan)', note: '[i]' },
        { jp: 'むずかしい', r: 'muzukashii', id: 'sulit', note: '[i] Lawan kata: やさしい' },
        { jp: 'さむい', r: 'samui', id: 'dingin (cuaca)', note: '[i] Beda dengan つめたい (dingin saat disentuh)' },
        { jp: 'たのしい', r: 'tanoshii', id: 'menyenangkan', note: '[i]' },
        { jp: 'きれい', r: 'kirei', id: 'cantik / bersih', note: '[na] JEBAKAN: berakhiran い tapi na-adjective!' },
        { jp: 'しずか', r: 'shizuka', id: 'sepi / tenang', note: '[na]' },
        { jp: 'ゆうめい', r: 'yuumei', id: 'terkenal', note: '[na] Berakhiran い tapi na-adjective!' },
      ]
    },
    {
      type: 'bunpou', title: 'Pola Kata Sifat',
      items: [
        {
          pattern: 'とても + kata sifat',
          arti: 'sangat…',
          explain: '<b>とても</b> hanya untuk kalimat <b>positif</b>. Jangan pernah pakai untuk kalimat negatif!',
          examples: [
            { jp: 'このケーキは とても おいしいです。', id: 'Kue ini sangat enak.' },
            { jp: '富士山は とても たかいです。', id: 'Gunung Fuji sangat tinggi.' },
          ]
        },
        {
          pattern: 'あまり + kata sifat (negatif)',
          arti: 'tidak terlalu…',
          explain: '<b>あまり</b> WAJIB diikuti bentuk negatif! Ini pasangan yang tidak bisa dipisahkan.',
          examples: [
            { jp: 'このテストは あまり むずかしくないです。', id: 'Tes ini tidak terlalu sulit.' },
            { jp: 'きょうは あまり さむくないです。', id: 'Hari ini tidak terlalu dingin.' },
          ]
        },
        {
          pattern: 'na-adjective + な + kata benda',
          arti: 'kata benda yang…',
          explain: 'na-adjective butuh <b>な</b> sebelum kata benda. Jebakan: きれい dan ゆうめい ikut aturan ini meski berakhiran い!',
          examples: [
            { jp: 'きれいな はなです。', id: 'Ini bunga yang cantik.' },
            { jp: 'ゆうめいな ひとです。', id: 'Dia orang yang terkenal.' },
          ]
        },
      ]
    },
    {
      type: 'kanji', title: 'Kanji Kata Sifat',
      items: [
        { ch: '高', kun: 'たか-い', on: 'こう', id: 'tinggi / mahal', note: 'たかい = mahal' },
        { ch: '安', kun: 'やす-い', on: 'あん', id: 'murah', note: 'Lawan kata 高' },
        { ch: '大', kun: 'おお-きい', on: 'だい・たい', id: 'besar', note: 'おおきい = besar' },
        { ch: '小', kun: 'ちい-さい', on: 'しょう', id: 'kecil', note: 'Lawan kata 大' },
        { ch: '新', kun: 'あたら-しい', on: 'しん', id: 'baru', note: 'あたらしい = baru' },
      ]
    },
    {
      type: 'kaiwa', title: 'Percakapan: Belanja',
      lines: [
        { sp: 'A', jp: 'この かばんは いくらですか。', id: 'Tas ini berapa harganya?' },
        { sp: 'B', jp: '5000円です。', id: '5000 yen.' },
        { sp: 'A', jp: 'たかいですね。もうすこし やすいのは ありますか。', id: 'Mahal ya. Apa ada yang lebih murah?' },
        { sp: 'B', jp: 'これを みてください。3000円です。', id: 'Silakan lihat ini. 3000 yen.' },
        { sp: 'A', jp: 'とても きれいですね。これを ください。', id: 'Sangat cantik ya. Saya ambil yang ini.' },
      ]
    },
  ],
  quiz: [
    { q: 'Manakah kata sifat-NA?', o: ['たかい', 'きれい', 'さむい', 'おいしい'], a: 1, explain: 'きれい berakhiran い tapi na-adjective — jebakan klasik!' },
    { q: 'Bentuk negatif dari たかい adalah…', o: ['たかくない', 'たかじゃない', 'たかかった', 'たかくなかった'], a: 0, explain: 'i-adjective: buang い → たか + くない.' },
    { q: 'Bentuk lampau dari さむい adalah…', o: ['さむくない', 'さむかった', 'さむいだった', 'さむくなかった'], a: 1, explain: 'i-adjective lampau: buang い + かった → さむかった.' },
    { q: 'Lengkapi: このみせは あまり ___.', o: ['やすいです', 'やすくないです', 'やすかったです', 'やすいじゃないです'], a: 1, explain: 'あまり WAJIB diikuti bentuk negatif → やすくないです.' },
    { q: 'Kalimat yang SALAH adalah…', o: ['とても おいしいです', 'あまり たかくないです', 'とても さむくないです', 'きれいな はなです'], a: 2, explain: 'とても hanya untuk kalimat positif. Untuk negatif pakai あまり.' },
    { q: 'Bunga yang cantik dalam bahasa Jepang…', o: ['きれい はな', 'きれいな はな', 'きれいの はな', 'きれいい はな'], a: 1, explain: 'na-adjective + kata benda memakai な → きれいな はな.' },
    { q: 'Bentuk lampau negatif dari たのしい…', o: ['たのしくなかった', 'たのしかったない', 'たのしくないだった', 'たのしいなかった'], a: 0, explain: 'たのしい → たのしくない → たのしくなかった.' },
    { q: 'Tas ini tidak terlalu mahal…', o: ['このかばんは とても たかいです', 'このかばんは あまり たかくないです', 'このかばんは たかかったです', 'このかばんは たかくないとてもです'], a: 1, explain: '"Tidak terlalu" = あまり + bentuk negatif.' },
    { q: 'Orang yang terkenal yang benar…', o: ['ゆうめい ひと', 'ゆうめいい ひと', 'ゆうめいな ひと', 'ゆうめいの ひと'], a: 2, explain: 'ゆうめい adalah na-adjective meski berakhiran い → ゆうめいな.' },
    { q: 'Bentuk negatif sopan dari しずかだ…', o: ['しずかくないです', 'しずかじゃないです', 'しずかなかったです', 'しずかくありません'], a: 1, explain: 'na-adjective negatif: tambah じゃないです.' },
  ]
},
/* ---- BAB 6 ---- */
{
  id: 'n5-6', bab: 6, level: 'n5',
  title: 'Te-form, Tai-form, Nai-form',
  desc: 'Aturan perubahan kata kerja yang paling sering bikin bingung',
  icon: '🔄',
  sections: [
    {
      type: 'penjelasan', title: 'Kenapa Kata Kerja Berubah Bentuk?',
      body: `Di bab sebelumnya kamu belajar bentuk ます (sopan). Sekarang tiga bentuk baru: <b>te-form</b> (untuk permintaan & menyambung kalimat), <b>tai-form</b> (menyatakan keinginan), dan <b>nai-form</b> (negatif kasual). Kabar baiknya: perubahannya <b>mengikuti bunyi</b>, bukan hafalan acak.\n\n<b>Metode:</b> kelompokkan kata kerja dari bentuk kamusnya. <b>Golongan 1</b> (berakhiran -u, mis. かく・のむ) berubah mengikuti huruf terakhirnya — hafalkan tabel 6 baris di bawah, maka ratusan kata kerja takluk. <b>Golongan 2</b> (berakhiran -る seperti たべる) gampang: tinggal buang る. Hanya <b>3 yang tak beraturan</b>: する・くる・いく.`
    },
    {
      type: 'penjelasan', title: 'Tabel Te-form & Dua Pengecualian Maut',
      body: `<b>Golongan 1:</b> う・つ・る → って (かう→かって) | む・ぶ・ぬ → んで (のむ→のんで) | く → いて (かく→かいて) | ぐ → いで (およぐ→およいで) | す → して (はなす→はなして). <b>Golongan 2:</b> buang る + て (たべる→たべて). <b>Tak beraturan:</b> する→して, くる→きて.\n\n<b>Pengecualian maut #1:</b> いく → <b>いって</b> (BUKAN いいて!). <b>#2:</b> nai-form dari ある adalah <b>ない</b> (bukan あらない!). Dua ini favorit keluar di ujian — jangan sampai terkecoh. <b>Tips:</b> ucapkan berulang: のんで・かって・まって — lidahmu akan hafal polanya lebih cepat dari otakmu.`
    },
    {
      type: 'kotoba', title: 'Kosakata Kata Kerja',
      items: [
        { jp: 'かう', r: 'kau', id: 'membeli', note: 'te: かって (katte)' },
        { jp: 'まつ', r: 'matsu', id: 'menunggu', note: 'te: まって (matte)' },
        { jp: 'とる', r: 'toru', id: 'mengambil', note: 'te: とって (totte)' },
        { jp: 'のむ', r: 'nomu', id: 'minum', note: 'te: のんで (nonde)' },
        { jp: 'あそぶ', r: 'asobu', id: 'bermain', note: 'te: あそんで (asonde)' },
        { jp: 'かく', r: 'kaku', id: 'menulis', note: 'te: かいて. tai: かきたい' },
        { jp: 'およぐ', r: 'oyogu', id: 'berenang', note: 'te: およいで (oyoide)' },
        { jp: 'はなす', r: 'hanasu', id: 'berbicara', note: 'te: はなして' },
        { jp: 'いく', r: 'iku', id: 'pergi', note: 'te: いって — pengecualian!' },
        { jp: 'たべる', r: 'taberu', id: 'makan', note: 'Golongan 2 → te: たべて, nai: たべない' },
        { jp: 'する', r: 'suru', id: 'melakukan', note: 'Tak beraturan → te: して, nai: しない' },
        { jp: 'くる', r: 'kuru', id: 'datang', note: 'Tak beraturan → te: きて, nai: こない' },
      ]
    },
    {
      type: 'bunpou', title: 'Pola Bentuk Kata Kerja',
      items: [
        {
          pattern: '[te-form] ください',
          arti: 'tolong…',
          explain: 'Bentuk permintaan yang sopan: te-form + ください.',
          examples: [
            { jp: 'ちょっと まってください。', id: 'Tolong tunggu sebentar.' },
            { jp: 'ゆっくり はなしてください。', id: 'Tolong bicara pelan-pelan.' },
          ]
        },
        {
          pattern: '[stem] たいです',
          arti: 'ingin…',
          explain: '<b>たい</b> menempel pada stem dan berkonjugasi seperti <b>i-adjective</b> (たべたい → たべたくない). Objek を sering berganti が.',
          examples: [
            { jp: 'すしが たべたいです。', id: 'Saya ingin makan sushi.' },
            { jp: 'にほんに いきたいです。', id: 'Saya ingin pergi ke Jepang.' },
          ]
        },
        {
          pattern: 'nai-form (kasual negatif)',
          arti: 'tidak… (kasual)',
          explain: 'Golongan 1: ubah akhiran -u jadi -a + ない. Golongan 2: buang る + ない. Ingat: ある → ない!',
          examples: [
            { jp: 'きょうは テレビを みない。', id: 'Hari ini tidak nonton TV. (kasual)' },
            { jp: 'あしたは いかない。', id: 'Besok tidak pergi. (kasual)' },
          ]
        },
      ]
    },
    {
      type: 'kanji', title: 'Kanji Kata Kerja',
      items: [
        { ch: '買', kun: 'か-う', on: 'ばい', id: 'membeli', note: 'かう = membeli' },
        { ch: '待', kun: 'ま-つ', on: 'たい', id: 'menunggu', note: 'まつ = menunggu' },
        { ch: '飲', kun: 'の-む', on: 'いん', id: 'minum', note: 'のむ = minum' },
        { ch: '書', kun: 'か-く', on: 'しょ', id: 'menulis', note: 'かく = menulis' },
        { ch: '話', kun: 'はな-す', on: 'わ', id: 'berbicara', note: 'はなす = berbicara' },
        { ch: '行', kun: 'い-く', on: 'こう', id: 'pergi', note: 'いく → te: いって!' },
      ]
    },
    {
      type: 'kaiwa', title: 'Percakapan: Membuat Rencana',
      lines: [
        { sp: 'A', jp: '日曜日は ひまですか。', id: 'Apakah hari Minggu senggang?' },
        { sp: 'B', jp: 'はい、ひまです。', id: 'Ya, senggang.' },
        { sp: 'A', jp: 'えいがを みに いきたいです。いっしょに いきませんか。', id: 'Saya ingin menonton film. Mau pergi bersama?' },
        { sp: 'B', jp: 'いいですね。いきましょう。', id: 'Bagus. Ayo pergi.' },
        { sp: 'A', jp: 'じゃあ、駅で まってください。', id: 'Kalau begitu, tolong tunggu di stasiun.' },
      ]
    },
  ],
  quiz: [
    { q: 'Te-form dari のむ adalah…', o: ['のいて', 'のんで', 'のみて', 'のむて'], a: 1, explain: 'む・ぶ・ぬ → んで. のむ → のんで.' },
    { q: 'Te-form dari いく adalah…', o: ['いいて', 'いって', 'いくて', 'きて'], a: 1, explain: 'いく adalah PENGECUALIAN: いって, bukan いいて!' },
    { q: 'Te-form dari はなす adalah…', o: ['はないて', 'はなして', 'はなんで', 'はなすて'], a: 1, explain: 'す → して. はなす → はなして.' },
    { q: 'Ingin menulis dalam bahasa Jepang…', o: ['かきてです', 'かきたいです', 'かくたいです', 'かきたいます'], a: 1, explain: 'かく → stem かき + たい → かきたいです.' },
    { q: 'Lengkapi: すし__たべたいです。', o: ['を', 'が', 'に', 'へ'], a: 1, explain: 'Dengan たい, partikel を sering diganti が.' },
    { q: 'Nai-form dari ある adalah…', o: ['あらない', 'ない', 'ありません', 'あない'], a: 1, explain: 'ある adalah pengecualian: nai-form-nya ない.' },
    { q: 'Nai-form dari たべる adalah…', o: ['たべない', 'たべらない', 'たべくない', 'たばない'], a: 0, explain: 'Golongan 2: buang る + ない → たべない.' },
    { q: 'Bentuk negatif dari たべたい adalah…', o: ['たべたくない', 'たべたいじゃない', 'たべないたい', 'たべたなくない'], a: 0, explain: 'たい berkonjugasi seperti i-adjective: たべたい → たべたくない.' },
    { q: 'Te-form dari およぐ adalah…', o: ['およいて', 'およいで', 'およぐて', 'およんで'], a: 1, explain: 'ぐ → いで. およぐ → およいで.' },
    { q: 'Tolong bicara pelan-pelan…', o: ['ゆっくり はなします', 'ゆっくり はなしてください', 'ゆっくり はなしたいです', 'ゆっくり はなさないで'], a: 1, explain: 'Permintaan sopan: te-form + ください.' },
  ]
},
/* ---- BAB 7 ---- */
{
  id: 'n5-7', bab: 7, level: 'n5',
  title: 'Keluarga & Rutinitas Harian',
  desc: 'Keluarga uchi/soto + rutinitas dan kata frekuensi',
  icon: '🏠',
  sections: [
    {
      type: 'penjelasan', title: 'Uchi dan Soto: Bahasa Cermin Budaya',
      body: `Orang Jepang membedakan <b>uchi</b> (内 = dalam / lingkungan sendiri) dan <b>soto</b> (外 = luar). Untuk keluarga <b>sendiri</b> saat bicara ke orang luar, pakai kata <b>humble</b>: ちち (ayah), はは (ibu), あに (kakak laki-laki). Untuk keluarga <b>orang lain</b>, pakai kata <b>sopan</b>: おとうさん, おかあさん, おにいさん.\n\n<b>Kenapa repot-repot?</b> Menyebut ayah sendiri おとうさん di depan orang luar terdengar kekanak-kanakan dalam situasi formal — seperti memanggil diri sendiri "adek" di depan dosen. <b>Tips:</b> kata berawalan お〜さん hampir selalu versi soto (untuk orang lain). Adik (おとうと・いもうと) nadanya netral — sama untuk uchi maupun soto.`
    },
    {
      type: 'penjelasan', title: 'Kata Frekuensi: Posisi & Pasangan Wajib',
      body: `Kata frekuensi (まいにち, ときどき, よく…) ditaruh <b>sebelum kata kerja</b>: まいにち べんきょうします (belajar setiap hari). Urutan dari paling sering: まいにち (setiap hari) → よく (sering) → ときどき (kadang-kadang) → たまに (sesekali) → あまり (jarang) → ぜんぜん (sama sekali tidak).\n\n<b>Aturan pasangan wajib:</b> あまり (jarang) dan ぜんぜん (sama sekali tidak) <b>harus</b> diikuti bentuk negatif! あまり テレビを みます (SALAH!) → あまり テレビを みません (BENAR). Pola ini favorit soal jebakan di ujian — hafalkan sebagai satu paket.`
    },
    {
      type: 'kotoba', title: 'Kosakata Keluarga & Frekuensi',
      items: [
        { jp: 'ちち', kj: '父', r: 'chichi', id: 'ayah (saya)', note: '[uchi] Ke orang luar. Kanji: 父' },
        { jp: 'はは', kj: '母', r: 'haha', id: 'ibu (saya)', note: '[uchi] Ke orang luar. Kanji: 母' },
        { jp: 'あに', kj: '兄', r: 'ani', id: 'kakak laki-laki (saya)', note: '[uchi] Kanji: 兄' },
        { jp: 'あね', kj: '姉', r: 'ane', id: 'kakak perempuan (saya)', note: '[uchi] Kanji: 姉' },
        { jp: 'おとうと', r: 'otouto', id: 'adik laki-laki', note: 'Netral — sama untuk uchi/soto' },
        { jp: 'いもうと', r: 'imouto', id: 'adik perempuan', note: 'Netral — sama untuk uchi/soto' },
        { jp: 'おとうさん', r: 'otousan', id: 'ayah (orang lain)', note: '[soto] Juga untuk memanggil ayah sendiri' },
        { jp: 'おかあさん', r: 'okaasan', id: 'ibu (orang lain)', note: '[soto] Versi sopan' },
        { jp: 'かぞく', kj: '家族', r: 'kazoku', id: 'keluarga', note: '' },
        { jp: 'りょうしん', kj: '両親', r: 'ryoushin', id: 'kedua orang tua', note: '' },
        { jp: 'まいにち', kj: '毎日', r: 'mainichi', id: 'setiap hari', note: 'Kata frekuensi — sebelum kata kerja' },
        { jp: 'ときどき', r: 'tokidoki', id: 'kadang-kadang', note: 'Kata frekuensi' },
      ]
    },
    {
      type: 'bunpou', title: 'Pola Rutinitas',
      items: [
        {
          pattern: '[frekuensi] + kata kerja',
          arti: 'melakukan… secara rutin',
          explain: 'Kata frekuensi diletakkan <b>sebelum kata kerja</b>.',
          examples: [
            { jp: 'わたしは まいにち べんきょうします。', id: 'Saya belajar setiap hari.' },
            { jp: 'ときどき えいがを みます。', id: 'Kadang-kadang menonton film.' },
          ]
        },
        {
          pattern: 'あまり / ぜんぜん + negatif',
          arti: 'jarang / sama sekali tidak',
          explain: '<b>Keduanya wajib</b> diikuti bentuk negatif!',
          examples: [
            { jp: 'わたしは あまり テレビを みません。', id: 'Saya jarang menonton TV.' },
            { jp: 'ぜんぜん わかりません。', id: 'Sama sekali tidak mengerti.' },
          ]
        },
        {
          pattern: '[keluarga uchi] は …です',
          arti: 'memperkenalkan keluarga sendiri',
          explain: 'Ke orang luar pakai ちち・はは. Untuk keluarga orang lain pakai おとうさん・おかあさん.',
          examples: [
            { jp: 'ちちは せんせいです。', id: 'Ayah saya seorang guru.' },
            { jp: 'おとうさんは おいくつですか。', id: 'Ayahmu berumur berapa?' },
          ]
        },
      ]
    },
    {
      type: 'kanji', title: 'Kanji Keluarga',
      items: [
        { ch: '父', kun: 'ちち', on: 'ふ', id: 'ayah', note: '[uchi] ちち = ayah saya' },
        { ch: '母', kun: 'はは', on: 'ぼ', id: 'ibu', note: '[uchi] はは = ibu saya' },
        { ch: '兄', kun: 'あに', on: 'きょう', id: 'kakak laki-laki', note: 'あに = kakak lk saya' },
        { ch: '姉', kun: 'あね', on: 'し', id: 'kakak perempuan', note: 'あね = kakak pr saya' },
        { ch: '家', kun: 'いえ', on: 'か', id: 'rumah / keluarga', note: 'かぞく = keluarga' },
      ]
    },
    {
      type: 'kaiwa', title: 'Percakapan: Keluarga',
      lines: [
        { sp: 'A', jp: 'ご家族は 何人ですか。', id: 'Keluargamu ada berapa orang?' },
        { sp: 'B', jp: '4人です。父と 母と 姉と わたしです。', id: '4 orang. Ayah, ibu, kakak perempuan, dan saya.' },
        { sp: 'A', jp: 'お姉さんは おいくつですか。', id: 'Kakak perempuanmu umur berapa?' },
        { sp: 'B', jp: '25歳です。まいにち はたらいています。', id: '25 tahun. Bekerja setiap hari.' },
      ]
    },
  ],
  quiz: [
    { q: 'Saat bicara ke orang luar, ayah saya disebut…', o: ['おとうさん', 'ちち', 'おやじ', 'パパ'], a: 1, explain: 'Keluarga sendiri ke orang luar = bentuk humble: ちち.' },
    { q: 'Ayah orang lain disebut…', o: ['ちち', 'おとうさん', 'あに', 'そふ'], a: 1, explain: 'Keluarga orang lain = bentuk sopan: おとうさん.' },
    { q: 'Budi berkata ke gurunya: おかあさんは げんきです. Apa masalahnya?', o: ['Tidak ada masalah', 'Seharusnya はは untuk ibu sendiri', 'Seharusnya おふくろ', 'Guru tidak perlu tahu'], a: 1, explain: 'Ke orang luar, ibu sendiri = はは. おかあさん untuk ibu orang lain.' },
    { q: 'Setiap hari dalam bahasa Jepang…', o: ['ときどき', 'まいにち', 'たまに', 'よく'], a: 1, explain: 'まいにち = setiap hari.' },
    { q: 'あまり harus diikuti…', o: ['bentuk positif', 'bentuk negatif', 'bentuk lampau saja', 'kata benda'], a: 1, explain: 'あまり selalu berpasangan dengan bentuk negatif.' },
    { q: 'Lengkapi: わたしは まいにち 日本語を ___.', o: ['べんきょうします', 'べんきょうしたあまり', 'べんきょう', 'べんきょうです'], a: 0, explain: 'Rutinitas: まいにち + kata kerja bentuk ます.' },
    { q: 'Sama sekali tidak mengerti…', o: ['ぜんぜん わかります', 'あまり わかります', 'ぜんぜん わかりません', 'ときどき わかりません'], a: 2, explain: 'ぜんぜん = sama sekali (tidak), wajib + negatif.' },
    { q: 'Adik perempuan saya…', o: ['おねえさん', 'いもうと', 'あね', 'むすめ'], a: 1, explain: 'Adik perempuan = いもうと (netral, sama untuk uchi/soto).' },
    { q: 'Kedua orang tua dalam bahasa Jepang…', o: ['かぞく', 'りょうしん', 'きょうだい', 'おやこ'], a: 1, explain: 'りょうしん = kedua orang tua.' },
    { q: 'Saya jarang makan daging…', o: ['あまり にくを たべます', 'よく にくを たべません', 'あまり にくを たべません', 'ぜんぜん にくを たべます'], a: 2, explain: '"Jarang" = あまり + bentuk negatif.' },
  ]
},
/* ---- BAB 8 ---- */
{
  id: 'n5-8', bab: 8, level: 'n5',
  title: 'Review Total + Percakapan Praktis',
  desc: 'Review total N5 + percakapan praktis di restoran & toko',
  icon: '🎯',
  sections: [
    {
      type: 'penjelasan', title: 'Peta Ulang Perjalanan N5-mu',
      body: `Bab 8 adalah <b>checkpoint</b> sebelum naik ke N4. Mari petakan ulang: Bab 1 (aisatsu & です), Bab 2 (partikel は・を・に・へ・で・と), Bab 3 (kata kerja ます & ajakan), Bab 4 (kata benda & いくら), Bab 5 (i vs na adjective), Bab 6 (te/tai/nai-form), Bab 7 (uchi/soto & frekuensi). Kalau ada bab yang masih goyah, <b>kembali dan kuatkan dulu</b> — fondasi N5 menentukan kelancaran N4.\n\n<b>Metode bab ini:</b> tidak ada materi baru yang berat. Fokus ke <b>kaiwa panjang</b> di dua situasi paling sering muncul di ujian DAN kehidupan nyata: restoran dan belanja. Baca keras-keras, ganti peran A/B dengan teman, dan rasakan semua pola yang sudah dipelajari bekerja bersama.`
    },
    {
      type: 'penjelasan', title: 'Senjata Percakapan Praktis',
      body: `Tiga pola pamungkas untuk bertahan hidup: (1) memesan/meminta barang: <b>[barang] を ください</b> (ラーメンを ください); (2) menanyakan harga: <b>いくらですか</b>; (3) minta tolong: <b>te-form + ください</b> (みせてください = tolong perlihatkan). Gabungkan dengan adjective Bab 5 — ちょっと たかいですね (agak mahal ya) — dan kamu sudah bisa belanja di Jepang.\n\n<b>Tips ujian & etika:</b> soal N5 suka mengetes <b>kesopanan situasi</b> — ke pelayan, kasir, atau orang asing SELALU pakai bentuk sopan (です・ます・ください), jangan bentuk kasual. Kesalahan paling umum: memakai nai-form ke pelayan restoran!`
    },
    {
      type: 'kotoba', title: 'Kosakata Restoran & Belanja',
      items: [
        { jp: 'みせ', kj: '店', r: 'mise', id: 'toko', note: 'Kanji: 店' },
        { jp: 'メニュー', r: 'menyuu', id: 'menu', note: 'Katakana' },
        { jp: 'ちゅうもんする', r: 'chuumon suru', id: 'memesan (makanan)', note: 'Di restoran' },
        { jp: 'いくら', r: 'ikura', id: 'berapa (harga)', note: 'Pola: いくらですか' },
        { jp: 'ねだん', r: 'nedan', id: 'harga', note: '' },
        { jp: 'やすい', r: 'yasui', id: 'murah', note: 'Review Bab 5 [i]' },
        { jp: 'たかい', r: 'takai', id: 'mahal', note: 'Review Bab 5 [i]' },
        { jp: 'おかいけい', r: 'okaikei', id: 'pembayaran / kasir', note: 'おかいけいを おねがいします' },
        { jp: 'げんきん', r: 'genkin', id: 'tunai', note: 'Lawan: カード' },
        { jp: 'サイズ', r: 'saizu', id: 'ukuran', note: 'Katakana' },
        { jp: 'ふく', r: 'fuku', id: 'pakaian', note: '' },
        { jp: 'てんいん', kj: '店員', r: 'tenin', id: 'pelayan toko', note: '' },
      ]
    },
    {
      type: 'bunpou', title: 'Pola Praktis',
      items: [
        {
          pattern: '[barang] を ください',
          arti: 'minta… / saya ambil…',
          explain: 'Pola andalan di restoran & toko. Sopan dan langsung bisa dipakai.',
          examples: [
            { jp: 'ラーメンを ください。', id: 'Minta ramennya.' },
            { jp: 'このシャツを ください。', id: 'Saya ambil kemeja ini.' },
          ]
        },
        {
          pattern: 'これは いくらですか',
          arti: 'ini berapa harganya?',
          explain: '<b>いくら</b> dipakai untuk menanyakan harga atau jumlah nominal.',
          examples: [
            { jp: 'これは いくらですか。', id: 'Ini berapa harganya?' },
            { jp: 'コーヒーは いくらですか。', id: 'Kopinya berapa?' },
          ]
        },
      ]
    },
    {
      type: 'kanji', title: 'Kanji Belanja & Uang',
      items: [
        { ch: '金', kun: 'かね', on: 'きん', id: 'uang / emas', note: 'おかね = uang' },
        { ch: '物', kun: 'もの', on: 'ぶつ', id: 'barang', note: 'たべもの = makanan' },
        { ch: '店', kun: 'みせ', on: 'てん', id: 'toko', note: 'みせ = toko' },
        { ch: '毎', kun: 'ごと', on: 'まい', id: 'setiap', note: 'まいにち = setiap hari' },
      ]
    },
    {
      type: 'kaiwa', title: 'Percakapan: Di Restoran',
      lines: [
        { sp: '店員', jp: 'いらっしゃいませ。何名様ですか。', id: 'Selamat datang. Berapa orang?' },
        { sp: '客', jp: '2人です。', id: '2 orang.' },
        { sp: '店員', jp: 'こちらへ どうぞ。メニューです。', id: 'Silakan ke sini. Ini menunya.' },
        { sp: '客', jp: 'すみません、ラーメンを 2つ ください。', id: 'Permisi, 2 ramen tolong.' },
        { sp: '店員', jp: 'はい、ラーメン 2つですね。', id: 'Baik, 2 ramen ya.' },
        { sp: '客', jp: 'あの、これも おいしいですか。', id: 'Eh, ini juga enak?' },
        { sp: '店員', jp: 'はい、とても ゆうめいです。', id: 'Ya, sangat terkenal.' },
        { sp: '客', jp: 'じゃあ、それも ください。', id: 'Kalau begitu, itu juga tolong.' },
      ]
    },
    {
      type: 'kaiwa', title: 'Percakapan: Belanja Baju',
      lines: [
        { sp: '客', jp: 'すみません、このシャツを みせてください。', id: 'Permisi, tolong perlihatkan kemeja ini.' },
        { sp: '店員', jp: 'はい、どうぞ。', id: 'Baik, silakan.' },
        { sp: '客', jp: '大きい サイズは ありますか。', id: 'Apakah ada ukuran besar?' },
        { sp: '店員', jp: 'はい、あります。こちらです。', id: 'Ada. Yang ini.' },
        { sp: '客', jp: 'いくらですか。', id: 'Berapa harganya?' },
        { sp: '店員', jp: '3000円です。', id: '3000 yen.' },
        { sp: '客', jp: 'ちょっと たかいですね。', id: 'Agak mahal ya.' },
        { sp: '店員', jp: 'いまは セールで 2000円です。', id: 'Sekarang lagi diskon, 2000 yen.' },
        { sp: '客', jp: 'じゃあ、かいます。', id: 'Kalau begitu, saya beli.' },
      ]
    },
  ],
  quiz: [
    { q: 'Lengkapi: わたし__ほん__よみます。', o: ['は／を', 'を／は', 'に／を', 'が／に'], a: 0, explain: 'Pola dasar: わたしは ほんを よみます (topik + objek).' },
    { q: 'Taman yang cantik…', o: ['きれい こうえん', 'きれいな こうえん', 'きれいい こうえん', 'きれいの こうえん'], a: 1, explain: 'きれい = na-adjective (jebakan!) → きれいな.' },
    { q: 'Te-form dari のむ…', o: ['のみて', 'のんで', 'のむて', 'のいて'], a: 1, explain: 'む → んで. のむ → のんで.' },
    { q: 'Saya ingin pergi ke Jepang…', o: ['にほんに いきたいです', 'にほんを いきたいです', 'にほんに いってです', 'にほんが いきますたい'], a: 0, explain: 'いく → いきたい; tujuan memakai partikel に.' },
    { q: 'Ke teman: Ayah saya sedang sakit…', o: ['おとうさんは びょうきです', 'ちちは びょうきです', 'あには びょうきです', 'そふは びょうきです'], a: 1, explain: 'Ayah sendiri ke orang luar = ちち.' },
    { q: 'Kemarin tidak terlalu dingin…', o: ['きのうは あまり さむかったです', 'きのうは あまり さむくなかったです', 'きのうは とても さむくなかったです', 'きのうは さむいあまりでした'], a: 1, explain: 'あまり + negatif lampau: さむくなかったです.' },
    { q: 'Di toko, menanyakan harga…', o: ['いくらですか', 'なんですか', 'どこですか', 'いつですか'], a: 0, explain: 'いくらですか = berapa harganya?' },
    { q: 'Bentuk lampau dari たかい…', o: ['たかくない', 'たかかった', 'たかいでした', 'たかくなかった'], a: 1, explain: 'i-adjective lampau: buang い + かった.' },
    { q: 'Nai-form dari する…', o: ['すない', 'しない', 'しらない', 'するない'], a: 1, explain: 'する → しない (tak beraturan).' },
    { q: 'A: いっしょに えいがを みませんか。(Mau nonton bareng?) Jawaban SETUJU yang tepat…', o: ['すみません、ちょっと ようじが あります', 'いいですね。いきましょう！', 'いいえ、みたくないです', 'えいがは みません'], a: 1, explain: 'みませんか adalah ajakan. Jawaban setuju: いいですね、いきましょう.' },
  ]
},
],
n4: [
/* ---- BAB 1 ---- */
{
  id: 'n4-1', bab: 1, level: 'n4',
  title: 'Bentuk Potensial & Keinginan',
  desc: 'Menyatakan kemampuan (bisa) dan keinginan (mau) dengan tepat: potensial, 〜たい, 〜たがる',
  icon: '💪',
  sections: [
    {
      type: 'penjelasan', title: 'Bisa vs Mau: Dua Hal yang Wajib Dibedakan',
      body: `Di N5 kamu belajar cara sederhana bilang "bisa" dan "mau". Di N4 kita naik level: bahasa Jepang <b>membedakan dengan ketat</b> antara <b>kemampuan</b> (bentuk potensial), <b>keinginan diri sendiri</b> (〜たい), dan <b>keinginan orang lain</b> (〜たがる). Salah pilih pola = terdengar aneh, bahkan tidak sopan.\n\n<b>Bentuk potensial</b> artinya "bisa/melakukan". Caranya: kata kerja golongan 1 (godan) ubah akhiran ke baris-e + る — 書く→<b>書ける</b> (kakeru), 話す→<b>話せる</b> (hanaseru), 泳ぐ→<b>泳げる</b> (oyogeru). Golongan 2 (ichidan): ganti る dengan られる — 食べる→<b>食べられる</b>, 見る→<b>見られる</b>. Khusus: する→<b>できる</b>, 来る→<b>こられる</b>. Perhatikan baik-baik: dalam kalimat potensial, partikel objek <b>を berubah menjadi が</b> — 日本語<b>が</b>話せます (bisa bicara bahasa Jepang), bukan を!\n\n<b>〜たい</b> dipakai HANYA untuk keinginan <b>diri sendiri</b>: stem + たい (食べたい, 行きたい, 買いたい). Negatif: たくない. Lampau: たかった. Ingat, たい berkonjugasi seperti kata sifat-i! Untuk <b>orang ketiga</b> (dia/mereka), wajib pakai <b>〜たがる</b>: stem + たがる (彼は行きたがっている = dia kelihatannya mau pergi). Memakai たい untuk orang lain terdengar seperti kamu sok tahu isi pikirannya — tidak natural dan bisa dianggap tidak sopan.\n\n<b>Jebakan JLPT yang sering keluar:</b> (1) を→が pada kalimat potensial; (2) たい vs たがる tergantung subjek (saya vs dia); (3) potensial dari する adalah できる — jangan pernah bilang しられる!`
    },
    {
      type: 'kotoba', title: 'Kosakata Kemampuan & Keinginan',
      items: [
        { jp: 'できる', r: 'dekiru', id: 'bisa (potensial dari する)', note: 'Bentuk khusus, wajib dihafal' },
        { jp: '泳ぐ', r: 'oyogu', id: 'berenang', note: 'Potensial: 泳げる (oyogeru)' },
        { jp: '弾く', kj: '弾く', r: 'hiku', id: 'memainkan (alat musik)', note: 'ピアノを弾く = main piano' },
        { jp: '間に合う', kj: '間に合う', r: 'ma ni au', id: 'keburu / tepat waktu', note: 'Potensial: 間に合える' },
        { jp: '褒める', kj: '褒める', r: 'homeru', id: 'memuji', note: 'Lawan: 叱る (shikaru) = memarahi' },
        { jp: '叱る', kj: '叱る', r: 'shikaru', id: 'memarahi', note: 'Kanji 叱 jarang, biasa ditulis hiragana' },
        { jp: '欲しい', kj: '欲しい', r: 'hoshii', id: 'ingin (benda)', note: 'Hanya untuk BENDA. Untuk aksi pakai 〜たい' },
        { jp: '叶う', kj: '叶う', r: 'kanau', id: 'terkabul / terwujud', note: '夢が叶う = impian terkabul' },
        { jp: '努力', kj: '努力', r: 'doryoku', id: 'usaha / kerja keras', note: '努力する = berusaha' },
        { jp: '才能', kj: '才能', r: 'sainou', id: 'bakat', note: '才能がある = berbakat' },
        { jp: '得意', kj: '得意', r: 'tokui', id: 'jago / ahli', note: 'ピアノが得意です = jago main piano' },
        { jp: '苦手', kj: '苦手', r: 'nigate', id: 'lemah / kurang bisa', note: 'Lawan dari 得意' },
      ]
    },
    {
      type: 'bunpou', title: 'Pola Potensial & Keinginan',
      items: [
        {
          pattern: 'V(可能形) + が + (benda)',
          arti: 'bisa [melakukan]',
          explain: 'Bentuk potensial menyatakan kemampuan. Ingat: partikel objek <b>を berubah menjadi が</b>. できる adalah potensial khusus dari する.',
          examples: [
            { jp: '日本語が話せます。', id: 'Saya bisa berbicara bahasa Jepang.' },
            { jp: '車が運転できますか。', id: 'Apakah (kamu) bisa menyetir mobil?' },
          ]
        },
        {
          pattern: 'V(stem) + たい / たくない / たかった',
          arti: 'ingin [melakukan] (diri sendiri)',
          explain: '<b>Hanya untuk keinginan pembicara sendiri.</b> たい berkonjugasi seperti kata sifat-i: たくない (tidak ingin), たかった (dulu ingin).',
          examples: [
            { jp: '日本へ行きたいです。', id: 'Saya ingin pergi ke Jepang.' },
            { jp: '何も食べたくないです。', id: 'Saya tidak ingin makan apa-apa.' },
          ]
        },
        {
          pattern: 'V(stem) + たがる / たがっている',
          arti: '(dia/mereka) kelihatannya ingin [melakukan]',
          explain: 'Untuk menyatakan keinginan <b>orang ketiga</b>. たがる sendiri adalah kata kerja godan (たがります). Bentuk ている paling sering dipakai.',
          examples: [
            { jp: '子供は遊びたがっています。', id: 'Anak itu kelihatannya ingin bermain.' },
            { jp: '彼は日本へ行きたがっています。', id: 'Dia (laki-laki) kelihatannya ingin pergi ke Jepang.' },
          ]
        },
      ]
    },
    {
      type: 'kanji', title: 'Kanji Bab 1',
      items: [
        { ch: '能', kun: '—', on: 'のう', id: 'kemampuan', note: '能力 (nouryoku) = kemampuan' },
        { ch: '力', kun: 'ちから', on: 'りょく・りき', id: 'tenaga / kekuatan', note: '努力は力なり = usaha adalah kekuatan' },
        { ch: '泳', kun: 'およぐ', on: 'えい', id: 'berenang', note: '水泳 (suiei) = olahraga renang' },
        { ch: '欲', kun: 'ほっする', on: 'よく', id: 'keinginan', note: '欲しい (hoshii) = ingin (benda)' },
        { ch: '叶', kun: 'かなう', on: '—', id: 'terkabul', note: '夢が叶う = impian terkabul' },
        { ch: '得', kun: 'える', on: 'とく', id: 'mendapat / untung', note: '得意 (tokui) = jago, ahli' },
      ]
    },
    {
      type: 'kaiwa', title: 'Percakapan: Kemampuan & Impian',
      lines: [
        { sp: 'A', jp: 'ピアノが弾けますか。', id: 'Apakah bisa main piano?' },
        { sp: 'B', jp: 'はい、少し弾けます。でも、ギターは弾けません。', id: 'Ya, bisa sedikit. Tapi gitar tidak bisa.' },
        { sp: 'A', jp: 'そうですか。将来、何になりたいですか。', id: 'Oh begitu. Kelak ingin jadi apa?' },
        { sp: 'B', jp: '音楽の先生になりたいです。夢を叶えたいです。', id: 'Ingin jadi guru musik. Ingin mewujudkan impian.' },
        { sp: 'A', jp: '素晴らしいですね。お弟さんは？', id: 'Luar biasa ya. Kalau adikmu?' },
        { sp: 'B', jp: '弟はサッカー選手になりたがっています。', id: 'Adik (laki-laki) kelihatannya ingin jadi pemain sepak bola.' },
      ]
    },
  ],
  quiz: [
    { q: 'Bentuk potensial dari 書く (kaku) adalah…', o: ['書かれる', '書ける', '書かせる', '書こう'], a: 1, explain: 'Godan: ubah akhiran ke baris-e + る → 書く → 書ける.' },
    { q: 'Bentuk potensial dari 食べる (taberu) adalah…', o: ['食べれる', '食べられる', '食べさせる', '食べたい'], a: 1, explain: 'Ichidan: ganti る dengan られる → 食べられる.' },
    { q: 'Bentuk potensial dari する yang BENAR adalah…', o: ['しられる', 'すれる', 'できる', 'される'], a: 2, explain: 'する → できる adalah bentuk khusus. しられる itu SALAH.' },
    { q: 'Partikel yang tepat: 日本語___話せます。', o: ['を', 'が', 'に', 'へ'], a: 1, explain: 'Dalam kalimat potensial, を berubah menjadi が.' },
    { q: '彼は日本へ___。 (Dia kelihatannya ingin pergi ke Jepang)', o: ['行きたい', '行きたがっている', '行きたくない', '行きたいです'], a: 1, explain: 'Subjek orang ketiga → pakai 〜たがる, bukan 〜たい.' },
    { q: 'Bentuk negatif dari 買いたい (kaitai) adalah…', o: ['買いたくない', '買いたがらない', '買えなくない', '買いたくなかった'], a: 0, explain: 'たい berkonjugasi seperti kata sifat-i: たい→たくない.' },
    { q: 'Bentuk lampau dari したい (shitai) adalah…', o: ['したかった', 'したくない', 'したがった', 'しなかった'], a: 0, explain: 'たい→たかった untuk lampau (dulu ingin).' },
    { q: 'Kalimat yang BENAR adalah…', o: ['日本語を話せる', '日本語が話せる', '日本語に話せる', '日本語へ話せる'], a: 1, explain: 'Potensial memakai が, bukan を.' },
    { q: '妹はピアノ___弾きたがっています。', o: ['を', 'が', 'に', 'で'], a: 1, explain: '弾きたがっている mengandung potensial 弾ける → pakai が.' },
    { q: 'Mana yang SALAH?', o: ['泳げる', '見られる', 'しられる', '来られる'], a: 2, explain: 'しられる salah — potensial する adalah できる.' },
  ]
},
/* ---- BAB 2 ---- */
{
  id: 'n4-2', bab: 2, level: 'n4',
  title: 'Perbandingan',
  desc: 'Membandingkan dua hal atau lebih: より・ほうが・いちばん・もっと',
  icon: '⚖️',
  sections: [
    {
      type: 'penjelasan', title: 'Membandingkan ala Orang Jepang',
      body: `Orang Jepang punya <b>tiga pola perbandingan</b> yang harus dikuasai berpasangan: <b>より</b> (daripada), <b>ほうが</b> (lebih...), dan <b>いちばん</b> (paling). Ditambah tiga kata penguat: <b>もっと</b> (lebih lagi), <b>ずっと</b> (jauh lebih), <b>ほとんど</b> (hampir).\n\nPola dasarnya: <b>AはBより[adjektif]</b> — "A lebih [adjektif] daripada B". Contoh: 東京はジャカルタより暑いです (Tokyo lebih panas daripada Jakarta). Variasinya: <b>AのほうがBより〜</b> — penekanan pada A sebagai yang "lebih". Keduanya benar, pilih sesuai penekanan. Untuk "paling": <b>[lingkup]の中で〜がいちばん〜</b> — 日本の中で富士山がいちばん高いです.\n\n<b>Tips & jebakan:</b> (1) より juga bisa berarti titik awal "dari" (3時より = dari jam 3) — bedakan dari konteks; (2) ほうが bisa berdiri sendiri tanpa より jika pembandingnya sudah jelas dari konteks; (3) もっと = "lebih lagi" (minta tambahan), ずっと = "jauh" (perbedaan besar), ほとんど = "hampir" — ketiganya sering diuji maknanya dalam soal kosakata.`
    },
    {
      type: 'kotoba', title: 'Kosakata Perbandingan',
      items: [
        { jp: '比べる', kj: '比べる', r: 'kuraberu', id: 'membandingkan', note: 'AとBを比べる = membandingkan A dan B' },
        { jp: '同じ', kj: '同じ', r: 'onaji', id: 'sama', note: 'Aと同じ = sama dengan A' },
        { jp: '違う', kj: '違う', r: 'chigau', id: 'berbeda / salah', note: '考えが違う = pendapatnya berbeda' },
        { jp: '便利', kj: '便利', r: 'benri', id: 'praktis / nyaman', note: 'Kata sifat-na' },
        { jp: '有名', kj: '有名', r: 'yuumei', id: 'terkenal', note: 'Kata sifat-na' },
        { jp: '親切', kj: '親切', r: 'shinsetsu', id: 'baik hati / ramah', note: 'Kata sifat-na' },
        { jp: '真面目', kj: '真面目', r: 'majime', id: 'serius / tekun', note: 'Kata sifat-na' },
        { jp: 'もっと', r: 'motto', id: 'lebih lagi', note: 'もっとゆっくり = lebih pelan lagi' },
        { jp: 'ずっと', r: 'zutto', id: 'jauh (lebih) / terus', note: 'ずっと前から = sejak jauh sebelumnya' },
        { jp: 'ほとんど', r: 'hotondo', id: 'hampir', note: 'ほとんど毎日 = hampir setiap hari' },
        { jp: '意外', kj: '意外', r: 'igai', id: 'tak disangka', note: '意外と安い = ternyata murah (tak disangka)' },
        { jp: 'やはり', r: 'yahari', id: 'tetap saja / memang', note: 'やっぱり (kasual) = bentuk santai' },
      ]
    },
    {
      type: 'bunpou', title: 'Pola Perbandingan',
      items: [
        {
          pattern: 'AはBより[adj] / AのほうがBより[adj]',
          arti: 'A lebih [adj] daripada B',
          explain: 'Dua pola untuk perbandingan dua hal. <b>より</b> menandai pembanding ("daripada"), <b>ほうが</b> menandai yang "lebih".',
          examples: [
            { jp: '東京はジャカルタより暑いです。', id: 'Tokyo lebih panas daripada Jakarta.' },
            { jp: 'りんごのほうがみかんより好きです。', id: 'Saya lebih suka apel daripada jeruk.' },
          ]
        },
        {
          pattern: '[lingkup]の中で〜がいちばん[adj]',
          arti: '[〜] yang paling [adj] di antara...',
          explain: 'Untuk menyatakan "paling" dalam suatu kelompok. Lingkup bisa: 日本の中で, クラスの中で, 一年の中で, dll.',
          examples: [
            { jp: '日本の中で富士山がいちばん高いです。', id: 'Gunung Fuji yang paling tinggi di Jepang.' },
            { jp: '一年の中で夏がいちばん暑いです。', id: 'Musim panas yang paling panas dalam setahun.' },
          ]
        },
        {
          pattern: 'もっと・ずっと・ほとんど + [adj/verb]',
          arti: 'lebih lagi / jauh lebih / hampir',
          explain: '<b>もっと</b> = meminta tingkat lebih ("lagi"), <b>ずっと</b> = perbedaan besar ("jauh"), <b>ほとんど</b> = mendekati 100% ("hampir").',
          examples: [
            { jp: 'もっとゆっくり話してください。', id: 'Tolong bicara lebih pelan lagi.' },
            { jp: 'この本はあの本よりずっと面白いです。', id: 'Buku ini jauh lebih menarik daripada buku itu.' },
          ]
        },
      ]
    },
    {
      type: 'kanji', title: 'Kanji Bab 2',
      items: [
        { ch: '比', kun: 'くらべる', on: 'ひ', id: 'membandingkan', note: '比べる (kuraberu), 比較 (hikaku)' },
        { ch: '同', kun: 'おなじ', on: 'どう', id: 'sama', note: '同じ (onaji), 同時 (douji)' },
        { ch: '違', kun: 'ちがう', on: 'い', id: 'berbeda', note: '違う (chigau), 違反 (ihan)' },
        { ch: '高', kun: 'たかい', on: 'こう', id: 'tinggi / mahal', note: '高い (takai), 高校 (koukou)' },
        { ch: '安', kun: 'やすい', on: 'あん', id: 'murah / tenang', note: '安い (yasui), 安心 (anshin)' },
        { ch: '最', kun: 'もっとも', on: 'さい', id: 'paling', note: '最近 (saikin) = akhir-akhir ini' },
      ]
    },
    {
      type: 'kaiwa', title: 'Percakapan: Membandingkan Dua Restoran',
      lines: [
        { sp: 'A', jp: 'このレストランとあのレストランと、どちらのほうがおいしいですか。', id: 'Restoran ini dan restoran itu, mana yang lebih enak?' },
        { sp: 'B', jp: 'このレストランのほうがあのレストランよりおいしいですよ。', id: 'Restoran ini lebih enak daripada restoran itu.' },
        { sp: 'A', jp: '値段はどうですか。', id: 'Bagaimana harganya?' },
        { sp: 'B', jp: 'あのレストランのほうがもっと安いです。でも、少し遠いです。', id: 'Restoran itu lebih murah lagi. Tapi agak jauh.' },
        { sp: 'A', jp: 'この辺でいちばん有名なレストランはどこですか。', id: 'Restoran paling terkenal di sekitar sini di mana?' },
        { sp: 'B', jp: '駅の前にある「さくら」がいちばん有名です。', id: '"Sakura" di depan stasiun yang paling terkenal.' },
      ]
    },
  ],
  quiz: [
    { q: '東京はジャカルタ___暑いです。 (Tokyo lebih panas daripada Jakarta)', o: ['より', 'ほうが', 'いちばん', 'もっと'], a: 0, explain: 'より menandai pembanding ("daripada").' },
    { q: 'りんご___みかんより好きです。 (Saya lebih suka apel daripada jeruk)', o: ['より', 'のほうが', 'いちばん', 'ほとんど'], a: 1, explain: 'のほうが menandai pihak yang "lebih".' },
    { q: '日本の中で富士山___高いです。 (Gunung Fuji paling tinggi di Jepang)', o: ['より', 'ほうが', 'がいちばん', 'もっと'], a: 2, explain: 'Pola superlatif: 〜がいちばん.' },
    { q: 'もっとゆっくり話してください。Artinya…', o: ['Tolong bicara cepat', 'Tolong bicara lebih pelan lagi', 'Jangan bicara', 'Bicara sekali lagi'], a: 1, explain: 'もっと = "lebih lagi" (meminta tambahan kadar).' },
    { q: 'この本はあの本より___面白いです。 (Buku ini JAUH lebih menarik)', o: ['もっと', 'ずっと', 'ほとんど', 'やはり'], a: 1, explain: 'ずっと = "jauh" untuk perbedaan besar.' },
    { q: 'ほとんど毎日運動します。Artinya…', o: ['Tidak pernah olahraga', 'Hampir setiap hari olahraga', 'Lebih banyak olahraga', 'Jauh lebih sering olahraga'], a: 1, explain: 'ほとんど = "hampir".' },
    { q: 'Mana kalimat yang BENAR?', o: ['東京のほうがジャカルタより暑いです', '東京よりのほうが暑いです', '東京ほうがジャカルタより暑いです', '東京よりほうが暑いです'], a: 0, explain: 'Urutan benar: AのほうがBより[adj].' },
    { q: '3時___会議があります。(Rapat ada DARI jam 3)', o: ['より', 'ほうが', 'いちばん', 'まで'], a: 0, explain: 'より juga berarti titik awal "dari" — bedakan dari konteks!' },
    { q: 'クラスの中でだれ___速いですか。(Siapa yang paling cepat di kelas?)', o: ['より', 'ほうが', 'がいちばん', 'もっと'], a: 2, explain: 'Untuk "paling" dalam kelompok: 〜がいちばん.' },
    { q: '意外と安いですね。Artinya…', o: ['Sangat mahal', 'Ternyata murah (tak disangka)', 'Lebih murah dari kemarin', 'Paling murah'], a: 1, explain: '意外 = tak disangka; 意外と〜 = ternyata 〜.' },
  ]
},
/* ---- BAB 3 ---- */
{
  id: 'n4-3', bab: 3, level: 'n4',
  title: 'Te-iru & Te-aru',
  desc: 'Sedang berlangsung vs hasil keadaan: ている dua makna dan てある untuk persiapan',
  icon: '🔁',
  sections: [
    {
      type: 'penjelasan', title: 'Dua Wajah ている + Saudara Kembarnya てある',
      body: `Bentuk <b>〜ている</b> punya <b>DUA makna</b> dan inilah sumber kebingungan terbesar di N4. Makna 1: <b>aksi sedang berlangsung</b> — 今ご飯を食べている (sekarang sedang makan). Makna 2: <b>hasil keadaan yang bertahan</b> — 結婚している (sudah menikah [dan masih menikah sampai sekarang]), 知っている (tahu [hasil dari "mengetahui"]).\n\nKuncinya ada pada <b>jenis kata kerjanya</b>. Kata kerja aksi kontinu (食べる, 走る, 読む, 勉強する) → ている bermakna <b>sedang berlangsung</b>. Kata kerja perubahan keadaan yang terjadi sekali lalu bertahan (結婚する menikah, 壊れる rusak, 知る mengetahui, 死ぬ mati) → ている bermakna <b>hasil yang masih berlaku</b>. Logikanya: menikah itu kejadiannya sekali, yang bertahan adalah "status menikah"-nya.\n\nLalu ada <b>〜てある</b>: dipakai untuk keadaan hasil dari aksi yang <b>disengaja</b>, dengan nuansa "sudah disiapkan". 窓が開けてある = jendela (sengaja) dibiarkan terbuka. Syaratnya: kata kerja <b>transitif</b> (ada objeknya). Bandingkan: 電気がついている (lampu menyala — netral) vs 電気がつけてある (lampu sengaja dinyalakan [untuk persiapan]).\n\n<b>Jebakan JLPT:</b> (1) tentukan dulu jenis kata kerjanya sebelum menerjemahkan ている; (2) てある HANYA untuk kata kerja transitif + nuansa kesengajaan; (3) jangan tertukar dengan 〜ておく (melakukan persiapan SEBELUM, fokus pada aksinya) vs 〜てある (keadaan HASIL persiapannya).`
    },
    {
      type: 'kotoba', title: 'Kosakata Keadaan & Persiapan',
      items: [
        { jp: '結婚する', kj: '結婚する', r: 'kekkon suru', id: 'menikah', note: '結婚している = sudah menikah (status)' },
        { jp: '知る', kj: '知る', r: 'shiru', id: 'mengetahui', note: '知っている = tahu (hasil)' },
        { jp: '壊れる', kj: '壊れる', r: 'kowareru', id: 'rusak (sendiri)', note: '壊れている = dalam keadaan rusak' },
        { jp: '開ける', kj: '開ける', r: 'akeru', id: 'membuka (transitif)', note: '開けてある = sengaja dibiarkan terbuka' },
        { jp: '閉める', kj: '閉める', r: 'shimeru', id: 'menutup (transitif)', note: 'Pasangan: 開ける⇔閉める' },
        { jp: '準備する', kj: '準備する', r: 'junbi suru', id: 'bersiap-siap', note: '準備ができる = persiapan selesai' },
        { jp: '掃除する', kj: '掃除する', r: 'souji suru', id: 'membersihkan', note: '掃除してある = sudah dibersihkan (siap)' },
        { jp: '並べる', kj: '並べる', r: 'naraberu', id: 'menjajarkan / menyusun', note: 'Transitif: 並ぶ (intransitif)' },
        { jp: '掛ける', kj: '掛ける', r: 'kakeru', id: 'menggantungkan / menelepon', note: '電話を掛ける = menelepon' },
        { jp: '残る', kj: '残る', r: 'nokoru', id: 'tersisa / tertinggal', note: 'お金が残っている = uangnya masih tersisa' },
        { jp: '慣れる', kj: '慣れる', r: 'nareru', id: 'terbiasa', note: '慣れている = sudah terbiasa' },
        { jp: '止める', kj: '止める', r: 'tomeru', id: 'menghentikan', note: 'Transitif: 止まる (intransitif)' },
      ]
    },
    {
      type: 'bunpou', title: 'Pola ている & てある',
      items: [
        {
          pattern: 'V(aksi)+ている',
          arti: 'sedang [melakukan]',
          explain: 'Untuk kata kerja <b>aksi kontinu</b>: maknanya "sedang berlangsung saat ini".',
          examples: [
            { jp: '今、ご飯を食べているところです。', id: 'Sekarang sedang makan.' },
            { jp: '弟は外で遊んでいます。', id: 'Adik sedang bermain di luar.' },
          ]
        },
        {
          pattern: 'V(perubahan)+ている',
          arti: 'sudah... (dan keadaannya masih)',
          explain: 'Untuk kata kerja <b>perubahan keadaan sekali-jadi</b>: maknanya "hasil yang bertahan sampai sekarang".',
          examples: [
            { jp: '田中さんは結婚しています。', id: 'Tanaka sudah menikah (dan masih).' },
            { jp: 'この時計は壊れています。', id: 'Jam ini rusak (keadaannya).' },
          ]
        },
        {
          pattern: 'Vtて+ある',
          arti: 'sudah (sengaja) di-... [keadaan hasil]',
          explain: 'Hanya untuk kata kerja <b>transitif</b>. Menekankan keadaan adalah <b>hasil kesengajaan/persiapan</b>.',
          examples: [
            { jp: '窓が開けてあります。', id: 'Jendela (sengaja) dibiarkan terbuka.' },
            { jp: '部屋が掃除してあります。', id: 'Kamar sudah dibersihkan (siap dipakai).' },
          ]
        },
      ]
    },
    {
      type: 'kanji', title: 'Kanji Bab 3',
      items: [
        { ch: '続', kun: 'つづく', on: 'ぞく', id: 'berlanjut', note: '続ける (tsuzukeru) = melanjutkan' },
        { ch: '結', kun: 'むすぶ', on: 'けつ', id: 'mengikat / menyimpulkan', note: '結婚 (kekkon) = pernikahan' },
        { ch: '壊', kun: 'こわれる', on: 'かい', id: 'rusak', note: '壊れる (kowareru) intransitif' },
        { ch: '開', kun: 'あける・ひらく', on: 'かい', id: 'membuka', note: '開ける (akeru) transitif' },
        { ch: '閉', kun: 'しめる', on: 'へい', id: 'menutup', note: '閉める (shimeru) transitif' },
        { ch: '残', kun: 'のこる', on: 'ざん', id: 'sisa / tertinggal', note: '残業 (zangyou) = lembur' },
      ]
    },
    {
      type: 'kaiwa', title: 'Percakapan: Bertamu',
      lines: [
        { sp: 'A', jp: 'お邪魔します。わあ、部屋がきれいに掃除してありますね。', id: 'Permisi. Wah, kamarnya sudah dibersihkan rapi ya.' },
        { sp: 'B', jp: 'ええ、昨日掃除しておきました。どうぞ座ってください。', id: 'Ya, kemarin sudah saya bersihkan duluan. Silakan duduk.' },
        { sp: 'A', jp: '窓が開けてありますが、寒くないですか。', id: 'Jendelanya dibiarkan terbuka, tidak dingin?' },
        { sp: 'B', jp: '大丈夫です。もう春になっていますから。', id: 'Tidak apa-apa. Karena sudah menjadi musim semi.' },
        { sp: 'A', jp: 'この写真の人はご主人ですか。', id: 'Orang di foto ini suamimu?' },
        { sp: 'B', jp: 'はい、去年結婚しました。今は大阪に住んでいます。', id: 'Ya, tahun lalu menikah. Sekarang tinggal di Osaka.' },
      ]
    },
  ],
  quiz: [
    { q: '今、ご飯を___。 (Sekarang sedang makan)', o: ['食べた', '食べている', '食べてある', '食べる'], a: 1, explain: 'Aksi kontinu + ている = sedang berlangsung.' },
    { q: '田中さんは結婚___。 (Tanaka sudah menikah [dan masih])', o: ['している', 'してある', 'した', 'する'], a: 0, explain: '結婚 adalah perubahan sekali-jadi → ている bermakna hasil yang bertahan.' },
    { q: '窓が開けて___。 (Jendela sengaja dibiarkan terbuka)', o: ['いる', 'ある', 'おく', 'くる'], a: 1, explain: 'てある = keadaan hasil kesengajaan (transitif).' },
    { q: 'この時計は___。 (Jam ini dalam keadaan rusak)', o: ['壊している', '壊してある', '壊れている', '壊す'], a: 2, explain: '壊れる intransitif (perubahan) → 壊れている = keadaannya rusak.' },
    { q: 'Mana yang memakai てある dengan BENAR?', o: ['雨が降ってある', '部屋が掃除してある', '彼が来てある', '花が咲いてある'], a: 1, explain: 'てある hanya untuk kata kerja transitif + kesengajaan.' },
    { q: '電気がついている vs 電気がつけてある — bedanya?', o: ['Sama saja', 'つけてある menekankan sengaja dinyalakan (persiapan)', 'ついている lebih sopan', 'つけてある untuk lampu rusak'], a: 1, explain: 'てある membawa nuansa kesengajaan/persiapan.' },
    { q: '彼はこの仕事に慣れて___。 (Dia sudah terbiasa dengan pekerjaan ini)', o: ['いる', 'ある', 'おく', 'みる'], a: 0, explain: '慣れる = perubahan keadaan → 慣れている (hasil bertahan).' },
    { q: 'お金がまだ残って___。 (Uangnya masih tersisa)', o: ['いる', 'ある', 'います', 'あります'], a: 2, explain: '残る intransitif → 残っている. Bentuk sopan: 残っています.' },
    { q: '準備が___、出かけましょう。 (Setelah persiapan SELESAI, ayo pergi)', o: ['できている', 'できてある', 'してある', 'する'], a: 0, explain: 'できる intransitif → できている = sudah selesai (keadaan).' },
    { q: '知っている artinya…', o: ['Sedang mengetahui', 'Tahu (hasil mengetahui)', 'Akan tahu', 'Ingin tahu'], a: 1, explain: '知る = perubahan sekali-jadi → 知っている = "tahu" (hasilnya bertahan).' },
  ]
},
/* ---- BAB 4 ---- */
{
  id: 'n4-4', bab: 4, level: 'n4',
  title: 'Alasan & Tujuan',
  desc: 'Menyatakan kenapa dan untuk apa: から・ので・ために・ように',
  icon: '🎯',
  sections: [
    {
      type: 'penjelasan', title: 'Kenapa? Untuk Apa? Empat Senjata N4',
      body: `Di N4 ada <b>empat pola</b> untuk "kenapa" dan "untuk apa" yang WAJIB dibedakan nuansanya: <b>から</b>, <b>ので</b> (alasan), <b>ために</b>, <b>ように</b> (tujuan). Ini salah satu materi yang paling sering keluar di JLPT N4!\n\n<b>から vs ので</b> (alasan): から itu tegas, subjektif, dan <b>boleh</b> dipakai untuk perintah/ajakan/pendapat — 暑いから、窓を開けてください (karena panas, tolong buka jendela). ので lebih lembut, objektif, sopan — dan <b>tidak natural</b> untuk perintah langsung. Aturan praktis: kalau klausa utama berupa perintah (〜てください) atau ajakan (〜ましょう), pakai <b>から</b>.\n\n<b>ために vs ように</b> (tujuan): ために untuk tujuan yang dicapai lewat <b>usaha langsung dan disengaja</b> — subjeknya sama, kata kerjanya aktif: 合格するために、毎日勉強します (agar lulus, belajar tiap hari). Bentuknya: V(kamus)+ために. ように untuk tujuan yang hasilnya <b>di luar kendali langsung</b> / butuh cara tak langsung: 忘れないように、メモします (agar tidak lupa, saya mencatat). Polanya: V(ない)+ように atau V(potensial)+ように. ために juga punya arti kedua: "demi/untuk" — 家族のために働きます (bekerja demi keluarga).\n\n<b>Ringkasan cepat:</b> alasan tegas + perintah → から | alasan lembut → ので | tujuan lewat usaha sendiri → ために | tujuan tak langsung/harapan → ように.`
    },
    {
      type: 'kotoba', title: 'Kosakata Alasan & Tujuan',
      items: [
        { jp: '理由', kj: '理由', r: 'riyuu', id: 'alasan', note: '理由を聞く = menanyakan alasan' },
        { jp: '原因', kj: '原因', r: 'genin', id: 'penyebab', note: '原因は不明です = penyebabnya tidak jelas' },
        { jp: 'おかげ', r: 'okage', id: 'berkat (positif)', note: 'おかげさまで = berkat (doa)mu' },
        { jp: 'せい', r: 'sei', id: 'gara-gara (negatif)', note: '雨のせいで遅れた = terlambat gara-gara hujan' },
        { jp: '目的', kj: '目的', r: 'mokuteki', id: 'tujuan', note: '目的のために = demi tujuan' },
        { jp: '夢', kj: '夢', r: 'yume', id: 'impian / mimpi', note: '夢を叶える = mewujudkan impian' },
        { jp: '成功', kj: '成功', r: 'seikou', id: 'keberhasilan', note: '成功する = berhasil' },
        { jp: '失敗', kj: '失敗', r: 'shippai', id: 'kegagalan', note: '失敗する = gagal' },
        { jp: '予定', kj: '予定', r: 'yotei', id: 'rencana / jadwal', note: '予定がある = ada rencana' },
        { jp: '都合', kj: '都合', r: 'tsugou', id: 'keadaan (waktu)/kondisi', note: '都合が悪い = waktunya tidak pas' },
        { jp: '具合', kj: '具合', r: 'guai', id: 'kondisi (badan)', note: '具合が悪い = badan tidak enak' },
        { jp: '努力', kj: '努力', r: 'doryoku', id: 'usaha keras', note: '努力の結果 = hasil usaha' },
      ]
    },
    {
      type: 'bunpou', title: 'Pola Alasan & Tujuan',
      items: [
        {
          pattern: '(kalimat biasa) + から / (bentuk sopan) + ので',
          arti: 'karena...',
          explain: '<b>から</b>: tegas, subjektif, BOLEH untuk perintah/ajakan. <b>ので</b>: lembut, objektif, sopan — hindari untuk perintah langsung.',
          examples: [
            { jp: '暑いから、窓を開けてください。', id: 'Karena panas, tolong buka jendela.' },
            { jp: '病気なので、今日は休みます。', id: 'Karena sakit, hari ini saya istirahat.' },
          ]
        },
        {
          pattern: 'V(kamus)+ために / N+のために',
          arti: 'untuk / demi / agar (tujuan lewat usaha)',
          explain: 'Tujuan yang dicapai dengan <b>usaha langsung</b>. Bentuk kedua: "demi" seseorang/sesuatu (N+のために).',
          examples: [
            { jp: '合格するために、毎日勉強します。', id: 'Agar lulus, saya belajar setiap hari.' },
            { jp: '家族のために働きます。', id: 'Saya bekerja demi keluarga.' },
          ]
        },
        {
          pattern: 'V(ない)+ように / V(potensial)+ように',
          arti: 'agar / supaya (tujuan tak langsung)',
          explain: 'Tujuan yang hasilnya <b>tidak bisa dikontrol langsung</b>: harapan, pencegahan, kemampuan. Sering dengan ない-form atau bentuk potensial.',
          examples: [
            { jp: '忘れないように、メモします。', id: 'Agar tidak lupa, saya mencatat.' },
            { jp: '聞こえるように、大きく話します。', id: 'Agar terdengar, saya bicara keras.' },
          ]
        },
      ]
    },
    {
      type: 'kanji', title: 'Kanji Bab 4',
      items: [
        { ch: '理', kun: '—', on: 'り', id: 'logika / alasan', note: '理由 (riyuu) = alasan' },
        { ch: '由', kun: 'よし', on: 'ゆう', id: 'sebab / asal', note: '自由 (jiyuu) = bebas' },
        { ch: '原', kun: 'はら', on: 'げん', id: 'padang / asal', note: '原因 (genin) = penyebab' },
        { ch: '因', kun: '—', on: 'いん', id: 'sebab', note: '因果 (inga) = sebab-akibat' },
        { ch: '目', kun: 'め', on: 'もく', id: 'mata / tujuan', note: '目的 (mokuteki) = tujuan' },
        { ch: '的', kun: 'まと', on: 'てき', id: 'target / -bersifat', note: '具体的 (gutaiteki) = konkret' },
      ]
    },
    {
      type: 'kaiwa', title: 'Percakapan: Kenapa Belajar Bahasa Jepang?',
      lines: [
        { sp: 'A', jp: 'どうして日本語を勉強しているんですか。', id: 'Kenapa belajar bahasa Jepang?' },
        { sp: 'B', jp: '日本の会社で働きたいからです。夢を叶えるために、毎日勉強しています。', id: 'Karena ingin bekerja di perusahaan Jepang. Demi mewujudkan impian, belajar tiap hari.' },
        { sp: 'A', jp: 'すごいですね。試験はいつですか。', id: 'Hebat ya. Ujiannya kapan?' },
        { sp: 'B', jp: '来月です。忘れないように、カレンダーに書きました。', id: 'Bulan depan. Agar tidak lupa, sudah saya tulis di kalender.' },
        { sp: 'A', jp: '体に気をつけてくださいね。無理はしないように。', id: 'Jaga kesehatan ya. Jangan memaksakan diri.' },
        { sp: 'B', jp: 'はい、ありがとうございます。', id: 'Ya, terima kasih.' },
      ]
    },
  ],
  quiz: [
    { q: '暑い___、窓を開けてください。(Karena panas, tolong buka jendela)', o: ['ので', 'から', 'ために', 'ように'], a: 1, explain: 'Klausa utama berupa perintah (〜てください) → pakai から.' },
    { q: '病気___、今日は休みます。(Karena sakit, hari ini istirahat)', o: ['から', 'ので', 'ために', 'ば'], a: 1, explain: 'ので lebih lembut dan sopan untuk alasan biasa.' },
    { q: '合格___、毎日勉強します。(Agar lulus, belajar tiap hari)', o: ['するために', 'しないように', 'するので', 'したから'], a: 0, explain: 'Tujuan lewat usaha langsung → V(kamus)+ために.' },
    { q: '忘れない___、メモします。(Agar tidak lupa, saya mencatat)', o: ['ために', 'ように', 'から', 'ので'], a: 1, explain: 'V(ない)+ように untuk tujuan tak langsung/pencegahan.' },
    { q: '家族___働きます。(Bekerja DEMI keluarga)', o: ['のために', 'のように', 'のせいで', 'のおかげで'], a: 0, explain: 'N+のために = "demi/untuk" seseorang.' },
    { q: 'Mana yang TIDAK natural?', o: ['暑いから、窓を開けてください', '病気なので、休みます', '疲れたので、座ってください', '雨が降ったから、傘を持っていきます'], a: 2, explain: 'ので kurang natural untuk perintah langsung (〜てください).' },
    { q: '聞こえる___、大きく話します。(Agar terdengar, bicara keras)', o: ['ために', 'ように', 'から', 'なら'], a: 1, explain: 'V(potensial)+ように untuk tujuan di luar kendali langsung.' },
    { q: '雨の___遅れました。(Terlambat gara-gara hujan)', o: ['おかげで', 'せいで', 'ために', 'ように'], a: 1, explain: 'せい/せいで = "gara-gara" (konotasi negatif).' },
    { q: '試験に合格したのは、先生の___です。(Lulus ujian berkat guru)', o: ['せいで', 'おかげで', 'ために', 'わけで'], a: 1, explain: 'おかげで = "berkat" (konotasi positif).' },
    { q: '日本語が上手になる___、毎日話す練習をします。(Agar bahasa Jepang lancar, latihan bicara tiap hari)', o: ['ために', 'ように', 'から', 'ので'], a: 1, explain: '"Menjadi lancar" hasilnya tak langsung → V(negatif/potensial)+ように. Di sini pola "〜になるように".' },
  ]
},
/* ---- BAB 5 ---- */
{
  id: 'n4-5', bab: 5, level: 'n4',
  title: 'Pasif & Kausatif Dasar',
  desc: 'Dikenai aksi (di-) dan menyuruh/membiarkan: れる/られる, せる/させる',
  icon: '🌀',
  sections: [
    {
      type: 'penjelasan', title: 'Dikenai Aksi & Menyuruh Orang',
      body: `Dua bentuk kata kerja paling "dewasa" di N4: <b>pasif</b> (dikenai aksi) dan <b>kausatif</b> (menyuruh/membiarkan). Keduanya mengubah siapa melakukan apa — dan JLPT suka menguji pemahamanmu tentang itu.\n\n<b>Pasif (〜れる/〜られる):</b> godan: ubah akhiran ke baris-a + れる — 書く→<b>書かれる</b>, 盗む→<b>盗まれる</b>. Ichidan: +られる — 食べる→<b>食べられる</b>, 褒める→<b>褒められる</b>. Khusus: する→<b>される</b>, 来る→<b>こられる</b>. Polanya: <b>[pelaku]に〜される</b> (dikenai aksi oleh...). Ada dua rasa: (1) <b>pasif penderitaan</b> — 財布を盗まれた (dompetku dicuri orang! [sial]), (2) <b>pasif netral/fakta</b> — この本は多くの人に読まれている (buku ini dibaca banyak orang).\n\n<b>Kausatif (〜せる/〜させる):</b> godan: baris-a + せる — 書く→<b>書かせる</b>, 行く→<b>行かせる</b>. Ichidan: +させる — 食べる→<b>食べさせる</b>. Khusus: する→<b>させる</b>, 来る→<b>こさせる</b>. Kuncinya ada di partikel: <b>[orang]に + kausatif = MENYURUH</b> (子供に野菜を食べさせる = menyuruh anak makan sayur), <b>[orang]を + kausatif = MEMBIARKAN</b> (子供を遊ばせる = membiarkan anak bermain). Beda partikel, beda makna!\n\n<b>Jebakan JLPT:</b> (1) ichidan pasif (食べられる) bentuknya SAMA dengan potensial — bedakan dari konteks!; (2) に vs を pada kausatif; (3) pasif penderitaan selalu memakai を untuk benda milik pembicara (財布を盗まれた).`
    },
    {
      type: 'kotoba', title: 'Kosakata Pasif & Kausatif',
      items: [
        { jp: '盗む', kj: '盗む', r: 'nusumu', id: 'mencuri', note: '財布を盗まれた = dompet dicuri (sial!)' },
        { jp: '褒める', kj: '褒める', r: 'homeru', id: 'memuji', note: '先生に褒められた = dipuji guru' },
        { jp: '叱る', kj: '叱る', r: 'shikaru', id: 'memarahi', note: '母に叱られた = dimarahi ibu' },
        { jp: '頼む', kj: '頼む', r: 'tanomu', id: 'meminta / memohon', note: '頼まれる = dimintai (tolong)' },
        { jp: '許す', kj: '許す', r: 'yurusu', id: 'mengizinkan / memaafkan', note: '許される = diizinkan' },
        { jp: '迷惑', kj: '迷惑', r: 'meiwaku', id: 'mengganggu / merepotkan', note: '迷惑をかける = merepotkan' },
        { jp: '被害', kj: '被害', r: 'higai', id: 'kerugian (korban)', note: '被害に遭う = menjadi korban' },
        { jp: '報告', kj: '報告', r: 'houkoku', id: 'laporan', note: '報告する = melaporkan' },
        { jp: '連絡', kj: '連絡', r: 'renraku', id: 'kontak / kabar', note: '連絡する = menghubungi' },
        { jp: '指示', kj: '指示', r: 'shiji', id: 'instruksi', note: '指示に従う = mengikuti instruksi' },
        { jp: '従う', kj: '従う', r: 'shitagau', id: 'mengikuti / patuh', note: 'ルールに従う = patuh aturan' },
        { jp: '強制', kj: '強制', r: 'kyousei', id: 'pemaksaan', note: '強制する = memaksa' },
      ]
    },
    {
      type: 'bunpou', title: 'Pola Pasif & Kausatif',
      items: [
        {
          pattern: '[pelaku]に V-passive (れる/られる)',
          arti: 'di-[verb] oleh...',
          explain: 'Pasif ada dua rasa: <b>penderitaan</b> (merugikan pembicara, pakai を) dan <b>netral</b> (fakta umum).',
          examples: [
            { jp: '財布を盗まれました。', id: 'Dompet (saya) dicuri orang.' },
            { jp: 'この本は多くの人に読まれています。', id: 'Buku ini dibaca oleh banyak orang.' },
          ]
        },
        {
          pattern: '[orang]に V-causative (せる/させる)',
          arti: 'menyuruh [orang] untuk...',
          explain: '<b>に</b> + kausatif = <b>menyuruh/meminta</b> seseorang melakukan sesuatu.',
          examples: [
            { jp: '子供に野菜を食べさせます。', id: 'Saya menyuruh anak makan sayur.' },
            { jp: '社長は社員に残業させました。', id: 'Direktur menyuruh karyawan lembur.' },
          ]
        },
        {
          pattern: '[orang]を V-causative (せる/させる)',
          arti: 'membiarkan [orang]...',
          explain: '<b>を</b> + kausatif = <b>membiarkan/mengizinkan</b> — bukan menyuruh!',
          examples: [
            { jp: '子供を外で遊ばせます。', id: 'Saya membiarkan anak bermain di luar.' },
            { jp: '好きなことをさせてください。', id: 'Tolong biarkan (saya) melakukan hal yang saya suka.' },
          ]
        },
      ]
    },
    {
      type: 'kanji', title: 'Kanji Bab 5',
      items: [
        { ch: '盗', kun: 'ぬすむ', on: 'とう', id: 'mencuri', note: '盗む (nusumu), 強盗 (goutou)' },
        { ch: '許', kun: 'ゆるす', on: 'きょ', id: 'mengizinkan', note: '許可 (kyoka) = izin' },
        { ch: '頼', kun: 'たのむ', on: 'らい', id: 'meminta', note: '依頼 (irai) = permintaan' },
        { ch: '迷', kun: 'まよう', on: 'めい', id: 'tersesat / bingung', note: '迷惑 (meiwaku) = merepotkan' },
        { ch: '報', kun: 'むくいる', on: 'ほう', id: 'laporan / balasan', note: '報告 (houkoku) = laporan' },
        { ch: '被', kun: 'こうむる', on: 'ひ', id: 'menerima (akibat)', note: '被害 (higai) = kerugian' },
      ]
    },
    {
      type: 'kaiwa', title: 'Percakapan: Kecurian di Kereta',
      lines: [
        { sp: 'A', jp: 'どうしたんですか。顔色が悪いですよ。', id: 'Kenapa? Wajahmu pucat.' },
        { sp: 'B', jp: '実は、電車の中で財布を盗まれたんです。', id: 'Sebenarnya, di kereta dompetku dicuri.' },
        { sp: 'A', jp: 'ええ！警察に連絡しましたか。', id: 'Eh! Sudah menghubungi polisi?' },
        { sp: 'B', jp: 'はい、駅員に警察を呼ばせました。', id: 'Ya, saya menyuruh petugas stasiun memanggil polisi.' },
        { sp: 'A', jp: '大変でしたね。気をつけてください。', id: 'Kasihan ya. Hati-hati ya.' },
        { sp: 'B', jp: 'はい、もうカバンを前に持たせてもらいます…いえ、持ちます。', id: 'Ya, mulai sekarang tasnya saya bawa di depan.' },
      ]
    },
  ],
  quiz: [
    { q: 'Bentuk pasif dari 書く (kaku) adalah…', o: ['書ける', '書かれる', '書かせる', '書こう'], a: 1, explain: 'Godan pasif: baris-a + れる → 書かれる.' },
    { q: 'Bentuk pasif dari する yang BENAR…', o: ['しられる', 'される', 'させる', 'できる'], a: 1, explain: 'する → される (pasif). させる itu kausatif!' },
    { q: '財布___盗まれた。(Dompet dicuri)', o: ['が', 'を', 'に', 'で'], a: 1, explain: 'Pasif penderitaan: benda milik pembicara pakai を.' },
    { q: 'Bentuk kausatif dari 食べる (taberu) adalah…', o: ['食べられる', '食べさせる', '食べれる', '食べたい'], a: 1, explain: 'Ichidan kausatif: +させる → 食べさせる.' },
    { q: '子供に野菜を食べさせる。Artinya…', o: ['Membiarkan anak makan sayur', 'Menyuruh anak makan sayur', 'Anak dimakan sayur', 'Sayur dimakan anak'], a: 1, explain: 'に + kausatif = MENYURUH.' },
    { q: '子供を外で遊ばせる。Artinya…', o: ['Menyuruh anak bermain', 'Membiarkan anak bermain di luar', 'Anak disuruh pulang', 'Melarang anak bermain'], a: 1, explain: 'を + kausatif = MEMBIARKAN.' },
    { q: 'この本は多くの人に読まれています。Ini pasif jenis…', o: ['Penderitaan', 'Netral (fakta)', 'Perintah', 'Keinginan'], a: 1, explain: 'Fakta umum tanpa kerugian → pasif netral.' },
    { q: '先生に褒められた。Artinya…', o: ['Saya memuji guru', 'Saya dipuji guru', 'Guru menyuruh memuji', 'Guru membiarkan dipuji'], a: 1, explain: '[pelaku]に + pasif = dikenai aksi oleh pelaku.' },
    { q: '食べられる bisa berarti ganda. Dalam "寿司が食べられる", artinya…', o: ['Disuruh makan sushi', 'Bisa makan sushi (potensial)', 'Sushi dimakan orang', 'Ingin makan sushi'], a: 1, explain: 'Ichidan られる = pasif ATAU potensial. Dengan が + konteks kemampuan → potensial.' },
    { q: '社長は社員に残業___。(Direktur menyuruh karyawan lembur)', o: ['させました', 'されました', 'させられました', 'できます'], a: 0, explain: 'Menyuruh → kausatif: 残業させる. されました itu pasif (disuruh lembur oleh...).' },
  ]
},
/* ---- BAB 6 ---- */
{
  id: 'n4-6', bab: 6, level: 'n4',
  title: 'Pengandaian',
  desc: 'Empat kata "kalau": たら・ば・なら・と — jebakan favorit JLPT!',
  icon: '🔮',
  sections: [
    {
      type: 'penjelasan', title: 'Empat Kata "Kalau" yang Wajib Dibedakan',
      body: `Bahasa Jepang punya <b>EMPAT</b> cara bilang "kalau/jika": <b>たら</b>, <b>ば</b>, <b>なら</b>, <b>と</b>. Ini <b>jebakan favorit JLPT N4</b> — soalnya selalu meminta pilih yang tepat berdasarkan konteks!\n\n<b>〜たら</b>: paling serbaguna. Untuk kejadian <b>spesifik</b> ("kalau X terjadi, maka Y"): 雨が降ったら、行きません. Juga untuk urutan ("setelah..."): 家に帰ったら、電話してください. Dan untuk penemuan tak terduga: 窓を開けたら、雪が降っていた (pas buka jendela, ternyata salju turun!).\n\n<b>〜ば</b>: untuk syarat <b>umum/logis</b> ("jika"). Fokus pada kondisi yang harus dipenuhi: 安ければ、買います (jika murah, saya beli). Bentuk: V→〜ば (行けば, なければ), adj-i→〜ければ (高ければ), adj-na/N→であれば. <b>Tidak</b> dipakai untuk kejadian lampau yang sudah pasti terjadi.\n\n<b>〜なら</b>: "kalau soal/mengenai..." — dipakai saat <b>menanggapi informasi dari lawan bicara</b> atau memberi saran atas topik tertentu: 日本へ行くなら、冬がいいですよ (kalau mau ke Jepang, musim dingin bagus lho). Pola: N + なら, V(kamus) + なら.\n\n<b>〜と</b>: hubungan <b>sebab-akibat yang pasti</b> — hukum alam, kebiasaan, mekanisme: 春になると、桜が咲きます (kalau tiba musim semi, sakura mekar). Aturan keras: klausa utama <b>TIDAK BOLEH</b> berupa keinginan, perintah, atau ajakan (×ボタンを押すと、開けてください → SALAH, pakai たら).`
    },
    {
      type: 'kotoba', title: 'Kosakata Pengandaian',
      items: [
        { jp: 'もし', r: 'moshi', id: 'seandainya / jika', note: 'Sering dipasangkan dengan たら/ば' },
        { jp: '仮に', kj: '仮に', r: 'kari ni', id: 'andaikan / misalkan', note: 'Lebih formal dari もし' },
        { jp: '条件', kj: '条件', r: 'jouken', id: 'syarat / kondisi', note: '条件を満たす = memenuhi syarat' },
        { jp: '場合', kj: '場合', r: 'baai', id: 'kasus / keadaan', note: '〜場合は = dalam hal...' },
        { jp: '万一', kj: '万一', r: 'manichi', id: 'jaga-jaga / seandainya', note: '万一のために = untuk jaga-jaga' },
        { jp: '幸い', kj: '幸い', r: 'saiwai', id: 'untungnya', note: '幸いなことに = untungnya' },
        { jp: '偶然', kj: '偶然', r: 'guuzen', id: 'kebetulan', note: '偶然会った = bertemu kebetulan' },
        { jp: '結果', kj: '結果', r: 'kekka', id: 'hasil', note: '結果が出る = hasilnya keluar' },
        { jp: '予想', kj: '予想', r: 'yosou', id: 'prediksi / perkiraan', note: '予想通り = sesuai prediksi' },
        { jp: '実際', kj: '実際', r: 'jissai', id: 'kenyataan', note: '実際は違う = kenyataannya berbeda' },
        { jp: '例外', kj: '例外', r: 'reigai', id: 'pengecualian', note: '例外もある = ada pengecualian' },
        { jp: '予定', kj: '予定', r: 'yotei', id: 'rencana', note: '予定を変更する = mengubah rencana' },
      ]
    },
    {
      type: 'bunpou', title: 'Pola Pengandaian',
      items: [
        {
          pattern: 'Vた+ら / Adjかったら / Nだったら',
          arti: 'kalau... / setelah...',
          explain: 'Paling serbaguna: kejadian spesifik, urutan kejadian, dan penemuan tak terduga. <b>Jika</b> di depan sering dipasangkan.',
          examples: [
            { jp: '雨が降ったら、行きません。', id: 'Kalau hujan turun, (saya) tidak pergi.' },
            { jp: '家に帰ったら、電話してください。', id: 'Setelah sampai rumah, tolong telepon.' },
          ]
        },
        {
          pattern: 'Vば / Adjければ / Nであれば',
          arti: 'jika... (syarat umum)',
          explain: 'Untuk syarat <b>umum dan logis</b>. Fokus: kondisi yang harus dipenuhi. Tidak untuk kejadian lampau yang pasti.',
          examples: [
            { jp: '安ければ、買います。', id: 'Jika murah, saya beli.' },
            { jp: '時間がなければ、手伝いません。', id: 'Jika tidak ada waktu, saya tidak membantu.' },
          ]
        },
        {
          pattern: 'N+なら / V(kamus)+なら  |  V(kamus)+と',
          arti: 'kalau soal... / jika...maka (pasti)',
          explain: '<b>なら</b> = menanggapi topik/informasi lawan bicara, cocok untuk saran. <b>と</b> = akibat <b>pasti</b> (hukum alam/kebiasaan); klausa utama TIDAK BOLEH perintah/keinginan.',
          examples: [
            { jp: '日本へ行くなら、冬がいいですよ。', id: 'Kalau mau ke Jepang, musim dingin bagus lho.' },
            { jp: '春になると、桜が咲きます。', id: 'Kalau tiba musim semi, sakura mekar.' },
          ]
        },
      ]
    },
    {
      type: 'kanji', title: 'Kanji Bab 6',
      items: [
        { ch: '仮', kun: 'かり', on: 'か', id: 'sementara / andaikan', note: '仮に (kari ni) = andaikan' },
        { ch: '条', kun: '—', on: 'じょう', id: 'pasal / syarat', note: '条件 (jouken) = syarat' },
        { ch: '件', kun: '—', on: 'けん', id: 'perkara', note: '事件 (jiken) = insiden' },
        { ch: '場', kun: 'ば', on: 'じょう', id: 'tempat / keadaan', note: '場合 (baai) = keadaan/kasus' },
        { ch: '合', kun: 'あう', on: 'ごう', id: 'bertemu / cocok', note: '間に合う (ma ni au) = keburu' },
        { ch: '予', kun: '—', on: 'よ', id: 'ramalan / awal', note: '予定 (yotei) = rencana' },
      ]
    },
    {
      type: 'kaiwa', title: 'Percakapan: Rencana Akhir Pekan',
      lines: [
        { sp: 'A', jp: '週末、どこかへ行きませんか。', id: 'Akhir pekan, mau pergi ke mana-mana?' },
        { sp: 'B', jp: 'いいですね。もし天気がよかったら、海へ行きましょう。', id: 'Boleh. Seandainya cuaca bagus, ayo ke pantai.' },
        { sp: 'A', jp: '雨なら、映画でも見ませんか。', id: 'Kalau hujan, nonton film saja bagaimana?' },
        { sp: 'B', jp: 'そうですね。安ければ、あの新しい映画館にしましょう。', id: 'Ya. Jika murah, ke bioskop baru itu saja.' },
        { sp: 'A', jp: 'ボタンを押すと、チケットが出ますよ。', id: 'Jika tombol ditekan, tiketnya keluar.' },
        { sp: 'B', jp: '分かりました。じゃあ、土曜日に駅で会いましょう。', id: 'Mengerti. Kalau begitu, ketemu di stasiun hari Sabtu.' },
      ]
    },
  ],
  quiz: [
    { q: '雨が降っ___、行きません。(Kalau hujan turun, tidak pergi)', o: ['たら', 'ば', 'なら', 'と'], a: 0, explain: 'たら untuk kejadian spesifik ("kalau X terjadi").' },
    { q: '安け___、買います。(Jika murah, saya beli)', o: ['たら', 'れば', 'なら', 'と'], a: 1, explain: 'ば untuk syarat umum/logis: 安い→安ければ.' },
    { q: '日本へ行く___、冬がいいですよ。(Kalau mau ke Jepang, musim dingin bagus)', o: ['たら', 'ば', 'なら', 'と'], a: 2, explain: 'なら untuk menanggapi topik/memberi saran.' },
    { q: '春になると、桜が___。(Kalau tiba musim semi, sakura mekar)', o: ['咲きます', '咲いてください', '咲きたいです', '咲きましょう'], a: 0, explain: 'と = akibat pasti (hukum alam). Klausa utama tidak boleh perintah/keinginan.' },
    { q: 'Mana yang SALAH?', o: ['ボタンを押すと、ドアが開きます', 'ボタンを押すと、開けてください', '春になると、暖かくなります', '右に曲がると、駅があります'], a: 1, explain: 'と tidak boleh diikuti perintah (〜てください). Pakai たら.' },
    { q: '家に帰っ___、電話してください。(Setelah sampai rumah, tolong telepon)', o: ['たら', 'ば', 'なら', 'と'], a: 0, explain: 'たら juga bermakna urutan "setelah...".' },
    { q: '時間がなけ___、手伝いません。(Jika tidak ada waktu, tidak membantu)', o: ['たら', 'れば', 'なら', 'たらば'], a: 1, explain: 'ない→なければ adalah bentuk ば dari negatif.' },
    { q: '窓を開けたら、雪が降っていた。(Pas buka jendela, ternyata salju turun) — たら di sini bermakna…', o: ['Syarat umum', 'Urutan kejadian', 'Penemuan tak terduga', 'Hukum alam'], a: 2, explain: 'たら bisa untuk penemuan: "pas..., ternyata...".' },
    { q: 'もし時間が___、遊びに来てください。(Seandainya ada waktu, mainlah ke sini)', o: ['あったら', 'あれば', 'あるなら', 'あると'], a: 0, explain: 'もし paling sering dipasangkan dengan たら.' },
    { q: '高___、買いません。(Jika mahal, tidak beli)', o: ['かったら', 'ければ', 'いなら', 'いと'], a: 1, explain: 'Adj-i + ば: 高い→高ければ.' },
  ]
},
/* ---- BAB 7 ---- */
{
  id: 'n4-7', bab: 7, level: 'n4',
  title: 'Sonkeigo & Kenjougo Dasar',
  desc: 'Bahasa hormat dan merendah esensial: いらっしゃる・めしあがる・いたす・申す',
  icon: '🙇',
  sections: [
    {
      type: 'penjelasan', title: 'Naik & Merendah: Seni Bahasa Hormat',
      body: `Bahasa Jepang punya <b>tiga tingkat kesopanan</b>: 丁寧語 (teineigo — sopan biasa: です/ます), <b>尊敬語</b> (sonkeigo — <b>meninggikan</b> lawan bicara/atasan), dan <b>謙譲語</b> (kenjougo — <b>merendahkan</b> diri sendiri). Di N4, kamu wajib hafal kata-kata khususnya!\n\n<b>尊敬語 (untuk ORANG LAIN yang dihormati):</b> いらっしゃる (untuk いる/行く/来る), <b>めしあがる</b> (untuk 食べる/飲む), <b>なさる</b> (untuk する), <b>おっしゃる</b> (untuk 言う), ご覧になる (untuk 見る). Pola umumnya: <b>お/ご + stem + になる</b> — お読みになる (membaca [hormat]).\n\n<b>謙譲語 (untuk DIRI SENDIRI agar terlihat rendah):</b> <b>いたす</b> (untuk する), <b>申す</b> (untuk 言う), <b>参る</b> (untuk 行く/来る), 拝見する (untuk 見る), <b>いただく</b> (untuk もらう/食べる/飲む). Pola umumnya: <b>お/ご + stem + する・いたす</b> — お待ちする (menunggu [merendah]).\n\n<b>Aturan emas & jebakan:</b> (1) JANGAN pakai sonkeigo untuk diri sendiri — 私がおっしゃる itu SALAH BESAR; (2) pasangan arah: <b>くださる</b> (memberi ke saya — hormat) ⇔ <b>いただく</b> (menerima — merendah); (3) めしあがる (hormat: beliau makan) ⇔ いただく (merendah: saya makan). Kalau tertukar, artinya ikut tertukar!`
    },
    {
      type: 'kotoba', title: 'Kosakata Hormat & Merendah',
      items: [
        { jp: '尊敬語', kj: '尊敬語', r: 'sonkeigo', id: 'bahasa hormat (meninggikan lawan)', note: 'Untuk atasan, tamu, pelanggan' },
        { jp: '謙譲語', kj: '謙譲語', r: 'kenjougo', id: 'bahasa merendah (diri sendiri)', note: 'Untuk diri sendiri / kelompok sendiri' },
        { jp: '丁寧語', kj: '丁寧語', r: 'teineigo', id: 'bahasa sopan biasa', note: 'です/ます yang sudah kamu kenal' },
        { jp: '申す', kj: '申す', r: 'mousu', id: 'berkata (merendah)', note: 'Kenjougo dari 言う. 私は田中と申します' },
        { jp: 'いたす', r: 'itasu', id: 'melakukan (merendah)', note: 'Kenjougo dari する' },
        { jp: '参る', kj: '参る', r: 'mairu', id: 'pergi/datang (merendah)', note: 'Kenjougo dari 行く/来る' },
        { jp: '拝見する', kj: '拝見する', r: 'haiken suru', id: 'melihat (merendah)', note: 'Kenjougo dari 見る' },
        { jp: 'いただく', kj: '頂く', r: 'itadaku', id: 'menerima/makan (merendah)', note: 'Pasangan: くださる (hormat)' },
        { jp: 'くださる', r: 'kudasaru', id: 'memberi (hormat, ke saya)', note: '先生が教えてくださった = guru mengajari saya' },
        { jp: 'めしあがる', r: 'meshiagaru', id: 'makan/minum (hormat)', note: 'Sonkeigo dari 食べる/飲む' },
        { jp: 'おっしゃる', r: 'ossharu', id: 'berkata (hormat)', note: 'Sonkeigo dari 言う' },
        { jp: 'いらっしゃる', r: 'irassharu', id: 'ada/pergi/datang (hormat)', note: 'Sonkeigo dari いる/行く/来る' },
      ]
    },
    {
      type: 'bunpou', title: 'Pola Sonkeigo & Kenjougo',
      items: [
        {
          pattern: 'お/ご + stem + になる (+ kata khusus)',
          arti: '[beliau] ber-... (hormat)',
          explain: 'Pola sonkeigo untuk <b>lawan bicara/atasan</b>. Kata khusus wajib dihafal: いらっしゃる, めしあがる, なさる, おっしゃる.',
          examples: [
            { jp: '先生はもうお帰りになりました。', id: 'Bapak/Ibu guru sudah pulang (hormat).' },
            { jp: 'どうぞ、めしあがってください。', id: 'Silakan dimakan (hormat).' },
          ]
        },
        {
          pattern: 'お/ご + stem + する・いたす (+ kata khusus)',
          arti: 'saya ber-... (merendah)',
          explain: 'Pola kenjougo untuk <b>diri sendiri</b>. Kata khusus: いたす, 申す, 参る, 拝見する, いただく.',
          examples: [
            { jp: '私がご案内いたします。', id: 'Saya yang akan memandu (merendah).' },
            { jp: '資料を拝見しました。', id: 'Saya sudah melihat dokumennya (merendah).' },
          ]
        },
        {
          pattern: 'くださる ⇔ いただく / おっしゃる ⇔ 申す',
          arti: 'pasangan arah hormat-merendah',
          explain: '<b>くださる</b> = beliau MEMBERI (ke saya). <b>いただく</b> = saya MENERIMA (merendah). Jangan tertukar arahnya!',
          examples: [
            { jp: '先生が本をくださいました。', id: 'Guru memberi saya buku (hormat).' },
            { jp: '先生の本をいただきました。', id: 'Saya menerima buku dari guru (merendah).' },
          ]
        },
      ]
    },
    {
      type: 'kanji', title: 'Kanji Bab 7',
      items: [
        { ch: '尊', kun: 'たっとい', on: 'そん', id: 'mulia / hormat', note: '尊敬 (sonkei) = hormat' },
        { ch: '敬', kun: 'うやまう', on: 'けい', id: 'hormat', note: '尊敬語 (sonkeigo)' },
        { ch: '謙', kun: 'へりくだる', on: 'けん', id: 'rendah hati', note: '謙譲語 (kenjougo)' },
        { ch: '申', kun: 'もうす', on: 'しん', id: 'berkata (merendah)', note: '申す (mousu), 申請 (shinsei)' },
        { ch: '頂', kun: 'いただく', on: 'ちょう', id: 'menerima / puncak', note: '頂く (itadaku), 頂上 (choujou)' },
        { ch: '参', kun: 'まいる', on: 'さん', id: 'ikut serta / datang (merendah)', note: '参加 (sanka) = partisipasi' },
      ]
    },
    {
      type: 'kaiwa', title: 'Percakapan: Resepsionis Hotel',
      lines: [
        { sp: 'A', jp: 'いらっしゃいませ。ご予約のお客様でしょうか。', id: 'Selamat datang. Apakah tamu yang sudah reservasi?' },
        { sp: 'B', jp: 'はい、田中と申します。', id: 'Ya, saya Tanaka (merendah).' },
        { sp: 'A', jp: '田中様ですね。こちらでお待ちください。', id: 'Tuan Tanaka ya. Mohon tunggu di sini.' },
        { sp: 'B', jp: '朝ごはんは何時からですか。', id: 'Sarapan dari jam berapa?' },
        { sp: 'A', jp: '7時からでございます。どうぞめしあがってください。', id: 'Dari jam 7. Silakan dinikmati (hormat).' },
        { sp: 'B', jp: 'ありがとうございます。', id: 'Terima kasih.' },
      ]
    },
  ],
  quiz: [
    { q: 'Sonkeigo dari 言う (iu) adalah…', o: ['申す', 'おっしゃる', 'いただく', 'なさる'], a: 1, explain: 'おっしゃる = sonkeigo dari 言う. 申す itu kenjougo!' },
    { q: 'Sonkeigo dari 食べる (taberu) adalah…', o: ['いただく', 'めしあがる', '召す', '食べなさる'], a: 1, explain: 'めしあがる = sonkeigo 食べる/飲む. いただく itu kenjougo.' },
    { q: 'Kenjougo dari する adalah…', o: ['なさる', 'いたす', 'くださる', 'いらっしゃる'], a: 1, explain: 'いたす = kenjougo dari する. なさる itu sonkeigo.' },
    { q: 'Kenjougo dari 言う adalah…', o: ['おっしゃる', '申す', '話す', '述べる'], a: 1, explain: '申す = kenjougo dari 言う.' },
    { q: 'いらっしゃる adalah sonkeigo dari…', o: ['食べる', 'いる・行く・来る', 'する', '見る'], a: 1, explain: 'いらっしゃる mencakup いる, 行く, dan 来る sekaligus.' },
    { q: '先生が本を___。(Guru MEMBERI saya buku — hormat)', o: ['いただきました', 'くださいました', '申しました', 'いたしました'], a: 1, explain: 'くださる = beliau memberi (arah ke saya, hormat).' },
    { q: '先生の本を___。(Saya MENERIMA buku dari guru — merendah)', o: ['くださいました', 'いただきました', 'おっしゃいました', 'なさいました'], a: 1, explain: 'いただく = saya menerima (merendah).' },
    { q: 'Mana yang SALAH?', o: ['先生がおっしゃいました', '私が申しました', '私がおっしゃいました', '先生がめしあがりました'], a: 2, explain: 'おっしゃる adalah sonkeigo — TIDAK BOLEH untuk diri sendiri (私)!' },
    { q: '拝見する adalah kenjougo dari…', o: ['言う', '見る', '聞く', 'する'], a: 1, explain: '拝見する = kenjougo dari 見る (melihat).' },
    { q: '私がご案内___。(Saya yang akan memandu — merendah)', o: ['になります', 'いたします', 'なさいます', 'くださいます'], a: 1, explain: 'Untuk diri sendiri pakai kenjougo: お/ご〜する・いたす.' },
  ]
},
/* ---- BAB 8 ---- */
{
  id: 'n4-8', bab: 8, level: 'n4',
  title: 'Review Komprehensif N4',
  desc: 'Ujian akhir N4: campuran semua pola + kaiwa bisnis sederhana',
  icon: '🏆',
  sections: [
    {
      type: 'penjelasan', title: 'Peta Perang N4: Review Total',
      body: `Selamat sampai di bab terakhir N4! Sebelum quiz final, mari petakan ulang <b>pasangan pola yang paling sering diuji</b> — karena JLPT N4 pada dasarnya adalah ujian <b>membedakan pola yang mirip</b>.\n\n<b>Kelompok 1 — Keinginan:</b> 〜たい (saya mau) vs 〜たがる (dia kelihatannya mau). Kunci: lihat SUBJEK. <b>Kelompok 2 — Tujuan:</b> 〜ために (usaha langsung, V kamus) vs 〜ように (tak langsung, V-nai/potensial). Kunci: bisakah hasilnya dikontrol langsung? <b>Kelompok 3 — Pengandaian:</b> たら (spesifik/serbaguna) vs ば (syarat umum) vs なら (menanggapi topik) vs と (akibat pasti; tanpa perintah!). <b>Kelompok 4 — Keadaan:</b> 〜ている (sedang / hasil bertahan — cek jenis kata kerja!) vs 〜てある (transitif + sengaja disiapkan).\n\n<b>Kelompok 5 — Arah aksi:</b> pasif [A]に〜される (dikenai) vs kausatif [orang]に〜させる (menyuruh) vs [orang]を〜させる (membiarkan). <b>Kelompok 6 — Hormat:</b> sonkeigo (untuk ORANG LAIN: おっしゃる・めしあがる・いらっしゃる) vs kenjougo (untuk DIRI SENDIRI: 申す・いただく・いたす・参る). Jangan pernah tertukar arahnya!\n\n<b>Strategi ujian:</b> baca soal sampai habis, garis bawahi kata kunci (subjek, partikel, bentuk perintah), lalu cocokkan dengan peta di atas. 10 soal final ini mensimulasikan soal JLPT asli — lulus 70+ berarti kamu SIAP naik ke N3!`
    },
    {
      type: 'kotoba', title: 'Kosakata Kunci N4',
      items: [
        { jp: '相談する', kj: '相談する', r: 'soudan suru', id: 'berkonsultasi', note: '相談に乗る = mendengarkan curhat' },
        { jp: '予約する', kj: '予約する', r: 'yoyaku suru', id: 'memesan / reservasi', note: '予約を入れる = membuat reservasi' },
        { jp: '変更する', kj: '変更する', r: 'henkou suru', id: 'mengubah', note: '予定を変更する = mengubah jadwal' },
        { jp: '確認する', kj: '確認する', r: 'kakunin suru', id: 'memastikan / mengecek', note: '確認を取る = melakukan konfirmasi' },
        { jp: '報告する', kj: '報告する', r: 'houkoku suru', id: 'melaporkan', note: '上司に報告する = lapor ke atasan' },
        { jp: '連絡する', kj: '連絡する', r: 'renraku suru', id: 'menghubungi', note: '連絡が取れる = bisa dihubungi' },
        { jp: '役に立つ', kj: '役に立つ', r: 'yaku ni tatsu', id: 'berguna', note: 'お役に立てて光栄です = suatu kehormatan bisa membantu' },
        { jp: '間に合う', kj: '間に合う', r: 'ma ni au', id: 'keburu / tepat waktu', note: '時間に間に合う = keburu waktu' },
        { jp: '慣れる', kj: '慣れる', r: 'nareru', id: 'terbiasa', note: '生活に慣れる = terbiasa dengan kehidupan' },
        { jp: '続ける', kj: '続ける', r: 'tsuzukeru', id: 'melanjutkan', note: '努力を続ける = terus berusaha' },
        { jp: '比べる', kj: '比べる', r: 'kuraberu', id: 'membandingkan', note: '比べてみる = coba bandingkan' },
        { jp: '決める', kj: '決める', r: 'kimeru', id: 'memutuskan', note: '予定を決める = menentukan jadwal' },
      ]
    },
    {
      type: 'bunpou', title: 'Ringkasan Pola Jebakan',
      items: [
        {
          pattern: 'たい (saya) vs たがる (dia)',
          arti: 'ingin — cek subjeknya!',
          explain: 'Subjek <b>saya/kamu (bertanya)</b> → 〜たい. Subjek <b>orang ketiga</b> → 〜たがる/〜たがっている.',
          examples: [
            { jp: '私は日本へ行きたいです。', id: 'Saya ingin pergi ke Jepang.' },
            { jp: '彼は日本へ行きたがっています。', id: 'Dia kelihatannya ingin pergi ke Jepang.' },
          ]
        },
        {
          pattern: 'ために (langsung) vs ように (tak langsung)',
          arti: 'agar/supaya — cek kendalinya!',
          explain: 'Hasil bisa <b>dikontrol usaha sendiri</b> → ために. Hasil <b>di luar kendali</b> (harapan/cegah) → ように.',
          examples: [
            { jp: '合格するために勉強します。', id: 'Agar lulus, saya belajar (usaha langsung).' },
            { jp: '忘れないようにメモします。', id: 'Agar tidak lupa, saya mencatat (pencegahan).' },
          ]
        },
        {
          pattern: 'たら / ば / なら / と — pilih sesuai konteks',
          arti: '"kalau" — cek jenis hubungannya!',
          explain: '<b>たら</b>=spesifik/serbaguna, <b>ば</b>=syarat umum, <b>なら</b>=menanggapi topik, <b>と</b>=akibat pasti (tanpa perintah!).',
          examples: [
            { jp: '安ければ、買います。', id: 'Jika murah, saya beli (syarat umum → ば).' },
            { jp: 'ボタンを押すと、開きます。', id: 'Jika tombol ditekan, terbuka (pasti → と).' },
          ]
        },
      ]
    },
    {
      type: 'kanji', title: 'Kanji Kunci N4 (Review)',
      items: [
        { ch: '能', kun: '—', on: 'のう', id: 'kemampuan', note: '可能 (kanou) = mungkin/bisa' },
        { ch: '比', kun: 'くらべる', on: 'ひ', id: 'membandingkan', note: '比較 (hikaku) = perbandingan' },
        { ch: '続', kun: 'つづく', on: 'ぞく', id: 'berlanjut', note: '続ける (tsuzukeru) = melanjutkan' },
        { ch: '理', kun: '—', on: 'り', id: 'logika / alasan', note: '理由 (riyuu) = alasan' },
        { ch: '被', kun: 'こうむる', on: 'ひ', id: 'menerima (akibat)', note: '被害 (higai) = kerugian' },
        { ch: '仮', kun: 'かり', on: 'か', id: 'andaikan', note: '仮に (kari ni) = seandainya' },
        { ch: '尊', kun: 'たっとい', on: 'そん', id: 'hormat', note: '尊敬語 (sonkeigo) = bahasa hormat' },
        { ch: '申', kun: 'もうす', on: 'しん', id: 'berkata (merendah)', note: '申す (mousu) = berkata (kenjougo)' },
      ]
    },
    {
      type: 'kaiwa', title: 'Percakapan: Telepon Bisnis',
      lines: [
        { sp: 'A', jp: 'はい、山田商事でございます。', id: 'Ya, di Yamada Shoji (merendah).' },
        { sp: 'B', jp: '佐藤と申します。部長はいらっしゃいますか。', id: 'Saya Sato (merendah). Apakah kepala bagian ada (hormat)?' },
        { sp: 'A', jp: '申し訳ありません、部長はただいま外出しております。', id: 'Mohon maaf, kepala bagian sedang keluar (merendah).' },
        { sp: 'B', jp: 'そうですか。では、明日また連絡いたします。', id: 'Oh begitu. Kalau begitu, besok saya hubungi lagi (merendah).' },
        { sp: 'A', jp: 'かしこまりました。お電話ありがとうございました。', id: 'Baik. Terima kasih atas teleponnya.' },
        { sp: 'B', jp: 'こちらこそ、ありがとうございました。', id: 'Saya juga, terima kasih.' },
      ]
    },
  ],
  quiz: [
    { q: '日本語___話せます。(Bisa bicara bahasa Jepang)', o: ['を', 'が', 'に', 'へ'], a: 1, explain: 'Review Bab 1: potensial memakai が.' },
    { q: '子供は新しいおもちゃを___。(Anak itu kelihatannya menginginkan mainan baru)', o: ['ほしがる', 'ほしい', 'ほしたがる', 'ほしがっている'], a: 3, explain: '欲しい untuk orang ketiga → ほしがっている. (欲しがる bentuk dasarnya.)' },
    { q: 'このレストランの___あのレストランよりおいしいです。(Restoran ini LEBIH enak)', o: ['より', 'ほうが', 'いちばん', 'もっと'], a: 1, explain: 'Review Bab 2: AのほうがBより〜.' },
    { q: '部屋が掃除して___。(Kamar sudah dibersihkan [siap])', o: ['いる', 'ある', 'おく', 'みる'], a: 1, explain: 'Review Bab 3: transitif + sengaja → てある.' },
    { q: '暑い___、窓を開けてください。(Karena panas, tolong buka jendela)', o: ['ので', 'から', 'ために', 'ように'], a: 1, explain: 'Review Bab 4: perintah → から.' },
    { q: '忘れない___、メモします。(Agar tidak lupa, mencatat)', o: ['ために', 'ように', 'から', 'ので'], a: 1, explain: 'Review Bab 4: V(ない)+ように untuk pencegahan.' },
    { q: '子供___外で遊ばせる。(Membiarkan anak bermain di luar)', o: ['に', 'を', 'が', 'へ'], a: 1, explain: 'Review Bab 5: を + kausatif = membiarkan.' },
    { q: '春になると、桜が咲き___.(Kalau tiba musim semi, sakura mekar)', o: ['ます', 'ますか', 'ましょう', 'たいです'], a: 0, explain: 'Review Bab 6: と = akibat pasti; klausa utama tak boleh ajakan/keinginan.' },
    { q: '先生が___。(Guru berkata — hormat)', o: ['申しました', 'おっしゃいました', 'いただきました', 'いたしました'], a: 1, explain: 'Review Bab 7: sonkeigo dari 言う = おっしゃる.' },
    { q: 'もし時間が___、来てください。(Seandainya ada waktu, datanglah)', o: ['あったら', 'あれば', 'あるなら', 'あると'], a: 0, explain: 'Review Bab 6: もし paling serasi dengan たら.' },
  ]
}
],
n3: [], n2: [], n1: [],
};
