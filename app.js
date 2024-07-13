const quizData = [
  {
    question: 'HTML Açılımı Nedir?',
    a: 'HyperText Markup Language',
    b: 'HyperTool Markup Language',
    c: 'HyperText Markup Long',
    d: 'HyperText Mark Language',
    e: 'HyperToll Mark Language',
    correct: 'a',
  },
  {
    question: 'Front End Nedir?',
    a: 'Ön Yüz Geliştiricisi',
    b: 'HTML',
    c: 'CSS',
    d: 'JS',
    e: 'PHP',
    correct: 'a',
  },
  {
    question: 'Back End Nedir?',
    a: 'Arka Yüz Geliştiricisi',
    b: 'HTML',
    c: 'CSS',
    d: 'JS',
    e: 'PHP',
    correct: 'a',
  },
  {
    question: 'Web Tasarımında Hangi Dil Kullanılmaz?',
    a: 'C++',
    b: 'HTML',
    c: 'CSS',
    d: 'JS',
    e: 'PHP',
    correct: 'a',
  },
  {
    question: ' JavaScriptte hangisi ekrana yazdırma fonksiyonu değildir?',
    a: 'printf',
    b: 'console.log()',
    c: 'alert()',
    d: 'document.write()',
    e: 'innerHTML',
    correct: 'a',
  },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz]

  deselectedAnswers()

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
  e_text.innerText = currentQuizData.e
}

function deselectedAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false))
}

function getSelected() {
  let answer

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()

  //console.log(answer)

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++

    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
      <h2> Test tamamlandı, ${score * 20} puan aldınız🥳 </h2>
      <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀  </button>

    `
    }
  }
})
