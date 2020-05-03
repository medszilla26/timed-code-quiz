const start = document.getElementById("start-btn  ");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter")

const choiceD

start.addEventListener("click", startQ uiz);

function startQuiz(){


let questions = [
  {
    question: "This is question 1",
    choiceA: "this is the right answer",
    choiceB: "this is the wrong answer",
    choiceC: "this is the wrong answer",
    choiceD: "this is the wrong answer",
    correct: "A",
  },
  {
    question: "This is question 2",
    choiceA: "this is the wrong answer",
    choiceB: "this is the wrong answer",
    choiceC: "this is the right answer",
    choiceD: "this is the wrong answer",
    correct: "C",
  },
  {
    question: "This is question 3",
    choiceA: "this is the wrong answer",
    choiceB: "this is the wrong answer",
    choiceC: "this is the wrong answer",
    choiceD: "this is the right answer",
    correct: "D",
  },
  {
    question: "This is question 4",
    choiceA: "this is the wrong answer",
    choiceB: "this is the right answer",
    choiceC: "this is the wrong answer",
    choiceD: "this is the wrong answer",
    correct: "B",
  },
  {
    question: "This is question 5",
    choiceA: "this is the wrong answer",
    choiceB: "this is the wrong answer",
    choiceC: "this is the wrong answer",
    choiceD: "this is the right answer",
    correct: "D",
  },
];
