function displayMessage(message: any) {
    const messageElement = document.getElementById("message");
    if (messageElement) {
        messageElement.textContent = message;
    }
}
function handleWin() {
    try {

        window.location.replace("./win-page.html");

    } catch (error) {
        console.error(error);
    }
}
const answerElements: NodeListOf<HTMLParagraphElement> = document.querySelectorAll(".question__answers p");
answerElements.forEach(answerElement => {
    answerElement.addEventListener("click", () => {
        try {
            const userAnswer = answerElement.textContent;
            const currentQuestionId = "question" + (stage + 1);
            const isCorrect = checkAnswer(currentQuestionId, userAnswer);

            if (isCorrect) {
                handleWin();
            } else {
                displayMessage("Incorrect answer! Game over.");
                endGame();
            }
        } catch (error) {
            console.error(error);
        }
    });
});