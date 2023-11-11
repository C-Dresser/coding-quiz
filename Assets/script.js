//Housekeeping
var startScreen = document.querySelector('.start');
var question1Screen = document.querySelector('.q1');
var endScreen = document.querySelector('.end');
var startButton = document.querySelector('#start-btn');
var correct = document.querySelector('[data-type="correct"]');
var incorrect = document.querySelector('[data-type="incorrect"]');

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

function checkAnswer() {
    if (correct) {
        console.log('Correct!');
    } else if (incorrect) {
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