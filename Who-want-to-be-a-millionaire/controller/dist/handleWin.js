function displayMessage(message) {
    var messageElement = document.getElementById("message");
    if (messageElement) {
        messageElement.textContent = message;
    }
}
function handleWin() {
    try {
        window.location.replace("./win-page.html");
    }
    catch (error) {
        console.error(error);
    }
}
var answerElements = document.querySelectorAll(".question__answers p");
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
