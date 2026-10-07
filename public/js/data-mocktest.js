// ===== JLPT Mock Test Library (PDF + Audio) =====
// Sumber: JLPT Sensei Practice Test (berdasarkan soal contoh resmi JLPT)
const MOCKTEST_LEVELS = [
  {
    id: 'n5', name: 'N5', icon: '🌱',
    pdfs: [
      { id: 'vocab', title: 'Kosakata (語彙)', file: 'JLPT-N5-practice-test-vocabulary-section.pdf' },
      { id: 'grammar', title: 'Tata Bahasa (文法)', file: 'JLPT-N5-practice-test-grammar-section.pdf' },
      { id: 'reading', title: 'Membaca (読解)', file: 'JLPT-N5-practice-test-reading-section.pdf' },
      { id: 'listening', title: 'Mendengar (聴解)', file: 'JLPT-N5-practice-test-listening-section.pdf' },
      { id: 'script', title: 'Naskah Listening', file: 'JLPT-N5-practice-test-listening-script.pdf' },
      { id: 'answer', title: 'Kunci Jawaban', file: 'JLPT-N5-practice-test-correct-answer-sheet.pdf' },
      { id: 'blank', title: 'Lembar Jawaban Kosong', file: 'JLPT-N5-practice-test-answer-sheet-blank.pdf' },
    ],
    audios: [
      { id: 'q1', title: 'Listening Part 1', file: 'n5-mock-N5Q1.mp3' },
      { id: 'q2', title: 'Listening Part 2', file: 'n5-mock-N5Q2.mp3' },
      { id: 'q3', title: 'Listening Part 3', file: 'n5-mock-N5Q3.mp3' },
      { id: 'q4', title: 'Listening Part 4', file: 'n5-mock-N5Q4.mp3' },
    ]
  },
  {
    id: 'n4', name: 'N4', icon: '🌿',
    pdfs: [
      { id: 'vocab', title: 'Kosakata (語彙)', file: 'JLPT-N4-practice-test-vocabulary-section.pdf' },
      { id: 'grammar', title: 'Tata Bahasa (文法)', file: 'JLPT-N4-practice-test-grammar-section.pdf' },
      { id: 'reading', title: 'Membaca (読解)', file: 'JLPT-N4-practice-test-reading-section.pdf' },
      { id: 'listening', title: 'Mendengar (聴解)', file: 'JLPT-N4-practice-test-listening-section.pdf' },
      { id: 'script', title: 'Naskah Listening', file: 'JLPT-N4-practice-test-listening-script.pdf' },
      { id: 'answer', title: 'Kunci Jawaban', file: 'JLPT-N4-practice-test-correct-answer-sheet.pdf' },
      { id: 'blank', title: 'Lembar Jawaban Kosong', file: 'JLPT-N4-practice-test-blank-answer-sheet.pdf' },
    ],
    audios: [
      { id: 'q1', title: 'Listening Part 1', file: 'n4-mock-N4Q1.mp3' },
      { id: 'q2', title: 'Listening Part 2', file: 'n4-mock-N4Q2.mp3' },
      { id: 'q3', title: 'Listening Part 3', file: 'n4-mock-N4Q3.mp3' },
      { id: 'q4', title: 'Listening Part 4', file: 'n4-mock-N4Q4.mp3' },
    ]
  },
  {
    id: 'n3', name: 'N3', icon: '🌳',
    pdfs: [
      { id: 'vocab', title: 'Kosakata (語彙)', file: 'JLPT-N3-Practice-Test-vocabulary-section.pdf' },
      { id: 'grammar', title: 'Tata Bahasa (文法)', file: 'JLPT-N3-Practice-Test-grammar-section.pdf' },
      { id: 'reading', title: 'Membaca (読解)', file: 'JLPT-N3-Practice-Test-reading-section.pdf' },
      { id: 'listening', title: 'Mendengar (聴解)', file: 'JLPT-N3-Practice-Test-listening-section.pdf' },
      { id: 'script', title: 'Naskah Listening', file: 'JLPT-N3-Practice-Test-listening-script.pdf' },
      { id: 'answer', title: 'Kunci Jawaban', file: 'JLPT-N3-Practice-Test-correct-answer-sheet.pdf' },
      { id: 'blank', title: 'Lembar Jawaban Kosong', file: 'JLPT-N3-Practice-Test-blank-answer-sheet.pdf' },
    ],
    audios: [
      { id: 'q1', title: 'Listening Part 1', file: 'n3-mock-N3Q1.mp3' },
      { id: 'q2', title: 'Listening Part 2', file: 'n3-mock-N3Q2.mp3' },
      { id: 'q3', title: 'Listening Part 3', file: 'n3-mock-N3Q3.mp3' },
      { id: 'q4', title: 'Listening Part 4', file: 'n3-mock-N3Q4.mp3' },
      { id: 'q5', title: 'Listening Part 5', file: 'n3-mock-N3Q5.mp3' },
    ]
  },
  {
    id: 'n2', name: 'N2', icon: '🏔️',
    pdfs: [
      { id: 'vocab', title: 'Kosakata (語彙)', file: 'JLPT-N2-practice-test-vocabulary-section.pdf' },
      { id: 'grammar', title: 'Tata Bahasa (文法)', file: 'JLPT-N2-practice-test-grammar-section.pdf' },
      { id: 'reading', title: 'Membaca (読解)', file: 'JLPT-N2-practice-test-reading-section.pdf' },
      { id: 'listening', title: 'Mendengar (聴解)', file: 'JLPT-N2-practice-test-listening-section.pdf' },
      { id: 'script', title: 'Naskah Listening', file: 'JLPT-N2-practice-test-listening-script.pdf' },
      { id: 'answer', title: 'Kunci Jawaban', file: 'JLPT-N2-practice-test-correct-answer-sheet.pdf' },
      { id: 'blank', title: 'Lembar Jawaban Kosong', file: 'JLPT-N2-practice-test-blank-answer-sheet.pdf' },
    ],
    audios: [
      { id: 'q1', title: 'Listening Part 1', file: 'n2-mock-N2Q1.mp3' },
      { id: 'q2', title: 'Listening Part 2', file: 'n2-mock-N2Q2.mp3' },
      { id: 'q3', title: 'Listening Part 3', file: 'n2-mock-N2Q3.mp3' },
      { id: 'q4', title: 'Listening Part 4', file: 'n2-mock-N2Q4.mp3' },
      { id: 'q5', title: 'Listening Part 5', file: 'n2-mock-N2Q5.mp3' },
    ]
  },
  {
    id: 'n1', name: 'N1', icon: '🗻',
    pdfs: [
      { id: 'vocab', title: 'Kosakata (語彙)', file: 'JLPT-N1-practice-test-vocabulary-section.pdf' },
      { id: 'grammar', title: 'Tata Bahasa (文法)', file: 'JLPT-N1-practice-test-grammar-section.pdf' },
      { id: 'reading', title: 'Membaca (読解)', file: 'JLPT-N1-practice-test-reading-section.pdf' },
      { id: 'listening', title: 'Mendengar (聴解)', file: 'JLPT-N1-practice-test-listening-section.pdf' },
      { id: 'script', title: 'Naskah Listening', file: 'JLPT-N1-practice-test-listening-script.pdf' },
      { id: 'answer', title: 'Kunci Jawaban', file: 'JLPT-N1-practice-test-correct-answer-sheet.pdf' },
      { id: 'blank', title: 'Lembar Jawaban Kosong', file: 'JLPT-N1-practice-test-blank-answer-sheet.pdf' },
    ],
    audios: [
      { id: 'q1', title: 'Listening Part 1', file: 'n1-mock-N1Q1.mp3' },
      { id: 'q2', title: 'Listening Part 2', file: 'n1-mock-N1Q2.mp3' },
      { id: 'q3', title: 'Listening Part 3', file: 'n1-mock-N1Q3.mp3' },
      { id: 'q4', title: 'Listening Part 4', file: 'n1-mock-N1Q4.mp3' },
      { id: 'q5', title: 'Listening Part 5', file: 'n1-mock-N1Q5.mp3' },
    ]
  },
];
