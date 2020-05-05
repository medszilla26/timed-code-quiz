const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const scoreDiv = document.getElementById("score");

const counter = document.getElementById("counter");

start.addEventListener("click", startQuiz);
function startQuiz() {
  start.style.display = "none";
  showQuestion();
  quiz.style.display = "block";
  showCounter();
  TIMER = setInterval(showCounter, 1000);
}

let questions = [
  {
    question: "What does CSS stand for?",
    choiceA: "Call Senior Staff",
    choiceB: "Cascading Style Sheet",
    choiceC: "Content Scramble System",
    choiceD: "Counter-Strike: Source",
    correct: "B",
  },
  {
    question:
      "HTML is a ______ system for displaying text, graphics, and audio retrieved over the Internet on a computer monitor.",
    choiceA: "complex",
    choiceB: "graphic",
    choiceC: "formatting",
    choiceD: "computer",
    correct: "C",
  },
  {
    question: "Javascript is a ________ language.",
    choiceA: "foreign",
    choiceB: "scripting",
    choiceC: "mathematical",
    choiceD: "receptive",
    correct: "B",
  },
  {
    question: "Border radius is used for _______.",
    choiceA: "rounding up values",
    choiceB: "rounding corners in an outer border edge",
    choiceC: "changing the background color",
    choiceD: "increasing the size of text",
    correct: "B",
  },
];

const lastQuestion = questions.length - 1;
let currentQuestion = 0;
let count = 0;
const questionTime = 10;

let TIMER;
let score = 0;

function showQuestion() {
  let q = questions[currentQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

function showCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;
    count++;
  } else {
    count = 0;
    if (currentQuestion < lastQuestion) {
      currentQuestion++;
      showQuestion();
    } else {
      clearInterval(TIMER);
      showScore();
    }
  }
}

function checkAnswer(answer) {
  if (answer == questions[currentQuestion].correct) {
    score++;
  }
  count = 0;
  if (currentQuestion < lastQuestion) {
    currentQuestion++;
    showQuestion();
  } else {
    clearInterval(TIMER);
    showScore();
  }
}

function showScore() {
  scoreDiv.style.display = "block";
  const scoreNumber = Math.round((100 * score) / questions.length);
  scoreDiv.innerHTML += "<p>" + scoreNumber + "</p>";
}
