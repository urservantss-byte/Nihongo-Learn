/* Build kamus SQLite dari JMdict_e + KANJIDIC2 (EDRDG). Jalankan sekali: node scripts/build-dict.js */
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const sax = require('sax');
const Database = require('better-sqlite3');

const DATA = path.join(__dirname, '..', 'data');
const OUT = path.join(DATA, 'kamus.db');
if (fs.existsSync(OUT)) fs.unlinkSync(OUT);
const db = new Database(OUT);
db.exec('PRAGMA journal_mode=OFF; PRAGMA synchronous=OFF;');

// kana -> romaji sederhana (untuk index pencarian)
const RM = { 'あ':'a','い':'i','う':'u','え':'e','お':'o','か':'ka','き':'ki','く':'ku','け':'ke','こ':'ko','さ':'sa','し':'shi','す':'su','せ':'se','そ':'so','た':'ta','ち':'chi','つ':'tsu','て':'te','と':'to','な':'na','に':'ni','ぬ':'nu','ね':'ne','の':'no','は':'ha','ひ':'hi','ふ':'fu','へ':'he','ほ':'ho','ま':'ma','み':'mi','む':'mu','め':'me','も':'mo','や':'ya','ゆ':'yu','よ':'yo','ら':'ra','り':'ri','る':'ru','れ':'re','ろ':'ro','わ':'wa','を':'wo','ん':'n','が':'ga','ぎ':'gi','ぐ':'gu','げ':'ge','ご':'go','ざ':'za','じ':'ji','ず':'zu','ぜ':'ze','ぞ':'zo','だ':'da','ぢ':'ji','づ':'zu','で':'de','ど':'do','ば':'ba','び':'bi','ぶ':'bu','べ':'be','ぼ':'bo','ぱ':'pa','ぴ':'pi','ぷ':'pu','ぺ':'pe','ぽ':'po','きゃ':'kya','きゅ':'kyu','きょ':'kyo','しゃ':'sha','しゅ':'shu','しょ':'sho','ちゃ':'cha','ちゅ':'chu','ちょ':'cho','にゃ':'nya','にゅ':'nyu','にょ':'nyo','ひゃ':'hya','ひゅ':'hyu','ひょ':'hyo','みゃ':'mya','みゅ':'myu','みょ':'myo','りゃ':'rya','りゅ':'ryu','りょ':'ryo','ぎゃ':'gya','ぎゅ':'gyu','ぎょ':'gyo','じゃ':'ja','じゅ':'ju','じょ':'jo','びゃ':'bya','びゅ':'byu','びょ':'byo','ぴゃ':'pya','ぴゅ':'pyu','ぴょ':'pyo','うぁ':'wa','ゔ':'vu','ぁ':'a','ぃ':'i','ぅ':'u','ぇ':'e','ぉ':'o','っ':'','ゃ':'ya','ゅ':'yu','ょ':'yo','ー':'-' };
function toRomaji(kana) {
  let out = '', i = 0;
  kana = kana.replace(/・/g, '');
  while (i < kana.length) {
    const two = kana.slice(i, i + 2);
    if (RM[two]) { out += RM[two]; i += 2; continue; }
    const c = kana[i];
    if (c === 'っ' || c === 'ッ') { const nx = RM[kana.slice(i+1, i+3)] || RM[kana[i+1]] || ''; out += nx[0] || ''; i++; continue; }
    out += RM[c] || c; i++;
  }
  return out.toLowerCase();
}

console.log('== Parse JMdict ==');
db.exec(`CREATE TABLE words (id INTEGER PRIMARY KEY, keb TEXT, reb TEXT, gloss TEXT, pos TEXT);
CREATE VIRTUAL TABLE words_fts USING fts5(keb, reb, romaji, gloss, content='words', content_rowid='id');`);

