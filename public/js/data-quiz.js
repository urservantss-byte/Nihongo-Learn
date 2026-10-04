/* Soal quiz gaya JLPT per level + aturan waktu (demo, proporsional JLPT) */
const QUIZ_RULES = {
  n5: { sections: [{ id: 'goi', name: '文字・語彙', time: 300 }, { id: 'bunpou', name: '文法', time: 300 }, { id: 'dokkai', name: '読解', time: 300 }, { id: 'choukai', name: '聴解', time: 300 }] },
  n4: { sections: [{ id: 'goi', name: '文字・語彙', time: 300 }, { id: 'bunpou', name: '文法', time: 360 }, { id: 'dokkai', name: '読解', time: 360 }, { id: 'choukai', name: '聴解', time: 360 }] },
  n3: { sections: [{ id: 'goi', name: '文字・語彙', time: 360 }, { id: 'bunpou', name: '文法', time: 420 }, { id: 'dokkai', name: '読解', time: 420 }, { id: 'choukai', name: '聴解', time: 420 }] },
  n2: { sections: [{ id: 'goi', name: '文字・語彙・文法', time: 480 }, { id: 'dokkai', name: '読解', time: 480 }, { id: 'choukai', name: '聴解', time: 480 }] },
  n1: { sections: [{ id: 'goi', name: '文字・語彙・文法', time: 540 }, { id: 'dokkai', name: '読解', time: 540 }, { id: 'choukai', name: '聴解', time: 540 }] },
};

