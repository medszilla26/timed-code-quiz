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
    question: "this is a question",
    choiceA: "wrong",
    choiceB: "right",
    choiceC: "wrong",
    choiceD: "wrong",
    correct: "B",
  },
  {
    question: "this is a question 2",
    choiceA: "wrong",
    choiceB: "right",
    choiceC: "wrong",
    choiceD: "wrong",
    correct: "B",
  },
  {
    question: "this is a question 3",
    choiceA: "wrong",
    choiceB: "right",
    choiceC: "wrong",
    choiceD: "wrong",
    correct: "B",
  },
  {
    question: "this is a question 4",
    choiceA: "wrong",
    choiceB: "right",
    choiceC: "wrong",
    choiceD: "right",
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
