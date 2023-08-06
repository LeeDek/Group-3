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
var stage = 0; // Declare stage as a global variable
var stage = 0; // Declare stage as a global variable
var userAnswer = null; // Initialize userAnswer
function loadNextQuestion() {
    try {
        if (stage < questionsArray.length) {
            var currentQuestion = questionsArray[stage];
            document.querySelector(".question__text h2").textContent = currentQuestion.questionText;
            if (stage < questionsArray.length) {
                var currentQuestion_1 = questionsArray[stage];
                document.querySelector(".question__text h2").textContent = currentQuestion_1.questionText;
                var answerButtons = document.querySelectorAll(".answer");
                answerButtons[0].textContent = currentQuestion_1.answerA;
                answerButtons[1].textContent = currentQuestion_1.answerB;
                answerButtons[2].textContent = currentQuestion_1.answerC;
                answerButtons[3].textContent = currentQuestion_1.answerD;
                // Remove previous event listeners
                answerButtons.forEach(function (button) {
                    button.removeEventListener("click", answerButtonClickHandler);
                });
                // Add new event listeners to each answer button
                answerButtons.forEach(function (button) {
                    button.addEventListener("click", function (answerButtonClickHandler) {
                    });
                });
            }
        }
    }
    finally {
    }
}
