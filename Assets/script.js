//Housekeeping
var startScreen = document.querySelector('.start');
var question1Screen = document.querySelector('.q1');
var endScreen = document.querySelector('.end');
var startButton = document.querySelector('#start-btn')
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
//added functionality to start button
startButton.addEventListener('click', function(event) {
    showQ1();
    console.log('clicked')
});
//Made start the default screen
function init () {
    showStart();
}

init();