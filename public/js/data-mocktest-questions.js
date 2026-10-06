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
  
  // Placeholder untuk level lain (akan diisi nanti)
  n4: { vocab: { title: '言語知識（文字・語彙）', duration: 25, questions: [] }, grammar: { title: '言語知識（文法）', duration: 30, questions: [] }, reading: { title: '読解', duration: 40, questions: [] }, listening: { title: '聴解', duration: 35, questions: [] } },
  n3: { vocab: { title: '言語知識（文字・語彙）', duration: 30, questions: [] }, grammar: { title: '言語知識（文法）', duration: 35, questions: [] }, reading: { title: '読解', duration: 50, questions: [] }, listening: { title: '聴解', duration: 40, questions: [] } },
  n2: { vocab: { title: '言語知識（文字・語彙・文法）', duration: 50, questions: [] }, reading: { title: '読解', duration: 55, questions: [] }, listening: { title: '聴解', duration: 50, questions: [] } },
  n1: { vocab: { title: '言語知識（文字・語彙・文法）', duration: 60, questions: [] }, reading: { title: '読解', duration: 60, questions: [] }, listening: { title: '聴解', duration: 55, questions: [] } }
};
