// let stage = 0; // Declare stage as a global variable
// function loadNextQuestion() {
//   try {
//     if (stage < questionsArray.length) {
//       const currentQuestion = questionsArray[stage];
//       document.querySelector(".question__text h2").textContent = currentQuestion.questionText;
//       const answerButtons = document.querySelectorAll(".answer");
//       answerButtons[0].textContent = currentQuestion.answerA;
//       answerButtons[1].textContent = currentQuestion.answerB;
//       answerButtons[2].textContent = currentQuestion.answerC;
//       answerButtons[3].textContent = currentQuestion.answerD;
//       // Add event listeners to each answer button
//       answerButtons.forEach((button) => {
//         button.addEventListener("click", () => {
//           checkAnswer(currentQuestion.id, button.textContent);
//         });
//       });
//       stage++; // Increment the stage value
//     } else {
//       endGame();
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }
var stage = 1; // Declare stage as a global variable
var userAnswer = null; // Initialize userAnswer
function loadNextQuestion() {
    try {
        if (stage < questionsArray.length + 1) {
            // const currentQuestion = questionsArray[stage+1];
            // document.querySelector(".question__text h2").textContent = currentQuestion.questionText;
            if (stage === 10) {
                handleWin();
            }
            var answerButtons = document.querySelectorAll(".answer");
            // answerButtons[0].textContent = currentQuestion.answerA;
            // answerButtons[1].textContent = currentQuestion.answerB;
            // answerButtons[2].textContent = currentQuestion.answerC;
            // answerButtons[3].textContent = currentQuestion.answerD;
            renderQuestions();
            // Remove previous event listeners
            answerButtons.forEach(function (button) {
                button.removeEventListener("click", answerButtonClickHandler);
            });
            displayMessage("Correct answer! Proceeding to the next question");
            // Add new event listeners to each answer button
            answerButtons.forEach(function (button) {
                button.addEventListener("click", answerButtonClickHandler);
                // answerButtonClickHandler.stopImmediatePropagation();
            });
            stage++; // Increment the stage value
        }
        else {
            endGame();
        }
    }
    catch (error) {
        console.error(error);
    }
}
// function answerButtonClickHandler(event) {
//   const button = event.target;
//   const userAnswer = button.textContent;
//   const currentQuestion = questionsArray[stage - 1];
//   checkAnswer(currentQuestion.id, userAnswer);
// }
function answerButtonClickHandler(event) {
    try {
        var selectedAnswer = event.target.textContent;
        userAnswer = selectedAnswer;
        var currentQuestion = questionsArray[stage - 1];
        var isCorrect = checkAnswer(currentQuestion.id, userAnswer);
        if (isCorrect) {
            // User answered correctly
            console.log("Correct answer");
            // Add your logic here for correct answer
            loadNextQuestion();
            event.stopImmediatePropagation();
        }
        else {
            // User answered incorrectly
            // Add your logic here for incorrect answer
            endGame();
        }
        userAnswer = null;
    }
    catch (error) {
        console.error(error);
    }
}
