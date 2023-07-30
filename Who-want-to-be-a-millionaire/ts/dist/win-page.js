var button = document.querySelector('#button');
var canvas = document.querySelector('#confetti');
var jsConfetti = new JSConfetti();
button.addEventListener('click', function () {
    jsConfetti.addConfetti();
});
var audioWin = false;
function playSound(soundPath) {
    if (!audioWin) {
        console.log("Trying to play audio...");
        var audio = new Audio('/Who-want-to-be-a-millionaire/audio/won-one-million.mp3');
        audio.play()
            .then(function () {
            console.log("Audio played successfully!");
            audioWin = true;
        })["catch"](function (error) { return console.error("Error playing audio:", error); });
    }
}
document.addEventListener('DOMContentLoaded', function () {
    var answerOptions = document.querySelectorAll('#button');
    function handleAnswerClick(event) {
        var correctAnswerClass = '.d';
        var selectedAnswer = event.target;
        var isCorrect = selectedAnswer.classList.contains(correctAnswerClass);
        if (!isCorrect) {
            playSound('/Who-want-to-be-a-millionaire/audio/won-one-million.mp3');
        }
        answerOptions.forEach(function (answer) {
            answer.removeEventListener('click', handleAnswerClick);
        });
    }
    answerOptions.forEach(function (answer) {
        answer.addEventListener('click', handleAnswerClick);
    });
});
