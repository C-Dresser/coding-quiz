//Housekeeping
var startScreen = document.querySelector('.start');
var question1Screen = document.querySelector('.q1');
var question2Screen = document.querySelector('.q2');
var question3Screen = document.querySelector('.q3');
var question4Screen = document.querySelector('.q4');
var question5Screen = document.querySelector('.q5');
var endScreen = document.querySelector('.end');
var scoreScreen = document.querySelector('.scoreScreen');
var startButton = document.querySelector('#start-btn');
var saveButton = document.getElementById("save");
var userid = document.getElementById("userid")
var scoreEl = document.getElementById("score");
var score = 100;
var scoreTimer = 100;

scoreEl.textContent = score;
//Added show screen functions
//Added show functions for new questions
function showStart() {
    startScreen.style.display = null;
    question1Screen.style.display = "none";
    question2Screen.style.display = "none";
    question3Screen.style.display = "none";
    question4Screen.style.display = "none";
    question5Screen.style.display = "none";
    endScreen.style.display = "none";
    scoreScreen.style.display = "none";
}

function showQ1() {
    startScreen.style.display = "none";
    question1Screen.style.display = null;
    question2Screen.style.display = "none";
    question3Screen.style.display = "none";
    question4Screen.style.display = "none";
    question5Screen.style.display = "none";
    endScreen.style.display = "none";
    scoreScreen.style.display = "none";
}

function showQ2() {
    startScreen.style.display = "none";
    question1Screen.style.display = "none";
    question2Screen.style.display = null;;
    question3Screen.style.display = "none";
    question4Screen.style.display = "none";
    question5Screen.style.display = "none";
    endScreen.style.display = "none";
    scoreScreen.style.display = "none";
}

function showQ3() {
    startScreen.style.display = "none";
    question1Screen.style.display = "none";
    question2Screen.style.display = "none";
    question3Screen.style.display = null;;
    question4Screen.style.display = "none";
    question5Screen.style.display = "none";
    endScreen.style.display = "none";
    scoreScreen.style.display = "none";
}

function showQ4() {
    startScreen.style.display = "none";
    question1Screen.style.display = "none";
    question2Screen.style.display = "none";
    question3Screen.style.display = "none";
    question4Screen.style.display = null;;
    question5Screen.style.display = "none";
    endScreen.style.display = "none";
    scoreScreen.style.display = "none";
}

function showQ5() {
    startScreen.style.display = "none";
    question1Screen.style.display = "none";
    question2Screen.style.display = "none";
    question3Screen.style.display = "none";
    question4Screen.style.display = "none";
    question5Screen.style.display = null;;
    endScreen.style.display = "none";
    scoreScreen.style.display = "none";
}

function showEnd() {
    startScreen.style.display = "none";
    question1Screen.style.display = "none";
    question2Screen.style.display = "none";
    question3Screen.style.display = "none";
    question4Screen.style.display = "none";
    question5Screen.style.display = "none";
    endScreen.style.display = null;
    scoreScreen.style.display = "none";
}

function showScoreScreen() {
    startScreen.style.display = "none";
    question1Screen.style.display = "none";
    question2Screen.style.display = "none";
    question3Screen.style.display = "none";
    question4Screen.style.display = "none";
    question5Screen.style.display = "none";
    endScreen.style.display = "none";
    scoreScreen.style.display = null;
}
//THIS FUNCTION DOES NOT WORK PROPERLY!!! FIX AFTER WORK TOMORROW!
//Fixed function, it now checks if an answer is correct or not and logs it to the console. 
//Added score functionality
function checkAnswer(event) {
    var answer = event.target;
    var state = answer.getAttribute("data-type");

    if (state === "correct") {
        console.log('Correct!');
    } else if (state === "incorrect") {
        console.log('Incorrect:(');
        score -= 15
    }
    console.log('score', score)
    scoreEl.textContent = score;
}
//added functionality to start button
//added a timer funstion to the score
startButton.addEventListener('click', function (event) {
    showQ1();

    scoreTimer = setInterval(function () {
        score--;
        console.log('score', score);
        scoreEl.textContent = score;

        if (score <= 0) {
            clearInterval(scoreTimer);
        }
    }, 1000);
});
//added functionality to answer buttons
//added eventListeners to new questions
question1Screen.addEventListener('click', function (event) {
    if (event.target.matches('button')) {
        checkAnswer(event);
        showQ2();
    }
});

question2Screen.addEventListener('click', function (event) {
    if (event.target.matches('button')) {
        checkAnswer(event);
        showQ3();
    }
});

question3Screen.addEventListener('click', function (event) {
    if (event.target.matches('button')) {
        checkAnswer(event);
        showQ4();
    }
});

question4Screen.addEventListener('click', function (event) {
    if (event.target.matches('button')) {
        checkAnswer(event);
        showQ5();
    }
});

question5Screen.addEventListener('click', function (event) {
    if (event.target.matches('button')) {
        checkAnswer(event);
        showEnd()
        clearInterval(scoreTimer);
    }
});
//Added function to show score screen and start screen
endScreen.addEventListener('click', function (event) {
    if (event.target.matches('button')) {
        
        showScoreScreen();
    }
});

scoreScreen.addEventListener('click', function (event) {
    if (event.target.matches('button')) {
        showStart()
        score = 100;
        scoreEl.textContent = score;
    }
});
//Wrote a function to write user initials to console. will change to local storage later
//Function now writes to local storage
//Function also writes user score to local storage
function save () {
    console.log(JSON.stringify(userid.value.trim()));
    localStorage.setItem("User", (JSON.stringify(userid.value.trim())));
    localStorage.setItem("Score", (JSON.stringify(score)));
}

saveButton.addEventListener('click', function (event) {
    event.preventDefault();
    save();
});
//Made start the default screen
function init () {
    showStart();
}

init();