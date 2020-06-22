var startButtonEl = document.querySelector("#start-quiz");
var quizEl = document.querySelector("#quiz-body");
var currentQuestionIndex = -1;

var quizQuestions = [
    {
        question: "Commonly used data types do NOT include", 
        correct: "Alerts", 
        wrong1: "Strings",
        wrong2: "Booleans",
        wrong3: "Numbers"
    },
    {
        question: "Commonly used data types do NOT include", 
        correct: "Alerts", 
        wrong1: "Strings",
        wrong2: "Booleans",
        wrong3: "Numbers"
    },
    {
        question: "Commonly used data types do NOT include", 
        correct: "Alerts", 
        wrong1: "Strings",
        wrong2: "Booleans",
        wrong3: "Numbers"
    },
    {
        question: "Commonly used data types do NOT include", 
        correct: "Alerts", 
        wrong1: "Strings",
        wrong2: "Booleans",
        wrong3: "Numbers"
    }
];

var startButtonCommence = function() {
    startTimer();
    renderNextQuestion();
};


function startTimer() {
    timeLeft = 75;
    var downloadTimer = setInterval(function(){
        if (currentQuestionIndex === quizQuestions.length - 1) {
            clearInterval(downloadTimer);
            document.getElementById("timer").innerHTML = "<p>Timer: " + timeLeft + "</p>";
        } else if (timeLeft <= 0) {
            clearInterval(downloadTimer);
            renderUserScore();
            document.getElementById("timer").innerHTML = "<p>Timer: 0</p>";
        } else {
            document.getElementById("timer").innerHTML = "<p>Timer: " + timeLeft + "</p>";
        }
        timeLeft -= 1;
    }, 1000);
};

function shuffle(array){
    array.sort(() => Math.random() - 0.5);
};
console.log(quizQuestions.length);

function answerChecker(button) {
    if ((!button.innerHTML === quizQuestions[currentQuestionIndex].correct) && currentQuestionIndex === quizQuestions.length - 1) {
        timeLeft -= 15;
        renderUserScore();
    } else if (currentQuestionIndex === quizQuestions.length - 1) {
        renderUserScore();
    } else if (button.innerHTML === quizQuestions[currentQuestionIndex].correct) {
        renderNextQuestion();
        document.getElementById("feedback").innerHTML = "<p>Correct!</p>";
    } else {
        timeLeft -= 15;
        document.getElementById("feedback").innerHTML = "<p>Wrong! -15 Seconds</p>";
        renderNextQuestion();
    }
};

function renderUserScore() {
    quizEl.innerHTML = "<h2>Your Score Is:</h2><h1>" + timeLeft + "</h1>"
}

function renderNextQuestion() {
    currentQuestionIndex++
    console.log(currentQuestionIndex)
    quizEl.innerHTML = "<h2>" + quizQuestions[currentQuestionIndex].question + "</h2>";
    var buttonContainerEl = document.createElement("div");
    var answerButtonEl1 = document.createElement("button");
    var answerButtonEl2 = document.createElement("button");
    var answerButtonEl3 = document.createElement("button");
    var answerButtonEl4 = document.createElement("button");
    console.dir(quizQuestions[currentQuestionIndex].correct);
    var answerOrderHandler = [
        quizQuestions[currentQuestionIndex].correct,
        quizQuestions[currentQuestionIndex].wrong1,
        quizQuestions[currentQuestionIndex].wrong2,
        quizQuestions[currentQuestionIndex].wrong3
    ];
    shuffle(answerOrderHandler);
    console.log(answerOrderHandler);
    answerButtonEl1.innerHTML = answerOrderHandler[0];
    answerButtonEl2.innerHTML = answerOrderHandler[1];
    answerButtonEl3.innerHTML = answerOrderHandler[2];
    answerButtonEl4.innerHTML = answerOrderHandler[3];
    quizEl.appendChild(buttonContainerEl);
    buttonContainerEl.appendChild(answerButtonEl1);
    buttonContainerEl.appendChild(answerButtonEl2);
    buttonContainerEl.appendChild(answerButtonEl3);
    buttonContainerEl.appendChild(answerButtonEl4);
    answerButtonEl1.onclick = function() {
        answerChecker(answerButtonEl1);
    } 
    answerButtonEl2.onclick = function() {
        answerChecker(answerButtonEl2);
    } 
    answerButtonEl3.onclick = function() {
        answerChecker(answerButtonEl3);
    }   
    answerButtonEl4.onclick = function() {
        answerChecker(answerButtonEl4);
    }
};

startButtonEl.onclick = startButtonCommence;
