var answerElements = document.querySelectorAll(".question__answers p");
answerElements.forEach(function (answerElement) {
    answerElement.addEventListener("click", function () {
        var userAnswer = answerElement.textContent;
        var currentQuestionId = "question" + (stage + 1);
        var isCorrect = checkAnswer(currentQuestionId, userAnswer);
        if (isCorrect) {
            displayMessage("Correct answer! Proceeding to the next question...");
            setTimeout(function () {
                loadNextQuestion();
            }, 1500);
        }
        else {
            displayMessage("Incorrect answer! Game over.");
            endGame();
        }
    });
});
