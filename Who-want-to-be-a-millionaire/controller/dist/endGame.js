function endGame() {
    try {
        var messageElement = document.getElementById("message");
        messageElement.textContent = "Game over!";
        var currentQuestion = questionsArray[stage - 1];
        var correctAnswer = currentQuestion.correctAnswer;
        messageElement.textContent += " The correct answer was: " + correctAnswer;
        stage = 0;
        var playButton = document.getElementById("play");
        playButton.style.display = "block";
    }
    catch (error) {
        console.error(error);
    }
}
