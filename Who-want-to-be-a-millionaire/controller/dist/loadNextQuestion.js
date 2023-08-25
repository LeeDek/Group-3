var stage = 1;
var userAnswer = null;
function loadNextQuestion() {
    try {
        numberToWord(questionsArray[i - 1].id);
        if (stage < questionsArray.length + 1) {
            var answerButtons = document.querySelectorAll(".answer");
            displayMessage("Correct answer! Proceeding to the next question");
            setTimeout(function () {
                renderQuestions();
            }, 1500);
            answerButtons.forEach(function (button) {
                button.removeEventListener("click", answerButtonClickHandler);
            });
            answerButtons.forEach(function (button) {
                button.addEventListener("click", answerButtonClickHandler);
            });
            stage++;
        }
        else {
            endGame();
        }
    }
    catch (error) {
        console.error(error);
    }
}
function answerButtonClickHandler(event) {
    try {
        var selectedAnswer = event.target.textContent;
        userAnswer = selectedAnswer;
        var currentQuestion = questionsArray[stage - 1];
        var isCorrect = checkAnswer(currentQuestion.id, userAnswer);
        if (isCorrect) {
            console.log("Correct answer");
            loadNextQuestion();
            event.stopImmediatePropagation();
        }
        else {
            endGame();
        }
        userAnswer = null;
    }
    catch (error) {
        console.error(error);
    }
}
