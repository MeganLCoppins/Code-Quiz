var $quiz = document.getElementById("quiz");
var $startQuiz = document.querySelector("#startQuiz");
var $score = document.getElementById("score");
var $start = document.querySelector("#start");
var $timer = document.querySelector("#timer");
var $answers = document.querySelector("#answersPrompt");
var $results = document.querySelector("#results");

var secondsLeft = 67;

var questionIndex = 0;

var $score = 0;

var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: [
      { text: "strings", isCorrect: false },
      { text: "booleans", isCorrect: false },
      { text: "alerts", isCorrect: true },
      { text: "numbers", isCorrect: false }
    ]
  },
  {
    question: "The condition in an if/else statement is enclosed within ___",
    answers: [
      { text: "quotes", isCorrect: false },
      { text: "curly brackets", isCorrect: false },
      { text: "parentheses", isCorrect: true },
      { text: "square brackets", isCorrect: false }
    ]
  },
  {
    question: "Arrays in JavaScript can be used to store ___",
    answers: [
      { text: "numbers and strings", isCorrect: false },
      { text: "other arrays", isCorrect: false },
      { text: "booleans", isCorrect: false },
      { text: "all of the above", isCorrect: true }
    ]
  },
  {
    question:
      "String values must be enclosed within__ when being assigned to variables.",
    answers: [
      { text: "commas", isCorrect: false },
      { text: "curly brackets", isCorrect: false },
      { text: "quotes", isCorrect: true },
      { text: "parentheses", isCorrect: false }
    ]
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      { text: "javascript", isCorrect: false },
      { text: "terminal/bash", isCorrect: false },
      { text: "for loops", isCorrect: false },
      { text: "console.log", isCorrect: true }
    ]
  }
];

// clear first div and replace with 2nd div when start button is pressed

$start.addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("quiz").style.display = "none";
  document.getElementById("startQuiz").style.display = "block";
  renderQuestion();

  var timerInterval = setInterval(function() {
    secondsLeft--;
    $timer.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
});

function renderQuestion() {
  // check to see if we still have a question available
  if (questionIndex === questions.length) {
    $startQuiz.style.display = "none";
    $results.style.display = "block";
    renderResults();
  } else {
    // take question string from array
    document.querySelector("#questionPrompt").textContent =
      questions[questionIndex].question;

    // Buttons for answer options
    $answers.innerHTML = "";
    questions[questionIndex].answers.forEach(function(answer, i) {
      var btn = document.createElement("button");
      btn.setAttribute("class", "btn btn-secondary");
      btn.setAttribute("data-index", i);
      btn.textContent = answer.text;
      $answers.append(btn);
    });
  }
}

$answers.addEventListener("click", function(e) {
  // renderQuestion(); creates duplicates of answer options
  if (!e.target.matches("button")) return;
  var index = e.target.dataset.index;
  var answer = questions[questionIndex].answers[index].isCorrect;
  if (answer === true) {
    // handle logic for correct answer

  } else {
    // handle logic for incorrect answer
  }
  questionIndex++;
  renderQuestion();
});

function renderResults() {
    
}
