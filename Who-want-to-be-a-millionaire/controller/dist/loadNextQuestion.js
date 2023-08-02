function loadNextQuestion() {
    try {
        var stage = 1;
        if (stage < questionsArray.length - 1) {
            var currentQuestion = questionsArray[stage];
            document.querySelector(".question__text h2").textContent =
                currentQuestion.questionText;
            document.querySelector(".a").textContent = currentQuestion.answerA;
            document.querySelector(".b").textContent = currentQuestion.answerB;
            document.querySelector(".c").textContent = currentQuestion.answerC;
            document.querySelector(".d").textContent = currentQuestion.answerD;
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
