const answerElements = document.querySelectorAll(".question__answers p");
answerElements.forEach(answerElement => {
    answerElement.addEventListener("click", () => {
        const userAnswer = answerElement.textContent;
        const currentQuestionId = "question" + (stage + 1);
        const isCorrect = checkAnswer(currentQuestionId, userAnswer);

        if (isCorrect) {
            displayMessage("Correct answer! Proceeding to the next question...");
            setTimeout(() => {
                loadNextQuestion();
            }, 1500);
        } else {
            displayMessage("Incorrect answer! Game over.");
            endGame();
        }
    });
});


function loadNextQuestion() {
    if (stage < questionsArray.length) {
        const currentQuestion = questionsArray[stage];

        // DOM manipulation id neede to update the question text and answer options

        // for example:

        // document.querySelector(".question__text h2").textContent = currentQuestion.questionText;
        // document.querySelector(".a").textContent = currentQuestion.answerA;
        // document.querySelector(".b").textContent = currentQuestion.answerB;
        // document.querySelector(".c").textContent = currentQuestion.answerC;
        // document.querySelector(".d").textContent = currentQuestion.answerD;
    } else {
        // No more questions, end the game or show the final score
        endGame();
    }
}

function endGame() {

    const messageElement = document.getElementById("message") as HTMLElement;
    messageElement.textContent = "Game over! You did not reach $1 Million.";
    
    const currentQuestion = questionsArray[stage - 1];
    const correctAnswer = currentQuestion.correctAnswer;
    messageElement.textContent += " The correct answer was: " + correctAnswer;

    stage = 0;

    const playButton = document.getElementById("play") as HTMLElement;
    playButton.style.display = "block";
}