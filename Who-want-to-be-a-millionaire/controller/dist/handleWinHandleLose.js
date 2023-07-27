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
function loadNextQuestion() {
    if (stage < questionsArray.length) {
        var currentQuestion = questionsArray[stage];
        // DOM manipulation id neede to update the question text and answer options
        // for example:
        // document.querySelector(".question__text h2").textContent = currentQuestion.questionText;
        // document.querySelector(".a").textContent = currentQuestion.answerA;
        // document.querySelector(".b").textContent = currentQuestion.answerB;
        // document.querySelector(".c").textContent = currentQuestion.answerC;
        // document.querySelector(".d").textContent = currentQuestion.answerD;
    }
    else {
        // No more questions, end the game or show the final score
        endGame();
    }
}
function endGame() {
    var messageElement = document.getElementById("message");
    messageElement.textContent = "Game over! You did not reach $1 Million.";
    var currentQuestion = questionsArray[stage - 1];
    var correctAnswer = currentQuestion.correctAnswer;
    messageElement.textContent += " The correct answer was: " + correctAnswer;
    stage = 0;
    var playButton = document.getElementById("play");
    playButton.style.display = "block";
}
