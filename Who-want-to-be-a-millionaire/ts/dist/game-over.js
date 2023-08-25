var audioGameOver = false;
function playSound(soundPath) {
    try {
        if (!audioGameOver) {
            console.log("Trying to play audio...");
            var audio = new Audio('/Who-want-to-be-a-millionaire/audio/wrong-anser.mp3');
            audio.play()
                .then(function () {
                console.log("Audio played successfully!");
                audioGameOver = true;
            })["catch"](function (error) { return console.error("Error playing audio:", error); });
        }
    }
    catch (error) {
        console.error(error);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    var answerOptions = document.querySelectorAll('.answer-option');
    function handleAnswerClick(event) {
        try {
            var correctAnswerClass = '.d';
            var selectedAnswer = event.target;
            var isCorrect = selectedAnswer.classList.contains(correctAnswerClass);
            if (!isCorrect) {
                playSound('/Who-want-to-be-a-millionaire/audio/wrong-answer.mp3');
            }
            answerOptions.forEach(function (answer) {
                answer.removeEventListener('click', handleAnswerClick);
            });
        }
        catch (error) {
            console.error("An error occurred:", error);
        }
    }
    answerOptions.forEach(function (answer) {
        answer.addEventListener('click', handleAnswerClick);
    });
});
