// ===== Interactive Mock Test Questions =====
// Format soal untuk simulasi ujian interaktif
// Nanti bisa dipopulate dari admin panel atau import bulk

const MOCKTEST_QUESTIONS = {
  n5: {
    vocab: {
      title: '言語知識（文字・語彙）',
      duration: 20, // menit
      questions: [
        {
          id: 1,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '私は　毎日　七時に　起きます。',
          underline: '七時',
          options: ['しちじ', 'ななじ', 'ひちじ', 'なのじ'],
          answer: 0
        },
        {
          id: 2,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '私は　川で　魚を　とりました。',
          underline: '川',
          options: ['かわ', 'みず', 'うみ', 'いけ'],
          answer: 0
        },
        {
          id: 3,
          type: 'kanji-writing',
          instruction: '＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'きのう　としょかんで　本を　よみました。',
          underline: 'よみました',
          options: ['読みました', '続みました', '貫みました', '説みました'],
          answer: 0
        },
        {
          id: 4,
          type: 'context',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'きょうは　（　　）。あしたは　日曜日です。',
          options: ['月曜日', '金曜日', '土曜日', '水曜日'],
          answer: 2
        },
        {
          id: 5,
          type: 'context',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'A：「すみません、トイレは　どこですか。」\nB：「あの　（　　）です。」',
          options: ['ところ', 'もの', 'ひと', 'こと'],
          answer: 0
        },
        {
          id: 6,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'うちの　車は　赤いです。',
          underline: '車',
          options: ['くるま', 'しゃ', 'ちゃ', 'くろま'],
          answer: 0
        },
        {
          id: 7,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '魚が　好きです。',
          underline: '魚',
          options: ['さかな', 'うお', 'ぎょ', 'ざかな'],
          answer: 0
        },
        {
          id: 8,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '山が　見えます。',
          underline: '山',
          options: ['やま', 'さん', 'せん', 'かわ'],
          answer: 0
        },
        {
          id: 9,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '川で　泳ぎます。',
          underline: '川',
          options: ['かわ', 'がわ', 'せん', 'やま'],
          answer: 0
        },
        {
          id: 10,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '天気が　いいです。',
          underline: '天気',
          options: ['てんき', 'てんぎ', 'でんき', 'あまき'],
          answer: 0
        },
        {
          id: 11,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '毎週　テニスを　します。',
          underline: '毎週',
          options: ['まいしゅう', 'まいしゅ', 'まいにち', 'まいしう'],
          answer: 0
        },
        {
          id: 12,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '家族は　四人です。',
          underline: '家族',
          options: ['かぞく', 'いえぞく', 'かぞ', 'かぞう'],
          answer: 0
        },
        {
          id: 13,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '時間が　ありません。',
          underline: '時間',
          options: ['じかん', 'じげん', 'ときかん', 'じか'],
          answer: 0
        },
        {
          id: 14,
          type: 'kanji-writing',
          instruction: '＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'みずを　飲みます。',
          underline: 'みず',
          options: ['水', '氷', '泉', '米'],
          answer: 0
        },
        {
          id: 15,
          type: 'kanji-writing',
          instruction: '＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'ひるごはんを　食べます。',
          underline: 'ひる',
          options: ['昼', '晩', '朝', '夕'],
          answer: 0
        },
        {
          id: 16,
          type: 'kanji-writing',
          instruction: '＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'よる　早く　寝ます。',
          underline: 'よる',
          options: ['夜', '昼', '朝', '夕'],
          answer: 0
        },
        {
          id: 17,
          type: 'kanji-writing',
          instruction: '＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'あめが　ふります。',
          underline: 'あめ',
          options: ['雨', '雪', '雲', '雷'],
          answer: 0
        },
        {
          id: 18,
          type: 'kanji-writing',
          instruction: '＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'はなが　きれいです。',
          underline: 'はな',
          options: ['花', '草', '木', '葉'],
          answer: 0
        },
        {
          id: 19,
          type: 'kanji-writing',
          instruction: '＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'うみで　およぎます。',
          underline: 'うみ',
          options: ['海', '池', '川', '湖'],
          answer: 0
        },
        {
          id: 20,
          type: 'kanji-writing',
          instruction: '＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'そらが　青いです。',
          underline: 'そら',
          options: ['空', '雲', '星', '月'],
          answer: 0
        },
        {
          id: 21,
          type: 'context',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'この　（　　）は　おいしいですね。',
          options: ['りょうり', 'くるま', 'かばん', 'とけい'],
          answer: 0
        },
        {
          id: 22,
          type: 'context',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'でんわばんごうは　（　　）ですか。',
          options: ['なんばん', 'いくつ', 'なん', 'どれ'],
          answer: 0
        },
        {
          id: 23,
          type: 'context',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'A：「おなまえは？」\nB：「わたしは　（　　）です。」',
          options: ['たなか', 'せんせい', 'がくせい', 'ともだち'],
          answer: 0
        },
        {
          id: 24,
          type: 'context',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'きょうは　さむいですから、（　　）を　きてください。',
          options: ['コート', 'めがね', 'とけい', 'かさ'],
          answer: 0
        },
        {
          id: 25,
          type: 'context',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'つくえの　（　　）に　本が　あります。',
          options: ['上', '下', '中', '外'],
          answer: 0
        }
      ]
    },
    grammar: {
      title: '言語知識（文法）',
      duration: 25,
      questions: [
        {
          id: 1,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: '毎朝　コーヒー（　　）飲みます。',
          options: ['を', 'が', 'に', 'で'],
          answer: 0
        },
        {
          id: 2,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: '図書館（　　）本を　借ります。',
          options: ['を', 'に', 'が', 'で'],
          answer: 3
        },
        {
          id: 3,
          type: 'sentence-order',
          instruction: '＿★＿の　ところに　入る　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'わたしは　＿＿　＿★＿　＿＿　好きです。',
          parts: ['音楽', 'を', '聞くのが', 'すき'],
          options: ['音楽', 'を', '聞くのが', 'すき'],
          answer: 2, // 聞くのが
          correctOrder: ['音楽', 'を', '聞くのが', '好きです']
        },
        {
          id: 4,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'わたし（　　）田中です。',
          options: ['は', 'が', 'を', 'に'],
          answer: 0
        },
        {
          id: 5,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'きのう　えいが（　　）見ました。',
          options: ['が', 'に', 'を', 'で'],
          answer: 2
        },
        {
          id: 6,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'ともだち（　　）いっしょに　行きました。',
          options: ['を', 'と', 'に', 'が'],
          answer: 1
        },
        {
          id: 7,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'まいばん　十時（　　）寝ます。',
          options: ['を', 'が', 'に', 'で'],
          answer: 2
        },
        {
          id: 8,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'だれ（　　）来ましたか。',
          options: ['を', 'が', 'に', 'で'],
          answer: 1
        },
        {
          id: 9,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'えきの　ちかく（　　）住んでいます。',
          options: ['を', 'が', 'に', 'で'],
          answer: 2
        },
        {
          id: 10,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'コーヒー（　　）ミルクを　入れます。',
          options: ['を', 'に', 'が', 'で'],
          answer: 1
        },
        {
          id: 11,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'しゅくだい（　　）しましたか。',
          options: ['を', 'が', 'に', 'で'],
          answer: 0
        },
        {
          id: 12,
          type: 'sentence-order',
          instruction: '＿★＿の　ところに　入る　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'わたしは　＿＿　＿★＿　＿＿　飲みます。',
          parts: ['まいあさ', 'コーヒーを', 'ぎゅうにゅうを', 'おちゃを'],
          options: ['まいあさ', 'コーヒーを', 'ぎゅうにゅうを', 'おちゃを'],
          answer: 0,
          correctOrder: ['まいあさ', 'コーヒーを', '飲みます']
        },
        {
          id: 13,
          type: 'sentence-order',
          instruction: '＿★＿の　ところに　入る　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '＿＿　＿★＿　＿＿　たべます。',
          parts: ['わたしは', 'ひるごはんを', 'あさごはんを', 'ばんごはんを'],
          options: ['わたしは', 'ひるごはんを', 'あさごはんを', 'ばんごはんを'],
          answer: 0,
          correctOrder: ['わたしは', 'ひるごはんを', 'たべます']
        },
        {
          id: 14,
          type: 'sentence-order',
          instruction: '＿★＿の　ところに　入る　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'ともだちは　＿＿　＿★＿　＿＿　きました。',
          parts: ['きのう', 'うちに', 'がっこうに', 'あした'],
          options: ['きのう', 'うちに', 'がっこうに', 'あした'],
          answer: 0,
          correctOrder: ['きのう', 'うちに', 'きました']
        },
        {
          id: 15,
          type: 'sentence-order',
          instruction: '＿★＿の　ところに　入る　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '＿＿　＿★＿　＿＿　ありますか。',
          parts: ['つくえの', 'うえに', 'したに', 'なかに'],
          options: ['つくえの', 'うえに', 'したに', 'なかに'],
          answer: 1,
          correctOrder: ['つくえの', 'うえに', 'なにが', 'ありますか']
        }
      ]
    },
    reading: {
      title: '読解',
      duration: 30,
      questions: [
        {
          id: 1,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: 'わたしは　毎朝　六時に　起きます。それから、公園を　走ります。走った　あとで、シャワーを　あびます。朝ごはんは　パンと　コーヒーです。八時に　会社へ　行きます。',
          question: 'この　人は　朝ごはんの　前に　何を　しますか。',
          options: ['会社へ　行きます', 'パンを　食べます', '公園を　走ります', 'コーヒーを　飲みます'],
          answer: 2
        },
        {
          id: 2,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: 'わたしは　毎朝　六時に　起きます。それから、公園を　走ります。走った　あとで、シャワーを　あびます。朝ごはんは　パンと　コーヒーです。八時に　会社へ　行きます。',
          question: 'この　人は　何時に　会社へ　行きますか。',
          options: ['六時に', '七時に', '八時に', '九時に'],
          answer: 2
        },
        {
          id: 3,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: 'きょうは　土曜日です。わたしは　ともだちと　デパートへ　行きました。デパートで　シャツを　買いました。シャツは　二千円でした。それから、レストランで　カレーを　食べました。カレーは　おいしかったです。',
          question: 'この　人は　デパートで　何を　買いましたか。',
          options: ['カレー', 'シャツ', 'ズボン', 'くつ'],
          answer: 1
        },
        {
          id: 4,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: 'きょうは　土曜日です。わたしは　ともだちと　デパートへ　行きました。デパートで　シャツを　買いました。シャツは　二千円でした。それから、レストランで　カレーを　食べました。カレーは　おいしかったです。',
          question: 'シャツは　いくらでしたか。',
          options: ['千円', '二千円', '三千円', '四千円'],
          answer: 1
        },
        {
          id: 5,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: 'わたしの　かぞくは　四人です。父と　母と　妹と　わたしです。父は　会社員です。母は　しゅふです。妹は　高校生です。わたしは　大学生です。妹は　テニスが　すきです。わたしは　サッカーが　すきです。',
          question: 'この　人の　かぞくは　何人ですか。',
          options: ['三人', '四人', '五人', '六人'],
          answer: 1
        },
        {
          id: 6,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: 'わたしの　かぞくは　四人です。父と　母と　妹と　わたしです。父は　会社員です。母は　しゅふです。妹は　高校生です。わたしは　大学生です。妹は　テニスが　すきです。わたしは　サッカーが　すきです。',
          question: '妹は　何が　すきですか。',
          options: ['サッカー', 'テニス', 'バスケットボール', 'やきゅう'],
          answer: 1
        },
        {
          id: 7,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: '田中さんは　まいあさ　七時に　起きます。朝ごはんを　食べて、八時に　うちを　出ます。でんしゃで　会社へ　行きます。会社は　九時から　五時までです。ひるやすみは　十二時から　一時までです。',
          question: '田中さんは　何時に　うちを　出ますか。',
          options: ['七時に', '八時に', '九時に', '十時に'],
          answer: 1
        },
        {
          id: 8,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: '田中さんは　まいあさ　七時に　起きます。朝ごはんを　食べて、八時に　うちを　出ます。でんしゃで　会社へ　行きます。会社は　九時から　五時までです。ひるやすみは　十二時から　一時までです。',
          question: 'ひるやすみは　何時から　何時までですか。',
          options: ['十一時から　十二時まで', '十二時から　一時まで', '一時から　二時まで', '九時から　五時まで'],
          answer: 1
        }
      ]
    },
    listening: {
      title: '聴解',
      duration: 30,
      questions: [
        {
          id: 1,
          type: 'task-based',
          instruction: '問題１では、まず　質問を　聞いて　ください。それから　話を　聞いて、問題用紙の　１から４の　中から、最もよいものを　一つ　えらんで　ください。',
          audio: '/audio/n5-mock-listening-q1.mp3',
          question: '男の　人は　何を　買いますか。',
          options: ['りんご', 'バナナ', 'みかん', 'いちご'],
          answer: 0,
          // Untuk development, text transcript
          transcript: '女：何か　買いますか。\n男：ええ、りんごを　三つ　ください。'
        }
      ]
    }
  },
  n4: {
    vocab: {
      title: '言語知識（文字・語彙）',
      duration: 25,
      questions: [
        {
          id: 1,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'わたしは　毎朝　六時に　起きます。',
          underline: '毎朝',
          options: ['まいあさ', 'まいさあ', 'ことあさ', 'まいちょう'],
          answer: 0
        },
        {
          id: 2,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '妹は　来年　高校生に　なります。',
          underline: '来年',
          options: ['らいねん', 'きょねん', 'らいとし', 'こんねん'],
          answer: 0
        },
        {
          id: 3,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'この　映画は　とても　有名です。',
          underline: '有名',
          options: ['ゆうめい', 'ゆめい', 'ゆうみょう', 'ゆうめ'],
          answer: 0
        },
        {
          id: 4,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '母に　電話を　かけました。',
          underline: '電話',
          options: ['でんわ', 'てんわ', 'でんは', 'でんわう'],
          answer: 0
        },
        {
          id: 5,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '子どもの　とき、友だちと　公園で　遊びました。',
          underline: '遊びました',
          options: ['あそびました', 'あそびます', 'あそんだ', 'あそびません'],
          answer: 0
        },
        {
          id: 6,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '出かける　まえに、部屋を　掃除して　ください。',
          underline: '掃除',
          options: ['そうじ', 'せいじ', 'そうじゅ', 'そうし'],
          answer: 0
        },
        {
          id: 7,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '駅まで　自転車で　行きます。',
          underline: '自転車',
          options: ['じてんしゃ', 'じでんしゃ', 'じてんじゃ', 'しでんしゃ'],
          answer: 0
        },
        {
          id: 8,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '昨日は　残業で　遅く　なりました。',
          underline: '遅く',
          options: ['おそく', 'はやく', 'おそい', 'おそ'],
          answer: 0
        },
        {
          id: 9,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '旅行の　計画を　立てました。',
          underline: '計画',
          options: ['けいかく', 'けいがく', 'けかく', 'けいか'],
          answer: 0
        },
        {
          id: 10,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '彼女は　親切な　人です。',
          underline: '親切',
          options: ['しんせつ', 'しんせち', 'しんぜつ', 'しんせつう'],
          answer: 0
        },
        {
          id: 11,
          type: 'kanji-writing',
          instruction: '＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'まどを　あけて　ください。',
          underline: 'あけて',
          options: ['開けて', '閉けて', '聞けて', '空けて'],
          answer: 0
        },
        {
          id: 12,
          type: 'kanji-writing',
          instruction: '＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'ちちは　会社で　はたらいて　います。',
          underline: 'はたらいて',
          options: ['働いて', '動いて', '働て', '動て'],
          answer: 0
        },
        {
          id: 13,
          type: 'kanji-writing',
          instruction: '＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'この　りょうりは　からいです。',
          underline: 'からい',
          options: ['辛い', '辣い', '幸い', '辞い'],
          answer: 0
        },
        {
          id: 14,
          type: 'kanji-writing',
          instruction: '＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'かれは　びょうきで　学校を　休みました。',
          underline: 'びょうき',
          options: ['病気', '病汽', '丙気', '病气'],
          answer: 0
        },
        {
          id: 15,
          type: 'kanji-writing',
          instruction: '＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'しけんに　ごうかく　しました。',
          underline: 'ごうかく',
          options: ['合格', '合各', '合同', '合恪'],
          answer: 0
        },
        {
          id: 16,
          type: 'kanji-writing',
          instruction: '＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'あたらしい　くつを　買いました。',
          underline: 'あたらしい',
          options: ['新しい', '親しい', '新し', '噺しい'],
          answer: 0
        },
        {
          id: 17,
          type: 'kanji-writing',
          instruction: '＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'ゆうびんきょくで　てがみを　出しました。',
          underline: 'ゆうびんきょく',
          options: ['郵便局', '郵便区', '郵便', '郵便届'],
          answer: 0
        },
        {
          id: 18,
          type: 'kanji-writing',
          instruction: '＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'てんきが　いいので、さんぽに　行きましょう。',
          underline: 'てんき',
          options: ['天気', '電気', '天汽', '夫気'],
          answer: 0
        },
        {
          id: 19,
          type: 'context',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'きのうは　（　　）疲れていたので、九時に　寝ました。',
          options: ['とても', 'あまり', 'ぜんぜん', 'すこしも'],
          answer: 0
        },
        {
          id: 20,
          type: 'context',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'この　レストランの　りょうりは　（　　）おいしいです。',
          options: ['とても', 'あまり', 'ぜんぜん', 'けっして'],
          answer: 0
        },
        {
          id: 21,
          type: 'context',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: '「すみません、駅は　どこですか。」「あの　角を　（　　）、右に　あります。」',
          options: ['まがって', 'わたって', 'とおって', 'あるいて'],
          answer: 0
        },
        {
          id: 22,
          type: 'context',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'かのじょは　毎日　三時間　ピアノを　れんしゅうするので、とても　（　　）です。',
          options: ['じょうず', 'へた', 'きらい', 'ふべん'],
          answer: 0
        },
        {
          id: 23,
          type: 'context',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'でんしゃの　中では、（　　）話さないで　ください。',
          options: ['大きな声で', '小さな声で', '静かに', 'ゆっくり'],
          answer: 0
        },
        {
          id: 24,
          type: 'context',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'この　もんだいは　（　　）むずかしくて、ぜんぜん　わかりません。',
          options: ['とても', 'ちょっと', 'すこし', 'あまり'],
          answer: 0
        },
        {
          id: 25,
          type: 'context',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'かれは　やくそくの　時間に　（　　）来ませんでした。',
          options: ['ぜんぜん', 'とても', 'すこし', 'ちょっと'],
          answer: 0
        }
      ]
    },
    grammar: {
      title: '言語知識（文法）',
      duration: 30,
      questions: [
        {
          id: 1,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: '毎朝、新聞を　（　　）から、ごはんを　食べます。',
          options: ['読んで', '読みて', '読むで', '読み'],
          answer: 0
        },
        {
          id: 2,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: '母は　りょうりが　（　　）です。',
          options: ['上手', '上手な', '上手に', '上手だ'],
          answer: 0
        },
        {
          id: 3,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: '雨が　（　　）ので、ピクニックは　中止です。',
          options: ['降って', '降る', '降った', '降り'],
          answer: 2
        },
        {
          id: 4,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'この　本は　図書館で　（　　）ことができます。',
          options: ['借りる', '借り', '借りて', '借ります'],
          answer: 0
        },
        {
          id: 5,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: '田中さんは　来週　国へ　（　　）そうです。',
          options: ['帰る', '帰り', '帰って', '帰ります'],
          answer: 0
        },
        {
          id: 6,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: '子どもの　とき、よく　川で　（　　）ものです。',
          options: ['泳いだ', '泳ぐ', '泳いで', '泳ぎ'],
          answer: 0
        },
        {
          id: 7,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'かぜを　ひかない　（　　）、うがいを　しましょう。',
          options: ['ように', 'ために', 'そうに', 'みたいに'],
          answer: 0
        },
        {
          id: 8,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'この　パソコンは　（　　）すぎて、持って　歩けません。',
          options: ['重', '重い', '重く', '重さ'],
          answer: 0
        },
        {
          id: 9,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: '先生に　しゅくだいを　（　　）もらいました。',
          options: ['手伝って', '手伝い', '手伝う', '手伝わせて'],
          answer: 0
        },
        {
          id: 10,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: '明日は　試験だから、今晩は　早く　（　　）ほうが　いいです。',
          options: ['寝た', '寝る', '寝て', '寝'],
          answer: 0
        },
        {
          id: 11,
          type: 'sentence-order',
          instruction: '＿★＿の　ところに　入る　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'かのじょは　＿＿　＿★＿　＿＿　＿　くれました。',
          parts: ['わたしに', '日本語', 'を', '教えて'],
          options: ['わたしに', '日本語', 'を', '教えて'],
          answer: 1,
          correctOrder: ['わたしに', '日本語', 'を', '教えて', 'くれました']
        },
        {
          id: 12,
          type: 'sentence-order',
          instruction: '＿★＿の　ところに　入る　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'この　＿＿　＿★＿　＿＿　＿　わかりません。',
          parts: ['漢字', 'の', '読み方', 'が'],
          options: ['漢字', 'の', '読み方', 'が'],
          answer: 1,
          correctOrder: ['漢字', 'の', '読み方', 'が', 'わかりません']
        },
        {
          id: 13,
          type: 'sentence-order',
          instruction: '＿★＿の　ところに　入る　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'しけんの　＿＿　＿★＿　＿＿　＿、よく　べんきょうしました。',
          parts: ['まえ', 'に', '一週間', 'の'],
          options: ['まえ', 'に', '一週間', 'の'],
          answer: 3,
          correctOrder: ['一週間', 'の', 'まえ', 'に', 'よく　べんきょうしました']
        },
        {
          id: 14,
          type: 'sentence-order',
          instruction: '＿★＿の　ところに　入る　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'かぜを　＿＿　＿★＿　＿＿　＿　やすんで　います。',
          parts: ['ひいて', 'から', '三日', '学校を'],
          options: ['ひいて', 'から', '三日', '学校を'],
          answer: 1,
          correctOrder: ['ひいて', 'から', '三日', '学校を', 'やすんで　います']
        },
        {
          id: 15,
          type: 'sentence-order',
          instruction: '＿★＿の　ところに　入る　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'この　えいがは　＿＿　＿★＿　＿＿　＿　おもしろかったです。',
          parts: ['わたしが', '思った', 'より', 'ずっと'],
          options: ['わたしが', '思った', 'より', 'ずっと'],
          answer: 1,
          correctOrder: ['わたしが', '思った', 'より', 'ずっと', 'おもしろかったです']
        }
      ]
    },
    reading: {
      title: '読解',
      duration: 40,
      questions: [
        {
          id: 1,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: 'たなかさんへ\nこんにちは、山田です。来週の　土曜日に　みんなで　ハイキングに　行きませんか。朝　九時に　駅の　前に　集まります。おべんとうと　飲みものを　持って　来て　ください。雨が　降ったら、中止に　します。参加できる人は、金曜日までに　れんらくして　ください。\n山田',
          question: 'ハイキングは　何曜日に　行きますか。',
          options: ['金曜日', '土曜日', '日曜日', '月曜日'],
          answer: 1
        },
        {
          id: 2,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: 'たなかさんへ\nこんにちは、山田です。来週の　土曜日に　みんなで　ハイキングに　行きませんか。朝　九時に　駅の　前に　集まります。おべんとうと　飲みものを　持って　来て　ください。雨が　降ったら、中止に　します。参加できる人は、金曜日までに　れんらくして　ください。\n山田',
          question: 'ハイキングに　行くとき、何を　持って　行きますか。',
          options: ['お金', 'おべんとうと　飲みもの', 'カメラ', '地図'],
          answer: 1
        },
        {
          id: 3,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: '図書館からの　お知らせ\n来月の　一日から　七日まで、図書館は　休みです。本の　へんきゃくは、八日に　なります。休みの　間も、本を　返すことは　できます。入り口の　ポストに　入れて　ください。',
          question: '図書館は　いつ　休みですか。',
          options: ['来月の　一日から　七日まで', '来月の　八日', '今月の　七日まで', '毎日'],
          answer: 0
        },
        {
          id: 4,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: '図書館からの　お知らせ\n来月の　一日から　七日まで、図書館は　休みです。本の　へんきゃくは、八日に　なります。休みの　間も、本を　返すことは　できます。入り口の　ポストに　入れて　ください。',
          question: '休みの　間、本を　返したい　ときは　どうしますか。',
          options: ['図書館の　人に　わたします', '入り口の　ポストに　入れます', '八日まで　待ちます', '返すことは　できません'],
          answer: 1
        },
        {
          id: 5,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: 'きょうは　母の　たんじょうびでした。父と　二人で　ケーキを　買いに　行きました。母は　ケーキを　見て、とても　よろこんで　いました。夜は　三人で　レストランへ　行きました。母は　「来年も　みんなで　おいわい　しましょう」と　言いました。',
          question: 'ケーキを　買いに　行ったのは　だれですか。',
          options: ['母と　父', '父と　わたし', '母と　わたし', '三人'],
          answer: 1
        },
        {
          id: 6,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: 'きょうは　母の　たんじょうびでした。父と　二人で　ケーキを　買いに　行きました。母は　ケーキを　見て、とても　よろこんで　いました。夜は　三人で　レストランへ　行きました。母は　「来年も　みんなで　おいわい　しましょう」と　言いました。',
          question: '母は　ケーキを　見て、どう　思いましたか。',
          options: ['おいしいと　思いました', 'うれしいと　思いました', 'びっくりしました', 'かなしいと　思いました'],
          answer: 1
        },
        {
          id: 7,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: 'あしたの　天気は、午前中は　くもりで、午後から　雨に　なるでしょう。かぜも　強く　なるので、外出の　ときは　気を　つけて　ください。洗たくものは、午前中に　取りこんだ　ほうが　いいでしょう。',
          question: 'あしたの　午後は　どんな　天気に　なりますか。',
          options: ['はれ', 'くもり', '雨', 'ゆき'],
          answer: 2
        },
        {
          id: 8,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: 'あしたの　天気は、午前中は　くもりで、午後から　雨に　なるでしょう。かぜも　強く　なるので、外出の　ときは　気を　つけて　ください。洗たくものは、午前中に　取りこんだ　ほうが　いいでしょう。',
          question: '洗たくものは　どう　した　ほうが　いいですか。',
          options: ['午後に　干したほうがいい', '午前中に　取りこんだほうがいい', '外に　出さないほうがいい', '洗わないほうがいい'],
          answer: 1
        }
      ]
    },
    listening: { title: '聴解', duration: 35, questions: [] }
  },
  
  // Placeholder untuk level lain (akan diisi nanti)
  n3: {
    vocab: {
      title: '言語知識（文字・語彙）',
      duration: 30,
      questions: [
        {
          id: 1,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '去年、家族で　沖縄へ　旅行しました。',
          underline: '去年',
          options: ['きょねん', 'きょうねん', 'こねん', 'きょね'],
          answer: 0
        },
        {
          id: 2,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'この　料理は　少し　辛いです。',
          underline: '辛い',
          options: ['あまい', 'からい', 'にがい', 'すっぱい'],
          answer: 1
        },
        {
          id: 3,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '駅の　近くに　新しい　店が　できました。',
          underline: '近く',
          options: ['ちかく', 'とおく', 'はやく', 'おそく'],
          answer: 0
        },
        {
          id: 4,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '彼は　毎日　三時間　勉強します。',
          underline: '毎日',
          options: ['まいにち', 'まいにじ', 'まいひ', 'まんにち'],
          answer: 0
        },
        {
          id: 5,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '妹は　ピアノを　弾くのが　上手です。',
          underline: '上手',
          options: ['じょうず', 'へた', 'うまい', 'とくい'],
          answer: 0
        },
        {
          id: 6,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '昨日は　雨が　降りました。',
          underline: '降りました',
          options: ['ふりました', 'おりました', 'くだりました', 'おちました'],
          answer: 0
        },
        {
          id: 7,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'この　川は　とても　深いです。',
          underline: '深い',
          options: ['あさい', 'ふかい', 'たかい', 'ひくい'],
          answer: 1
        },
        {
          id: 8,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '母は　台所で　料理を　作っています。',
          underline: '台所',
          options: ['だいどころ', 'たいしょ', 'だいしょ', 'たいどころ'],
          answer: 0
        },
        {
          id: 9,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '彼は　有名な　作家です。',
          underline: '有名',
          options: ['ゆうめい', 'ゆめい', 'ようめい', 'ゆうめ'],
          answer: 0
        },
        {
          id: 10,
          type: 'kanji-reading',
          instruction: '＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '彼女は　眼鏡を　かけています。',
          underline: '眼鏡',
          options: ['めがね', 'がんきょう', 'めがみ', 'がんけい'],
          answer: 0
        },
        {
          id: 11,
          type: 'kanji-writing',
          instruction: '＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'あの　ビルの　うしろに　公園が　あります。',
          underline: 'うしろ',
          options: ['後ろ', '前', '横', '上'],
          answer: 0
        },
        {
          id: 12,
          type: 'kanji-writing',
          instruction: '＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'かれは　びょうきで　がっこうを　やすみました。',
          underline: 'びょうき',
          options: ['病気', '病院', '病室', '薬局'],
          answer: 0
        },
        {
          id: 13,
          type: 'kanji-writing',
          instruction: '＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'この　へやは　ひろいです。',
          underline: 'ひろい',
          options: ['広い', '狭い', '深い', '浅い'],
          answer: 0
        },
        {
          id: 14,
          type: 'kanji-writing',
          instruction: '＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'しんぶんを　よみます。',
          underline: 'しんぶん',
          options: ['新聞', '新問', '真聞', '新文'],
          answer: 0
        },
        {
          id: 15,
          type: 'kanji-writing',
          instruction: '＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'ともだちと　えいがを　みに　いきました。',
          underline: 'えいが',
          options: ['映画', '英画', '映書', '英書'],
          answer: 0
        },
        {
          id: 16,
          type: 'kanji-writing',
          instruction: '＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'まちの　ちゅうしんに　えきが　あります。',
          underline: 'ちゅうしん',
          options: ['中心', '忠心', '沖心', '申心'],
          answer: 0
        },
        {
          id: 17,
          type: 'kanji-writing',
          instruction: '＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'かのじょは　りょうりが　じょうずです。',
          underline: 'りょうり',
          options: ['料理', '料里', '理料', '料埋'],
          answer: 0
        },
        {
          id: 18,
          type: 'kanji-writing',
          instruction: '＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'でんしゃの　なかで　ほんを　よみました。',
          underline: 'なか',
          options: ['中', '仲', '忠', '沖'],
          answer: 0
        },
        {
          id: 19,
          type: 'context',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'かぜを　ひいたので、今日は　会社を　（　　）ことに　しました。',
          options: ['休む', '休み', '休んだ', '休もう'],
          answer: 0
        },
        {
          id: 20,
          type: 'context',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'この　パソコンは　（　　）ので、とても　便利です。',
          options: ['軽い', '軽く', '軽さ', '軽'],
          answer: 0
        },
        {
          id: 21,
          type: 'context',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: '母に　プレゼントを　（　　）たいです。',
          options: ['あげ', 'もらい', 'やり', 'くれ'],
          answer: 0
        },
        {
          id: 22,
          type: 'context',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'すみません、トイレを　（　　）も　いいですか。',
          options: ['借りて', '借り', '借りる', '借ります'],
          answer: 0
        },
        {
          id: 23,
          type: 'context',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: '彼は　日本語が　とても　（　　）ので、日本の　会社で　働いています。',
          options: ['上手', '下手', '嫌い', '苦手'],
          answer: 0
        },
        {
          id: 24,
          type: 'context',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: '明日は　試験なので、今夜は　早く　（　　）つもりです。',
          options: ['寝る', '寝', '寝て', '寝よう'],
          answer: 0
        },
        {
          id: 25,
          type: 'context',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'この　店の　ケーキは　（　　）おいしいです。',
          options: ['とても', 'あまり', 'ぜんぜん', 'ちっとも'],
          answer: 0
        }
      ]
    },
    grammar: {
      title: '言語知識（文法）',
      duration: 35,
      questions: [
        {
          id: 1,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: '日本語が　上手に　なれば　なる（　　）、日本が　好きに　なります。',
          options: ['ほど', 'だけ', 'くらい', 'ばかり'],
          answer: 0
        },
        {
          id: 2,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: '彼は　病気の（　　）、学校を　休んだ。',
          options: ['ため', 'ように', 'はず', 'わけ'],
          answer: 0
        },
        {
          id: 3,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: '忘れ物を　しない（　　）、かばんを　チェックした。',
          options: ['ように', 'ために', 'はずに', 'わけに'],
          answer: 0
        },
        {
          id: 4,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: '雨が　降った（　　）、試合は　中止に　なった。',
          options: ['ため', 'ように', 'はず', 'わけ'],
          answer: 0
        },
        {
          id: 5,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: '彼は　医者に　なる（　　）、毎日　一生懸命　勉強している。',
          options: ['ために', 'ように', 'はずで', 'わけで'],
          answer: 0
        },
        {
          id: 6,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: 'この　本は　子供の（　　）書かれた　ものだ。',
          options: ['ために', 'によって', 'に対して', 'について'],
          answer: 0
        },
        {
          id: 7,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: '事故の　ことを　知ら（　　）、出かけて　しまった。',
          options: ['ないで', 'なくて', 'ないように', 'ないために'],
          answer: 0
        },
        {
          id: 8,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: '仕事が　終わら（　　）、帰る　わけには　いかない。',
          options: ['ない', 'なく', 'なかった', 'ないで'],
          answer: 0
        },
        {
          id: 9,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: '明日　雨が　降るか　降ら（　　）か、分からない。',
          options: ['ない', 'なく', 'なかった', 'ぬ'],
          answer: 0
        },
        {
          id: 10,
          type: 'grammar-fill',
          instruction: '（　　）に　何を　入れますか。１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          question: '明日の　会議には　私が　行か（　　）。',
          options: ['ざるを得ない', 'わけにはいかない', 'はずがない', 'ものか'],
          answer: 0
        },
        {
          id: 11,
          type: 'sentence-order',
          instruction: '＿★＿の　ところに　入る　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'この　写真は　＿＿　＿★＿　＿＿　撮った　ものです。',
          options: ['去年', '家族で', '京都へ', '去年に'],
          answer: 1,
          correctOrder: ['去年', '家族で', '京都へ']
        },
        {
          id: 12,
          type: 'sentence-order',
          instruction: '＿★＿の　ところに　入る　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '＿＿　＿★＿　＿＿　日本語が　上手に　なります。',
          options: ['練習', 'すれば', 'するほど', 'れんしゅう'],
          answer: 1,
          correctOrder: ['練習', 'すれば', 'するほど']
        },
        {
          id: 13,
          type: 'sentence-order',
          instruction: '＿★＿の　ところに　入る　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '彼は　＿＿　＿★＿　＿＿　学校を　休みました。',
          options: ['病気', 'の', 'ため', '病気で'],
          answer: 1,
          correctOrder: ['病気', 'の', 'ため']
        },
        {
          id: 14,
          type: 'sentence-order',
          instruction: '＿★＿の　ところに　入る　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '日本へ　＿＿　＿★＿　＿＿　三年に　なります。',
          options: ['来', 'て', '以来', '来て'],
          answer: 1,
          correctOrder: ['来', 'て', '以来']
        },
        {
          id: 15,
          type: 'sentence-order',
          instruction: '＿★＿の　ところに　入る　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '雨が　＿＿　＿★＿　＿＿　試合は　中止です。',
          options: ['降って', 'いる', 'ため', '降る'],
          answer: 1,
          correctOrder: ['降って', 'いる', 'ため']
        }
      ]
    },
    reading: {
      title: '読解',
      duration: 50,
      questions: [
        {
          id: 1,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: '山田さん\n\n来週の　金曜日、会社の　みんなで　花見を　します。場所は　上野公園です。午前十時に　公園の　入口に　集まって　ください。お弁当は　各自で　用意して　ください。雨の　場合は　中止です。中止の　ときは　朝八時までに　メールで　知らせます。\n\n鈴木',
          question: '花見は　どこで　しますか。',
          options: ['会社の　中', '上野公園', '鈴木さんの　家', 'レストラン'],
          answer: 1
        },
        {
          id: 2,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: '山田さん\n\n来週の　金曜日、会社の　みんなで　花見を　します。場所は　上野公園です。午前十時に　公園の　入口に　集まって　ください。お弁当は　各自で　用意して　ください。雨の　場合は　中止です。中止の　ときは　朝八時までに　メールで　知らせます。\n\n鈴木',
          question: '雨の　場合、どう　なりますか。',
          options: ['場所が　変わります', '時間が　変わります', '中止に　なります', 'お弁当が　出ます'],
          answer: 2
        },
        {
          id: 3,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: '今日は　新しい　仕事を　始めた　日だった。朝、会社に　着くと、まず　社長に　会った。社長は　「がんばって　ください」と　言った。仕事は　思ったより　難しかったが、同僚が　親切に　教えて　くれたので、なんとか　終わらせる　ことが　できた。明日も　がんばろうと　思う。',
          question: '社長は　何と　言いましたか。',
          options: ['おつかれさまでした', 'がんばって　ください', 'はじめまして', 'ありがとう'],
          answer: 1
        },
        {
          id: 4,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: '今日は　新しい　仕事を　始めた　日だった。朝、会社に　着くと、まず　社長に　会った。社長は　「がんばって　ください」と　言った。仕事は　思ったより　難しかったが、同僚が　親切に　教えて　くれたので、なんとか　終わらせる　ことが　できた。明日も　がんばろうと　思う。',
          question: '仕事が　終わった　理由は　何ですか。',
          options: ['仕事が　簡単だったから', '同僚が　教えて　くれたから', '社長が　手伝ったから', '早く　帰ったから'],
          answer: 1
        },
        {
          id: 5,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: '健康の　ために　大切な　ことは　三つ　あります。一つ目は　バランスの　よい　食事です。二つ目は　適度な　運動です。三つ目は　十分な　睡眠です。この　三つを　守れば、病気に　なりにくく　なります。特に　睡眠は　大切で、毎日　七時間以上　寝る　ことが　すすめられて　います。',
          question: '健康の　ために　大切な　ことは　いくつ　ありますか。',
          options: ['二つ', '三つ', '四つ', '五つ'],
          answer: 1
        },
        {
          id: 6,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: '健康の　ために　大切な　ことは　三つ　あります。一つ目は　バランスの　よい　食事です。二つ目は　適度な　運動です。三つ目は　十分な　睡眠です。この　三つを　守れば、病気に　なりにくく　なります。特に　睡眠は　大切で、毎日　七時間以上　寝る　ことが　すすめられて　います。',
          question: '睡眠に　ついて、正しい　ものは　どれですか。',
          options: ['三時間で　十分だ', '七時間以上　寝るのが　よい', '睡眠は　大切では　ない', '昼寝だけ　すれば　よい'],
          answer: 1
        },
        {
          id: 7,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: 'お母さんへ\n\nお元気ですか。東京の　生活にも　だいぶ　慣れて　きました。仕事は　忙しいですが、楽しいです。先週、日曜日に　友達と　鎌倉へ　行きました。海が　とても　きれいでした。今度　いっしょに　行きましょう。\n\n太郎',
          question: '太郎さんは　どこへ　行きましたか。',
          options: ['東京', '鎌倉', '大阪', '京都'],
          answer: 1
        },
        {
          id: 8,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: 'お母さんへ\n\nお元気ですか。東京の　生活にも　だいぶ　慣れて　きました。仕事は　忙しいですが、楽しいです。先週、日曜日に　友達と　鎌倉へ　行きました。海が　とても　きれいでした。今度　いっしょに　行きましょう。\n\n太郎',
          question: '太郎さんの　生活に　ついて、正しい　ものは　どれですか。',
          options: ['まだ　慣れて　いない', '仕事は　忙しいが　楽しい', '友達が　いない', '海が　嫌いだ'],
          answer: 1
        },
        {
          id: 9,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: '図書館からの　お知らせ\n\n来月から　図書館の　開館時間が　変わります。平日は　午前九時から　午後八時まで、土曜日と　日曜日は　午前十時から　午後六時まで　です。月曜日は　休館日ですので、気をつけて　ください。',
          question: '土曜日の　開館時間は　何時から　何時までですか。',
          options: ['午前九時から　午後八時まで', '午前十時から　午後六時まで', '午前九時から　午後六時まで', '午前十時から　午後八時まで'],
          answer: 1
        },
        {
          id: 10,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: '図書館からの　お知らせ\n\n来月から　図書館の　開館時間が　変わります。平日は　午前九時から　午後八時まで、土曜日と　日曜日は　午前十時から　午後六時まで　です。月曜日は　休館日ですので、気をつけて　ください。',
          question: '休館日は　いつですか。',
          options: ['日曜日', '土曜日', '月曜日', '金曜日'],
          answer: 2
        }
      ]
    },
    listening: { title: '聴解', duration: 40, questions: [] }
  },
  n2: { vocab: { title: '言語知識（文字・語彙・文法）', duration: 50, questions: [
        {
          id: 1,
          type: 'kanji-reading',
          instruction: '＿＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'この計画は　来年　実現する　予定だ。',
          underline: '実現',
          options: ['じつげん', 'じっけん', 'じゅげん', 'しつげん'],
          answer: 0
        },
        {
          id: 2,
          type: 'kanji-reading',
          instruction: '＿＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '彼は　会社の　発展に　大きく　貢献した。',
          underline: '貢献',
          options: ['こうけん', 'こうげん', 'こうこん', 'くうけん'],
          answer: 0
        },
        {
          id: 3,
          type: 'kanji-reading',
          instruction: '＿＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'その提案は　会議で　承認された。',
          underline: '承認',
          options: ['しょうにん', 'しょうじん', 'せいにん', 'しょうに'],
          answer: 0
        },
        {
          id: 4,
          type: 'kanji-reading',
          instruction: '＿＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'あいまいな　返事は　やめてください。',
          underline: 'あいまい',
          options: ['あいまい', 'あいまん', 'あんまい', 'あいみ'],
          answer: 0
        },
        {
          id: 5,
          type: 'kanji-reading',
          instruction: '＿＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '彼は　家族のために　多くを　犠牲にした。',
          underline: '犠牲',
          options: ['ぎせい', 'ぎせん', 'きせい', 'ぎせ'],
          answer: 0
        },
        {
          id: 6,
          type: 'kanji-reading',
          instruction: '＿＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'その技術は　代々　継承されてきた。',
          underline: '継承',
          options: ['けいしょう', 'けいじょう', 'けしょう', 'けいしょ'],
          answer: 0
        },
        {
          id: 7,
          type: 'kanji-reading',
          instruction: '＿＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '工事の　妨害に　ならないように　注意した。',
          underline: '妨害',
          options: ['ぼうがい', 'ほうがい', 'ぼうげ', 'ぼがい'],
          answer: 0
        },
        {
          id: 8,
          type: 'kanji-reading',
          instruction: '＿＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '彼は　話を　少し　誇張する　くせが　ある。',
          underline: '誇張',
          options: ['こちょう', 'こうちょう', 'こじょう', 'こちゅう'],
          answer: 0
        },
        {
          id: 9,
          type: 'kanji-reading',
          instruction: '＿＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '状況を　正確に　把握する　必要が　ある。',
          underline: '把握',
          options: ['はあく', 'はく', 'はがく', 'はやく'],
          answer: 0
        },
        {
          id: 10,
          type: 'kanji-reading',
          instruction: '＿＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '旅行中に　台風に　遭遇した。',
          underline: '遭遇',
          options: ['そうぐう', 'そうごう', 'そうくう', 'そうう'],
          answer: 0
        },
        {
          id: 11,
          type: 'kanji-reading',
          instruction: '＿＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '彼は　努力を　惜しまない　人だ。',
          underline: '惜しま',
          options: ['おしむ', 'おしま', 'おしみ', 'おしん'],
          answer: 0
        },
        {
          id: 12,
          type: 'kanji-reading',
          instruction: '＿＿の　ことばの　読み方として　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '長年の　経験で　培った　技術だ。',
          underline: '培った',
          options: ['つちかう', 'つちがう', 'つちかえ', 'どちかう'],
          answer: 0
        },
        {
          id: 13,
          type: 'kanji-writing',
          instruction: '＿＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'きげんが　悪くて　話しかけにくい。',
          underline: 'きげん',
          options: ['機嫌', '奇嫌', '機限', '幾嫌'],
          answer: 0
        },
        {
          id: 14,
          type: 'kanji-writing',
          instruction: '＿＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'ほうふな　知識を　持っている。',
          underline: 'ほうふ',
          options: ['豊富', '副富', '豊負', '奉富'],
          answer: 0
        },
        {
          id: 15,
          type: 'kanji-writing',
          instruction: '＿＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'せいしきな　手続きを　踏む　必要が　ある。',
          underline: 'せいしき',
          options: ['正式', '正識', '生式', '制式'],
          answer: 0
        },
        {
          id: 16,
          type: 'kanji-writing',
          instruction: '＿＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '時間は　じゅうぶんに　ある。',
          underline: 'じゅうぶん',
          options: ['十分', '十部', '充文', '重分'],
          answer: 0
        },
        {
          id: 17,
          type: 'kanji-writing',
          instruction: '＿＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '面接で　きんちょうした。',
          underline: 'きんちょう',
          options: ['緊張', '近張', '緊帳', '勤張'],
          answer: 0
        },
        {
          id: 18,
          type: 'kanji-writing',
          instruction: '＿＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '両親を　そんけいしている。',
          underline: 'そんけい',
          options: ['尊敬', '存敬', '尊警', '遵敬'],
          answer: 0
        },
        {
          id: 19,
          type: 'kanji-writing',
          instruction: '＿＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'けいこくを　受けた。',
          underline: 'けいこく',
          options: ['警告', '傾告', '警固', '敬告'],
          answer: 0
        },
        {
          id: 20,
          type: 'kanji-writing',
          instruction: '＿＿の　ことばを　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '彼の　言葉を　しんらいしている。',
          underline: 'しんらい',
          options: ['信頼', '心頼', '信来', '真頼'],
          answer: 0
        },
        {
          id: 21,
          type: 'grammar-fill',
          instruction: '（　　）に　入れるのに　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '別に　反対している（　　）。ただ　もう少し　考えたいだけだ。',
          options: ['わけではない', 'わけがない', 'わけだ', 'わけにはいかない'],
          answer: 0
        },
        {
          id: 22,
          type: 'grammar-fill',
          instruction: '（　　）に　入れるのに　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '期限が　明日なので、今日中に　終わらせ（　　）。',
          options: ['ざるを得ない', 'わけにはいかない', 'ことはない', 'にすぎない'],
          answer: 0
        },
        {
          id: 23,
          type: 'grammar-fill',
          instruction: '（　　）に　入れるのに　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'エアコンを　つけ（　　）で　出かけてしまった。',
          options: ['っぱなし', 'っぱなしに', 'っきり', 'っぱなしだ'],
          answer: 0
        },
        {
          id: 24,
          type: 'grammar-fill',
          instruction: '（　　）に　入れるのに　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '子どものころは、よく　この川で　泳いだ（　　）。',
          options: ['ものだ', 'ことだ', 'ものか', 'ことか'],
          answer: 0
        },
        {
          id: 25,
          type: 'grammar-fill',
          instruction: '（　　）に　入れるのに　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '明日は　大事な　会議が　あるので、休む（　　）。',
          options: ['わけにはいかない', 'ほかない', 'ことはない', 'にすぎない'],
          answer: 0
        },
        {
          id: 26,
          type: 'grammar-fill',
          instruction: '（　　）に　入れるのに　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '本日は　台風（　　）、臨時休業いたします。',
          options: ['につき', 'について', 'に対して', 'によって'],
          answer: 0
        },
        {
          id: 27,
          type: 'grammar-fill',
          instruction: '（　　）に　入れるのに　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'この分野（　　）、彼の右に　出る者は　いない。',
          options: ['において', 'について', 'における', 'に対して'],
          answer: 0
        },
        {
          id: 28,
          type: 'grammar-fill',
          instruction: '（　　）に　入れるのに　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: 'その件については　お答え（　　）。',
          options: ['しかねます', 'しかねません', 'しかねない', 'しかねる'],
          answer: 0
        },
        {
          id: 29,
          type: 'grammar-fill',
          instruction: '（　　）に　入れるのに　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '最近　物価が　上がる（　　）で、生活が　苦しい。',
          options: ['ばかり', 'ばかりだ', 'ばかりで', 'ばかりに'],
          answer: 2
        },
        {
          id: 30,
          type: 'grammar-fill',
          instruction: '（　　）に　入れるのに　最もよいものを、１・２・３・４から　一つ　えらびなさい。',
          question: '新法案を（　　）、激しい議論が　続いている。',
          options: ['めぐって', 'かけて', 'わたって', '通じて'],
          answer: 0
        }
      ] }, reading: { title: '読解', duration: 55, questions: [
        {
          id: 1,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: '最近、手紙を　書く人が　少なくなった。メールや　メッセージのほうが　速くて　便利だからだ。しかし、手紙には　手紙の　良さが　ある。相手のことを　考えながら、時間を　かけて　書く。その時間こそが、相手への　思いやりなのでは　ないだろうか。速さだけが　大切な　わけでは　ない。',
          question: '筆者によると、手紙の　良さは　何か。',
          options: ['速く　届くこと', '時間を　かけて　相手を　思うこと', '便利なこと', '誰でも　書けること'],
          answer: 1
        },
        {
          id: 2,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: '最近、手紙を　書く人が　少なくなった。メールや　メッセージのほうが　速くて　便利だからだ。しかし、手紙には　手紙の　良さが　ある。相手のことを　考えながら、時間を　かけて　書く。その時間こそが、相手への　思いやりなのでは　ないだろうか。速さだけが　大切な　わけでは　ない。',
          question: '「速さだけが　大切な　わけでは　ない」とは　どういう　意味か。',
          options: ['速さは　全く　大切では　ない', '速さ以外にも　大切なことが　ある', '速さが　一番　大切だ', '速さは　手紙には　関係ない'],
          answer: 1
        },
        {
          id: 3,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: '新しいことに　挑戦すれば、失敗する　こともある。しかし、失敗を　恐れて　何も　しないのは、もっと　大きな　失敗だ。失敗から　学んだことは、成功から　学ぶことより　多い。だから、失敗を　無駄に　しないことが　大切だ。',
          question: '筆者が　一番　言いたいことは　何か。',
          options: ['失敗しない　方法を　学ぶべきだ', '失敗を　恐れず　挑戦し、そこから　学ぶべきだ', '成功だけを　目指すべきだ', '新しいことに　挑戦すべきでは　ない'],
          answer: 1
        },
        {
          id: 4,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: '新しいことに　挑戦すれば、失敗する　こともある。しかし、失敗を　恐れて　何も　しないのは、もっと　大きな　失敗だ。失敗から　学んだことは、成功から　学ぶことより　多い。だから、失敗を　無駄に　しないことが　大切だ。',
          question: '「失敗を　無駄に　しない」とは　どういうことか。',
          options: ['失敗を　隠すこと', '失敗から　学び、次に　生かすこと', '失敗したことを　忘れること', '失敗を　人のせいに　しないこと'],
          answer: 1
        },
        {
          id: 5,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: '都会に　住んでいると、自然の　変化に　気づきにくい。だが、少し　注意して　見てみると、季節の　移り変わりは　身近な　ところにも　ある。公園の　木の葉の　色、朝の　空気の　冷たさ。自然は、静かに　私たちに　語りかけて　いる。',
          question: '筆者によると、都会に　住む人は　どうなりがちか。',
          options: ['自然の　変化に　気づきにくくなる', '自然を　大切に　しなくなる', '公園に　行かなくなる', '季節を　楽しめなくなる'],
          answer: 0
        },
        {
          id: 6,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: '都会に　住んでいると、自然の　変化に　気づきにくい。だが、少し　注意して　見てみると、季節の　移り変わりは　身近な　ところにも　ある。公園の　木の葉の　色、朝の　空気の　冷たさ。自然は、静かに　私たちに　語りかけて　いる。',
          question: '筆者が　言いたいことは　何か。',
          options: ['都会を　離れて　田舎に　住むべきだ', '身近な　自然の　変化に　目を　向けてみよう', '公園を　もっと　増やすべきだ', '自然は　人間に　関係ない'],
          answer: 1
        },
        {
          id: 7,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: '日本では、あいさつが　人間関係の　基本だと　言われる。朝の　「おはようございます」という　一言で、その日の　雰囲気が　決まることも　ある。あいさつは、相手を　認めて　いるという　サインだ。小さな　ことだが、続けることで　信頼が　生まれる。',
          question: 'あいさつについて、筆者は　どう　考えて　いるか。',
          options: ['形式的なもので　意味が　ない', '人間関係の　基本で　信頼に　つながる', '朝だけ　すればよい', '仕事の場だけで　必要だ'],
          answer: 1
        },
        {
          id: 8,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: '日本では、あいさつが　人間関係の　基本だと　言われる。朝の　「おはようございます」という　一言で、その日の　雰囲気が　決まることも　ある。あいさつは、相手を　認めて　いるという　サインだ。小さな　ことだが、続けることで　信頼が　生まれる。',
          question: '「相手を　認めて　いるという　サイン」とは　どういう　意味か。',
          options: ['相手を　尊敬して　いることを　表す', '相手を　無視して　いることを　表す', '相手に　命令して　いることを　表す', '相手を　試して　いることを　表す'],
          answer: 0
        },
        {
          id: 9,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: '何かを　身に　つけるには、継続が　何より　大切だ。一日に　長時間　やるより、短時間でも　毎日　続けるほうが　効果的だ。最初は　変化が　見えなくても、あきらめずに　続ければ、必ず　力に　なる。',
          question: '筆者によると、効果的な　学び方は　どれか。',
          options: ['一日に　長時間　やること', '短時間でも　毎日　続けること', '変化が　見えるまで　待つこと', '難しいことから　始めること'],
          answer: 1
        },
        {
          id: 10,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: '何かを　身に　つけるには、継続が　何より　大切だ。一日に　長時間　やるより、短時間でも　毎日　続けるほうが　効果的だ。最初は　変化が　見えなくても、あきらめずに　続ければ、必ず　力に　なる。',
          question: '「必ず　力に　なる」とは　どういう　意味か。',
          options: ['必ず　強くなる', '必ず　役に　立つように　なる', '必ず　成功する', '必ず　有名に　なる'],
          answer: 1
        },
        {
          id: 11,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: '職場や　学校には、さまざまな　背景を　持つ人が　いる。考え方が　違うからこそ、新しい　アイデアが　生まれることも　ある。違いを　認め合い、互いの　良さを　生かすことが、これからの　社会には　求められて　いる。',
          question: '考え方が　違うことに　ついて、筆者は　どう　述べて　いるか。',
          options: ['問題が　起きる　原因だ', '新しい　アイデアに　つながることも　ある', '避けるべきだ', '関係ないことだ'],
          answer: 1
        },
        {
          id: 12,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　えらびなさい。',
          passage: '職場や　学校には、さまざまな　背景を　持つ人が　いる。考え方が　違うからこそ、新しい　アイデアが　生まれることも　ある。違いを　認め合い、互いの　良さを　生かすことが、これからの　社会には　求められて　いる。',
          question: 'これからの　社会に　求められて　いることは　何か。',
          options: ['皆が　同じ　考えを　持つこと', '違いを　認め合い、互いの　良さを　生かすこと', '背景の　違う人を　減らすこと', 'アイデアを　出さないこと'],
          answer: 1
        }
      ] }, listening: { title: '聴解', duration: 50, questions: [] } },
  n1: {
    vocab: {
      title: '言語知識（文字・語彙・文法）',
      duration: 60,
      questions: [
        // ===== 漢字読み (12 soal) =====
        {
          id: 1,
          type: 'kanji-reading',
          instruction: '＿の　言葉の　読み方として　最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '彼は　相変わらず　忙しい　毎日を　送っている。',
          underline: '相変わらず',
          options: ['あいかわらず', 'そうかわらず', 'あいがわらず', 'あいかわらす'],
          answer: 0
        },
        {
          id: 2,
          type: 'kanji-reading',
          instruction: '＿の　言葉の　読み方として　最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: 'ご注文の　品を　確かに　承りました。',
          underline: '承りました',
          options: ['うけたまわりました', 'うけとりました', 'しょうちしました', 'うけたままりました'],
          answer: 0
        },
        {
          id: 3,
          type: 'kanji-reading',
          instruction: '＿の　言葉の　読み方として　最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '悪天候が　工事の　進行を　妨げた。',
          underline: '妨げた',
          options: ['さまたげた', 'はばんだ', 'さえぎった', 'じゃました'],
          answer: 0
        },
        {
          id: 4,
          type: 'kanji-reading',
          instruction: '＿の　言葉の　読み方として　最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '長年の　経験で　培った　技術だ。',
          underline: '培った',
          options: ['つちかった', 'はぐくんだ', 'きたえた', 'みがいた'],
          answer: 0
        },
        {
          id: 5,
          type: 'kanji-reading',
          instruction: '＿の　言葉の　読み方として　最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '彼は　時間を　惜しまず　努力した。',
          underline: '惜しまず',
          options: ['おしまず', 'おしみなく', 'おしまなく', 'おしみず'],
          answer: 0
        },
        {
          id: 6,
          type: 'kanji-reading',
          instruction: '＿の　言葉の　読み方として　最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '資金難で　計画が　滞っている。',
          underline: '滞っている',
          options: ['とどこおっている', 'たまっている', 'とまっている', 'おくれている'],
          answer: 0
        },
        {
          id: 7,
          type: 'kanji-reading',
          instruction: '＿の　言葉の　読み方として　最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '新証拠が　従来の　説を　覆した。',
          underline: '覆した',
          options: ['くつがえした', 'おおった', 'かえした', 'ひるがえした'],
          answer: 0
        },
        {
          id: 8,
          type: 'kanji-reading',
          instruction: '＿の　言葉の　読み方として　最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '彼は　敵の　侵入を　阻んだ。',
          underline: '阻んだ',
          options: ['はばんだ', 'ふせいだ', 'さえぎった', 'はねつけた'],
          answer: 0
        },
        {
          id: 9,
          type: 'kanji-reading',
          instruction: '＿の　言葉の　読み方として　最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '子供の　頃から　宇宙飛行士に　憧れていた。',
          underline: '憧れていた',
          options: ['あこがれていた', 'どうけいしていた', 'しょうけいしていた', 'あおがれていた'],
          answer: 0
        },
        {
          id: 10,
          type: 'kanji-reading',
          instruction: '＿の　言葉の　読み方として　最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '悪友に　唆されて　罪を　犯した。',
          underline: '唆されて',
          options: ['そそのかされて', 'さそわれて', 'おだてられて', 'たぶらかされて'],
          answer: 0
        },
        {
          id: 11,
          type: 'kanji-reading',
          instruction: '＿の　言葉の　読み方として　最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '彼は　世の　不公平を　嘆いた。',
          underline: '嘆いた',
          options: ['なげいた', 'うれいた', 'かなしんだ', 'いきどおった'],
          answer: 0
        },
        {
          id: 12,
          type: 'kanji-reading',
          instruction: '＿の　言葉の　読み方として　最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '長く　着た　シャツの　縫い目が　綻びてきた。',
          underline: '綻びてきた',
          options: ['ほころびてきた', 'ほつれてきた', 'やぶれてきた', 'ほころんでいた'],
          answer: 0
        },
        // ===== 漢字書き (8 soal) =====
        {
          id: 13,
          type: 'kanji-writing',
          instruction: '＿の　言葉を　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '彼の　行為は　はなはだしい　非難を　浴びた。',
          underline: 'はなはだしい',
          options: ['甚だしい', '甚しい', '勘だしい', '甚だし'],
          answer: 0
        },
        {
          id: 14,
          type: 'kanji-writing',
          instruction: '＿の　言葉を　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '健康管理を　おろそかに　しては　いけない。',
          underline: 'おろそかに',
          options: ['疎かに', '疏かに', '粗かに', '疎ろかに'],
          answer: 0
        },
        {
          id: 15,
          type: 'kanji-writing',
          instruction: '＿の　言葉を　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '署名を　うながす　ポスターが　貼られた。',
          underline: 'うながす',
          options: ['促す', '催す', '促がす', '速す'],
          answer: 0
        },
        {
          id: 16,
          type: 'kanji-writing',
          instruction: '＿の　言葉を　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '巧みな　話術で　相手を　あざむいた。',
          underline: 'あざむいた',
          options: ['欺いた', '騙いた', '欺むいた', '詐いた'],
          answer: 0
        },
        {
          id: 17,
          type: 'kanji-writing',
          instruction: '＿の　言葉を　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '上司が　部下の　軽率な　行動を　いさめた。',
          underline: 'いさめた',
          options: ['諌めた', '訓めた', '戒めた', '諫めた'],
          answer: 0
        },
        {
          id: 18,
          type: 'kanji-writing',
          instruction: '＿の　言葉を　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '疑惑が　とくの　噂が　広まった。',
          underline: 'とくの',
          options: ['特の', '徳の', '得の', '督の'],
          answer: 0
        },
        {
          id: 19,
          type: 'kanji-writing',
          instruction: '＿の　言葉を　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '委員会で　しんぎ　が　行われた。',
          underline: 'しんぎ',
          options: ['審議', '真義', '深議', '審義'],
          answer: 0
        },
        {
          id: 20,
          type: 'kanji-writing',
          instruction: '＿の　言葉を　漢字で　書くとき、最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '両国の　関係が　きんちょう　している。',
          underline: 'きんちょう',
          options: ['緊張', '近張', '勤張', '緊帳'],
          answer: 0
        },
        // ===== 文脈・文法 (10 soal) =====
        {
          id: 21,
          type: 'grammar-fill',
          instruction: '（　　）に　入る　最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '周囲の　反対を（　　）、彼は　留学を　決意した。',
          options: ['よそに', 'かまわず', 'ものともせず', 'はさておき'],
          answer: 0
        },
        {
          id: 22,
          type: 'grammar-fill',
          instruction: '（　　）に　入る　最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: 'この　繊細な　味わいは、老舗（　　）の　技だ。',
          options: ['ならでは', 'にかぎる', 'こそ', 'ゆえ'],
          answer: 0
        },
        {
          id: 23,
          type: 'grammar-fill',
          instruction: '（　　）に　入る　最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '幾多の　議論の（　　）、ようやく　結論に　達した。',
          options: ['すえに', 'あげく', 'きわみに', 'はてに'],
          answer: 0
        },
        {
          id: 24,
          type: 'grammar-fill',
          instruction: '（　　）に　入る　最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '証拠が　ない　以上、彼を　疑う（　　）。',
          options: ['ざるを得ない', 'わけにはいかない', 'ほかはない', 'にすぎない'],
          answer: 1
        },
        {
          id: 25,
          type: 'grammar-fill',
          instruction: '（　　）に　入る　最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '理解を　深める（　　）、実例を　挙げて　説明しよう。',
          options: ['べく', 'がてら', 'かたがた', 'ついでに'],
          answer: 0
        },
        {
          id: 26,
          type: 'grammar-fill',
          instruction: '（　　）に　入る　最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '散歩（　　）、郵便局に　寄って　手紙を　出した。',
          options: ['がてら', 'かたわら', 'ついでに', 'かねて'],
          answer: 0
        },
        {
          id: 27,
          type: 'grammar-fill',
          instruction: '（　　）に　入る　最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '過去の　判例（　　）判断すれば、この　訴えは　認められるだろう。',
          options: ['に照らして', 'に即して', 'をもとに', 'にかんがみて'],
          answer: 0
        },
        {
          id: 28,
          type: 'grammar-fill',
          instruction: '（　　）に　入る　最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '彼は　困難を（　　）、研究を　続けた。',
          options: ['ものともせず', 'よそに', 'はさておき', 'かまわず'],
          answer: 0
        },
        {
          id: 29,
          type: 'grammar-fill',
          instruction: '（　　）に　入る　最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: 'この　小説は　読むに（　　）作品だ。',
          options: ['足る', '足りる', '値する', '堪える'],
          answer: 0
        },
        {
          id: 30,
          type: 'grammar-fill',
          instruction: '（　　）に　入る　最もよいものを、１・２・３・４から　一つ　選びなさい。',
          question: '今さら　謝った（　　）、信頼は　戻らない。',
          options: ['ところで', 'ばかりに', 'たとて', 'ものを'],
          answer: 2
        }
      ]
    },
    reading: {
      title: '読解',
      duration: 60,
      questions: [
        // ===== 短文読解 1 =====
        {
          id: 1,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　選びなさい。',
          passage: '近年、都市部では　高層マンションの　建設が　相次いでいる。一方で、空き家問題も　深刻化している。新しい　住宅が　次々と　建てられる　一方で、古い　住宅が　放置されるという　矛盾した　状況が　生まれているのだ。専門家は、この　背景には　人口減少と　世帯数の　変化、そして　住宅政策の　不備が　あると　指摘する。',
          question: '筆者が　問題だと　考えているのは　何か。',
          options: ['高層マンションが　足りないこと', '新しい　住宅と　古い　住宅の　需給の　ずれ', '人口が　増えすぎていること', '住宅政策が　厳しすぎること'],
          answer: 1
        },
        {
          id: 2,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　選びなさい。',
          passage: '近年、都市部では　高層マンションの　建設が　相次いでいる。一方で、空き家問題も　深刻化している。新しい　住宅が　次々と　建てられる　一方で、古い　住宅が　放置されるという　矛盾した　状況が　生まれているのだ。専門家は、この　背景には　人口減少と　世帯数の　変化、そして　住宅政策の　不備が　あると　指摘する。',
          question: '専門家に　よると、この　状況の　原因に　含まれないものは　どれか。',
          options: ['人口減少', '世帯数の　変化', '住宅政策の　不備', '建設技術の　不足'],
          answer: 3
        },
        // ===== 短文読解 2 =====
        {
          id: 3,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　選びなさい。',
          passage: '「失敗は　成功の　母」という　言葉が　ある。しかし、失敗を　ただ　繰り返すだけでは　成功には　つながらない。大切なのは、失敗の　原因を　分析し、次に　生かすことだ。失敗から　学ばない　者は、同じ　過ちを　何度でも　繰り返す。一方、失敗を　糧に　できる　者は、着実に　成長していく。',
          question: '筆者が　最も　言いたいことは　何か。',
          options: ['失敗は　避けるべきだ', '失敗から　学ぶ　姿勢が　大切だ', '成功には　運が　必要だ', '失敗は　誰にでも　ある'],
          answer: 1
        },
        {
          id: 4,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　選びなさい。',
          passage: '「失敗は　成功の　母」という　言葉が　ある。しかし、失敗を　ただ　繰り返すだけでは　成功には　つながらない。大切なのは、失敗の　原因を　分析し、次に　生かすことだ。失敗から　学ばない　者は、同じ　過ちを　何度でも　繰り返す。一方、失敗を　糧に　できる　者は、着実に　成長していく。',
          question: '「失敗を　糧に　できる　者」とは　どんな　人か。',
          options: ['失敗を　恐れない　人', '失敗の　原因を　分析して　次に　生かす　人', '失敗を　人に　話す　人', '失敗を　忘れる　人'],
          answer: 1
        },
        // ===== 短文読解 3 =====
        {
          id: 5,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　選びなさい。',
          passage: 'スマートフォンの　普及により、人々の　読書習慣は　大きく　変わった。短い　文章を　次々と　読むことには　慣れたが、長い　文章を　じっくり　読む　機会は　減っている。ある　調査では、長文読解力が　低下している　可能性が　指摘されている。情報を　素早く　処理する　能力と、深く　考える　能力は　別の　ものだ。両方の　バランスが　求められる。',
          question: 'この　文章で　筆者が　懸念していることは　何か。',
          options: ['スマートフォンが　高すぎること', '長文を　深く　読む　力の　低下', '情報が　多すぎること', '読書人口の　減少'],
          answer: 1
        },
        {
          id: 6,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　選びなさい。',
          passage: 'スマートフォンの　普及により、人々の　読書習慣は　大きく　変わった。短い　文章を　次々と　読むことには　慣れたが、長い　文章を　じっくり　読む　機会は　減っている。ある　調査では、長文読解力が　低下している　可能性が　指摘されている。情報を　素早く　処理する　能力と、深く　考える　能力は　別の　ものだ。両方の　バランスが　求められる。',
          question: '筆者の　考えに　合うものは　どれか。',
          options: ['速読だけが　大切だ', '深く　考える　能力は　不要だ', '速さと　深さの　両方が　必要だ', 'スマートフォンを　使うべきでは　ない'],
          answer: 2
        },
        // ===== 短文読解 4 =====
        {
          id: 7,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　選びなさい。',
          passage: '地方の　商店街が　衰退している。大型ショッピングモールの　進出や　ネット通販の　拡大が　原因だと　言われる。しかし、再生に　成功した　商店街も　ある。その　共通点は、地域の　特色を　生かした　店づくりと、住民同士の　つながりを　大切にしている　ことだ。単に　物を　売る　場所ではなく、人が　集う　場所としての　役割を　取り戻すことが　鍵となる。',
          question: '再生に　成功した　商店街の　特徴として　述べられていないものは　どれか。',
          options: ['地域の　特色を　生かしている', '住民同士の　つながりを　大切にしている', '大型モールと　同じ　商品を　売っている', '人が　集う　場所に　なっている'],
          answer: 2
        },
        {
          id: 8,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　選びなさい。',
          passage: '地方の　商店街が　衰退している。大型ショッピングモールの　進出や　ネット通販の　拡大が　原因だと　言われる。しかし、再生に　成功した　商店街も　ある。その　共通点は、地域の　特色を　生かした　店づくりと、住民同士の　つながりを　大切にしている　ことだ。単に　物を　売る　場所ではなく、人が　集う　場所としての　役割を　取り戻すことが　鍵となる。',
          question: '筆者が　考える　商店街　再生の　鍵は　何か。',
          options: ['値段を　下げること', '物を　売る　場所から　人が　集う　場所へ　変わること', 'ネット通販を　始めること', '大型モールを　誘致すること'],
          answer: 1
        },
        // ===== 短文読解 5 =====
        {
          id: 9,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　選びなさい。',
          passage: '「多様性」という　言葉が　よく　使われる　ように　なった。しかし、その　意味を　深く　考えずに　使っている　人も　多いのではないだろうか。多様性を　認めるとは、単に　違いを　許容する　ことでは　ない。違いから　生まれる　摩擦に　向き合い、対話を　重ねる　ことだ。表面的な　理解で　満足しては、本当の　多様性には　たどり着けない。',
          question: '筆者に　よると、多様性を　認めるとは　どういう　ことか。',
          options: ['違いを　無視する　こと', '違いによる　摩擦に　向き合い　対話する　こと', 'みんなが　同じ　意見を　持つ　こと', '違いを　なくす　こと'],
          answer: 1
        },
        {
          id: 10,
          type: 'short-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　選びなさい。',
          passage: '「多様性」という　言葉が　よく　使われる　ように　なった。しかし、その　意味を　深く　考えずに　使っている　人も　多いのではないだろうか。多様性を　認めるとは、単に　違いを　許容する　ことでは　ない。違いから　生まれる　摩擦に　向き合い、対話を　重ねる　ことだ。表面的な　理解で　満足しては、本当の　多様性には　たどり着けない。',
          question: '筆者が　批判しているのは　どんな　態度か。',
          options: ['多様性を　否定する　態度', '多様性を　表面的に　理解した　つもりに　なる　態度', '対話を　避ける　態度', '違いを　強調しすぎる　態度'],
          answer: 1
        },
        // ===== 長文読解 =====
        {
          id: 11,
          type: 'long-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　選びなさい。',
          passage: '私たちは　日々、膨大な　情報に　さらされている。ニュース、広告、SNSの　投稿――。情報が　多ければ　多いほど、私たちは　賢く　なれるのだろうか。必ずしも　そうとは　言えない。情報過多の　時代において　重要なのは、情報を　集める　能力では　なく、情報を　選び取る　能力だ。\n\nまず、情報の　信頼性を　見極める　目が　必要だ。発信者が　誰なのか、どのような　意図で　発信しているのかを　考える　習慣を　つけたい。特に　SNSでは、感情的な　投稿が　拡散されやすい。怒りや　不安を　あおる　情報ほど、冷静に　受け止める　必要が　ある。\n\n次に、自分の　頭で　考える　時間を　確保する　ことだ。情報を　受け取る　ばかりでは、思考は　深まらない。読んだ　内容に　ついて、自分は　どう　思うのか、別の　見方は　ないかを　問いかける　ことが　大切だ。この　内省の　時間が、情報を　知識へと　変える。\n\n最後に、時には　情報から　離れる　勇気も　必要だ。常に　接続している　状態では、心が　休まらない。意識的に　デジタルデトックスの　時間を　作る　ことで、かえって　物事を　クリアに　見られる　ように　なる。情報と　適切な　距離を　取る　ことこそ、現代を　生き抜く　知恵だと言えるだろう。',
          question: '筆者が　情報過多の　時代に　最も　重要だと　考えている　能力は　何か。',
          options: ['情報を　速く　集める　能力', '情報を　選び取る　能力', '情報を　暗記する　能力', '情報を　発信する　能力'],
          answer: 1
        },
        {
          id: 12,
          type: 'long-passage',
          instruction: '次の　文章を　読んで、質問に　答えなさい。答えは、１・２・３・４から　最もよいものを　一つ　選びなさい。',
          passage: '私たちは　日々、膨大な　情報に　さらされている。ニュース、広告、SNSの　投稿――。情報が　多ければ　多いほど、私たちは　賢く　なれるのだろうか。必ずしも　そうとは　言えない。情報過多の　時代において　重要なのは、情報を　集める　能力では　なく、情報を　選び取る　能力だ。\n\nまず、情報の　信頼性を　見極める　目が　必要だ。発信者が　誰なのか、どのような　意図で　発信しているのかを　考える　習慣を　つけたい。特に　SNSでは、感情的な　投稿が　拡散されやすい。怒りや　不安を　あおる　情報ほど、冷静に　受け止める　必要が　ある。\n\n次に、自分の　頭で　考える　時間を　確保する　ことだ。情報を　受け取る　ばかりでは、思考は　深まらない。読んだ　内容に　ついて、自分は　どう　思うのか、別の　見方は　ないかを　問いかける　ことが　大切だ。この　内省の　時間が、情報を　知識へと　変える。\n\n最後に、時には　情報から　離れる　勇気も　必要だ。常に　接続している　状態では、心が　休まらない。意識的に　デジタルデトックスの　時間を　作る　ことで、かえって　物事を　クリアに　見られる　ように　なる。情報と　適切な　距離を　取る　ことこそ、現代を　生き抜く　知恵だと言えるだろう。',
          question: 'この　文章の　内容と　合っているものは　どれか。',
          options: ['SNSの　情報は　すべて　信頼できる', '情報から　離れる　ことは　逃避でしか　ない', '感情的な　投稿ほど　冷静に　受け止める　べきだ', '情報は　多ければ　多いほど　よい'],
          answer: 2
        }
      ]
    },
    listening: { title: '聴解', duration: 55, questions: [] }
  }
};
