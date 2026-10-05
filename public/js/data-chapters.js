/* CHAPTERS — data pembelajaran */

const CHAPTERS = {
  "n5": [
    {
      "id": "n5-1",
      "bab": 1,
      "level": "n5",
      "title": "Aisatsu & Perkenalan Diri",
      "desc": "Salam sehari-hari dan cara memperkenalkan diri dalam bahasa Jepang",
      "icon": "👋",
      "sections": [
        {
          "type": "penjelasan",
          "title": "Kenapa Mulai dari Aisatsu?",
          "body": "Orang Jepang sangat memperhatikan <b>aisatsu</b> (挨拶 = salam). Menyapa dengan benar adalah langkah pertama agar diterima dalam percakapan. Di bab ini kamu akan menguasai salam dasar dan pola perkenalan diri yang dipakai setiap hari.\n\n<b>Metode belajar:</b> baca penjelasan → hafalkan kotoba → pahami pola bunpou → tirukan kaiwa dengan suara keras → kerjakan quiz. Jangan lanjut sebelum quiz lulus!"
        },
        {
          "type": "kotoba",
          "title": "Kosakata Salam",
          "items": [
            {
              "jp": "おはよう",
              "r": "ohayou",
              "id": "selamat pagi",
              "note": "Versi kasual. Formal: おはようございます"
            },
            {
              "jp": "こんにちは",
              "r": "konnichiwa",
              "id": "selamat siang / halo",
              "note": "Salam paling umum, dipakai siang hari"
            },
            {
              "jp": "こんばんは",
              "r": "konbanwa",
              "id": "selamat malam",
              "note": "Dipakai saat bertemu di malam hari"
            },
            {
              "jp": "はじめまして",
              "r": "hajimemashite",
              "id": "senang bertemu denganmu",
              "note": "Wajib saat pertama kali bertemu"
            },
            {
              "jp": "よろしくおねがいします",
              "kj": "宜しくお願いします",
              "r": "yoroshiku onegaishimasu",
              "id": "mohon bantuannya",
              "note": "Penutup perkenalan, sangat penting"
            },
            {
              "jp": "ありがとう",
              "r": "arigatou",
              "id": "terima kasih",
              "note": "Formal: ありがとうございます"
            },
            {
              "jp": "すみません",
              "kj": "済みません",
              "r": "sumimasen",
              "id": "maaf / permisi",
              "note": "Bisa untuk minta maaf ATAU memanggil orang"
            },
            {
              "jp": "さようなら",
              "kj": "左様なら",
              "r": "sayounara",
              "id": "selamat tinggal",
              "note": "Untuk perpisahan yang lama"
            },
            {
              "jp": "じゃあね",
              "r": "jaa ne",
              "id": "dadah (kasual)",
              "note": "Antar teman saja"
            },
            {
              "jp": "おやすみなさい",
              "r": "oyasuminasai",
              "id": "selamat tidur",
              "note": "Saat akan tidur / pulang malam"
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Pola Perkenalan",
          "items": [
            {
              "pattern": "わたしは [nama] です",
              "arti": "Saya adalah [nama]",
              "explain": "Ini pola paling dasar dalam bahasa Jepang. <b>は</b> (dibaca \"wa\") adalah partikel topik — ia menandai siapa yang sedang dibicarakan. Sementara <b>です</b> fungsinya mirip \"adalah\" dalam versi sopan.",
              "examples": [
                {
                  "jp": "わたしは ブディ です。",
                  "id": "Saya adalah Budi.",
                  "rd": "わたしわ ブディ です。"
                },
                {
                  "jp": "わたしは がくせい です。",
                  "id": "Saya adalah murid.",
                  "rd": "わたしわ がくせい です。"
                }
              ]
            },
            {
              "pattern": "[asal] から きました",
              "arti": "Saya berasal dari [asal]",
              "explain": "<b>から</b> artinya \"dari\", dan <b>きました</b> adalah bentuk lampau sopan dari きます (datang). Jadi pola ini standar untuk menyebut asal daerah atau negaramu.",
              "examples": [
                {
                  "jp": "インドネシア から きました。",
                  "id": "Saya berasal dari Indonesia.",
                  "rd": "インドネシア から きました。"
                }
              ],
              "tabel": [
                {
                  "k": "インドネシアからきました",
                  "v": "saya berasal dari Indonesia"
                },
                {
                  "k": "インドネシアからです",
                  "v": "saya dari Indonesia (lebih singkat)"
                }
              ]
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Perkenalan",
          "lines": [
            {
              "sp": "A",
              "jp": "はじめまして。わたしは アニ です。",
              "id": "Senang bertemu denganmu. Saya Ani."
            },
            {
              "sp": "B",
              "jp": "はじめまして。わたしは たなか です。",
              "id": "Senang bertemu denganmu. Saya Tanaka."
            },
            {
              "sp": "A",
              "jp": "インドネシア から きました。",
              "id": "Saya berasal dari Indonesia."
            },
            {
              "sp": "B",
              "jp": "そうですか。よろしくおねがいします。",
              "id": "Oh begitu. Mohon bantuannya."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "Apa arti \"はじめまして\"?",
          "o": [
            "Selamat tinggal",
            "Senang bertemu denganmu",
            "Terima kasih",
            "Selamat pagi"
          ],
          "a": 1,
          "explain": "\"はじめまして\" diucapkan saat pertama kali bertemu seseorang."
        },
        {
          "q": "Mana yang merupakan salam \"selamat malam\"?",
          "o": [
            "おはよう",
            "こんにちは",
            "こんばんは",
            "さようなら"
          ],
          "a": 2,
          "explain": "\"こんばんは\" (konbanwa) dipakai saat bertemu di malam hari."
        },
        {
          "q": "Partikel は dalam \"わたしは ブディ です\" dibaca…",
          "o": [
            "ha",
            "wa",
            "ho",
            "wo"
          ],
          "a": 1,
          "explain": "Partikel は selalu dibaca \"wa\" meski ditulis \"ha\"."
        },
        {
          "q": "Apa fungsi です dalam kalimat?",
          "o": [
            "Kata kerja \"pergi\"",
            "Kopula sopan seperti \"adalah\"",
            "Partikel topik",
            "Kata sifat"
          ],
          "a": 1,
          "explain": "です adalah kopula (penghubung) versi sopan, setara \"adalah\"."
        },
        {
          "q": "\"インドネシア から きました\" artinya…",
          "o": [
            "Saya pergi ke Indonesia",
            "Saya berasal dari Indonesia",
            "Saya tinggal di Indonesia",
            "Saya suka Indonesia"
          ],
          "a": 1,
          "explain": "から = dari, きました = telah datang (bentuk lampau sopan)."
        },
        {
          "q": "Kapan mengucapkan \"よろしくおねがいします\"?",
          "o": [
            "Saat marah",
            "Sebagai penutup perkenalan",
            "Saat makan",
            "Saat tidur"
          ],
          "a": 1,
          "explain": "Diucapkan di akhir perkenalan sebagai \"mohon bantuannya\"."
        },
        {
          "q": "Bentuk formal dari \"ありがとう\" adalah…",
          "o": [
            "ありがとうございます",
            "どうも",
            "すみません",
            "おねがいします"
          ],
          "a": 0,
          "explain": "ございます membuat ucapan lebih sopan/formal."
        },
        {
          "q": "\"すみません\" TIDAK bisa dipakai untuk…",
          "o": [
            "Minta maaf",
            "Memanggil pelayan",
            "Permisi lewat",
            "Mengucapkan terima kasih"
          ],
          "a": 3,
          "explain": "すみません = maaf/permisi, bukan terima kasih."
        },
        {
          "q": "Lengkapi: わたしは がくせい ___。",
          "o": [
            "です",
            "ます",
            "は",
            "か"
          ],
          "a": 0,
          "explain": "Pola: [kata benda] です untuk menyatakan \"adalah\" secara sopan."
        },
        {
          "q": "Mana pasangan salam yang TEPAT untuk pagi hari?",
          "o": [
            "こんばんは",
            "おはようございます",
            "おやすみなさい",
            "さようなら"
          ],
          "a": 1,
          "explain": "おはようございます adalah versi formal \"selamat pagi\"."
        }
      ]
    },
    {
      "id": "n5-2",
      "bab": 2,
      "level": "n5",
      "title": "Angka, Waktu & Hari",
      "desc": "Menghitung 1–100, jam, menit, hari, tanggal, dan counter dasar",
      "icon": "🔢",
      "sections": [
        {
          "type": "penjelasan",
          "title": "Rahasia Bacaan Angka yang Berubah",
          "body": "Angka 1–10 wajib hafal mati dulu: <b>いち・に・さん・し・ご・ろく・しち・はち・きゅう・じゅう</b>. Setelah itu polanya sangat logis: 11 = じゅういち (10+1), 20 = にじゅう (2×10), 35 = さんじゅうご. Sampai 99 tidak ada kejutan.\n\nTapi awas, ada <b>lima angka nakal</b> yang bacaannya berubah: <b>300</b> bukan さんひゃく melainkan <b>さんびゃく</b>, <b>600</b> = <b>ろっぴゃく</b>, <b>800</b> = <b>はっぴゃく</b>, <b>3000</b> = <b>さんぜん</b>, dan <b>8000</b> = <b>はっせん</b>.\n\n<b>Kenapa berubah?</b> Ini soal kemudahan lidah — さんひゃく terdengar \"kaku\", sedangkan さんびゃく mengalir. Polanya: ひゃく→<b>びゃく/ぴゃく</b> dan せん→<b>ぜん/っせん</b> setelah angka 3 dan 8. <b>Tips:</b> cukup hafalkan lima yang spesial ini, sisanya 100% ikut pola normal. <b>Jebakan umum:</b> 90% pemula salah baca 800 sebagai はちひゃく — jangan jadi salah satunya!"
        },
        {
          "type": "penjelasan",
          "title": "Jam, Menit & Tanggal: Jangan Asal Tebak",
          "body": "Jam memakai akhiran <b>〜じ</b>, tapi tiga jam ini spesial: 4時 = <b>よじ</b> (bukan よんじ!), 7時 = <b>しちじ</b>, 9時 = <b>くじ</b>. Menit memakai <b>〜ふん</b> yang sering berubah jadi <b>ぷん</b>: 1分 = <b>いっぷん</b>, 3分 = <b>さんぷん</b>, 6分 = <b>ろっぷん</b>, 8分 = <b>はっぷん</b>, 10分 = <b>じゅっぷん</b>.\n\nTanggal pun punya yang spesial: tanggal 1 = <b>ついたち</b>, 14 = <b>じゅうよっか</b>, 20 = <b>はつか</b>, 24 = <b>にじゅうよっか</b>. Sisanya ikut pola 〜か/にち yang normal (ふつか, みっか, よっか…).\n\n<b>Metode hafal:</b> jangan hafal satu per satu! Kelompokkan yang spesial saja — jam spesial cuma 4, 7, 9; menit spesial cuma 1, 3, 6, 8, 10; tanggal spesial cuma 1, 14, 20, 24. <b>Jebakan umum:</b> membaca 4時 sebagai よんじ atau 7分 sebagai ななふん adalah tanda paling jelas kamu masih pemula — kuasai yang spesial ini dan kamu langsung terdengar beda!"
        },
        {
          "type": "kotoba",
          "title": "Kosakata Waktu",
          "items": [
            {
              "jp": "いま",
              "kj": "今",
              "r": "ima",
              "id": "sekarang",
              "note": "Dipakai sebelum jam: いま3じです"
            },
            {
              "jp": "きょう",
              "kj": "今日",
              "r": "kyou",
              "id": "hari ini",
              "note": "Jangan tertukar dengan きのう!"
            },
            {
              "jp": "あした",
              "kj": "明日",
              "r": "ashita",
              "id": "besok",
              "note": "Versi formal: あす"
            },
            {
              "jp": "きのう",
              "kj": "昨日",
              "r": "kinou",
              "id": "kemarin",
              "note": "Bacaan kun, bukan さくじつ (formal)"
            },
            {
              "jp": "あさ",
              "kj": "朝",
              "r": "asa",
              "id": "pagi",
              "note": "Lawan kata: ばん (malam)"
            },
            {
              "jp": "ひる",
              "kj": "昼",
              "r": "hiru",
              "id": "siang",
              "note": "ひるごはん = makan siang"
            },
            {
              "jp": "ばん",
              "kj": "晩",
              "r": "ban",
              "id": "malam (waktu)",
              "note": "ばんごはん = makan malam"
            },
            {
              "jp": "よる",
              "kj": "夜",
              "r": "yoru",
              "id": "malam hari",
              "note": "Nuansa lebih gelap/larut dari ばん"
            },
            {
              "jp": "ごぜん",
              "kj": "午前",
              "r": "gozen",
              "id": "pagi hari (AM)",
              "note": "ごぜん9じ = jam 9 pagi"
            },
            {
              "jp": "ごご",
              "kj": "午後",
              "r": "gogo",
              "id": "siang/sore (PM)",
              "note": "ごご3じ = jam 3 sore"
            },
            {
              "jp": "まいにち",
              "kj": "毎日",
              "r": "mainichi",
              "id": "setiap hari",
              "note": "まい = setiap: まいあさ, まいばん"
            },
            {
              "jp": "はん",
              "kj": "半",
              "r": "han",
              "id": "setengah",
              "note": "3じはん = jam 3:30"
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Pola Menghitung & Waktu",
          "items": [
            {
              "pattern": "[bilangan] + つ / にん / まい / ひき",
              "arti": "menghitung benda / orang / barang tipis / hewan kecil",
              "explain": "Bahasa Jepang punya <b>counter</b> — satuan hitung yang berbeda tergantung jenis bendanya. <b>〜つ</b> untuk benda kecil umum (pakai angka asli Jepang: ひとつ・ふたつ・みっつ). <b>〜にん</b> untuk orang: 3人 dibaca さんにん (pengecualiannya cuma ひとり・ふたり). <b>〜まい</b> untuk benda tipis seperti kertas, baju, dan piring. <b>〜ひき</b> untuk hewan kecil: 1匹 = いっぴき, 3匹 = さんびき, 6匹 = ろっぴき.",
              "examples": [
                {
                  "jp": "りんごを みっつ ください。",
                  "id": "Tolong 3 buah apel.",
                  "rd": "りんごお みっつ ください。"
                },
                {
                  "jp": "ねこが さんびき います。",
                  "id": "Ada 3 ekor kucing.",
                  "rd": "ねこが さんびき います。"
                }
              ],
              "tabel": [
                {
                  "k": "ひとつ・ふたつ・みっつ (～つ)",
                  "v": "buah (benda kecil umum)"
                },
                {
                  "k": "ひとり・ふたり・さんにん (～にん)",
                  "v": "orang"
                },
                {
                  "k": "いちまい・にまい (～まい)",
                  "v": "lembar (benda tipis: kertas, baju)"
                },
                {
                  "k": "いっぴき・にひき (～ひき)",
                  "v": "ekor (hewan kecil)"
                }
              ]
            },
            {
              "pattern": "いま [jam]じ [menit]ふん です",
              "arti": "Sekarang jam [jam] lebih [menit]",
              "explain": "Ini pola standar untuk menyebut jam. Hafalkan bacaan spesialnya: 4時 = よじ, 7時 = しちじ, 9時 = くじ. Untuk menit 30, orang Jepang lebih sering bilang <b>〜はん</b> (setengah) daripada さんじゅっぷん.",
              "examples": [
                {
                  "jp": "いま 3じです。",
                  "id": "Sekarang jam 3.",
                  "rd": "いま さんじです。"
                },
                {
                  "jp": "いま 7じはんです。",
                  "id": "Sekarang jam setengah 8 (7:30).",
                  "rd": "いま しちじはんです。"
                }
              ],
              "tabel": [
                {
                  "k": "4じ → よじ",
                  "v": "jam 4 (bacaan khusus)"
                },
                {
                  "k": "7じ → しちじ",
                  "v": "jam 7 (bacaan khusus)"
                },
                {
                  "k": "9じ → くじ",
                  "v": "jam 9 (bacaan khusus)"
                },
                {
                  "k": "～はん (7じはん)",
                  "v": "setengah / lewat 30 menit"
                }
              ]
            },
            {
              "pattern": "[waktu] から [waktu] まで",
              "arti": "dari [waktu] sampai [waktu]",
              "explain": "<b>から</b> menandai titik awal, <b>まで</b> menandai titik akhir. Keduanya selalu dipakai berpasangan untuk menyatakan rentang — berlaku untuk waktu maupun tempat. Jangan tertukar dengan までに yang artinya \"paling lambat sebelum...\" — itu materi N4.",
              "examples": [
                {
                  "jp": "がっこうは 8じから 3じまで です。",
                  "id": "Sekolah dari jam 8 sampai jam 3.",
                  "rd": "がっこうわ はちじから さんじまで です。"
                },
                {
                  "jp": "9じから 5じまで はたらきます。",
                  "id": "Bekerja dari jam 9 sampai jam 5.",
                  "rd": "くじから ごじまで はたらきます。"
                }
              ],
              "tabel": [
                {
                  "k": "8じから",
                  "v": "dari jam 8 (titik awal)"
                },
                {
                  "k": "3じまで",
                  "v": "sampai jam 3 (titik akhir)"
                },
                {
                  "k": "8じから3じまで",
                  "v": "dari jam 8 sampai jam 3"
                }
              ]
            }
          ]
        },
        {
          "type": "kanji",
          "title": "Kanji Waktu",
          "items": [
            {
              "ch": "日",
              "kun": "ひ・び・か",
              "on": "ニチ・ジツ",
              "id": "hari; matahari; Jepang",
              "note": "Bacaan か dipakai di tanggal: みっか, はつか"
            },
            {
              "ch": "月",
              "kun": "つき",
              "on": "ゲツ・ガツ",
              "id": "bulan",
              "note": "ゲツ untuk nama bulan (さんがつ), ガツ khusus beberapa kata"
            },
            {
              "ch": "年",
              "kun": "とし",
              "on": "ネン",
              "id": "tahun",
              "note": "ことし (tahun ini), きょねん (tahun lalu)"
            },
            {
              "ch": "時",
              "kun": "とき",
              "on": "ジ",
              "id": "waktu; jam",
              "note": "Terdiri dari 日 + 寺. いまなんじ = jam berapa sekarang"
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Janjian Bertemu",
          "lines": [
            {
              "sp": "A",
              "jp": "すみません、いま なんじですか。",
              "id": "Permisi, sekarang jam berapa?"
            },
            {
              "sp": "B",
              "jp": "3じはんです。",
              "id": "Jam setengah 4 (3:30)."
            },
            {
              "sp": "A",
              "jp": "ありがとうございます。あした なんじに あいますか。",
              "id": "Terima kasih. Besok jam berapa kita bertemu?"
            },
            {
              "sp": "B",
              "jp": "ごぜん10じに えきで あいましょう。",
              "id": "Bertemu jam 10 pagi di stasiun."
            },
            {
              "sp": "A",
              "jp": "わかりました。じゃあ、あした！",
              "id": "Baik. Sampai besok!"
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "\"300\" dalam bahasa Jepang dibaca…",
          "o": [
            "さんひゃく",
            "さんびゃく",
            "さんぴゃく",
            "みつひゃく"
          ],
          "a": 1,
          "explain": "300 = さんびゃく. Bunyi ひゃく berubah jadi びゃく setelah さん."
        },
        {
          "q": "\"8000\" dibaca…",
          "o": [
            "はちせん",
            "はっせん",
            "はっぴゃくせん",
            "やっせん"
          ],
          "a": 1,
          "explain": "8000 = はっせん. Setelah はち, せん dibaca っせん."
        },
        {
          "q": "\"4時\" dibaca…",
          "o": [
            "よんじ",
            "よじ",
            "よっじ",
            "しじ"
          ],
          "a": 1,
          "explain": "4時 = よじ. Membaca よんじ adalah kesalahan klasik pemula!"
        },
        {
          "q": "\"1分\" dibaca…",
          "o": [
            "いちふん",
            "いっぷん",
            "いちぶん",
            "ひとふん"
          ],
          "a": 1,
          "explain": "1分 = いっぷん. ふん berubah jadi ぷん."
        },
        {
          "q": "\"6分\" dibaca…",
          "o": [
            "ろくふん",
            "ろっぷん",
            "むっふん",
            "ろくぷん"
          ],
          "a": 1,
          "explain": "6分 = ろっぷん. Hafalkan kelompok menit spesial: 1, 3, 6, 8, 10."
        },
        {
          "q": "\"3人\" (tiga orang) dibaca…",
          "o": [
            "みっつ",
            "さんにん",
            "さんびき",
            "みたり"
          ],
          "a": 1,
          "explain": "Orang memakai counter にん: 3人 = さんにん."
        },
        {
          "q": "\"Satu ekor kucing ada\" dalam bahasa Jepang…",
          "o": [
            "ねこいちひきいます",
            "いっぴきのねこいます",
            "ねこが いっぴき います",
            "いちひきねこがいます"
          ],
          "a": 2,
          "explain": "Hewan kecil memakai ひき: 1匹 = いっぴき. Pola: ねこが いっぴき います."
        },
        {
          "q": "Tanggal 20 dibaca…",
          "o": [
            "にじゅうにち",
            "はつか",
            "にじゅうか",
            "はたち"
          ],
          "a": 1,
          "explain": "Tanggal 20 spesial: はつか, bukan にじゅうにち."
        },
        {
          "q": "\"3じはん\" artinya…",
          "o": [
            "Jam 3 lewat",
            "Jam setengah 4 (3:30)",
            "Jam 4 kurang",
            "Jam 3 pagi"
          ],
          "a": 1,
          "explain": "はん = setengah. 3じはん = 3:30."
        },
        {
          "q": "\"Kemarin\" dalam bahasa Jepang…",
          "o": [
            "きょう",
            "あした",
            "きのう",
            "あさって"
          ],
          "a": 2,
          "explain": "きのう = kemarin. きょう = hari ini, あした = besok."
        }
      ]
    },
    {
      "id": "n5-3",
      "bab": 3,
      "level": "n5",
      "title": "Kata Benda & Partikel Dasar",
      "desc": "Partikel は・が・を・に・へ・で・の・と dan benda sehari-hari",
      "icon": "📦",
      "sections": [
        {
          "type": "penjelasan",
          "title": "は vs が — Duel Paling Membingungkan",
          "body": "<b>は</b> (dibaca \"wa\") menandai <b>topik</b> — hal yang sedang dibicarakan, info lama yang sudah diketahui. <b>が</b> menandai <b>subjek penekanan</b> — info baru, jawaban atas pertanyaan, atau penekanan \"YANG ini lho\". Bandingkan: わたしは ブディです (Saya Budi — perkenalan netral) vs わたしが ブディです (SAYA-lah Budi, bukan orang lain!).\n\nAturan praktisnya: kata tanya <b>だれ・なに・どこ</b> selalu dijawab dengan <b>が</b> (だれが きましたか → ブディが きました). Dan hafalkan mati: kata sifat <b>すき (suka), きらい (benci), ほしい (ingin), できる (bisa)</b> SELALU memakai が, bukan を! わたしは コーヒーが すきです — ini jebakan favorit soal JLPT.\n\n<b>Jebakan umum:</b> memakai が saat perkenalan diri terdengar seperti kamu sedang membela diri (\"Budi itu SAYA!\"). Untuk perkenalan netral, selalu pakai は. Sebaliknya, menjawab だれ dengan は terdengar aneh dan tidak natural."
        },
        {
          "type": "penjelasan",
          "title": "を・に・へ・で — Empat Serangkai",
          "body": "<b>を</b> menandai <b>objek</b> dari kata kerja: ごはんを たべます (makan nasi). <b>に</b> punya tiga wajah: <b>tujuan</b> (がっこうに いきます), <b>waktu pasti</b> (9じに おきます), dan <b>tempat keberadaan</b> (へやに います). <b>へ</b> khusus untuk <b>arah gerak</b> — bisa ditukar dengan に untuk いきます・きます・かえります, tapi へ terasa lebih puitis.\n\n<b>で</b> juga punya dua wajah: <b>tempat beraktivitas</b> (がっこうで べんきょうします) dan <b>sarana</b> (バスで いきます = naik bus). Inilah bedanya dengan に: <b>に = diam/ada</b> (へやに います = ada di kamar), <b>で = bergerak/beraksi</b> (へやで べんきょうします = belajar di kamar).\n\n<b>Jebakan umum:</b> 90% kesalahan pemula adalah tertukar に dan で untuk tempat. Triknya: tanya pada dirimu — \"apakah ada AKSI di sana?\" Kalau ya → で. Kalau hanya \"ada/tinggal\" → に. Ujian JLPT suka sekali menguji ini!"
        },
        {
          "type": "penjelasan",
          "title": "の dan と — Si Kecil Serbaguna",
          "body": "<b>の</b> menghubungkan dua kata benda dengan hubungan <b>milik / penjelas</b>: わたしの ほん (bukuku), にほんごの ほん (buku bahasa Jepang), きのうの よる (tadi malam). の bisa dirangkai panjang: わたしの ともだちの くるま (mobil temannya saya). Urutannya selalu <b>penjelas dulu, yang dijelaskan belakangan</b> — kebalikan dari bahasa Indonesia!\n\n<b>と</b> punya dua arti: <b>\"dan\"</b> untuk daftar benda (ほんと ペン = buku dan pulpen) dan <b>\"bersama/dengan\"</b> untuk orang (ともだちと いきます = pergi dengan teman). \n\n<b>Jebakan umum:</b> と HANYA untuk kata benda! Untuk menggabung kata kerja, bahasa Jepang memakai bentuk て (たべて、みて), bukan と. Dan ingat: daftar tiga benda atau lebih tetap pakai と di tiap sela (ほんと ペンと かばん) — tidak ada koma seperti bahasa Indonesia."
        },
        {
          "type": "kotoba",
          "title": "Benda Sehari-hari",
          "items": [
            {
              "jp": "つくえ",
              "kj": "机",
              "r": "tsukue",
              "id": "meja",
              "note": "Kanji 机 = meja"
            },
            {
              "jp": "いす",
              "kj": "椅子",
              "r": "isu",
              "id": "kursi",
              "note": "Hati-hati: すわる = duduk"
            },
            {
              "jp": "ほん",
              "kj": "本",
              "r": "hon",
              "id": "buku",
              "note": "Juga counter barang panjang: さんぼん"
            },
            {
              "jp": "かばん",
              "kj": "鞄",
              "r": "kaban",
              "id": "tas",
              "note": "かばんをもつ = membawa tas"
            },
            {
              "jp": "とけい",
              "kj": "時計",
              "r": "tokei",
              "id": "jam (dinding/tangan)",
              "note": "とけいをみる = melihat jam"
            },
            {
              "jp": "でんわ",
              "kj": "電話",
              "r": "denwa",
              "id": "telepon",
              "note": "でんわをかける = menelepon"
            },
            {
              "jp": "かぎ",
              "kj": "鍵",
              "r": "kagi",
              "id": "kunci",
              "note": "かぎをかける = mengunci"
            },
            {
              "jp": "かさ",
              "kj": "傘",
              "r": "kasa",
              "id": "payung",
              "note": "かさをさす = membuka payung"
            },
            {
              "jp": "くつ",
              "kj": "靴",
              "r": "kutsu",
              "id": "sepatu",
              "note": "くつをはく = memakai sepatu"
            },
            {
              "jp": "めがね",
              "kj": "眼鏡",
              "r": "megane",
              "id": "kacamata",
              "note": "Selalu jamak dalam bahasa Jepang"
            },
            {
              "jp": "さいふ",
              "kj": "財布",
              "r": "saifu",
              "id": "dompet",
              "note": "さいふをわすれる = lupa dompet"
            },
            {
              "jp": "しんぶん",
              "kj": "新聞",
              "r": "shinbun",
              "id": "koran",
              "note": "しんぶんをよむ = membaca koran"
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Pola Benda & Partikel",
          "items": [
            {
              "pattern": "これ / それ / あれ は [kata benda] です",
              "arti": "Ini / Itu adalah [kata benda]",
              "explain": "Ada tiga kata tunjuk berdasarkan jarak: <b>これ</b> = dekat dengan pembicara, <b>それ</b> = dekat dengan lawan bicara, <b>あれ</b> = jauh dari keduanya. Pola は〜です dipakai untuk membuat kalimat identifikasi yang sopan. Bentuk tanyanya: これ<b>は</b> なんですか (ini apa?).",
              "examples": [
                {
                  "jp": "これは ほんです。",
                  "id": "Ini adalah buku.",
                  "rd": "これわ ほんです。"
                },
                {
                  "jp": "あれは とけいです。",
                  "id": "Itu (di sana) adalah jam.",
                  "rd": "あれわ とけいです。"
                }
              ],
              "tabel": [
                {
                  "k": "これ",
                  "v": "ini (dekat saya)"
                },
                {
                  "k": "それ",
                  "v": "itu (dekat kamu)"
                },
                {
                  "k": "あれ",
                  "v": "itu (jauh dari kita berdua)"
                }
              ]
            },
            {
              "pattern": "[A] の [B]",
              "arti": "[B] milik / yang berkaitan dengan [A]",
              "explain": "<b>の</b> menempelkan penjelas (A) ke kata inti (B). Urutannya kebalikan dari bahasa Indonesia: \"buku saya\" menjadi わたしの ほん (harfiahnya \"saya-PUNYA buku\"). Pola ini juga bisa dipakai untuk asal (インドネシアの たべもの), bahan (きの つくえ), dan waktu (きのうの よる).",
              "examples": [
                {
                  "jp": "これは わたしの かばんです。",
                  "id": "Ini adalah tasku.",
                  "rd": "これわ わたしの かばんです。"
                },
                {
                  "jp": "たなかさんの くるまは あかいです。",
                  "id": "Mobil Tanaka berwarna merah.",
                  "rd": "たなかさんの くるまわ あかいです。"
                }
              ],
              "tabel": [
                {
                  "k": "わたしのほん",
                  "v": "bukuku (milik)"
                },
                {
                  "k": "インドネシアのたべもの",
                  "v": "makanan Indonesia (asal)"
                },
                {
                  "k": "きのつくえ",
                  "v": "meja kayu (bahan)"
                }
              ]
            },
            {
              "pattern": "[benda] を ください",
              "arti": "Tolong [benda] / Minta [benda]",
              "explain": "<b>ください</b> adalah cara sopan untuk meminta sesuatu — wajib hafal untuk belanja, pesan di restoran, dan urusan kantor. <b>を</b> menandai benda yang diminta. Versi kasualnya adalah ちょうだい, tapi jangan dipakai ke orang yang dihormati, ya!",
              "examples": [
                {
                  "jp": "みずを ください。",
                  "id": "Tolong air putih.",
                  "rd": "みずお ください。"
                },
                {
                  "jp": "このほんを ください。",
                  "id": "Tolong buku yang ini.",
                  "rd": "このほんお ください。"
                }
              ],
              "tabel": [
                {
                  "k": "～をください",
                  "v": "tolong... (sopan)"
                },
                {
                  "k": "～をちょうだい",
                  "v": "minta... (kasual, ke teman)"
                }
              ]
            }
          ]
        },
        {
          "type": "kanji",
          "title": "Kanji Benda",
          "items": [
            {
              "ch": "本",
              "kun": "もと",
              "on": "ホン",
              "id": "buku; asal",
              "note": "Awalnya gambar akar pohon = \"asal\". Counter barang panjang"
            },
            {
              "ch": "人",
              "kun": "ひと",
              "on": "ジン・ニン",
              "id": "orang",
              "note": "Bentuknya seperti orang membungkuk"
            },
            {
              "ch": "大",
              "kun": "おお(きい)",
              "on": "ダイ・タイ",
              "id": "besar",
              "note": "Orang merentangkan tangan = besar"
            },
            {
              "ch": "小",
              "kun": "ちい(さい)",
              "on": "ショウ",
              "id": "kecil",
              "note": "Kebalikan 大. しょうがっこう = SD"
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Di Toko",
          "lines": [
            {
              "sp": "A",
              "jp": "すみません、これは なんですか。",
              "id": "Permisi, ini apa?"
            },
            {
              "sp": "B",
              "jp": "それは とけいです。",
              "id": "Itu jam."
            },
            {
              "sp": "A",
              "jp": "わたしの とけいですか。",
              "id": "Apakah itu jam saya?"
            },
            {
              "sp": "B",
              "jp": "はい、あなたの とけいです。",
              "id": "Ya, itu jam Anda."
            },
            {
              "sp": "A",
              "jp": "ありがとうございます。",
              "id": "Terima kasih banyak."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "Lengkapi: わたし___ブディです。(perkenalan)",
          "o": [
            "が",
            "は",
            "を",
            "に"
          ],
          "a": 1,
          "explain": "Perkenalan netral memakai は. Memakai が terdengar seperti penekanan \"SAYA-lah Budi!\"."
        },
        {
          "q": "Benda yang dekat dengan lawan bicara disebut…",
          "o": [
            "これ",
            "それ",
            "あれ",
            "どれ"
          ],
          "a": 1,
          "explain": "これ = dekat saya, それ = dekat lawan bicara, あれ = jauh dari keduanya."
        },
        {
          "q": "\"Buku saya\" dalam bahasa Jepang…",
          "o": [
            "わたしとほん",
            "わたしのほん",
            "わたしはほん",
            "わたしがほん"
          ],
          "a": 1,
          "explain": "の menghubungkan pemilik dan benda: わたしのほん."
        },
        {
          "q": "Lengkapi: みず___ください。",
          "o": [
            "が",
            "は",
            "を",
            "に"
          ],
          "a": 2,
          "explain": "ください (tolong beri) memakai を untuk benda yang diminta."
        },
        {
          "q": "Partikel yang tepat: わたしは コーヒー___すきです。",
          "o": [
            "を",
            "が",
            "に",
            "で"
          ],
          "a": 1,
          "explain": "Jebakan! Kata sifat seperti すき・きらい・ほしい SELALU memakai が, bukan を."
        },
        {
          "q": "\"Buku dan pulpen\" dalam bahasa Jepang…",
          "o": [
            "ほんのペン",
            "ほんとペン",
            "ほんはペン",
            "ほんがペン"
          ],
          "a": 1,
          "explain": "と menghubungkan kata benda dengan arti \"dan\"."
        },
        {
          "q": "Lengkapi: がっこう___べんきょうします。(belajar DI sekolah)",
          "o": [
            "に",
            "で",
            "へ",
            "を"
          ],
          "a": 1,
          "explain": "で = tempat melakukan aksi. に untuk tempat keberadaan (diam)."
        },
        {
          "q": "Lengkapi: バス___いきます。(pergi NAIK bus)",
          "o": [
            "に",
            "へ",
            "で",
            "を"
          ],
          "a": 2,
          "explain": "で juga berarti \"dengan/naik\": バスで = naik bus."
        },
        {
          "q": "Lengkapi: だれ___きましたか。(SIAPA yang datang?)",
          "o": [
            "は",
            "が",
            "を",
            "に"
          ],
          "a": 1,
          "explain": "Kata tanya だれ・なに・どこ memakai が karena menanyakan informasi baru."
        },
        {
          "q": "Mana yang BENAR untuk \"jam milik Tanaka\"?",
          "o": [
            "たなかのとけい",
            "たなかととけい",
            "たなかはとけい",
            "たなかがとけい"
          ],
          "a": 0,
          "explain": "Kepemilikan memakai の: たなかのとけい."
        }
      ]
    },
    {
      "id": "n5-4",
      "bab": 4,
      "level": "n5",
      "title": "Kata Kerja Dasar",
      "desc": "Bentuk masu, partikel aktivitas, dan kosakata kerja sehari-hari",
      "icon": "🏃",
      "sections": [
        {
          "type": "penjelasan",
          "title": "Bentuk MASU — Satu Pola, Empat Waktu",
          "body": "Kata kerja sopan bahasa Jepang memakai akhiran <b>ます</b>. Kabar baiknya: cukup kuasai SATU pola perubahan untuk semua waktu! <b>たべます</b> (makan, sekarang/akan datang) → <b>たべません</b> (tidak makan) → <b>たべました</b> (sudah makan) → <b>たべませんでした</b> (tidak makan — lampau). Empat bentuk, satu pola!\n\nKata kerja Jepang ada tiga golongan: <b>godan</b> (akhiran u: かく→かきます), <b>ichidan</b> (akhiran -eru/-iru: たべる→たべます), dan dua anak nakal <b>します</b> (melakukan) & <b>きます</b> (datang). Untuk N5, kamu belum perlu menghafal golongan — cukup ingat bentuk masu-nya.\n\n<b>Jebakan umum:</b> ます BUKAN cuma untuk masa kini — たべます juga berarti \"akan makan\". Waktu ditentukan konteks/kata keterangan (あした たべます = besok akan makan). Dan jangan campur: たべないます itu SALAH TOTAL — negatif sopan selalu ません!"
        },
        {
          "type": "penjelasan",
          "title": "を・に・へ・で untuk Aktivitas",
          "body": "Empat partikel ini adalah \"bumbu\" setiap kalimat kerja. <b>を</b> menandai <b>objek</b>: ごはんを たべます (makan nasi), ほんを よみます (membaca buku). <b>に</b> menandai <b>target/tujuan</b>: ともだちに あいます (bertemu teman), 9じに おきます (bangun jam 9).\n\n<b>へ</b> khusus untuk <b>arah gerak</b> bersama いきます・きます・かえります: がっこうへ いきます. Bedanya dengan に? Hampir sama, tapi へ terasa lebih \"ke arah sana\" dan puitis. <b>で</b> menandai <b>tempat beraktivitas</b>: としょかんで べんきょうします (belajar DI perpustakaan).\n\n<b>Jebakan umum:</b> inilah pasangan paling sering tertukar! Ingat mantra: <b>に = diam</b> (へやに います = ada di kamar), <b>で = aksi</b> (へやで ねます = tidur di kamar). Kalau kalimatmu ada kata kerja aktivitas (makan, belajar, bekerja) di suatu tempat → pakai で, titik!"
        },
        {
          "type": "kotoba",
          "title": "Kata Kerja Sehari-hari",
          "items": [
            {
              "jp": "たべます",
              "r": "tabemasu",
              "id": "makan",
              "note": "Bentuk kamus: たべる (ichidan)"
            },
            {
              "jp": "のみます",
              "r": "nomimasu",
              "id": "minum",
              "note": "Bentuk kamus: のむ (godan). Kanji: 飲"
            },
            {
              "jp": "いきます",
              "r": "ikimasu",
              "id": "pergi",
              "note": "Bentuk kamus: いく. Pasangan: きます (datang)"
            },
            {
              "jp": "きます",
              "r": "kimasu",
              "id": "datang",
              "note": "Kata kerja tak beraturan! Bentuk kamus: くる"
            },
            {
              "jp": "かえります",
              "r": "kaerimasu",
              "id": "pulang",
              "note": "Bentuk kamus: かえる. Selalu pakai へ/に"
            },
            {
              "jp": "みます",
              "r": "mimasu",
              "id": "melihat",
              "note": "Bentuk kamus: みる (ichidan). えいがをみます"
            },
            {
              "jp": "ききます",
              "r": "kikimasu",
              "id": "mendengar",
              "note": "Bentuk kamus: きく. Juga berarti \"bertanya\""
            },
            {
              "jp": "はなします",
              "r": "hanashimasu",
              "id": "berbicara",
              "note": "Bentuk kamus: はなす. にほんごをはなします"
            },
            {
              "jp": "よみます",
              "r": "yomimasu",
              "id": "membaca",
              "note": "Bentuk kamus: よむ (godan). Kanji: 読"
            },
            {
              "jp": "かきます",
              "r": "kakimasu",
              "id": "menulis",
              "note": "Bentuk kamus: かく (godan). Juga berarti \"menggambar\""
            },
            {
              "jp": "かいます",
              "r": "kaimasu",
              "id": "membeli",
              "note": "Bentuk kamus: かう (godan). Waspada bunyi: かいます"
            },
            {
              "jp": "します",
              "r": "shimasu",
              "id": "melakukan",
              "note": "Tak beraturan! べんきょうします = belajar"
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Pola Kalimat Aktivitas",
          "items": [
            {
              "pattern": "[benda] を [kata kerja]-ます",
              "arti": "me-[kerja] [benda]",
              "explain": "Ini pola yang paling sering dipakai! <b>を</b> menandai apa yang dikenai aksi — objeknya. Urutan bahasa Jepang selalu: <b>subjek - objek - kata kerja</b> (kata kerja SELALU di akhir!). Bandingkan: \"Saya makan nasi\" menjadi わたしは ごはんを たべます.",
              "examples": [
                {
                  "jp": "わたしは ごはんを たべます。",
                  "id": "Saya makan nasi.",
                  "rd": "わたしわ ごはんお たべます。"
                },
                {
                  "jp": "まいばん ほんを よみます。",
                  "id": "Setiap malam membaca buku.",
                  "rd": "まいばん ほんお よみます。"
                }
              ]
            },
            {
              "pattern": "[tempat] へ / に いきます・きます・かえります",
              "arti": "pergi / datang / pulang ke [tempat]",
              "explain": "Tiga kata kerja gerak ini memakai <b>へ</b> atau <b>に</b> untuk menyatakan tujuan — dan keduanya benar! <b>へ</b> menekankan arah (\"ke arah\"), sedangkan <b>に</b> menekankan titik tibanya. Untuk level N5, pakai yang mana saja tidak masalah; JLPT menerima keduanya.",
              "examples": [
                {
                  "jp": "あした がっこうへ いきます。",
                  "id": "Besok pergi ke sekolah.",
                  "rd": "あした がっこうえ いきます。"
                },
                {
                  "jp": "うちに かえります。",
                  "id": "Pulang ke rumah.",
                  "rd": "うちに かえります。"
                }
              ],
              "tabel": [
                {
                  "k": "～へいきます",
                  "v": "pergi ke..."
                },
                {
                  "k": "～へきます",
                  "v": "datang ke..."
                },
                {
                  "k": "～へかえります",
                  "v": "pulang ke..."
                }
              ]
            },
            {
              "pattern": "[tempat] で [aktivitas] します",
              "arti": "melakukan [aktivitas] di [tempat]",
              "explain": "<b>で</b> menandai tempat di mana sebuah aksi terjadi. Kuncinya: harus ada KATA KERJA AKSI — belajar, makan, bekerja, bermain. Kalau kalimatnya hanya menyatakan \"ada\" atau \"tinggal\", pakai に, bukan で! Pola します ini serbaguna: べんきょうします, しごとを します, さんぽを します.",
              "examples": [
                {
                  "jp": "としょかんで べんきょうします。",
                  "id": "Belajar di perpustakaan.",
                  "rd": "としょかんで べんきょうします。"
                },
                {
                  "jp": "レストランで ひるごはんを たべます。",
                  "id": "Makan siang di restoran.",
                  "rd": "レストランで ひるごはんお たべます。"
                }
              ],
              "tabel": [
                {
                  "k": "～で＋kata kerja aksi",
                  "v": "di... (melakukan sesuatu: belajar, makan)"
                },
                {
                  "k": "～に＋いる/ある",
                  "v": "di... (hanya ada/tinggal, tanpa aksi)"
                }
              ]
            }
          ]
        },
        {
          "type": "kanji",
          "title": "Kanji Aktivitas",
          "items": [
            {
              "ch": "食",
              "kun": "た(べる)",
              "on": "ショク",
              "id": "makan",
              "note": "Ada di: しょくじ (makanan), たべもの"
            },
            {
              "ch": "飲",
              "kun": "の(む)",
              "on": "イン",
              "id": "minum",
              "note": "Ada di: いんりょう (minuman)"
            },
            {
              "ch": "見",
              "kun": "み(る)",
              "on": "ケン",
              "id": "melihat",
              "note": "Ada di: けんぶつ (jalan-jalan/melihat-lihat)"
            },
            {
              "ch": "行",
              "kun": "い(く)・ゆ(く)",
              "on": "コウ・ギョウ",
              "id": "pergi",
              "note": "Bacaan ゆく lebih puitis/formal"
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Rencana Akhir Pekan",
          "lines": [
            {
              "sp": "A",
              "jp": "しゅうまつは なにを しますか。",
              "id": "Akhir pekan mau ngapain?"
            },
            {
              "sp": "B",
              "jp": "ともだちと えいがを みます。",
              "id": "Nonton film sama teman."
            },
            {
              "sp": "A",
              "jp": "どこで みますか。",
              "id": "Nonton di mana?"
            },
            {
              "sp": "B",
              "jp": "しぶやで みます。いっしょに いきませんか。",
              "id": "Di Shibuya. Mau ikut pergi?"
            },
            {
              "sp": "A",
              "jp": "いいですね。いきましょう！",
              "id": "Boleh tuh. Ayo pergi!"
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "Bentuk negatif dari たべます…",
          "o": [
            "たべますない",
            "たべません",
            "たべないます",
            "たべまない"
          ],
          "a": 1,
          "explain": "ます → ません untuk negatif sopan. たべないます adalah kesalahan fatal!"
        },
        {
          "q": "Bentuk lampau dari のみます…",
          "o": [
            "のみました",
            "のみますた",
            "のんだます",
            "のみましだ"
          ],
          "a": 0,
          "explain": "ます → ました untuk lampau sopan."
        },
        {
          "q": "\"Tidak pergi\" (lampau): いきます → …",
          "o": [
            "いきません",
            "いきませんでした",
            "いきましたない",
            "いかなかったです"
          ],
          "a": 1,
          "explain": "Lampau negatif sopan: ませんでした."
        },
        {
          "q": "Lengkapi: ごはん___たべます。",
          "o": [
            "が",
            "を",
            "に",
            "で"
          ],
          "a": 1,
          "explain": "を menandai objek dari kata kerja."
        },
        {
          "q": "Lengkapi: がっこう___いきます。",
          "o": [
            "を",
            "で",
            "へ",
            "が"
          ],
          "a": 2,
          "explain": "へ/に untuk arah tujuan. へ lebih bernuansa \"ke arah sana\"."
        },
        {
          "q": "Lengkapi: としょかんで ほん___よみます。",
          "o": [
            "が",
            "を",
            "に",
            "へ"
          ],
          "a": 1,
          "explain": "Objek bacaan memakai を."
        },
        {
          "q": "Lengkapi: としょかん___べんきょうします。(belajar DI perpustakaan)",
          "o": [
            "に",
            "で",
            "を",
            "が"
          ],
          "a": 1,
          "explain": "で = tempat beraktivitas. Jangan tertukar dengan に (keberadaan)!"
        },
        {
          "q": "\"かえります\" artinya…",
          "o": [
            "pergi",
            "datang",
            "pulang",
            "berlari"
          ],
          "a": 2,
          "explain": "かえります = pulang (ke rumah)."
        },
        {
          "q": "Pilih kalimat yang BENAR untuk \"Kemarin menonton film\"…",
          "o": [
            "きのう えいがを みます",
            "きのう えいがを みました",
            "あした えいがを みました",
            "きのう えいがが みます"
          ],
          "a": 1,
          "explain": "きのう (kemarin) butuh bentuk lampau: みました."
        },
        {
          "q": "Lengkapi: ともだち___あいます。(bertemu DENGAN teman)",
          "o": [
            "を",
            "に",
            "で",
            "が"
          ],
          "a": 1,
          "explain": "あいます memakai に untuk orang yang ditemui."
        }
      ]
    },
    {
      "id": "n5-5",
      "bab": 5,
      "level": "n5",
      "title": "Kata Sifat: い vs な",
      "desc": "Bedakan i-adjective dan na-adjective + konjugasinya",
      "icon": "✨",
      "sections": [
        {
          "type": "penjelasan",
          "title": "Dua Wajah Kata Sifat Jepang",
          "body": "Bahasa Jepang punya <b>dua jenis kata sifat</b> dengan aturan yang beda total: <b>i-adjective</b> (berakhiran い, mis. たかい) dan <b>na-adjective</b> (mis. しずか). Salah mengira jenisnya = kalimatmu salah total. Contoh fatal: bilang \"きれいい\" (salah!) padahal harusnya \"きれいな\".\n\n<b>Metode:</b> setiap hafal kata sifat baru, langsung tandai jenisnya: [i] atau [na]. Pada i-adjective, huruf い-nya itu \"hidup\" — ikut berubah saat konjugasi (たかい → たかくない). Pada na-adjective, い-nya \"mati\" — jangan diutak-atik. <b>Jebakan paling terkenal:</b> きれい・ゆうめい・べんり berakhiran い tapi na-adjective! Tes cepat: coba buang い-nya — kalau sisanya terdengar aneh (きれ?), berarti itu na-adjective."
        },
        {
          "type": "penjelasan",
          "title": "Rumus Konjugasi Anti-Hafal Mati",
          "body": "Jangan hafal satu per satu — pakai <b>rumus</b> ini:\n\n<b>i-adjective:</b> negatif = buang い + くない (たかい → たかくない) | lampau = buang い + かった (たかい → たかかった) | lampau negatif = buang い + くなかった (たかい → たかくなかった).\n\n<b>na-adjective:</b> negatif = tambah じゃない (しずか → しずかじゃない) | lampau = tambah だった (しずか → しずかだった) | lampau negatif = tambah じゃなかった. Versi formal: ganti じゃない → ではありません, だった → でした.\n\n<b>Tips masa depan:</b> tai-form (ingin…) di Bab 6 berkonjugasi <b>persis seperti i-adjective</b>. Kuasai pola ini sekarang, nanti tinggal pakai ulang!"
        },
        {
          "type": "kotoba",
          "title": "Kosakata Kata Sifat",
          "items": [
            {
              "jp": "たかい",
              "r": "takai",
              "id": "mahal / tinggi",
              "note": "[i] Lawan kata: やすい"
            },
            {
              "jp": "やすい",
              "r": "yasui",
              "id": "murah",
              "note": "[i] Kanji: 安"
            },
            {
              "jp": "おおきい",
              "r": "ookii",
              "id": "besar",
              "note": "[i] Kanji: 大"
            },
            {
              "jp": "ちいさい",
              "r": "chiisai",
              "id": "kecil",
              "note": "[i] Kanji: 小"
            },
            {
              "jp": "あたらしい",
              "r": "atarashii",
              "id": "baru",
              "note": "[i] Kanji: 新"
            },
            {
              "jp": "おいしい",
              "r": "oishii",
              "id": "enak (makanan)",
              "note": "[i]"
            },
            {
              "jp": "むずかしい",
              "r": "muzukashii",
              "id": "sulit",
              "note": "[i] Lawan kata: やさしい"
            },
            {
              "jp": "さむい",
              "r": "samui",
              "id": "dingin (cuaca)",
              "note": "[i] Beda dengan つめたい (dingin saat disentuh)"
            },
            {
              "jp": "たのしい",
              "r": "tanoshii",
              "id": "menyenangkan",
              "note": "[i]"
            },
            {
              "jp": "きれい",
              "r": "kirei",
              "id": "cantik / bersih",
              "note": "[na] JEBAKAN: berakhiran い tapi na-adjective!"
            },
            {
              "jp": "しずか",
              "r": "shizuka",
              "id": "sepi / tenang",
              "note": "[na]"
            },
            {
              "jp": "ゆうめい",
              "r": "yuumei",
              "id": "terkenal",
              "note": "[na] Berakhiran い tapi na-adjective!"
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Pola Kata Sifat",
          "items": [
            {
              "pattern": "とても + kata sifat",
              "arti": "sangat…",
              "explain": "<b>とても</b> hanya dipakai untuk kalimat <b>positif</b> — artinya \"sangat\". Jangan pernah memakainya untuk kalimat negatif!",
              "examples": [
                {
                  "jp": "このケーキは とても おいしいです。",
                  "id": "Kue ini sangat enak.",
                  "rd": "このケーキわ とても おいしいです。"
                },
                {
                  "jp": "富士山は とても たかいです。",
                  "id": "Gunung Fuji sangat tinggi.",
                  "rd": "ふじさんわ とても たかいです。"
                }
              ]
            },
            {
              "pattern": "あまり + kata sifat (negatif)",
              "arti": "tidak terlalu…",
              "explain": "<b>あまり</b> WAJIB diikuti bentuk negatif — keduanya pasangan yang tidak bisa dipisahkan. Artinya \"tidak terlalu...\".",
              "examples": [
                {
                  "jp": "このテストは あまり むずかしくないです。",
                  "id": "Tes ini tidak terlalu sulit.",
                  "rd": "このテストわ あまり むずかしくないです。"
                },
                {
                  "jp": "きょうは あまり さむくないです。",
                  "id": "Hari ini tidak terlalu dingin.",
                  "rd": "きょうわ あまり さむくないです。"
                }
              ],
              "tabel": [
                {
                  "k": "あまり～ない",
                  "v": "tidak terlalu... / jarang..."
                },
                {
                  "k": "ぜんぜん～ない",
                  "v": "sama sekali tidak..."
                }
              ]
            },
            {
              "pattern": "na-adjective + な + kata benda",
              "arti": "kata benda yang…",
              "explain": "Kata sifat-na butuh <b>な</b> sebelum kata benda. Jebakannya: きれい dan ゆうめい ikut aturan ini meski berakhiran い!",
              "examples": [
                {
                  "jp": "きれいな はなです。",
                  "id": "Ini bunga yang cantik.",
                  "rd": "きれいな はなです。"
                },
                {
                  "jp": "ゆうめいな ひとです。",
                  "id": "Dia orang yang terkenal.",
                  "rd": "ゆうめいな ひとです。"
                }
              ],
              "tabel": [
                {
                  "k": "きれい＋な＋はな",
                  "v": "bunga yang cantik (na-adj pakai な)"
                },
                {
                  "k": "あかい＋くるま",
                  "v": "mobil merah (i-adj langsung, tanpa な)"
                }
              ]
            }
          ]
        },
        {
          "type": "kanji",
          "title": "Kanji Kata Sifat",
          "items": [
            {
              "ch": "高",
              "kun": "たか-い",
              "on": "こう",
              "id": "tinggi / mahal",
              "note": "たかい = mahal"
            },
            {
              "ch": "安",
              "kun": "やす-い",
              "on": "あん",
              "id": "murah",
              "note": "Lawan kata 高"
            },
            {
              "ch": "大",
              "kun": "おお-きい",
              "on": "だい・たい",
              "id": "besar",
              "note": "おおきい = besar"
            },
            {
              "ch": "小",
              "kun": "ちい-さい",
              "on": "しょう",
              "id": "kecil",
              "note": "Lawan kata 大"
            },
            {
              "ch": "新",
              "kun": "あたら-しい",
              "on": "しん",
              "id": "baru",
              "note": "あたらしい = baru"
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Belanja",
          "lines": [
            {
              "sp": "A",
              "jp": "この かばんは いくらですか。",
              "id": "Tas ini berapa harganya?"
            },
            {
              "sp": "B",
              "jp": "5000円です。",
              "id": "5000 yen."
            },
            {
              "sp": "A",
              "jp": "たかいですね。もうすこし やすいのは ありますか。",
              "id": "Mahal ya. Apa ada yang lebih murah?"
            },
            {
              "sp": "B",
              "jp": "これを みてください。3000円です。",
              "id": "Silakan lihat ini. 3000 yen."
            },
            {
              "sp": "A",
              "jp": "とても きれいですね。これを ください。",
              "id": "Sangat cantik ya. Saya ambil yang ini."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "Manakah kata sifat-NA?",
          "o": [
            "たかい",
            "きれい",
            "さむい",
            "おいしい"
          ],
          "a": 1,
          "explain": "きれい berakhiran い tapi na-adjective — jebakan klasik!"
        },
        {
          "q": "Bentuk negatif dari たかい adalah…",
          "o": [
            "たかくない",
            "たかじゃない",
            "たかかった",
            "たかくなかった"
          ],
          "a": 0,
          "explain": "i-adjective: buang い → たか + くない."
        },
        {
          "q": "Bentuk lampau dari さむい adalah…",
          "o": [
            "さむくない",
            "さむかった",
            "さむいだった",
            "さむくなかった"
          ],
          "a": 1,
          "explain": "i-adjective lampau: buang い + かった → さむかった."
        },
        {
          "q": "Lengkapi: このみせは あまり ___.",
          "o": [
            "やすいです",
            "やすくないです",
            "やすかったです",
            "やすいじゃないです"
          ],
          "a": 1,
          "explain": "あまり WAJIB diikuti bentuk negatif → やすくないです."
        },
        {
          "q": "Kalimat yang SALAH adalah…",
          "o": [
            "とても おいしいです",
            "あまり たかくないです",
            "とても さむくないです",
            "きれいな はなです"
          ],
          "a": 2,
          "explain": "とても hanya untuk kalimat positif. Untuk negatif pakai あまり."
        },
        {
          "q": "Bunga yang cantik dalam bahasa Jepang…",
          "o": [
            "きれい はな",
            "きれいな はな",
            "きれいの はな",
            "きれいい はな"
          ],
          "a": 1,
          "explain": "na-adjective + kata benda memakai な → きれいな はな."
        },
        {
          "q": "Bentuk lampau negatif dari たのしい…",
          "o": [
            "たのしくなかった",
            "たのしかったない",
            "たのしくないだった",
            "たのしいなかった"
          ],
          "a": 0,
          "explain": "たのしい → たのしくない → たのしくなかった."
        },
        {
          "q": "Tas ini tidak terlalu mahal…",
          "o": [
            "このかばんは とても たかいです",
            "このかばんは あまり たかくないです",
            "このかばんは たかかったです",
            "このかばんは たかくないとてもです"
          ],
          "a": 1,
          "explain": "\"Tidak terlalu\" = あまり + bentuk negatif."
        },
        {
          "q": "Orang yang terkenal yang benar…",
          "o": [
            "ゆうめい ひと",
            "ゆうめいい ひと",
            "ゆうめいな ひと",
            "ゆうめいの ひと"
          ],
          "a": 2,
          "explain": "ゆうめい adalah na-adjective meski berakhiran い → ゆうめいな."
        },
        {
          "q": "Bentuk negatif sopan dari しずかだ…",
          "o": [
            "しずかくないです",
            "しずかじゃないです",
            "しずかなかったです",
            "しずかくありません"
          ],
          "a": 1,
          "explain": "na-adjective negatif: tambah じゃないです."
        }
      ]
    },
    {
      "id": "n5-6",
      "bab": 6,
      "level": "n5",
      "title": "Te-form, Tai-form, Nai-form",
      "desc": "Aturan perubahan kata kerja yang paling sering bikin bingung",
      "icon": "🔄",
      "sections": [
        {
          "type": "penjelasan",
          "title": "Kenapa Kata Kerja Berubah Bentuk?",
          "body": "Di bab sebelumnya kamu belajar bentuk ます (sopan). Sekarang tiga bentuk baru: <b>te-form</b> (untuk permintaan & menyambung kalimat), <b>tai-form</b> (menyatakan keinginan), dan <b>nai-form</b> (negatif kasual). Kabar baiknya: perubahannya <b>mengikuti bunyi</b>, bukan hafalan acak.\n\n<b>Metode:</b> kelompokkan kata kerja dari bentuk kamusnya. <b>Golongan 1</b> (berakhiran -u, mis. かく・のむ) berubah mengikuti huruf terakhirnya — hafalkan tabel 6 baris di bawah, maka ratusan kata kerja takluk. <b>Golongan 2</b> (berakhiran -る seperti たべる) gampang: tinggal buang る. Hanya <b>3 yang tak beraturan</b>: する・くる・いく."
        },
        {
          "type": "penjelasan",
          "title": "Tabel Te-form & Dua Pengecualian Maut",
          "body": "<b>Golongan 1:</b> う・つ・る → って (かう→かって) | む・ぶ・ぬ → んで (のむ→のんで) | く → いて (かく→かいて) | ぐ → いで (およぐ→およいで) | す → して (はなす→はなして). <b>Golongan 2:</b> buang る + て (たべる→たべて). <b>Tak beraturan:</b> する→して, くる→きて.\n\n<b>Pengecualian maut #1:</b> いく → <b>いって</b> (BUKAN いいて!). <b>#2:</b> nai-form dari ある adalah <b>ない</b> (bukan あらない!). Dua ini favorit keluar di ujian — jangan sampai terkecoh. <b>Tips:</b> ucapkan berulang: のんで・かって・まって — lidahmu akan hafal polanya lebih cepat dari otakmu."
        },
        {
          "type": "kotoba",
          "title": "Kosakata Kata Kerja",
          "items": [
            {
              "jp": "かう",
              "r": "kau",
              "id": "membeli",
              "note": "te: かって (katte)"
            },
            {
              "jp": "まつ",
              "r": "matsu",
              "id": "menunggu",
              "note": "te: まって (matte)"
            },
            {
              "jp": "とる",
              "r": "toru",
              "id": "mengambil",
              "note": "te: とって (totte)"
            },
            {
              "jp": "のむ",
              "r": "nomu",
              "id": "minum",
              "note": "te: のんで (nonde)"
            },
            {
              "jp": "あそぶ",
              "r": "asobu",
              "id": "bermain",
              "note": "te: あそんで (asonde)"
            },
            {
              "jp": "かく",
              "r": "kaku",
              "id": "menulis",
              "note": "te: かいて. tai: かきたい"
            },
            {
              "jp": "およぐ",
              "r": "oyogu",
              "id": "berenang",
              "note": "te: およいで (oyoide)"
            },
            {
              "jp": "はなす",
              "r": "hanasu",
              "id": "berbicara",
              "note": "te: はなして"
            },
            {
              "jp": "いく",
              "r": "iku",
              "id": "pergi",
              "note": "te: いって — pengecualian!"
            },
            {
              "jp": "たべる",
              "r": "taberu",
              "id": "makan",
              "note": "Golongan 2 → te: たべて, nai: たべない"
            },
            {
              "jp": "する",
              "r": "suru",
              "id": "melakukan",
              "note": "Tak beraturan → te: して, nai: しない"
            },
            {
              "jp": "くる",
              "r": "kuru",
              "id": "datang",
              "note": "Tak beraturan → te: きて, nai: こない"
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Pola Bentuk Kata Kerja",
          "items": [
            {
              "pattern": "[te-form] ください",
              "arti": "tolong…",
              "explain": "Cara sopan untuk meminta tolong: tempelkan <b>ください</b> setelah te-form. Pola ini sopan dipakai ke siapa pun.",
              "examples": [
                {
                  "jp": "ちょっと まってください。",
                  "id": "Tolong tunggu sebentar.",
                  "rd": "ちょっと まってください。"
                },
                {
                  "jp": "ゆっくり はなしてください。",
                  "id": "Tolong bicara pelan-pelan.",
                  "rd": "ゆっくり はなしてください。"
                }
              ],
              "tabel": [
                {
                  "k": "まってください",
                  "v": "tolong tunggu (sopan)"
                },
                {
                  "k": "まって",
                  "v": "tunggu (kasual)"
                }
              ]
            },
            {
              "pattern": "[kata kerja dasar] たいです",
              "arti": "ingin…",
              "explain": "<b>たい</b> ditempelkan ke stem kata kerja dan berkonjugasi seperti <b>i-adjective</b> (たべたい → たべたくない). Perhatikan juga: objek を sering berganti menjadi が.",
              "examples": [
                {
                  "jp": "すしが たべたいです。",
                  "id": "Saya ingin makan sushi.",
                  "rd": "すしが たべたいです。"
                },
                {
                  "jp": "にほんに いきたいです。",
                  "id": "Saya ingin pergi ke Jepang.",
                  "rd": "にほんに いきたいです。"
                }
              ],
              "tabel": [
                {
                  "k": "たべたいです",
                  "v": "ingin makan"
                },
                {
                  "k": "たべたくないです",
                  "v": "tidak ingin makan"
                },
                {
                  "k": "たべたかったです",
                  "v": "dulu ingin makan"
                }
              ]
            },
            {
              "pattern": "nai-form (kasual negatif)",
              "arti": "tidak… (kasual)",
              "explain": "Golongan 1: ubah akhiran -u menjadi -a, lalu tambah ない. Golongan 2: buang る, lalu tambah ない. Satu pengecualian yang wajib dihafal: ある → ない!",
              "examples": [
                {
                  "jp": "きょうは テレビを みない。",
                  "id": "Hari ini tidak nonton TV. (kasual)",
                  "rd": "きょうわ テレビお みない。"
                },
                {
                  "jp": "あしたは いかない。",
                  "id": "Besok tidak pergi. (kasual)",
                  "rd": "あしたわ いかない。"
                }
              ],
              "tabel": [
                {
                  "k": "かく→かかない",
                  "v": "golongan 1: ubah -u jadi -a + ない"
                },
                {
                  "k": "たべる→たべない",
                  "v": "golongan 2: buang る + ない"
                },
                {
                  "k": "する→しない / くる→こない",
                  "v": "kata kerja spesial"
                },
                {
                  "k": "ある→ない",
                  "v": "spesial: tidak ada bentuk あらない!"
                }
              ]
            }
          ]
        },
        {
          "type": "kanji",
          "title": "Kanji Kata Kerja",
          "items": [
            {
              "ch": "買",
              "kun": "か-う",
              "on": "ばい",
              "id": "membeli",
              "note": "かう = membeli"
            },
            {
              "ch": "待",
              "kun": "ま-つ",
              "on": "たい",
              "id": "menunggu",
              "note": "まつ = menunggu"
            },
            {
              "ch": "飲",
              "kun": "の-む",
              "on": "いん",
              "id": "minum",
              "note": "のむ = minum"
            },
            {
              "ch": "書",
              "kun": "か-く",
              "on": "しょ",
              "id": "menulis",
              "note": "かく = menulis"
            },
            {
              "ch": "話",
              "kun": "はな-す",
              "on": "わ",
              "id": "berbicara",
              "note": "はなす = berbicara"
            },
            {
              "ch": "行",
              "kun": "い-く",
              "on": "こう",
              "id": "pergi",
              "note": "いく → te: いって!"
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Membuat Rencana",
          "lines": [
            {
              "sp": "A",
              "jp": "日曜日は ひまですか。",
              "id": "Apakah hari Minggu senggang?"
            },
            {
              "sp": "B",
              "jp": "はい、ひまです。",
              "id": "Ya, senggang."
            },
            {
              "sp": "A",
              "jp": "えいがを みに いきたいです。いっしょに いきませんか。",
              "id": "Saya ingin menonton film. Mau pergi bersama?"
            },
            {
              "sp": "B",
              "jp": "いいですね。いきましょう。",
              "id": "Bagus. Ayo pergi."
            },
            {
              "sp": "A",
              "jp": "じゃあ、駅で まってください。",
              "id": "Kalau begitu, tolong tunggu di stasiun."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "Te-form dari のむ adalah…",
          "o": [
            "のいて",
            "のんで",
            "のみて",
            "のむて"
          ],
          "a": 1,
          "explain": "む・ぶ・ぬ → んで. のむ → のんで."
        },
        {
          "q": "Te-form dari いく adalah…",
          "o": [
            "いいて",
            "いって",
            "いくて",
            "きて"
          ],
          "a": 1,
          "explain": "いく adalah PENGECUALIAN: いって, bukan いいて!"
        },
        {
          "q": "Te-form dari はなす adalah…",
          "o": [
            "はないて",
            "はなして",
            "はなんで",
            "はなすて"
          ],
          "a": 1,
          "explain": "す → して. はなす → はなして."
        },
        {
          "q": "Ingin menulis dalam bahasa Jepang…",
          "o": [
            "かきてです",
            "かきたいです",
            "かくたいです",
            "かきたいます"
          ],
          "a": 1,
          "explain": "かく → stem かき + たい → かきたいです."
        },
        {
          "q": "Lengkapi: すし__たべたいです。",
          "o": [
            "を",
            "が",
            "に",
            "へ"
          ],
          "a": 1,
          "explain": "Dengan たい, partikel を sering diganti が."
        },
        {
          "q": "Nai-form dari ある adalah…",
          "o": [
            "あらない",
            "ない",
            "ありません",
            "あない"
          ],
          "a": 1,
          "explain": "ある adalah pengecualian: nai-form-nya ない."
        },
        {
          "q": "Nai-form dari たべる adalah…",
          "o": [
            "たべない",
            "たべらない",
            "たべくない",
            "たばない"
          ],
          "a": 0,
          "explain": "Golongan 2: buang る + ない → たべない."
        },
        {
          "q": "Bentuk negatif dari たべたい adalah…",
          "o": [
            "たべたくない",
            "たべたいじゃない",
            "たべないたい",
            "たべたなくない"
          ],
          "a": 0,
          "explain": "たい berkonjugasi seperti i-adjective: たべたい → たべたくない."
        },
        {
          "q": "Te-form dari およぐ adalah…",
          "o": [
            "およいて",
            "およいで",
            "およぐて",
            "およんで"
          ],
          "a": 1,
          "explain": "ぐ → いで. およぐ → およいで."
        },
        {
          "q": "Tolong bicara pelan-pelan…",
          "o": [
            "ゆっくり はなします",
            "ゆっくり はなしてください",
            "ゆっくり はなしたいです",
            "ゆっくり はなさないで"
          ],
          "a": 1,
          "explain": "Permintaan sopan: te-form + ください."
        }
      ]
    },
    {
      "id": "n5-7",
      "bab": 7,
      "level": "n5",
      "title": "Keluarga & Rutinitas Harian",
      "desc": "Keluarga uchi/soto + rutinitas dan kata frekuensi",
      "icon": "🏠",
      "sections": [
        {
          "type": "penjelasan",
          "title": "Uchi dan Soto: Bahasa Cermin Budaya",
          "body": "Orang Jepang membedakan <b>uchi</b> (内 = dalam / lingkungan sendiri) dan <b>soto</b> (外 = luar). Untuk keluarga <b>sendiri</b> saat bicara ke orang luar, pakai kata <b>humble</b>: ちち (ayah), はは (ibu), あに (kakak laki-laki). Untuk keluarga <b>orang lain</b>, pakai kata <b>sopan</b>: おとうさん, おかあさん, おにいさん.\n\n<b>Kenapa repot-repot?</b> Menyebut ayah sendiri おとうさん di depan orang luar terdengar kekanak-kanakan dalam situasi formal — seperti memanggil diri sendiri \"adek\" di depan dosen. <b>Tips:</b> kata berawalan お〜さん hampir selalu versi soto (untuk orang lain). Adik (おとうと・いもうと) nadanya netral — sama untuk uchi maupun soto."
        },
        {
          "type": "penjelasan",
          "title": "Kata Frekuensi: Posisi & Pasangan Wajib",
          "body": "Kata frekuensi (まいにち, ときどき, よく…) ditaruh <b>sebelum kata kerja</b>: まいにち べんきょうします (belajar setiap hari). Urutan dari paling sering: まいにち (setiap hari) → よく (sering) → ときどき (kadang-kadang) → たまに (sesekali) → あまり (jarang) → ぜんぜん (sama sekali tidak).\n\n<b>Aturan pasangan wajib:</b> あまり (jarang) dan ぜんぜん (sama sekali tidak) <b>harus</b> diikuti bentuk negatif! あまり テレビを みます (SALAH!) → あまり テレビを みません (BENAR). Pola ini favorit soal jebakan di ujian — hafalkan sebagai satu paket."
        },
        {
          "type": "kotoba",
          "title": "Kosakata Keluarga & Frekuensi",
          "items": [
            {
              "jp": "ちち",
              "kj": "父",
              "r": "chichi",
              "id": "ayah (saya)",
              "note": "[uchi] Ke orang luar. Kanji: 父"
            },
            {
              "jp": "はは",
              "kj": "母",
              "r": "haha",
              "id": "ibu (saya)",
              "note": "[uchi] Ke orang luar. Kanji: 母"
            },
            {
              "jp": "あに",
              "kj": "兄",
              "r": "ani",
              "id": "kakak laki-laki (saya)",
              "note": "[uchi] Kanji: 兄"
            },
            {
              "jp": "あね",
              "kj": "姉",
              "r": "ane",
              "id": "kakak perempuan (saya)",
              "note": "[uchi] Kanji: 姉"
            },
            {
              "jp": "おとうと",
              "r": "otouto",
              "id": "adik laki-laki",
              "note": "Netral — sama untuk uchi/soto"
            },
            {
              "jp": "いもうと",
              "r": "imouto",
              "id": "adik perempuan",
              "note": "Netral — sama untuk uchi/soto"
            },
            {
              "jp": "おとうさん",
              "r": "otousan",
              "id": "ayah (orang lain)",
              "note": "[soto] Juga untuk memanggil ayah sendiri"
            },
            {
              "jp": "おかあさん",
              "r": "okaasan",
              "id": "ibu (orang lain)",
              "note": "[soto] Versi sopan"
            },
            {
              "jp": "かぞく",
              "kj": "家族",
              "r": "kazoku",
              "id": "keluarga",
              "note": ""
            },
            {
              "jp": "りょうしん",
              "kj": "両親",
              "r": "ryoushin",
              "id": "kedua orang tua",
              "note": ""
            },
            {
              "jp": "まいにち",
              "kj": "毎日",
              "r": "mainichi",
              "id": "setiap hari",
              "note": "Kata frekuensi — sebelum kata kerja"
            },
            {
              "jp": "ときどき",
              "r": "tokidoki",
              "id": "kadang-kadang",
              "note": "Kata frekuensi"
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Pola Rutinitas",
          "items": [
            {
              "pattern": "[frekuensi] + kata kerja",
              "arti": "melakukan… secara rutin",
              "explain": "Kata keterangan frekuensi (まいにち, ときどき, dsb.) diletakkan <b>sebelum kata kerja</b>.",
              "examples": [
                {
                  "jp": "わたしは まいにち べんきょうします。",
                  "id": "Saya belajar setiap hari.",
                  "rd": "わたしわ まいにち べんきょうします。"
                },
                {
                  "jp": "ときどき えいがを みます。",
                  "id": "Kadang-kadang menonton film.",
                  "rd": "ときどき えいがお みます。"
                }
              ],
              "tabel": [
                {
                  "k": "まいにち",
                  "v": "setiap hari"
                },
                {
                  "k": "ときどき",
                  "v": "kadang-kadang"
                },
                {
                  "k": "あまり～ません",
                  "v": "jarang..."
                },
                {
                  "k": "ぜんぜん～ません",
                  "v": "tidak pernah sama sekali"
                }
              ]
            },
            {
              "pattern": "あまり / ぜんぜん + negatif",
              "arti": "jarang / sama sekali tidak",
              "explain": "<b>Keduanya wajib</b> diikuti bentuk negatif! あまり artinya \"jarang / tidak terlalu\", sedangkan ぜんぜん artinya \"sama sekali tidak\".",
              "examples": [
                {
                  "jp": "わたしは あまり テレビを みません。",
                  "id": "Saya jarang menonton TV.",
                  "rd": "わたしわ あまり テレビお みません。"
                },
                {
                  "jp": "ぜんぜん わかりません。",
                  "id": "Sama sekali tidak mengerti.",
                  "rd": "ぜんぜん わかりません。"
                }
              ],
              "tabel": [
                {
                  "k": "あまりたべません",
                  "v": "jarang makan"
                },
                {
                  "k": "ぜんぜんたべません",
                  "v": "sama sekali tidak makan"
                }
              ]
            },
            {
              "pattern": "[keluarga uchi] は …です",
              "arti": "memperkenalkan keluarga sendiri",
              "explain": "Saat bicara ke orang luar tentang keluargamu sendiri, pakai ちち・はは (merendah). Untuk keluarga orang lain, pakai おとうさん・おかあさん (menghormati).",
              "examples": [
                {
                  "jp": "ちちは せんせいです。",
                  "id": "Ayah saya seorang guru.",
                  "rd": "ちちわ せんせいです。"
                },
                {
                  "jp": "おとうさんは おいくつですか。",
                  "id": "Ayahmu berumur berapa?",
                  "rd": "おとうさんわ おいくつですか。"
                }
              ],
              "tabel": [
                {
                  "k": "ちち / はは",
                  "v": "ayah / ibu (keluarga sendiri)"
                },
                {
                  "k": "おとうさん / おかあさん",
                  "v": "ayah / ibu (keluarga orang lain)"
                }
              ]
            }
          ]
        },
        {
          "type": "kanji",
          "title": "Kanji Keluarga",
          "items": [
            {
              "ch": "父",
              "kun": "ちち",
              "on": "ふ",
              "id": "ayah",
              "note": "[uchi] ちち = ayah saya"
            },
            {
              "ch": "母",
              "kun": "はは",
              "on": "ぼ",
              "id": "ibu",
              "note": "[uchi] はは = ibu saya"
            },
            {
              "ch": "兄",
              "kun": "あに",
              "on": "きょう",
              "id": "kakak laki-laki",
              "note": "あに = kakak lk saya"
            },
            {
              "ch": "姉",
              "kun": "あね",
              "on": "し",
              "id": "kakak perempuan",
              "note": "あね = kakak pr saya"
            },
            {
              "ch": "家",
              "kun": "いえ",
              "on": "か",
              "id": "rumah / keluarga",
              "note": "かぞく = keluarga"
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Keluarga",
          "lines": [
            {
              "sp": "A",
              "jp": "ご家族は 何人ですか。",
              "id": "Keluargamu ada berapa orang?"
            },
            {
              "sp": "B",
              "jp": "4人です。父と 母と 姉と わたしです。",
              "id": "4 orang. Ayah, ibu, kakak perempuan, dan saya."
            },
            {
              "sp": "A",
              "jp": "お姉さんは おいくつですか。",
              "id": "Kakak perempuanmu umur berapa?"
            },
            {
              "sp": "B",
              "jp": "25歳です。まいにち はたらいています。",
              "id": "25 tahun. Bekerja setiap hari."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "Saat bicara ke orang luar, ayah saya disebut…",
          "o": [
            "おとうさん",
            "ちち",
            "おやじ",
            "パパ"
          ],
          "a": 1,
          "explain": "Keluarga sendiri ke orang luar = bentuk humble: ちち."
        },
        {
          "q": "Ayah orang lain disebut…",
          "o": [
            "ちち",
            "おとうさん",
            "あに",
            "そふ"
          ],
          "a": 1,
          "explain": "Keluarga orang lain = bentuk sopan: おとうさん."
        },
        {
          "q": "Budi berkata ke gurunya: おかあさんは げんきです. Apa masalahnya?",
          "o": [
            "Tidak ada masalah",
            "Seharusnya はは untuk ibu sendiri",
            "Seharusnya おふくろ",
            "Guru tidak perlu tahu"
          ],
          "a": 1,
          "explain": "Ke orang luar, ibu sendiri = はは. おかあさん untuk ibu orang lain."
        },
        {
          "q": "Setiap hari dalam bahasa Jepang…",
          "o": [
            "ときどき",
            "まいにち",
            "たまに",
            "よく"
          ],
          "a": 1,
          "explain": "まいにち = setiap hari."
        },
        {
          "q": "あまり harus diikuti…",
          "o": [
            "bentuk positif",
            "bentuk negatif",
            "bentuk lampau saja",
            "kata benda"
          ],
          "a": 1,
          "explain": "あまり selalu berpasangan dengan bentuk negatif."
        },
        {
          "q": "Lengkapi: わたしは まいにち 日本語を ___.",
          "o": [
            "べんきょうします",
            "べんきょうしたあまり",
            "べんきょう",
            "べんきょうです"
          ],
          "a": 0,
          "explain": "Rutinitas: まいにち + kata kerja bentuk ます."
        },
        {
          "q": "Sama sekali tidak mengerti…",
          "o": [
            "ぜんぜん わかります",
            "あまり わかります",
            "ぜんぜん わかりません",
            "ときどき わかりません"
          ],
          "a": 2,
          "explain": "ぜんぜん = sama sekali (tidak), wajib + negatif."
        },
        {
          "q": "Adik perempuan saya…",
          "o": [
            "おねえさん",
            "いもうと",
            "あね",
            "むすめ"
          ],
          "a": 1,
          "explain": "Adik perempuan = いもうと (netral, sama untuk uchi/soto)."
        },
        {
          "q": "Kedua orang tua dalam bahasa Jepang…",
          "o": [
            "かぞく",
            "りょうしん",
            "きょうだい",
            "おやこ"
          ],
          "a": 1,
          "explain": "りょうしん = kedua orang tua."
        },
        {
          "q": "Saya jarang makan daging…",
          "o": [
            "あまり にくを たべます",
            "よく にくを たべません",
            "あまり にくを たべません",
            "ぜんぜん にくを たべます"
          ],
          "a": 2,
          "explain": "\"Jarang\" = あまり + bentuk negatif."
        }
      ]
    },
    {
      "id": "n5-8",
      "bab": 8,
      "level": "n5",
      "title": "Review Total + Percakapan Praktis",
      "desc": "Review total N5 + percakapan praktis di restoran & toko",
      "icon": "🎯",
      "sections": [
        {
          "type": "penjelasan",
          "title": "Peta Ulang Perjalanan N5-mu",
          "body": "Bab 8 adalah <b>checkpoint</b> sebelum naik ke N4. Mari petakan ulang: Bab 1 (aisatsu & です), Bab 2 (partikel は・を・に・へ・で・と), Bab 3 (kata kerja ます & ajakan), Bab 4 (kata benda & いくら), Bab 5 (i vs na adjective), Bab 6 (te/tai/nai-form), Bab 7 (uchi/soto & frekuensi). Kalau ada bab yang masih goyah, <b>kembali dan kuatkan dulu</b> — fondasi N5 menentukan kelancaran N4.\n\n<b>Metode bab ini:</b> tidak ada materi baru yang berat. Fokus ke <b>kaiwa panjang</b> di dua situasi paling sering muncul di ujian DAN kehidupan nyata: restoran dan belanja. Baca keras-keras, ganti peran A/B dengan teman, dan rasakan semua pola yang sudah dipelajari bekerja bersama."
        },
        {
          "type": "penjelasan",
          "title": "Senjata Percakapan Praktis",
          "body": "Tiga pola pamungkas untuk bertahan hidup: (1) memesan/meminta barang: <b>[barang] を ください</b> (ラーメンを ください); (2) menanyakan harga: <b>いくらですか</b>; (3) minta tolong: <b>te-form + ください</b> (みせてください = tolong perlihatkan). Gabungkan dengan adjective Bab 5 — ちょっと たかいですね (agak mahal ya) — dan kamu sudah bisa belanja di Jepang.\n\n<b>Tips ujian & etika:</b> soal N5 suka mengetes <b>kesopanan situasi</b> — ke pelayan, kasir, atau orang asing SELALU pakai bentuk sopan (です・ます・ください), jangan bentuk kasual. Kesalahan paling umum: memakai nai-form ke pelayan restoran!"
        },
        {
          "type": "kotoba",
          "title": "Kosakata Restoran & Belanja",
          "items": [
            {
              "jp": "みせ",
              "kj": "店",
              "r": "mise",
              "id": "toko",
              "note": "Kanji: 店"
            },
            {
              "jp": "メニュー",
              "r": "menyuu",
              "id": "menu",
              "note": "Katakana"
            },
            {
              "jp": "ちゅうもんする",
              "r": "chuumon suru",
              "id": "memesan (makanan)",
              "note": "Di restoran"
            },
            {
              "jp": "いくら",
              "r": "ikura",
              "id": "berapa (harga)",
              "note": "Pola: いくらですか"
            },
            {
              "jp": "ねだん",
              "r": "nedan",
              "id": "harga",
              "note": ""
            },
            {
              "jp": "やすい",
              "r": "yasui",
              "id": "murah",
              "note": "Review Bab 5 [i]"
            },
            {
              "jp": "たかい",
              "r": "takai",
              "id": "mahal",
              "note": "Review Bab 5 [i]"
            },
            {
              "jp": "おかいけい",
              "r": "okaikei",
              "id": "pembayaran / kasir",
              "note": "おかいけいを おねがいします"
            },
            {
              "jp": "げんきん",
              "r": "genkin",
              "id": "tunai",
              "note": "Lawan: カード"
            },
            {
              "jp": "サイズ",
              "r": "saizu",
              "id": "ukuran",
              "note": "Katakana"
            },
            {
              "jp": "ふく",
              "r": "fuku",
              "id": "pakaian",
              "note": ""
            },
            {
              "jp": "てんいん",
              "kj": "店員",
              "r": "tenin",
              "id": "pelayan toko",
              "note": ""
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Pola Praktis",
          "items": [
            {
              "pattern": "[barang] を ください",
              "arti": "minta… / saya ambil…",
              "explain": "Pola andalan saat memesan di restoran atau membeli di toko — sopan dan langsung bisa dipakai.",
              "examples": [
                {
                  "jp": "ラーメンを ください。",
                  "id": "Minta ramennya.",
                  "rd": "ラーメンお ください。"
                },
                {
                  "jp": "このシャツを ください。",
                  "id": "Saya ambil kemeja ini.",
                  "rd": "このシャツお ください。"
                }
              ]
            },
            {
              "pattern": "これは いくらですか",
              "arti": "ini berapa harganya?",
              "explain": "<b>いくら</b> dipakai untuk menanyakan harga atau jumlah nominal uang.",
              "examples": [
                {
                  "jp": "これは いくらですか。",
                  "id": "Ini berapa harganya?",
                  "rd": "これわ いくらですか。"
                },
                {
                  "jp": "コーヒーは いくらですか。",
                  "id": "Kopinya berapa?",
                  "rd": "コーヒーわ いくらですか。"
                }
              ],
              "tabel": [
                {
                  "k": "いくらですか",
                  "v": "berapa harganya? (nominal/uang)"
                },
                {
                  "k": "いくつですか",
                  "v": "ada berapa? (jumlah benda)"
                }
              ]
            }
          ]
        },
        {
          "type": "kanji",
          "title": "Kanji Belanja & Uang",
          "items": [
            {
              "ch": "金",
              "kun": "かね",
              "on": "きん",
              "id": "uang / emas",
              "note": "おかね = uang"
            },
            {
              "ch": "物",
              "kun": "もの",
              "on": "ぶつ",
              "id": "barang",
              "note": "たべもの = makanan"
            },
            {
              "ch": "店",
              "kun": "みせ",
              "on": "てん",
              "id": "toko",
              "note": "みせ = toko"
            },
            {
              "ch": "毎",
              "kun": "ごと",
              "on": "まい",
              "id": "setiap",
              "note": "まいにち = setiap hari"
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Di Restoran",
          "lines": [
            {
              "sp": "店員",
              "jp": "いらっしゃいませ。何名様ですか。",
              "id": "Selamat datang. Berapa orang?"
            },
            {
              "sp": "客",
              "jp": "2人です。",
              "id": "2 orang."
            },
            {
              "sp": "店員",
              "jp": "こちらへ どうぞ。メニューです。",
              "id": "Silakan ke sini. Ini menunya."
            },
            {
              "sp": "客",
              "jp": "すみません、ラーメンを 2つ ください。",
              "id": "Permisi, 2 ramen tolong."
            },
            {
              "sp": "店員",
              "jp": "はい、ラーメン 2つですね。",
              "id": "Baik, 2 ramen ya."
            },
            {
              "sp": "客",
              "jp": "あの、これも おいしいですか。",
              "id": "Eh, ini juga enak?"
            },
            {
              "sp": "店員",
              "jp": "はい、とても ゆうめいです。",
              "id": "Ya, sangat terkenal."
            },
            {
              "sp": "客",
              "jp": "じゃあ、それも ください。",
              "id": "Kalau begitu, itu juga tolong."
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Belanja Baju",
          "lines": [
            {
              "sp": "客",
              "jp": "すみません、このシャツを みせてください。",
              "id": "Permisi, tolong perlihatkan kemeja ini."
            },
            {
              "sp": "店員",
              "jp": "はい、どうぞ。",
              "id": "Baik, silakan."
            },
            {
              "sp": "客",
              "jp": "大きい サイズは ありますか。",
              "id": "Apakah ada ukuran besar?"
            },
            {
              "sp": "店員",
              "jp": "はい、あります。こちらです。",
              "id": "Ada. Yang ini."
            },
            {
              "sp": "客",
              "jp": "いくらですか。",
              "id": "Berapa harganya?"
            },
            {
              "sp": "店員",
              "jp": "3000円です。",
              "id": "3000 yen."
            },
            {
              "sp": "客",
              "jp": "ちょっと たかいですね。",
              "id": "Agak mahal ya."
            },
            {
              "sp": "店員",
              "jp": "いまは セールで 2000円です。",
              "id": "Sekarang lagi diskon, 2000 yen."
            },
            {
              "sp": "客",
              "jp": "じゃあ、かいます。",
              "id": "Kalau begitu, saya beli."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "Lengkapi: わたし__ほん__よみます。",
          "o": [
            "は／を",
            "を／は",
            "に／を",
            "が／に"
          ],
          "a": 0,
          "explain": "Pola dasar: わたしは ほんを よみます (topik + objek)."
        },
        {
          "q": "Taman yang cantik…",
          "o": [
            "きれい こうえん",
            "きれいな こうえん",
            "きれいい こうえん",
            "きれいの こうえん"
          ],
          "a": 1,
          "explain": "きれい = na-adjective (jebakan!) → きれいな."
        },
        {
          "q": "Te-form dari のむ…",
          "o": [
            "のみて",
            "のんで",
            "のむて",
            "のいて"
          ],
          "a": 1,
          "explain": "む → んで. のむ → のんで."
        },
        {
          "q": "Saya ingin pergi ke Jepang…",
          "o": [
            "にほんに いきたいです",
            "にほんを いきたいです",
            "にほんに いってです",
            "にほんが いきますたい"
          ],
          "a": 0,
          "explain": "いく → いきたい; tujuan memakai partikel に."
        },
        {
          "q": "Ke teman: Ayah saya sedang sakit…",
          "o": [
            "おとうさんは びょうきです",
            "ちちは びょうきです",
            "あには びょうきです",
            "そふは びょうきです"
          ],
          "a": 1,
          "explain": "Ayah sendiri ke orang luar = ちち."
        },
        {
          "q": "Kemarin tidak terlalu dingin…",
          "o": [
            "きのうは あまり さむかったです",
            "きのうは あまり さむくなかったです",
            "きのうは とても さむくなかったです",
            "きのうは さむいあまりでした"
          ],
          "a": 1,
          "explain": "あまり + negatif lampau: さむくなかったです."
        },
        {
          "q": "Di toko, menanyakan harga…",
          "o": [
            "いくらですか",
            "なんですか",
            "どこですか",
            "いつですか"
          ],
          "a": 0,
          "explain": "いくらですか = berapa harganya?"
        },
        {
          "q": "Bentuk lampau dari たかい…",
          "o": [
            "たかくない",
            "たかかった",
            "たかいでした",
            "たかくなかった"
          ],
          "a": 1,
          "explain": "i-adjective lampau: buang い + かった."
        },
        {
          "q": "Nai-form dari する…",
          "o": [
            "すない",
            "しない",
            "しらない",
            "するない"
          ],
          "a": 1,
          "explain": "する → しない (tak beraturan)."
        },
        {
          "q": "A: いっしょに えいがを みませんか。(Mau nonton bareng?) Jawaban SETUJU yang tepat…",
          "o": [
            "すみません、ちょっと ようじが あります",
            "いいですね。いきましょう！",
            "いいえ、みたくないです",
            "えいがは みません"
          ],
          "a": 1,
          "explain": "みませんか adalah ajakan. Jawaban setuju: いいですね、いきましょう."
        }
      ]
    }
  ],
  "n4": [
    {
      "id": "n4-1",
      "bab": 1,
      "level": "n4",
      "title": "Bentuk Potensial, Persepsi & Keinginan",
      "desc": "Menyatakan kemampuan (bisa) dan keinginan (mau) dengan tepat: potensial, 聞こえる・見える, 〜たい, 〜たがる",
      "icon": "💪",
      "sections": [
        {
          "type": "penjelasan",
          "title": "Bisa vs Mau vs Terlihat/Terdengar: Tiga Keluarga Pola",
          "body": "Di N5 kamu belajar cara sederhana bilang \"bisa\" dan \"mau\". Di N4 kita naik level: bahasa Jepang <b>membedakan dengan ketat</b> antara <b>kemampuan</b> (bentuk potensial), <b>persepsi spontan</b> (見える・聞こえる), <b>keinginan diri sendiri</b> (〜たい), dan <b>keinginan orang lain</b> (〜たがる). Salah pilih pola = terdengar aneh, bahkan tidak sopan.\n\n<b>Bentuk potensial</b> artinya \"bisa/melakukan\". Caranya: kata kerja golongan 1 (godan) ubah akhiran ke baris-e + る — 書く→<b>書ける</b> (kakeru), 話す→<b>話せる</b> (hanaseru), 泳ぐ→<b>泳げる</b> (oyogeru). Golongan 2 (ichidan): ganti る dengan られる — 食べる→<b>食べられる</b>, 見る→<b>見られる</b>. Khusus: する→<b>できる</b>, 来る→<b>こられる</b>. Perhatikan baik-baik: dalam kalimat potensial, partikel objek <b>を berubah menjadi が</b> — 日本語<b>が</b>話せます (bisa bicara bahasa Jepang), bukan を!\n\n<b>Keluarga persepsi</b> ini jebakan favorit JLPT. Ada DUA pasangan yang wajib dibedakan:\n\n<b>1. 見える (mieru) vs 見られる (mirareru):</b> 見える = \"terlihat <b>dengan sendirinya</b>\", tanpa usaha — 窓から山が見えます (dari jendela gunung terlihat). 見られる = bentuk <b>potensial dari 見る</b>, \"bisa melihat\" karena ada kemampuan/kesempatan — この美術館ではピカソの絵が見られます (di museum ini bisa melihat lukisan Picasso). Logikanya: kalau sesuatu \"nongol sendiri\" di depan mata → 見える. Kalau kamu <b>bisa</b> melihat karena situasi memungkinkan → 見られる.\n\n<b>2. 聞こえる (kikoeru) vs 聞ける (kikeru):</b> sama persis polanya! 聞こえる = \"terdengar dengan sendirinya\" — ピアノの音が聞こえます (terdengar suara piano). 聞ける = potensial dari 聞く, \"bisa mendengarkan\" — このラジオは英語が聞けます (radio ini bisa menangkap siaran Inggris). Catatan: keduanya pakai partikel <b>が</b>, bukan を!\n\n<b>3. 〜のが見える / 〜のをみる:</b> untuk melaporkan <b>kejadian yang sedang berlangsung</b> yang kamu lihat/dengar — 子どもたちが遊んでいるのが見えます (terlihat anak-anak sedang bermain). <b>PERINGATAN:</b> の di sini <b>TIDAK boleh diganti こと</b>! Kalau diganti こと, kalimatnya salah.\n\n<b>〜たい vs 〜たがる:</b> たい HANYA untuk keinginan <b>diri sendiri</b> (食べたい, 行きたい; negatif たくない, lampau たかった — berkonjugasi seperti kata sifat-i!). Untuk <b>orang ketiga</b> (dia/mereka), wajib pakai <b>〜たがる</b>: 彼は行きたがっている. Memakai たい untuk orang lain terdengar seperti kamu sok tahu isi pikirannya.\n\n<b>Jebakan JLPT yang sering keluar:</b> (1) を→が pada kalimat potensial DAN pada 見える・聞こえる; (2) 見える vs 見られる, 聞こえる vs 聞ける — tentukan dulu: \"terlihat/terdengar sendiri\" atau \"bisa melihat/mendengar\"; (3) の pada 〜のが見える tidak boleh jadi こと; (4) potensial dari する adalah できる — jangan pernah bilang しられる!"
        },
        {
          "type": "kotoba",
          "title": "Kosakata Kemampuan, Persepsi & Keinginan",
          "items": [
            {
              "jp": "できる",
              "r": "dekiru",
              "id": "bisa (potensial dari する)",
              "note": "Bentuk khusus, wajib dihafal"
            },
            {
              "jp": "泳ぐ",
              "kj": "泳ぐ",
              "r": "oyogu",
              "id": "berenang",
              "note": "Potensial: 泳げる (oyogeru)"
            },
            {
              "jp": "弾く",
              "kj": "弾く",
              "r": "hiku",
              "id": "memainkan (alat musik)",
              "note": "ピアノを弾く = main piano"
            },
            {
              "jp": "間に合う",
              "kj": "間に合う",
              "r": "ma ni au",
              "id": "keburu / tepat waktu",
              "note": "Potensial: 間に合える"
            },
            {
              "jp": "褒める",
              "kj": "褒める",
              "r": "homeru",
              "id": "memuji",
              "note": "Lawan: 叱る (shikaru) = memarahi"
            },
            {
              "jp": "叱る",
              "kj": "叱る",
              "r": "shikaru",
              "id": "memarahi",
              "note": "Kanji 叱 jarang, biasa ditulis hiragana"
            },
            {
              "jp": "欲しい",
              "kj": "欲しい",
              "r": "hoshii",
              "id": "ingin (benda)",
              "note": "Hanya untuk BENDA. Untuk aksi pakai 〜たい"
            },
            {
              "jp": "叶う",
              "kj": "叶う",
              "r": "kanau",
              "id": "terkabul / terwujud",
              "note": "夢が叶う = impian terkabul"
            },
            {
              "jp": "努力",
              "kj": "努力",
              "r": "doryoku",
              "id": "usaha / kerja keras",
              "note": "努力する = berusaha"
            },
            {
              "jp": "才能",
              "kj": "才能",
              "r": "sainou",
              "id": "bakat",
              "note": "才能がある = berbakat"
            },
            {
              "jp": "得意",
              "kj": "得意",
              "r": "tokui",
              "id": "jago / ahli",
              "note": "ピアノが得意です = jago main piano"
            },
            {
              "jp": "苦手",
              "kj": "苦手",
              "r": "nigate",
              "id": "lemah / kurang bisa",
              "note": "Lawan dari 得意"
            },
            {
              "jp": "見える",
              "kj": "見える",
              "r": "mieru",
              "id": "terlihat (dengan sendirinya)",
              "note": "Bukan potensial! Pakai が"
            },
            {
              "jp": "聞こえる",
              "kj": "聞こえる",
              "r": "kikoeru",
              "id": "terdengar (dengan sendirinya)",
              "note": "Bukan potensial! Pakai が"
            },
            {
              "jp": "音",
              "kj": "音",
              "r": "oto",
              "id": "suara / bunyi",
              "note": "音が聞こえる = terdengar suara"
            },
            {
              "jp": "声",
              "kj": "声",
              "r": "koe",
              "id": "suara (manusia)",
              "note": "声が聞こえる = terdengar suara (orang)"
            },
            {
              "jp": "景色",
              "kj": "景色",
              "r": "keshiki",
              "id": "pemandangan",
              "note": "景色が見える = pemandangan terlihat"
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Pola Potensial, Persepsi & Keinginan",
          "items": [
            {
              "pattern": "kata kerja bentuk bisa + が + (benda)",
              "arti": "bisa [melakukan]",
              "explain": "Bentuk potensial menyatakan kemampuan (\"bisa\"). Ingat: partikel objek <b>を berubah menjadi が</b>. Dan できる adalah bentuk potensial khusus dari する.",
              "examples": [
                {
                  "jp": "日本語が話せます。",
                  "id": "Saya bisa berbicara bahasa Jepang.",
                  "rd": "にほんごがはなせます。"
                },
                {
                  "jp": "車が運転できますか。",
                  "id": "Apakah (kamu) bisa menyetir mobil?",
                  "rd": "くるまがうんてんできますか。"
                }
              ],
              "tabel": [
                {
                  "k": "かく→かける",
                  "v": "golongan 1: akhiran ke baris-e + る"
                },
                {
                  "k": "たべる→たべられる",
                  "v": "golongan 2: ganti る dengan られる"
                },
                {
                  "k": "する→できる",
                  "v": "spesial (jangan bilang しられる!)"
                },
                {
                  "k": "くる→こられる",
                  "v": "spesial"
                }
              ]
            },
            {
              "pattern": "聞こえる",
              "arti": "terdengar (dengan sendirinya)",
              "explain": "Suara <b>terdengar secara alami</b> — bukan karena kamu berusaha mendengarkan. Bedakan dengan 聞ける (bentuk potensial dari 聞く = \"bisa mendengarkan\"). Pola ini selalu memakai partikel <b>が</b>.",
              "examples": [
                {
                  "jp": "窓を開けると、鳥の声が聞こえます。",
                  "id": "Saat membuka jendela, terdengar suara burung.",
                  "rd": "まどおあけると、とりのこえがきこえます。"
                },
                {
                  "jp": "となりの家からピアノの音が聞こえます。",
                  "id": "Dari rumah sebelah terdengar suara piano.",
                  "rd": "となりのいえからピアノのおとがきこえます。"
                },
                {
                  "jp": "私は左の耳がよく聞こえません。",
                  "id": "Telinga kiri saya tidak terlalu bisa mendengar.",
                  "rd": "わたしわひだりのみみがよくきこえません。"
                }
              ],
              "tabel": [
                {
                  "k": "きこえる",
                  "v": "terdengar (spontan, tanpa usaha)"
                },
                {
                  "k": "きける",
                  "v": "bisa mendengarkan (potensial 聞く)"
                }
              ]
            },
            {
              "pattern": "聞ける",
              "arti": "bisa mendengarkan",
              "explain": "Ini bentuk <b>potensial dari 聞く</b> — menyatakan kemampuan atau kesempatan untuk mendengarkan sesuatu (misalnya siaran radio). Jangan tertukar dengan 聞こえる, ya!",
              "examples": [
                {
                  "jp": "このパソコンはラジオも聞けます。",
                  "id": "Komputer ini juga bisa memutar radio.",
                  "rd": "このパソコンわラジオもきけます。"
                },
                {
                  "jp": "こんなにうるさいと、音楽が聞けません。",
                  "id": "Seribut ini, saya jadi tidak bisa mendengar musiknya.",
                  "rd": "こんなにうるさいと、おんがくがきけません。"
                }
              ]
            },
            {
              "pattern": "見える",
              "arti": "terlihat (dengan sendirinya)",
              "explain": "Sesuatu <b>terlihat secara alami</b> di depan matamu — tanpa usaha apa pun. Bedakan dengan 見られる (bentuk potensial dari 見る = \"bisa melihat\"). Pola ini selalu memakai partikel <b>が</b>.",
              "examples": [
                {
                  "jp": "この窓から山が見えます。",
                  "id": "Dari jendela ini terlihat gunung.",
                  "rd": "このまどからやまがみえます。"
                },
                {
                  "jp": "ここから東京駅がよく見えます。",
                  "id": "Dari sini Stasiun Tokyo terlihat jelas.",
                  "rd": "ここからとうきょうえきがよくみえます。"
                },
                {
                  "jp": "めがねがないから、よく見えません。",
                  "id": "Karena tidak memakai kacamata, saya tidak bisa melihat dengan jelas.",
                  "rd": "めがねがないから、よくみえません。"
                }
              ],
              "tabel": [
                {
                  "k": "みえる",
                  "v": "terlihat (spontan, tanpa usaha)"
                },
                {
                  "k": "みられる",
                  "v": "bisa melihat (potensial 見る)"
                }
              ]
            },
            {
              "pattern": "見られる",
              "arti": "bisa melihat",
              "explain": "Ini bentuk <b>potensial dari 見る</b> — menyatakan kamu bisa melihat sesuatu karena ada kesempatan atau kemampuan (misalnya pameran atau pemandangan). Jangan tertukar dengan 見える, ya!",
              "examples": [
                {
                  "jp": "この美術館では、ピカソの絵が見られます。",
                  "id": "Di museum seni ini bisa melihat lukisan Picasso.",
                  "rd": "このびじゅつかんでは、ピカソのえがみられます。"
                },
                {
                  "jp": "この席からは花火がよく見られます。",
                  "id": "Dari kursi ini kembang api terlihat jelas.",
                  "rd": "このせきからはなびがよくみられます。"
                }
              ]
            },
            {
              "pattern": "〜のが見える / 〜のをみる",
              "arti": "terlihat / terdengar (seseorang) sedang 〜",
              "explain": "Pola ini dipakai untuk melaporkan <b>kejadian yang sedang berlangsung</b> yang kamu lihat atau dengar sendiri. Perhatian: <b>の di sini TIDAK bisa diganti dengan こと</b> — kalau diganti, kalimatnya jadi salah!",
              "examples": [
                {
                  "jp": "公園で子どもたちが遊んでいるのが見えます。",
                  "id": "Di taman terlihat anak-anak sedang bermain.",
                  "rd": "こうえんでこどもたちがあそんでいるのがみえます。"
                },
                {
                  "jp": "きのう、トムさんがきれいな女の人と歩いているのを見ました。",
                  "id": "Kemarin saya melihat Tom berjalan bersama perempuan cantik.",
                  "rd": "きのう、トムさんがきれいなおんなのひととあるいているのをおみました。"
                },
                {
                  "jp": "となりの部屋でだれかがけんかしているのが聞こえます。",
                  "id": "Terdengar seseorang sedang bertengkar di kamar sebelah.",
                  "rd": "となりのへやでだれかがけんかしているのがきこえます。"
                }
              ],
              "tabel": [
                {
                  "k": "～のがみえる",
                  "v": "terlihat (seseorang) sedang..."
                },
                {
                  "k": "～のをみる",
                  "v": "melihat (seseorang) sedang..."
                },
                {
                  "k": "～のがきこえる",
                  "v": "terdengar (seseorang) sedang..."
                }
              ]
            },
            {
              "pattern": "kata kerja dasar + たい / たくない / たかった",
              "arti": "ingin [melakukan] (diri sendiri)",
              "explain": "<b>Hanya dipakai untuk keinginan pembicara sendiri</b> — bukan keinginan orang lain. たい berkonjugasi seperti kata sifat-i: たくない (tidak ingin), たかった (dulu ingin).",
              "examples": [
                {
                  "jp": "日本へ行きたいです。",
                  "id": "Saya ingin pergi ke Jepang.",
                  "rd": "にほんえいきたいです。"
                },
                {
                  "jp": "何も食べたくないです。",
                  "id": "Saya tidak ingin makan apa-apa.",
                  "rd": "なにもたべたくないです。"
                }
              ],
              "tabel": [
                {
                  "k": "いきたい",
                  "v": "ingin pergi"
                },
                {
                  "k": "いきたくない",
                  "v": "tidak ingin pergi"
                },
                {
                  "k": "いきたかった",
                  "v": "dulu ingin pergi"
                }
              ]
            },
            {
              "pattern": "kata kerja dasar + たがる / たがっている",
              "arti": "(dia/mereka) kelihatannya ingin [melakukan]",
              "explain": "Untuk menyatakan keinginan <b>orang ketiga</b>. Karena たがる sendiri adalah kata kerja godan (たがります), objeknya tetap memakai <b>を</b> seperti kata kerja biasa! Bentuk ている adalah yang paling sering dipakai.",
              "examples": [
                {
                  "jp": "子供は遊びたがっています。",
                  "id": "Anak itu kelihatannya ingin bermain.",
                  "rd": "こどもわあそびたがっています。"
                },
                {
                  "jp": "彼は日本へ行きたがっています。",
                  "id": "Dia (laki-laki) kelihatannya ingin pergi ke Jepang.",
                  "rd": "かれわにほんえいきたがっています。"
                }
              ],
              "tabel": [
                {
                  "k": "いきたいです",
                  "v": "saya ingin pergi (diri sendiri)"
                },
                {
                  "k": "いきたがっています",
                  "v": "dia kelihatannya ingin pergi (orang lain)"
                }
              ]
            }
          ]
        },
        {
          "type": "kanji",
          "title": "Kanji Bab 1",
          "items": [
            {
              "ch": "能",
              "kun": "—",
              "on": "のう",
              "id": "kemampuan",
              "note": "能力 (nouryoku) = kemampuan"
            },
            {
              "ch": "力",
              "kun": "ちから",
              "on": "りょく・りき",
              "id": "tenaga / kekuatan",
              "note": "努力は力なり = usaha adalah kekuatan"
            },
            {
              "ch": "泳",
              "kun": "およぐ",
              "on": "えい",
              "id": "berenang",
              "note": "水泳 (suiei) = olahraga renang"
            },
            {
              "ch": "欲",
              "kun": "ほっする",
              "on": "よく",
              "id": "keinginan",
              "note": "欲しい (hoshii) = ingin (benda)"
            },
            {
              "ch": "叶",
              "kun": "かなう",
              "on": "—",
              "id": "terkabul",
              "note": "夢が叶う = impian terkabul"
            },
            {
              "ch": "得",
              "kun": "える",
              "on": "とく",
              "id": "mendapat / untung",
              "note": "得意 (tokui) = jago, ahli"
            },
            {
              "ch": "見",
              "kun": "みる",
              "on": "けん",
              "id": "melihat",
              "note": "見える (mieru) = terlihat"
            },
            {
              "ch": "聞",
              "kun": "きく",
              "on": "ぶん",
              "id": "mendengar",
              "note": "聞こえる (kikoeru) = terdengar"
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Kemampuan & Impian",
          "lines": [
            {
              "sp": "A",
              "jp": "ピアノが弾けますか。",
              "id": "Apakah bisa main piano?"
            },
            {
              "sp": "B",
              "jp": "はい、少し弾けます。でも、ギターは弾けません。",
              "id": "Ya, bisa sedikit. Tapi gitar tidak bisa."
            },
            {
              "sp": "A",
              "jp": "すごいですね。この部屋から海が見えますよ。",
              "id": "Hebat ya. Dari ruangan ini laut terlihat lho."
            },
            {
              "sp": "B",
              "jp": "本当ですね。波の音も聞こえます。",
              "id": "Benar juga. Suara ombak juga terdengar."
            },
            {
              "sp": "A",
              "jp": "そうですか。将来、何になりたいですか。",
              "id": "Oh begitu. Kelak ingin jadi apa?"
            },
            {
              "sp": "B",
              "jp": "音楽の先生になりたいです。夢を叶えたいです。",
              "id": "Ingin jadi guru musik. Ingin mewujudkan impian."
            },
            {
              "sp": "A",
              "jp": "素晴らしいですね。お弟さんは？",
              "id": "Luar biasa ya. Kalau adikmu?"
            },
            {
              "sp": "B",
              "jp": "弟はサッカー選手になりたがっています。",
              "id": "Adik (laki-laki) kelihatannya ingin jadi pemain sepak bola."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "Bentuk potensial dari 書く (kaku) adalah…",
          "o": [
            "書かれる",
            "書ける",
            "書かせる",
            "書こう"
          ],
          "a": 1,
          "explain": "Godan: ubah akhiran ke baris-e + る → 書く → 書ける."
        },
        {
          "q": "ピアノの音が___。 (Terdengar suara piano)",
          "o": [
            "聞けます",
            "聞こえます",
            "聞きます",
            "聞かれます"
          ],
          "a": 1,
          "explain": "Suara \"terdengar dengan sendirinya\" → 聞こえる. 聞ける = \"bisa mendengarkan\" (potensial)."
        },
        {
          "q": "この窓から山が___。 (Dari jendela ini terlihat gunung)",
          "o": [
            "見ます",
            "見られます",
            "見えます",
            "見せます"
          ],
          "a": 2,
          "explain": "Gunung \"terlihat dengan sendirinya\" → 見える. 見られる = \"bisa melihat\" (potensial)."
        },
        {
          "q": "Partikel yang tepat: 日本語___話せます。",
          "o": [
            "を",
            "が",
            "に",
            "へ"
          ],
          "a": 1,
          "explain": "Dalam kalimat potensial, を berubah menjadi が."
        },
        {
          "q": "彼は日本へ___。 (Dia kelihatannya ingin pergi ke Jepang)",
          "o": [
            "行きたい",
            "行きたがっている",
            "行きたくない",
            "行きたいです"
          ],
          "a": 1,
          "explain": "Subjek orang ketiga → pakai 〜たがる, bukan 〜たい."
        },
        {
          "q": "妹はピアノ___弾きたがっています。",
          "o": [
            "を",
            "が",
            "に",
            "で"
          ],
          "a": 0,
          "explain": "たがる adalah kata kerja biasa (bukan potensial), jadi objeknya tetap pakai を. Jangan tertipu — tidak ada 弾ける di sini!"
        },
        {
          "q": "Bentuk potensial dari する yang BENAR adalah…",
          "o": [
            "しられる",
            "すれる",
            "できる",
            "される"
          ],
          "a": 2,
          "explain": "する → できる adalah bentuk khusus. しられる itu SALAH."
        },
        {
          "q": "公園で子どもたちが遊んでいる___見えます。",
          "o": [
            "ことが",
            "のが",
            "のは",
            "のを"
          ],
          "a": 1,
          "explain": "Pola 〜のが見える untuk melaporkan kejadian yang sedang berlangsung. の TIDAK boleh diganti こと."
        },
        {
          "q": "この美術館ではピカソの絵が___。 (Di museum ini bisa melihat lukisan Picasso)",
          "o": [
            "見えます",
            "見られます",
            "見ます",
            "見せます"
          ],
          "a": 1,
          "explain": "\"Bisa melihat\" karena ada kesempatan → potensial 見られる, bukan 見える."
        },
        {
          "q": "Bentuk lampau dari したい (shitai) adalah…",
          "o": [
            "したかった",
            "したくない",
            "したがった",
            "しなかった"
          ],
          "a": 0,
          "explain": "たい→たかった untuk lampau (dulu ingin)."
        }
      ]
    },
    {
      "id": "n4-2",
      "bab": 2,
      "level": "n4",
      "title": "Perbandingan & Penekanan",
      "desc": "Membandingkan dua hal atau lebih: より・ほうが・いちばん・ほど〜ない + penekanan は・も",
      "icon": "⚖️",
      "sections": [
        {
          "type": "penjelasan",
          "title": "Membandingkan ala Orang Jepang + Senjata Rahasia ほど",
          "body": "Orang Jepang punya <b>empat pola perbandingan</b> yang harus dikuasai berpasangan: <b>より</b> (daripada), <b>ほうが</b> (lebih...), <b>いちばん</b> (paling), dan <b>ほど〜ない</b> (tidak se-...). Ditambah tiga kata penguat: <b>もっと</b> (lebih lagi), <b>ずっと</b> (jauh lebih), <b>ほとんど</b> (hampir).\n\nPola dasarnya: <b>AはBより[adjektif]</b> — \"A lebih [adjektif] daripada B\". Contoh: 東京はジャカルタより暑いです (Tokyo lebih panas daripada Jakarta). Variasinya: <b>AのほうがBより〜</b> — penekanan pada A sebagai yang \"lebih\". Keduanya benar, pilih sesuai penekanan. Untuk \"paling\": <b>[lingkup]の中で〜がいちばん〜</b> — 日本の中で富士山がいちばん高いです.\n\nSekarang senjata rahasianya: <b>N1はN2ほど〜ない</b> = \"N1 tidak se-... N2\", artinya <b>N2 lebih ... daripada N1</b>. Contoh: 今週は先週ほどいそがしくありません (minggu ini tidak sesibuk minggu lalu → minggu lalu LEBIH sibuk). Pola ini bisa dibalik menjadi <b>N1よりN2のほうが〜</b> dengan makna sama: 先週のほうが今週よりいそがしいです. JLPT suka menguji kemampuanmu mengubah bentuk ini!\n\nTerakhir, <b>(partikel) + は / も</b> untuk penekanan dan kontras. Polanya: tempel は atau も <b>setelah</b> partikel lain. Contoh kontras: この子は家<b>では</b>うるさいですが、外<b>では</b>おとなしいです (anak ini berisik <b>di rumah</b>, tapi tenang <b>di luar</b>) — は di sini menegaskan \"kalau di rumah (berbeda dengan di luar)\". Contoh penegasan ganda: 父<b>からも</b>母<b>からも</b>プレゼントをもらいました (menerima hadiah dari ayah <b>dan juga</b> dari ibu) — も menegaskan \"keduanya, tidak ada yang ketinggalan\".\n\n<b>Tips & jebakan:</b> (1) より juga bisa berarti titik awal \"dari\" (3時より = dari jam 3) — bedakan dari konteks; (2) ほうが bisa berdiri sendiri tanpa より jika pembandingnya sudah jelas dari konteks; (3) ほど〜ない SELALU dengan kalimat negatif — kalau positif, maknanya jadi \"sekitar\" (3時間ほど = sekitar 3 jam); (4) jangan tertukar もっと = \"lebih lagi\" (minta tambahan), ずっと = \"jauh\" (perbedaan besar), ほとんど = \"hampir\"."
        },
        {
          "type": "kotoba",
          "title": "Kosakata Perbandingan",
          "items": [
            {
              "jp": "比べる",
              "kj": "比べる",
              "r": "kuraberu",
              "id": "membandingkan",
              "note": "AとBを比べる = membandingkan A dan B"
            },
            {
              "jp": "同じ",
              "kj": "同じ",
              "r": "onaji",
              "id": "sama",
              "note": "Aと同じ = sama dengan A"
            },
            {
              "jp": "違う",
              "kj": "違う",
              "r": "chigau",
              "id": "berbeda / salah",
              "note": "考えが違う = pendapatnya berbeda"
            },
            {
              "jp": "便利",
              "kj": "便利",
              "r": "benri",
              "id": "praktis / nyaman",
              "note": "Kata sifat-na"
            },
            {
              "jp": "有名",
              "kj": "有名",
              "r": "yuumei",
              "id": "terkenal",
              "note": "Kata sifat-na"
            },
            {
              "jp": "親切",
              "kj": "親切",
              "r": "shinsetsu",
              "id": "baik hati / ramah",
              "note": "Kata sifat-na"
            },
            {
              "jp": "真面目",
              "kj": "真面目",
              "r": "majime",
              "id": "serius / tekun",
              "note": "Kata sifat-na"
            },
            {
              "jp": "もっと",
              "r": "motto",
              "id": "lebih lagi",
              "note": "もっとゆっくり = lebih pelan lagi"
            },
            {
              "jp": "ずっと",
              "r": "zutto",
              "id": "jauh (lebih) / terus",
              "note": "ずっと前から = sejak jauh sebelumnya"
            },
            {
              "jp": "ほとんど",
              "r": "hotondo",
              "id": "hampir",
              "note": "ほとんど毎日 = hampir setiap hari"
            },
            {
              "jp": "意外",
              "kj": "意外",
              "r": "igai",
              "id": "tak disangka",
              "note": "意外と安い = ternyata murah (tak disangka)"
            },
            {
              "jp": "やはり",
              "r": "yahari",
              "id": "tetap saja / memang",
              "note": "やっぱり (kasual) = bentuk santai"
            },
            {
              "jp": "ほど",
              "kj": "ほど",
              "r": "hodo",
              "id": "se-... (tingkat)",
              "note": "AほどBない = A tidak se-B N2"
            },
            {
              "jp": "比較",
              "kj": "比較",
              "r": "hikaku",
              "id": "perbandingan",
              "note": "比較する = membandingkan (formal)"
            },
            {
              "jp": "差",
              "kj": "差",
              "r": "sa",
              "id": "selisih / perbedaan",
              "note": "差がある = ada perbedaan"
            },
            {
              "jp": "両方",
              "kj": "両方",
              "r": "ryouhou",
              "id": "keduanya",
              "note": "両方とも = kedua-duanya"
            },
            {
              "jp": "程度",
              "kj": "程度",
              "r": "teido",
              "id": "tingkat / kadar",
              "note": "この程度 = sampai tingkat ini"
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Pola Perbandingan & Penekanan",
          "items": [
            {
              "pattern": "AはBより[adj] / AのほうがBより[adj]",
              "arti": "A lebih [adj] daripada B",
              "explain": "Dua pola untuk membandingkan dua hal. <b>より</b> menandai pembandingnya (\"daripada\"), sedangkan <b>ほうが</b> menandai pihak yang \"lebih...\".",
              "examples": [
                {
                  "jp": "東京はジャカルタより暑いです。",
                  "id": "Tokyo lebih panas daripada Jakarta.",
                  "rd": "とうきょうわジャカルタよりあついです。"
                },
                {
                  "jp": "りんごのほうがみかんより好きです。",
                  "id": "Saya lebih suka apel daripada jeruk.",
                  "rd": "りんごのほうがみかんよりすきです。"
                }
              ],
              "tabel": [
                {
                  "k": "AはBより[adj]",
                  "v": "A lebih [adj] daripada B"
                },
                {
                  "k": "AのほうがBより[adj]",
                  "v": "A lebih [adj] daripada B (A ditekankan)"
                }
              ]
            },
            {
              "pattern": "kata benda 1はkata benda 2ほど〜ない",
              "arti": "N1 tidak se-... N2 (= N2 lebih ...)",
              "explain": "Maknanya: \"N1 tidak sampai setingkat N2\" — jadi yang lebih ... justru <b>N2</b>. Pola ini bisa dibalik menjadi <b>N1よりN2のほうが〜</b> dengan makna yang sama. WAJIB dipakai dalam kalimat negatif!",
              "examples": [
                {
                  "jp": "今週は先週ほどいそがしくありません。",
                  "id": "Minggu ini tidak sesibuk minggu lalu.",
                  "rd": "こんしゅうわせんしゅうほどいそがしくありません。"
                },
                {
                  "jp": "日本では、ぶた肉は牛肉ほど高くありません。",
                  "id": "Di Jepang, daging babi tidak semahal daging sapi.",
                  "rd": "にほんでは、ぶたにくわぎゅうにくほどたかくありません。"
                },
                {
                  "jp": "今週もいそがしいですが、先週ほどではありません。",
                  "id": "Minggu ini juga sibuk, tetapi tidak sesibuk minggu lalu.",
                  "rd": "こんしゅうもいそがしいですが、せんしゅうほどではありません。"
                }
              ],
              "tabel": [
                {
                  "k": "N1はN2ほど～ない",
                  "v": "N1 tidak se... N2"
                },
                {
                  "k": "＝ N1よりN2のほうが～",
                  "v": "artinya sama: N2 lebih..."
                }
              ]
            },
            {
              "pattern": "(partikel) + は / も",
              "arti": "penekanan / kontras (…pun, …juga)",
              "explain": "Tempelkan <b>は</b> atau <b>も</b> SETELAH partikel lain. <b>は</b> dipakai untuk kontras (\"kalau di X, berbeda dengan Y\"), sedangkan <b>も</b> untuk penegasan ganda (\"X dan juga Y\").",
              "examples": [
                {
                  "jp": "この子は家ではうるさいですが、外ではおとなしいです。",
                  "id": "Anak ini berisik di rumah, tetapi tenang di luar.",
                  "rd": "このこわいえではうるさいですが、そとではおとなしいです。"
                },
                {
                  "jp": "たんじょう日に父からも母からもプレゼントをもらいました。",
                  "id": "Pada hari ulang tahun, saya menerima hadiah dari ayah dan juga dari ibu.",
                  "rd": "たんじょうひにちちからもははからもプレゼントおもらいました。"
                }
              ],
              "tabel": [
                {
                  "k": "では",
                  "v": "di... (kontras: kalau di sini, beda)"
                },
                {
                  "k": "でも",
                  "v": "di... juga / bahkan di..."
                },
                {
                  "k": "からも",
                  "v": "dari... juga"
                }
              ]
            },
            {
              "pattern": "[lingkup]の中で〜がいちばん[adj]",
              "arti": "[〜] yang paling [adj] di antara...",
              "explain": "Untuk menyatakan \"paling\" dalam suatu kelompok. Lingkupnya bisa apa saja: 日本の中で, クラスの中で, 一年の中で, dan sebagainya.",
              "examples": [
                {
                  "jp": "日本の中で富士山がいちばん高いです。",
                  "id": "Gunung Fuji yang paling tinggi di Jepang.",
                  "rd": "にほんのなかでふじさんがいちばんたかいです。"
                },
                {
                  "jp": "一年の中で夏がいちばん暑いです。",
                  "id": "Musim panas yang paling panas dalam setahun.",
                  "rd": "いちねんのなかでなつがいちばんあついです。"
                }
              ],
              "tabel": [
                {
                  "k": "にほんのなかで",
                  "v": "di Jepang"
                },
                {
                  "k": "クラスの中で",
                  "v": "di kelas"
                },
                {
                  "k": "一年の中で",
                  "v": "dalam setahun"
                }
              ]
            },
            {
              "pattern": "もっと・ずっと・ほとんど + [adj/verb]",
              "arti": "lebih lagi / jauh lebih / hampir",
              "explain": "<b>もっと</b> = meminta tingkat yang lebih (\"lagi\"), <b>ずっと</b> = perbedaan yang besar (\"jauh\"), <b>ほとんど</b> = mendekati 100% (\"hampir\").",
              "examples": [
                {
                  "jp": "もっとゆっくり話してください。",
                  "id": "Tolong bicara lebih pelan lagi.",
                  "rd": "もっとゆっくりはなしてください。"
                },
                {
                  "jp": "この本はあの本よりずっと面白いです。",
                  "id": "Buku ini jauh lebih menarik daripada buku itu.",
                  "rd": "このほんわあのほんよりずっとおもしろいです。"
                }
              ],
              "tabel": [
                {
                  "k": "もっと",
                  "v": "lebih... lagi"
                },
                {
                  "k": "ずっと",
                  "v": "jauh lebih..."
                },
                {
                  "k": "ほとんど",
                  "v": "hampir... (mendekati 100%)"
                }
              ]
            }
          ]
        },
        {
          "type": "kanji",
          "title": "Kanji Bab 2",
          "items": [
            {
              "ch": "比",
              "kun": "くらべる",
              "on": "ひ",
              "id": "membandingkan",
              "note": "比べる (kuraberu), 比較 (hikaku)"
            },
            {
              "ch": "同",
              "kun": "おなじ",
              "on": "どう",
              "id": "sama",
              "note": "同じ (onaji), 同時 (douji)"
            },
            {
              "ch": "違",
              "kun": "ちがう",
              "on": "い",
              "id": "berbeda",
              "note": "違う (chigau), 違反 (ihan)"
            },
            {
              "ch": "高",
              "kun": "たかい",
              "on": "こう",
              "id": "tinggi / mahal",
              "note": "高い (takai), 高校 (koukou)"
            },
            {
              "ch": "安",
              "kun": "やすい",
              "on": "あん",
              "id": "murah / tenang",
              "note": "安い (yasui), 安心 (anshin)"
            },
            {
              "ch": "最",
              "kun": "もっとも",
              "on": "さい",
              "id": "paling",
              "note": "最近 (saikin) = akhir-akhir ini"
            },
            {
              "ch": "程",
              "kun": "ほど",
              "on": "てい",
              "id": "tingkat / kadar",
              "note": "程度 (teido), 先週ほど = tidak se-minggu lalu"
            },
            {
              "ch": "差",
              "kun": "さす",
              "on": "さ",
              "id": "selisih",
              "note": "差がある (sa ga aru) = ada perbedaan"
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Membandingkan Dua Restoran",
          "lines": [
            {
              "sp": "A",
              "jp": "このレストランとあのレストランと、どちらのほうがおいしいですか。",
              "id": "Restoran ini dan restoran itu, mana yang lebih enak?"
            },
            {
              "sp": "B",
              "jp": "このレストランのほうがあのレストランよりおいしいですよ。",
              "id": "Restoran ini lebih enak daripada restoran itu."
            },
            {
              "sp": "A",
              "jp": "値段はどうですか。",
              "id": "Bagaimana harganya?"
            },
            {
              "sp": "B",
              "jp": "あのレストランのほうがもっと安いです。でも、少し遠いです。",
              "id": "Restoran itu lebih murah lagi. Tapi agak jauh."
            },
            {
              "sp": "A",
              "jp": "でも、うちの近くの店ほどおいしくないですね。",
              "id": "Tapi tidak seenak toko dekat rumah saya ya."
            },
            {
              "sp": "B",
              "jp": "そうですね。味ではあちらのほうが上ですが、サービスではこちらのほうがいいです。",
              "id": "Benar. Kalau soal rasa sana lebih unggul, tapi kalau soal pelayanan sini lebih bagus."
            },
            {
              "sp": "A",
              "jp": "この辺でいちばん有名なレストランはどこですか。",
              "id": "Restoran paling terkenal di sekitar sini di mana?"
            },
            {
              "sp": "B",
              "jp": "駅の前にある「さくら」がいちばん有名です。",
              "id": "\"Sakura\" di depan stasiun yang paling terkenal."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "東京はジャカルタ___暑いです。 (Tokyo lebih panas daripada Jakarta)",
          "o": [
            "より",
            "ほうが",
            "いちばん",
            "もっと"
          ],
          "a": 0,
          "explain": "より menandai pembanding (\"daripada\")."
        },
        {
          "q": "今週は先週___いそがしくありません。 (Minggu ini tidak sesibuk minggu lalu)",
          "o": [
            "より",
            "ほど",
            "ほうが",
            "もっと"
          ],
          "a": 1,
          "explain": "N1はN2ほど〜ない = N1 tidak se-... N2 (wajib negatif)."
        },
        {
          "q": "日本の中で富士山___高いです。 (Gunung Fuji paling tinggi di Jepang)",
          "o": [
            "より",
            "ほうが",
            "がいちばん",
            "もっと"
          ],
          "a": 2,
          "explain": "Pola superlatif: 〜がいちばん."
        },
        {
          "q": "もっとゆっくり話してください。Artinya…",
          "o": [
            "Tolong bicara cepat",
            "Tolong bicara lebih pelan lagi",
            "Jangan bicara",
            "Bicara sekali lagi"
          ],
          "a": 1,
          "explain": "もっと = \"lebih lagi\" (meminta tambahan kadar)."
        },
        {
          "q": "この子は家___うるさいですが、外ではおとなしいです。",
          "o": [
            "では",
            "でも",
            "へは",
            "をは"
          ],
          "a": 0,
          "explain": "(partikel)+は untuk kontras: では = \"kalau di (rumah)\" vs \"di luar\"."
        },
        {
          "q": "りんご___みかんより好きです。 (Saya lebih suka apel daripada jeruk)",
          "o": [
            "より",
            "のほうが",
            "いちばん",
            "ほとんど"
          ],
          "a": 1,
          "explain": "のほうが menandai pihak yang \"lebih\"."
        },
        {
          "q": "Mana kalimat yang BENAR?",
          "o": [
            "東京のほうがジャカルタより暑いです",
            "東京よりのほうが暑いです",
            "東京ほうがジャカルタより暑いです",
            "東京よりほうが暑いです"
          ],
          "a": 0,
          "explain": "Urutan benar: AのほうがBより[adj]."
        },
        {
          "q": "たんじょう日に父___母___プレゼントをもらいました。 (…dari ayah dan juga dari ibu)",
          "o": [
            "からは",
            "からも",
            "へも",
            "よりも"
          ],
          "a": 1,
          "explain": "(partikel)+も untuk penegasan ganda: からも…からも = \"dari … dan juga dari …\"."
        },
        {
          "q": "3時___会議があります。(Rapat ada DARI jam 3)",
          "o": [
            "から",
            "まで",
            "より",
            "ほど"
          ],
          "a": 0,
          "explain": "Titik awal \"dari\" jam 3 → pakai から. Pasangannya まで (sampai)."
        },
        {
          "q": "今週は先週ほどいそがしくありません = …",
          "o": [
            "Minggu ini lebih sibuk dari minggu lalu",
            "Minggu lalu lebih sibuk dari minggu ini",
            "Keduanya sama sibuknya",
            "Minggu ini tidak sibuk sama sekali"
          ],
          "a": 1,
          "explain": "ほど〜ない: N1 tidak sampai setingkat N2 → N2 (minggu lalu) yang lebih sibuk."
        }
      ]
    },
    {
      "id": "n4-3",
      "bab": 3,
      "level": "n4",
      "title": "Te-iru, Te-aru, Tokoro & Pergerakan",
      "desc": "Waktu presisi dengan ところ, beda transitif-intransitif, dan arah てくる・ていく",
      "icon": "🔁",
      "sections": [
        {
          "type": "penjelasan",
          "title": "Timing Presisi ala ところ + Arah Gerak てくる・ていく",
          "body": "Bentuk <b>〜ている</b> punya <b>DUA makna</b> dan inilah sumber kebingungan terbesar di N4. Makna 1: <b>aksi sedang berlangsung</b> — 今ご飯を食べている (sekarang sedang makan). Makna 2: <b>hasil keadaan yang bertahan</b> — 結婚している (sudah menikah [dan masih menikah sampai sekarang]), 知っている (tahu [hasil dari \"mengetahui\"]).\n\nKuncinya ada pada <b>jenis kata kerjanya</b>. Kata kerja aksi kontinu (食べる, 走る, 読む, 勉強する) → ている bermakna <b>sedang berlangsung</b>. Kata kerja perubahan keadaan yang terjadi sekali lalu bertahan (結婚する menikah, 壊れる rusak, 知る mengetahui, 死ぬ mati) → ている bermakna <b>hasil yang masih berlaku</b>. Logikanya: menikah itu kejadiannya sekali, yang bertahan adalah \"status menikah\"-nya.\n\nLalu ada <b>〜てある</b>: dipakai untuk keadaan hasil dari aksi yang <b>disengaja</b>, dengan nuansa \"sudah disiapkan\". 窓が開けてある = jendela (sengaja) dibiarkan terbuka. Syaratnya: kata kerja <b>transitif</b> (ada objeknya). Bandingkan: 電気がついている (lampu menyala — netral) vs 電気がつけてある (lampu sengaja dinyalakan [untuk persiapan]).\n\n<b>BARU: trio ところ</b> — pola \"titik waktu presisi\" yang bikin kalimatmu terdengar seperti native:\n\n• <b>V(かます)+ところ</b> = tepat <b>akan</b> melakukan — 今から家を出るところです (sekarang tepat mau keluar rumah).\n• <b>Vている+ところ</b> = tepat <b>sedang</b> melakukan — 今、料理を作っているところです (sekarang sedang masak).\n• <b>V(た)+ところ</b> = <b>baru saja selesai</b> — お昼ご飯を食べたところです (baru saja selesai makan siang).\n\nRumus hafalannya: <b>bentuk kamus = sebelum, ている = saat, bentuk-ta = sesudah</b>.\n\n<b>BARU: transitif vs intransitif.</b> Banyak kata kerja Jepang datang berpasangan: <b>transitif</b> (他動詞, ada pelaku + objek を) vs <b>intransitif</b> (自動詞, terjadi sendiri + subjek が). Contoh: 開ける (membuka, transitif: ドアを開ける) ⇔ 開く (terbuka, intransitif: ドアが開く); 壊す ⇔ 壊れる; 止める ⇔ 止まる; 閉める ⇔ 閉まる. Rumus: <b>ada を → transitif, ada が → intransitif</b>. Ini fondasi untuk memahami kenapa てある hanya bisa dipakai kata kerja transitif!\n\n<b>BARU: てくる & ていく.</b> Dua pola \"arah\" dengan dua makna masing-masing:\n\n• <b>Ruang (fisik):</b> てくる = bergerak <b>mendekati pembicara</b> (持ってくる = membawa ke sini), ていく = bergerak <b>menjauhi pembicara</b> (持っていく = membawa pergi).\n• <b>Waktu (perubahan bertahap):</b> てくる = perubahan yang <b>sudah terjadi sampai sekarang</b> — だんだん暑くなってきた (perlahan menjadi panas [sampai sekarang]). ていく = perubahan yang <b>akan berlanjut ke depan</b> — これから寒くなっていく (mulai sekarang akan menjadi dingin).\n\n<b>Jebakan JLPT:</b> (1) tentukan dulu jenis kata kerjanya sebelum menerjemahkan ている; (2) てある HANYA untuk kata kerja transitif + nuansa kesengajaan; (3) jangan tertukar ところ tiga bentuknya — perhatikan bentuk kata kerjanya (kamus/ている/た); (4) てくる = ke arah sini/sampai sekarang, ていく = menjauh/ke depan."
        },
        {
          "type": "kotoba",
          "title": "Kosakata Keadaan, Waktu & Pergerakan",
          "items": [
            {
              "jp": "結婚する",
              "kj": "結婚する",
              "r": "kekkon suru",
              "id": "menikah",
              "note": "結婚している = sudah menikah (status)"
            },
            {
              "jp": "知る",
              "kj": "知る",
              "r": "shiru",
              "id": "mengetahui",
              "note": "知っている = tahu (hasil)"
            },
            {
              "jp": "壊れる",
              "kj": "壊れる",
              "r": "kowareru",
              "id": "rusak (sendiri)",
              "note": "壊れている = dalam keadaan rusak"
            },
            {
              "jp": "開ける",
              "kj": "開ける",
              "r": "akeru",
              "id": "membuka (transitif)",
              "note": "開けてある = sengaja dibiarkan terbuka"
            },
            {
              "jp": "閉める",
              "kj": "閉める",
              "r": "shimeru",
              "id": "menutup (transitif)",
              "note": "Pasangan: 開ける⇔閉める"
            },
            {
              "jp": "準備する",
              "kj": "準備する",
              "r": "junbi suru",
              "id": "bersiap-siap",
              "note": "準備ができる = persiapan selesai"
            },
            {
              "jp": "掃除する",
              "kj": "掃除する",
              "r": "souji suru",
              "id": "membersihkan",
              "note": "掃除してある = sudah dibersihkan (siap)"
            },
            {
              "jp": "並べる",
              "kj": "並べる",
              "r": "naraberu",
              "id": "menjajarkan / menyusun",
              "note": "Transitif: 並ぶ (intransitif)"
            },
            {
              "jp": "掛ける",
              "kj": "掛ける",
              "r": "kakeru",
              "id": "menggantungkan / menelepon",
              "note": "電話を掛ける = menelepon"
            },
            {
              "jp": "残る",
              "kj": "残る",
              "r": "nokoru",
              "id": "tersisa / tertinggal",
              "note": "お金が残っている = uangnya masih tersisa"
            },
            {
              "jp": "慣れる",
              "kj": "慣れる",
              "r": "nareru",
              "id": "terbiasa",
              "note": "慣れている = sudah terbiasa"
            },
            {
              "jp": "止める",
              "kj": "止める",
              "r": "tomeru",
              "id": "menghentikan",
              "note": "Transitif: 止まる (intransitif)"
            },
            {
              "jp": "ところ",
              "kj": "所",
              "r": "tokoro",
              "id": "titik / saat (waktu presisi)",
              "note": "出るところ = tepat akan keluar"
            },
            {
              "jp": "持ってくる",
              "kj": "持ってくる",
              "r": "motte kuru",
              "id": "membawa ke sini",
              "note": "てくる = mendekati pembicara"
            },
            {
              "jp": "持っていく",
              "kj": "持っていく",
              "r": "motte iku",
              "id": "membawa pergi",
              "note": "ていく = menjauhi pembicara"
            },
            {
              "jp": "連れてくる",
              "kj": "連れてくる",
              "r": "tsurete kuru",
              "id": "mengajak datang",
              "note": "Untuk orang/hewan: 友達を連れてくる"
            },
            {
              "jp": "帰ってくる",
              "kj": "帰ってくる",
              "r": "kaette kuru",
              "id": "pulang kembali",
              "note": "Kembali ke tempat pembicara"
            },
            {
              "jp": "だんだん",
              "r": "dandan",
              "id": "perlahan-lahan / berangsur",
              "note": "Sering dengan てくる/ていく"
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Pola ている・てある・ところ・てくる/ていく",
          "items": [
            {
              "pattern": "kata kerja (aksi)+ている",
              "arti": "sedang [melakukan]",
              "explain": "Untuk kata kerja <b>aksi kontinu</b>: maknanya \"sedang berlangsung saat ini juga\".",
              "examples": [
                {
                  "jp": "今、ご飯を食べているところです。",
                  "id": "Sekarang sedang makan.",
                  "rd": "いま、ごはんおたべているところです。"
                },
                {
                  "jp": "弟は外で遊んでいます。",
                  "id": "Adik sedang bermain di luar.",
                  "rd": "おとうとわそとであそんでいます。"
                }
              ]
            },
            {
              "pattern": "kata kerja (perubahan)+ている",
              "arti": "sudah... (dan keadaannya masih)",
              "explain": "Untuk kata kerja <b>perubahan keadaan sekali-jadi</b>: maknanya \"sudah terjadi, dan hasilnya masih bertahan sampai sekarang\".",
              "examples": [
                {
                  "jp": "田中さんは結婚しています。",
                  "id": "Tanaka sudah menikah (dan masih).",
                  "rd": "たなかさんわけっこんしています。"
                },
                {
                  "jp": "この時計は壊れています。",
                  "id": "Jam ini rusak (keadaannya).",
                  "rd": "このとけいわこわれています。"
                }
              ]
            },
            {
              "pattern": "Vtて+ある",
              "arti": "sudah (sengaja) di-... [keadaan hasil]",
              "explain": "Hanya untuk kata kerja <b>transitif</b>. Pola ini menekankan bahwa keadaan yang terlihat adalah <b>hasil kesengajaan atau persiapan</b> seseorang.",
              "examples": [
                {
                  "jp": "窓が開けてあります。",
                  "id": "Jendela (sengaja) dibiarkan terbuka.",
                  "rd": "まどがあけてあります。"
                },
                {
                  "jp": "部屋が掃除してあります。",
                  "id": "Kamar sudah dibersihkan (siap dipakai).",
                  "rd": "へやがそうじしてあります。"
                }
              ],
              "tabel": [
                {
                  "k": "まどがあけてあります",
                  "v": "jendela dibiarkan terbuka (sengaja disiapkan)"
                },
                {
                  "k": "まどがあいています",
                  "v": "jendela terbuka (keadaan saja)"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk kamus+ところ",
              "arti": "tepat akan / baru mau …",
              "explain": "Menyatakan titik waktu <b>tepat sebelum</b> aksi dimulai. Rumus mudahnya: bentuk kamus + ところ = sebelum aksi.",
              "examples": [
                {
                  "jp": "今から家を出るところです。",
                  "id": "Saya baru akan keluar dari rumah sekarang.",
                  "rd": "いまからいえおでるところです。"
                },
                {
                  "jp": "これからご飯を食べるところです。",
                  "id": "Saya baru akan makan sekarang.",
                  "rd": "これからごはんおたべるところです。"
                }
              ],
              "tabel": [
                {
                  "k": "でるところ",
                  "v": "baru akan keluar (bentuk kamus)"
                },
                {
                  "k": "でているところ",
                  "v": "sedang keluar (bentuk -te iru)"
                },
                {
                  "k": "でたところ",
                  "v": "baru saja keluar (bentuk lampau)"
                }
              ]
            },
            {
              "pattern": "kata kerja -te iru + ところ",
              "arti": "tepat sedang … (saat ini)",
              "explain": "Pakai pola ini kalau kamu mau menegaskan bahwa sesuatu <b>tepat sedang berlangsung</b> sekarang juga. Lebih tajam daripada ている biasa — nuansanya \"pas lagi …\".",
              "examples": [
                {
                  "jp": "今、料理を作っているところです。",
                  "id": "Sekarang saya sedang memasak.",
                  "rd": "いま、りょうりおつくっているところです。"
                },
                {
                  "jp": "すみません、今電話をしているところです。",
                  "id": "Maaf, saya sedang menelepon sekarang.",
                  "rd": "すみません、いまでんわおしているところです。"
                }
              ],
              "tabel": [
                {
                  "k": "kata kerja bentuk kamus + ところ",
                  "v": "tepat akan / baru mau melakukan"
                },
                {
                  "k": "kata kerja -te iru + ところ",
                  "v": "tepat sedang melakukan"
                },
                {
                  "k": "kata kerja bentuk lampau + ところ",
                  "v": "baru saja selesai melakukan"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk lampau+ところ",
              "arti": "baru saja selesai …",
              "explain": "Untuk momen <b>tepat setelah</b> suatu aksi selesai — nuansanya \"baru saja …\". Pasangannya ているところ: kalau ているところ itu \"pas lagi\", maka たところ itu \"baru saja selesai\".",
              "examples": [
                {
                  "jp": "今、お昼ご飯を食べたところです。",
                  "id": "Saya baru saja selesai makan siang.",
                  "rd": "いま、おひるごはんおたべたところです。"
                },
                {
                  "jp": "今、駅に着いたところです。",
                  "id": "Saya baru saja tiba di stasiun.",
                  "rd": "いま、えきについたところです。"
                }
              ]
            },
            {
              "pattern": "kata kerja transitif (を) ⇔ kata kerja intransitif (が)",
              "arti": "kata kerja transitif vs intransitif (berpasangan)",
              "explain": "<b>Transitif</b> butuh pelaku dan objek: partikelnya <b>を</b> (ドアを開ける = membuka pintu). <b>Intransitif</b> terjadi sendiri: subjeknya <b>が</b> (ドアが開く = pintu terbuka sendiri). Pasangan ini wajib dihafal: 開ける⇔開く、閉める⇔閉まる、壊す⇔壊れる、止める⇔止まる.",
              "examples": [
                {
                  "jp": "ドアを開けてください。",
                  "id": "Tolong buka pintunya.",
                  "rd": "ドアおあけてください。"
                },
                {
                  "jp": "風でドアが開きました。",
                  "id": "Pintu terbuka karena angin.",
                  "rd": "かぜでドアがあきました。"
                }
              ],
              "tabel": [
                {
                  "k": "ドアをあける ⇔ ドアがあく",
                  "v": "membuka pintu ⇔ pintu terbuka"
                },
                {
                  "k": "電気を消す ⇔ 電気が消える",
                  "v": "mematikan lampu ⇔ lampu padam"
                },
                {
                  "k": "コップを落とす ⇔ コップが落ちる",
                  "v": "menjatuhkan gelas ⇔ gelas jatuh"
                },
                {
                  "k": "車を止める ⇔ 車が止まる",
                  "v": "menghentikan mobil ⇔ mobil berhenti"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk -te + くる",
              "arti": "(membawa) ke sini / menjadi … (sampai sekarang)",
              "explain": "Punya dua makna. (1) <b>Ruang</b>: bergerak mendekati pembicara — 持ってくる = membawa ke sini. (2) <b>Waktu</b>: perubahan bertahap yang sudah sampai sekarang — だんだん〜なってきた. Bayangkan panah yang bergerak ke arah \"sekarang\".",
              "examples": [
                {
                  "jp": "かばんを持ってきてください。",
                  "id": "Tolong bawa tasnya ke sini.",
                  "rd": "かばんおもってきてください。"
                },
                {
                  "jp": "だんだん暑くなってきました。",
                  "id": "Perlahan-lahan menjadi panas (sampai sekarang).",
                  "rd": "だんだんあつくなってきました。"
                }
              ],
              "tabel": [
                {
                  "k": "持ってくる",
                  "v": "membawa (ke sini)"
                },
                {
                  "k": "連れてくる",
                  "v": "mengajak (ke sini)"
                },
                {
                  "k": "走ってくる",
                  "v": "berlari (ke sini)"
                },
                {
                  "k": "だんだん寒くなってきた",
                  "v": "makin dingin (sampai sekarang)"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk -te + いく",
              "arti": "(membawa) pergi / akan menjadi … (ke depan)",
              "explain": "Kebalikan dari てくる. (1) <b>Ruang</b>: bergerak menjauhi pembicara — 持っていく = membawa pergi. (2) <b>Waktu</b>: perubahan yang akan berlanjut ke masa depan — 〜なっていく. Panahnya bergerak menjauh dari \"sekarang\".",
              "examples": [
                {
                  "jp": "この本を持っていってもいいですか。",
                  "id": "Bolehkah saya membawa buku ini pergi?",
                  "rd": "このほんおもっていってもいいですか。"
                },
                {
                  "jp": "これから寒くなっていきます。",
                  "id": "Mulai sekarang akan menjadi dingin.",
                  "rd": "これからさむくなっていきます。"
                }
              ],
              "tabel": [
                {
                  "k": "持っていく",
                  "v": "membawa pergi"
                },
                {
                  "k": "連れていく",
                  "v": "mengajak pergi"
                },
                {
                  "k": "だんだん暖かくなっていく",
                  "v": "makin hangat (ke depannya)"
                }
              ]
            }
          ]
        },
        {
          "type": "kanji",
          "title": "Kanji Bab 3",
          "items": [
            {
              "ch": "続",
              "kun": "つづく",
              "on": "ぞく",
              "id": "berlanjut",
              "note": "続ける (tsuzukeru) = melanjutkan"
            },
            {
              "ch": "結",
              "kun": "むすぶ",
              "on": "けつ",
              "id": "mengikat / menyimpulkan",
              "note": "結婚 (kekkon) = pernikahan"
            },
            {
              "ch": "壊",
              "kun": "こわれる",
              "on": "かい",
              "id": "rusak",
              "note": "壊れる (kowareru) intransitif"
            },
            {
              "ch": "開",
              "kun": "あける・ひらく",
              "on": "かい",
              "id": "membuka",
              "note": "開ける (akeru) transitif"
            },
            {
              "ch": "閉",
              "kun": "しめる",
              "on": "へい",
              "id": "menutup",
              "note": "閉める (shimeru) transitif"
            },
            {
              "ch": "残",
              "kun": "のこる",
              "on": "ざん",
              "id": "sisa / tertinggal",
              "note": "残業 (zangyou) = lembur"
            },
            {
              "ch": "所",
              "kun": "ところ",
              "on": "しょ",
              "id": "tempat / titik",
              "note": "出るところ = titik akan keluar"
            },
            {
              "ch": "持",
              "kun": "もつ",
              "on": "じ",
              "id": "memegang / membawa",
              "note": "持ってくる (motte kuru)"
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Bertamu",
          "lines": [
            {
              "sp": "A",
              "jp": "お邪魔します。わあ、部屋がきれいに掃除してありますね。",
              "id": "Permisi. Wah, kamarnya sudah dibersihkan rapi ya."
            },
            {
              "sp": "B",
              "jp": "ええ、昨日掃除しておきました。どうぞ座ってください。",
              "id": "Ya, kemarin sudah saya bersihkan duluan. Silakan duduk."
            },
            {
              "sp": "A",
              "jp": "お土産を持ってきました。どうぞ。",
              "id": "Saya membawa oleh-oleh. Silakan."
            },
            {
              "sp": "B",
              "jp": "わあ、ありがとうございます。ちょうどお茶を入れているところでした。",
              "id": "Wah, terima kasih. Saya pas sedang menyeduh teh."
            },
            {
              "sp": "A",
              "jp": "窓が開けてありますが、寒くないですか。",
              "id": "Jendelanya dibiarkan terbuka, tidak dingin?"
            },
            {
              "sp": "B",
              "jp": "大丈夫です。もう春になっていますから。",
              "id": "Tidak apa-apa. Karena sudah menjadi musim semi."
            },
            {
              "sp": "A",
              "jp": "この写真の人はご主人ですか。",
              "id": "Orang di foto ini suamimu?"
            },
            {
              "sp": "B",
              "jp": "はい、去年結婚しました。今は大阪に住んでいます。",
              "id": "Ya, tahun lalu menikah. Sekarang tinggal di Osaka."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "今、ご飯を___。 (Sekarang sedang makan)",
          "o": [
            "食べた",
            "食べている",
            "食べてある",
            "食べる"
          ],
          "a": 1,
          "explain": "Aksi kontinu + ている = sedang berlangsung."
        },
        {
          "q": "今から家を出る___です。 (Baru akan keluar rumah)",
          "o": [
            "ところ",
            "ばかり",
            "まま",
            "ながら"
          ],
          "a": 0,
          "explain": "V(kamus)+ところ = tepat akan melakukan."
        },
        {
          "q": "お昼ご飯を食べた___です。 (Baru saja selesai makan siang)",
          "o": [
            "ところ",
            "まま",
            "ながら",
            "し"
          ],
          "a": 0,
          "explain": "V(ta)+ところ = baru saja selesai melakukan."
        },
        {
          "q": "窓が開けて___。 (Jendela sengaja dibiarkan terbuka)",
          "o": [
            "いる",
            "ある",
            "おく",
            "くる"
          ],
          "a": 1,
          "explain": "てある = keadaan hasil kesengajaan (transitif)."
        },
        {
          "q": "この時計は___。 (Jam ini dalam keadaan rusak)",
          "o": [
            "壊している",
            "壊してある",
            "壊れている",
            "壊す"
          ],
          "a": 2,
          "explain": "壊れる intransitif (perubahan) → 壊れている = keadaannya rusak."
        },
        {
          "q": "かばんを持って___ください。 (Tolong bawa tasnya ke sini)",
          "o": [
            "いって",
            "きて",
            "おいて",
            "みて"
          ],
          "a": 1,
          "explain": "てくる = bergerak mendekati pembicara → 持ってきて."
        },
        {
          "q": "これからだんだん寒くなって___。 (Akan menjadi dingin ke depannya)",
          "o": [
            "きます",
            "いきます",
            "おきます",
            "みます"
          ],
          "a": 1,
          "explain": "ていく = perubahan berlanjut ke depan → なっていきます."
        },
        {
          "q": "Mana pasangan transitif–intransitif yang BENAR?",
          "o": [
            "開ける⇔開く",
            "開く⇔開ける",
            "壊れる⇔壊す",
            "閉まる⇔閉める"
          ],
          "a": 0,
          "explain": "Transitif (を): 開ける・壊す・閉める. Intransitif (が): 開く・壊れる・閉まる."
        },
        {
          "q": "ドア___開きました。 (Pintu terbuka [sendiri])",
          "o": [
            "を",
            "が",
            "に",
            "で"
          ],
          "a": 1,
          "explain": "開く intransitif (terjadi sendiri) → subjek pakai が."
        },
        {
          "q": "知っている artinya…",
          "o": [
            "Sedang mengetahui",
            "Tahu (hasil mengetahui)",
            "Akan tahu",
            "Ingin tahu"
          ],
          "a": 1,
          "explain": "知る = perubahan sekali-jadi → 知っている = \"tahu\" (hasilnya bertahan)."
        }
      ]
    },
    {
      "id": "n4-4",
      "bab": 4,
      "level": "n4",
      "title": "Alasan & Tujuan",
      "desc": "Menyatakan kenapa dan untuk apa: から・ので・て-form・ために・ように・のに",
      "icon": "🎯",
      "sections": [
        {
          "type": "penjelasan",
          "title": "Kenapa? Untuk Apa? Enam Senjata N4",
          "body": "Di N4 ada <b>enam pola</b> untuk \"kenapa\" dan \"untuk apa\" yang WAJIB dibedakan nuansanya: <b>から</b>, <b>ので</b>, <b>bentuk-て (alasan)</b>, <b>ために</b>, <b>ように</b>, <b>のに</b>. Ini salah satu materi yang paling sering keluar di JLPT N4!\n\n<b>から vs ので</b> (alasan): から itu tegas, subjektif, dan <b>boleh</b> dipakai untuk perintah/ajakan/pendapat — 暑いから、窓を開けてください (karena panas, tolong buka jendela). ので lebih lembut, objektif, sopan — dan <b>tidak natural</b> untuk perintah langsung. Aturan praktis: kalau klausa utama berupa perintah (〜てください) atau ajakan (〜ましょう), pakai <b>から</b>.\n\n<b>BARU: bentuk-て sebagai alasan.</b> Bentuk-て / bentuk-で juga bisa menyatakan sebab: かぜ<b>で</b>学校を休みました (tidak masuk sekolah karena flu), このカレーはからく<b>て</b>食べられません (kari ini terlalu pedas sehingga tidak bisa dimakan), お金がなく<b>て</b>、買えない (tidak ada uang, jadi tidak bisa beli). Tapi ada <b>LARANGAN KERAS</b>: setelah bentuk-て yang menyatakan alasan, <b>TIDAK BOLEH</b> ada kalimat perintah, permintaan, ajakan, atau keinginan! Jadi 暑くて、窓を開けてください itu SALAH — yang benar 暑い<b>から</b>、窓を開けてください. Inilah jebakan klasik JLPT!\n\n<b>ために vs ように</b> (tujuan): ために untuk tujuan yang dicapai lewat <b>usaha langsung dan disengaja</b> — subjeknya sama, kata kerjanya aktif: 合格するために、毎日勉強します (agar lulus, belajar tiap hari). Bentuknya: V(kamus)+ために. ように untuk tujuan yang hasilnya <b>di luar kendali langsung</b> / butuh cara tak langsung: 忘れないように、メモします (agar tidak lupa, saya mencatat). Polanya: V(ない)+ように atau V(potensial)+ように. ために juga punya arti kedua: \"demi/untuk\" — 家族のために働きます (bekerja demi keluarga).\n\n<b>BARU: ために sebagai alasan.</b> Hati-hati, ために punya wajah kedua! Kalau kata bendanya berupa <b>penyebab/kejadian</b>, ために artinya \"karena/gara-gara\": 台風のために試合が中止になった (pertandingan dibatalkan karena topan), 火事のために電車が止まった (kereta berhenti karena kebakaran). Rumus: N(penyebab)+ために = alasan; N(orang/tujuan)+ために = \"demi\".\n\n<b>BARU: のに dengan dua wajah.</b> Pola のに ini licik karena punya dua makna yang berlawanan arah:\n\n• <b>のに (逆接) = \"padahal\"</b> — menyatakan kekecewaan karena hasil <b>berbeda dari harapan</b>: きのう勉強したのに、もう忘れてしまいました (padahal kemarin sudah belajar, tapi sudah lupa lagi). Polanya: V(ta)/A(i)/na-A(な)+のに.\n• <b>のに (目的) = \"untuk\"</b> — menyatakan tujuan, artinya sama dengan 〜するために: この絵をかくのに1か月かかりました (menggambar lukisan ini butuh waktu satu bulan). Polanya: V(kamus)+のに, biasanya diikuti かかる (butuh waktu/biaya) atau 使う (memakai).\n\nCara membedakan: kalau kalimatnya bernada <b>kecewa/kontradiksi</b> → 逆接 (\"padahal\"); kalau kalimatnya tentang <b>waktu/biaya/cara untuk mencapai sesuatu</b> → 目的 (\"untuk\").\n\n<b>Ringkasan cepat:</b> alasan tegas + perintah → から | alasan lembut → ので | alasan via bentuk-て (tanpa perintah!) → て/で | tujuan lewat usaha sendiri → ために | tujuan tak langsung/harapan → ように | padahal (kecewa) → のに逆接 | untuk (butuh waktu/biaya) → のに目的."
        },
        {
          "type": "kotoba",
          "title": "Kosakata Alasan & Tujuan",
          "items": [
            {
              "jp": "理由",
              "kj": "理由",
              "r": "riyuu",
              "id": "alasan",
              "note": "理由を聞く = menanyakan alasan"
            },
            {
              "jp": "原因",
              "kj": "原因",
              "r": "genin",
              "id": "penyebab",
              "note": "原因は不明です = penyebabnya tidak jelas"
            },
            {
              "jp": "おかげ",
              "r": "okage",
              "id": "berkat (positif)",
              "note": "おかげさまで = berkat (doa)mu"
            },
            {
              "jp": "せい",
              "r": "sei",
              "id": "gara-gara (negatif)",
              "note": "雨のせいで遅れた = terlambat gara-gara hujan"
            },
            {
              "jp": "目的",
              "kj": "目的",
              "r": "mokuteki",
              "id": "tujuan",
              "note": "目的のために = demi tujuan"
            },
            {
              "jp": "夢",
              "kj": "夢",
              "r": "yume",
              "id": "impian / mimpi",
              "note": "夢を叶える = mewujudkan impian"
            },
            {
              "jp": "成功",
              "kj": "成功",
              "r": "seikou",
              "id": "keberhasilan",
              "note": "成功する = berhasil"
            },
            {
              "jp": "失敗",
              "kj": "失敗",
              "r": "shippai",
              "id": "kegagalan",
              "note": "失敗する = gagal"
            },
            {
              "jp": "予定",
              "kj": "予定",
              "r": "yotei",
              "id": "rencana / jadwal",
              "note": "予定がある = ada rencana"
            },
            {
              "jp": "都合",
              "kj": "都合",
              "r": "tsugou",
              "id": "keadaan (waktu)/kondisi",
              "note": "都合が悪い = waktunya tidak pas"
            },
            {
              "jp": "具合",
              "kj": "具合",
              "r": "guai",
              "id": "kondisi (badan)",
              "note": "具合が悪い = badan tidak enak"
            },
            {
              "jp": "努力",
              "kj": "努力",
              "r": "doryoku",
              "id": "usaha keras",
              "note": "努力の結果 = hasil usaha"
            },
            {
              "jp": "風邪",
              "kj": "風邪",
              "r": "kaze",
              "id": "flu / pilek",
              "note": "かぜで休む = absen karena flu"
            },
            {
              "jp": "台風",
              "kj": "台風",
              "r": "taifuu",
              "id": "topan",
              "note": "台風のために = karena topan"
            },
            {
              "jp": "期待",
              "kj": "期待",
              "r": "kitai",
              "id": "harapan / ekspektasi",
              "note": "期待したのに = padahal sudah berharap"
            },
            {
              "jp": "結果",
              "kj": "結果",
              "r": "kekka",
              "id": "hasil",
              "note": "結果が出る = hasilnya keluar"
            },
            {
              "jp": "残念",
              "kj": "残念",
              "r": "zannen",
              "id": "sayang / disayangkan",
              "note": "残念ですね = sayang sekali ya"
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Pola Alasan & Tujuan",
          "items": [
            {
              "pattern": "(kalimat biasa) + から / (bentuk sopan) + ので",
              "arti": "karena...",
              "explain": "<b>から</b> itu tegas dan subjektif — boleh dipakai untuk perintah atau ajakan. <b>ので</b> lebih lembut, objektif, dan sopan, makanya hindari memakainya untuk perintah langsung. Santai: pakai から. Mau terdengar sopan: pakai ので.",
              "examples": [
                {
                  "jp": "暑いから、窓を開けてください。",
                  "id": "Karena panas, tolong buka jendela.",
                  "rd": "あついから、まどおあけてください。"
                },
                {
                  "jp": "病気なので、今日は休みます。",
                  "id": "Karena sakit, hari ini saya istirahat.",
                  "rd": "びょうきなので、きょうわやすみます。"
                }
              ],
              "tabel": [
                {
                  "k": "〜から",
                  "v": "karena — tegas, boleh di akhir kalimat"
                },
                {
                  "k": "〜ので",
                  "v": "karena — halus / sopan"
                }
              ]
            },
            {
              "pattern": "〜て / 〜で (alasan)",
              "arti": "karena … / sehingga …",
              "explain": "Bentuk-て ternyata juga bisa menyatakan sebab atau alasan. Tapi awas, ada <b>larangan</b>: setelahnya TIDAK BOLEH ada perintah, permintaan, ajakan, atau keinginan. Kalau mau memerintah atau mengajak, pakai から atau ので.",
              "examples": [
                {
                  "jp": "かぜで学校を休みました。",
                  "id": "Saya tidak masuk sekolah karena flu.",
                  "rd": "かぜでがっこうおやすみました。"
                },
                {
                  "jp": "このカレーはからくて食べられません。",
                  "id": "Kari ini terlalu pedas sehingga tidak bisa dimakan.",
                  "rd": "このカレーわからくてたべられません。"
                },
                {
                  "jp": "お金がなくて、買えない。",
                  "id": "Tidak ada uang, jadi tidak bisa beli.",
                  "rd": "おかねがなくて、かえない。"
                }
              ],
              "tabel": [
                {
                  "k": "驚いて遅れた",
                  "v": "karena terkejut, jadi terlambat"
                },
                {
                  "k": "かぜで休んだ",
                  "v": "karena flu, istirahat"
                },
                {
                  "k": "〜て + 〜てください ✗",
                  "v": "larangan: setelah 〜て alasan tak boleh ada perintah"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk kamus+ために / kata benda+のために",
              "arti": "untuk / demi / agar (tujuan lewat usaha)",
              "explain": "Untuk tujuan yang dicapai lewat <b>usaha langsung</b> — kamu berbuat sesuatu agar hasilnya tercapai. Ada juga bentuk N + のために yang artinya \"demi\" seseorang atau sesuatu.",
              "examples": [
                {
                  "jp": "合格するために、毎日勉強します。",
                  "id": "Agar lulus, saya belajar setiap hari.",
                  "rd": "ごうかくするために、まいにちべんきょうします。"
                },
                {
                  "jp": "家族のために働きます。",
                  "id": "Saya bekerja demi keluarga.",
                  "rd": "かぞくのためにはたらきます。"
                }
              ],
              "tabel": [
                {
                  "k": "留学するために",
                  "v": "untuk kuliah di luar negeri"
                },
                {
                  "k": "健康のために",
                  "v": "demi kesehatan"
                },
                {
                  "k": "家族のために",
                  "v": "demi keluarga"
                }
              ]
            },
            {
              "pattern": "kata benda(penyebab)+ために",
              "arti": "karena / gara-gara N",
              "explain": "Wajah kedua dari ために! Kalau kata bendanya berupa <b>penyebab atau kejadian</b>, artinya berubah jadi \"karena\" atau \"gara-gara\", bukan \"demi\". Jadi bedakan: N (orang/tujuan) + ために = \"demi\", tapi N (penyebab/kejadian) + ために = \"karena\".",
              "examples": [
                {
                  "jp": "台風のために試合が中止になった。",
                  "id": "Pertandingan dibatalkan karena topan.",
                  "rd": "たいふうのためにしあいがちゅうしになった。"
                },
                {
                  "jp": "火事のために電車が止まった。",
                  "id": "Kereta berhenti karena kebakaran.",
                  "rd": "かじのためにでんしゃがとまった。"
                }
              ],
              "tabel": [
                {
                  "k": "台風のために",
                  "v": "karena / gara-gara taifun"
                },
                {
                  "k": "病気のために",
                  "v": "karena sakit"
                },
                {
                  "k": "ために (tujuan) vs ために (alasan)",
                  "v": "untuk vs karena — bedakan dari konteks"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk negatif+ように / kata kerja bentuk bisa+ように",
              "arti": "agar / supaya (tujuan tak langsung)",
              "explain": "Untuk tujuan yang hasilnya <b>tidak bisa kamu kontrol langsung</b>: harapan, pencegahan, atau kemampuan. Makanya sering dipasangkan dengan bentuk negatif atau bentuk potensial — hal-hal yang memang di luar kendalimu.",
              "examples": [
                {
                  "jp": "忘れないように、メモします。",
                  "id": "Agar tidak lupa, saya mencatat.",
                  "rd": "わすれないように、メモします。"
                },
                {
                  "jp": "聞こえるように、大きく話します。",
                  "id": "Agar terdengar, saya bicara keras.",
                  "rd": "きこえるように、おおきくはなします。"
                }
              ],
              "tabel": [
                {
                  "k": "忘れないように",
                  "v": "agar tidak lupa"
                },
                {
                  "k": "話せるように",
                  "v": "agar bisa bicara"
                },
                {
                  "k": "見えるように",
                  "v": "agar terlihat"
                }
              ]
            },
            {
              "pattern": "〜のに (逆接)",
              "arti": "padahal … (tapi)",
              "explain": "Dipakai saat hasilnya tidak sesuai harapan — ada nada <b>kekecewaan</b>, \"padahal … tapi …\". Polanya: bentuk-ta / kata sifat-i / na-A + な + のに.",
              "examples": [
                {
                  "jp": "きのう勉強したのに、もう忘れてしまいました。",
                  "id": "Padahal kemarin sudah belajar, tapi sudah lupa lagi.",
                  "rd": "きのうべんきょうしたのに、もうわすれてしまいました。"
                },
                {
                  "jp": "冬なのに、あたたかいですね。",
                  "id": "Padahal musim dingin, tapi hangat ya.",
                  "rd": "ふゆなのに、あたたかいですね。"
                },
                {
                  "jp": "このパソコンは高かったのに、もうこわれてしまいました。",
                  "id": "Padahal komputer ini mahal, tapi sudah rusak.",
                  "rd": "このパソコンはたかかったのに、もうこわれてしまいました。"
                }
              ],
              "tabel": [
                {
                  "k": "薬を飲んだのに",
                  "v": "padahal sudah minum obat"
                },
                {
                  "k": "安いのに",
                  "v": "padahal murah"
                },
                {
                  "k": "休みなのに",
                  "v": "padahal (hari) libur"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk kamus+のに (目的)",
              "arti": "untuk (melakukan) …",
              "explain": "Jangan tertukar dengan のに yang bernada kecewa! Yang ini menyatakan <b>tujuan</b>, sama maknanya dengan 〜するために. Biasanya muncul sebelum <b>かかる</b> (butuh waktu/biaya) atau <b>使う</b> (memakai).",
              "examples": [
                {
                  "jp": "この絵をかくのに1か月かかりました。",
                  "id": "Menggambar lukisan ini butuh waktu satu bulan.",
                  "rd": "このえをかくのに1かげつかかりました。"
                },
                {
                  "jp": "子どもをいい学校に入れるのにお金がかかります。",
                  "id": "Memasukkan anak ke sekolah yang bagus butuh banyak uang.",
                  "rd": "こどもをいいがっこうにいれるのにおかねがかかります。"
                },
                {
                  "jp": "この洗剤は、セーターを洗うのに使います。",
                  "id": "Deterjen ini dipakai untuk mencuci sweater.",
                  "rd": "このせんざいは、セーターをあらうのにつかいます。"
                }
              ],
              "tabel": [
                {
                  "k": "買い物に使う",
                  "v": "dipakai untuk belanja"
                },
                {
                  "k": "勉強に必要だ",
                  "v": "diperlukan untuk belajar"
                },
                {
                  "k": "使う・かかる・必要だ",
                  "v": "hanya untuk kata kerja keperluan"
                }
              ]
            }
          ]
        },
        {
          "type": "kanji",
          "title": "Kanji Bab 4",
          "items": [
            {
              "ch": "理",
              "kun": "—",
              "on": "り",
              "id": "logika / alasan",
              "note": "理由 (riyuu) = alasan"
            },
            {
              "ch": "由",
              "kun": "よし",
              "on": "ゆう",
              "id": "sebab / asal",
              "note": "自由 (jiyuu) = bebas"
            },
            {
              "ch": "原",
              "kun": "はら",
              "on": "げん",
              "id": "padang / asal",
              "note": "原因 (genin) = penyebab"
            },
            {
              "ch": "因",
              "kun": "—",
              "on": "いん",
              "id": "sebab",
              "note": "因果 (inga) = sebab-akibat"
            },
            {
              "ch": "目",
              "kun": "め",
              "on": "もく",
              "id": "mata / tujuan",
              "note": "目的 (mokuteki) = tujuan"
            },
            {
              "ch": "的",
              "kun": "まと",
              "on": "てき",
              "id": "target / -bersifat",
              "note": "具体的 (gutaiteki) = konkret"
            },
            {
              "ch": "風",
              "kun": "かぜ",
              "on": "ふう",
              "id": "angin",
              "note": "風邪 (kaze) = flu; 台風 (taifuu) = topan"
            },
            {
              "ch": "残",
              "kun": "のこる",
              "on": "ざん",
              "id": "sisa",
              "note": "残念 (zannen) = sayang/disayangkan"
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Kenapa Belajar Bahasa Jepang?",
          "lines": [
            {
              "sp": "A",
              "jp": "どうして日本語を勉強しているんですか。",
              "id": "Kenapa belajar bahasa Jepang?"
            },
            {
              "sp": "B",
              "jp": "日本の会社で働きたいからです。夢を叶えるために、毎日勉強しています。",
              "id": "Karena ingin bekerja di perusahaan Jepang. Demi mewujudkan impian, belajar tiap hari."
            },
            {
              "sp": "A",
              "jp": "すごいですね。試験はいつですか。",
              "id": "Hebat ya. Ujiannya kapan?"
            },
            {
              "sp": "B",
              "jp": "来月です。忘れないように、カレンダーに書きました。",
              "id": "Bulan depan. Agar tidak lupa, sudah saya tulis di kalender."
            },
            {
              "sp": "A",
              "jp": "昨日も勉強したのに、もう忘れましたか。",
              "id": "Padahal kemarin juga sudah belajar, sudah lupa lagi?"
            },
            {
              "sp": "B",
              "jp": "ええ、漢字を覚えるのに時間がかかります。",
              "id": "Ya, menghafal kanji butuh waktu."
            },
            {
              "sp": "A",
              "jp": "体に気をつけてくださいね。無理はしないように。",
              "id": "Jaga kesehatan ya. Jangan memaksakan diri."
            },
            {
              "sp": "B",
              "jp": "はい、ありがとうございます。",
              "id": "Ya, terima kasih."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "暑い___、窓を開けてください。(Karena panas, tolong buka jendela)",
          "o": [
            "ので",
            "から",
            "ために",
            "ように"
          ],
          "a": 1,
          "explain": "Klausa utama berupa perintah (〜てください) → pakai から."
        },
        {
          "q": "かぜ___学校を休みました。(Tidak masuk sekolah karena flu)",
          "o": [
            "で",
            "に",
            "から",
            "まで"
          ],
          "a": 0,
          "explain": "Bentuk-て/で bisa menyatakan alasan: かぜで = karena flu."
        },
        {
          "q": "合格___、毎日勉強します。(Agar lulus, belajar tiap hari)",
          "o": [
            "するために",
            "しないように",
            "するので",
            "したから"
          ],
          "a": 0,
          "explain": "Tujuan lewat usaha langsung → V(kamus)+ために."
        },
        {
          "q": "きのう勉強した___、もう忘れました。(Padahal kemarin sudah belajar, tapi sudah lupa)",
          "o": [
            "ために",
            "のに",
            "ので",
            "から"
          ],
          "a": 1,
          "explain": "Bernada kecewa/kontradiksi → のに(逆接) = \"padahal\"."
        },
        {
          "q": "この絵をかく___1か月かかりました。(Menggambar lukisan ini butuh 1 bulan)",
          "o": [
            "ために",
            "のに",
            "ので",
            "ながら"
          ],
          "a": 1,
          "explain": "Tentang waktu yang dibutuhkan untuk mencapai sesuatu → のに(目的) = \"untuk\"."
        },
        {
          "q": "家族___働きます。(Bekerja DEMI keluarga)",
          "o": [
            "のために",
            "のように",
            "のせいで",
            "のおかげで"
          ],
          "a": 0,
          "explain": "N(orang/tujuan)+のために = \"demi/untuk\" seseorang."
        },
        {
          "q": "台風___試合が中止になった。(Pertandingan dibatalkan karena topan)",
          "o": [
            "のように",
            "のために",
            "のせいで",
            "のおかげで"
          ],
          "a": 1,
          "explain": "N(penyebab)+ために = \"karena/gara-gara\". のせいで juga bisa, tapi ために lebih netral di sini."
        },
        {
          "q": "Kenapa \"暑くて、窓を開けてください\" TIDAK natural?",
          "o": [
            "Karena 暑い harusnya 暑くて",
            "Karena setelah bentuk-て alasan tidak boleh ada perintah/permintaan",
            "Karena harus pakai ので",
            "Karena て-form tidak bisa untuk alasan"
          ],
          "a": 1,
          "explain": "LARANGAN: setelah bentuk-て alasan, tidak boleh ada perintah/permintaan. Yang benar: 暑いから、窓を開けてください."
        },
        {
          "q": "試験に合格したのは、先生の___です。(Lulus ujian berkat guru)",
          "o": [
            "せいで",
            "おかげで",
            "ために",
            "わけで"
          ],
          "a": 1,
          "explain": "おかげで = \"berkat\" (konotasi positif)."
        },
        {
          "q": "忘れない___、メモします。(Agar tidak lupa, saya mencatat)",
          "o": [
            "ために",
            "ように",
            "から",
            "ので"
          ],
          "a": 1,
          "explain": "V(ない)+ように untuk tujuan tak langsung/pencegahan."
        }
      ]
    },
    {
      "id": "n4-5",
      "bab": 5,
      "level": "n4",
      "title": "Pasif & Kausatif",
      "desc": "Dikenai aksi (di-), menyuruh/membiarkan, dipaksa, dan meminta izin: られる・させる・させられる・させてください",
      "icon": "🌀",
      "sections": [
        {
          "type": "penjelasan",
          "title": "Dikenai Aksi, Menyuruh, Dipaksa & Meminta Izin",
          "body": "Dua bentuk kata kerja paling \"dewasa\" di N4: <b>pasif</b> (dikenai aksi) dan <b>kausatif</b> (menyuruh/membiarkan). Keduanya mengubah siapa melakukan apa — dan JLPT suka menguji pemahamanmu tentang itu.\n\n<b>Pasif (〜れる/〜られる):</b> godan: ubah akhiran ke baris-a + れる — 書く→<b>書かれる</b>, 盗む→<b>盗まれる</b>. Ichidan: +られる — 食べる→<b>食べられる</b>, 褒める→<b>褒められる</b>. Khusus: する→<b>される</b>, 来る→<b>こられる</b>. Polanya: <b>[pelaku]に〜される</b> (dikenai aksi oleh...). Ada dua rasa: (1) <b>pasif penderitaan</b> — 財布を盗まれた (dompetku dicuri orang! [sial]), (2) <b>pasif netral/fakta</b> — この本は多くの人に読まれている (buku ini dibaca banyak orang). Soumatome menekankan: saat menyatakan fakta, pasif sering dipakai dengan <b>benda sebagai subjek</b> — 入学式は、このホールで行われます (upacara penerimaan siswa baru diadakan di aula ini).\n\n<b>Kausatif (〜せる/〜させる):</b> godan: baris-a + せる — 書く→<b>書かせる</b>, 行く→<b>行かせる</b>. Ichidan: +させる — 食べる→<b>食べさせる</b>. Khusus: する→<b>させる</b>, 来る→<b>こさせる</b>. Kuncinya ada di partikel: <b>[orang]に + kausatif = MENYURUH</b> (子供に野菜を食べさせる = menyuruh anak makan sayur), <b>[orang]を + kausatif = MEMBIARKAN</b> (子供を遊ばせる = membiarkan anak bermain). Beda partikel, beda makna!\n\n<b>Kausatif-pasif (〜させられる): \"dipaksa\".</b> Gabungan keduanya: dipaksa melakukan sesuatu lalu benar-benar melakukannya — 母に野菜を食べさせられました (aku dipaksa makan sayur oleh ibu). Bentuknya: kausatif + られる — 書かせる→<b>書かせられる</b>, 食べさせる→<b>食べさせられる</b>, する→<b>させられる</b>. Nuansanya selalu <b>tidak menyenangkan</b> bagi pembicara.\n\n<b>〜させてください: \"tolong izinkan saya...\".</b> Dipakai saat <b>meminta izin</b> untuk melakukan sesuatu — ノートをコピーさせてください (tolong izinkan saya menyalin catatanmu). Beda dengan 〜てください yang meminta ORANG LAIN melakukan sesuatu! Versi kasualnya: 休ませて (izinkan aku istirahat).\n\n<b>Jebakan JLPT:</b> (1) ichidan pasif (食べられる) bentuknya SAMA dengan potensial — bedakan dari konteks!; (2) に vs を pada kausatif; (3) pasif penderitaan selalu memakai を untuk benda milik pembicara (財布を盗まれた); (4) hafalkan trio する: <b>される</b> (pasif) / <b>させる</b> (kausatif) / <b>させられる</b> (dipaksa)."
        },
        {
          "type": "kotoba",
          "title": "Kosakata Pasif & Kausatif",
          "items": [
            {
              "jp": "盗む",
              "kj": "盗む",
              "r": "nusumu",
              "id": "mencuri",
              "note": "財布を盗まれた = dompet dicuri (sial!)"
            },
            {
              "jp": "褒める",
              "kj": "褒める",
              "r": "homeru",
              "id": "memuji",
              "note": "先生に褒められた = dipuji guru"
            },
            {
              "jp": "叱る",
              "kj": "叱る",
              "r": "shikaru",
              "id": "memarahi",
              "note": "母に叱られた = dimarahi ibu"
            },
            {
              "jp": "頼む",
              "kj": "頼む",
              "r": "tanomu",
              "id": "meminta / memohon",
              "note": "頼まれる = dimintai (tolong)"
            },
            {
              "jp": "許す",
              "kj": "許す",
              "r": "yurusu",
              "id": "mengizinkan / memaafkan",
              "note": "許される = diizinkan"
            },
            {
              "jp": "迷惑",
              "kj": "迷惑",
              "r": "meiwaku",
              "id": "mengganggu / merepotkan",
              "note": "迷惑をかける = merepotkan"
            },
            {
              "jp": "被害",
              "kj": "被害",
              "r": "higai",
              "id": "kerugian (korban)",
              "note": "被害に遭う = menjadi korban"
            },
            {
              "jp": "報告",
              "kj": "報告",
              "r": "houkoku",
              "id": "laporan",
              "note": "報告する = melaporkan"
            },
            {
              "jp": "連絡",
              "kj": "連絡",
              "r": "renraku",
              "id": "kontak / kabar",
              "note": "連絡する = menghubungi"
            },
            {
              "jp": "指示",
              "kj": "指示",
              "r": "shiji",
              "id": "instruksi",
              "note": "指示に従う = mengikuti instruksi"
            },
            {
              "jp": "従う",
              "kj": "従う",
              "r": "shitagau",
              "id": "mengikuti / patuh",
              "note": "ルールに従う = patuh aturan"
            },
            {
              "jp": "強制",
              "kj": "強制",
              "r": "kyousei",
              "id": "pemaksaan",
              "note": "強制する = memaksa"
            },
            {
              "jp": "受身",
              "kj": "受身",
              "r": "ukemi",
              "id": "bentuk pasif",
              "note": "受身形 = bentuk pasif (文法)"
            },
            {
              "jp": "使役",
              "kj": "使役",
              "r": "shieki",
              "id": "bentuk kausatif",
              "note": "使役形 = bentuk kausatif (文法)"
            },
            {
              "jp": "残業",
              "kj": "残業",
              "r": "zangyou",
              "id": "lembur",
              "note": "残業させる = menyuruh lembur"
            },
            {
              "jp": "日記",
              "kj": "日記",
              "r": "nikki",
              "id": "buku harian",
              "note": "日記を書かせる = menyuruh menulis diary"
            },
            {
              "jp": "強いる",
              "kj": "強いる",
              "r": "shiiru",
              "id": "memaksa",
              "note": "Nuansa formal: 強制より硬い"
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Pola Pasif & Kausatif",
          "items": [
            {
              "pattern": "[pelaku]に kata kerja pasif (れる/られる)",
              "arti": "di-[verb] oleh...",
              "explain": "Pasif punya dua rasa. <b>Pasif penderitaan</b>: kamu dirugikan oleh kejadian itu (pakai を). <b>Pasif netral</b>: sekadar fakta umum, biasanya subjeknya berupa benda.",
              "examples": [
                {
                  "jp": "財布を盗まれました。",
                  "id": "Dompet (saya) dicuri orang.",
                  "rd": "さいふをぬすまれました。"
                },
                {
                  "jp": "その歌は、世界中で歌われています。",
                  "id": "Lagu itu dinyanyikan di seluruh dunia.",
                  "rd": "そのうたは、せかいじゅうでうたわれています。"
                },
                {
                  "jp": "入学式は、このホールで行われます。",
                  "id": "Upacara penerimaan siswa baru diadakan di aula ini.",
                  "rd": "にゅうがくしきは、このホールでおこなわれます。"
                }
              ],
              "tabel": [
                {
                  "k": "書く → 書かれる",
                  "v": "ditulis"
                },
                {
                  "k": "食べる → 食べられる",
                  "v": "dimakan"
                },
                {
                  "k": "する → される",
                  "v": "dilakukan"
                },
                {
                  "k": "来る → 来られる",
                  "v": "didatangi"
                }
              ]
            },
            {
              "pattern": "[orang]に kata kerja kausatif (せる/させる)",
              "arti": "menyuruh [orang] untuk...",
              "explain": "<b>に</b> + kausatif artinya <b>menyuruh atau meminta</b> seseorang melakukan sesuatu. Kuncinya ada di partikel に.",
              "examples": [
                {
                  "jp": "子供に野菜を食べさせます。",
                  "id": "Saya menyuruh anak makan sayur.",
                  "rd": "こどもにやさいをたべさせます。"
                },
                {
                  "jp": "その先生は学生に日本語の日記を書かせます。",
                  "id": "Guru itu menyuruh murid-muridnya menulis diary dalam bahasa Jepang.",
                  "rd": "そのせんせいはがくせいににほんごのにっきをかかせます。"
                },
                {
                  "jp": "社長は、ちこくが多い社員をやめさせました。",
                  "id": "Direktur memberhentikan karyawan yang sering terlambat.",
                  "rd": "しゃちょうは、ちこくがおおいしゃいんをやめさせました。"
                }
              ],
              "tabel": [
                {
                  "k": "書く → 書かせる",
                  "v": "menyuruh menulis"
                },
                {
                  "k": "食べる → 食べさせる",
                  "v": "menyuruh makan"
                },
                {
                  "k": "する → させる",
                  "v": "menyuruh melakukan"
                },
                {
                  "k": "来る → 来させる",
                  "v": "menyuruh datang"
                }
              ]
            },
            {
              "pattern": "[orang]を kata kerja kausatif (せる/させる)",
              "arti": "membiarkan [orang]...",
              "explain": "<b>を</b> + kausatif artinya <b>membiarkan atau mengizinkan</b> — bukan menyuruh! Beda partikel, beda makna total.",
              "examples": [
                {
                  "jp": "子供を外で遊ばせます。",
                  "id": "Saya membiarkan anak bermain di luar.",
                  "rd": "こどもをそとであそばせます。"
                },
                {
                  "jp": "公園で犬を走らせましょう。",
                  "id": "Ayo biarkan anjing berlari di taman.",
                  "rd": "こうえんでいぬをはしらせましょう。"
                },
                {
                  "jp": "好きなことをさせてください。",
                  "id": "Tolong biarkan (saya) melakukan hal yang saya suka.",
                  "rd": "すきなことをさせてください。"
                }
              ],
              "tabel": [
                {
                  "k": "子供に野菜を食べさせる",
                  "v": "menyuruh anak makan sayur (memaksa)"
                },
                {
                  "k": "子供を遊ばせる",
                  "v": "membiarkan anak bermain (mengizinkan)"
                },
                {
                  "k": "〜に + させる",
                  "v": "menyuruh — lebih memaksa"
                },
                {
                  "k": "〜を + させる",
                  "v": "membiarkan — memberi izin"
                }
              ]
            },
            {
              "pattern": "kata kerja dasar + させられる (kausatif-pasif)",
              "arti": "dipaksa...",
              "explain": "Dipakai saat kamu <b>dipaksa</b> melakukan sesuatu dan akhirnya benar-benar melakukannya. Nuansanya tidak menyenangkan bagi pembicara — kebayang kan rasanya dipaksa. Contoh: する → させられる.",
              "examples": [
                {
                  "jp": "子どものころ、毎日母に野菜を食べさせられました。",
                  "id": "Waktu kecil, setiap hari aku dipaksa makan sayur oleh ibu.",
                  "rd": "こどものころ、まいにちははにやさいをたべさせられました。"
                },
                {
                  "jp": "私は大きい失敗をして、会社をやめさせられました。",
                  "id": "Aku membuat kesalahan besar dan dipaksa keluar dari perusahaan.",
                  "rd": "わたしはおおきいしっぱいをして、かいしゃをやめさせられました。"
                }
              ],
              "tabel": [
                {
                  "k": "書く → 書かせられる",
                  "v": "dipaksa menulis"
                },
                {
                  "k": "食べる → 食べさせられる",
                  "v": "dipaksa makan"
                },
                {
                  "k": "する → させられる",
                  "v": "dipaksa melakukan"
                }
              ]
            },
            {
              "pattern": "〜させてください",
              "arti": "tolong izinkan saya...",
              "explain": "Dipakai saat <b>meminta izin</b> untuk melakukan sesuatu sendiri. Jangan tertukar dengan 〜てください yang meminta ORANG LAIN berbuat sesuatu — beda arah!",
              "examples": [
                {
                  "jp": "ノートをコピーさせてください。",
                  "id": "Tolong izinkan saya menyalin catatanmu.",
                  "rd": "ノートをコピーさせてください。"
                },
                {
                  "jp": "お手洗いを使わせてください。",
                  "id": "Tolong izinkan saya memakai toilet.",
                  "rd": "おてあらいつかわせてください。"
                },
                {
                  "jp": "疲れた。ちょっと休ませて。",
                  "id": "Capek. Izinkan aku istirahat sebentar.",
                  "rd": "つかれた。ちょっとやすませて。"
                }
              ],
              "tabel": [
                {
                  "k": "休ませてください",
                  "v": "tolong izinkan saya istirahat"
                },
                {
                  "k": "帰らせてください",
                  "v": "tolong izinkan saya pulang"
                },
                {
                  "k": "参加させてください",
                  "v": "tolong izinkan saya ikut serta"
                }
              ]
            }
          ]
        },
        {
          "type": "kanji",
          "title": "Kanji Bab 5",
          "items": [
            {
              "ch": "盗",
              "kun": "ぬすむ",
              "on": "とう",
              "id": "mencuri",
              "note": "盗む (nusumu), 強盗 (goutou)"
            },
            {
              "ch": "許",
              "kun": "ゆるす",
              "on": "きょ",
              "id": "mengizinkan",
              "note": "許可 (kyoka) = izin"
            },
            {
              "ch": "頼",
              "kun": "たのむ",
              "on": "らい",
              "id": "meminta",
              "note": "依頼 (irai) = permintaan"
            },
            {
              "ch": "迷",
              "kun": "まよう",
              "on": "めい",
              "id": "tersesat / bingung",
              "note": "迷惑 (meiwaku) = merepotkan"
            },
            {
              "ch": "報",
              "kun": "むくいる",
              "on": "ほう",
              "id": "laporan / balasan",
              "note": "報告 (houkoku) = laporan"
            },
            {
              "ch": "被",
              "kun": "こうむる",
              "on": "ひ",
              "id": "menerima (akibat)",
              "note": "被害 (higai) = kerugian"
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Kecurian di Kereta",
          "lines": [
            {
              "sp": "A",
              "jp": "どうしたんですか。顔色が悪いですよ。",
              "id": "Kenapa? Wajahmu pucat."
            },
            {
              "sp": "B",
              "jp": "実は、電車の中で財布を盗まれたんです。",
              "id": "Sebenarnya, di kereta dompetku dicuri."
            },
            {
              "sp": "A",
              "jp": "ええ！警察に連絡しましたか。",
              "id": "Eh! Sudah menghubungi polisi?"
            },
            {
              "sp": "B",
              "jp": "はい、駅員に警察を呼ばせました。",
              "id": "Ya, saya menyuruh petugas stasiun memanggil polisi."
            },
            {
              "sp": "A",
              "jp": "大変でしたね。気をつけてください。",
              "id": "Kasihan ya. Hati-hati ya."
            },
            {
              "sp": "B",
              "jp": "はい、もうカバンを前に持たせてもらいます…いえ、持ちます。",
              "id": "Ya, mulai sekarang tasnya saya bawa di depan."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "Bentuk pasif dari 書く (kaku) adalah…",
          "o": [
            "書ける",
            "書かれる",
            "書かせる",
            "書こう"
          ],
          "a": 1,
          "explain": "Godan pasif: baris-a + れる → 書かれる."
        },
        {
          "q": "財布___盗まれた。(Dompet dicuri)",
          "o": [
            "が",
            "を",
            "に",
            "で"
          ],
          "a": 1,
          "explain": "Pasif penderitaan: benda milik pembicara pakai を."
        },
        {
          "q": "Bentuk kausatif dari 食べる (taberu) adalah…",
          "o": [
            "食べられる",
            "食べさせる",
            "食べれる",
            "食べたい"
          ],
          "a": 1,
          "explain": "Ichidan kausatif: +させる → 食べさせる."
        },
        {
          "q": "子供に野菜を食べさせる。Artinya…",
          "o": [
            "Membiarkan anak makan sayur",
            "Menyuruh anak makan sayur",
            "Anak dimakan sayur",
            "Sayur dimakan anak"
          ],
          "a": 1,
          "explain": "に + kausatif = MENYURUH."
        },
        {
          "q": "子供を外で遊ばせる。Artinya…",
          "o": [
            "Menyuruh anak bermain",
            "Membiarkan anak bermain di luar",
            "Anak disuruh pulang",
            "Melarang anak bermain"
          ],
          "a": 1,
          "explain": "を + kausatif = MEMBIARKAN."
        },
        {
          "q": "先生に褒められた。Artinya…",
          "o": [
            "Saya memuji guru",
            "Saya dipuji guru",
            "Guru menyuruh memuji",
            "Guru membiarkan dipuji"
          ],
          "a": 1,
          "explain": "[pelaku]に + pasif = dikenai aksi oleh pelaku."
        },
        {
          "q": "食べられる bisa berarti ganda. Dalam \"寿司が食べられる\", artinya…",
          "o": [
            "Disuruh makan sushi",
            "Bisa makan sushi (potensial)",
            "Sushi dimakan orang",
            "Ingin makan sushi"
          ],
          "a": 1,
          "explain": "Ichidan られる = pasif ATAU potensial. Dengan が + konteks kemampuan → potensial."
        },
        {
          "q": "社長は社員に残業___。(Direktur menyuruh karyawan lembur)",
          "o": [
            "させました",
            "されました",
            "させられました",
            "できます"
          ],
          "a": 0,
          "explain": "Menyuruh → kausatif: 残業させる. されました itu pasif (disuruh lembur oleh...)."
        },
        {
          "q": "母に野菜を食べさせられました。Artinya…",
          "o": [
            "Ibu menyuruh saya makan sayur",
            "Saya dipaksa makan sayur oleh ibu",
            "Saya membiarkan ibu makan sayur",
            "Ibu dimakan sayur"
          ],
          "a": 1,
          "explain": "〜させられる = kausatif-pasif: \"dipaksa\". Nuansanya tidak menyenangkan."
        },
        {
          "q": "ノートをコピーさせてください。Pola させてください dipakai untuk…",
          "o": [
            "Menyuruh orang lain menyalin",
            "Meminta izin untuk menyalin",
            "Melarang menyalin",
            "Dipaksa menyalin"
          ],
          "a": 1,
          "explain": "〜させてください = \"tolong izinkan SAYA...\". Beda dengan 〜てください yang menyuruh orang lain."
        }
      ]
    },
    {
      "id": "n4-6",
      "bab": 6,
      "level": "n4",
      "title": "Pengandaian",
      "desc": "Empat kata \"kalau\": たら・ば・なら・と — jebakan favorit JLPT!",
      "icon": "🔮",
      "sections": [
        {
          "type": "penjelasan",
          "title": "Empat Kata \"Kalau\" yang Wajib Dibedakan",
          "body": "Bahasa Jepang punya <b>EMPAT</b> cara bilang \"kalau/jika\": <b>たら</b>, <b>ば</b>, <b>なら</b>, <b>と</b>. Ini <b>jebakan favorit JLPT N4</b> — soalnya selalu meminta pilih yang tepat berdasarkan konteks!\n\n<b>〜たら</b>: paling serbaguna. Untuk kejadian <b>spesifik</b> (\"kalau X terjadi, maka Y\"): 雨が降ったら、行きません. Juga untuk urutan (\"setelah...\"): 家に帰ったら、電話してください. Dan untuk penemuan tak terduga: 窓を開けたら、雪が降っていた (pas buka jendela, ternyata salju turun!). Sering dipasangkan dengan もし (もし〜たら…).\n\n<b>〜ば</b>: untuk syarat <b>umum/logis</b> (\"jika\"). Fokus pada kondisi yang harus dipenuhi: 安ければ、買います (jika murah, saya beli). Bentuk: V→〜ば (行けば, なければ), adj-i→〜ければ (高ければ), adj-na/N→であれば. <b>Tidak</b> dipakai untuk kejadian lampau yang sudah pasti terjadi. Perhatian: kata sifat <b>いい</b> bentuk ば-nya spesial → <b>よければ</b>, bukan いければ!\n\n<b>〜なら</b>: \"kalau soal/mengenai...\" — dipakai saat <b>menanggapi informasi dari lawan bicara</b> atau memberi saran atas topik tertentu: 日本へ行くなら、冬がいいですよ (kalau mau ke Jepang, musim dingin bagus lho). Bagian setelah なら menyatakan <b>penilaian, harapan, atau keinginan pembicara</b>: ラーメンなら、駅前のラーメン屋がおいしいですよ (kalau soal ramen, kedai depan stasiun enak lho — ini penilaianku!).\n\n<b>〜と</b>: hubungan <b>sebab-akibat yang pasti</b> — hukum alam, kebiasaan, mekanisme: 春になると、桜が咲きます (kalau tiba musim semi, sakura mekar). Aturan keras: klausa utama <b>TIDAK BOLEH</b> berupa keinginan, perintah, atau ajakan (×ボタンを押すと、開けてください → SALAH, pakai たら).\n\n<b>Nuansa Soumatome yang sering keluar di JLPT:</b> (1) <b>なら</b> juga bermakna <b>〜のとき</b> (saat), <b>〜のあと</b> (setelah), dan <b>〜の場合</b> (dalam hal) — dalam pemakaian ini ia <b>tidak bisa diganti dengan 〜と</b>: コンビニへ行くなら、サンドイッチを買ってきてください (dalam hal pergi ke minimarket, tolong belikan sandwich). (2) <b>ば tidak dipakai</b> untuk kejadian lampau yang sudah pasti terjadi — itu wilayahnya たら. (3) Ingat: たら paling fleksibel dan bisa menggantikan kebanyakan situasi; kalau ragu di soal JLPT, たら sering jadi jawaban aman untuk kejadian spesifik."
        },
        {
          "type": "kotoba",
          "title": "Kosakata Pengandaian",
          "items": [
            {
              "jp": "もし",
              "r": "moshi",
              "id": "seandainya / jika",
              "note": "Sering dipasangkan dengan たら/ば"
            },
            {
              "jp": "仮に",
              "kj": "仮に",
              "r": "kari ni",
              "id": "andaikan / misalkan",
              "note": "Lebih formal dari もし"
            },
            {
              "jp": "条件",
              "kj": "条件",
              "r": "jouken",
              "id": "syarat / kondisi",
              "note": "条件を満たす = memenuhi syarat"
            },
            {
              "jp": "場合",
              "kj": "場合",
              "r": "baai",
              "id": "kasus / keadaan",
              "note": "〜場合は = dalam hal..."
            },
            {
              "jp": "万一",
              "kj": "万一",
              "r": "manichi",
              "id": "jaga-jaga / seandainya",
              "note": "万一のために = untuk jaga-jaga"
            },
            {
              "jp": "幸い",
              "kj": "幸い",
              "r": "saiwai",
              "id": "untungnya",
              "note": "幸いなことに = untungnya"
            },
            {
              "jp": "偶然",
              "kj": "偶然",
              "r": "guuzen",
              "id": "kebetulan",
              "note": "偶然会った = bertemu kebetulan"
            },
            {
              "jp": "結果",
              "kj": "結果",
              "r": "kekka",
              "id": "hasil",
              "note": "結果が出る = hasilnya keluar"
            },
            {
              "jp": "予想",
              "kj": "予想",
              "r": "yosou",
              "id": "prediksi / perkiraan",
              "note": "予想通り = sesuai prediksi"
            },
            {
              "jp": "実際",
              "kj": "実際",
              "r": "jissai",
              "id": "kenyataan",
              "note": "実際は違う = kenyataannya berbeda"
            },
            {
              "jp": "例外",
              "kj": "例外",
              "r": "reigai",
              "id": "pengecualian",
              "note": "例外もある = ada pengecualian"
            },
            {
              "jp": "予定",
              "kj": "予定",
              "r": "yotei",
              "id": "rencana",
              "note": "予定を変更する = mengubah rencana"
            },
            {
              "jp": "自然",
              "kj": "自然",
              "r": "shizen",
              "id": "alam / alami",
              "note": "Cocok dengan 〜と (hukum alam)"
            },
            {
              "jp": "習慣",
              "kj": "習慣",
              "r": "shuukan",
              "id": "kebiasaan",
              "note": "Cocok dengan 〜と (selalu begitu)"
            },
            {
              "jp": "可能性",
              "kj": "可能性",
              "r": "kanousei",
              "id": "kemungkinan",
              "note": "Cocok dengan 〜ば (syarat logis)"
            },
            {
              "jp": "前提",
              "kj": "前提",
              "r": "zentei",
              "id": "prasyarat / asumsi",
              "note": "〜を前提にする = berasumsi..."
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Pola Pengandaian",
          "items": [
            {
              "pattern": "kata kerja bentuk -ta+ら / kata sifatかったら / kata bendaだったら",
              "arti": "kalau... / setelah...",
              "explain": "Bentuk pengandaian paling serbaguna: untuk kejadian spesifik, urutan kejadian, sampai penemuan tak terduga. Kata <b>もし</b> di depan sering dipasangkan dengannya.",
              "examples": [
                {
                  "jp": "雨が降ったら、明日の試合は中止です。",
                  "id": "Kalau hujan, pertandingan besok dibatalkan.",
                  "rd": "あめがふったら、あしたのしあいはちゅうしです。"
                },
                {
                  "jp": "暑かったら、エアコンをつけてください。",
                  "id": "Kalau panas, tolong nyalakan AC.",
                  "rd": "あつかったら、エアコンをつけてください。"
                },
                {
                  "jp": "もし大きい地震が起きたら、どうしますか。",
                  "id": "Kalau ada gempa besar, apa yang akan kamu lakukan?",
                  "rd": "もしおおきいじしんがおきたら、どうしますか。"
                }
              ],
              "tabel": [
                {
                  "k": "食べたら",
                  "v": "kalau makan"
                },
                {
                  "k": "高かったら",
                  "v": "kalau mahal"
                },
                {
                  "k": "雨だったら",
                  "v": "kalau hujan"
                },
                {
                  "k": "来なかったら",
                  "v": "kalau tidak datang"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk -ba / kata sifatければ / kata sifat-na・kata bendaであれば",
              "arti": "jika... (syarat umum)",
              "explain": "Untuk syarat yang <b>umum dan logis</b> — fokusnya pada kondisi yang harus dipenuhi. Tidak dipakai untuk kejadian lampau yang sudah pasti terjadi. Satu bentuk spesial yang wajib dihafal: いい → <b>よければ</b>.",
              "examples": [
                {
                  "jp": "安ければ買いますが、高いので買いません。",
                  "id": "Kalau murah saya beli, tapi karena mahal saya tidak beli.",
                  "rd": "やすければかいますが、たかいのでかいません。"
                },
                {
                  "jp": "タクシーで行けば、間に合うでしょう。",
                  "id": "Kalau naik taksi, (kamu) pasti keburu.",
                  "rd": "タクシーでいけば、まにあうでしょう。"
                },
                {
                  "jp": "きらいなら、食べなくてもいいですよ。",
                  "id": "Kalau tidak suka, tidak usah makan juga tidak apa-apa.",
                  "rd": "きらいなら、たべなくてもいいですよ。"
                }
              ],
              "tabel": [
                {
                  "k": "食べれば",
                  "v": "jika makan"
                },
                {
                  "k": "高ければ",
                  "v": "jika mahal"
                },
                {
                  "k": "静かであれば",
                  "v": "jika tenang"
                },
                {
                  "k": "いい → よければ",
                  "v": "jika baik (bentuk khusus!)"
                }
              ]
            },
            {
              "pattern": "kata benda+なら / kata kerja bentuk kamus+なら",
              "arti": "kalau soal... / dalam hal...",
              "explain": "Dipakai untuk menanggapi informasi atau topik dari lawan bicara; bagian setelah なら berisi <b>penilaian, harapan, atau keinginan</b> pembicara. なら juga bisa bermakna \"saat / sehabis / dalam hal\" — dalam pemakaian itu <b>tidak bisa diganti dengan 〜と</b>.",
              "examples": [
                {
                  "jp": "ここから東京駅に行くなら、地下鉄が便利です。",
                  "id": "Kalau mau pergi dari sini ke Stasiun Tokyo, kereta bawah tanah lebih praktis.",
                  "rd": "ここからとうきょうえきにいくなら、ちかてつがべんりです。"
                },
                {
                  "jp": "コンビニへ行くなら、サンドイッチを買ってきてください。",
                  "id": "Kalau pergi ke minimarket, tolong belikan sandwich sekalian.",
                  "rd": "コンビニえいくなら、サンドイッチをかってきてください。"
                },
                {
                  "jp": "ラーメンなら、駅前のラーメン屋がおいしいですよ。",
                  "id": "Kalau soal ramen, kedai ramen di depan stasiun itu enak lho.",
                  "rd": "ラーメンなら、えきまえのラーメンやがおいしいですよ。"
                }
              ],
              "tabel": [
                {
                  "k": "学生なら",
                  "v": "kalau (kamu) pelajar"
                },
                {
                  "k": "行くなら",
                  "v": "kalau (kamu) pergi"
                },
                {
                  "k": "〜なら ≠ 〜と",
                  "v": "なら tak bisa diganti と"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk kamus+と",
              "arti": "jika...maka (pasti)",
              "explain": "Untuk hubungan sebab-akibat yang <b>selalu sama</b>: hukum alam, kebiasaan, atau mekanisme. Tapi ingat, klausa utamanya <b>TIDAK BOLEH</b> berupa perintah, keinginan, atau ajakan.",
              "examples": [
                {
                  "jp": "このボタンを押すと、ドアが開きます。",
                  "id": "Kalau tombol ini ditekan, pintunya terbuka.",
                  "rd": "このボタンをおすと、ドアがひらきます。"
                },
                {
                  "jp": "ここを右に曲がると、銀行があります。",
                  "id": "Kalau belok kanan di sini, ada bank.",
                  "rd": "ここをみぎにまがると、ぎんこうがあります。"
                }
              ],
              "tabel": [
                {
                  "k": "押すと開く",
                  "v": "kalau ditekan, terbuka (pasti)"
                },
                {
                  "k": "春になると暖かくなる",
                  "v": "kalau musim semi tiba, jadi hangat"
                },
                {
                  "k": "〜と + 〜たい / 〜てください ✗",
                  "v": "tak boleh untuk keinginan atau perintah"
                }
              ]
            }
          ]
        },
        {
          "type": "kanji",
          "title": "Kanji Bab 6",
          "items": [
            {
              "ch": "仮",
              "kun": "かり",
              "on": "か",
              "id": "sementara / andaikan",
              "note": "仮に (kari ni) = andaikan"
            },
            {
              "ch": "条",
              "kun": "—",
              "on": "じょう",
              "id": "pasal / syarat",
              "note": "条件 (jouken) = syarat"
            },
            {
              "ch": "件",
              "kun": "—",
              "on": "けん",
              "id": "perkara",
              "note": "事件 (jiken) = insiden"
            },
            {
              "ch": "場",
              "kun": "ば",
              "on": "じょう",
              "id": "tempat / keadaan",
              "note": "場合 (baai) = keadaan/kasus"
            },
            {
              "ch": "合",
              "kun": "あう",
              "on": "ごう",
              "id": "bertemu / cocok",
              "note": "間に合う (ma ni au) = keburu"
            },
            {
              "ch": "予",
              "kun": "—",
              "on": "よ",
              "id": "ramalan / awal",
              "note": "予定 (yotei) = rencana"
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Rencana Akhir Pekan",
          "lines": [
            {
              "sp": "A",
              "jp": "週末、どこかへ行きませんか。",
              "id": "Akhir pekan, mau pergi ke mana-mana?"
            },
            {
              "sp": "B",
              "jp": "いいですね。もし天気がよかったら、海へ行きましょう。",
              "id": "Boleh. Seandainya cuaca bagus, ayo ke pantai."
            },
            {
              "sp": "A",
              "jp": "雨なら、映画でも見ませんか。",
              "id": "Kalau hujan, nonton film saja bagaimana?"
            },
            {
              "sp": "B",
              "jp": "そうですね。安ければ、あの新しい映画館にしましょう。",
              "id": "Ya. Jika murah, ke bioskop baru itu saja."
            },
            {
              "sp": "A",
              "jp": "ボタンを押すと、チケットが出ますよ。",
              "id": "Jika tombol ditekan, tiketnya keluar."
            },
            {
              "sp": "B",
              "jp": "分かりました。じゃあ、土曜日に駅で会いましょう。",
              "id": "Mengerti. Kalau begitu, ketemu di stasiun hari Sabtu."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "雨が降っ___、行きません。(Kalau hujan turun, tidak pergi)",
          "o": [
            "たら",
            "ば",
            "なら",
            "と"
          ],
          "a": 0,
          "explain": "たら untuk kejadian spesifik (\"kalau X terjadi\")."
        },
        {
          "q": "値段が___よければ、買います。(Jika harganya oke, saya beli)",
          "o": [
            "い",
            "よく",
            "が",
            "も"
          ],
          "a": 1,
          "explain": "Kata sifat いい bentuk ば-nya spesial: よければ (bukan いければ)."
        },
        {
          "q": "日本へ行く___、冬がいいですよ。(Kalau mau ke Jepang, musim dingin bagus)",
          "o": [
            "たら",
            "ば",
            "なら",
            "と"
          ],
          "a": 2,
          "explain": "なら untuk menanggapi topik/memberi saran."
        },
        {
          "q": "春になると、桜が___。(Kalau tiba musim semi, sakura mekar)",
          "o": [
            "咲きます",
            "咲いてください",
            "咲きたいです",
            "咲きましょう"
          ],
          "a": 0,
          "explain": "と = akibat pasti (hukum alam). Klausa utama tidak boleh perintah/keinginan."
        },
        {
          "q": "Mana yang SALAH?",
          "o": [
            "ボタンを押すと、ドアが開きます",
            "ボタンを押すと、開けてください",
            "春になると、暖かくなります",
            "右に曲がると、駅があります"
          ],
          "a": 1,
          "explain": "と tidak boleh diikuti perintah (〜てください). Pakai たら."
        },
        {
          "q": "家に帰っ___、電話してください。(Setelah sampai rumah, tolong telepon)",
          "o": [
            "たら",
            "ば",
            "なら",
            "と"
          ],
          "a": 0,
          "explain": "たら juga bermakna urutan \"setelah...\"."
        },
        {
          "q": "時間がなけ___、手伝いません。(Jika tidak ada waktu, tidak membantu)",
          "o": [
            "たら",
            "れば",
            "なら",
            "たらば"
          ],
          "a": 1,
          "explain": "ない→なければ adalah bentuk ば dari negatif."
        },
        {
          "q": "窓を開けたら、雪が降っていた。(Pas buka jendela, ternyata salju turun) — たら di sini bermakna…",
          "o": [
            "Syarat umum",
            "Urutan kejadian",
            "Penemuan tak terduga",
            "Hukum alam"
          ],
          "a": 2,
          "explain": "たら bisa untuk penemuan: \"pas..., ternyata...\"."
        },
        {
          "q": "もし時間が___、遊びに来てください。(Seandainya ada waktu, mainlah ke sini)",
          "o": [
            "あったら",
            "あれば",
            "あるなら",
            "あると"
          ],
          "a": 0,
          "explain": "もし paling sering dipasangkan dengan たら."
        },
        {
          "q": "コンビニへ行くなら、サンドイッチを買ってきてください。 — なら di sini bermakna…",
          "o": [
            "Dalam hal pergi ke minimarket",
            "Hukum alam yang pasti",
            "Kejadian lampau yang pasti",
            "Penemuan tak terduga"
          ],
          "a": 0,
          "explain": "なら juga bermakna 〜の場合 (dalam hal). Dalam pemakaian ini tidak bisa diganti 〜と."
        }
      ]
    },
    {
      "id": "n4-7",
      "bab": 7,
      "level": "n4",
      "title": "Sonkeigo & Kenjougo",
      "desc": "Bahasa hormat dan merendah esensial: いらっしゃる・めしあがる・さしあげる・くださる・いただく",
      "icon": "🙇",
      "sections": [
        {
          "type": "penjelasan",
          "title": "Naik & Merendah: Seni Bahasa Hormat",
          "body": "Bahasa Jepang punya <b>tiga tingkat kesopanan</b>: 丁寧語 (teineigo — sopan biasa: です/ます), <b>尊敬語</b> (sonkeigo — <b>meninggikan</b> lawan bicara/atasan), dan <b>謙譲語</b> (kenjougo — <b>merendahkan</b> diri sendiri). Di N4, kamu wajib hafal kata-kata khususnya!\n\n<b>尊敬語 (untuk ORANG LAIN yang dihormati):</b> いらっしゃる (untuk いる/行く/来る), <b>めしあがる</b> (untuk 食べる/飲む), <b>なさる</b> (untuk する), <b>おっしゃる</b> (untuk 言う), ご覧になる (untuk 見る). Pola umumnya: <b>お/ご + stem + になる</b> — お読みになる (membaca [hormat]).\n\n<b>謙譲語 (untuk DIRI SENDIRI agar terlihat rendah):</b> <b>いたす</b> (untuk する), <b>申す</b> (untuk 言う), <b>参る</b> (untuk 行く/来る), 拝見する (untuk 見る), <b>いただく</b> (untuk もらう/食べる/飲む). Pola umumnya: <b>お/ご + stem + する・いたす</b> — お待ちする (menunggu [merendah]).\n\n<b>Soumatome: peta memberi-menerima dalam keigo.</b> Tiga kata ini adalah versi hormat dari あげる・くれる・もらう, dan WAJIB dipakai saat lawan bicara adalah <b>atasan atau orang yang dihormati (bukan keluarga sendiri!)</b>:\n\nあげる → <b>さしあげる</b> (Nをさしあげる / Vてさしあげる): SAYA memberi KE ATASAN. 先生に花をさしあげました (saya memberi bunga kepada guru).\n\nくれる → <b>くださる</b> (Nをくださる / Vてくださる): ATASAN memberi KE SAYA. 先生が本をくださいました (guru memberi saya buku).\n\nもらう → <b>いただく</b> (Nをいただく / Vていただく): SAYA menerima DARI ATASAN. 先生に地図をかいていただきました (saya menerima kebaikan guru yang menggambar peta untuk saya).\n\nBentuk sopannya: さしあげます・くださいます・いただきます. <b>Cara cepat mengingat arahnya:</b> さしあげる dan いただく selalu dari sudut pandang SAYA (merendah), くださる selalu dari sudut pandang BELIAU (hormat). Kalau arahnya tertukar, sopan santunmu ikut runtuh!\n\n<b>Aturan emas & jebakan:</b> (1) JANGAN pakai sonkeigo untuk diri sendiri — 私がおっしゃる itu SALAH BESAR; (2) pasangan arah: <b>くださる</b> (memberi ke saya — hormat) ⇔ <b>いただく</b> (menerima — merendah); (3) めしあがる (hormat: beliau makan) ⇔ いただく (merendah: saya makan). Kalau tertukar, artinya ikut tertukar!"
        },
        {
          "type": "kotoba",
          "title": "Kosakata Hormat & Merendah",
          "items": [
            {
              "jp": "尊敬語",
              "kj": "尊敬語",
              "r": "sonkeigo",
              "id": "bahasa hormat (meninggikan lawan)",
              "note": "Untuk atasan, tamu, pelanggan"
            },
            {
              "jp": "謙譲語",
              "kj": "謙譲語",
              "r": "kenjougo",
              "id": "bahasa merendah (diri sendiri)",
              "note": "Untuk diri sendiri / kelompok sendiri"
            },
            {
              "jp": "丁寧語",
              "kj": "丁寧語",
              "r": "teineigo",
              "id": "bahasa sopan biasa",
              "note": "です/ます yang sudah kamu kenal"
            },
            {
              "jp": "申す",
              "kj": "申す",
              "r": "mousu",
              "id": "berkata (merendah)",
              "note": "Kenjougo dari 言う. 私は田中と申します"
            },
            {
              "jp": "いたす",
              "r": "itasu",
              "id": "melakukan (merendah)",
              "note": "Kenjougo dari する"
            },
            {
              "jp": "参る",
              "kj": "参る",
              "r": "mairu",
              "id": "pergi/datang (merendah)",
              "note": "Kenjougo dari 行く/来る"
            },
            {
              "jp": "拝見する",
              "kj": "拝見する",
              "r": "haiken suru",
              "id": "melihat (merendah)",
              "note": "Kenjougo dari 見る"
            },
            {
              "jp": "いただく",
              "kj": "頂く",
              "r": "itadaku",
              "id": "menerima/makan (merendah)",
              "note": "Pasangan: くださる (hormat)"
            },
            {
              "jp": "くださる",
              "r": "kudasaru",
              "id": "memberi (hormat, ke saya)",
              "note": "先生が教えてくださった = guru mengajari saya"
            },
            {
              "jp": "めしあがる",
              "r": "meshiagaru",
              "id": "makan/minum (hormat)",
              "note": "Sonkeigo dari 食べる/飲む"
            },
            {
              "jp": "おっしゃる",
              "r": "ossharu",
              "id": "berkata (hormat)",
              "note": "Sonkeigo dari 言う"
            },
            {
              "jp": "いらっしゃる",
              "r": "irassharu",
              "id": "ada/pergi/datang (hormat)",
              "note": "Sonkeigo dari いる/行く/来る"
            },
            {
              "jp": "さしあげる",
              "kj": "差し上げる",
              "r": "sashiageru",
              "id": "memberi ke atasan (merendah)",
              "note": "Kenjougo dari あげる. Sopan: さしあげます"
            },
            {
              "jp": "なさる",
              "r": "nasaru",
              "id": "melakukan (hormat)",
              "note": "Sonkeigo dari する"
            },
            {
              "jp": "ご覧になる",
              "kj": "ご覧になる",
              "r": "goran ni naru",
              "id": "melihat (hormat)",
              "note": "Sonkeigo dari 見る"
            },
            {
              "jp": "お目にかかる",
              "kj": "お目にかかる",
              "r": "o-me ni kakaru",
              "id": "bertemu (merendah)",
              "note": "Kenjougo dari 会う"
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Pola Sonkeigo & Kenjougo",
          "items": [
            {
              "pattern": "お/ご + kata kerja dasar + になる (+ kata khusus)",
              "arti": "[beliau] ber-... (hormat)",
              "explain": "Pola sonkeigo untuk <b>lawan bicara atau atasan</b>. Ada kata-kata khusus yang wajib dihafal karena bentuknya tidak mengikuti pola: いらっしゃる、めしあがる、なさる、おっしゃる.",
              "examples": [
                {
                  "jp": "先生はもうお帰りになりました。",
                  "id": "Bapak/Ibu guru sudah pulang (hormat).",
                  "rd": "せんせいはもうおかえりになりました。"
                },
                {
                  "jp": "どうぞ、めしあがってください。",
                  "id": "Silakan dimakan (hormat).",
                  "rd": "どうぞ、めしあがってください。"
                }
              ],
              "tabel": [
                {
                  "k": "おっしゃる (言う)",
                  "v": "berkata (hormat)"
                },
                {
                  "k": "なさる (する)",
                  "v": "melakukan (hormat)"
                },
                {
                  "k": "ご覧になる (見る)",
                  "v": "melihat (hormat)"
                },
                {
                  "k": "お書きになる",
                  "v": "menulis (hormat, pola umum)"
                }
              ]
            },
            {
              "pattern": "お/ご + kata kerja dasar + する・いたす (+ kata khusus)",
              "arti": "saya ber-... (merendah)",
              "explain": "Pola kenjougo untuk <b>diri sendiri</b> saat berbicara dengan atasan atau orang yang dihormati. Kata khususnya: いたす、申す、参る、拝見する、いただく.",
              "examples": [
                {
                  "jp": "私がご案内いたします。",
                  "id": "Saya yang akan memandu (merendah).",
                  "rd": "わたしがごあんないいたします。"
                },
                {
                  "jp": "資料を拝見しました。",
                  "id": "Saya sudah melihat dokumennya (merendah).",
                  "rd": "しりょうをはいけんしました。"
                }
              ],
              "tabel": [
                {
                  "k": "申す (言う)",
                  "v": "berkata (merendah)"
                },
                {
                  "k": "いたす (する)",
                  "v": "melakukan (merendah)"
                },
                {
                  "k": "ご案内する",
                  "v": "memandu (merendah)"
                },
                {
                  "k": "お持ちする",
                  "v": "membawa (merendah)"
                }
              ]
            },
            {
              "pattern": "くださる ⇔ いただく / おっしゃる ⇔ 申す",
              "arti": "pasangan arah hormat-merendah",
              "explain": "<b>くださる</b> = beliau MEMBERI (ke saya). <b>いただく</b> = saya MENERIMA (merendah). Arahnya jangan sampai tertukar — yang satu dilihat dari sudut pandang pemberi, yang satu dari penerima!",
              "examples": [
                {
                  "jp": "先生が本をくださいました。",
                  "id": "Guru memberi saya buku (hormat).",
                  "rd": "せんせいがほんをくださいました。"
                },
                {
                  "jp": "先生の本をいただきました。",
                  "id": "Saya menerima buku dari guru (merendah).",
                  "rd": "せんせいのほんをいただきました。"
                }
              ],
              "tabel": [
                {
                  "k": "くださる ⇔ いただく",
                  "v": "beliau memberi ⇔ saya menerima"
                },
                {
                  "k": "おっしゃる ⇔ 申す",
                  "v": "berkata (hormat) ⇔ berkata (merendah)"
                },
                {
                  "k": "なさる ⇔ いたす",
                  "v": "melakukan (hormat) ⇔ melakukan (merendah)"
                }
              ]
            },
            {
              "pattern": "kata bendaをさしあげる / kata bendaをくださる / kata bendaをいただく (+ kata kerja bentuk -te)",
              "arti": "memberi/menerima (bahasa hormat)",
              "explain": "Versi keigo dari あげる・くれる・もらう, dipakai untuk <b>atasan atau orang yang dihormati</b> — bukan keluarga sendiri ya. Bentuk sopannya: さしあげます・くださいます・いただきます.",
              "examples": [
                {
                  "jp": "先生に花をさしあげました。",
                  "id": "Saya memberi bunga kepada guru (merendah).",
                  "rd": "せんせいにはなをさしあげました。"
                },
                {
                  "jp": "先生が本をくださいました。",
                  "id": "Guru memberi saya buku (hormat).",
                  "rd": "せんせいがほんをくださいました。"
                },
                {
                  "jp": "先生に地図をかいていただきました。",
                  "id": "Saya menerima kebaikan guru yang menggambar peta untuk saya.",
                  "rd": "せんせいにちずをかいていただきました。"
                },
                {
                  "jp": "あの先生はいつもやさしく教えてくださいます。",
                  "id": "Guru itu selalu mengajari saya dengan ramah (hormat).",
                  "rd": "あのせんせいはいつもやさしくおしえてくださいます。"
                }
              ],
              "tabel": [
                {
                  "k": "さしあげる",
                  "v": "saya memberi (ke atasan)"
                },
                {
                  "k": "くださる",
                  "v": "beliau memberi (ke saya)"
                },
                {
                  "k": "いただく",
                  "v": "saya menerima (dari atasan)"
                }
              ]
            }
          ]
        },
        {
          "type": "kanji",
          "title": "Kanji Bab 7",
          "items": [
            {
              "ch": "尊",
              "kun": "たっとい",
              "on": "そん",
              "id": "mulia / hormat",
              "note": "尊敬 (sonkei) = hormat"
            },
            {
              "ch": "敬",
              "kun": "うやまう",
              "on": "けい",
              "id": "hormat",
              "note": "尊敬語 (sonkeigo)"
            },
            {
              "ch": "謙",
              "kun": "へりくだる",
              "on": "けん",
              "id": "rendah hati",
              "note": "謙譲語 (kenjougo)"
            },
            {
              "ch": "申",
              "kun": "もうす",
              "on": "しん",
              "id": "berkata (merendah)",
              "note": "申す (mousu), 申請 (shinsei)"
            },
            {
              "ch": "頂",
              "kun": "いただく",
              "on": "ちょう",
              "id": "menerima / puncak",
              "note": "頂く (itadaku), 頂上 (choujou)"
            },
            {
              "ch": "参",
              "kun": "まいる",
              "on": "さん",
              "id": "ikut serta / datang (merendah)",
              "note": "参加 (sanka) = partisipasi"
            },
            {
              "ch": "差",
              "kun": "さす",
              "on": "さ",
              "id": "menyodorkan / menyerahkan",
              "note": "差し上げる (sashiageru) = memberi (merendah)"
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Resepsionis Hotel",
          "lines": [
            {
              "sp": "A",
              "jp": "いらっしゃいませ。ご予約のお客様でしょうか。",
              "id": "Selamat datang. Apakah tamu yang sudah reservasi?"
            },
            {
              "sp": "B",
              "jp": "はい、田中と申します。",
              "id": "Ya, saya Tanaka (merendah)."
            },
            {
              "sp": "A",
              "jp": "田中様ですね。こちらでお待ちください。",
              "id": "Tuan Tanaka ya. Mohon tunggu di sini."
            },
            {
              "sp": "B",
              "jp": "朝ごはんは何時からですか。",
              "id": "Sarapan dari jam berapa?"
            },
            {
              "sp": "A",
              "jp": "7時からでございます。どうぞめしあがってください。",
              "id": "Dari jam 7. Silakan dinikmati (hormat)."
            },
            {
              "sp": "B",
              "jp": "ありがとうございます。",
              "id": "Terima kasih."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "Sonkeigo dari 言う (iu) adalah…",
          "o": [
            "申す",
            "おっしゃる",
            "いただく",
            "なさる"
          ],
          "a": 1,
          "explain": "おっしゃる = sonkeigo dari 言う. 申す itu kenjougo!"
        },
        {
          "q": "Sonkeigo dari 食べる (taberu) adalah…",
          "o": [
            "いただく",
            "めしあがる",
            "召す",
            "食べなさる"
          ],
          "a": 1,
          "explain": "めしあがる = sonkeigo 食べる/飲む. いただく itu kenjougo."
        },
        {
          "q": "Kenjougo dari する adalah…",
          "o": [
            "なさる",
            "いたす",
            "くださる",
            "いらっしゃる"
          ],
          "a": 1,
          "explain": "いたす = kenjougo dari する. なさる itu sonkeigo."
        },
        {
          "q": "Kenjougo dari 言う adalah…",
          "o": [
            "おっしゃる",
            "申す",
            "話す",
            "述べる"
          ],
          "a": 1,
          "explain": "申す = kenjougo dari 言う."
        },
        {
          "q": "先生に地図をかいて___。(Saya menerima kebaikan guru menggambar peta)",
          "o": [
            "くださいました",
            "いただきました",
            "申しました",
            "さしあげました"
          ],
          "a": 1,
          "explain": "Vていただく = saya menerima perbuatan baik dari atasan (merendah)."
        },
        {
          "q": "先生が本を___。(Guru MEMBERI saya buku — hormat)",
          "o": [
            "いただきました",
            "くださいました",
            "申しました",
            "いたしました"
          ],
          "a": 1,
          "explain": "くださる = beliau memberi (arah ke saya, hormat)."
        },
        {
          "q": "先生の本を___。(Saya MENERIMA buku dari guru — merendah)",
          "o": [
            "くださいました",
            "いただきました",
            "おっしゃいました",
            "なさいました"
          ],
          "a": 1,
          "explain": "いただく = saya menerima (merendah)."
        },
        {
          "q": "Mana yang SALAH?",
          "o": [
            "先生がおっしゃいました",
            "私が申しました",
            "私がおっしゃいました",
            "先生がめしあがりました"
          ],
          "a": 2,
          "explain": "おっしゃる adalah sonkeigo — TIDAK BOLEH untuk diri sendiri (私)!"
        },
        {
          "q": "拝見する adalah kenjougo dari…",
          "o": [
            "言う",
            "見る",
            "聞く",
            "する"
          ],
          "a": 1,
          "explain": "拝見する = kenjougo dari 見る (melihat)."
        },
        {
          "q": "さしあげる dipakai saat…",
          "o": [
            "Atasan memberi kepada saya",
            "Saya memberi kepada atasan/orang yang dihormati",
            "Saya memberi kepada keluarga sendiri",
            "Teman memberi kepada teman"
          ],
          "a": 1,
          "explain": "さしあげる = kenjougo dari あげる: SAYA memberi KE ATASAN. Bukan untuk keluarga sendiri!"
        }
      ]
    },
    {
      "id": "n4-9",
      "bab": 8,
      "level": "n4",
      "title": "Partikel & Penekanan",
      "desc": "Partikel tempat, titik awal, frekuensi, pembagian, dan penekanan ala Soumatome",
      "icon": "🧩",
      "sections": [
        {
          "type": "penjelasan",
          "title": "Partikel Kecil, Jebakan Besar",
          "body": "Di level N5 kamu sudah kenal partikel dasar. Di N4, partikel yang <b>sama</b> ternyata punya <b>makna ganda</b> — dan Soumatome mengujinya habis-habisan. Contoh paling terkenal: <b>で vs に</b>. Keduanya bisa diterjemahkan \"di\", tapi fungsinya beda jauh.\n\n<b>で = tempat BERAKTIVITAS</b> (ada aksi: bekerja, belajar, makan). <b>に = tempat KEBERADAAN</b> (ada orang/benda diam: tinggal, ada, duduk) atau arah tujuan. Jadi 日本で働く (bekerja DI Jepang — aktivitas) benar, sedangkan 日本に働く <b>SALAH</b> total.\n\n<b>Tips menghafal:</b> tanya pada dirimu — \"apakah ada gerakan/aksi di tempat ini?\" Kalau ya, pakai で. Kalau hanya \"ada\" atau \"ke\", pakai に. <b>Jebakan umum:</b> 90% soal JLPT menaruh に sebagai pengecoh di kalimat aktivitas. Jangan tertipu!\n\nBab ini juga membahas partikel <b>penekanan</b>: も (bahkan), でも (bahkan N pun / N saja), ずつ (masing-masing), dan しか〜ない (hanya, dengan nuansa keterbatasan). Kuasai nuansanya, karena artinya bisa berubah 180 derajat hanya gara-gara satu partikel."
        },
        {
          "type": "kotoba",
          "title": "Kosakata Bab 8",
          "items": [
            {
              "jp": "ざいりょう",
              "kj": "材料",
              "r": "zairyou",
              "id": "bahan baku",
              "note": "ぶどうからワイン = wine dari anggur"
            },
            {
              "jp": "しゅっぱつてん",
              "kj": "出発点",
              "r": "shuppatsuten",
              "id": "titik awal",
              "note": "から dipakai untuk titik awal"
            },
            {
              "jp": "わりあい",
              "kj": "割合",
              "r": "wariai",
              "id": "rasio / proporsi",
              "note": "1日に3回 = 3 kali dalam 1 hari"
            },
            {
              "jp": "ひんど",
              "kj": "頻度",
              "r": "hindo",
              "id": "frekuensi",
              "note": "頻繁 (hinpan) = sering"
            },
            {
              "jp": "きょくたん",
              "kj": "極端",
              "r": "kyokutan",
              "id": "ekstrem",
              "note": "も dipakai untuk contoh ekstrem"
            },
            {
              "jp": "きんとう",
              "kj": "均等",
              "r": "kintou",
              "id": "merata",
              "note": "ずつ = dibagi rata"
            },
            {
              "jp": "くばる",
              "kj": "配る",
              "r": "kubaru",
              "id": "membagikan",
              "note": "プリントを配る = membagikan selebaran"
            },
            {
              "jp": "かぎる",
              "kj": "限る",
              "r": "kagiru",
              "id": "terbatas",
              "note": "しか〜ない = hanya, terbatas"
            },
            {
              "jp": "げんど",
              "kj": "限度",
              "r": "gendo",
              "id": "batas",
              "note": "限度を超える = melewati batas"
            },
            {
              "jp": "じゅうぶん",
              "kj": "十分",
              "r": "juubun",
              "id": "cukup",
              "note": "十分です = sudah cukup"
            },
            {
              "jp": "れい",
              "kj": "例",
              "r": "rei",
              "id": "contoh",
              "note": "例えば = misalnya"
            },
            {
              "jp": "まいかい",
              "kj": "毎回",
              "r": "maikai",
              "id": "setiap kali",
              "note": "毎 = setiap: 毎日， 毎週"
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Pola Partikel & Penekanan",
          "items": [
            {
              "pattern": "kata benda + で（tempat aktivitas）",
              "arti": "di [tempat] — untuk beraktivitas",
              "explain": "<b>で</b> menandai tempat di mana suatu <b>aktivitas</b> dilakukan. Bandingkan dengan <b>に</b> yang menandai keberadaan atau arah. Karena 働く (bekerja) adalah aktivitas, tempatnya pakai で — kalimat 日本に働く itu <b>salah</b>.",
              "examples": [
                {
                  "jp": "兄は日本で働いています。",
                  "id": "Kakak laki-laki saya bekerja di Jepang.",
                  "rd": "あにはにほんではたらいています。"
                },
                {
                  "jp": "図書館で勉強します。",
                  "id": "Saya belajar di perpustakaan.",
                  "rd": "としょかんでべんきょうします。"
                },
                {
                  "jp": "学校で昼ご飯を食べました。",
                  "id": "Saya makan siang di sekolah.",
                  "rd": "がっこうでひるごはんをたべました。"
                }
              ],
              "tabel": [
                {
                  "k": "学校で勉強する",
                  "v": "belajar di sekolah (beraktivitas)"
                },
                {
                  "k": "学校に行く",
                  "v": "pergi ke sekolah (tujuan)"
                },
                {
                  "k": "家で休む",
                  "v": "istirahat di rumah (beraktivitas)"
                }
              ]
            },
            {
              "pattern": "kata benda + から",
              "arti": "dari [bahan asal / titik awal]",
              "explain": "<b>から</b> punya dua fungsi utama. (1) <b>Bahan asal</b>: sesuatu dibuat DARI apa (ぶどうからワイン). (2) <b>Titik awal</b>: mulai DARI mana. Jangan tertukar dengan で yang menandai alat atau cara.",
              "examples": [
                {
                  "jp": "ぶどうからワインを作ります。",
                  "id": "Wine dibuat dari buah anggur.",
                  "rd": "ぶどうからワインをつくります。"
                },
                {
                  "jp": "東京から大阪まで新幹線で行きます。",
                  "id": "Dari Tokyo ke Osaka naik shinkansen.",
                  "rd": "とうきょうからおおさかまでしんかんせんでいきます。"
                },
                {
                  "jp": "この紙は木から作られています。",
                  "id": "Kertas ini dibuat dari kayu.",
                  "rd": "このかみはきからつくられています。"
                }
              ],
              "tabel": [
                {
                  "k": "ぶどうからワインを作る",
                  "v": "membuat wine dari anggur (bahan berubah)"
                },
                {
                  "k": "東京から来た",
                  "v": "datang dari Tokyo (titik awal)"
                },
                {
                  "k": "から ⇔ まで",
                  "v": "dari ⇔ sampai"
                }
              ]
            },
            {
              "pattern": "（rentang waktu）+ に +（frekuensi）",
              "arti": "dalam [rentang], [frekuensi] kali",
              "explain": "Pola ini menyatakan <b>rasio frekuensi</b> terhadap rentang waktu, misalnya \"3 kali dalam 1 hari\". <b>Jebakannya:</b> に di sini BUKAN \"pada\" (waktu kejadian), melainkan \"per / dalam\". Polanya selalu: rentang waktu + に + jumlah kejadian.",
              "examples": [
                {
                  "jp": "1日に3回、この薬を飲んでください。",
                  "id": "Minumlah obat ini 3 kali sehari.",
                  "rd": "1にちに3かい、このくすりをのんでください。"
                },
                {
                  "jp": "週に2回、プールで泳ぎます。",
                  "id": "Saya berenang di kolam 2 kali seminggu.",
                  "rd": "しゅうに2かい、プールでおよぎます。"
                },
                {
                  "jp": "1年に1回、健康診断を受けます。",
                  "id": "Saya cek kesehatan 1 kali setahun.",
                  "rd": "1ねんに1かい、けんこうしんだんをうけます。"
                }
              ],
              "tabel": [
                {
                  "k": "1日に3回",
                  "v": "3 kali sehari"
                },
                {
                  "k": "1週間に2回",
                  "v": "2 kali seminggu"
                },
                {
                  "k": "1年に1回",
                  "v": "1 kali setahun"
                }
              ]
            },
            {
              "pattern": "kata benda + も（contoh ekstrem）",
              "arti": "bahkan N pun …",
              "explain": "<b>も</b> di sini dipakai untuk <b>contoh ekstrem</b>: bahkan sesuatu yang paling mendasar pun tidak bisa dilakukan — apalagi yang lebih sulit. Selalu dipakai dengan <b>kalimat negatif</b>. Nuansanya: \"sampai segitunya pun tidak\".",
              "examples": [
                {
                  "jp": "私はひらがなも書けません。",
                  "id": "Saya bahkan tidak bisa menulis hiragana.",
                  "rd": "わたしはひらがなもかけません。"
                },
                {
                  "jp": "1円も持っていません。",
                  "id": "Saya tidak membawa uang sepeser pun.",
                  "rd": "1えんももっていません。"
                },
                {
                  "jp": "彼は挨拶もできません。",
                  "id": "Dia bahkan tidak bisa menyapa.",
                  "rd": "かれはあいさつもできません。"
                }
              ],
              "tabel": [
                {
                  "k": "ひらがなも書けない",
                  "v": "bahkan hiragana pun tak bisa tulis"
                },
                {
                  "k": "一円もない",
                  "v": "bahkan 1 yen pun tak ada"
                },
                {
                  "k": "子供も知っている",
                  "v": "bahkan anak-anak pun tahu"
                }
              ]
            },
            {
              "pattern": "kata benda + ずつ",
              "arti": "masing-masing [N] / [N] per orang",
              "explain": "<b>ずつ</b> menyatakan <b>pembagian rata</b> atau pengulangan tindakan yang sama: membagikan sesuatu satu per orang, atau belajar 2 halaman setiap hari. Fokusnya pada \"dibagi sama rata\", bukan pada totalnya.",
              "examples": [
                {
                  "jp": "このプリントを1枚ずつ配ってください。",
                  "id": "Tolong bagikan selebaran ini satu lembar per orang.",
                  "rd": "このプリントを1まいずつくばってください。"
                },
                {
                  "jp": "この本を毎日2ページずつ勉強しましょう。",
                  "id": "Mari belajar buku ini 2 halaman setiap hari.",
                  "rd": "このほんをまいにち2ページずつべんきょうしましょう。"
                },
                {
                  "jp": "子どもたちに飴を3つずつあげました。",
                  "id": "Saya memberi 3 permen kepada tiap anak.",
                  "rd": "こどもたちにあめを3つずつあげました。"
                }
              ],
              "tabel": [
                {
                  "k": "1枚ずつ",
                  "v": "masing-masing 1 lembar"
                },
                {
                  "k": "1人ずつ",
                  "v": "satu per satu (orang)"
                },
                {
                  "k": "2ページずつ",
                  "v": "2 halaman per bagian"
                }
              ]
            },
            {
              "pattern": "kata benda + でも",
              "arti": "bahkan N pun / N saja (saran santai)",
              "explain": "<b>でも</b> punya dua fungsi. (1) <b>Contoh ekstrem</b>: bahkan sesuatu yang tak terduga pun termasuk (子どもでもできる = bahkan anak-anak pun bisa). (2) <b>Saran santai</b>: \"N saja bagaimana?\" sebagai ajakan ringan (お茶でも飲みましょうか). Bedakan dari konteks kalimatnya!",
              "examples": [
                {
                  "jp": "これは子どもでもできる問題です。",
                  "id": "Ini soal yang bahkan anak-anak pun bisa kerjakan.",
                  "rd": "これはこどもでもできるもんだいです。"
                },
                {
                  "jp": "お茶でも飲みましょうか。",
                  "id": "Minum teh saja, bagaimana?",
                  "rd": "おちゃでものみましょうか。"
                },
                {
                  "jp": "5分でもいいから休みたいです。",
                  "id": "Saya ingin istirahat walau hanya 5 menit.",
                  "rd": "5ふんでもいいからやすみたいです。"
                }
              ],
              "tabel": [
                {
                  "k": "コーヒーでも",
                  "v": "kopi atau semacamnya"
                },
                {
                  "k": "だれでも",
                  "v": "siapa pun"
                },
                {
                  "k": "どこでも",
                  "v": "di mana pun"
                },
                {
                  "k": "いつでも",
                  "v": "kapan pun"
                }
              ]
            },
            {
              "pattern": "kata benda + しか + 〜ない",
              "arti": "hanya N (tidak ada yang lain)",
              "explain": "Artinya \"hanya N dan tidak ada yang lain\", dan <b>wajib</b> dipakai dengan kalimat <b>negatif</b>. Bedanya dengan だけ (netral, bisa positif): <b>しか〜ない menekankan keterbatasan</b> — ada nuansa \"sayang sekali cuma segitu\". <b>Jebakan:</b> しか dengan kalimat positif itu salah mutlak.",
              "examples": [
                {
                  "jp": "私のクラスに男の人は二人しかいません。",
                  "id": "Di kelas saya hanya ada dua orang laki-laki.",
                  "rd": "わたしのクラスにおとこのひとはふたりしかいません。"
                },
                {
                  "jp": "ジョンさんは英語しか話せません。",
                  "id": "John hanya bisa berbicara bahasa Inggris.",
                  "rd": "ジョンさんはえいごしかはなせません。"
                },
                {
                  "jp": "1000円しか持っていません。",
                  "id": "Saya hanya punya 1000 yen.",
                  "rd": "1000えんしかもっていません。"
                }
              ],
              "tabel": [
                {
                  "k": "100円しかない",
                  "v": "hanya ada 100 yen"
                },
                {
                  "k": "1人しか来ない",
                  "v": "hanya 1 orang yang datang"
                },
                {
                  "k": "しか + 〜ない",
                  "v": "wajib kalimat negatif!"
                }
              ]
            }
          ]
        },
        {
          "type": "kanji",
          "title": "Kanji Bab 8",
          "items": [
            {
              "ch": "場",
              "kun": "ば",
              "on": "じょう",
              "id": "tempat",
              "note": "場所 (basho) = tempat"
            },
            {
              "ch": "料",
              "kun": "—",
              "on": "りょう",
              "id": "bahan / biaya",
              "note": "材料 (zairyou) = bahan baku"
            },
            {
              "ch": "限",
              "kun": "かぎる",
              "on": "げん",
              "id": "batas",
              "note": "限定 (gentei) = terbatas"
            },
            {
              "ch": "配",
              "kun": "くばる",
              "on": "はい",
              "id": "membagi",
              "note": "配る = membagikan"
            },
            {
              "ch": "極",
              "kun": "きわめる",
              "on": "きょく",
              "id": "ujung / ekstrem",
              "note": "極端 (kyokutan) = ekstrem"
            },
            {
              "ch": "度",
              "kun": "たび",
              "on": "ど",
              "id": "kali / derajat",
              "note": "頻度 (hindo) = frekuensi"
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Bagi-bagi Tugas",
          "lines": [
            {
              "sp": "A",
              "jp": "このプリント、1枚ずつ配ってくれない？",
              "id": "Bisa tolong bagikan selebaran ini satu lembar per orang?"
            },
            {
              "sp": "B",
              "jp": "いいよ。全部で何枚あるの？",
              "id": "Boleh. Totalnya ada berapa lembar?"
            },
            {
              "sp": "A",
              "jp": "30枚しかないんだ。人数も30人だから、ちょうどいいね。",
              "id": "Cuma ada 30 lembar. Orangnya juga 30, jadi pas."
            },
            {
              "sp": "B",
              "jp": "お茶でも飲みながらやろうか。",
              "id": "Kerjakan sambil minum teh saja, yuk?"
            },
            {
              "sp": "A",
              "jp": "いいね。5分で終わらせよう。",
              "id": "Bagus. Selesaikan dalam 5 menit, yuk."
            },
            {
              "sp": "B",
              "jp": "ひらがなも書けない1年生でもできる仕事だね。",
              "id": "Pekerjaan yang bahkan anak kelas 1 yang belum bisa hiragana pun bisa."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "Lengkapi: 図書館___勉強します。",
          "o": [
            "で",
            "に",
            "から",
            "へ"
          ],
          "a": 0,
          "explain": "Belajar adalah aktivitas yang dilakukan di perpustakaan, jadi pakai で."
        },
        {
          "q": "Lengkapi: ぶどう___ワインを作ります。",
          "o": [
            "で",
            "に",
            "から",
            "を"
          ],
          "a": 2,
          "explain": "から dipakai untuk bahan asal: wine dibuat DARI anggur."
        },
        {
          "q": "Lengkapi: 1日___3回、この薬を飲んでください。",
          "o": [
            "で",
            "に",
            "から",
            "まで"
          ],
          "a": 1,
          "explain": "Pola frekuensi: rentang waktu + に + jumlah kejadian = 3 kali dalam 1 hari."
        },
        {
          "q": "Apa arti \"ひらがなも書けません\"?",
          "o": [
            "Saya bisa menulis hiragana",
            "Saya bahkan tidak bisa menulis hiragana",
            "Saya hanya menulis hiragana",
            "Saya suka menulis hiragana"
          ],
          "a": 1,
          "explain": "も + kalimat negatif = contoh ekstrem: bahkan hiragana pun tidak bisa."
        },
        {
          "q": "Lengkapi: このプリントを1枚___配ってください。",
          "o": [
            "ずつ",
            "でも",
            "しか",
            "だけ"
          ],
          "a": 0,
          "explain": "ずつ = masing-masing satu lembar per orang (dibagi rata)."
        },
        {
          "q": "Apa fungsi でも dalam \"お茶でも飲みましょうか\"?",
          "o": [
            "Menekankan keterbatasan",
            "Saran santai: teh saja bagaimana",
            "Menyatakan bahan asal",
            "Menyatakan frekuensi"
          ],
          "a": 1,
          "explain": "でも di sini adalah ajakan santai: \"minum teh saja, bagaimana?\""
        },
        {
          "q": "Lengkapi: 1000円___持っていません。",
          "o": [
            "だけ",
            "ずつ",
            "しか",
            "でも"
          ],
          "a": 2,
          "explain": "しか + negatif = hanya 1000 yen (dengan nuansa keterbatasan)."
        },
        {
          "q": "Mana kalimat yang SALAH?",
          "o": [
            "日本で働いています",
            "日本に住んでいます",
            "日本に働いています",
            "日本から来ました"
          ],
          "a": 2,
          "explain": "働く adalah aktivitas, jadi tempatnya harus で — 日本に働く adalah salah."
        },
        {
          "q": "Apa arti \"子どもでもできる問題です\"?",
          "o": [
            "Soal yang hanya untuk anak-anak",
            "Soal yang bahkan anak-anak pun bisa kerjakan",
            "Soal tentang anak-anak",
            "Soal yang dibuat anak-anak"
          ],
          "a": 1,
          "explain": "でも = bahkan N pun: bahkan anak-anak pun bisa."
        },
        {
          "q": "Aturan mutlak pola しか adalah…",
          "o": [
            "Selalu dengan kalimat negatif",
            "Selalu dengan kalimat positif",
            "Bisa positif bisa negatif",
            "Hanya untuk benda"
          ],
          "a": 0,
          "explain": "しか〜ない wajib berpasangan dengan bentuk negatif. しか dengan kalimat positif adalah salah."
        }
      ]
    },
    {
      "id": "n4-10",
      "bab": 9,
      "level": "n4",
      "title": "Penunjuk & Penjelas Kata Benda",
      "desc": "Kata tunjuk ko-so-a-do dan cara menerangkan kata benda seperti penutur asli",
      "icon": "👉",
      "sections": [
        {
          "type": "penjelasan",
          "title": "Sistem Ko-So-A-Do: Peta Jarak Bahasa Jepang",
          "body": "Bahasa Jepang punya sistem penunjuk yang jauh lebih kaya dari \"ini/itu\" dalam bahasa Indonesia. Kuncinya adalah <b>jarak dari pembicara dan lawan bicara</b>: <b>こ</b> = dekat pembicara (ini), <b>そ</b> = dekat lawan bicara / yang baru dibicarakan (itu), <b>あ</b> = jauh dari keduanya (itu yang di sana), <b>ど</b> = kata tanya (yang mana / seperti apa).\n\nSistem ini berlaku untuk <b>empat jenis kata</b> dan Soumatome menguji semuanya:\n1. <b>こんな/そんな/あんな/どんな + kata benda</b> → menerangkan JENIS benda (\"rumah SEPERTI INI\")\n2. <b>こんなに/そんなに/あんなに/どんなに</b> → menerangkan kata SIFAT/KERJA (\"SEBEGITU sulit\")\n3. <b>こう/そう/ああ/どう + kata kerja</b> → menerangkan CARA (\"dengan cara BEGINI\")\n4. <b>この/その/あの/どの + kata benda</b> → menunjuk benda langsung (sudah kamu kuasai di N5)\n\n<b>Jebakan klasik:</b> そんな dipakai bukan hanya untuk \"itu (di dekatmu)\", tapi juga untuk <b>merujuk hal yang BARU DIBICARAKAN</b> lawan bicara. Contoh: A: \"Ujiannya sulit.\" B: \"そんなにむずかしかったんですか\" (Sesulit ITU ya?) — \"itu\" di sini = \"yang kamu ceritakan tadi\".\n\n<b>Tips:</b> kalau kedua belah pihak sama-sama tahu yang dibicarakan → pakai あ. Kalau hanya SATU pihak yang tahu → pakai そ. Ini aturan emas yang sering keluar di soal!"
        },
        {
          "type": "penjelasan",
          "title": "Menerangkan Kata Benda: Selalu dari Depan!",
          "body": "Aturan besi bahasa Jepang: <b>penjelasan tentang kata benda SELALU diletakkan SEBELUM kata bendanya</b>. Kebalikan dari bahasa Indonesia! \"Tas yang saya dapat dari kakak\" menjadi 姉にもらったバッグ — penjelasnya (姉にもらった) di depan バッグ.\n\nPenjelas ini bisa berupa: kata sifat (安くておいしいレストラン), kalimat bentuk biasa (日本語を勉強している学生), atau pola khusus <b>〜という</b> untuk nama/sebutan: 目黒というところ (tempat yang BERNAMA Meguro), 電気代があがるという話 (kabar BAHWA tarif listrik naik).\n\n<b>Kenapa penting?</b> Karena di JLPT, soal sering meminta kamu menyusun kalimat acak menjadi benar. Kuncinya selalu sama: cari kata bendanya dulu, lalu taruh SEMUA penjelas di depannya. <b>Jebakan:</b> 〜っていう adalah bentuk santai dari 〜という — artinya sama, jangan terkecoh dikira pola berbeda!"
        },
        {
          "type": "kotoba",
          "title": "Kosakata Bab 9",
          "items": [
            {
              "jp": "しゅるい",
              "kj": "種類",
              "r": "shurui",
              "id": "jenis",
              "note": "どんな種類 = jenis yang seperti apa"
            },
            {
              "jp": "ていど",
              "kj": "程度",
              "r": "teido",
              "id": "tingkat / derajat",
              "note": "こんなに〜 = sebegini (tingkat)"
            },
            {
              "jp": "ないよう",
              "kj": "内容",
              "r": "naiyou",
              "id": "isi",
              "note": "内容を説明する = menjelaskan isi"
            },
            {
              "jp": "いみ",
              "kj": "意味",
              "r": "imi",
              "id": "arti / makna",
              "note": "どういう意味ですか = apa artinya?"
            },
            {
              "jp": "なまえ",
              "kj": "名前",
              "r": "namae",
              "id": "nama",
              "note": "〜という名前 = nama yang disebut ~"
            },
            {
              "jp": "ようす",
              "kj": "様子",
              "r": "yousu",
              "id": "keadaan / tampang",
              "note": "様子を見る = melihat keadaan"
            },
            {
              "jp": "げんいん",
              "kj": "原因",
              "r": "genin",
              "id": "penyebab",
              "note": "かぜで休む = tidak masuk karena flu"
            },
            {
              "jp": "ほうほう",
              "kj": "方法",
              "r": "houhou",
              "id": "cara / metode",
              "note": "どうやって = dengan cara bagaimana"
            },
            {
              "jp": "ぐあい",
              "kj": "具合",
              "r": "guai",
              "id": "kondisi",
              "note": "体の具合が悪い = badan tidak enak"
            },
            {
              "jp": "わけ",
              "kj": "訳",
              "r": "wake",
              "id": "alasan / keadaan",
              "note": "訳が分からない = tidak paham"
            },
            {
              "jp": "うわさ",
              "kj": "噂",
              "r": "uwasa",
              "id": "kabar / gosip",
              "note": "〜という話 = kabar bahwa…"
            },
            {
              "jp": "ものがたり",
              "kj": "物語",
              "r": "monogatari",
              "id": "cerita",
              "note": "昔話 = dongeng zaman dulu"
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Pola Penunjuk & Penjelas",
          "items": [
            {
              "pattern": "kata benda + で（berbagai makna）",
              "arti": "dengan / karena / dari (tergantung konteks)",
              "explain": "Partikel <b>で</b> punya banyak wajah. (1) <b>Cara/alat</b>: dengan apa sesuatu dilakukan (電車で行く). (2) <b>Cakupan</b>: batasan ruang atau harga (日本で一番、100円で買う). (3) <b>Alasan</b>: karena sesuatu terjadi (かぜで休む). <b>Tipsnya:</b> baca kata kerjanya dulu — kalau kata kerjanya \"pergi\", で = cara; kalau \"libur\", で = alasan.",
              "examples": [
                {
                  "jp": "電車で行きます。",
                  "id": "Saya pergi dengan kereta.",
                  "rd": "でんしゃでいきます。"
                },
                {
                  "jp": "この本を100円で買いました。",
                  "id": "Saya membeli buku ini seharga 100 yen.",
                  "rd": "このほんを100えんでかいました。"
                },
                {
                  "jp": "かぜで学校を休みました。",
                  "id": "Saya tidak masuk sekolah karena flu.",
                  "rd": "かぜでがっこうをやすみました。"
                }
              ],
              "tabel": [
                {
                  "k": "はしで食べる",
                  "v": "makan dengan sumpit (alat)"
                },
                {
                  "k": "日本で一番",
                  "v": "paling … di Jepang (cakupan)"
                },
                {
                  "k": "かぜで休む",
                  "v": "istirahat karena flu (alasan)"
                },
                {
                  "k": "1000円で買う",
                  "v": "beli seharga 1000 yen (batas)"
                }
              ]
            },
            {
              "pattern": "kata benda + も（jumlah）",
              "arti": "sampai [sebanyak itu] / [segitu] pun",
              "explain": "<b>も</b> setelah angka menekankan kuantitas. Dalam kalimat <b>positif</b> = \"sampai SEBANYAK itu\" (2時間もかかる = sampai 2 jam!). Dalam kalimat <b>negatif</b> = \"sampai segitu pun tidak\" (1円もない = sepeser pun tidak ada). <b>Jebakan:</b> jangan tertukar dengan も penekanan ekstrem (\"bahkan\") — yang ini khusus untuk ANGKA.",
              "examples": [
                {
                  "jp": "学校まで2時間もかかります。",
                  "id": "Sampai ke sekolah memakan waktu 2 jam.",
                  "rd": "がっこうまで2じかんもかかります。"
                },
                {
                  "jp": "ビールを3本も飲みました。",
                  "id": "Saya minum bir sampai 3 botol.",
                  "rd": "ビールを3ぼんものみました。"
                },
                {
                  "jp": "10分も待てませんでした。",
                  "id": "Saya tidak bisa menunggu sampai 10 menit pun.",
                  "rd": "10ぷんもまてませんでした。"
                }
              ],
              "tabel": [
                {
                  "k": "3時間も待った",
                  "v": "menunggu sampai 3 jam"
                },
                {
                  "k": "5人も来た",
                  "v": "sampai 5 orang datang"
                },
                {
                  "k": "1分もかからない",
                  "v": "tak sampai 1 menit (dengan negatif)"
                }
              ]
            },
            {
              "pattern": "kata benda 1 + とか + kata benda 2 + とか",
              "arti": "N1, N2, dan sejenisnya (contoh)",
              "explain": "<b>とか</b> dipakai untuk memberi <b>contoh</b> dari suatu kelompok, dengan nuansa \"dan sejenisnya\". Bedanya dengan や (N5): とか lebih <b>kasual</b> dan sering muncul dalam percakapan. Polanya N1とかN2とか — とか yang terakhir boleh dihilangkan kalau santai.",
              "examples": [
                {
                  "jp": "毎日、昼はラーメンとかそばとかを食べます。",
                  "id": "Setiap hari saya makan siang ramen, soba, dan sejenisnya.",
                  "rd": "まいにち、ひるはラーメンとかそばとかをたべます。"
                },
                {
                  "jp": "映画とか音楽が好きです。",
                  "id": "Saya suka film, musik, dan sejenisnya.",
                  "rd": "えいがとかおんがくがすきです。"
                },
                {
                  "jp": "日本とか韓国に行きたいです。",
                  "id": "Saya ingin pergi ke Jepang, Korea, dan sejenisnya.",
                  "rd": "にほんとかかんこくにいきたいです。"
                }
              ],
              "tabel": [
                {
                  "k": "パンとか牛乳とか",
                  "v": "roti, susu, dan sejenisnya"
                },
                {
                  "k": "映画とか見たい",
                  "v": "ingin nonton film dan semacamnya"
                },
                {
                  "k": "とか ≠ と",
                  "v": "hanya contoh, bukan daftar lengkap"
                }
              ]
            },
            {
              "pattern": "（penjelas）+ kata benda",
              "arti": "kata benda yang diterangkan dari depan",
              "explain": "Penjelasan tentang kata benda <b>selalu diletakkan di depan</b>: kata sifat, kalimat bentuk biasa, atau frasa. Ini kebalikan dari bahasa Indonesia! <b>Tips mengerjakan soal susun kalimat:</b> temukan kata bendanya dulu, lalu taruh semua penjelas di depannya — 100% benar.",
              "examples": [
                {
                  "jp": "これは姉にもらったバッグです。",
                  "id": "Ini adalah tas yang saya dapat dari kakak perempuan saya.",
                  "rd": "これはあねにもらったバッグです。"
                },
                {
                  "jp": "この近くに安くておいしいレストランがありますか。",
                  "id": "Apakah ada restoran yang murah dan enak di dekat sini?",
                  "rd": "このちかくにやすくておいしいレストランがありますか。"
                },
                {
                  "jp": "日本語を勉強している学生が多いです。",
                  "id": "Banyak murid yang sedang belajar bahasa Jepang.",
                  "rd": "にほんごをべんきょうしているがくせいがおおいです。"
                }
              ],
              "tabel": [
                {
                  "k": "日本で買った本",
                  "v": "buku yang dibeli di Jepang"
                },
                {
                  "k": "母が作った料理",
                  "v": "masakan yang dibuat ibu"
                },
                {
                  "k": "頭がいい人",
                  "v": "orang yang pintar"
                }
              ]
            },
            {
              "pattern": "こんな / そんな / あんな / どんな + kata benda",
              "arti": "N seperti ini / seperti itu / seperti apa",
              "explain": "Kata tunjuk yang menerangkan <b>kata benda</b>: menunjukkan JENIS atau sifat benda, orang, atau hal. <b>こんな</b> = seperti ini (dekatku), <b>そんな</b> = seperti itu (dekatmu / yang baru dibicarakan), <b>あんな</b> = seperti itu (jauh dari kita berdua), <b>どんな</b> = seperti apa (bertanya).",
              "examples": [
                {
                  "jp": "私もこんな家に住みたいです。",
                  "id": "Saya juga ingin tinggal di rumah seperti ini.",
                  "rd": "わたしもこんなうちにすみたいです。"
                },
                {
                  "jp": "あんなバッグがほしいです。",
                  "id": "Saya ingin tas seperti itu (yang di sana).",
                  "rd": "あんなバッグがほしいです。"
                },
                {
                  "jp": "どんな音楽が好きですか。",
                  "id": "Musik seperti apa yang kamu suka?",
                  "rd": "どんなおんがくがすきですか。"
                }
              ],
              "tabel": [
                {
                  "k": "こんな本",
                  "v": "buku seperti ini"
                },
                {
                  "k": "そんなこと",
                  "v": "hal seperti itu"
                },
                {
                  "k": "あんな人",
                  "v": "orang seperti itu (jauh)"
                },
                {
                  "k": "どんな音楽",
                  "v": "musik seperti apa"
                }
              ]
            },
            {
              "pattern": "こんなに / そんなに / あんなに / どんなに",
              "arti": "sebegini / sebegitu / seberapa",
              "explain": "Kata tunjuk yang menerangkan <b>kata sifat atau kata kerja</b>: menyatakan TINGKAT atau derajat. <b>Jebakannya:</b> jangan tertukar dengan こんな + N! こんなに dipasangkan dengan kata sifat/kerja (こんなに難しい = sesulit ini), sedangkan こんな dipasangkan dengan kata benda (こんな本 = buku seperti ini).",
              "examples": [
                {
                  "jp": "こんなに勉強しているのに、成績が悪いのはどうしてだろう。",
                  "id": "Padahal sudah belajar sebanyak ini, kenapa nilainya masih jelek ya?",
                  "rd": "こんなにべんきょうしているのに、せいせきがわるいのはどうしてだろう。"
                },
                {
                  "jp": "A「テスト、全然できませんでした。」B「そんなにむずかしかったんですか。」",
                  "id": "A: \"Ujiannya sama sekali tidak bisa kukerjakan.\" B: \"Sesulit itu ya?\"",
                  "rd": "エー「テスト、ぜんぜんできませんでした。」ビー「そんなにむずかしかったんですか。」"
                },
                {
                  "jp": "あんなに速く走れるんですか。",
                  "id": "Bisa lari secepat itu ya?",
                  "rd": "あんなにはやくはしれるんですか。"
                }
              ],
              "tabel": [
                {
                  "k": "こんなに大きい",
                  "v": "sebesar ini"
                },
                {
                  "k": "そんなに高くない",
                  "v": "tidak semahal itu"
                },
                {
                  "k": "あんなに遠い",
                  "v": "sejauh itu"
                },
                {
                  "k": "どんなに忙しい",
                  "v": "sesibuk apa pun"
                }
              ]
            },
            {
              "pattern": "こう / そう / ああ / どう + kata kerja",
              "arti": "begini / begitu / bagaimana (cara)",
              "explain": "Kata tunjuk yang menerangkan <b>kata kerja</b>: menyatakan CARA melakukan sesuatu. <b>こう</b> = dengan cara begini, <b>そう</b> = dengan cara begitu, <b>ああ</b> = dengan cara begitu (yang jauh), <b>どう</b> = bagaimana (bertanya). Pola どうやって (\"bagaimana caranya\") sangat sering dipakai.",
              "examples": [
                {
                  "jp": "私もそう思います。",
                  "id": "Saya juga berpikir begitu.",
                  "rd": "わたしもそうおもいます。"
                },
                {
                  "jp": "A「これは、漢字でどう書きますか。」B「こう書きます。」",
                  "id": "A: \"Ini ditulis bagaimana dalam kanji?\" B: \"Ditulisnya seperti ini.\"",
                  "rd": "エー「これは、かんじでどうかきますか。」ビー「こうかきます。」"
                },
                {
                  "jp": "そうやってください。",
                  "id": "Tolong lakukan dengan cara begitu.",
                  "rd": "そうやってください。"
                }
              ],
              "tabel": [
                {
                  "k": "こう書く",
                  "v": "menulis begini"
                },
                {
                  "k": "そうする",
                  "v": "berbuat begitu"
                },
                {
                  "k": "ああ言う",
                  "v": "berkata begitu"
                },
                {
                  "k": "どう思う",
                  "v": "berpikir bagaimana"
                }
              ]
            },
            {
              "pattern": "〜という kata benda / 〜っていう kata benda",
              "arti": "N yang bernama ~ / N yang disebut ~",
              "explain": "Pola ini dipakai untuk menyebut <b>nama atau sebutan</b> dari sebuah kata benda: kalimat bentuk biasa + という + kata benda. Misalnya untuk nama tempat atau orang (目黒というところ), atau mengutip isi omongan (〜という話 = kabar bahwa…). Nah, kalau kamu dengar orang bilang <b>〜っていう</b>, itu versi <b>santainya</b> という — artinya sama persis, cuma lebih gaul.",
              "examples": [
                {
                  "jp": "兄は、東京の目黒というところに住んでいます。",
                  "id": "Kakak laki-laki saya tinggal di tempat bernama Meguro di Tokyo.",
                  "rd": "あには、とうきょうのめぐろというところにすんでいます。"
                },
                {
                  "jp": "電気代があがるという話は、本当ですか。",
                  "id": "Benarkah kabar bahwa tarif listrik akan naik?",
                  "rd": "でんきだいがあがるというはなしは、ほんとうですか。"
                },
                {
                  "jp": "駅前の「あすか」っていうレストランを知っていますか。",
                  "id": "Kamu tahu restoran bernama \"Asuka\" di depan stasiun?",
                  "rd": "えきまえの「あすか」っていうレストランをしっていますか。"
                }
              ],
              "tabel": [
                {
                  "k": "〜という",
                  "v": "bentuk baku (formal)"
                },
                {
                  "k": "〜っていう",
                  "v": "bentuk santai"
                },
                {
                  "k": "〜という話",
                  "v": "kabar bahwa ~"
                },
                {
                  "k": "〜というところ",
                  "v": "tempat bernama ~"
                }
              ]
            },
            {
              "pattern": "どういう kata benda",
              "arti": "N yang seperti apa / artinya apa",
              "explain": "Kata tanya untuk menanyakan <b>jenis, isi, atau arti</b> sebuah kata benda. Yang paling sering keluar: <b>どういう意味ですか</b> (apa artinya?). <b>Jebakan mutlak:</b> 〜なにの意味ですか itu SALAH — yang benar selalu pakai どういう. Pola ini langganan keluar di soal JLPT, jadi wajib hafal!",
              "examples": [
                {
                  "jp": "それはどういう意味ですか。",
                  "id": "Itu artinya apa?",
                  "rd": "それはどういういみですか。"
                },
                {
                  "jp": "日本で×はダメという意味です。",
                  "id": "Di Jepang, tanda silang (×) berarti \"tidak boleh\".",
                  "rd": "にほんで×はダメといういみです。"
                },
                {
                  "jp": "どういう人が好きですか。",
                  "id": "Orang yang seperti apa yang kamu suka?",
                  "rd": "どういうひとがすきですか。"
                }
              ],
              "tabel": [
                {
                  "k": "どういう意味ですか",
                  "v": "apa artinya?"
                },
                {
                  "k": "どういう人",
                  "v": "orang yang seperti apa"
                },
                {
                  "k": "どういうこと",
                  "v": "maksudnya apa / hal seperti apa"
                }
              ]
            }
          ]
        },
        {
          "type": "kanji",
          "title": "Kanji Bab 9",
          "items": [
            {
              "ch": "種",
              "kun": "たね",
              "on": "しゅ",
              "id": "jenis / benih",
              "note": "種類 (shurui) = jenis"
            },
            {
              "ch": "容",
              "kun": "—",
              "on": "よう",
              "id": "isi / wadah",
              "note": "内容 (naiyou) = isi"
            },
            {
              "ch": "味",
              "kun": "あじ・あじわう",
              "on": "み",
              "id": "rasa / arti",
              "note": "意味 (imi) = arti"
            },
            {
              "ch": "名",
              "kun": "な",
              "on": "めい",
              "id": "nama",
              "note": "名前 (namae) = nama"
            },
            {
              "ch": "様",
              "kun": "さま",
              "on": "よう",
              "id": "rupa / keadaan",
              "note": "様子 (yousu) = keadaan"
            },
            {
              "ch": "物",
              "kun": "もの",
              "on": "ぶつ・もつ",
              "id": "benda",
              "note": "物語 (monogatari) = cerita"
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Restoran Baru",
          "lines": [
            {
              "sp": "A",
              "jp": "駅前に「さくら」っていうレストラン、知ってる？",
              "id": "Kamu tahu restoran bernama \"Sakura\" di depan stasiun?"
            },
            {
              "sp": "B",
              "jp": "うん、知ってるよ。どんな店なの？",
              "id": "Iya, tahu. Toko yang seperti apa?"
            },
            {
              "sp": "A",
              "jp": "こんなにおいしい店は初めてだよ。",
              "id": "Baru pertama kali ada toko seenak ini."
            },
            {
              "sp": "B",
              "jp": "そんなにおいしいんだ。どうやって行くの？",
              "id": "Seenak itu ya. Bagaimana cara ke sana?"
            },
            {
              "sp": "A",
              "jp": "こうやって地図を見れば分かるよ。電車で5分で行けるよ。",
              "id": "Lihat peta begini pasti paham. Naik kereta 5 menit sampai."
            },
            {
              "sp": "B",
              "jp": "それはどういう意味？この地図、よく分からないんだけど。",
              "id": "Itu artinya apa? Peta ini aku kurang paham."
            },
            {
              "sp": "A",
              "jp": "じゃあ、今度いっしょに行こうか。",
              "id": "Kalau begitu, lain kali pergi bareng yuk?"
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "Lengkapi: 電車___行きます。",
          "o": [
            "で",
            "に",
            "から",
            "を"
          ],
          "a": 0,
          "explain": "で = cara/alat: pergi DENGAN kereta."
        },
        {
          "q": "Apa arti \"学校まで2時間もかかります\"?",
          "o": [
            "Butuh waktu tepat 2 jam",
            "Butuh waktu sampai 2 jam (lama!)",
            "Butuh waktu kurang dari 2 jam",
            "Tidak butuh 2 jam"
          ],
          "a": 1,
          "explain": "も + jumlah dalam kalimat positif menekankan banyaknya: sampai 2 jam!"
        },
        {
          "q": "Lengkapi: 昼はラーメン___そば___食べます。",
          "o": [
            "と・と",
            "とか・とか",
            "や・や",
            "も・も"
          ],
          "a": 1,
          "explain": "とか memberi contoh kasual: ramen, soba, dan sejenisnya."
        },
        {
          "q": "Di mana penjelas kata benda diletakkan dalam bahasa Jepang?",
          "o": [
            "Sesudah kata benda",
            "Sebelum kata benda",
            "Bebas di mana saja",
            "Di akhir kalimat"
          ],
          "a": 1,
          "explain": "Aturan besi: penjelas SELALU sebelum kata bendanya — kebalikan dari bahasa Indonesia."
        },
        {
          "q": "Lengkapi: ___音楽が好きですか。(musik seperti apa)",
          "o": [
            "こんな",
            "そんな",
            "あんな",
            "どんな"
          ],
          "a": 3,
          "explain": "どんな + N = kata tanya untuk jenis: musik seperti apa?"
        },
        {
          "q": "Lengkapi: ___に勉強しているのに、成績が悪い。(sebanyak ini)",
          "o": [
            "こんな",
            "そんな",
            "あんな",
            "どんな"
          ],
          "a": 0,
          "explain": "こんなに menerangkan kata kerja (belajar): sebanyak ini. Ingat bedanya dengan こんな + kata benda!"
        },
        {
          "q": "Lengkapi: これは漢字で___書きますか。(bagaimana)",
          "o": [
            "こう",
            "そう",
            "ああ",
            "どう"
          ],
          "a": 3,
          "explain": "どう + kata kerja menanyakan cara: ditulis bagaimana?"
        },
        {
          "q": "Lengkapi: 目黒___ところに住んでいます。(tempat bernama Meguro)",
          "o": [
            "という",
            "どういう",
            "こんな",
            "とか"
          ],
          "a": 0,
          "explain": "〜という + N = N yang bernama ~."
        },
        {
          "q": "Lengkapi: それは___意味ですか。(apa artinya)",
          "o": [
            "なにの",
            "どういう",
            "どんな",
            "そういう"
          ],
          "a": 1,
          "explain": "Pola baku: どういう意味ですか. Bentuk なにの意味ですか adalah SALAH."
        },
        {
          "q": "Apa arti \"そんなにむずかしかったんですか\"?",
          "o": [
            "Sesulit ini ya?",
            "Sesulit itu ya? (yang kamu ceritakan)",
            "Bagaimana sulitnya?",
            "Kenapa sulit?"
          ],
          "a": 1,
          "explain": "そんな merujuk hal yang baru dibicarakan lawan bicara: \"sesulit ITU ya?\""
        }
      ]
    },
    {
      "id": "n4-11",
      "bab": 10,
      "level": "n4",
      "title": "Waktu, Frekuensi & Kejadian",
      "desc": "Batas waktu, tenggat, kebiasaan, dan kejadian yang berulang",
      "icon": "⏰",
      "sections": [
        {
          "type": "penjelasan",
          "title": "まで vs までに: Satu Huruf に, Beda Nasib",
          "body": "Pasangan paling licik di bab ini: <b>まで</b> vs <b>までに</b>. Bedanya cuma satu partikel に, tapi artinya beda total — dan JLPT SUKA mengujinya.\n\n<b>まで = \"sampai\"</b> → menyatakan <b>rentang BERLANGSUNGNYA</b> sesuatu. 夜おそくまで働く (bekerja SAMPAI larut malam) = aksinya terus berlangsung sampai batas itu.\n\n<b>までに = \"paling lambat / sebelum\"</b> → menyatakan <b>TENGGAT</b>. 15日までに出す (kumpulkan PALING LAMBAT tanggal 15) = yang penting SELESAI sebelum batas itu, tidak peduli prosesnya.\n\n<b>Cara cepat membedakan:</b> lihat kata kerjanya! Kalau kata kerjanya <b>berlangsung</b> (bekerja, libur, belajar) → まで. Kalau kata kerjanya <b>selesai sekali jadi</b> (mengumpulkan, menyelesaikan, tiba) → までに. <b>Jebakan:</b> 15日までに出してください tanpa に artinya \"kumpulkan terus-menerus sampai tanggal 15\" — aneh, kan? Makanya tenggat SELALU pakai までに."
        },
        {
          "type": "penjelasan",
          "title": "とき: Sebelum atau Sesudah? Lihat Bentuk Katanya!",
          "body": "Pola <b>Vるとき</b> vs <b>Vたとき</b> membingungkan banyak orang, padahal aturannya sederhana: <b>lihat bentuk kata kerja SEBELUM とき</b>.\n\n<b>Vる + とき</b> = kejadian terjadi <b>SEBELUM/SEWAKTU</b> V dilakukan. 寝るとき、パジャマを着る = memakai piyama KETIKA HENDAK tidur (belum tidur!).\n\n<b>Vた + とき</b> = kejadian terjadi <b>SETELAH</b> V selesai. 東京に行ったとき、友だちに会う = bertemu teman SETELAH sampai di Tokyo.\n\n<b>Logikanya:</b> bentuk kamus (Vる) = belum terjadi, bentuk lampau (Vた) = sudah terjadi. Semudah itu! <b>Jebakan:</b> jangan hafal terjemahannya, hafal LOGIKANYA — bentuk lampau = sesudah, bentuk kamus = sebelum. Berlaku untuk semua kata kerja tanpa kecuali."
        },
        {
          "type": "kotoba",
          "title": "Kosakata Bab 10",
          "items": [
            {
              "jp": "しめきり",
              "kj": "締め切り",
              "r": "shimekiri",
              "id": "deadline / tenggat",
              "note": "締め切りに間に合う = keburu deadline"
            },
            {
              "jp": "きげん",
              "kj": "期限",
              "r": "kigen",
              "id": "batas waktu",
              "note": "期限を守る = menepati batas waktu"
            },
            {
              "jp": "くりかえす",
              "kj": "繰り返す",
              "r": "kurikaesu",
              "id": "mengulang",
              "note": "繰り返し練習する = latihan berulang-ulang"
            },
            {
              "jp": "きゅうけい",
              "kj": "休憩",
              "r": "kyuukei",
              "id": "istirahat",
              "note": "休憩時間 = jam istirahat"
            },
            {
              "jp": "あいだ",
              "kj": "間",
              "r": "aida",
              "id": "selama / antara",
              "note": "〜の間に = selama ~"
            },
            {
              "jp": "さいちゅう",
              "kj": "最中",
              "r": "saichuu",
              "id": "sedang berlangsung",
              "note": "食事の最中 = di tengah makan"
            },
            {
              "jp": "たびたび",
              "r": "tabitabi",
              "id": "sering",
              "note": "たび = kali (counter kejadian)"
            },
            {
              "jp": "ひんぱん",
              "kj": "頻繁",
              "r": "hinpan",
              "id": "sering (formal)",
              "note": "頻繁に起こる = sering terjadi"
            },
            {
              "jp": "いっしゅん",
              "kj": "一瞬",
              "r": "isshun",
              "id": "sesaat",
              "note": "一瞬で = dalam sekejap"
            },
            {
              "jp": "きかん",
              "kj": "期間",
              "r": "kikan",
              "id": "periode",
              "note": "夏休みの期間 = periode liburan musim panas"
            },
            {
              "jp": "れんぞく",
              "kj": "連続",
              "r": "renzoku",
              "id": "beruntun",
              "note": "3日連続で = 3 hari berturut-turut"
            },
            {
              "jp": "こうたい",
              "kj": "交代",
              "r": "koutai",
              "id": "bergantian",
              "note": "交代でやる = mengerjakan bergantian"
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Pola Waktu & Kejadian",
          "items": [
            {
              "pattern": "〜まで",
              "arti": "sampai (batas waktu berlangsung)",
              "explain": "<b>まで</b> menunjukkan batas akhir dari <b>rentang waktu berlangsungnya</b> suatu kegiatan — \"sampai\" kapan sesuatu terus berjalan. Cocok dipasang dengan kata kerja yang <b>berlangsung</b> seperti bekerja, libur, atau belajar. Ingat ya: ini bukan untuk tenggat!",
              "examples": [
                {
                  "jp": "来週の水曜日まで会社を休みます。",
                  "id": "Saya libur dari kantor sampai hari Rabu minggu depan.",
                  "rd": "らいしゅうのすいようびまでかいしゃをやすみます。"
                },
                {
                  "jp": "母は夜おそくまで働いています。",
                  "id": "Ibu bekerja sampai larut malam.",
                  "rd": "はははよるおそくまではたらいています。"
                },
                {
                  "jp": "5時まで勉強しました。",
                  "id": "Saya belajar sampai jam 5.",
                  "rd": "5じまでべんきょうしました。"
                }
              ],
              "tabel": [
                {
                  "k": "来週の水曜日まで",
                  "v": "sampai hari Rabu minggu depan"
                },
                {
                  "k": "夜おそくまで",
                  "v": "sampai larut malam"
                },
                {
                  "k": "いつまで",
                  "v": "sampai kapan"
                }
              ]
            },
            {
              "pattern": "〜までに",
              "arti": "paling lambat / sebelum (tenggat)",
              "explain": "<b>までに</b> menyatakan <b>tenggat waktu</b> — sesuatu harus SELESAI paling lambat pada waktu itu. Dipasang dengan kata kerja yang <b>selesai sekali jadi</b> seperti mengumpulkan atau menyelesaikan. Gampangnya: まで itu \"selama prosesnya\", までに itu \"batas selesainya\".",
              "examples": [
                {
                  "jp": "レポートは15日までに出してください。",
                  "id": "Tolong kumpulkan laporannya paling lambat tanggal 15.",
                  "rd": "レポートは15にちまでにだしてください。"
                },
                {
                  "jp": "私は30歳になるまでに結婚したいです。",
                  "id": "Saya ingin menikah sebelum berusia 30 tahun.",
                  "rd": "わたしは30さいになるまでにけっこんしたいです。"
                },
                {
                  "jp": "明日の朝までに終わらせます。",
                  "id": "Akan saya selesaikan paling lambat besok pagi.",
                  "rd": "あしたのあさまでにおわらせます。"
                }
              ],
              "tabel": [
                {
                  "k": "15日までに",
                  "v": "paling lambat tanggal 15"
                },
                {
                  "k": "明日の朝までに",
                  "v": "paling lambat besok pagi"
                },
                {
                  "k": "30歳になるまでに",
                  "v": "sebelum berusia 30 tahun"
                }
              ]
            },
            {
              "pattern": "〜たり、〜たりする",
              "arti": "melakukan hal-hal seperti …",
              "explain": "Dipakai untuk menyebut <b>dua atau lebih contoh</b> dari sekumpulan tindakan, atau kejadian yang <b>bergantian berulang-ulang</b>. Bentuknya: kata kerja bentuk-ta + り. <b>Tips:</b> たり nggak pernah sendirian — selalu muncul berpasangan (minimal dua) dan diakhiri する/します.",
              "examples": [
                {
                  "jp": "夏休みは旅行したりテニスをしたりしていました。",
                  "id": "Saat liburan musim panas, saya melakukan hal-hal seperti traveling dan bermain tenis.",
                  "rd": "なつやすみはりょこうしたりテニスをしたりしていました。"
                },
                {
                  "jp": "雨が降ったりやんだりしています。",
                  "id": "Hujan turun lalu berhenti, begitu berulang-ulang.",
                  "rd": "あめがふったりやんだりしています。"
                },
                {
                  "jp": "休みは映画を見たり本を読んだりします。",
                  "id": "Saat libur saya melakukan hal-hal seperti menonton film dan membaca buku.",
                  "rd": "やすみはえいがをみたりほんをよんだりします。"
                }
              ],
              "tabel": [
                {
                  "k": "旅行したり、テニスをしたりする",
                  "v": "melakukan hal seperti traveling dan bermain tenis"
                },
                {
                  "k": "降ったり、やんだりする",
                  "v": "turun lalu berhenti, bergantian"
                },
                {
                  "k": "見たり、読んだりする",
                  "v": "melakukan hal seperti menonton dan membaca"
                }
              ]
            },
            {
              "pattern": "〜し、〜し、〜",
              "arti": "selain itu juga … (beberapa alasan)",
              "explain": "Pola untuk menyampaikan <b>beberapa alasan sekaligus</b>, lalu ditutup dengan kesimpulan. Bentuknya: kata sifat/kata kerja + し. Nuansanya seperti \"selain A, B juga…\" — alasan yang menumpuk jadi satu.",
              "examples": [
                {
                  "jp": "このレストランはおいしいし、安いです。",
                  "id": "Restoran ini enak dan murah.",
                  "rd": "このレストランはおいしいし、やすいです。"
                },
                {
                  "jp": "のどもかわいたし、おなかもすいたし、少し休みたいです。",
                  "id": "Tenggorokan saya kering dan perut juga lapar, jadi saya ingin istirahat sebentar.",
                  "rd": "のどもかわいたし、おなかもすいたし、すこしやすみたいです。"
                },
                {
                  "jp": "安いし、近いし、便利です。",
                  "id": "Murah, dekat, dan praktis.",
                  "rd": "やすいし、ちかいし、べんりです。"
                }
              ],
              "tabel": [
                {
                  "k": "おいしいし、安いし",
                  "v": "enak dan juga murah"
                },
                {
                  "k": "近いし、便利だし",
                  "v": "dekat dan juga praktis"
                },
                {
                  "k": "かわいたし、すいたし",
                  "v": "(tenggorokan) kering dan juga lapar"
                }
              ]
            },
            {
              "pattern": "kata benda + ばかり",
              "arti": "hanya / melulu N",
              "explain": "<b>ばかり</b> berarti jumlah N <b>sangat banyak</b> — hampir semuanya melulu N. Bedanya dengan だけ yang netral (\"hanya N\"): ばかり menekankan kesan <b>\"melulu / terus-menerus\"</b> dan sering dipakai sambil mengeluh. ゲームばかりしている = main game MELULU (kesel!).",
              "examples": [
                {
                  "jp": "弟はゲームばかりしています。",
                  "id": "Adik laki-laki saya main game melulu.",
                  "rd": "おとうとはゲームばかりしています。"
                },
                {
                  "jp": "父はこのごろお酒ばかり飲んでいます。",
                  "id": "Akhir-akhir ini ayah minum minuman keras melulu.",
                  "rd": "ちちはこのごろおさけばかりのんでいます。"
                },
                {
                  "jp": "甘いものばかり食べないでください。",
                  "id": "Jangan makan yang manis-manis melulu.",
                  "rd": "あまいものばかりたべないでください。"
                }
              ],
              "tabel": [
                {
                  "k": "ゲームばかり",
                  "v": "main game melulu"
                },
                {
                  "k": "お酒ばかり",
                  "v": "minum alkohol melulu"
                },
                {
                  "k": "甘いものばかり",
                  "v": "yang manis-manis melulu"
                }
              ]
            },
            {
              "pattern": "kata benda の間（に）/ kata kerja -te iru + 間（に）",
              "arti": "selama / di tengah-tengah",
              "explain": "Menyatakan sesuatu terjadi <b>di tengah berlangsungnya</b> suatu rentang waktu atau kegiatan. Nの間 = selama N, Vている間 = ketika sedang melakukan V. <b>Jebakan:</b> に-nya boleh dipasang boleh tidak — 間に saja sudah benar.",
              "examples": [
                {
                  "jp": "夏休みの間にヨーロッパへ旅行をする予定です。",
                  "id": "Saya berencana berlibur ke Eropa selama liburan musim panas.",
                  "rd": "なつやすみのあいだにヨーロッパへりょこうをするよていです。"
                },
                {
                  "jp": "映画を見ている間に、寝てしまいました。",
                  "id": "Saya tertidur ketika sedang menonton film.",
                  "rd": "えいがをみているあいだに、ねてしまいました。"
                },
                {
                  "jp": "母が料理をしている間に宿題をします。",
                  "id": "Saya mengerjakan PR selagi ibu memasak.",
                  "rd": "ははがりょうりおしているあいだにしゅくだいをします。"
                }
              ],
              "tabel": [
                {
                  "k": "夏休みの間",
                  "v": "selama liburan musim panas"
                },
                {
                  "k": "見ている間に",
                  "v": "ketika sedang menonton"
                },
                {
                  "k": "料理をしている間に",
                  "v": "selagi (ibu) memasak"
                }
              ]
            },
            {
              "pattern": "kata kerja 1 bentuk kamus+ とき（に）、kata kerja2",
              "arti": "ketika (sebelum) V1, lakukan V2",
              "explain": "V2 dilakukan <b>SEBELUM</b> V1 terjadi. Kuncinya: kata kerja bentuk <b>kamus</b> berarti \"belum terjadi\". 寝るとき = ketika HENDAK tidur (belum tidur beneran), jadi V2-nya adalah persiapan sebelum tidur.",
              "examples": [
                {
                  "jp": "寝るとき、パジャマを着ます。",
                  "id": "Ketika hendak tidur, saya memakai piyama.",
                  "rd": "ねるとき、パジャマをきます。"
                },
                {
                  "jp": "私は、本を読むとき、めがねをかけます。",
                  "id": "Ketika membaca buku, saya memakai kacamata.",
                  "rd": "わたしは、ほんをよむとき、めがねをかけます。"
                },
                {
                  "jp": "出かけるとき、電気を消します。",
                  "id": "Ketika hendak pergi, saya mematikan lampu.",
                  "rd": "でかけるとき、でんきをけします。"
                }
              ],
              "tabel": [
                {
                  "k": "寝るとき",
                  "v": "ketika hendak tidur (belum tidur)"
                },
                {
                  "k": "読むとき",
                  "v": "ketika membaca"
                },
                {
                  "k": "出かけるとき",
                  "v": "ketika hendak pergi"
                }
              ]
            },
            {
              "pattern": "kata kerja 1 bentuk lampau+ とき（に）、kata kerja2",
              "arti": "ketika (setelah) V1, lakukan V2",
              "explain": "V2 dilakukan <b>SETELAH</b> V1 selesai. Kuncinya: kata kerja bentuk <b>lampau (た)</b> berarti \"sudah terjadi\". 東京に行ったとき = SETELAH sampai di Tokyo, jadi V2-nya adalah kejadian sesudahnya.",
              "examples": [
                {
                  "jp": "東京に行ったときに、友だちに会う予定です。",
                  "id": "Ketika sudah sampai di Tokyo, saya berencana bertemu teman.",
                  "rd": "とうきょうにいったときに、ともだちにあうよていです。"
                },
                {
                  "jp": "ご飯を食べたとき、歯を磨きます。",
                  "id": "Setelah makan, saya menggosok gigi.",
                  "rd": "ごはんをたべたとき、はをみがきます。"
                },
                {
                  "jp": "家に帰ったとき、雨が降り出しました。",
                  "id": "Ketika sampai di rumah, hujan mulai turun.",
                  "rd": "いえにかえったとき、あめがふりだしました。"
                }
              ],
              "tabel": [
                {
                  "k": "行ったとき",
                  "v": "setelah sampai (di Tokyo)"
                },
                {
                  "k": "食べたとき",
                  "v": "setelah makan"
                },
                {
                  "k": "帰ったとき",
                  "v": "ketika (sudah) sampai di rumah"
                }
              ]
            },
            {
              "pattern": "kata benda + 中",
              "arti": "sedang (berlangsung)",
              "explain": "<b>中</b> yang menempel di kata benda berarti tindakan <b>sedang berlangsung</b>: 会議中 (sedang rapat), 電話中 (sedang menelepon). Kalau menempel di rentang waktu artinya \"sepanjang\": 午前中 (sepanjang pagi), 今日中 (sepanjang hari ini). <b>Cara baca:</b> ちゅう atau じゅう, tergantung katanya.",
              "examples": [
                {
                  "jp": "社長は今、会議中です。",
                  "id": "Direktur sedang rapat sekarang.",
                  "rd": "しゃちょうはいま、かいぎちゅうです。"
                },
                {
                  "jp": "田中さんは今、電話中です。",
                  "id": "Tanaka sedang menelepon sekarang.",
                  "rd": "たなかさんはいま、でんわちゅうです。"
                },
                {
                  "jp": "午前中に来てください。",
                  "id": "Tolong datang sepanjang pagi ini.",
                  "rd": "ごぜんちゅうにきてください。"
                }
              ],
              "tabel": [
                {
                  "k": "会議中",
                  "v": "sedang rapat"
                },
                {
                  "k": "電話中",
                  "v": "sedang menelepon"
                },
                {
                  "k": "午前中",
                  "v": "sepanjang pagi ini"
                },
                {
                  "k": "今日中",
                  "v": "sepanjang hari ini"
                }
              ]
            }
          ]
        },
        {
          "type": "kanji",
          "title": "Kanji Bab 10",
          "items": [
            {
              "ch": "締",
              "kun": "しめる",
              "on": "てい",
              "id": "mengikat / menutup",
              "note": "締め切り (shimekiri) = deadline"
            },
            {
              "ch": "切",
              "kun": "きる・きれる",
              "on": "せつ",
              "id": "memotong",
              "note": "大切 (taisetsu) = penting"
            },
            {
              "ch": "期",
              "kun": "—",
              "on": "き",
              "id": "periode",
              "note": "期限 (kigen) = batas waktu"
            },
            {
              "ch": "限",
              "kun": "かぎる",
              "on": "げん",
              "id": "batas",
              "note": "期限の限 = batas"
            },
            {
              "ch": "繰",
              "kun": "くりかえす",
              "on": "そう",
              "id": "mengulang",
              "note": "繰り返す = mengulang"
            },
            {
              "ch": "間",
              "kun": "あいだ",
              "on": "かん・けん",
              "id": "antara / selama",
              "note": "時間 (jikan) = waktu"
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Rencana Liburan",
          "lines": [
            {
              "sp": "A",
              "jp": "夏休みの間に何をするの？",
              "id": "Selama liburan musim panas mau ngapain?"
            },
            {
              "sp": "B",
              "jp": "旅行したり、アルバイトしたりするよ。",
              "id": "Melakukan hal-hal seperti traveling dan kerja paruh waktu."
            },
            {
              "sp": "A",
              "jp": "レポートの締め切りはいつ？",
              "id": "Kapan deadline laporannya?"
            },
            {
              "sp": "B",
              "jp": "15日までに出さなきゃいけないんだ。",
              "id": "Harus dikumpulkan paling lambat tanggal 15."
            },
            {
              "sp": "A",
              "jp": "大変だね。午前中に図書館で勉強しようか。",
              "id": "Berat ya. Belajar di perpustakaan sepanjang pagi ini, yuk?"
            },
            {
              "sp": "B",
              "jp": "いいね。ゲームばかりしてないで、頑張ろう。",
              "id": "Boleh. Jangan main game melulu, ayo semangat."
            },
            {
              "sp": "A",
              "jp": "うん、夜おそくまで頑張るよ！",
              "id": "Iya, semangat sampai larut malam!"
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "Lengkapi: 水曜日___会社を休みます。(sampai Rabu)",
          "o": [
            "まで",
            "までに",
            "から",
            "の間に"
          ],
          "a": 0,
          "explain": "まで = rentang berlangsung: libur TERUS sampai hari Rabu."
        },
        {
          "q": "Lengkapi: レポートは15日___出してください。(paling lambat tgl 15)",
          "o": [
            "まで",
            "までに",
            "から",
            "の間に"
          ],
          "a": 1,
          "explain": "までに = tenggat: harus SELESAI paling lambat tanggal 15."
        },
        {
          "q": "Apa beda まで dan までに?",
          "o": [
            "Tidak ada beda",
            "まで = rentang berlangsung, までに = tenggat selesai",
            "まで = tenggat, までに = rentang",
            "まで untuk tempat, までに untuk waktu"
          ],
          "a": 1,
          "explain": "まで menekankan proses yang berlangsung sampai batas; までに menekankan harus selesai sebelum batas."
        },
        {
          "q": "Lengkapi: 旅行し___、テニスをし___しています。",
          "o": [
            "て・て",
            "たり・たり",
            "し・し",
            "ば・ば"
          ],
          "a": 1,
          "explain": "たり berpasangan untuk menyebut contoh kegiatan yang bergantian."
        },
        {
          "q": "Lengkapi: このレストランはおいしい___、安いです。",
          "o": [
            "たり",
            "し",
            "とか",
            "ながら"
          ],
          "a": 1,
          "explain": "〜し menyebut beberapa alasan yang menumpuk: enak DAN murah."
        },
        {
          "q": "Apa arti \"弟はゲームばかりしています\"?",
          "o": [
            "Adik hanya bermain game sesekali",
            "Adik main game melulu",
            "Adik tidak suka game",
            "Adik pandai bermain game"
          ],
          "a": 1,
          "explain": "ばかり = melulu/terus-menerus, sering bernuansa keluhan."
        },
        {
          "q": "Lengkapi: 映画を見ている___、寝てしまいました。",
          "o": [
            "ときに",
            "たときに",
            "間に",
            "まで"
          ],
          "a": 2,
          "explain": "〜ている間 = di tengah sedang menonton film."
        },
        {
          "q": "Lengkapi: 寝る___、パジャマを着ます。(ketika hendak tidur)",
          "o": [
            "たとき",
            "とき",
            "間に",
            "まで"
          ],
          "a": 1,
          "explain": "Vる + とき = SEBELUM V terjadi: memakai piyama ketika hendak tidur."
        },
        {
          "q": "Lengkapi: 東京に行った___、友だちに会います。(setelah sampai)",
          "o": [
            "とき",
            "たとき",
            "間に",
            "まで"
          ],
          "a": 1,
          "explain": "Vた + とき = SETELAH V selesai: bertemu teman setelah sampai Tokyo."
        },
        {
          "q": "Lengkapi: 社長は今、会議___です。",
          "o": [
            "最中",
            "間",
            "中",
            "とき"
          ],
          "a": 2,
          "explain": "N + 中 = sedang berlangsung: 会議中 = sedang rapat."
        }
      ]
    },
    {
      "id": "n4-12",
      "bab": 11,
      "level": "n4",
      "title": "Keadaan, Pengalaman & Perubahan",
      "desc": "Menyatakan keadaan, pengalaman masa lalu, keputusan, dan perubahan",
      "icon": "🔄",
      "sections": [
        {
          "type": "penjelasan",
          "title": "Bentuk-て: Satu Bentuk, Banyak Pekerjaan",
          "body": "Bentuk-て (te-form) yang kamu kenal sebagai \"penghubung kalimat\" ternyata punya <b>pekerjaan sampingan</b> yang sangat penting di N4: menyatakan <b>KEADAAN</b> dan <b>CARA</b>.\n\n<b>Keadaan:</b> いすにすわって話す (bicara DALAM KEADAAN duduk). Kata kerja pertamanya menjelaskan <b>kondisi</b> saat aksi utama dilakukan — bukan dua aksi berurutan!\n\n<b>Cara/alat:</b> えんぴつを使って書く (menulis DENGAN memakai pensil). Di sini bentuk-て menjelaskan <b>bagaimana</b> aksi dilakukan.\n\n<b>Bentuk negatifnya 〜ないで</b> = \"tanpa melakukan…\": 傘を持たないで出かけた (pergi TANPA membawa payung).\n\n<b>Jebakan:</b> bedakan dengan 〜て untuk sebab-akibat (karena…). Kalau kata kerja keduanya adalah <b>aksi yang disengaja</b> (bicara, menulis, pergi), maka 〜て = keadaan/cara. Kalau kata kerja keduanya adalah <b>keadaan tak disengaja</b> (tidak bisa makan, libur), maka 〜て = sebab. Lihat kata kerja KEDUA untuk memutuskan!"
        },
        {
          "type": "penjelasan",
          "title": "にする vs になる: Siapa yang Memutuskan?",
          "body": "Pasangan ini membingungkan karena keduanya bisa berarti \"menjadi\", tapi logikanya sederhana: <b>siapa yang memutuskan?</b>\n\n<b>〜にする / 〜ことにする = KAMU yang memutuskan.</b> Aランチにする (SAYA pilih menu A). ダイエットすることにする (SAYA memutuskan diet). Bentuk 〜ことにしている = dijadikan <b>kebiasaan</b> (sudah diputuskan dan dijalani terus).\n\n<b>〜になる / 〜ことになる = diputuskan oleh KEADAAN atau PIHAK LAIN.</b> 出張することになった (telah DIPUTUSKAN saya dinas — bukan kemauan saya). 中止になる (dibatalkan karena keadaan).\n\n<b>Cara cepat:</b> kalau kalimatnya tentang pilihan/kemauan sendiri → にする. Kalau tentang aturan, keputusan atasan, atau keadaan → になる. <b>Jebakan JLPT:</b> soal suka menaruh ことにする di situasi \"perusahaan memutuskan\" — itu SALAH, harusnya ことになる!\n\nPola perubahan <b>Aくする / Aになる</b> mengikuti logika sama: する = diubah dengan SENGAJA (音を小さくする = mengecilkan suara), なる = berubah secara ALAMI (暖かくなる = menjadi hangat)."
        },
        {
          "type": "kotoba",
          "title": "Kosakata Bab 11",
          "items": [
            {
              "jp": "じょうたい",
              "kj": "状態",
              "r": "joutai",
              "id": "keadaan",
              "note": "〜て menyatakan keadaan"
            },
            {
              "jp": "しゅだん",
              "kj": "手段",
              "r": "shudan",
              "id": "cara / alat",
              "note": "〜て menyatakan cara"
            },
            {
              "jp": "けいけん",
              "kj": "経験",
              "r": "keiken",
              "id": "pengalaman",
              "note": "〜たことがある = pernah"
            },
            {
              "jp": "へんか",
              "kj": "変化",
              "r": "henka",
              "id": "perubahan",
              "note": "変化する = berubah"
            },
            {
              "jp": "けってい",
              "kj": "決定",
              "r": "kettei",
              "id": "keputusan",
              "note": "〜ことにする/になる"
            },
            {
              "jp": "へんこう",
              "kj": "変更",
              "r": "henkou",
              "id": "perubahan (rencana)",
              "note": "予定を変更する = mengubah rencana"
            },
            {
              "jp": "どうじ",
              "kj": "同時",
              "r": "douji",
              "id": "bersamaan",
              "note": "〜ながら = sambil (dua aksi bersamaan)"
            },
            {
              "jp": "しゅうかん",
              "kj": "習慣",
              "r": "shuukan",
              "id": "kebiasaan",
              "note": "〜ことにしている = dijadikan kebiasaan"
            },
            {
              "jp": "しぜん",
              "kj": "自然",
              "r": "shizen",
              "id": "alami",
              "note": "自然に〜なる = menjadi dengan alami"
            },
            {
              "jp": "じんこう",
              "kj": "人工",
              "r": "jinkou",
              "id": "buatan",
              "note": "人工的 = bersifat buatan"
            },
            {
              "jp": "さまざま",
              "kj": "様々",
              "r": "samazama",
              "id": "bermacam-macam",
              "note": "様々な経験 = berbagai pengalaman"
            },
            {
              "jp": "そのまま",
              "r": "sonomama",
              "id": "apa adanya",
              "note": "そのままにしてください = biarkan apa adanya"
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Pola Keadaan & Perubahan",
          "items": [
            {
              "pattern": "〜て / 〜で（keadaan & cara）",
              "arti": "dalam keadaan … / dengan (cara)",
              "explain": "Bentuk-て bisa menyatakan <b>keadaan</b> saat melakukan sesuatu (すわって話す = bicara sambil duduk) atau <b>cara/alat</b> (使って書く = menulis dengan memakai). Versi negatifnya <b>〜ないで</b> = \"tanpa melakukan…\". <b>Tips:</b> kalau kata kerja keduanya adalah aksi yang disengaja → artinya keadaan/cara; kalau keadaannya tak disengaja → itu makna sebab (dibahas di bab lain).",
              "examples": [
                {
                  "jp": "いすにすわって話しましょう。",
                  "id": "Mari bicara sambil duduk di kursi.",
                  "rd": "いすにすわってはなしましょう。"
                },
                {
                  "jp": "えんぴつを使って書いてください。",
                  "id": "Tolong tulis dengan menggunakan pensil.",
                  "rd": "えんぴつをつかってかいてください。"
                },
                {
                  "jp": "傘を持たないで出かけました。",
                  "id": "Saya pergi tanpa membawa payung.",
                  "rd": "かさをもたないででかけました。"
                }
              ],
              "tabel": [
                {
                  "k": "すわって話す",
                  "v": "bicara sambil duduk"
                },
                {
                  "k": "えんぴつを使って書く",
                  "v": "menulis dengan pensil"
                },
                {
                  "k": "持たないで出かける",
                  "v": "pergi tanpa membawa (payung)"
                }
              ]
            },
            {
              "pattern": "〜まま",
              "arti": "dalam keadaan … (tanpa berubah)",
              "explain": "<b>まま</b> berarti sesuatu terjadi sementara suatu <b>keadaan dibiarkan tidak berubah</b>: tidur dengan jendela TETAP terbuka, keluar dengan piyama MASIH dipakai. Bentuknya: kata kerja bentuk-ta + まま, atau kata benda + のまま. Nuansanya: \"ya udah, dibiarkan begitu saja\".",
              "examples": [
                {
                  "jp": "まどを開けたまま寝ました。",
                  "id": "Saya tidur dengan jendela tetap terbuka.",
                  "rd": "まどをあけたままねました。"
                },
                {
                  "jp": "父はめがねをかけたまま寝ました。",
                  "id": "Ayah tidur dengan kacamata masih dipakai.",
                  "rd": "ちちはめがねをかけたままねました。"
                },
                {
                  "jp": "靴を履いたまま入らないでください。",
                  "id": "Tolong jangan masuk dengan sepatu masih dipakai.",
                  "rd": "くつをはいたままはいらないでください。"
                }
              ],
              "tabel": [
                {
                  "k": "開けたまま寝る",
                  "v": "tidur dengan (jendela) tetap terbuka"
                },
                {
                  "k": "かけたまま",
                  "v": "dengan (kacamata) masih dipakai"
                },
                {
                  "k": "履いたまま入る",
                  "v": "masuk dengan (sepatu) masih dipakai"
                }
              ]
            },
            {
              "pattern": "kata kerja (hilangkan ます)+ ながら",
              "arti": "sambil melakukan …",
              "explain": "Dipakai saat melakukan <b>dua tindakan secara bersamaan</b>. Bentuknya: kata kerja bentuk ます-stem + ながら (ます-nya dibuang). <b>Jebakan:</b> aksi UTAMA selalu diletakkan di BELAKANG — 食べながら見る artinya aksi utamanya MENONTON (sambil makan), bukan sebaliknya!",
              "examples": [
                {
                  "jp": "私はいつもご飯を食べながら、テレビを見ています。",
                  "id": "Saya selalu menonton TV sambil makan.",
                  "rd": "わたしはいつもごはんをたべながら、テレビをみています。"
                },
                {
                  "jp": "田中さんの息子さんは、働きながら大学に行っています。",
                  "id": "Putra Tuan Tanaka kuliah sambil bekerja.",
                  "rd": "たなかさんのむすこさんは、はたらきながらだいがくにいっています。"
                },
                {
                  "jp": "音楽を聞きながら走ります。",
                  "id": "Saya lari sambil mendengarkan musik.",
                  "rd": "おんがくをききながらはしります。"
                }
              ],
              "tabel": [
                {
                  "k": "食べながら見る",
                  "v": "menonton sambil makan"
                },
                {
                  "k": "働きながら大学に行く",
                  "v": "kuliah sambil bekerja"
                },
                {
                  "k": "聞きながら走る",
                  "v": "lari sambil mendengarkan musik"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk lampau+ ことがある",
              "arti": "pernah (pengalaman masa lalu)",
              "explain": "Menyatakan <b>pengalaman yang pernah dialami</b> di masa lalu. Bentuknya SELALU kata kerja bentuk <b>lampau (た)</b> + ことがある. <b>Jebakan mutlak:</b> Vる + ことがある artinya BEDA TOTAL (\"kadang-kadang\" — lihat pola berikutnya). Jangan sampai tertukar!",
              "examples": [
                {
                  "jp": "私はアフリカに行ったことがあります。",
                  "id": "Saya pernah pergi ke Afrika.",
                  "rd": "わたしはアフリカにいったことがあります。"
                },
                {
                  "jp": "私はマラソン大会に出たことがあります。",
                  "id": "Saya pernah ikut lomba maraton.",
                  "rd": "わたしはマラソンたいかいにでたことがあります。"
                },
                {
                  "jp": "すしを食べたことがありますか。",
                  "id": "Apakah kamu pernah makan sushi?",
                  "rd": "すしをたべたことがありますか。"
                }
              ],
              "tabel": [
                {
                  "k": "行ったことがある",
                  "v": "pernah pergi"
                },
                {
                  "k": "出たことがある",
                  "v": "pernah ikut (lomba)"
                },
                {
                  "k": "食べたことがある",
                  "v": "pernah makan"
                }
              ]
            },
            {
              "pattern": "kata kerja (kamus/negatif)+ ことがある",
              "arti": "kadang-kadang (terjadi sesekali)",
              "explain": "Menyatakan sesuatu <b>terjadi sesekali</b> alias kadang-kadang. Bentuknya kata kerja bentuk <b>kamus</b> (atau ない) + ことがある — beda dengan pola pengalaman yang memakai bentuk lampau! <b>Cara ingatnya:</b> た = sudah terjadi = pengalaman; る/ない = umum = kadang terjadi.",
              "examples": [
                {
                  "jp": "うちの犬は夜中にほえることがあって、困ります。",
                  "id": "Anjing saya kadang menggonggong tengah malam, jadi merepotkan.",
                  "rd": "うちのいぬはよなかにほえることがあって、こまります。"
                },
                {
                  "jp": "私は昼ご飯を食べないことがあります。",
                  "id": "Saya kadang tidak makan siang.",
                  "rd": "わたしはひるごはんをたべないことがあります。"
                },
                {
                  "jp": "たまに遅れることがあります。",
                  "id": "Kadang-kadang saya terlambat.",
                  "rd": "たまにおくれることがあります。"
                }
              ],
              "tabel": [
                {
                  "k": "ほえることがある",
                  "v": "kadang menggonggong"
                },
                {
                  "k": "食べないことがある",
                  "v": "kadang tidak makan (siang)"
                },
                {
                  "k": "遅れることがある",
                  "v": "kadang terlambat"
                }
              ]
            },
            {
              "pattern": "kata benda にする / kata kerja (negatif)ことにする",
              "arti": "memutuskan sendiri",
              "explain": "Sesuatu yang <b>diputuskan sendiri</b> oleh pembicara. Kalau bentuknya <b>〜ことにしている</b>, artinya keputusan itu dijadikan <b>kebiasaan</b> (dijalani terus-menerus). Kuncinya: ada kemauan atau niat dari si pembicara.",
              "examples": [
                {
                  "jp": "私はAランチにします。",
                  "id": "Saya pilih makan siang A.",
                  "rd": "わたしはAランチにします。"
                },
                {
                  "jp": "これから、ダイエットすることにします。",
                  "id": "Mulai sekarang, saya memutuskan untuk diet.",
                  "rd": "これから、ダイエットすることにします。"
                },
                {
                  "jp": "毎朝6時に起きることにしています。",
                  "id": "Saya membiasakan diri bangun jam 6 setiap pagi.",
                  "rd": "まいあさ6じにおきることにしています。"
                }
              ],
              "tabel": [
                {
                  "k": "Aランチにする",
                  "v": "saya pilih makan siang A"
                },
                {
                  "k": "ダイエットすることにする",
                  "v": "memutuskan untuk diet"
                },
                {
                  "k": "起きることにしている",
                  "v": "membiasakan bangun (jam 6)"
                }
              ]
            },
            {
              "pattern": "kata benda になる / kata kerja (negatif)ことになる",
              "arti": "diputuskan (oleh keadaan / pihak lain)",
              "explain": "Sesuatu <b>telah diputuskan</b> — BUKAN oleh kemauan pembicara, melainkan oleh <b>keadaan atau pihak lain</b> (aturan, atasan, situasi). <b>Jebakan JLPT:</b> kalau konteksnya \"perusahaan yang memutuskan\", jawabannya SELALU ことになる, bukan ことにする!",
              "examples": [
                {
                  "jp": "明日雨なら、ハイキングは中止になります。",
                  "id": "Jika besok hujan, hiking akan dibatalkan.",
                  "rd": "あしたあめなら、ハイキングはちゅうしになります。"
                },
                {
                  "jp": "来月、イギリスへ出張することになりました。",
                  "id": "Bulan depan telah diputuskan saya dinas ke Inggris.",
                  "rd": "らいげつ、イギリスへしゅっちょうすることになりました。"
                },
                {
                  "jp": "ルールが変わることになりました。",
                  "id": "Telah diputuskan aturannya berubah.",
                  "rd": "ルールがかわることになりました。"
                }
              ],
              "tabel": [
                {
                  "k": "中止になる",
                  "v": "(akan) dibatalkan"
                },
                {
                  "k": "出張することになった",
                  "v": "telah diputuskan dinas"
                },
                {
                  "k": "変わることになった",
                  "v": "telah diputuskan berubah"
                }
              ]
            },
            {
              "pattern": "i-A く / na-A に + する・なる",
              "arti": "membuat menjadi … / menjadi …",
              "explain": "<b>する</b> = keadaan diubah dengan <b>SENGAJA</b> oleh seseorang (音を小さくする = mengecilkan suara). <b>なる</b> = perubahan terjadi secara <b>ALAMI</b> dengan sendirinya (暖かくなる = menjadi hangat). Rumusnya gampang: kata sifat-i ganti い jadi く, kata sifat-na tinggal tambah に.",
              "examples": [
                {
                  "jp": "テレビの音を小さくしてください。",
                  "id": "Tolong kecilkan suara TV.",
                  "rd": "テレビのおとをちいさくしてください。"
                },
                {
                  "jp": "母がなくなって、さびしくなりました。",
                  "id": "Ibu meninggal, saya menjadi kesepian.",
                  "rd": "ははがなくなって、さびしくなりました。"
                },
                {
                  "jp": "部屋をきれいにします。",
                  "id": "Saya membersihkan (membuat bersih) kamar.",
                  "rd": "へやをきれいにします。"
                }
              ],
              "tabel": [
                {
                  "k": "小さくする",
                  "v": "mengecilkan (dengan sengaja)"
                },
                {
                  "k": "きれいにする",
                  "v": "membersihkan (membuat bersih)"
                },
                {
                  "k": "さびしくなる",
                  "v": "menjadi kesepian (alami)"
                },
                {
                  "k": "暖かくなる",
                  "v": "menjadi hangat (alami)"
                }
              ]
            }
          ]
        },
        {
          "type": "kanji",
          "title": "Kanji Bab 11",
          "items": [
            {
              "ch": "状",
              "kun": "—",
              "on": "じょう",
              "id": "keadaan",
              "note": "状態 (joutai) = keadaan"
            },
            {
              "ch": "態",
              "kun": "—",
              "on": "たい",
              "id": "wujud / sikap",
              "note": "態度 (taido) = sikap"
            },
            {
              "ch": "経",
              "kun": "へる",
              "on": "けい",
              "id": "melalui / pengalaman",
              "note": "経験 (keiken) = pengalaman"
            },
            {
              "ch": "験",
              "kun": "—",
              "on": "けん",
              "id": "ujian / coba",
              "note": "試験 (shiken) = ujian"
            },
            {
              "ch": "変",
              "kun": "かわる・かえる",
              "on": "へん",
              "id": "berubah",
              "note": "変化 (henka) = perubahan"
            },
            {
              "ch": "化",
              "kun": "ばける・ばかす",
              "on": "か・け",
              "id": "berubah / menjadi",
              "note": "文化 (bunka) = budaya"
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Pengalaman Afrika",
          "lines": [
            {
              "sp": "A",
              "jp": "アフリカに行ったことがありますか。",
              "id": "Apakah kamu pernah pergi ke Afrika?"
            },
            {
              "sp": "B",
              "jp": "いいえ、まだありません。行ってみたいですけど。",
              "id": "Belum pernah. Tapi saya ingin pergi."
            },
            {
              "sp": "A",
              "jp": "私は去年、仕事で行くことになったんです。",
              "id": "Tahun lalu telah diputuskan saya pergi ke sana untuk kerja."
            },
            {
              "sp": "B",
              "jp": "へえ、どうでしたか。",
              "id": "Wah, bagaimana?"
            },
            {
              "sp": "A",
              "jp": "とても暑くて、毎日汗をかきながら働きました。",
              "id": "Sangat panas, setiap hari saya bekerja sambil berkeringat."
            },
            {
              "sp": "B",
              "jp": "大変でしたね。もう一度行きたいですか。",
              "id": "Berat ya. Mau pergi lagi?"
            },
            {
              "sp": "A",
              "jp": "ええ、今度は観光で行きたいです。",
              "id": "Iya, lain kali saya ingin pergi untuk wisata."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "Lengkapi: いすにすわっ___話しましょう。",
          "o": [
            "て",
            "た",
            "ない",
            "よう"
          ],
          "a": 0,
          "explain": "〜て menyatakan keadaan: bicara DALAM KEADAAN duduk."
        },
        {
          "q": "Lengkapi: まどを開けた___寝ました。",
          "o": [
            "ながら",
            "まま",
            "ために",
            "ように"
          ],
          "a": 1,
          "explain": "〜まま = dalam keadaan tetap tidak berubah: tidur dengan jendela tetap terbuka."
        },
        {
          "q": "Apa arti pola 〜まま?",
          "o": [
            "Sambil melakukan dua hal",
            "Dalam keadaan … tanpa berubah",
            "Karena …",
            "Sebelum …"
          ],
          "a": 1,
          "explain": "まま berarti suatu keadaan dibiarkan tetap tidak berubah."
        },
        {
          "q": "Lengkapi: ご飯を食べ___、テレビを見ます。",
          "o": [
            "ながら",
            "まま",
            "たり",
            "し"
          ],
          "a": 0,
          "explain": "ながら = sambil: menonton TV sambil makan. Aksi utama (menonton) di belakang."
        },
        {
          "q": "Lengkapi: アフリカに行った___があります。",
          "o": [
            "ため",
            "こと",
            "まま",
            "よう"
          ],
          "a": 1,
          "explain": "Vた + ことがある = pengalaman: pernah pergi ke Afrika."
        },
        {
          "q": "Apa beda \"Vたことがある\" dan \"Vることがある\"?",
          "o": [
            "Tidak ada beda",
            "Vた = pengalaman masa lalu, Vる = kadang-kadang terjadi",
            "Vた = kadang-kadang, Vる = pengalaman",
            "Keduanya untuk masa depan"
          ],
          "a": 1,
          "explain": "た = sudah terjadi = pengalaman; る/ない = umum = sesekali terjadi."
        },
        {
          "q": "Lengkapi: 私はAランチ___します。(saya yang memilih)",
          "o": [
            "に",
            "が",
            "を",
            "で"
          ],
          "a": 0,
          "explain": "Nにする = memutuskan sendiri: SAYA pilih menu A."
        },
        {
          "q": "Lengkapi: 出張すること___なりました。(diputuskan perusahaan)",
          "o": [
            "にし",
            "に",
            "を",
            "が"
          ],
          "a": 1,
          "explain": "ことになる = diputuskan pihak lain/keadaan, bukan kemauan sendiri."
        },
        {
          "q": "Lengkapi: テレビの音を小さ___してください。",
          "o": [
            "い",
            "く",
            "な",
            "に"
          ],
          "a": 1,
          "explain": "Kata sifat-i + くする: い→く untuk \"membuat menjadi\" dengan sengaja."
        },
        {
          "q": "Lengkapi: 母がなくなって、さびしく___りました。",
          "o": [
            "な",
            "に",
            "く",
            "し"
          ],
          "a": 0,
          "explain": "なる untuk perubahan alami: さびしい→さびしくなる = menjadi kesepian."
        }
      ]
    },
    {
      "id": "n4-13",
      "bab": 12,
      "level": "n4",
      "title": "Kewajiban, Izin & Larangan",
      "desc": "Harus, boleh, tidak boleh: 〜なければならない・〜てもいい・〜てはいけない + saran 〜といい",
      "icon": "📜",
      "sections": [
        {
          "type": "penjelasan",
          "title": "Harus, Boleh, Tidak Boleh: Aturan Mainnya",
          "body": "Bab ini berisi <b>tiga keluarga pola</b> yang sering tertukar di ujian N4: <b>kewajiban</b> (harus 〜), <b>izin</b> (boleh 〜), dan <b>larangan</b> (tidak boleh 〜). Ditambah satu bonus: pola <b>saran lembut</b> 〜といい.\n\n<b>1) Kewajiban — tiga kembar yang artinya sama:</b> 〜なければならない (paling formal, untuk tulisan/aturan resmi), 〜なくてはいけない (formal percakapan), 〜ないといけない (santai sehari-hari). <b>Jebakan N4:</b> jangan pilih berdasarkan arti — ketiganya artinya sama (harus)! Pilih berdasarkan <b>tingkat formalitas</b> situasi. Versi super santainya: 〜なきゃ, 〜なくちゃ, 〜ないと — bagian (いけない) sering dibuang begitu saja.\n\n<b>2) Izin:</b> 〜てもいい = boleh 〜. Untuk meminta izin: 〜てもいいですか. Lawan katanya ada dua, dan ini sering diujikan: <b>〜なくてもいい</b> = <b>tidak perlu</b> 〜 (boleh tidak dilakukan) vs <b>〜てはいけない</b> = <b>tidak boleh / dilarang</b> 〜. Contoh: 返さなくてもいい (tidak perlu dikembalikan — santai) vs 吸ってはいけない (dilarang merokok — keras!).\n\n<b>3) Saran lembut:</b> 〜といい / 〜たらいい / 〜ばいい = sebaiknya 〜 / semoga 〜. Lebih lembut dari 〜たほうがいい (bab 15) karena bisa dipakai untuk <b>harapan</b> yang belum tentu terjadi: 雨が降らないといいですね (semoga tidak hujan). Bentuk negatif: 〜ないといい / 〜なかったらいい / 〜なければいい."
        },
        {
          "type": "kotoba",
          "title": "Kosakata Aturan & Kewajiban",
          "items": [
            {
              "jp": "義務",
              "r": "gimu",
              "id": "kewajiban",
              "note": "義務を果たす = menunaikan kewajiban"
            },
            {
              "jp": "許可",
              "r": "kyoka",
              "id": "izin (resmi)",
              "note": "許可を取る = meminta izin resmi"
            },
            {
              "jp": "禁止",
              "r": "kinshi",
              "id": "larangan",
              "note": "駐車禁止 = dilarang parkir"
            },
            {
              "jp": "規則",
              "r": "kisoku",
              "id": "aturan / peraturan",
              "note": "規則を守る = mematuhi aturan"
            },
            {
              "jp": "違反",
              "r": "ihan",
              "id": "pelanggaran",
              "note": "規則に違反する = melanggar aturan"
            },
            {
              "jp": "罰金",
              "r": "bakkin",
              "id": "denda",
              "note": "罰金を払う = membayar denda"
            },
            {
              "jp": "予定",
              "r": "yotei",
              "id": "rencana / jadwal",
              "note": "予定がある = ada rencana"
            },
            {
              "jp": "宿題",
              "r": "shukudai",
              "id": "PR",
              "note": "宿題をする = mengerjakan PR"
            },
            {
              "jp": "運転",
              "r": "unten",
              "id": "menyetir",
              "note": "運転する = menyetir"
            },
            {
              "jp": "喫煙",
              "r": "kitsuen",
              "id": "merokok",
              "note": "喫煙禁止 = dilarang merokok"
            },
            {
              "jp": "駐車",
              "r": "chuusha",
              "id": "parkir",
              "note": "駐車場 = tempat parkir"
            },
            {
              "jp": "守る",
              "r": "mamoru",
              "id": "menjaga / mematuhi",
              "note": "約束を守る = menepati janji"
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Pola Kewajiban, Izin & Larangan",
          "items": [
            {
              "pattern": "kata kerja negatif + ければならない",
              "arti": "harus ~ (kewajiban, formal)",
              "explain": "Ini bentuk kewajiban yang <b>paling formal dan baku</b> — cocok untuk tulisan, pengumuman, dan aturan resmi. Nuansanya tegas: tidak ada pilihan selain melakukannya.",
              "examples": [
                {
                  "jp": "明日は早く起きなければなりません。",
                  "id": "Besok saya harus bangun pagi-pagi.",
                  "rd": "あしたははやくおきなければなりません。"
                },
                {
                  "jp": "日本では車は左側を走らなければなりません。",
                  "id": "Di Jepang, mobil harus berjalan di lajur kiri.",
                  "rd": "にほんではくるまはひだりがわをはしらなければなりません。"
                }
              ],
              "tabel": [
                {
                  "k": "起きなければならない",
                  "v": "harus bangun (formal)"
                },
                {
                  "k": "走らなければならない",
                  "v": "harus berjalan di (lajur kiri)"
                }
              ]
            },
            {
              "pattern": "kata kerja negatif -te + はいけない",
              "arti": "harus ~ (kewajiban, formal percakapan)",
              "explain": "Artinya sama persis dengan 〜なければならない. Bentuknya: Vない yang ない-nya diganti jadi なくて + はいけない. Pola ini sedikit lebih sering dipakai dalam <b>percakapan formal</b> sehari-hari.",
              "examples": [
                {
                  "jp": "今週は日曜日も会社に行かなくてはいけない。",
                  "id": "Minggu ini saya harus pergi ke kantor bahkan di hari Minggu.",
                  "rd": "こんしゅうはにちようびもかいしゃにいかなくてはいけない。"
                },
                {
                  "jp": "宿題をしなくてはいけません。",
                  "id": "Saya harus mengerjakan PR.",
                  "rd": "しゅくだいをしなくてはいけません。"
                }
              ],
              "tabel": [
                {
                  "k": "行かなくてはいけない",
                  "v": "harus pergi (ke kantor)"
                },
                {
                  "k": "しなくてはいけない",
                  "v": "harus mengerjakan (PR)"
                }
              ]
            },
            {
              "pattern": "kata kerja negatif + といけない",
              "arti": "harus ~ (kewajiban, santai)",
              "explain": "Artinya sama dengan dua pola di atas. Dari ketiganya, pola ini yang <b>paling sering muncul dalam obrolan santai</b> sehari-hari. Yang beda cuma tingkat formalitasnya, bukan artinya.",
              "examples": [
                {
                  "jp": "食後に、薬を飲まないといけない。",
                  "id": "Setelah makan, saya harus minum obat.",
                  "rd": "しょくごに、くすりをのまないといけない。"
                },
                {
                  "jp": "明日は来ないといけないよ。",
                  "id": "Besok kamu harus datang, ya.",
                  "rd": "あしたはこないといけないよ。"
                }
              ],
              "tabel": [
                {
                  "k": "飲まないといけない",
                  "v": "harus minum (obat)"
                },
                {
                  "k": "来ないといけない",
                  "v": "harus datang"
                }
              ]
            },
            {
              "pattern": "〜なきゃ / 〜なくちゃ / 〜ないと (+いけない)",
              "arti": "harus ~ (percakapan akrab)",
              "explain": "Ini versi <b>santai</b> dari pola kewajiban: 〜なきゃ singkatan dari 〜なければ, 〜なくちゃ dari 〜なくては, 〜ないと dari 〜ないと. Bagian (いけない)-nya sering dibuang sekalian: しなきゃ, 食べなくちゃ, 行かないと. <b>Jangan dipakai</b> dalam situasi formal atau ke atasan ya!",
              "examples": [
                {
                  "jp": "洗濯しなきゃ。",
                  "id": "Saya harus mencuci pakaian.",
                  "rd": "せんたくしなきゃ。"
                },
                {
                  "jp": "お客さんが来るから、片づけないと。",
                  "id": "Karena ada tamu yang datang, saya harus beres-beres.",
                  "rd": "おきゃくさんがくるから、かたづけないと。"
                }
              ],
              "tabel": [
                {
                  "k": "しなきゃ",
                  "v": "harus (mencuci) — santai"
                },
                {
                  "k": "食べなくちゃ",
                  "v": "harus (makan) — santai"
                },
                {
                  "k": "片づけないと",
                  "v": "harus (beres-beres) — santai"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk -te + もいい",
              "arti": "boleh ~ (izin)",
              "explain": "Menyatakan izin: boleh 〜. Bisa dipakai untuk <b>memberi izin</b> (いいですよ) maupun <b>meminta izin</b> (〜てもいいですか). Ini kebalikan dari larangan 〜てはいけない.",
              "examples": [
                {
                  "jp": "これ、すててもいいですか。",
                  "id": "Bolehkah saya membuang ini?",
                  "rd": "これ、すててもいいですか。"
                },
                {
                  "jp": "その本は、すぐに返さなくてもいいです。",
                  "id": "Buku itu tidak perlu dikembalikan sekarang juga.",
                  "rd": "そのほんは、すぐにかえさなくてもいいです。"
                }
              ],
              "tabel": [
                {
                  "k": "すててもいいですか",
                  "v": "bolehkah membuang?"
                },
                {
                  "k": "返さなくてもいい",
                  "v": "tidak perlu dikembalikan (sekarang)"
                }
              ]
            },
            {
              "pattern": "kata kerja negatif -te + もいい",
              "arti": "tidak perlu ~ / tidak harus ~",
              "explain": "Ini bentuk <b>negatif dari kewajiban</b>: tidak wajib dilakukan. Bentuknya: Vない yang ない-nya diganti jadi なくて + もいい. Hati-hati: 〜ないでも itu SALAH, yang benar 〜なくても. Lawannya adalah 〜てはいけない (larangan).",
              "examples": [
                {
                  "jp": "明日来なくてもいいですか。",
                  "id": "Apakah saya tidak perlu datang besok?",
                  "rd": "あしたこなくてもいいですか。"
                },
                {
                  "jp": "今日じゃなくてもいいです。",
                  "id": "Tidak harus hari ini juga tidak apa-apa.",
                  "rd": "きょうじゃなくてもいいです。"
                }
              ],
              "tabel": [
                {
                  "k": "来なくてもいい",
                  "v": "tidak perlu datang"
                },
                {
                  "k": "今日じゃなくてもいい",
                  "v": "tidak harus hari ini"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk -te + はいけない",
              "arti": "tidak boleh ~ (larangan)",
              "explain": "Larangan tegas: tidak boleh 〜. Dipakai untuk <b>aturan dan peraturan resmi</b> (sekolah, tempat umum, rambu-rambu). Versi kasualnya 〜ちゃいけない / 〜じゃいけない, sedangkan bentuk larangan langsungnya adalah 〜な (dibahas di bab 15).",
              "examples": [
                {
                  "jp": "テストのとき、ペンを使ってはいけません。",
                  "id": "Saat ujian, tidak boleh memakai pulpen.",
                  "rd": "テストのとき、ペンをつかってはいけません。"
                },
                {
                  "jp": "その川でおよいではいけません。",
                  "id": "Tidak boleh berenang di sungai itu.",
                  "rd": "そのかわでおよいではいけません。"
                }
              ],
              "tabel": [
                {
                  "k": "使ってはいけない",
                  "v": "tidak boleh memakai"
                },
                {
                  "k": "およいではいけない",
                  "v": "tidak boleh berenang"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk kamus + といい / kata kerja bentuk lampau + らいい / kata kerja bentuk -ba + いい",
              "arti": "sebaiknya ~ / semoga ~",
              "explain": "Untuk menyampaikan saran lembut atau <b>harapan</b>: sebaiknya 〜 / semoga 〜. Ketiganya maknanya hampir sama kok. Lebih lembut dari 〜たほうがいい karena bisa dipakai untuk harapan yang belum tentu terjadi. Versi negatifnya: 〜ないといい / 〜なかったらいい / 〜なければいい.",
              "examples": [
                {
                  "jp": "頭が痛いとき、この薬を飲むといいです。",
                  "id": "Kalau kepala sakit, sebaiknya minum obat ini.",
                  "rd": "あたまがいたいとき、このくすりをのむといいです。"
                },
                {
                  "jp": "仕事が早く見つかったらいいですね。",
                  "id": "Semoga kamu segera mendapatkan pekerjaan, ya.",
                  "rd": "しごとがはやくみつかったらいいですね。"
                },
                {
                  "jp": "母の病気が早く治ればいいのですが…。",
                  "id": "Semoga penyakit ibu segera sembuh…",
                  "rd": "ははのびょうきがはやくなおればいいのですが…。"
                }
              ],
              "tabel": [
                {
                  "k": "飲むといい",
                  "v": "sebaiknya minum (obat)"
                },
                {
                  "k": "見つかったらいい",
                  "v": "semoga (segera) mendapatkan"
                },
                {
                  "k": "治ればいい",
                  "v": "semoga (penyakit) sembuh"
                }
              ]
            }
          ]
        },
        {
          "type": "kanji",
          "title": "Kanji Bab 12",
          "items": [
            {
              "ch": "義",
              "kun": "ただしい",
              "on": "ぎ",
              "id": "kebenaran / kewajiban",
              "note": "義務 (gimu) = kewajiban"
            },
            {
              "ch": "務",
              "kun": "つとめる",
              "on": "む",
              "id": "tugas / berusaha",
              "note": "勤務 (kinmu) = bekerja"
            },
            {
              "ch": "禁",
              "kun": "",
              "on": "きん",
              "id": "larangan",
              "note": "禁止 (kinshi) = larangan"
            },
            {
              "ch": "許",
              "kun": "ゆるす",
              "on": "きょ",
              "id": "mengizinkan",
              "note": "許可 (kyoka) = izin resmi"
            },
            {
              "ch": "規",
              "kun": "",
              "on": "き",
              "id": "aturan",
              "note": "規則 (kisoku) = peraturan"
            },
            {
              "ch": "守",
              "kun": "まもる",
              "on": "しゅ",
              "id": "menjaga / mematuhi",
              "note": "守る (mamoru) = mematuhi"
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Aturan Asrama",
          "lines": [
            {
              "sp": "A",
              "jp": "すみません、この寮では料理をしてもいいですか。",
              "id": "Permisi, di asrama ini boleh masak tidak?"
            },
            {
              "sp": "B",
              "jp": "台所でなら、してもいいですよ。部屋ではしてはいけません。",
              "id": "Kalau di dapur boleh. Di kamar tidak boleh."
            },
            {
              "sp": "A",
              "jp": "友だちを泊めてもいいですか。",
              "id": "Boleh menginapkan teman?"
            },
            {
              "sp": "B",
              "jp": "泊めなくてもいい日はありません。必ず受付に言わなければなりません。",
              "id": "Tidak ada hari yang boleh tanpa lapor. Harus selalu lapor ke resepsionis."
            },
            {
              "sp": "A",
              "jp": "門限は何時ですか。",
              "id": "Jam malamnya jam berapa?"
            },
            {
              "sp": "B",
              "jp": "11時です。11時までに帰らないといけないんです。",
              "id": "Jam 11. Harus pulang sebelum jam 11."
            },
            {
              "sp": "A",
              "jp": "わかりました。規則を守ります。",
              "id": "Baik, saya akan mematuhi aturannya."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "Pola kewajiban yang paling FORMAL dan baku adalah…",
          "o": [
            "〜ないといけない",
            "〜なければならない",
            "〜なきゃいけない",
            "〜なくちゃいけない"
          ],
          "a": 1,
          "explain": "〜なければならない = bentuk paling formal, untuk tulisan dan aturan resmi."
        },
        {
          "q": "明日は来___よ。(Besok kamu harus datang — santai)",
          "o": [
            "なければなりません",
            "ないといけない",
            "なくてはいけません",
            "なくてもいい"
          ],
          "a": 1,
          "explain": "〜ないといけない = bentuk kewajiban yang paling sering dipakai dalam percakapan santai."
        },
        {
          "q": "「しなきゃ」は省略 (singkatan) dari…",
          "o": [
            "しなくては",
            "しなければ",
            "しないと",
            "しなくても"
          ],
          "a": 1,
          "explain": "〜なきゃ = singkatan dari 〜なければ. 〜なくちゃ dari 〜なくては, 〜ないと dari 〜ないと."
        },
        {
          "q": "これ、食べてもいいですか。 artinya…",
          "o": [
            "Tidak boleh makan ini",
            "Bolehkah saya makan ini?",
            "Saya tidak makan ini",
            "Saya harus makan ini"
          ],
          "a": 1,
          "explain": "〜てもいいですか = meminta izin: bolehkah saya ~?"
        },
        {
          "q": "「なくてもいい」の意味は…",
          "o": [
            "tidak boleh",
            "tidak perlu",
            "harus",
            "sebaiknya"
          ],
          "a": 1,
          "explain": "〜なくてもいい = tidak perlu / tidak wajib. Bukan larangan!"
        },
        {
          "q": "ここでたばこを吸ってはいけません。 artinya…",
          "o": [
            "Boleh merokok di sini",
            "Tidak perlu merokok di sini",
            "Tidak boleh merokok di sini",
            "Harus merokok di sini"
          ],
          "a": 2,
          "explain": "〜てはいけない = larangan keras: tidak boleh ~."
        },
        {
          "q": "Bentuk negatif dari 「〜ばいい」 untuk saran adalah…",
          "o": [
            "〜なければいい",
            "〜なくていい",
            "〜ないほうがいい",
            "〜てもいい"
          ],
          "a": 0,
          "explain": "Negatifnya: 〜ないといい / 〜なかったらいい / 〜なければいい."
        },
        {
          "q": "「〜といい／〜たらいい／〜ばいい」 bisa dipakai untuk…",
          "o": [
            "larangan keras",
            "saran atau harapan",
            "kewajiban formal",
            "izin santai"
          ],
          "a": 1,
          "explain": "Pola ini = saran lembut ATAU harapan (semoga ~), mis. 雨が降らないといいですね."
        },
        {
          "q": "Apa bedanya 「なくてもいい」 dan 「てはいけない」?",
          "o": [
            "Sama-sama larangan",
            "Sama-sama kewajiban",
            "Tidak perlu vs dilarang",
            "Sopan vs kasar"
          ],
          "a": 2,
          "explain": "〜なくてもいい = tidak perlu (boleh tidak dilakukan). 〜てはいけない = dilarang keras. Sangat berbeda!"
        },
        {
          "q": "今日じゃなくてもいいです。 artinya…",
          "o": [
            "Tidak boleh hari ini",
            "Harus hari ini juga",
            "Tidak harus hari ini juga tidak apa-apa",
            "Sebaiknya hari ini"
          ],
          "a": 2,
          "explain": "〜じゃなくてもいい = tidak harus hari ini juga tidak apa-apa."
        }
      ]
    },
    {
      "id": "n4-14",
      "bab": 13,
      "level": "n4",
      "title": "Memberi, Menerima & Persiapan",
      "desc": "Arah memberi-menerima: 〜てあげる・くれる・もらう + 〜ておく・てみる・てしまう",
      "icon": "🎁",
      "sections": [
        {
          "type": "penjelasan",
          "title": "Siapa Beri, Siapa Terima? Arah Itu Segalanya",
          "body": "Bab ini punya <b>dua kelompok pola</b>. Kelompok pertama soal <b>arah</b>: あげる (saya memberi ke orang lain), <b>くれる</b> (orang lain memberi KE SAYA — くれる selalu dipakai saat penerimanya saya/keluarga saya!), もらう (saya menerima). Trik menghafalnya: <b>lihat siapa penerimanya</b>. Kalau penerimanya saya → くれる atau もらう. Kalau penerimanya orang lain → あげる.\n\nPola yang sama berlaku untuk kata kerja: <b>Vてあげる</b> (saya melakukan untuk orang lain), <b>Vてくれる</b> (orang lain melakukan untuk saya), <b>Vてもらう</b> (saya menerima jasa — nuansa: saya yang meminta). Beda てくれる vs てもらう: てくれる menekankan <b>dia berbuat baik</b>, てもらう menekankan <b>saya menerima jasanya</b> (saya berinisiatif meminta). Pengecualian: untuk tanaman, hewan, dan anak sendiri pakai <b>やる</b> (花に水をやる).\n\nKelompok kedua — tiga pola Vて serbaguna: <b>Vておく</b> = persiapan (lakukan dulu untuk nanti) atau membiarkan tetap begitu. Versi santainya: ておく → <b>とく</b> (読んどく). <b>Vてみる</b> = mencoba (untuk tahu rasanya). <b>Vてしまう</b> = sampai habis/tuntas ATAU penyesalan di luar kendali. Versi santainya: 〜ちゃう / 〜じゃう (使っちゃう, 忘れちゃう, 行っちゃう, 読んじゃう)."
        },
        {
          "type": "kotoba",
          "title": "Kosakata Memberi & Persiapan",
          "items": [
            {
              "jp": "プレゼント",
              "r": "purezento",
              "id": "hadiah",
              "note": "プレゼントをあげる = memberi hadiah"
            },
            {
              "jp": "お土産",
              "r": "omiyage",
              "id": "oleh-oleh",
              "note": "お土産を買う = membeli oleh-oleh"
            },
            {
              "jp": "恩",
              "r": "on",
              "id": "budi / jasa baik",
              "note": "恩を返す = membalas budi"
            },
            {
              "jp": "お礼",
              "r": "orei",
              "id": "ucapan terima kasih",
              "note": "お礼を言う = mengucapkan terima kasih"
            },
            {
              "jp": "準備",
              "r": "junbi",
              "id": "persiapan",
              "note": "準備をする = menyiapkan"
            },
            {
              "jp": "試す",
              "r": "tamesu",
              "id": "mencoba / menguji",
              "note": "試してみる = coba dulu"
            },
            {
              "jp": "残す",
              "r": "nokosu",
              "id": "menyisakan",
              "note": "残しておく = sisakan dulu"
            },
            {
              "jp": "使い切る",
              "r": "tsukaikiru",
              "id": "menghabiskan",
              "note": "全部使い切ってしまった = sudah habis semua"
            },
            {
              "jp": "忘れる",
              "r": "wasureru",
              "id": "lupa",
              "note": "忘れてしまった = terlanjur lupa"
            },
            {
              "jp": "片付ける",
              "r": "katazukeru",
              "id": "membereskan",
              "note": "部屋を片付けておく = bereskan kamar dulu"
            },
            {
              "jp": "連れて行く",
              "r": "tsurete iku",
              "id": "mengantar / mengajak pergi",
              "note": "駅まで連れて行ってもらう = diantar ke stasiun"
            },
            {
              "jp": "世話",
              "r": "sewa",
              "id": "bantuan / perawatan",
              "note": "お世話になる = merepotkan (terima kasih atas bantuannya)"
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Pola Memberi, Menerima & Persiapan",
          "items": [
            {
              "pattern": "kata bendaをあげる / kata bendaをくれる / kata bendaをもらう",
              "arti": "memberi / diberi / menerima",
              "explain": "Tiga kata kerja memberi-menerima yang beda <b>sudut pandang</b>. あげる: saya memberi ke orang lain (arah keluar). くれる: orang lain memberi ke SAYA atau keluarga saya — くれる SELALU dipakai kalau penerimanya saya. もらう: saya menerima dari orang lain (bisa pakai に atau から).",
              "examples": [
                {
                  "jp": "私は田中さんにセーターをあげました。",
                  "id": "Saya memberi sweater kepada Tanaka-san.",
                  "rd": "わたしはたなかさんにセーターをあげました。"
                },
                {
                  "jp": "田中さんが（私に）セーターをくれました。",
                  "id": "Tanaka-san memberi sweater kepada saya.",
                  "rd": "たなかさんが（わたしに）セーターをくれました。"
                },
                {
                  "jp": "私は田中さんにセーターをもらいました。",
                  "id": "Saya menerima sweater dari Tanaka-san.",
                  "rd": "わたしはたなかさんにセーターをもらいました。"
                }
              ],
              "tabel": [
                {
                  "k": "Nをあげる",
                  "v": "saya memberi (ke orang lain)"
                },
                {
                  "k": "Nをくれる",
                  "v": "(orang lain) memberi ke saya"
                },
                {
                  "k": "Nをもらう",
                  "v": "saya menerima (dari orang lain)"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk -te + あげる",
              "arti": "melakukan ~ untuk orang lain",
              "explain": "Saya melakukan sesuatu <b>untuk orang lain</b> (saya yang berbuat baik). Tapi untuk tanaman, hewan, dan anak sendiri pakainya <b>Vてやる / Nをやる</b>, misalnya 花に水をやる (menyiram bunga).",
              "examples": [
                {
                  "jp": "私は田中さんに地図をかいてあげました。",
                  "id": "Saya menggambar peta untuk Tanaka-san.",
                  "rd": "わたしはたなかさんにちずをかいてあげました。"
                },
                {
                  "jp": "私は友だちの引っ越しを手伝ってあげました。",
                  "id": "Saya membantu pindahan rumah teman saya.",
                  "rd": "わたしはともだちのひっこしをてつだってあげました。"
                },
                {
                  "jp": "英語を教えてあげましょうか。",
                  "id": "Mau saya ajari bahasa Inggris?",
                  "rd": "えいごをおしえてあげましょうか。"
                }
              ],
              "tabel": [
                {
                  "k": "かいてあげる",
                  "v": "menggambar (peta) untuk orang lain"
                },
                {
                  "k": "手伝ってあげる",
                  "v": "membantu (pindahan)"
                },
                {
                  "k": "教えてあげる",
                  "v": "mengajari"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk -te + くれる",
              "arti": "orang lain melakukan ~ untuk saya",
              "explain": "Orang lain melakukan sesuatu <b>untuk saya atau keluarga saya</b>. Sudut pandangnya dari sisi penerima. Pola ini sering muncul bareng ucapan terima kasih: 〜てくれてありがとう.",
              "examples": [
                {
                  "jp": "田中さんは私に地図をかいてくれました。",
                  "id": "Tanaka-san menggambar peta untuk saya.",
                  "rd": "たなかさんはわたしにちずをかいてくれました。"
                },
                {
                  "jp": "このマフラーは、友だちがあんでくれました。",
                  "id": "Syal ini dirajutkan oleh teman saya.",
                  "rd": "このマフラーは、ともだちがあんでくれました。"
                },
                {
                  "jp": "手伝ってくれて、ありがとう。",
                  "id": "Terima kasih sudah membantu saya.",
                  "rd": "てつだってくれて、ありがとう。"
                }
              ],
              "tabel": [
                {
                  "k": "かいてくれる",
                  "v": "(dia) menggambar untuk saya"
                },
                {
                  "k": "あんでくれる",
                  "v": "(teman) merajutkan untuk saya"
                },
                {
                  "k": "手伝ってくれてありがとう",
                  "v": "terima kasih sudah membantu"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk -te + もらう",
              "arti": "menerima kebaikan ~ / dibantu ~",
              "explain": "Saya <b>menerima jasa</b> berupa orang lain yang melakukan sesuatu untuk saya, dengan nuansa terima kasih. Bedanya dengan てくれる: てもらう menekankan <b>saya yang meminta atau menerima jasanya</b> (saya yang berinisiatif), sedangkan てくれる menekankan dialah yang berbuat baik.",
              "examples": [
                {
                  "jp": "私は田中さんに地図をかいてもらいました。",
                  "id": "Saya meminta Tanaka-san menggambar peta untuk saya.",
                  "rd": "わたしはたなかさんにちずをかいてもらいました。"
                },
                {
                  "jp": "友だちに東京駅まで連れて行ってもらいました。",
                  "id": "Teman saya mengantar saya sampai ke Stasiun Tokyo.",
                  "rd": "ともだちにとうきょうえきまでつれていってもらいました。"
                }
              ],
              "tabel": [
                {
                  "k": "かいてもらう",
                  "v": "(saya) meminta digambarkan"
                },
                {
                  "k": "連れて行ってもらう",
                  "v": "(saya) diantar sampai (stasiun)"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk -te + おく",
              "arti": "melakukan ~ sebagai persiapan / membiarkan tetap ~",
              "explain": "Punya dua makna: ① <b>Persiapan</b> — melakukan sesuatu duluan untuk nanti. ② <b>Mempertahankan kondisi</b> — membiarkan tetap seperti sekarang. Versi santainya: ておく → <b>とく</b> (読んどく, 開けとく, しとく).",
              "examples": [
                {
                  "jp": "お客さんが来る前にそうじしておきます。",
                  "id": "Saya akan beres-beres dulu sebelum tamu datang.",
                  "rd": "おきゃくさんがくるまえにそうじしておきます。"
                },
                {
                  "jp": "旅行する前に、ガイドブックを読んでおきましょう。",
                  "id": "Sebelum bepergian, mari baca buku panduan dulu.",
                  "rd": "りょこうするまえに、ガイドブックをよんでおきましょう。"
                },
                {
                  "jp": "ドアを開けておいてください。",
                  "id": "Tolong biarkan pintunya tetap terbuka.",
                  "rd": "ドアをあけておいてください。"
                }
              ],
              "tabel": [
                {
                  "k": "そうじしておく",
                  "v": "beres-beres dulu (persiapan)"
                },
                {
                  "k": "読んでおく",
                  "v": "baca dulu (persiapan)"
                },
                {
                  "k": "開けておく",
                  "v": "biarkan (pintu) tetap terbuka"
                },
                {
                  "k": "〜とく",
                  "v": "bentuk santai dari 〜ておく"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk -te + みる",
              "arti": "mencoba ~",
              "explain": "Mencoba melakukan 〜 untuk melihat hasilnya — entah untuk pertama kali atau karena penasaran rasanya. Kalau ingin mencoba, bentuknya: <b>〜てみたい</b>です.",
              "examples": [
                {
                  "jp": "これ、おいしいですよ。食べてみてください。",
                  "id": "Ini enak lho. Coba makan deh.",
                  "rd": "これ、おいしいですよ。たべてみてください。"
                },
                {
                  "jp": "くつを買う前には必ずはいてみましょう。",
                  "id": "Sebelum membeli sepatu, pastikan untuk mencobanya dulu.",
                  "rd": "くつをかうまえにはかならずはいてみましょう。"
                },
                {
                  "jp": "日本の旅館にとまってみたいです。",
                  "id": "Saya ingin mencoba menginap di penginapan Jepang.",
                  "rd": "にほんのりょかんにとまってみたいです。"
                }
              ],
              "tabel": [
                {
                  "k": "食べてみる",
                  "v": "coba makan"
                },
                {
                  "k": "はいてみる",
                  "v": "coba pakai (sepatu)"
                },
                {
                  "k": "〜てみたい",
                  "v": "ingin mencoba ~"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk -te + しまう",
              "arti": "~ sampai habis / terlanjur ~ (penekanan & penyesalan)",
              "explain": "Punya dua makna: ① <b>Penekanan</b> — dilakukan sampai selesai atau habis sepenuhnya. ② <b>Penyesalan</b> — terjadi di luar kendali dan bikin pembicaranya menyesal. Versi santainya: 〜ちゃう / 〜じゃう.",
              "examples": [
                {
                  "jp": "残っていたワインを飲んでしまいました。",
                  "id": "Saya menghabiskan sisa anggur yang ada.",
                  "rd": "のこっていたワインをのんでしまいました。"
                },
                {
                  "jp": "電車の中にかさを忘れてしまいました。",
                  "id": "Saya ketinggalan payung di dalam kereta.",
                  "rd": "でんしゃのなかにかさをわすれてしまいました。"
                },
                {
                  "jp": "駅まで走りましたが、電車は行ってしまいました。",
                  "id": "Saya berlari ke stasiun, tapi keretanya sudah keburu pergi.",
                  "rd": "えきまではしりましたが、でんしゃはいってしまいました。"
                }
              ],
              "tabel": [
                {
                  "k": "飲んでしまう",
                  "v": "menghabiskan (sampai habis)"
                },
                {
                  "k": "忘れてしまう",
                  "v": "ketinggalan (menyesal)"
                },
                {
                  "k": "行ってしまう",
                  "v": "keburu pergi"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk -teちゃう / kata kerja bentuk -te/-de + ちゃう (〜ちゃいけない)",
              "arti": "bentuk santai dari 〜てしまう",
              "explain": "Ini <b>kontraksi santai</b> dari Vてしまう: てしまう → ちゃう, でしまう → じゃう (使ってしまう→使っちゃう, 忘れてしまう→忘れちゃう). Juga dipakai untuk larangan versi santai: 〜ちゃいけない (versi gaul dari 〜てはいけない).",
              "examples": [
                {
                  "jp": "ケーキを全部食べちゃった。",
                  "id": "Kuenya sudah kuhabiskan semua.",
                  "rd": "ケーキをぜんぶたべちゃった。"
                },
                {
                  "jp": "宿題を忘れちゃった。",
                  "id": "Aku lupa mengerjakan PR.",
                  "rd": "しゅくだいをわすれちゃった。"
                }
              ],
              "tabel": [
                {
                  "k": "食べちゃった",
                  "v": "(sudah) kuhabiskan — santai"
                },
                {
                  "k": "忘れちゃった",
                  "v": "lupa — santai"
                },
                {
                  "k": "〜ちゃいけない",
                  "v": "tidak boleh ~ (larangan santai)"
                }
              ]
            }
          ]
        },
        {
          "type": "kanji",
          "title": "Kanji Bab 13",
          "items": [
            {
              "ch": "贈",
              "kun": "おくる",
              "on": "ぞう",
              "id": "memberi hadiah",
              "note": "贈り物 (okurimono) = hadiah"
            },
            {
              "ch": "恩",
              "kun": "",
              "on": "おん",
              "id": "budi / jasa",
              "note": "恩返し (ongaeshi) = membalas budi"
            },
            {
              "ch": "礼",
              "kun": "",
              "on": "れい",
              "id": "terima kasih / sopan santun",
              "note": "お礼 (orei) = ucapan terima kasih"
            },
            {
              "ch": "準",
              "kun": "",
              "on": "じゅん",
              "id": "standar / persiapan",
              "note": "準備 (junbi) = persiapan"
            },
            {
              "ch": "備",
              "kun": "そなえる",
              "on": "び",
              "id": "menyiapkan / melengkapi",
              "note": "準備 (junbi) = persiapan"
            },
            {
              "ch": "試",
              "kun": "ためす",
              "on": "し",
              "id": "mencoba / ujian",
              "note": "試験 (shiken) = ujian"
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Terima Kasih & Persiapan Pesta",
          "lines": [
            {
              "sp": "A",
              "jp": "この地図、田中さんが書いてくれたんです。",
              "id": "Peta ini digambarkan Tanaka-san untuk saya."
            },
            {
              "sp": "B",
              "jp": "へえ、親切ですね。お礼は言いましたか。",
              "id": "Wah, baik sekali ya. Sudah bilang terima kasih?"
            },
            {
              "sp": "A",
              "jp": "はい。お土産を買っておきました。",
              "id": "Sudah. Saya sudah menyiapkan oleh-oleh duluan."
            },
            {
              "sp": "B",
              "jp": "いいですね。パーティーの料理はどうしますか。",
              "id": "Bagus. Bagaimana dengan masakan untuk pestanya?"
            },
            {
              "sp": "A",
              "jp": "新しいレシピを試してみたいです。",
              "id": "Saya ingin mencoba resep baru."
            },
            {
              "sp": "B",
              "jp": "じゃあ、私が買い物を手伝ってあげますよ。",
              "id": "Kalau begitu, belanjanya saya bantu ya."
            },
            {
              "sp": "A",
              "jp": "本当ですか。助かります！",
              "id": "Benarkah? Sangat membantu!"
            },
            {
              "sp": "B",
              "jp": "ケーキを全部食べちゃわないでくださいね。",
              "id": "Jangan sampai kuenya dihabiskan semua ya."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "田中さんが（私に）セーターを___。(Tanaka memberi saya sweater)",
          "o": [
            "あげました",
            "くれました",
            "もらいました",
            "やりました"
          ],
          "a": 1,
          "explain": "Penerimanya SAYA → pakai くれる. あげる itu saya memberi ke orang lain."
        },
        {
          "q": "私は田中さんにセーターを___。(Saya memberi sweater ke Tanaka)",
          "o": [
            "あげました",
            "くれました",
            "もらいました",
            "いただきました"
          ],
          "a": 0,
          "explain": "Pemberinya SAYA, penerimanya orang lain → pakai あげる."
        },
        {
          "q": "私は田中さんに地図を書いてもらいました。 Nuansa kalimat ini…",
          "o": [
            "Tanaka berbuat baik tanpa diminta",
            "Saya meminta/menerima jasa menggambar peta",
            "Saya menggambar untuk Tanaka",
            "Tanaka melarang saya"
          ],
          "a": 1,
          "explain": "てもらう = saya menerima jasa; nuansanya saya yang berinisiatif meminta."
        },
        {
          "q": "Untuk tanaman dan hewan, yang dipakai bukan あげる tapi…",
          "o": [
            "くれる",
            "もらう",
            "やる",
            "さしあげる"
          ],
          "a": 2,
          "explain": "Untuk tanaman/hewan/anak sendiri: Vてやる / Nをやる. Mis. 花に水をやる."
        },
        {
          "q": "お客さんが来る前に、そうじしておきます。 Vておく di sini berarti…",
          "o": [
            "menyesal",
            "mencoba",
            "persiapan",
            "selesai semua"
          ],
          "a": 2,
          "explain": "Beres-beres DULU sebelum tamu datang = persiapan untuk nanti."
        },
        {
          "q": "「読んでおく」の bentuk santai adalah…",
          "o": [
            "読んじゃう",
            "読んどく",
            "読んでみる",
            "読んでくれる"
          ],
          "a": 1,
          "explain": "ておく → とく dalam percakapan santai: 読んどく, 開けとく, しとく."
        },
        {
          "q": "電車の中にかさを忘れてしまいました。 Nuansa てしまう di sini…",
          "o": [
            "persiapan",
            "mencoba",
            "penyesalan di luar kendali",
            "kebiasaan"
          ],
          "a": 2,
          "explain": "Ketinggalan payung = terjadi di luar kendali dan disesali → makna penyesalan."
        },
        {
          "q": "「使ってしまう」 dalam percakapan santai menjadi…",
          "o": [
            "使っちゃう",
            "使ってみる",
            "使っとく",
            "使ってくれる"
          ],
          "a": 0,
          "explain": "てしまう → ちゃう: 使っちゃう, 忘れちゃう, 行っちゃう."
        },
        {
          "q": "これ、おいしいですよ。___ください。(Coba makan deh)",
          "o": [
            "食べてみて",
            "食べておいて",
            "食べてしまって",
            "食べてあげて"
          ],
          "a": 0,
          "explain": "Mencoba untuk tahu rasanya → Vてみる: 食べてみてください."
        },
        {
          "q": "Bentuk \"ingin mencoba\": contoh yang tepat…",
          "o": [
            "日本に行ってみたいです",
            "日本に行っておきたいです",
            "日本に行ってしまいます",
            "日本に行ってもらいます"
          ],
          "a": 0,
          "explain": "Ingin mencoba = 〜てみたいです. Hati-hati jangan tertukar dengan 〜ておく!"
        }
      ]
    },
    {
      "id": "n4-15",
      "bab": 14,
      "level": "n4",
      "title": "Niat & Rencana",
      "desc": "Menyatakan niat: Vよう・Vようと思う・Vつもり + ようにする・ようになる・ように言う",
      "icon": "🎯",
      "sections": [
        {
          "type": "penjelasan",
          "title": "Niat Hari Ini, Kebiasaan Esok Hari",
          "body": "Bab ini soal <b>niat dan rencana</b> — plus tiga pola ように yang sering diujikan berpasangan. Mari bedah satu per satu.\n\n<b>1) Vよう</b> = ayo/mari 〜 versi <b>kasual antar teman</b> (versi sopannya: Vましょう). する→しよう, 来る→来よう.\n\n<b>2) Vようと思う</b> = berniat 〜. Niat yang <b>baru diputuskan / spontan</b> diucapkan. <b>3) Vつもり</b> = berencana 〜. Rencana yang <b>sudah mantap dipikirkan</b>. Jebakan N4: kalau niatnya sudah lama dan kuat → つもり; kalau baru kepikiran sekarang → ようと思う. Dan ingat: <b>つもりはありません</b> (tidak berniat) penolakannya lebih kuat dari ないつもりです.\n\n<b>4) Vようにする</b> = berusaha/membiasakan diri agar 〜 (usaha <b>sadar dari diri sendiri</b>). <b>5) Vようになる</b> = menjadi bisa/menjadi 〜 (<b>perubahan keadaan</b> yang terjadi). Pasangan jebakan: ようにする = saya BERUSAHA (aktif), ようになる = KEADAAN berubah (hasil). <b>6) Vように言う</b> = menyuruh/meminta agar 〜 secara tidak langsung — lebih halus dari perintah langsung. Bentuk pasifnya 〜ように言われる = disuruh agar 〜.\n\n<b>7) 〜が / 〜けれど</b> sebagai <b>pembuka kalimat</b> (前置き): dipakai untuk mengawali sebelum menyampaikan maksud utama, bukan untuk pertentangan. Contoh: すみませんが、… (permisi, anu…) — sangat umum di telepon dan percakapan sopan."
        },
        {
          "type": "kotoba",
          "title": "Kosakata Niat & Rencana",
          "items": [
            {
              "jp": "決心",
              "r": "kesshin",
              "id": "tekad",
              "note": "決心する = bertekad"
            },
            {
              "jp": "目標",
              "r": "mokuhyou",
              "id": "target / tujuan",
              "note": "目標を立てる = menetapkan target"
            },
            {
              "jp": "決める",
              "r": "kimeru",
              "id": "memutuskan",
              "note": "つもりを決める = memantapkan rencana"
            },
            {
              "jp": "習慣",
              "r": "shuukan",
              "id": "kebiasaan",
              "note": "習慣にする = menjadikan kebiasaan"
            },
            {
              "jp": "留学",
              "r": "ryuugaku",
              "id": "kuliah di luar negeri",
              "note": "留学する = kuliah di luar negeri"
            },
            {
              "jp": "結婚",
              "r": "kekkon",
              "id": "menikah",
              "note": "結婚する = menikah"
            },
            {
              "jp": "転職",
              "r": "tenshoku",
              "id": "pindah kerja",
              "note": "転職する = pindah kerja"
            },
            {
              "jp": "相談",
              "r": "soudan",
              "id": "konsultasi",
              "note": "相談する = berkonsultasi"
            },
            {
              "jp": "心配",
              "r": "shinpai",
              "id": "khawatir",
              "note": "心配する = mengkhawatirkan"
            },
            {
              "jp": "計画",
              "r": "keikaku",
              "id": "rencana",
              "note": "計画を立てる = menyusun rencana"
            },
            {
              "jp": "予定",
              "r": "yotei",
              "id": "jadwal",
              "note": "予定がある = ada jadwal"
            },
            {
              "jp": "意志",
              "r": "ishi",
              "id": "kemauan",
              "note": "意志が強い = kemauan kuat"
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Pola Niat & Rencana",
          "items": [
            {
              "pattern": "kata kerja bentuk -you",
              "arti": "ayo ~ / mari ~ (kasual)",
              "explain": "Bentuk ajakan yang <b>kasual antar teman</b> — versi santai dari Vましょう. Contoh: する→しよう, 来る→来よう. Jangan dipakai ke atasan ya!",
              "examples": [
                {
                  "jp": "飲みに行こう！",
                  "id": "Ayo pergi minum!",
                  "rd": "のみにいこう！"
                },
                {
                  "jp": "疲れたから、ちょっと休もう。",
                  "id": "Capek, istirahat sebentar yuk.",
                  "rd": "つかれたから、ちょっとやすもう。"
                },
                {
                  "jp": "おなかがすいたね。何か食べよう。",
                  "id": "Lapar ya. Makan sesuatu yuk.",
                  "rd": "おなかがすいたね。なにかたべよう。"
                }
              ],
              "tabel": [
                {
                  "k": "行こう",
                  "v": "ayo pergi!"
                },
                {
                  "k": "休もう",
                  "v": "istirahat yuk"
                },
                {
                  "k": "食べよう",
                  "v": "makan yuk"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk -you + と思う",
              "arti": "berniat ~",
              "explain": "Menyatakan niat atau keinginan kuat si pembicara. Nuansanya: niat yang <b>baru diputuskan</b> saat itu juga ketika berbicara. Bandingkan dengan つもり yang artinya rencana yang sudah mantap dari sebelumnya.",
              "examples": [
                {
                  "jp": "明日買い物に行こうと思っています。",
                  "id": "Besok saya berniat pergi belanja.",
                  "rd": "あしたかいものにいこうとおもっています。"
                },
                {
                  "jp": "新しい自転車を買おうと思っています。",
                  "id": "Saya berniat membeli sepeda baru.",
                  "rd": "あたらしいじてんしゃをかおうとおもっています。"
                },
                {
                  "jp": "明日は日曜日なのでゆっくり寝ようと思います。",
                  "id": "Karena besok hari Minggu, saya berniat tidur santai.",
                  "rd": "あしたはにちようびなのでゆっくりねようとおもいます。"
                }
              ],
              "tabel": [
                {
                  "k": "行こうと思う",
                  "v": "berniat pergi"
                },
                {
                  "k": "買おうと思う",
                  "v": "berniat membeli"
                },
                {
                  "k": "寝ようと思う",
                  "v": "berniat tidur (santai)"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk kamus + つもり",
              "arti": "berencana / berniat ~",
              "explain": "Rencana atau niat yang <b>kuat dan sudah dipikirkan matang-matang</b>. Perhatian: <b>つもりはありません</b> (tidak berniat) penolakannya lebih tegas daripada ないつもりです.",
              "examples": [
                {
                  "jp": "夏休みに国に帰るつもりです。",
                  "id": "Libur musim panas saya berencana pulang ke negara saya.",
                  "rd": "なつやすみにくににかえるつもりです。"
                },
                {
                  "jp": "私は来年日本に留学するつもりです。",
                  "id": "Tahun depan saya berencana kuliah di Jepang.",
                  "rd": "わたしはらいねんにほんにりゅうがくするつもりです。"
                },
                {
                  "jp": "私は、大学に行くつもりはありません。",
                  "id": "Saya tidak berencana masuk universitas.",
                  "rd": "わたしは、だいがくにいくつもりはありません。"
                }
              ],
              "tabel": [
                {
                  "k": "帰るつもり",
                  "v": "berencana pulang"
                },
                {
                  "k": "留学するつもり",
                  "v": "berencana kuliah (di Jepang)"
                },
                {
                  "k": "〜つもりはない",
                  "v": "tidak berniat ~"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk kamus / kata kerja negatif + ようにする",
              "arti": "berusaha untuk ~ / membiasakan ~",
              "explain": "Usaha atau kebiasaan yang dilakukan dengan <b>kesadaran sendiri</b>: saya berusaha agar 〜. Bedanya dengan ようになる: ようにする menekankan <b>usaha aktif</b> dari si pembicara, sedangkan ようになる menekankan <b>perubahan yang terjadi</b> begitu saja.",
              "examples": [
                {
                  "jp": "日本語のクラスでは、日本語だけを話すようにしています。",
                  "id": "Di kelas bahasa Jepang, saya berusaha berbicara hanya dalam bahasa Jepang.",
                  "rd": "にほんごのクラスでは、にほんごだけをはなすようにしています。"
                },
                {
                  "jp": "毎食後、歯をみがくようにしています。",
                  "id": "Setiap selesai makan, saya selalu menyikat gigi.",
                  "rd": "まいしょくご、はをみがくようにしています。"
                }
              ],
              "tabel": [
                {
                  "k": "話すようにする",
                  "v": "berusaha berbicara (hanya b. Jepang)"
                },
                {
                  "k": "みがくようにする",
                  "v": "membiasakan menyikat (gigi)"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk kamus / kata kerja negatif / kata kerja bentuk bisa + ようになる",
              "arti": "menjadi bisa ~ / menjadi ~ (perubahan)",
              "explain": "Pola ini buat ngomongin <b>perubahan</b>: dulu belum bisa, sekarang jadi bisa — atau dulu begini, sekarang jadi begitu. Bisa dipakai buat kemampuan baru (話せるようになる) maupun kebiasaan yang berubah (早く寝るようになる).",
              "examples": [
                {
                  "jp": "日本語が上手に話せるようになりたいです。",
                  "id": "Saya ingin bisa berbicara bahasa Jepang dengan baik.",
                  "rd": "にほんごがじょうずにはなせるようになりたいです。"
                },
                {
                  "jp": "赤ちゃんは、1さいごろから歩くようになります。",
                  "id": "Bayi mulai bisa berjalan sekitar usia satu tahun.",
                  "rd": "あかちゃんは、1さいごろからあるくようになります。"
                },
                {
                  "jp": "父は仕事をやめてから、早く寝るようになりました。",
                  "id": "Sejak berhenti bekerja, ayah saya menjadi tidur lebih awal.",
                  "rd": "ちちはしごとをやめてから、はやくねるようになりました。"
                }
              ],
              "tabel": [
                {
                  "k": "話せるようになる",
                  "v": "menjadi bisa bicara"
                },
                {
                  "k": "歩くようになる",
                  "v": "mulai bisa berjalan"
                },
                {
                  "k": "早く寝るようになる",
                  "v": "menjadi tidur lebih awal"
                },
                {
                  "k": "飲まないようになる",
                  "v": "menjadi tidak (lagi) minum"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk kamus / kata kerja negatif + ように言う",
              "arti": "menyuruh / meminta agar ~",
              "explain": "Buat nyuruh atau minta orang melakukan sesuatu <b>secara halus</b> — jauh lebih sopan daripada perintah langsung (〜しろ). Kalau kamunya yang disuruh, pakai bentuk pasif: 〜ように言われる.",
              "examples": [
                {
                  "jp": "父にあまりお酒を飲まないように言っています。",
                  "id": "Saya selalu bilang kepada ayah agar tidak terlalu banyak minum alkohol.",
                  "rd": "ちちにあまりおさけをのまないようにいっています。"
                },
                {
                  "jp": "母から今日は早く帰るように言われました。",
                  "id": "Ibu menyuruh saya pulang lebih awal hari ini.",
                  "rd": "ははからきょうははやくかえるようにいわれました。"
                },
                {
                  "jp": "妻に、家の中ではたばこを吸わないように言われています。",
                  "id": "Istri selalu bilang agar saya tidak merokok di dalam rumah.",
                  "rd": "つまに、いえのなかではたばこをすわないようにいわれています。"
                }
              ],
              "tabel": [
                {
                  "k": "飲まないように言っています",
                  "v": "(saya) bilang agar tidak minum"
                },
                {
                  "k": "早く帰るように言われました",
                  "v": "disuruh agar pulang lebih awal"
                },
                {
                  "k": "吸わないように言われています",
                  "v": "dibilang agar tidak merokok"
                }
              ]
            },
            {
              "pattern": "〜が / 〜けれど、…",
              "arti": "pembuka kalimat (anu…)",
              "explain": "Ini <b>bukan</b> が yang artinya 'tetapi', ya — ini <b>kata pembuka</b> (前置き) sebelum kamu menyampaikan maksud utama. Sering banget dipakai di telepon atau percakapan sopan, misalnya: すみませんが、…",
              "examples": [
                {
                  "jp": "すみませんが、この辺にコンビニはありませんか。",
                  "id": "Permisi, di sekitar sini ada minimarket tidak?",
                  "rd": "すみませんが、このへんにコンビニはありませんか。"
                },
                {
                  "jp": "もしもし、こちらはA社の田中ですが、リンさんをお願いします。",
                  "id": "Halo, saya Tanaka dari perusahaan A, bisa sambungkan ke Lin?",
                  "rd": "もしもし、こちらはAしゃのたなかですが、リンさんをおねがいします。"
                },
                {
                  "jp": "映画のチケットが2枚あるんだけど、いっしょに行かない？",
                  "id": "Saya punya dua tiket bioskop, mau pergi bareng?",
                  "rd": "えいがのチケットがにまいあるんだけど、いっしょにいかない？"
                }
              ],
              "tabel": [
                {
                  "k": "すみませんが、…",
                  "v": "permisi, (anu)…"
                },
                {
                  "k": "田中ですが、…",
                  "v": "halo, saya Tanaka…"
                },
                {
                  "k": "あるんだけど、…",
                  "v": "saya punya…, mau…?"
                }
              ]
            }
          ]
        },
        {
          "type": "kanji",
          "title": "Kanji Bab 14",
          "items": [
            {
              "ch": "意",
              "kun": "",
              "on": "い",
              "id": "niat / arti",
              "note": "意志 (ishi) = kemauan"
            },
            {
              "ch": "思",
              "kun": "おもう",
              "on": "し",
              "id": "berpikir",
              "note": "思う (omou) = berpikir"
            },
            {
              "ch": "定",
              "kun": "さだめる",
              "on": "てい",
              "id": "menetapkan",
              "note": "予定 (yotei) = jadwal"
            },
            {
              "ch": "決",
              "kun": "きめる",
              "on": "けつ",
              "id": "memutuskan",
              "note": "決める (kimeru) = memutuskan"
            },
            {
              "ch": "習",
              "kun": "ならう",
              "on": "しゅう",
              "id": "belajar",
              "note": "習慣 (shuukan) = kebiasaan"
            },
            {
              "ch": "慣",
              "kun": "なれる",
              "on": "かん",
              "id": "terbiasa",
              "note": "慣れる (nareru) = menjadi terbiasa"
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Rencana Liburan",
          "lines": [
            {
              "sp": "A",
              "jp": "夏休み、何か予定がある？",
              "id": "Libur musim panas, ada rencana?"
            },
            {
              "sp": "B",
              "jp": "うん、日本に留学しようと思っているんだ。",
              "id": "Ya, aku berniat kuliah di Jepang."
            },
            {
              "sp": "A",
              "jp": "へえ、すごいね。いつから行くつもり？",
              "id": "Wah, hebat. Berencana pergi kapan?"
            },
            {
              "sp": "B",
              "jp": "来年の4月に行くつもりだよ。",
              "id": "Rencananya pergi April tahun depan."
            },
            {
              "sp": "A",
              "jp": "日本語は大丈夫？",
              "id": "Bahasa Jepangnya aman?"
            },
            {
              "sp": "B",
              "jp": "毎日勉強するようにしているから、だいぶ話せるようになったよ。",
              "id": "Karena kubiasakan belajar tiap hari, sekarang sudah lumayan bisa bicara."
            },
            {
              "sp": "A",
              "jp": "すごい！私もがんばろう。",
              "id": "Hebat! Aku juga harus semangat."
            },
            {
              "sp": "B",
              "jp": "うん、いっしょにがんばろう！",
              "id": "Ya, semangat bareng-bareng!"
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "飲みに行こう！ Bentuk Vよう di sini berarti…",
          "o": [
            "perintah kasar",
            "ajakan santai antar teman",
            "larangan",
            "niat formal"
          ],
          "a": 1,
          "explain": "Vよう = versi kasual dari Vましょう, dipakai antar teman."
        },
        {
          "q": "明日買い物に行こうと思っています。 artinya…",
          "o": [
            "Besok saya pasti belanja",
            "Besok saya berniat pergi belanja",
            "Besok saya disuruh belanja",
            "Besok saya boleh belanja"
          ],
          "a": 1,
          "explain": "Vようと思う = menyatakan niat pembicara."
        },
        {
          "q": "Bedanya 「Vようと思う」 dan 「Vつもり」…",
          "o": [
            "Tidak ada bedanya",
            "ようと思う = niat yang baru muncul; つもり = rencana yang sudah mantap",
            "ようと思う = formal; つもり = kasar",
            "ようと思う untuk orang lain"
          ],
          "a": 1,
          "explain": "ようと思う = niat baru diputuskan. つもり = rencana yang sudah dipikirkan matang."
        },
        {
          "q": "毎食後、歯をみがくようにしています。 Vようにする berarti…",
          "o": [
            "berusaha/membiasakan diri",
            "menjadi bisa",
            "menyuruh orang lain",
            "berharap"
          ],
          "a": 0,
          "explain": "ようにする = usaha sadar dari diri sendiri: saya membiasakan/berusaha agar ~."
        },
        {
          "q": "日本語が話せるようになりました。 artinya…",
          "o": [
            "Saya berusaha bicara Jepang",
            "Saya menjadi bisa bicara Jepang (perubahan)",
            "Saya disuruh bicara Jepang",
            "Saya berniat bicara Jepang"
          ],
          "a": 1,
          "explain": "ようになる = perubahan keadaan: dulu tidak bisa, sekarang bisa."
        },
        {
          "q": "母から早く帰るように言われました。 artinya…",
          "o": [
            "Ibu saya pulang cepat",
            "Saya disuruh ibu pulang cepat",
            "Saya menyuruh ibu pulang",
            "Ibu berniat pulang"
          ],
          "a": 1,
          "explain": "〜ように言われる = bentuk pasif: disuruh agar ~."
        },
        {
          "q": "すみませんが、この辺にコンビニはありませんか。 「〜が」 di sini berfungsi sebagai…",
          "o": [
            "tetapi (pertentangan)",
            "pembuka kalimat sebelum maksud utama",
            "alasan",
            "harapan"
          ],
          "a": 1,
          "explain": "〜が/けれど di awal = kata pembuka (前置き), bukan pertentangan."
        },
        {
          "q": "「Vつもりはありません」 nuansanya…",
          "o": [
            "rencana biasa",
            "penolakan yang lebih kuat",
            "niat santai",
            "harapan"
          ],
          "a": 1,
          "explain": "つもりはありません = penolakan lebih kuat daripada ないつもりです."
        },
        {
          "q": "する → bentuk Vよう adalah…",
          "o": [
            "しろう",
            "しよう",
            "する",
            "すよう"
          ],
          "a": 1,
          "explain": "する → しよう. 来る → 来よう."
        },
        {
          "q": "父にあまりお酒を飲まないように言っています。 artinya…",
          "o": [
            "Ayah menyuruh saya minum",
            "Saya selalu bilang ke ayah agar tidak terlalu banyak minum",
            "Ayah tidak mau minum",
            "Saya minum bersama ayah"
          ],
          "a": 1,
          "explain": "Vないように言う = meminta agar TIDAK melakukan ~."
        }
      ]
    },
    {
      "id": "n4-16",
      "bab": 15,
      "level": "n4",
      "title": "Saran & Permintaan Sopan",
      "desc": "Saran 〜たほうがいい, perintah santun, dan cara meminta tolong yang sopan",
      "icon": "🙏",
      "sections": [
        {
          "type": "penjelasan",
          "title": "Menasihati Tanpa Menggurui, Meminta Tanpa Memaksa",
          "body": "Bab ini soal <b>berkomunikasi dengan orang lain</b>: memberi saran dan meminta tolong — dua hal yang kalau salah pola bisa terdengar kasar!\n\n<b>1) Saran tegas:</b> <b>Vたほうがいい</b> = sebaiknya 〜 (lakukan!), <b>Vないほうがいい</b> = sebaiknya tidak 〜. Ini lebih tegas dari 〜といい/〜たらいい/〜ばいい (bab 12) yang lembut. Urutan ketegasan saran: 〜たらどう (paling lembut, bagaimana kalau…) lebih kecil dari 〜といい/〜たらいい/〜ばいい lebih kecil dari 〜たほうがいい (paling tegas). Untuk orang yang lebih tua/atasan, pakai yang lembut!\n\n<b>2) Perintah — tangga kesopanan:</b> paling kasar <b>命令形/禁止形</b> (書け！/ 書くな！ — untuk papan tanda, sorakan, atau mengutip omongan orang), lalu <b>Vなさい</b> (perintah sopan: orang tua ke anak, guru ke murid — TAPI tetap perintah, jangan ke atasan!), lalu <b>Vてください</b> (tolong 〜, standar), lalu tangga super sopan: <b>Vてくれませんか → Vてもらえませんか → Vてくださいませんか → Vていただけませんか</b> (makin ke bawah makin sopan!). Jebakan N4: yang benar <b>いただけませんか</b>, bukan いただきませんか!\n\n<b>3) Ingin orang lain berbuat sesuatu:</b> <b>Vてほしい</b> (untuk orang dekat) vs <b>Vてもらいたい / Vていただきたい</b> (lebih sopan). <b>4) V方</b> = cara 〜: stem ます + 方 (読み方, 使い方, やり方) — pola kesukaan soal N4!"
        },
        {
          "type": "kotoba",
          "title": "Kosakata Saran & Permintaan",
          "items": [
            {
              "jp": "相談",
              "r": "soudan",
              "id": "konsultasi",
              "note": "相談に乗る = mendengarkan curhat"
            },
            {
              "jp": "助かる",
              "r": "tasukaru",
              "id": "terbantu",
              "note": "助かります = sangat membantu"
            },
            {
              "jp": "頼む",
              "r": "tanomu",
              "id": "meminta / memohon",
              "note": "お願いします = mohon bantuannya"
            },
            {
              "jp": "お願い",
              "r": "onegai",
              "id": "permohonan",
              "note": "お願いがある = ada permintaan"
            },
            {
              "jp": "招待",
              "r": "shoutai",
              "id": "undangan",
              "note": "招待する = mengundang"
            },
            {
              "jp": "参加",
              "r": "sanka",
              "id": "ikut serta",
              "note": "参加する = berpartisipasi"
            },
            {
              "jp": "説明",
              "r": "setsumei",
              "id": "penjelasan",
              "note": "説明する = menjelaskan"
            },
            {
              "jp": "手伝う",
              "r": "tetsudau",
              "id": "membantu",
              "note": "手伝ってもらう = dibantu"
            },
            {
              "jp": "教える",
              "r": "oshieru",
              "id": "mengajari / memberi tahu",
              "note": "教えてほしい = ingin diajari"
            },
            {
              "jp": "教わる",
              "r": "osowaru",
              "id": "diajar",
              "note": "先生に教わる = diajar oleh guru"
            },
            {
              "jp": "禁煙",
              "r": "kinen",
              "id": "dilarang merokok",
              "note": "禁煙席 = kursi bebas rokok"
            },
            {
              "jp": "忠告",
              "r": "chuukoku",
              "id": "nasihat / peringatan",
              "note": "忠告を聞く = mendengarkan nasihat"
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Pola Saran & Permintaan Sopan",
          "items": [
            {
              "pattern": "kata kerja bentuk lampau + ほうがいい",
              "arti": "sebaiknya ~ (saran)",
              "explain": "Buat ngasih <b>saran yang tegas</b>: 'sebaiknya 〜'. Dipakai waktu kamu yakin sesuatu itu pilihan yang lebih baik buat lawan bicara. Lebih tegas daripada 〜といい/〜たらいい/〜ばいい, dan versi sopannya: 〜たほうがいいですよ.",
              "examples": [
                {
                  "jp": "わからないところは先生に聞いたほうがいいですよ。",
                  "id": "Untuk bagian yang tidak dimengerti, sebaiknya tanyakan kepada guru.",
                  "rd": "わからないところわせんせいにきいたほうがいいですよ。"
                },
                {
                  "jp": "時間がないから、タクシーで行ったほうがいいでしょう。",
                  "id": "Karena tidak ada waktu, sebaiknya naik taksi saja.",
                  "rd": "じかんがないから、タクシーでいったほうがいいでしょう。"
                },
                {
                  "jp": "かぜをひいたときは、早く寝たほうがいいですよ。",
                  "id": "Kalau sedang masuk angin, sebaiknya cepat tidur.",
                  "rd": "かぜおひいたときわ、はやくねたほうがいいですよ。"
                }
              ],
              "tabel": [
                {
                  "k": "聞いたほうがいい",
                  "v": "sebaiknya bertanya"
                },
                {
                  "k": "行ったほうがいい",
                  "v": "sebaiknya pergi"
                },
                {
                  "k": "早く寝たほうがいいですよ",
                  "v": "sebaiknya cepat tidur"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk negatif + ほうがいい",
              "arti": "sebaiknya tidak ~ (saran negatif)",
              "explain": "Versi negatif dari saran: sebaiknya <b>TIDAK</b> 〜. Cocok buat menasihati orang supaya tidak melakukan sesuatu yang merugikan atau berbahaya.",
              "examples": [
                {
                  "jp": "そんなあぶないところには、行かないほうがいいよ。",
                  "id": "Sebaiknya tidak pergi ke tempat berbahaya seperti itu.",
                  "rd": "そんなあぶないところにわ、いかないほうがいいよ。"
                },
                {
                  "jp": "その川ではおよがないほうがいいでしょう。",
                  "id": "Sebaiknya tidak berenang di sungai itu.",
                  "rd": "そのかわでわおよがないほうがいいでしょう。"
                }
              ],
              "tabel": [
                {
                  "k": "行かないほうがいい",
                  "v": "sebaiknya tidak pergi"
                },
                {
                  "k": "およがないほうがいい",
                  "v": "sebaiknya tidak berenang"
                }
              ]
            },
            {
              "pattern": "命令形 / 禁止形",
              "arti": "~lah! / jangan ~! (perintah langsung)",
              "explain": "Ini bentuk perintah <b>langsung</b>. <b>命令形</b>: kelompok 1 ubah bunyi う→え (書く→書け), kelompok 2 る→ろ (食べる→食べろ), する→しろ, 来る→来い. <b>禁止形</b>: bentuk kamus + な (artinya 'jangan 〜!'). Dipakai buat: ① nada tegas (biasanya laki-laki), ② sorakan/papan tanda (がんばれ！, 止まれ！), ③ mengutip omongan orang (くれと言われた).",
              "examples": [
                {
                  "jp": "しゃべるな！静かにしろ！",
                  "id": "Jangan bicara! Diam!",
                  "rd": "しゃべるな！しずかにしろ！"
                },
                {
                  "jp": "がんばれ！",
                  "id": "Semangat!",
                  "rd": "がんばれ！"
                },
                {
                  "jp": "混ぜるな、危険！",
                  "id": "Jangan dicampur, berbahaya!",
                  "rd": "まぜるな、きけん！"
                }
              ],
              "tabel": [
                {
                  "k": "書け",
                  "v": "tulislah!"
                },
                {
                  "k": "食べろ",
                  "v": "makanlah!"
                },
                {
                  "k": "しろ",
                  "v": "lakukanlah!"
                },
                {
                  "k": "来い",
                  "v": "datanglah!"
                },
                {
                  "k": "しゃべるな",
                  "v": "jangan bicara!"
                },
                {
                  "k": "混ぜるな",
                  "v": "jangan campur!"
                }
              ]
            },
            {
              "pattern": "kata kerja (hilangkan ます) + なさい",
              "arti": "~lah (perintah sopan)",
              "explain": "Perintah yang <b>sopan</b>: bentuk ます tanpa ます + なさい (食べます→食べなさい, します→しなさい). Biasanya dipakai orang tua ke anak atau guru ke murid. Memang lebih halus dari 〜しろ, TAPI tetap bernada memerintah — <b>jangan dipakai ke atasan</b>!",
              "examples": [
                {
                  "jp": "早く起きなさい。",
                  "id": "Cepat bangun.",
                  "rd": "はやくおきなさい。"
                },
                {
                  "jp": "肉ばかり食べないで、野菜も食べなさい。",
                  "id": "Jangan hanya makan daging, makan juga sayurannya.",
                  "rd": "にくばかりたべないで、やさいもたべなさい。"
                },
                {
                  "jp": "つぎのことばを漢字で書きなさい。",
                  "id": "Tulislah kata-kata berikut dalam kanji.",
                  "rd": "つぎのことばおかんじでかきなさい。"
                }
              ],
              "tabel": [
                {
                  "k": "起きなさい",
                  "v": "bangunlah"
                },
                {
                  "k": "食べなさい",
                  "v": "makanlah"
                },
                {
                  "k": "書きなさい",
                  "v": "tulislah"
                },
                {
                  "k": "しなさい",
                  "v": "lakukanlah"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk -teくれませんか / kata kerja bentuk -teもらえませんか / kata kerja bentuk -teくださいませんか / kata kerja bentuk -teいただけませんか",
              "arti": "maukah (tolong) ~? (makin ke bawah makin sopan)",
              "explain": "Cara minta tolong yang <b>lebih sopan</b> dari Vてください. Makin ke bawah makin sopan — dan <b>Vていただけませんか adalah yang paling sopan</b>. Hati-hati jebakan N4: yang benar いただけませんか, BUKAN いただきませんか!",
              "examples": [
                {
                  "jp": "ちょっと、手伝ってくれませんか。",
                  "id": "Bisakah bantu saya sebentar?",
                  "rd": "ちょっと、てつだってくれませんか。"
                },
                {
                  "jp": "ペンを貸してくださいませんか。",
                  "id": "Bisakah saya pinjam pulpen?",
                  "rd": "ペンおかしてくださいませんか。"
                },
                {
                  "jp": "すみませんが、もう一度言っていただけませんか。",
                  "id": "Maaf, bisakah diucapkan sekali lagi?",
                  "rd": "すみませんが、もういちどいっていただけませんか。"
                }
              ],
              "tabel": [
                {
                  "k": "手伝ってくれませんか",
                  "v": "maukah membantu? (biasa)"
                },
                {
                  "k": "貸してもらえませんか",
                  "v": "bisakah meminjami? (sopan)"
                },
                {
                  "k": "貸してくださいませんか",
                  "v": "bisakah saya pinjam? (lebih sopan)"
                },
                {
                  "k": "言っていただけませんか",
                  "v": "bisakah diucapkan sekali lagi? (paling sopan)"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk -teほしい / kata kerja bentuk -teもらいたい / kata kerja bentuk -teいただきたい",
              "arti": "ingin (seseorang) ~",
              "explain": "Buat ngomongin <b>keinginanmu agar orang lain</b> melakukan sesuatu. Vてほしい dipakai ke orang dekat/keluarga; kalau ke orang lain, pakai yang lebih sopan: <b>Vてもらいたい / Vていただきたい</b>.",
              "examples": [
                {
                  "jp": "父に早く元気になってほしいです。",
                  "id": "Saya ingin ayah cepat sembuh.",
                  "rd": "ちちにはやくげんきになってほしいです。"
                },
                {
                  "jp": "私のことを忘れないでほしい。",
                  "id": "Saya ingin kamu tidak melupakan saya.",
                  "rd": "わたしのことをわすれないでほしい。"
                },
                {
                  "jp": "息子にいい大学に行ってもらいたいです。",
                  "id": "Saya ingin anak laki-laki saya masuk universitas yang bagus.",
                  "rd": "むすこにいいだいがくにいってもらいたいです。"
                }
              ],
              "tabel": [
                {
                  "k": "元気になってほしい",
                  "v": "ingin (dia) cepat sembuh"
                },
                {
                  "k": "忘れないでほしい",
                  "v": "ingin (kamu) tidak melupakan"
                },
                {
                  "k": "行ってもらいたい",
                  "v": "ingin (dia) pergi"
                },
                {
                  "k": "行っていただきたい",
                  "v": "ingin (beliau) pergi (sopan)"
                }
              ]
            },
            {
              "pattern": "kata kerja bentuk -ta + ら + どうですか / いかがですか",
              "arti": "bagaimana kalau ~? (saran lembut)",
              "explain": "Ini <b>saran paling lembut</b>: 'bagaimana kalau 〜?' / 'mengapa tidak 〜?'. Aman dipakai ke orang yang lebih tua atau atasan. いかがですか adalah versi lebih sopan dari どうですか.",
              "examples": [
                {
                  "jp": "インターネットで調べたらどうですか。",
                  "id": "Bagaimana kalau cari di internet?",
                  "rd": "インターネットでしらべたらどうですか。"
                },
                {
                  "jp": "先生に聞いてみたらどうですか。",
                  "id": "Bagaimana kalau coba tanya ke guru?",
                  "rd": "せんせいにきいてみたらどうですか。"
                },
                {
                  "jp": "少し休んだらいかがですか。",
                  "id": "Bagaimana kalau istirahat sebentar?",
                  "rd": "すこしやすんだらいかがですか。"
                }
              ],
              "tabel": [
                {
                  "k": "調べたらどうですか",
                  "v": "bagaimana kalau cari…?"
                },
                {
                  "k": "聞いてみたらどうですか",
                  "v": "bagaimana kalau coba tanya…?"
                },
                {
                  "k": "休んだらいかがですか",
                  "v": "bagaimana kalau istirahat…? (lebih sopan)"
                }
              ]
            },
            {
              "pattern": "kata kerja (hilangkan ます) + 方",
              "arti": "cara ~",
              "explain": "Buat bilang <b>cara melakukan</b> sesuatu: bentuk ます tanpa ます + 方 (読み方 = cara membaca, 使い方 = cara memakai, やり方 = cara melakukan). Ini pola favorit yang sering keluar di soal N4!",
              "examples": [
                {
                  "jp": "この漢字の読み方を教えてください。",
                  "id": "Tolong beri tahu saya cara membaca kanji ini.",
                  "rd": "このかんじのよみかたおおしえてください。"
                },
                {
                  "jp": "新しいコンピューターの使い方を習いました。",
                  "id": "Saya belajar cara memakai komputer baru.",
                  "rd": "あたらしいコンピューターのつかいかたおならいました。"
                },
                {
                  "jp": "このゲームのやり方が、まだわからない。",
                  "id": "Saya masih belum tahu cara bermain game ini.",
                  "rd": "このゲームのやりかたが、まだわからない。"
                }
              ],
              "tabel": [
                {
                  "k": "読み方",
                  "v": "cara membaca"
                },
                {
                  "k": "使い方",
                  "v": "cara memakai"
                },
                {
                  "k": "やり方",
                  "v": "cara melakukan"
                }
              ]
            }
          ]
        },
        {
          "type": "kanji",
          "title": "Kanji Bab 15",
          "items": [
            {
              "ch": "願",
              "kun": "ねがう",
              "on": "がん",
              "id": "memohon / harapan",
              "note": "お願い (onegai) = permohonan"
            },
            {
              "ch": "頼",
              "kun": "たのむ",
              "on": "らい",
              "id": "meminta / mengandalkan",
              "note": "頼む (tanomu) = meminta"
            },
            {
              "ch": "勧",
              "kun": "すすめる",
              "on": "かん",
              "id": "menganjurkan",
              "note": "勧める (susumeru) = menyarankan"
            },
            {
              "ch": "方",
              "kun": "かた",
              "on": "ほう",
              "id": "cara / arah",
              "note": "読み方 (yomikata) = cara membaca"
            },
            {
              "ch": "招",
              "kun": "まねく",
              "on": "しょう",
              "id": "mengundang",
              "note": "招待 (shoutai) = undangan"
            },
            {
              "ch": "助",
              "kun": "たすける",
              "on": "じょ",
              "id": "menolong",
              "note": "助かる (tasukaru) = terbantu"
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Saran & Minta Tolong",
          "lines": [
            {
              "sp": "A",
              "jp": "頭が痛いんです。",
              "id": "Kepalaku sakit."
            },
            {
              "sp": "B",
              "jp": "それは大変ですね。早く寝たほうがいいですよ。",
              "id": "Wah, kasihan. Sebaiknya cepat tidur."
            },
            {
              "sp": "A",
              "jp": "そうですね。薬を飲んだらどうですか。",
              "id": "Ya ya. Bagaimana kalau minum obat?"
            },
            {
              "sp": "B",
              "jp": "あ、いいですね。薬の飲み方を教えてもらえませんか。",
              "id": "Ah, bagus. Bisakah diberi tahu cara minum obatnya?"
            },
            {
              "sp": "A",
              "jp": "食後に2錠飲んでください。",
              "id": "Minum 2 tablet setelah makan."
            },
            {
              "sp": "B",
              "jp": "わかりました。早く元気になってほしいです。",
              "id": "Baik. Saya ingin cepat sembuh."
            },
            {
              "sp": "A",
              "jp": "無理しないでくださいね。",
              "id": "Jangan memaksakan diri ya."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "わからないところは先生に聞いたほうがいいですよ。 artinya…",
          "o": [
            "Jangan tanya ke guru",
            "Sebaiknya tanyakan ke guru",
            "Guru melarang bertanya",
            "Guru harus bertanya"
          ],
          "a": 1,
          "explain": "Vたほうがいい = saran tegas: sebaiknya ~."
        },
        {
          "q": "その川ではおよがないほうがいいでしょう。 artinya…",
          "o": [
            "Sebaiknya berenang di sungai itu",
            "Sebaiknya tidak berenang di sungai itu",
            "Dilarang total berenang",
            "Harus berenang"
          ],
          "a": 1,
          "explain": "Vないほうがいい = sebaiknya TIDAK ~."
        },
        {
          "q": "書く → bentuk perintah (命令形) adalah…",
          "o": [
            "書け",
            "書こう",
            "書けろ",
            "書くな"
          ],
          "a": 0,
          "explain": "Kelompok 1: bunyi う→え. 書く→書け. 書くな itu bentuk larangan!"
        },
        {
          "q": "Bentuk larangan langsung (禁止形) dari 飲む adalah…",
          "o": [
            "飲め",
            "飲もう",
            "飲むな",
            "飲みなさい"
          ],
          "a": 2,
          "explain": "禁止形 = bentuk kamus + な: 飲むな (jangan minum!). 飲め itu perintah."
        },
        {
          "q": "食べます → 食べなさい. Vなさい dipakai oleh…",
          "o": [
            "bawahan ke atasan",
            "orang tua ke anak / guru ke murid",
            "teman sebaya",
            "orang asing"
          ],
          "a": 1,
          "explain": "Vなさい = perintah sopan untuk bawahan/anak/murid. Jangan ke atasan!"
        },
        {
          "q": "Urutan dari PALING sopan: …",
          "o": [
            "〜てくれませんか → 〜ていただけませんか",
            "〜ていただけませんか → 〜てくれませんか",
            "〜てください → 〜てほしい",
            "〜てほしい → 〜てください"
          ],
          "a": 1,
          "explain": "Makin ke bawah makin sopan: くれませんか → もらえませんか → くださいませんか → いただけませんか."
        },
        {
          "q": "父に早く元気になってほしいです。 Vてほしい berarti…",
          "o": [
            "saya ingin ayah sembuh",
            "ayah ingin saya sembuh",
            "ayah menyuruh saya",
            "saya disuruh ayah"
          ],
          "a": 0,
          "explain": "Vてほしい = SAYA ingin agar orang lain ~."
        },
        {
          "q": "インターネットで調べたらどうですか。 artinya…",
          "o": [
            "Jangan cari di internet",
            "Bagaimana kalau cari di internet?",
            "Kamu harus cari di internet",
            "Internet melarang"
          ],
          "a": 1,
          "explain": "〜たらどうですか = saran paling lembut: bagaimana kalau ~?"
        },
        {
          "q": "この漢字の___を教えてください。(cara membaca kanji ini)",
          "o": [
            "読み方",
            "書き方",
            "話し方",
            "使い方"
          ],
          "a": 0,
          "explain": "読み方 (yomikata) = cara membaca. Vます stem + 方 = cara ~."
        },
        {
          "q": "ペンを貸してくださいませんか。 tingkat kesopanannya…",
          "o": [
            "sangat kasar",
            "biasa saja",
            "sangat sopan (hormat)",
            "perintah militer"
          ],
          "a": 2,
          "explain": "〜てくださいませんか = bentuk permintaan yang sangat sopan."
        }
      ]
    },
    {
      "id": "n4-17",
      "bab": 16,
      "level": "n4",
      "title": "Kata Penghubung",
      "desc": "Jembatan antar kalimat: それに・だから・ところが・そして・〜ても・形容詞+さ",
      "icon": "🔗",
      "sections": [
        {
          "type": "penjelasan",
          "title": "Lem Antar Kalimat: Kata Penghubung",
          "body": "Bayangkan kamu bercerita: \"Restoran itu enak.\" Titik. \"Harganya murah.\" Titik. Kaku, kan? Bahasa Jepang yang alami butuh LEM antar kalimat — namanya <b>接続詞</b> (setsuzokushi, kata penghubung). Bab ini merangkum semua penghubung wajib N4.\n\n<b>1. Penambahan (+):</b> <b>それに</b> (selain itu) dan <b>そのうえ</b> (ditambah lagi) menambah info: この店の料理はおいしい。<b>それに</b>、ねだんも安い. Bedanya: そのうえ lebih formal dan bernuansa \"lebih dari itu\" (sering untuk hal ekstrem). Urutan santai ke formal: それから (setelah itu) → そして (lalu).\n\n<b>2. Sebab-akibat (panah):</b> <b>それで</b> (makanya) dan <b>だから</b> (karena itu). 電車で事故があった。<b>それで</b>、ちこくした. だから nuansanya lebih tegas dan emosional — hati-hati memakainya ke atasan!\n\n<b>3. Pertentangan TAK TERDUGA (!):</b> <b>ところが</b> = \"tetapi TERNYATA\". Dipakai saat hasil atau fakta BERBEDA dari ekspektasi: 朝ははれていた。<b>ところが</b>、昼から急に雨が降ってきた. Jangan tertukar dengan けれども・でも・しかし yang hanya menyatakan \"tetapi\" biasa.\n\n<b>4. Pola \"walaupun\":</b> <b>〜ても／でも</b> (meski ~): 高く<b>ても</b>買います. Kalau ditambah <b>kata tanya</b> (いつ・どこ・だれ・何回...), artinya jadi \"bagaimanapun / tidak peduli ~\": 何回読ん<b>でも</b>理解できません.\n\n<b>5. Trik nomina dari sifat:</b> tempel <b>さ</b> di kata sifat: 高い → <b>高さ</b> (tingginya), 便利 → <b>便利さ</b> (kepraktisannya). Khusus: いい → <b>よさ</b>. Pola ini sering keluar di JLPT N4 bagian kotoba!"
        },
        {
          "type": "kotoba",
          "title": "Kosakata Penghubung",
          "items": [
            {
              "jp": "それに",
              "r": "sore ni",
              "id": "selain itu",
              "note": "Menambah info; lebih santai dari そのうえ"
            },
            {
              "jp": "そのうえ",
              "kj": "その上",
              "r": "sono ue",
              "id": "ditambah lagi / selain itu",
              "note": "Lebih formal; nuansa \"lebih dari itu\""
            },
            {
              "jp": "それで",
              "r": "sore de",
              "id": "makanya / oleh karena itu",
              "note": "Sebab menjadi akibat"
            },
            {
              "jp": "だから",
              "r": "dakara",
              "id": "karena itu / makanya",
              "note": "Lebih tegas & kasual dari それで"
            },
            {
              "jp": "ところが",
              "r": "tokoro ga",
              "id": "tetapi ternyata",
              "note": "Hasil tak terduga; mirip 〜のに"
            },
            {
              "jp": "けれども",
              "r": "keredomo",
              "id": "tetapi (formal)",
              "note": "Bentuk kasual: けれど"
            },
            {
              "jp": "しかし",
              "r": "shikashi",
              "id": "tetapi (tulis / formal)",
              "note": "Bentuk lisan: でも"
            },
            {
              "jp": "ところで",
              "r": "tokoro de",
              "id": "ngomong-ngomong",
              "note": "Mengalihkan topik pembicaraan"
            },
            {
              "jp": "たとえば",
              "kj": "例えば",
              "r": "tatoeba",
              "id": "misalnya",
              "note": "Memberi contoh"
            },
            {
              "jp": "じゃあ",
              "r": "jaa",
              "id": "kalau begitu (kasual)",
              "note": "Bentuk sopan: それでは"
            },
            {
              "jp": "高さ",
              "kj": "高さ",
              "r": "takasa",
              "id": "tinggi (nomina)",
              "note": "高い + さ"
            },
            {
              "jp": "よさ",
              "r": "yosa",
              "id": "kebaikan (nomina)",
              "note": "いい menjadi よさ (khusus!)"
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Pola Kata Penghubung",
          "items": [
            {
              "pattern": "それに／そのうえ",
              "arti": "selain itu / ditambah lagi",
              "explain": "Kata penghubung <b>penambah info</b>: kalimat A dulu, lalu 'selain itu' ada info tambahan B. そのうえ adalah versi lebih formalnya.",
              "examples": [
                {
                  "jp": "この店の料理はおいしい。それにねだんも安い。",
                  "id": "Masakan restoran ini enak. Selain itu, harganya juga murah.",
                  "rd": "このみせのりょうりわおいしい。それにねだんもやすい。"
                },
                {
                  "jp": "山田さんは若くてきれいです。それに、頭もいいです。",
                  "id": "Yamada masih muda dan cantik. Selain itu, dia juga pintar.",
                  "rd": "やまださんはわかくてきれいです。それに、あたまもいいです。"
                },
                {
                  "jp": "きのうは雨が降っていて寒かったです。そのうえ、風も強かったです。",
                  "id": "Kemarin hujan dan dingin. Ditambah lagi, anginnya juga kencang.",
                  "rd": "きのうわあめがふっていてさむかったです。そのうえ、かぜもつよかったです。"
                }
              ],
              "tabel": [
                {
                  "k": "それに",
                  "v": "selain itu"
                },
                {
                  "k": "そのうえ",
                  "v": "ditambah lagi (lebih formal)"
                }
              ]
            },
            {
              "pattern": "それで／だから",
              "arti": "oleh karena itu / makanya",
              "explain": "Kata penghubung <b>sebab-akibat</b>: kalimat A berisi sebab atau alasan, lalu それで/だから, dan kalimat B berisi hasilnya.",
              "examples": [
                {
                  "jp": "電車で事故があった。それで、ちこくしてしまった。",
                  "id": "Ada kecelakaan di kereta. Makanya saya terlambat.",
                  "rd": "でんしゃでじこがあった。それで、ちこくしてしまった。"
                },
                {
                  "jp": "パソコンがこわれた。だから、新しいのを買った。",
                  "id": "Komputer saya rusak. Makanya saya beli yang baru.",
                  "rd": "パソコンがこわれた。だから、あたらしいのをかった。"
                }
              ],
              "tabel": [
                {
                  "k": "それで",
                  "v": "oleh karena itu / makanya"
                },
                {
                  "k": "だから",
                  "v": "makanya (lebih tegas)"
                }
              ]
            },
            {
              "pattern": "ところが",
              "arti": "tetapi (ternyata)",
              "explain": "Buat nunjukin hasil atau fakta yang <b>di luar dugaan</b> — 'eh, ternyata…'. Artinya mirip 〜のに, dan biasanya dipakai setelah rencana atau ekspektasi yang sudah dibangun.",
              "examples": [
                {
                  "jp": "きのうは、試験の日だった。ところが、病気で受けることができなかった。",
                  "id": "Kemarin adalah hari ujian. Tetapi ternyata, karena sakit saya tidak bisa ikut.",
                  "rd": "きのうわ、しけんのひだった。ところが、びょうきでうけることができなかった。"
                },
                {
                  "jp": "朝ははれていた。ところが、昼から急に雨が降ってきた。",
                  "id": "Pagi harinya cerah. Tetapi ternyata, mulai siang tiba-tiba turun hujan.",
                  "rd": "あさわはれていた。ところが、ひるからきゅうにあめがふってきた。"
                }
              ]
            },
            {
              "pattern": "kata sifat＋さ",
              "arti": "kata benda dari sifat (besarnya, tingginya...)",
              "explain": "Nempelin さ ke kata sifat bikin dia jadi <b>kata benda</b>: kata sifat-i buang い + さ, kata sifat-na langsung + さ. Ada satu yang spesial: いい → <b>よさ</b>.",
              "examples": [
                {
                  "jp": "あの山の高さはどのくらいですか。",
                  "id": "Gunung itu tingginya kira-kira berapa?",
                  "rd": "あのやまのたかさわどのくらいですか。"
                },
                {
                  "jp": "同じ大きさのダイヤモンドでも、ねだんはいろいろ違います。",
                  "id": "Meski berliannya sama besar, harganya bermacam-macam.",
                  "rd": "おなじおおきさのダイヤモンドでも、ねだんわいろいろちがいます。"
                },
                {
                  "jp": "広さよりも便利さを考えて、今のアパートを選びました。",
                  "id": "Saya memilih apartemen sekarang karena mempertimbangkan kepraktisannya daripada luasnya.",
                  "rd": "ひろさよりもべんりさおかんがえて、いまのアパートおえらびました。"
                }
              ],
              "tabel": [
                {
                  "k": "高い → 高さ",
                  "v": "tinggi (kata benda)"
                },
                {
                  "k": "大きい → 大きさ",
                  "v": "besar (kata benda)"
                },
                {
                  "k": "広い → 広さ",
                  "v": "luas (kata benda)"
                },
                {
                  "k": "便利（な） → 便利さ",
                  "v": "kepraktisan"
                },
                {
                  "k": "いい → よさ",
                  "v": "kebaikan (khusus!)"
                }
              ]
            },
            {
              "pattern": "そして・それから・けれども／でも・しかし・ところで・たとえば・それでは／じゃあ",
              "arti": "berbagai kata penghubung umum",
              "explain": "Kumpulan kata penghubung yang wajib hafal: そして (lalu), それから (setelah itu), けれども／けれど／でも／しかし (tetapi), ところで (ngomong-ngomong), たとえば (misalnya), それでは／では／じゃあ／じゃ (kalau begitu).",
              "examples": [
                {
                  "jp": "まず宿題をして、それから遊びます。",
                  "id": "Kerjakan PR dulu, setelah itu baru main.",
                  "rd": "まずしゅくだいをして、それからあそびます。"
                },
                {
                  "jp": "この店は安いけれども、あまりおいしくないです。",
                  "id": "Toko ini murah, tapi tidak terlalu enak.",
                  "rd": "このみせわやすいけれども、あまりおいしくないです。"
                },
                {
                  "jp": "ところで、週末は何をする予定ですか。",
                  "id": "Ngomong-ngomong, akhir pekan ada rencana apa?",
                  "rd": "ところで、しゅうまつわなにをするよていですか。"
                }
              ],
              "tabel": [
                {
                  "k": "そして",
                  "v": "lalu / dan"
                },
                {
                  "k": "それから",
                  "v": "setelah itu"
                },
                {
                  "k": "けれども",
                  "v": "tetapi"
                },
                {
                  "k": "ところで",
                  "v": "ngomong-ngomong"
                },
                {
                  "k": "たとえば",
                  "v": "misalnya"
                },
                {
                  "k": "じゃあ",
                  "v": "kalau begitu"
                }
              ]
            },
            {
              "pattern": "疑問詞〜ても／でも",
              "arti": "bagaimanapun / tidak peduli ~",
              "explain": "Kata tanya + ても/でも artinya 'selalu, <b>dalam keadaan apa pun</b>' — misalnya だれでも (siapa pun), いつも (kapan pun).",
              "examples": [
                {
                  "jp": "この文は何回読んでも理解できません。",
                  "id": "Kalimat ini dibaca berapa kali pun tetap tidak bisa saya pahami.",
                  "rd": "このぶんわなんかいよんでもりかいできません。"
                },
                {
                  "jp": "あのレストランはいつ行ってもこんでいます。",
                  "id": "Restoran itu selalu ramai kapan pun datang.",
                  "rd": "あのレストランわいついってもこんでいます。"
                },
                {
                  "jp": "英語を習っているが、どんなに勉強してもうまく話せない。",
                  "id": "Saya belajar bahasa Inggris, tapi seberapa pun giat belajar, tetap tidak bisa bicara dengan lancar.",
                  "rd": "えいごおならっているが、どんなにべんきょうしてもうまくはなせない。"
                }
              ],
              "tabel": [
                {
                  "k": "何回読んでも",
                  "v": "dibaca berapa kali pun"
                },
                {
                  "k": "いつ行っても",
                  "v": "kapan pun datang"
                },
                {
                  "k": "どんなに勉強しても",
                  "v": "seberapa pun giat belajar"
                }
              ]
            },
            {
              "pattern": "〜ても／でも",
              "arti": "walaupun ~ / meski ~",
              "explain": "Buat bilang 'walaupun 〜' — menyatakan hal yang <b>berlawanan dengan harapan</b>. Rumusnya: kata kerja bentuk-te + も, kata sifat-i (buang い) + くても, kata sifat-na/kata benda + でも.",
              "examples": [
                {
                  "jp": "調べてもわからなかった。",
                  "id": "Sudah saya cari tahu, tapi tetap tidak paham.",
                  "rd": "しらべてもわからなかった。"
                },
                {
                  "jp": "パソコンは必要なので、高くても買います。",
                  "id": "Karena butuh komputer, saya akan beli meski mahal.",
                  "rd": "パソコンわひつようなので、たかくてもかいます。"
                },
                {
                  "jp": "明日雨でも、動物園に行きます。",
                  "id": "Besok walaupun hujan, saya akan pergi ke kebun binatang.",
                  "rd": "あしたあめでも、どうぶつえんにいきます。"
                }
              ],
              "tabel": [
                {
                  "k": "調べても",
                  "v": "sudah cari tahu, tapi…"
                },
                {
                  "k": "高くても",
                  "v": "meski mahal"
                },
                {
                  "k": "静かでも",
                  "v": "meski sepi / tenang"
                },
                {
                  "k": "雨でも",
                  "v": "walaupun hujan"
                }
              ]
            }
          ]
        },
        {
          "type": "kanji",
          "title": "Kanji Bab 16",
          "items": [
            {
              "ch": "結",
              "kun": "むすぶ",
              "on": "けつ",
              "id": "mengikat / mengakhiri",
              "note": "結ぶ (musubu), 結論 (ketsuron)"
            },
            {
              "ch": "場",
              "kun": "ば",
              "on": "じょう",
              "id": "tempat",
              "note": "場所 (basho), 場合 (baai)"
            },
            {
              "ch": "所",
              "kun": "ところ",
              "on": "しょ",
              "id": "tempat",
              "note": "ところ, 事務所 (jimusho)"
            },
            {
              "ch": "高",
              "kun": "たかい",
              "on": "こう",
              "id": "tinggi",
              "note": "高い (takai), 高さ (takasa)"
            },
            {
              "ch": "違",
              "kun": "ちがう",
              "on": "い",
              "id": "berbeda",
              "note": "違う (chigau)"
            },
            {
              "ch": "別",
              "kun": "わかれる",
              "on": "べつ",
              "id": "lain / berpisah",
              "note": "別に (betsu ni) = tidak terlalu"
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Merencanakan Liburan",
          "lines": [
            {
              "sp": "A",
              "jp": "今度の連休、どこかに行きませんか。",
              "id": "Libur panjang kali ini, mau pergi ke suatu tempat?"
            },
            {
              "sp": "B",
              "jp": "いいですね。海はどうですか。",
              "id": "Bagus. Bagaimana dengan laut?"
            },
            {
              "sp": "A",
              "jp": "海もいいけど、山のほうが涼しいですよ。それに、人が少ないです。",
              "id": "Laut juga bagus, tapi gunung lebih sejuk. Selain itu, orangnya lebih sedikit."
            },
            {
              "sp": "B",
              "jp": "じゃあ、山にしましょう。ところで、車で行きますか。",
              "id": "Kalau begitu, ke gunung saja. Ngomong-ngomong, naik mobil?"
            },
            {
              "sp": "A",
              "jp": "はい。朝早く出発しましょう。それから、コンビニでお弁当を買いましょう。",
              "id": "Ya. Berangkat pagi-pagi. Setelah itu, beli bekal di minimarket."
            },
            {
              "sp": "B",
              "jp": "いいですね。でも、雨が降ったらどうしますか。",
              "id": "Bagus. Tapi kalau hujan bagaimana?"
            },
            {
              "sp": "A",
              "jp": "雨でも行きますよ。何回考えても、やっぱり行きたいです。",
              "id": "Meski hujan tetap pergi. Dipikir berapa kali pun, tetap ingin pergi."
            },
            {
              "sp": "B",
              "jp": "わかりました。楽しみですね。",
              "id": "Baiklah. Tidak sabar ya."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "それに artinya…",
          "o": [
            "selain itu",
            "karena itu",
            "tetapi",
            "misalnya"
          ],
          "a": 0,
          "explain": "それに = selain itu (penambahan info)."
        },
        {
          "q": "この店の料理はおいしい。＿＿＿、ねだんも安い。",
          "o": [
            "ところが",
            "それに",
            "だから",
            "たとえば"
          ],
          "a": 1,
          "explain": "Menambah info positif → それに (selain itu)."
        },
        {
          "q": "ところが dipakai saat…",
          "o": [
            "menambah informasi",
            "hasilnya tak terduga",
            "memberi contoh",
            "mengalihkan topik"
          ],
          "a": 1,
          "explain": "ところが = \"tetapi TERNYATA\" — untuk hasil/fakta yang tidak terduga."
        },
        {
          "q": "高い + さ menjadi…",
          "o": [
            "高み",
            "高さ",
            "高く",
            "高いさ"
          ],
          "a": 1,
          "explain": "Kata sifat-i: buang い lalu + さ → 高さ."
        },
        {
          "q": "いい + さ (bentuk khusus) menjadi…",
          "o": [
            "いいさ",
            "いさ",
            "よさ",
            "よくさ"
          ],
          "a": 2,
          "explain": "Khusus: いい berubah menjadi よさ. Ini jebakan klasik!"
        },
        {
          "q": "この文は何回読ん＿＿＿理解できません。(Dibaca berapa kali pun tidak paham)",
          "o": [
            "でも",
            "ても",
            "から",
            "ので"
          ],
          "a": 0,
          "explain": "Kata tanya (何回) + でも = \"berapa kali pun\"."
        },
        {
          "q": "それで／だから menyatakan hubungan…",
          "o": [
            "penambahan",
            "sebab-akibat",
            "pertentangan",
            "contoh"
          ],
          "a": 1,
          "explain": "Kalimat A = sebab, それで/だから, kalimat B = hasil."
        },
        {
          "q": "Mana yang PALING kasual?",
          "o": [
            "しかし",
            "けれども",
            "でも",
            "したがって"
          ],
          "a": 2,
          "explain": "でも adalah bentuk lisan/kasual dari しかし."
        },
        {
          "q": "じゃあ adalah bentuk kasual dari…",
          "o": [
            "それでは",
            "ところで",
            "たとえば",
            "そのうえ"
          ],
          "a": 0,
          "explain": "じゃあ = bentuk kasual dari それでは (kalau begitu)."
        },
        {
          "q": "朝ははれていた。＿＿＿、昼から雨が降ってきた。",
          "o": [
            "それに",
            "ところで",
            "ところが",
            "たとえば"
          ],
          "a": 2,
          "explain": "Pagi cerah, TERNYATA siang hujan → hasil tak terduga → ところが."
        }
      ]
    },
    {
      "id": "n4-18",
      "bab": 17,
      "level": "n4",
      "title": "Kata Kerja Majemuk & Partikel Akhir",
      "desc": "すぎる・やすい・にくい・V出す・V終わる・V続ける + んです・ね・よ・かな",
      "icon": "🧩",
      "sections": [
        {
          "type": "penjelasan",
          "title": "Tempelan Ajaib & Ekor Berasa",
          "body": "Bab ini punya dua tema besar: (1) <b>kata kerja majemuk</b> — kata kerja yang ditempel di belakang kata kerja lain, dan (2) <b>partikel akhir kalimat</b> — ekor kecil yang mengubah \"rasa\" kalimat.\n\n<b>Kata kerja majemuk:</b> polanya selalu sama: <b>stem bentuk-ます + kata kerja ke-2</b>. 飲み<b>すぎる</b> (minum berlebihan), 書き<b>やすい</b> (mudah ditulis), 読み<b>にくい</b> (sulit dibaca), 降り<b>出す</b> (mulai turun), 食べ<b>終わる</b> (selesai makan), 飲み<b>続ける</b> (terus minum). Satu pola pembentukan, enam arti berbeda — hafalkan artinya, bukan rumusnya!\n\n<b>JEBAKAN TERBESAR: すぎる.</b> すぎる artinya \"terlalu\", dan SELALU bernuansa <b>negatif / berlebihan</b>. 食べすぎた = \"kebanyakan makan (sampai sakit)\", BUKAN \"makan banyak-banyak (enak)\". Kalau mau bilang \"sangat\", pakai とても atau すごく, bukan すぎる!\n\n<b>Partikel akhir = rasa pembicara.</b> <b>んです</b> menjelaskan alasan atau keadaan (どうして休んだんですか — \"kenapa tidak masuk? [minta penjelasan]\"). <b>ね</b> mengajak setuju, <b>よ</b> memberi info baru atau penekanan, <b>なあ</b> ungkapan kagum, <b>かな／かしら</b> menyatakan keraguan. Trik manis: <b>かな + bentuk negatif</b> = harapan! 早く夏休みが来ないかなあ = \"semoga libur musim panas cepat datang\"."
        },
        {
          "type": "kotoba",
          "title": "Kosakata Majemuk & Partikel",
          "items": [
            {
              "jp": "飲みすぎ",
              "kj": "飲み過ぎ",
              "r": "nomi sugi",
              "id": "minum berlebihan",
              "note": "\"Terlalu\" selalu bernuansa negatif!"
            },
            {
              "jp": "食べすぎ",
              "kj": "食べ過ぎ",
              "r": "tabe sugi",
              "id": "kebanyakan makan",
              "note": "食べすぎて、おなかがいたい"
            },
            {
              "jp": "わかりやすい",
              "kj": "分かり易い",
              "r": "wakariyasui",
              "id": "mudah dipahami",
              "note": "V + やすい"
            },
            {
              "jp": "書きやすい",
              "kj": "書き易い",
              "r": "kakiyasui",
              "id": "mudah ditulis",
              "note": "このペンは書きやすい"
            },
            {
              "jp": "読みにくい",
              "kj": "読み難い",
              "r": "yominikui",
              "id": "sulit dibaca",
              "note": "V + にくい"
            },
            {
              "jp": "降り出す",
              "kj": "降り出す",
              "r": "furidasu",
              "id": "mulai turun (hujan)",
              "note": "Bernuansa tiba-tiba"
            },
            {
              "jp": "泣き出す",
              "kj": "泣き出す",
              "r": "nakidasu",
              "id": "mulai menangis",
              "note": "赤ちゃんが泣き出した"
            },
            {
              "jp": "食べ終わる",
              "kj": "食べ終わる",
              "r": "tabeowaru",
              "id": "selesai makan",
              "note": "Lawannya: 食べ始める"
            },
            {
              "jp": "続ける",
              "kj": "続ける",
              "r": "tsuzukeru",
              "id": "melanjutkan",
              "note": "飲み続ける = terus minum"
            },
            {
              "jp": "んです",
              "r": "n desu",
              "id": "(penjelas) lho",
              "note": "Menjelaskan alasan/keadaan"
            },
            {
              "jp": "かな",
              "r": "kana",
              "id": "ya… (ragu)",
              "note": "+ bentuk negatif = harapan"
            },
            {
              "jp": "かしら",
              "r": "kashira",
              "id": "ya… (ragu)",
              "note": "Umumnya dipakai perempuan"
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Pola Majemuk & Partikel Akhir",
          "items": [
            {
              "pattern": "〜すぎる",
              "arti": "terlalu …",
              "explain": "Artinya <b>keterlaluan</b> — dan ingat, pola ini SELALU bernuansa negatif. Cara bikinnya: kata kerja bentuk-ます tanpa ます + すぎる, kata sifat-i tanpa い + すぎる, kata sifat-na + すぎる.",
              "examples": [
                {
                  "jp": "このぼうしは私には小さすぎます。",
                  "id": "Topi ini terlalu kecil untukku.",
                  "rd": "このぼうしわわたしにわちいさすぎます。"
                },
                {
                  "jp": "きのう、お酒を飲みすぎて、頭がいたい。",
                  "id": "Kemarin minum terlalu banyak sampai kepalaku sakit.",
                  "rd": "きのう、おさけおのみすぎて、あたまがいたい。"
                },
                {
                  "jp": "漢字は多すぎて覚えられません。",
                  "id": "Kanji-nya terlalu banyak sampai tidak bisa dihafal.",
                  "rd": "かんじわおおすぎておぼえられません。"
                }
              ],
              "tabel": [
                {
                  "k": "小さすぎる",
                  "v": "terlalu kecil"
                },
                {
                  "k": "飲みすぎる",
                  "v": "minum terlalu banyak"
                },
                {
                  "k": "多すぎる",
                  "v": "terlalu banyak"
                }
              ]
            },
            {
              "pattern": "kata kerja dasar + やすい／にくい",
              "arti": "mudah … / sulit …",
              "explain": "Stem bentuk-ます + やすい = <b>mudah</b> melakukan ~; + にくい = <b>sulit</b> melakukan ~ (atau sulit terjadi dengan sendirinya).",
              "examples": [
                {
                  "jp": "このペンは書きやすいです。",
                  "id": "Pulpen ini mudah dipakai menulis.",
                  "rd": "このペンわがきやすいです。"
                },
                {
                  "jp": "田中先生の説明はわかりやすいです。",
                  "id": "Penjelasan Pak Tanaka mudah dipahami.",
                  "rd": "たなかせんせいのせつめいわわかりやすいです。"
                },
                {
                  "jp": "この地図は、小さくてわかりにくいです。",
                  "id": "Peta ini kecil dan sulit dipahami.",
                  "rd": "このちずわ、ちいさくてわかりにくいです。"
                }
              ],
              "tabel": [
                {
                  "k": "書きやすい",
                  "v": "mudah ditulis"
                },
                {
                  "k": "わかりやすい",
                  "v": "mudah dipahami"
                },
                {
                  "k": "わかりにくい",
                  "v": "sulit dipahami"
                }
              ]
            },
            {
              "pattern": "kata kerja (hilangkan ます) + 出す",
              "arti": "mulai … (tiba-tiba)",
              "explain": "Stem bentuk-ます + 出す artinya <b>mulai</b> melakukan sesuatu — sering dengan nuansa tiba-tiba atau spontan.",
              "examples": [
                {
                  "jp": "午後から雨が降り出しました。",
                  "id": "Mulai siang hari hujan mulai turun.",
                  "rd": "ごごからあめがふりだしました。"
                },
                {
                  "jp": "赤ちゃんが急に泣き出した。",
                  "id": "Bayi itu tiba-tiba mulai menangis.",
                  "rd": "あかちゃんがきゅうになきだした。"
                }
              ],
              "tabel": [
                {
                  "k": "降り出す",
                  "v": "mulai turun (hujan)"
                },
                {
                  "k": "泣き出す",
                  "v": "mulai menangis"
                }
              ]
            },
            {
              "pattern": "kata kerja (hilangkan ます) + 終わる",
              "arti": "selesai …",
              "explain": "Stem bentuk-ます + 終わる artinya <b>selesai</b> melakukan sesuatu. Lawannya: V始める (mulai).",
              "examples": [
                {
                  "jp": "ご飯を食べ終わるまで、待っていてください。",
                  "id": "Tolong tunggu sampai saya selesai makan.",
                  "rd": "ごはんおたべおわるまで、まっていてください。"
                },
                {
                  "jp": "宿題をやり終わったら、遊びに行きます。",
                  "id": "Setelah selesai mengerjakan PR, saya akan pergi main.",
                  "rd": "しゅくだいおやりおわったら、あそびにいきます。"
                }
              ],
              "tabel": [
                {
                  "k": "食べ終わる",
                  "v": "selesai makan"
                },
                {
                  "k": "やり終わる",
                  "v": "selesai mengerjakan"
                }
              ]
            },
            {
              "pattern": "kata kerja (hilangkan ます) + 続ける",
              "arti": "terus … / melanjutkan …",
              "explain": "Stem bentuk-ます + 続ける artinya <b>terus/meneruskan</b> melakukan sesuatu.",
              "examples": [
                {
                  "jp": "1週間、この薬を飲み続けてください。",
                  "id": "Tolong terus minum obat ini selama seminggu.",
                  "rd": "いっしゅうかん、このくすりおのみつづけてください。"
                },
                {
                  "jp": "日本語の勉強を続けています。",
                  "id": "Saya terus belajar bahasa Jepang.",
                  "rd": "にほんごのべんきょうおつづけています。"
                }
              ],
              "tabel": [
                {
                  "k": "飲み続ける",
                  "v": "terus minum"
                },
                {
                  "k": "勉強を続ける",
                  "v": "terus belajar"
                }
              ]
            },
            {
              "pattern": "〜んです／のです",
              "arti": "…(lho) — menjelaskan alasan/keadaan",
              "explain": "Dipakai waktu kamu <b>menanyakan keadaan</b> atau <b>menjelaskan alasan</b> — nuansanya seperti 'lho'. Di percakapan sehari-hari, 〜んです jauh lebih sering dipakai daripada 〜のです. Versi santainya: 〜の？/〜んだ.",
              "examples": [
                {
                  "jp": "どうしてパーティーに行かないんですか。",
                  "id": "Kenapa kamu tidak pergi ke pesta? [minta penjelasan]",
                  "rd": "どうしてパーティーにいかないんですか。"
                },
                {
                  "jp": "A「どうしたんですか。」B「ちょっと、頭がいたいんです。」",
                  "id": "A: \"Kamu kenapa?\" B: \"Kepalaku agak sakit.\"",
                  "rd": "A「どうしたんですか。」B「ちょっと、あたまがいたいんです。」"
                },
                {
                  "jp": "A「パーティーに行かないの？」B「ちょっと用事があるんだ。」",
                  "id": "A: \"Tidak pergi ke pesta?\" B: \"Ada urusan sedikit.\"",
                  "rd": "A「パーティーにいかないの？」B「ちょっとようじがあるんだ。」"
                }
              ],
              "tabel": [
                {
                  "k": "行かないんですか",
                  "v": "kenapa tidak pergi? (bertanya)"
                },
                {
                  "k": "頭がいたいんです",
                  "v": "kepalaku sakit (menjelaskan)"
                },
                {
                  "k": "用事があるんだ",
                  "v": "ada urusan (santai)"
                }
              ]
            },
            {
              "pattern": "〜なあ／〜ね／〜よ",
              "arti": "partikel rasa: kagum / setuju / penekanan",
              "explain": "<b>なあ</b> = ungkapan kagum atau luapan emosi si pembicara. <b>ね</b> = mengajak lawan bicara setuju atau minta konfirmasi. <b>よ</b> = penekanan, atau memberi info baru (bisa juga sebagai peringatan).",
              "examples": [
                {
                  "jp": "トムさんのおねえさん、きれいだなあ。",
                  "id": "Kakak perempuan Tom cantik sekali ya.",
                  "rd": "トムさんのおねえさん、きれいだなあ。"
                },
                {
                  "jp": "いい天気ですね。",
                  "id": "Cuacanya bagus ya. [mengajak setuju]",
                  "rd": "いいてんきですね。"
                },
                {
                  "jp": "漢字のテストは明日ですよ。",
                  "id": "Tes kanji besok lho. [info baru/penekanan]",
                  "rd": "かんじのテストわあしたですよ。"
                }
              ],
              "tabel": [
                {
                  "k": "きれいだなあ",
                  "v": "cantik sekali ya (kagum)"
                },
                {
                  "k": "いい天気ですね",
                  "v": "cuacanya bagus ya (ajak setuju)"
                },
                {
                  "k": "明日ですよ",
                  "v": "besok lho (penekanan / info baru)"
                }
              ]
            },
            {
              "pattern": "〜かな／かしら",
              "arti": "…ya (ragu-ragu)",
              "explain": "Buat nunjukin rasa <b>tidak yakin</b> — '…ya'. Ada triknya: kalau dipasang dengan frasa negatif, maknanya jadi <b>harapan</b> (来ないかなあ = 'semoga segera datang'). 〜かしら umumnya dipakai perempuan.",
              "examples": [
                {
                  "jp": "ここはどこかな。",
                  "id": "Ini di mana ya?",
                  "rd": "ここわどこかな。"
                },
                {
                  "jp": "早く夏休みが来ないかなあ。",
                  "id": "Semoga libur musim panas cepat datang.",
                  "rd": "はやくなつやすみがこないかなあ。"
                },
                {
                  "jp": "明日、雨が降るかしら。",
                  "id": "Besok hujan tidak ya?",
                  "rd": "あした、あめがふるかしら。"
                }
              ],
              "tabel": [
                {
                  "k": "どこかな",
                  "v": "di mana ya?"
                },
                {
                  "k": "来ないかなあ",
                  "v": "semoga segera datang (harapan)"
                },
                {
                  "k": "降るかしら",
                  "v": "hujan tidak ya? (gaya perempuan)"
                }
              ]
            }
          ]
        },
        {
          "type": "kanji",
          "title": "Kanji Bab 17",
          "items": [
            {
              "ch": "過",
              "kun": "すぎる・すごす",
              "on": "か",
              "id": "melewati / berlebihan",
              "note": "過ぎる (sugiru), 過去 (kako)"
            },
            {
              "ch": "易",
              "kun": "やさしい",
              "on": "えき・い",
              "id": "mudah",
              "note": "易しい (yasashii), 貿易 (boueki)"
            },
            {
              "ch": "難",
              "kun": "むずかしい",
              "on": "なん",
              "id": "sulit",
              "note": "難しい (muzukashii)"
            },
            {
              "ch": "出",
              "kun": "だす・でる",
              "on": "しゅつ",
              "id": "keluar",
              "note": "出す (dasu), 出発 (shuppatsu)"
            },
            {
              "ch": "終",
              "kun": "おわる",
              "on": "しゅう",
              "id": "selesai",
              "note": "終わる (owaru), 最終 (saishuu)"
            },
            {
              "ch": "続",
              "kun": "つづく",
              "on": "ぞく",
              "id": "berlanjut",
              "note": "続ける (tsuzukeru), 連続 (renzoku)"
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Kebanyakan Makan",
          "lines": [
            {
              "sp": "A",
              "jp": "おなかがいっぱいです。食べすぎました。",
              "id": "Perutku kenyang. Kebanyakan makan."
            },
            {
              "sp": "B",
              "jp": "このケーキ、食べやすいですね。もう一つ食べませんか。",
              "id": "Kue ini gampang dimakan ya. Mau satu lagi?"
            },
            {
              "sp": "A",
              "jp": "いえ、もう食べられません。ダイエットを続けているんです。",
              "id": "Tidak, sudah tidak bisa. Saya sedang terus diet, lho."
            },
            {
              "sp": "B",
              "jp": "そうなんですか。じゃあ、コーヒーでも飲みましょうよ。",
              "id": "Oh begitu ya. Kalau begitu, minum kopi saja yuk."
            },
            {
              "sp": "A",
              "jp": "いいですね。ここのコーヒーは飲みやすいですよ。",
              "id": "Bagus. Kopi di sini mudah diminum lho."
            },
            {
              "sp": "B",
              "jp": "本当ですね。おいしいなあ。",
              "id": "Benar ya. Enak sekali ya."
            },
            {
              "sp": "A",
              "jp": "明日も来ないかなあ。",
              "id": "Semoga besok bisa datang lagi ya."
            },
            {
              "sp": "B",
              "jp": "ぜひ来てくださいね。",
              "id": "Tolong datang lagi ya."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "すぎる artinya… dan nuansanya selalu…",
          "o": [
            "sangat (positif)",
            "terlalu (negatif)",
            "hampir (netral)",
            "baru saja (netral)"
          ],
          "a": 1,
          "explain": "すぎる = \"terlalu\", SELALU bernuansa negatif/berlebihan. Untuk \"sangat\", pakai とても/すごく."
        },
        {
          "q": "このぼうしは私には小さ＿＿＿ます。(Topi ini terlalu kecil)",
          "o": [
            "すぎ",
            "すぎる",
            "すぎて",
            "すぎた"
          ],
          "a": 0,
          "explain": "小さすぎます: kata sifat-i (buang い) + すぎる → bentuk sopan すぎます."
        },
        {
          "q": "やすい ditempelkan pada…",
          "o": [
            "bentuk-te",
            "bentuk-ます tanpa ます",
            "bentuk kamus",
            "bentuk lampau"
          ],
          "a": 1,
          "explain": "Rumus kata kerja majemuk: stem bentuk-ます + やすい/にくい/出す/dll."
        },
        {
          "q": "読みにくい artinya…",
          "o": [
            "mudah dibaca",
            "sulit dibaca",
            "sudah dibaca",
            "ingin dibaca"
          ],
          "a": 1,
          "explain": "にくい = sulit. 読みにくい = sulit dibaca."
        },
        {
          "q": "降り出した artinya…",
          "o": [
            "selesai hujan",
            "mulai turun (hujan)",
            "terus hujan",
            "hujan deras"
          ],
          "a": 1,
          "explain": "V出す = mulai (sering tiba-tiba). 降り出す = mulai turun."
        },
        {
          "q": "食べ終わる artinya…",
          "o": [
            "mulai makan",
            "selesai makan",
            "terus makan",
            "kebanyakan makan"
          ],
          "a": 1,
          "explain": "V終わる = selesai melakukan. Lawannya V始める."
        },
        {
          "q": "どうしてパーティーに行かない＿＿＿か。(Kenapa tidak pergi — meminta penjelasan)",
          "o": [
            "の",
            "んです",
            "なあ",
            "かな"
          ],
          "a": 1,
          "explain": "んです dipakai untuk menanyakan/menjelaskan alasan atau keadaan."
        },
        {
          "q": "雨が降っています＿＿＿。(memberi info baru ke lawan bicara)",
          "o": [
            "ね",
            "よ",
            "なあ",
            "かな"
          ],
          "a": 1,
          "explain": "よ = penekanan / memberi info baru. ね mengajak setuju."
        },
        {
          "q": "早く夏休みが来ない＿＿＿。(semoga libur cepat datang)",
          "o": [
            "かなあ",
            "ね",
            "よ",
            "んです"
          ],
          "a": 0,
          "explain": "かな + bentuk negatif = harapan. Trik manis yang sering keluar di JLPT!"
        },
        {
          "q": "かしら umumnya dipakai oleh…",
          "o": [
            "laki-laki",
            "perempuan",
            "anak-anak",
            "tulisan formal"
          ],
          "a": 1,
          "explain": "〜かしら umumnya dipakai perempuan; perempuan juga sering memakai 〜かな(あ)."
        }
      ]
    },
    {
      "id": "n4-19",
      "bab": 18,
      "level": "n4",
      "title": "Kutipan, Dugaan & Pendapat",
      "desc": "かどうか・と思う・ようだ・そうだ (2 wajah!)・でしょう・かもしれない",
      "icon": "💭",
      "sections": [
        {
          "type": "penjelasan",
          "title": "Kata Orang & Tebakan Cerdas",
          "body": "Bab ini tentang dua keterampilan penting: <b>menyampaikan info dari sumber lain</b> (kutipan) dan <b>menebak dengan cerdas</b> (dugaan). Keduanya langganan keluar di JLPT N4 bagian bunpou dan dokkai.\n\n<b>Kutipan:</b> <b>〜と思う</b> untuk pendapat sendiri (試験に受かったと思います). <b>〜と／って言う</b> untuk mengutip kata orang lain (って = と versi kasual). <b>かどうか</b> dan <b>kata tanya + か</b> untuk pertanyaan tak langsung: 田中さんがどこに住んでいるか知っていますか.\n\n<b>JEBAKAN JLPT KLASIK — dua wajah そうだ:</b> (1) <b>そうだ PENAMPILAN</b> = \"kelihatannya / kayaknya akan\", dibentuk dari <b>stem (bentuk-ます tanpa ます) + そうだ</b>: 雨が降り<b>そう</b>です (kelihatannya akan hujan). Khusus: いい → <b>よさそう</b>! (2) <b>そうだ KABAR</b> = \"katanya (dari orang lain)\", dibentuk dari <b>bentuk biasa + そうだ</b>: 雨が降る<b>そうです</b> (katanya akan hujan). Cara membedakan: lihat bentuk sebelum そうだ! 降りそう (stem) vs 降るそう (bentuk biasa).\n\n<b>Skala keyakinan dugaan:</b> <b>ようだ／みたいだ</b> (dugaan berdasar bukti yang dilihat), <b>でしょう／だろう</b> (dugaan pembicara, cukup yakin), <b>かもしれない</b> (kemungkinan lima puluh-lima puluh). Urutan dari paling yakin: みたいだ → でしょう → かもしれない."
        },
        {
          "type": "kotoba",
          "title": "Kosakata Kutipan & Dugaan",
          "items": [
            {
              "jp": "伝言",
              "kj": "伝言",
              "r": "dengon",
              "id": "pesan titipan",
              "note": "伝言を伝える = menyampaikan pesan"
            },
            {
              "jp": "意見",
              "kj": "意見",
              "r": "iken",
              "id": "pendapat",
              "note": "意見を言う = menyampaikan pendapat"
            },
            {
              "jp": "予想",
              "kj": "予想",
              "r": "yosou",
              "id": "perkiraan / prediksi",
              "note": "天気予報 (tenki yohou) = ramalan cuaca"
            },
            {
              "jp": "うわさ",
              "r": "uwasa",
              "id": "gosip / kabar burung",
              "note": "Biasanya ditulis hiragana"
            },
            {
              "jp": "思う",
              "kj": "思う",
              "r": "omou",
              "id": "berpikir / merasa",
              "note": "〜と思います = saya rasa"
            },
            {
              "jp": "言う",
              "kj": "言う",
              "r": "iu",
              "id": "berkata",
              "note": "〜と言います (kutipan)"
            },
            {
              "jp": "どう思いますか",
              "r": "dou omoimasu ka",
              "id": "bagaimana menurutmu?",
              "note": "Meminta pendapat lawan bicara"
            },
            {
              "jp": "みたい",
              "r": "mitai",
              "id": "seperti / kelihatannya",
              "note": "〜みたいだ = 〜ようだ versi kasual"
            },
            {
              "jp": "でしょう",
              "r": "deshou",
              "id": "mungkin (dugaan)",
              "note": "Bentuk biasa: だろう"
            },
            {
              "jp": "かもしれない",
              "r": "kamoshirenai",
              "id": "mungkin / bisa jadi",
              "note": "Kemungkinan lima puluh-lima puluh"
            },
            {
              "jp": "気のせい",
              "kj": "気のせい",
              "r": "ki no sei",
              "id": "hanya perasaan",
              "note": "気のせいかもしれません"
            },
            {
              "jp": "たぶん",
              "r": "tabun",
              "id": "mungkin",
              "note": "Sering dipasangkan dengan でしょう"
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Pola Kutipan, Dugaan & Pendapat",
          "items": [
            {
              "pattern": "〜かどうか",
              "arti": "apakah ~ atau tidak",
              "explain": "Buat menyampaikan <b>pertanyaan tak langsung</b> tentang benar-tidaknya sesuatu — 'apakah ~ atau tidak' (whether ~ or not).",
              "examples": [
                {
                  "jp": "おいしいかどうかわかりませんが、食べてみてください。",
                  "id": "Saya tidak tahu enak atau tidak, tapi silakan dicoba.",
                  "rd": "おいしいかどうかわかりませんが、たべてみてください。"
                },
                {
                  "jp": "その話が本当かどうか調べたほうがいいですよ。",
                  "id": "Sebaiknya kamu cek apakah cerita itu benar.",
                  "rd": "そのはなしがほんとうかどうかしらべたほうがいいですよ。"
                },
                {
                  "jp": "新しい学校で、友だちができるかどうか心配です。",
                  "id": "Saya khawatir bisa atau tidak punya teman di sekolah yang baru.",
                  "rd": "あたらしいがっこうで、ともだちができるかどうかしんぱいです。"
                }
              ],
              "tabel": [
                {
                  "k": "おいしいかどうか",
                  "v": "(tidak tahu) enak atau tidak"
                },
                {
                  "k": "本当かどうか",
                  "v": "(cek) benar atau tidak"
                }
              ]
            },
            {
              "pattern": "疑問詞（いつ／どこ／だれ など）〜か",
              "arti": "pertanyaan tak langsung dengan kata tanya",
              "explain": "Kata tanya (kapan, di mana, siapa, bagaimana, kenapa, dsb) + か dipakai buat menyampaikan <b>pertanyaan tak langsung</b>.",
              "examples": [
                {
                  "jp": "田中さんがどこに住んでいるか知っていますか。",
                  "id": "Apakah kamu tahu Tanaka tinggal di mana?",
                  "rd": "たなかさんがどこにすんでいるかしっていますか。"
                },
                {
                  "jp": "きのうの夜、どうやって帰ったか覚えていません。",
                  "id": "Saya tidak ingat bagaimana caranya pulang tadi malam.",
                  "rd": "きのうのよる、どうやってかえったかおぼえていません。"
                },
                {
                  "jp": "なぜ会社をやめたか教えてください。",
                  "id": "Tolong beri tahu saya kenapa kamu keluar dari perusahaan.",
                  "rd": "なぜかいしゃおやめたかおしえてください。"
                }
              ],
              "tabel": [
                {
                  "k": "どこに住んでいるか",
                  "v": "(tahu) di mana tinggal"
                },
                {
                  "k": "どうやって帰ったか",
                  "v": "(tidak ingat) bagaimana pulang"
                },
                {
                  "k": "なぜやめたか",
                  "v": "(beri tahu) kenapa keluar"
                }
              ]
            },
            {
              "pattern": "〜の",
              "arti": "nominalisasi — menggantikan kata benda",
              "explain": "Punya dua fungsi: (1) <b>pengganti kata benda</b> — orang/tempat/benda/waktu; (2) <b>mengubah kalimat jadi kata benda</b> — dalam fungsi ini, の bisa diganti dengan こと.",
              "examples": [
                {
                  "jp": "あそこでたばこをすっているのが社長です。",
                  "id": "Yang sedang merokok di sana itu adalah direktur perusahaan.",
                  "rd": "あそこでたばこおすっているのがしゃちょうです。"
                },
                {
                  "jp": "あなたがほしいのは何ですか。",
                  "id": "Apa yang kamu inginkan?",
                  "rd": "あなたがほしいのわなんですか。"
                },
                {
                  "jp": "姉はケーキを作るのが上手です。",
                  "id": "Kakak perempuan saya pandai membuat kue.",
                  "rd": "あねわケーキをつくるのがじょうずです。"
                }
              ],
              "tabel": [
                {
                  "k": "すっているのが社長",
                  "v": "yang merokok itu direktur"
                },
                {
                  "k": "ほしいのは何",
                  "v": "apa yang diinginkan"
                },
                {
                  "k": "作るのが上手",
                  "v": "pandai membuat (= こと)"
                }
              ]
            },
            {
              "pattern": "〜と／って言う",
              "arti": "kutipan langsung (bilang bahwa ~)",
              "explain": "Buat <b>mengutip perkataan orang lain</b>. <b>って</b> adalah versi lisan (kasual) dari と.",
              "examples": [
                {
                  "jp": "田中さんは明日は来ないと言っていましたよ。",
                  "id": "Katanya Tanaka besok tidak datang.",
                  "rd": "たなかさんはあしたわこないといっていましたよ。"
                },
                {
                  "jp": "天気予報で、明日は寒いと言っていました。",
                  "id": "Menurut ramalan cuaca, besok akan dingin.",
                  "rd": "てんきよほうで、あしたわさむいといっていました。"
                },
                {
                  "jp": "医者に酒は飲むなと言われました。",
                  "id": "Dokter bilang saya tidak boleh minum alkohol.",
                  "rd": "いしゃにさけわのむなといわれました。"
                }
              ],
              "tabel": [
                {
                  "k": "来ないと言っていました",
                  "v": "katanya tidak datang"
                },
                {
                  "k": "寒いと言っていました",
                  "v": "katanya akan dingin"
                },
                {
                  "k": "飲むなと言われました",
                  "v": "dibilang jangan minum"
                }
              ]
            },
            {
              "pattern": "〜と思う",
              "arti": "saya pikir ~ / saya rasa ~",
              "explain": "Buat menyatakan <b>pendapat atau isi pikiranmu</b>. Ingat bentuk negatifnya: 〜ないと思います — BUKAN 〜と思いません!",
              "examples": [
                {
                  "jp": "田中さんはもう帰ったと思います。",
                  "id": "Saya rasa Tanaka sudah pulang.",
                  "rd": "たなかさんはもうかえったとおもいます。"
                },
                {
                  "jp": "試験に受かったと思います。",
                  "id": "Saya rasa saya lulus ujian.",
                  "rd": "しけんにうかったとおもいます。"
                },
                {
                  "jp": "彼は来ないと思います。",
                  "id": "Saya rasa dia tidak akan datang.",
                  "rd": "かれわこないとおもいます。"
                }
              ],
              "tabel": [
                {
                  "k": "帰ったと思います",
                  "v": "saya rasa sudah pulang"
                },
                {
                  "k": "受かったと思います",
                  "v": "saya rasa lulus"
                },
                {
                  "k": "来ないと思います",
                  "v": "saya rasa tidak akan datang"
                }
              ]
            },
            {
              "pattern": "〜ようだ／みたいだ",
              "arti": "sepertinya / kelihatannya …",
              "explain": "Buat <b>menduga sesuatu berdasarkan bukti</b> yang kamu lihat, dengar, atau rasakan. みたいだ adalah versi kasual dari ようだ.",
              "examples": [
                {
                  "jp": "主人は最近、疲れているようです。",
                  "id": "Suamiku akhir-akhir ini kelihatannya lelah.",
                  "rd": "しゅじんわさいきん、つかれているようです。"
                },
                {
                  "jp": "道路がぬれているから、雨が降ったようですね。",
                  "id": "Karena jalanannya basah, sepertinya tadi hujan.",
                  "rd": "どうろがぬれているから、あめがふったようですね。"
                },
                {
                  "jp": "このパソコン、変です。こわれているみたいです。",
                  "id": "Komputer ini aneh. Sepertinya rusak.",
                  "rd": "このパソコン、へんです。こわれているみたいです。"
                }
              ],
              "tabel": [
                {
                  "k": "疲れているようです",
                  "v": "kelihatannya lelah"
                },
                {
                  "k": "降ったようですね",
                  "v": "sepertinya tadi hujan"
                },
                {
                  "k": "こわれているみたいです",
                  "v": "sepertinya rusak (kasual)"
                }
              ]
            },
            {
              "pattern": "〜そうだ (penampilan)",
              "arti": "kelihatannya … / kayaknya akan …",
              "explain": "<b>Wajah 1:</b> dugaan dari <b>pengamatan langsung</b> — 'kelihatannya…'. Rumusnya: <b>stem (bentuk-ます tanpa ます) + そうだ</b>. Kata sifat-na TANPA だ (元気そうな). Yang spesial: いい → <b>よさそう</b>.",
              "examples": [
                {
                  "jp": "元気そうな赤ちゃんですね。",
                  "id": "Bayi yang kelihatannya sehat ya.",
                  "rd": "げんきそうなあかちゃんですね。"
                },
                {
                  "jp": "明日は天気がよさそうですよ。",
                  "id": "Besok cuacanya kelihatannya bagus.",
                  "rd": "あしたわてんきがよさそうですよ。"
                },
                {
                  "jp": "雨が降りそうです。",
                  "id": "Kelihatannya akan hujan.",
                  "rd": "あめがふりそうです。"
                }
              ],
              "tabel": [
                {
                  "k": "元気そうな（赤ちゃん）",
                  "v": "(bayi) yang kelihatannya sehat"
                },
                {
                  "k": "よさそうです",
                  "v": "kelihatannya bagus (いい→よさ)"
                },
                {
                  "k": "降りそうです",
                  "v": "kelihatannya akan hujan"
                }
              ]
            },
            {
              "pattern": "〜そうだ (kabar dari orang lain)",
              "arti": "katanya …",
              "explain": "<b>Wajah 2:</b> info yang <b>kamu dengar dari orang lain</b> — 'katanya…', bukan hasil pengamatanmu sendiri. Rumusnya: <b>bentuk biasa + そうだ</b>. Bedakan: 降りそう (stem = kelihatannya akan turun) vs 降るそう (bentuk biasa = katanya akan turun).",
              "examples": [
                {
                  "jp": "天気予報によると、午後から雨が降るそうですよ。",
                  "id": "Menurut ramalan cuaca, katanya mulai siang akan hujan.",
                  "rd": "てんきよほうによると、ごごからあめがふるそうですよ。"
                },
                {
                  "jp": "田中さんのお父さんは元気だそうです。",
                  "id": "Katanya ayah Tanaka sehat.",
                  "rd": "たなかさんのおとうさんはげんきだそうです。"
                }
              ],
              "tabel": [
                {
                  "k": "降りそうです",
                  "v": "kelihatannya akan hujan (lihat sendiri)"
                },
                {
                  "k": "降るそうです",
                  "v": "katanya akan hujan (dengar orang)"
                },
                {
                  "k": "元気だそうです",
                  "v": "katanya sehat"
                }
              ]
            },
            {
              "pattern": "〜でしょう／だろう",
              "arti": "mungkin … / pasti …",
              "explain": "Buat menyatakan <b>dugaanmu</b> dengan rasa cukup yakin. 〜でしょう versi sopan, 〜だろう versi biasa. Maknanya sama dengan 〜と思う.",
              "examples": [
                {
                  "jp": "トムさんはたぶん試験に受かるでしょう。",
                  "id": "Tom mungkin akan lulus ujian.",
                  "rd": "トムさんはたぶんしけんにうかるでしょう。"
                },
                {
                  "jp": "弟はもうすぐ結婚するだろう。",
                  "id": "Adikku mungkin akan segera menikah.",
                  "rd": "おとうとわもうすぐけっこんするだろう。"
                }
              ],
              "tabel": [
                {
                  "k": "受かるでしょう",
                  "v": "mungkin akan lulus (sopan)"
                },
                {
                  "k": "結婚するだろう",
                  "v": "mungkin akan menikah (biasa)"
                }
              ]
            },
            {
              "pattern": "〜かもしれない",
              "arti": "mungkin … / bisa jadi …",
              "explain": "Buat bilang ada <b>kemungkinan</b> sesuatu terjadi. Tingkat keyakinannya lebih rendah dari でしょう — kira-kira lima puluh-lima puluh.",
              "examples": [
                {
                  "jp": "来年、東京に転勤になるかもしれません。",
                  "id": "Tahun depan mungkin saya dipindahtugaskan ke Tokyo.",
                  "rd": "らいねん、とうきょうにてんきんになるかもしれません。"
                },
                {
                  "jp": "寒いですね。今晩、雪が降るかもしれませんよ。",
                  "id": "Dingin ya. Malam ini mungkin turun salju.",
                  "rd": "さむいですね。こんばん、ゆきがふるかもしれませんよ。"
                },
                {
                  "jp": "どうしよう。さいふをどこかに落としたかもしれない。",
                  "id": "Aduh. Mungkin dompetku terjatuh di suatu tempat.",
                  "rd": "どうしよう。さいふおどこかにおとしたかもしれない。"
                }
              ],
              "tabel": [
                {
                  "k": "転勤になるかもしれません",
                  "v": "mungkin dipindahtugaskan"
                },
                {
                  "k": "降るかもしれません",
                  "v": "mungkin turun (salju)"
                },
                {
                  "k": "落としたかもしれない",
                  "v": "mungkin terjatuh"
                }
              ]
            }
          ]
        },
        {
          "type": "kanji",
          "title": "Kanji Bab 18",
          "items": [
            {
              "ch": "言",
              "kun": "いう・ことば",
              "on": "げん・ごん",
              "id": "berkata",
              "note": "言う (iu), 伝言 (dengon)"
            },
            {
              "ch": "思",
              "kun": "おもう",
              "on": "し",
              "id": "berpikir",
              "note": "思う (omou), 思想 (shisou)"
            },
            {
              "ch": "伝",
              "kun": "つたえる",
              "on": "でん",
              "id": "menyampaikan",
              "note": "伝える (tsutaeru), 伝言"
            },
            {
              "ch": "予",
              "kun": "あらかじめ",
              "on": "よ",
              "id": "sebelumnya",
              "note": "予想 (yosou), 予約 (yoyaku)"
            },
            {
              "ch": "想",
              "kun": "おもう",
              "on": "そう",
              "id": "membayangkan",
              "note": "感想 (kansou) = kesan"
            },
            {
              "ch": "見",
              "kun": "みる",
              "on": "けん",
              "id": "melihat",
              "note": "見る (miru), 意見 (iken)"
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Gosip Kantor",
          "lines": [
            {
              "sp": "A",
              "jp": "田中さん、知っていますか。来月結婚するそうですよ。",
              "id": "Tahu Tanaka? Katanya bulan depan menikah lho."
            },
            {
              "sp": "B",
              "jp": "本当ですか。相手はどんな人か知っていますか。",
              "id": "Benarkah? Tahu orangnya seperti apa?"
            },
            {
              "sp": "A",
              "jp": "さあ。でも、とてもきれいな人みたいですよ。",
              "id": "Entahlah. Tapi kelihatannya orang yang sangat cantik lho."
            },
            {
              "sp": "B",
              "jp": "そうですか。結婚式はいつかわかりますか。",
              "id": "Begitu ya. Tahu pestanya kapan?"
            },
            {
              "sp": "A",
              "jp": "来月の15日だと思います。たぶん、ホテルでやるでしょう。",
              "id": "Saya rasa tanggal 15 bulan depan. Mungkin diadakan di hotel."
            },
            {
              "sp": "B",
              "jp": "雨が降りそうですね。てるてるぼうずを作りましょう。",
              "id": "Kelihatannya akan hujan ya. Ayo buat boneka teru-teru."
            },
            {
              "sp": "A",
              "jp": "いい考えですね。晴れるといいですね。",
              "id": "Ide bagus. Semoga cerah ya."
            },
            {
              "sp": "B",
              "jp": "ええ、晴れるかもしれませんよ。",
              "id": "Iya, mungkin akan cerah lho."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "雨が降りそうです artinya…",
          "o": [
            "katanya akan hujan",
            "kelihatannya akan hujan",
            "pasti hujan",
            "sedang hujan"
          ],
          "a": 1,
          "explain": "降りそう = stem + そうだ (penampilan) = \"kelihatannya akan hujan\"."
        },
        {
          "q": "雨が降るそうです artinya…",
          "o": [
            "kelihatannya akan hujan",
            "katanya akan hujan",
            "sedang hujan",
            "hujan deras"
          ],
          "a": 1,
          "explain": "降るそう = bentuk biasa + そうだ (kabar) = \"katanya akan hujan\"."
        },
        {
          "q": "いい → 〜そうだ (penampilan) menjadi…",
          "o": [
            "いいそう",
            "いそう",
            "よさそう",
            "よくそう"
          ],
          "a": 2,
          "explain": "Khusus: いい berubah menjadi よさそう. Jebakan klasik!"
        },
        {
          "q": "〜かどうか dipakai untuk…",
          "o": [
            "kutipan langsung",
            "pertanyaan tak langsung ya/tidak",
            "dugaan",
            "perintah"
          ],
          "a": 1,
          "explain": "かどうか = \"apakah ~ atau tidak\" (pertanyaan tak langsung)."
        },
        {
          "q": "田中さんがどこに住んでいる＿＿＿知っていますか。",
          "o": [
            "と",
            "か",
            "の",
            "そう"
          ],
          "a": 1,
          "explain": "Kata tanya + か = pertanyaan tak langsung."
        },
        {
          "q": "って adalah bentuk kasual dari…",
          "o": [
            "と (kutipan)",
            "の",
            "か",
            "そう"
          ],
          "a": 0,
          "explain": "って = bentuk lisan/kasual dari と dalam kutipan."
        },
        {
          "q": "〜かもしれない menyatakan…",
          "o": [
            "kepastian",
            "kemungkinan",
            "perintah",
            "penyesalan"
          ],
          "a": 1,
          "explain": "かもしれない = \"mungkin/bisa jadi\" (kemungkinan 50:50)."
        },
        {
          "q": "Urutkan dari PALING yakin:",
          "o": [
            "かもしれない → でしょう → みたいだ",
            "みたいだ → でしょう → かもしれない",
            "でしょう → かもしれない → みたいだ",
            "sama saja semuanya"
          ],
          "a": 1,
          "explain": "みたいだ (bukti terlihat) lebih yakin dari でしょう, dan でしょう lebih yakin dari かもしれない."
        },
        {
          "q": "姉はケーキを作る＿＿＿上手です。(Kakak pandai membuat kue)",
          "o": [
            "の",
            "こと",
            "と",
            "か"
          ],
          "a": 0,
          "explain": "Nominalisasi dengan の: 作るのが上手です."
        },
        {
          "q": "〜ようだ／みたいだ adalah dugaan berdasar…",
          "o": [
            "kabar orang lain",
            "bukti yang dilihat/dirasakan",
            "tebakan asal",
            "perintah"
          ],
          "a": 1,
          "explain": "ようだ/みたいだ = dugaan berdasar bukti yang ada, bukan sekadar tebakan."
        }
      ]
    },
    {
      "id": "n4-8",
      "bab": 19,
      "level": "n4",
      "title": "Review Komprehensif N4",
      "desc": "Ujian akhir N4: campuran semua pola + kaiwa bisnis sederhana",
      "icon": "🏆",
      "sections": [
        {
          "type": "penjelasan",
          "title": "Peta Perang N4: Review Total",
          "body": "Selamat sampai di bab terakhir N4! Sebelum quiz final, mari petakan ulang <b>pasangan pola yang paling sering diuji</b> — karena JLPT N4 pada dasarnya adalah ujian <b>membedakan pola yang mirip</b>.\n\n<b>Kelompok 1 — Keinginan:</b> 〜たい (saya mau) vs 〜たがる (dia kelihatannya mau). Kunci: lihat SUBJEK. <b>Kelompok 2 — Tujuan:</b> 〜ために (usaha langsung, V kamus) vs 〜ように (tak langsung, V-nai/potensial). Kunci: bisakah hasilnya dikontrol langsung? <b>Kelompok 3 — Pengandaian:</b> たら (spesifik/serbaguna) vs ば (syarat umum) vs なら (menanggapi topik) vs と (akibat pasti; tanpa perintah!). <b>Kelompok 4 — Keadaan:</b> 〜ている (sedang / hasil bertahan — cek jenis kata kerja!) vs 〜てある (transitif + sengaja disiapkan).\n\n<b>Kelompok 5 — Arah aksi:</b> pasif [A]に〜される (dikenai) vs kausatif [orang]に〜させる (menyuruh) vs [orang]を〜させる (membiarkan). <b>Kelompok 6 — Hormat:</b> sonkeigo (untuk ORANG LAIN: おっしゃる・めしあがる・いらっしゃる) vs kenjougo (untuk DIRI SENDIRI: 申す・いただく・いたす・参る). Jangan pernah tertukar arahnya!\n\n<b>Strategi ujian:</b> baca soal sampai habis, garis bawahi kata kunci (subjek, partikel, bentuk perintah), lalu cocokkan dengan peta di atas. 10 soal final ini mensimulasikan soal JLPT asli — lulus 70+ berarti kamu SIAP naik ke N3!"
        },
        {
          "type": "kotoba",
          "title": "Kosakata Kunci N4",
          "items": [
            {
              "jp": "相談する",
              "kj": "相談する",
              "r": "soudan suru",
              "id": "berkonsultasi",
              "note": "相談に乗る = mendengarkan curhat"
            },
            {
              "jp": "予約する",
              "kj": "予約する",
              "r": "yoyaku suru",
              "id": "memesan / reservasi",
              "note": "予約を入れる = membuat reservasi"
            },
            {
              "jp": "変更する",
              "kj": "変更する",
              "r": "henkou suru",
              "id": "mengubah",
              "note": "予定を変更する = mengubah jadwal"
            },
            {
              "jp": "確認する",
              "kj": "確認する",
              "r": "kakunin suru",
              "id": "memastikan / mengecek",
              "note": "確認を取る = melakukan konfirmasi"
            },
            {
              "jp": "報告する",
              "kj": "報告する",
              "r": "houkoku suru",
              "id": "melaporkan",
              "note": "上司に報告する = lapor ke atasan"
            },
            {
              "jp": "連絡する",
              "kj": "連絡する",
              "r": "renraku suru",
              "id": "menghubungi",
              "note": "連絡が取れる = bisa dihubungi"
            },
            {
              "jp": "役に立つ",
              "kj": "役に立つ",
              "r": "yaku ni tatsu",
              "id": "berguna",
              "note": "お役に立てて光栄です = suatu kehormatan bisa membantu"
            },
            {
              "jp": "間に合う",
              "kj": "間に合う",
              "r": "ma ni au",
              "id": "keburu / tepat waktu",
              "note": "時間に間に合う = keburu waktu"
            },
            {
              "jp": "慣れる",
              "kj": "慣れる",
              "r": "nareru",
              "id": "terbiasa",
              "note": "生活に慣れる = terbiasa dengan kehidupan"
            },
            {
              "jp": "続ける",
              "kj": "続ける",
              "r": "tsuzukeru",
              "id": "melanjutkan",
              "note": "努力を続ける = terus berusaha"
            },
            {
              "jp": "比べる",
              "kj": "比べる",
              "r": "kuraberu",
              "id": "membandingkan",
              "note": "比べてみる = coba bandingkan"
            },
            {
              "jp": "決める",
              "kj": "決める",
              "r": "kimeru",
              "id": "memutuskan",
              "note": "予定を決める = menentukan jadwal"
            }
          ]
        },
        {
          "type": "bunpou",
          "title": "Ringkasan Pola Jebakan",
          "items": [
            {
              "pattern": "たい (saya) vs たがる (dia)",
              "arti": "ingin — cek subjeknya!",
              "explain": "Kuncinya ada di <b>subjek</b>: kalau subjeknya <b>saya/kamu (waktu bertanya)</b> → pakai 〜たい. Kalau subjeknya <b>orang ketiga</b> → pakai 〜たがる/〜たがっている.",
              "examples": [
                {
                  "jp": "私は日本へ行きたいです。",
                  "id": "Saya ingin pergi ke Jepang.",
                  "rd": "わたしわにほんえいきたいです。"
                },
                {
                  "jp": "彼は日本へ行きたがっています。",
                  "id": "Dia kelihatannya ingin pergi ke Jepang.",
                  "rd": "かれわにほんえいきたがっています。"
                }
              ],
              "tabel": [
                {
                  "k": "行きたいです",
                  "v": "saya ingin pergi"
                },
                {
                  "k": "行きたがっています",
                  "v": "dia kelihatannya ingin pergi"
                }
              ]
            },
            {
              "pattern": "ために (langsung) vs ように (tak langsung)",
              "arti": "agar/supaya — cek kendalinya!",
              "explain": "Kuncinya ada di <b>kendali</b>: kalau hasilnya <b>bisa diusahakan sendiri</b> → pakai ために. Kalau hasilnya <b>di luar kendali</b> (harapan, pencegahan) → pakai ように.",
              "examples": [
                {
                  "jp": "合格するために勉強します。",
                  "id": "Agar lulus, saya belajar (usaha langsung).",
                  "rd": "ごうかくするためにべんきょうします。"
                },
                {
                  "jp": "忘れないようにメモします。",
                  "id": "Agar tidak lupa, saya mencatat (pencegahan).",
                  "rd": "わすれないようにメモします。"
                }
              ],
              "tabel": [
                {
                  "k": "合格するために",
                  "v": "agar lulus (usaha langsung)"
                },
                {
                  "k": "忘れないように",
                  "v": "agar tidak lupa (pencegahan)"
                }
              ]
            },
            {
              "pattern": "たら / ば / なら / と — pilih sesuai konteks",
              "arti": "\"kalau\" — cek jenis hubungannya!",
              "explain": "<b>たら</b> = serbaguna, buat kondisi yang spesifik; <b>ば</b> = syarat yang umum; <b>なら</b> = menanggapi topik yang sedang dibahas; <b>と</b> = akibat yang pasti (dan ingat: と tidak boleh dipakai dengan perintah!).",
              "examples": [
                {
                  "jp": "安ければ、買います。",
                  "id": "Jika murah, saya beli (syarat umum → ば).",
                  "rd": "やすければ、かいます。"
                },
                {
                  "jp": "ボタンを押すと、開きます。",
                  "id": "Jika tombol ditekan, terbuka (pasti → と).",
                  "rd": "ボタンおおすと、ひらきます。"
                }
              ],
              "tabel": [
                {
                  "k": "〜たら",
                  "v": "kalau ~ (spesifik / serbaguna)"
                },
                {
                  "k": "〜ば",
                  "v": "jika ~ (syarat umum)"
                },
                {
                  "k": "〜なら",
                  "v": "kalau ~ (menanggapi topik)"
                },
                {
                  "k": "〜と",
                  "v": "jika ~ maka pasti… (akibat pasti)"
                }
              ]
            }
          ]
        },
        {
          "type": "kanji",
          "title": "Kanji Kunci N4 (Review)",
          "items": [
            {
              "ch": "能",
              "kun": "—",
              "on": "のう",
              "id": "kemampuan",
              "note": "可能 (kanou) = mungkin/bisa"
            },
            {
              "ch": "比",
              "kun": "くらべる",
              "on": "ひ",
              "id": "membandingkan",
              "note": "比較 (hikaku) = perbandingan"
            },
            {
              "ch": "続",
              "kun": "つづく",
              "on": "ぞく",
              "id": "berlanjut",
              "note": "続ける (tsuzukeru) = melanjutkan"
            },
            {
              "ch": "理",
              "kun": "—",
              "on": "り",
              "id": "logika / alasan",
              "note": "理由 (riyuu) = alasan"
            },
            {
              "ch": "被",
              "kun": "こうむる",
              "on": "ひ",
              "id": "menerima (akibat)",
              "note": "被害 (higai) = kerugian"
            },
            {
              "ch": "仮",
              "kun": "かり",
              "on": "か",
              "id": "andaikan",
              "note": "仮に (kari ni) = seandainya"
            },
            {
              "ch": "尊",
              "kun": "たっとい",
              "on": "そん",
              "id": "hormat",
              "note": "尊敬語 (sonkeigo) = bahasa hormat"
            },
            {
              "ch": "申",
              "kun": "もうす",
              "on": "しん",
              "id": "berkata (merendah)",
              "note": "申す (mousu) = berkata (kenjougo)"
            }
          ]
        },
        {
          "type": "kaiwa",
          "title": "Percakapan: Telepon Bisnis",
          "lines": [
            {
              "sp": "A",
              "jp": "はい、山田商事でございます。",
              "id": "Ya, di Yamada Shoji (merendah)."
            },
            {
              "sp": "B",
              "jp": "佐藤と申します。部長はいらっしゃいますか。",
              "id": "Saya Sato (merendah). Apakah kepala bagian ada (hormat)?"
            },
            {
              "sp": "A",
              "jp": "申し訳ありません、部長はただいま外出しております。",
              "id": "Mohon maaf, kepala bagian sedang keluar (merendah)."
            },
            {
              "sp": "B",
              "jp": "そうですか。では、明日また連絡いたします。",
              "id": "Oh begitu. Kalau begitu, besok saya hubungi lagi (merendah)."
            },
            {
              "sp": "A",
              "jp": "かしこまりました。お電話ありがとうございました。",
              "id": "Baik. Terima kasih atas teleponnya."
            },
            {
              "sp": "B",
              "jp": "こちらこそ、ありがとうございました。",
              "id": "Saya juga, terima kasih."
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "日本語___話せます。(Bisa bicara bahasa Jepang)",
          "o": [
            "を",
            "が",
            "に",
            "へ"
          ],
          "a": 1,
          "explain": "Review Bab 1: potensial memakai が."
        },
        {
          "q": "子供は新しいおもちゃを___。(Anak itu kelihatannya menginginkan mainan baru)",
          "o": [
            "ほしがる",
            "ほしい",
            "ほしたがる",
            "ほしがっている"
          ],
          "a": 3,
          "explain": "欲しい untuk orang ketiga → ほしがっている. (欲しがる bentuk dasarnya.)"
        },
        {
          "q": "このレストランの___あのレストランよりおいしいです。(Restoran ini LEBIH enak)",
          "o": [
            "より",
            "ほうが",
            "いちばん",
            "もっと"
          ],
          "a": 1,
          "explain": "Review Bab 2: AのほうがBより〜."
        },
        {
          "q": "部屋が掃除して___。(Kamar sudah dibersihkan [siap])",
          "o": [
            "いる",
            "ある",
            "おく",
            "みる"
          ],
          "a": 1,
          "explain": "Review Bab 3: transitif + sengaja → てある."
        },
        {
          "q": "暑い___、窓を開けてください。(Karena panas, tolong buka jendela)",
          "o": [
            "ので",
            "から",
            "ために",
            "ように"
          ],
          "a": 1,
          "explain": "Review Bab 4: perintah → から."
        },
        {
          "q": "忘れない___、メモします。(Agar tidak lupa, mencatat)",
          "o": [
            "ために",
            "ように",
            "から",
            "ので"
          ],
          "a": 1,
          "explain": "Review Bab 4: V(ない)+ように untuk pencegahan."
        },
        {
          "q": "子供___外で遊ばせる。(Membiarkan anak bermain di luar)",
          "o": [
            "に",
            "を",
            "が",
            "へ"
          ],
          "a": 1,
          "explain": "Review Bab 5: を + kausatif = membiarkan."
        },
        {
          "q": "春になると、桜が咲き___.(Kalau tiba musim semi, sakura mekar)",
          "o": [
            "ます",
            "ますか",
            "ましょう",
            "たいです"
          ],
          "a": 0,
          "explain": "Review Bab 6: と = akibat pasti; klausa utama tak boleh ajakan/keinginan."
        },
        {
          "q": "先生が___。(Guru berkata — hormat)",
          "o": [
            "申しました",
            "おっしゃいました",
            "いただきました",
            "いたしました"
          ],
          "a": 1,
          "explain": "Review Bab 7: sonkeigo dari 言う = おっしゃる."
        },
        {
          "q": "もし時間が___、来てください。(Seandainya ada waktu, datanglah)",
          "o": [
            "あったら",
            "あれば",
            "あるなら",
            "あると"
          ],
          "a": 0,
          "explain": "Review Bab 6: もし paling serasi dengan たら."
        }
      ]
    }
  ],
  "n3": [],
  "n2": [],
  "n1": []
};
