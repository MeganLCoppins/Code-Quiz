var $quiz = document.getElementById("quiz");
var $startQuiz = document.querySelector("#startQuiz");
var $score = document.getElementById("score");
var $start = document.querySelector("#start");
var $timer = document.querySelector("#timer");
var $answers = document.querySelector("#answersPrompt");
var $results = document.querySelector("#results");
var $yourScore = document.querySelector("#yourScore");
var $goBack = document.querySelector("#goBack");
var $correctShow = document.querySelector("#correctShow");
var $incorrectShow = document.querySelector("#incorrectShow");
var $noTime = document.querySelector("#noTime");

var secondsLeft = 30;

var score = 0;

var questionIndex = 0;

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

// start quiz and timer when button is pressed
$start.addEventListener("click", function(e) {
  e.preventDefault();
  $quiz.style.display = "none";
  $startQuiz.style.display = "block";
  renderQuestion();

  var timerInterval = setInterval(function() {
    secondsLeft--;
    $timer.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      $startQuiz.style.display = "none";
      $noTime.style.display = "block";
      $quiz.style.display = "block";
      $correctShow.style.display = "none";
      $incorrectShow.style.display = "none";
      score = 0;
      $score.textContent = "Score: " + score;
      questionIndex = 0;
      secondsLeft = 30;
      $timer.textContent = secondsLeft;
    }
    if (questionIndex === questions.length) {
      clearInterval(timerInterval);
    }
  }, 1000);
});

function renderQuestion() {
  $noTime.style.display = "none";
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
  $correctShow.style.display = "none";
  $incorrectShow.style.display = "none";
  if (!e.target.matches("button")) return;
  var index = e.target.dataset.index;
  var answer = questions[questionIndex].answers[index].isCorrect;
  if (answer === true) {
    // handle logic for correct answer
    score++;
    $score.textContent = "Score: " + score;
    $correctShow.style.display = "block";
  } else {
    //   handle logic for incorrect answer
    $incorrectShow.style.display = "block";
  }
  questionIndex++;
  renderQuestion();
});

function renderResults() {
  $correctShow.style.display = "none";
  $incorrectShow.style.display = "none";
  $yourScore.textContent = "Your final score is : " + score + "/5!";
  // reset score/timer and go back to start quiz div when button is clicked
  $goBack.addEventListener("click", function(e) {
    $results.style.display = "none";
    $quiz.style.display = "block";
    score = 0;
    $score.textContent = "Score: " + score;
    questionIndex = 0;
    secondsLeft = 30;
    $timer.textContent = secondsLeft;
  });
}
