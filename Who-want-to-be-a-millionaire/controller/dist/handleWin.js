function displayMessage(message) {
    var messageElement = document.getElementById("message");
    if (messageElement) {
        messageElement.textContent = message;
    }
}
function handleWin() {
    try {
        if (stage === questionsArray.length - 1) {
            var messageElement = document.getElementById("message");
            if (messageElement) {
                messageElement.textContent = "You just won a million dollars!";
            }
            stage = 0;
            var playButton = document.getElementById("play");
            if (playButton) {
                playButton.style.display = "block";
            }
        }
        else {
            displayMessage("Correct answer! Proceeding to the next question");
            setTimeout(function () {
                loadNextQuestion();
            }, 1500);
        }
    }
    catch (error) {
        console.error(error);
    }
}
answerElements.forEach(function (answerElement) {
    answerElement.addEventListener("click", function () {
        try {
            var userAnswer = answerElement.textContent;
            var currentQuestionId = "question" + (stage + 1);
            var isCorrect = checkAnswer(currentQuestionId, userAnswer);
            if (isCorrect) {
                handleWin();
            }
            else {
                displayMessage("Incorrect answer! Game over.");
                endGame();
            }
        }
        catch (error) {
            console.error(error);
        }
    });
});
// function endGame() {
//   try {
//     const messageElement = document.getElementById("message") as HTMLElement;
//     messageElement.textContent = "Game over!";
//     const currentQuestion = questionsArray[stage - 1];
//     const correctAnswer = currentQuestion.correctAnswer;
//     messageElement.textContent += " The correct answer was: " + correctAnswer;
//     stage = 0;
//     const playButton = document.getElementById("play") as HTMLElement;
//     playButton.style.display = "block";
//   } catch (error) {
//     console.error(error);
//   }
// }