const QUIZ = {
  n5: [
    { s: 'goi', q: '「たべもの」の読み方として正しいものは？', o: ['たべもの', 'のべもの', 'たべもん', 'たべむの'], a: 0 },
    { s: 'goi', q: '「みず」の漢字として正しいものは？', o: ['火', '水', '木', '土'], a: 1 },
    { s: 'goi', q: '「大きい」の反対語は？', o: ['小さい', '高い', '安い', '新しい'], a: 0 },
    { s: 'goi', q: '「きのう」の意味は？', o: ['hari ini', 'besok', 'kemarin', 'pagi ini'], a: 2 },
    { s: 'bunpou', q: 'わたし ___ がくせいです。', o: ['は', 'を', 'に', 'で'], a: 0 },
    { s: 'bunpou', q: 'ごはん ___ たべます。', o: ['は', 'が', 'を', 'に'], a: 2 },
    { s: 'bunpou', q: 'がっこう ___ いきます。', o: ['を', 'に', 'で', 'は'], a: 1 },
    { s: 'bunpou', q: 'この ほんは ___ です。(murah)', o: ['やすい', 'やすく', 'やすくない', 'やすかった'], a: 0 },
    { s: 'dokkai', q: 'わたしは まいにち がっこうに いきます。がっこうは うちから とおいです。\n質問：がっこうは どこに ありますか。', o: ['うちの ちかく', 'うちから とおい ところ', 'うちの なか', 'わかりません'], a: 1, passage: true },
    { s: 'dokkai', q: 'きのうは あめでした。きょうは はれです。あしたも はれです。\n質問：あめが ふったのは いつですか。', o: ['きょう', 'あした', 'きのう', 'まいにち'], a: 2, passage: true },
    { s: 'choukai', q: 'Dengarkan, lalu pilih jawaban yang tepat.', o: ['おはよう', 'こんにちは', 'こんばんは', 'おやすみ'], a: 0, audio: 'おはようございます' },
    { s: 'choukai', q: 'Dengarkan, lalu pilih jawaban yang tepat.', o: ['はい', 'いいえ', 'わかりません', 'たぶん'], a: 0, audio: 'はい、そうです' },
  ],
  n4: [
    { s: 'goi', q: '「準備」の読み方は？', o: ['じゅんび', 'じゅうび', 'じんび', 'じゅんぴ'], a: 0 },
    { s: 'goi', q: '「旅行」の意味は？', o: ['rencana', 'perjalanan wisata', 'persiapan', 'pengalaman'], a: 1 },
    { s: 'bunpou', q: 'くすりを ___ なりません。(harus minum obat)', o: ['のまなければ', 'のまなくては', 'のむ', 'のんで'], a: 0 },
    { s: 'bunpou', q: 'にほんへ ___ ことがあります。', o: ['いった', 'いく', 'いって', 'いきたい'], a: 0 },
    { s: 'dokkai', q: 'らいしゅうの どようびに ともだちと えいがを みます。にちようびは かぞくと こうえんに いきます。\n質問：にちようびに なにを しますか。', o: ['えいがを みます', 'こうえんに いきます', 'がっこうに いきます', 'うちに います'], a: 1, passage: true },
    { s: 'choukai', q: 'Dengarkan, lalu pilih jawaban yang tepat.', o: ['いってらっしゃい', 'ただいま', 'おかえり', 'いってきます'], a: 3, audio: 'いってきます' },
  ],
  n3: [
    { s: 'goi', q: '「努力」の読み方は？', o: ['どりょく', 'どろく', 'とりょく', 'どりょうく'], a: 0 },
    { s: 'bunpou', q: 'よめば ___ ほど おもしろい。', o: ['よむ', 'よんだ', 'よもう', 'よみ'], a: 0 },
    { s: 'dokkai', q: 'べんきょうは まいにち つづけることが たいせつです。いちにち 10ぷんでも いいです。\n質問：いちばん たいせつなことは なんですか。', o: ['ながい じかん べんきょうすること', 'まいにち つづけること', '10ぷんだけ べんきょうすること', 'やすむこと'], a: 1, passage: true },
    { s: 'choukai', q: 'Dengarkan, lalu pilih jawaban yang tepat.', o: ['おせわになりました', 'おつかれさま', 'ごめんなさい', 'ありがとう'], a: 0, audio: 'おせわになりました' },
  ],
  n2: [
    { s: 'goi', q: '「義務」の読み方は？', o: ['ぎむ', 'ぎぶ', 'きむ', 'ぎゅむ'], a: 0 },
    { s: 'goi', q: 'いかない ___ いかない。', o: ['わけには', 'ざるをえず', 'っぽくて', 'がちで'], a: 0 },
    { s: 'dokkai', q: 'ぎじゅつの はったつは わたしたちの せいかつを べんりに しました。しかし、かんきょうの もんだいも おこしています。\n質問：この ぶんしょうで いちばん いいたいことは なんですか。', o: ['ぎじゅつは べんりなだけだ', 'ぎじゅつには いいところと わるいところが ある', 'かんきょうは もう だめだ', 'せいかつは かわらない'], a: 1, passage: true },
    { s: 'choukai', q: 'Dengarkan, lalu pilih jawaban yang tepat.', o: ['ごめいわくをおかけしました', 'おねがいします', 'しつれいします', 'おじゃまします'], a: 0, audio: 'ごめいわくをおかけしました' },
  ],
  n1: [
    { s: 'goi', q: '「曖昧」の読み方は？', o: ['あいまい', 'あまい', 'あいみ', 'あんまい'], a: 0 },
    { s: 'goi', q: 'ごうかく ___ べんきょうする。', o: ['すべく', 'ざるをえず', 'をよそに', 'てやまない'], a: 0 },
    { s: 'dokkai', q: 'ひはんを うけることは つらい。しかし、ひはんの なかには じぶんを せいちょうさせるものも ある。\n質問：ひっしゃの かんがえに いちばん ちかいものは？', o: ['ひはんは すべて わるい', 'ひはんは ときどき ためになる', 'ひはんは むしするべきだ', 'ひはんは こわい'], a: 1, passage: true },
    { s: 'choukai', q: 'Dengarkan, lalu pilih jawaban yang tepat.', o: ['おそれいりますが', 'もうしわけありません', 'ありがとうございます', 'おつかれさまです'], a: 0, audio: 'おそれいりますが' },
  ],
};