function parseJMdict(file, done) {
  const parser = sax.parser(false, { trim: true });
  let cur = null, tag = null, sense = null;
  const ins = db.prepare('INSERT INTO words (keb, reb, gloss, pos) VALUES (?,?,?,?)');
  let n = 0;
  const tx = db.transaction(() => {});
  db.exec('BEGIN');
  parser.onopentag = t => {
    tag = t.name;
    if (t.name === 'ENTRY') cur = { keb: [], reb: [], gloss: [], pos: [] };
    if (t.name === 'SENSE' && cur) sense = { gloss: [], pos: [] };
  };
  parser.ontext = txt => {
    if (!cur || !txt) return;
    if (tag === 'KEB') cur.keb.push(txt);
    else if (tag === 'REB') cur.reb.push(txt);
    else if (tag === 'GLOSS' && sense) sense.gloss.push(txt);
    else if (tag === 'POS' && sense) sense.pos.push(txt.replace(/&|;/g, ''));
  };
  parser.onclosetag = t => {
    if (t === 'SENSE' && cur && sense) {
      if (sense.gloss.length) { cur.gloss.push(sense.gloss.join('; ')); cur.pos.push(sense.pos[0] || ''); }
      sense = null;
    }
    if (t === 'ENTRY' && cur) {
      if (cur.reb.length && cur.gloss.length) {
        const info = ins.run(JSON.stringify(cur.keb.slice(0, 4)), JSON.stringify(cur.reb.slice(0, 4)),
          cur.gloss.slice(0, 6).join(' / ').slice(0, 600), cur.pos.slice(0, 3).join(','));
        const romaji = cur.reb.slice(0, 2).map(toRomaji).join(' ');
        db.prepare('INSERT INTO words_fts (rowid, keb, reb, romaji, gloss) VALUES (?,?,?,?,?)')
          .run(info.lastInsertRowid, cur.keb.join(' '), cur.reb.join(' '), romaji, cur.gloss.slice(0, 4).join(' '));
        n++;
        if (n % 40000 === 0) { db.exec('COMMIT; BEGIN'); console.log('  ...', n); }
      }
      cur = null;
    }
    tag = null;
  };
  parser.onend = () => { db.exec('COMMIT'); console.log('JMdict entries:', n); done(); };
  fs.createReadStream(file).pipe(zlib.createGunzip()).on('data', d => parser.write(d.toString())).on('end', () => parser.close());
}

console.log('== Parse KANJIDIC2 ==');
function parseKanji(file, done) {
  db.exec(`CREATE TABLE kanji (ch TEXT PRIMARY KEY, onyomi TEXT, kunyomi TEXT, meaning TEXT, jlpt INTEGER, strokes INTEGER, grade INTEGER, freq INTEGER);
  CREATE INDEX idx_kanji_jlpt ON kanji(jlpt);`);
  const parser = sax.parser(false, { trim: true });
  let cur = null, tag = null, inRm = null;
  const ins = db.prepare('INSERT OR REPLACE INTO kanji VALUES (?,?,?,?,?,?,?,?)');
  let n = 0;
  db.exec('BEGIN');
  parser.onopentag = t => {
    tag = t.name;
    if (t.name === 'CHARACTER') cur = { on: [], kun: [], mean: [], jlpt: null, strokes: null, grade: null, freq: null };
    if (t.name === 'READING' && (t.attributes.R_TYPE || t.attributes.r_type)) inRm = (t.attributes.R_TYPE || t.attributes.r_type);
  };
  parser.ontext = txt => {
    if (!cur || !txt) return;
    if (tag === 'LITERAL') cur.ch = txt;
    else if (tag === 'READING' && inRm === 'ja_on') cur.on.push(txt);
    else if (tag === 'READING' && inRm === 'ja_kun') cur.kun.push(txt);
    else if (tag === 'MEANING' && !cur.mean.length || tag === 'MEANING' && cur.mean.length < 4) cur.mean.push(txt);
    else if (tag === 'JLPT') cur.jlpt = parseInt(txt);
    else if (tag === 'STROKE_COUNT' && cur.strokes === null) cur.strokes = parseInt(txt);
    else if (tag === 'GRADE') cur.grade = parseInt(txt);
    else if (tag === 'FREQ') cur.freq = parseInt(txt);
  };
  parser.onclosetag = t => {
    if (t === 'READING') inRm = null;
    if (t === 'CHARACTER' && cur && cur.ch) {
      ins.run(cur.ch, JSON.stringify(cur.on.slice(0, 6)), JSON.stringify(cur.kun.slice(0, 8)),
        cur.mean.slice(0, 4).join('; ').slice(0, 300), cur.jlpt, cur.strokes, cur.grade, cur.freq);
      n++;
      if (n % 4000 === 0) { db.exec('COMMIT; BEGIN'); }
    }
    tag = null;
  };
  parser.onend = () => { db.exec('COMMIT'); console.log('Kanji entries:', n); done(); };
  fs.createReadStream(file).pipe(zlib.createGunzip()).on('data', d => parser.write(d.toString())).on('end', () => parser.close());
}

parseJMdict(path.join(DATA, 'jmdict.xml.gz'), () => {
  parseKanji(path.join(DATA, 'kanjidic2.xml.gz'), () => {
    db.exec('PRAGMA optimize;');
    const sz = fs.statSync(OUT).size / 1048576;
    console.log('SELESAI. kamus.db =', sz.toFixed(1), 'MB');
    db.close();
  });
});
