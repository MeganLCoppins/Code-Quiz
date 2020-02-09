var $quiz = document.getElementById("quiz");
var $startQuiz = document.querySelector("#startQuiz");
var $score = document.getElementById("score");
var $start = document.querySelector("#start");
var $quizTitle = document.getElementById("quizTitle");
var $directions = document.getElementById("directions");
var $timer = document.querySelector("#timer");
var secondsLeft = 67;

var questionIndex = 0;

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            {text: "strings", isCorrect: false},
            {text: "booleans", isCorrect: false},
            {text: "alerts", isCorrect: true},
            {text: "numbers", isCorrect: false}
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed within ___",
        answers: [
            {text: "quotes", isCorrect: false},
            {text: "curly brackets", isCorrect: false},
            {text: "parentheses", isCorrect: true},
            {text: "square brackets", isCorrect: false}
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store ___",
        answers: [
            {text: "numbers and strings", isCorrect: false},
            {text: "other arrays", isCorrect: false},
            {text: "booleans", isCorrect: false},
            {text: "all of the above", isCorrect: true}
        ]
    },
    {
        question: "String values must be enclosed within__ when being assigned to variables.",
        answers: [
            {text: "commas", isCorrect: false},
            {text: "curly brackets", isCorrect: false},
            {text: "quotes", isCorrect: true},
            {text: "parentheses", isCorrect: false}
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            {text: "javascript", isCorrect: false},
            {text: "terminal/bash", isCorrect: false},
            {text: "for loops", isCorrect: false},
            {text: "console.log", isCorrect: true}
        ]
    },
];

$start.addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("quiz").style.display = "none";
    document.getElementById("startQuiz").style.display = "block";
});

$start.addEventListener("click", function setTime(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        $timer.textContent = secondsLeft;
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
});


