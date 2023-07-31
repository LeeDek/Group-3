// function displayMessage(message: any) {
//     const messageElement = document.getElementById("message");
//     if (messageElement) {
//         messageElement.textContent = message;
//     }
// }
// const answerElements = document.querySelectorAll(".question__answers p");
// answerElements.forEach(answerElement => {
//     answerElement.addEventListener("click", () => {
//         try {
//             const userAnswer = answerElement.textContent;
//             const currentQuestionId = "question" + (stage + 1);
//             const isCorrect = checkAnswer(currentQuestionId, userAnswer);
//             if (isCorrect) {
//                 displayMessage("Correct answer! Proceeding to the next question");
//                 setTimeout(() => {
//                     loadNextQuestion();
//                 }, 1500);
//             } else {
//                 displayMessage("Incorrect answer! Game over.");
//                 endGame();
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     });
// });
//loadNextQuestion wes written in seperate file named loadNextQuestion.ts
// function loadNextQuestion() {
//     try {
//         if (stage < questionsArray.length) {
//             const currentQuestion: Question = questionsArray[stage];
//             // DOM manipulation id neede to update the question text and answer options
//             // for example:
//             // document.querySelector(".question__text h2").textContent = currentQuestion.questionText;
//             // document.querySelector(".a").textContent = currentQuestion.answerA;
//             // document.querySelector(".b").textContent = currentQuestion.answerB;
//             // document.querySelector(".c").textContent = currentQuestion.answerC;
//             // document.querySelector(".d").textContent = currentQuestion.answerD;
//         } else {
//             // No more questions, end the game or show the final score
//             endGame();
//         }
//     } catch (error) {
//         console.error(error)
//     }
// }
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
