//Housekeeping
var startScreen = document.querySelector('.start');
var question1Screen = document.querySelector('.q1');
var endScreen = document.querySelector('.end');
var startButton = document.querySelector('#start-btn');
//var correct = document.querySelector('[data-type="correct"]');
//var incorrect = document.querySelector('[data-type="incorrect"]');
//var answerButton = document.querySelector('.answer')

//Added show screen functions
function showStart() {
    startScreen.style.display = null;
    question1Screen.style.display = "none";
    endScreen.style.display = "none";
}

function showQ1() {
    startScreen.style.display = "none";
    question1Screen.style.display = null;
    endScreen.style.display = "none";
}

function showEnd() {
    startScreen.style.display = "none";
    question1Screen.style.display = "none";
    endScreen.style.display = null;
}
//THIS FUNCTION DOES NOT WORK PROPERLY!!! FIX AFTER WORK TOMORROW!
//Fixed function, it now checks if an answer is correct or not and logs it to the console. 
function checkAnswer() {
    var answer = event.target;
    var state = answer.getAttribute("data-type");

    if (state === "correct") {
        console.log('Correct!');
    } else if (state === "incorrect") {
        console.log('Incorrect:(');
    }
}

//added functionality to start button
startButton.addEventListener('click', function(event) {
    showQ1();
});
//added functionality to answer buttons
question1Screen.addEventListener('click', function(event){
    if (event.target.matches('button')) {
        checkAnswer();
        showEnd();
    } else {

    }
});
//Made start the default screen
function init () {
    showStart();
}

init();