function displayMessage(message: any) {
  const messageElement = document.getElementById("message");
  if (messageElement) {
    messageElement.textContent = message;
  }
}

function handleWin() {
  try {
      if (stage === questionsArray.length - 1) {
          const messageElement = document.getElementById("message");
          if (messageElement) {
              messageElement.textContent = "You just won a million dollars!";
          }

          stage = 0;
          const playButton = document.getElementById("play");
          if (playButton) {
              playButton.style.display = "block";
          }
      } else {
          displayMessage("Correct answer! Proceeding to the next question");
          setTimeout(() => {
              loadNextQuestion();
          }, 1500);
      }
  } catch (error) {
      console.error(error);
  }
}

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










// function endGame() {
//   try {
//     const messageElement = document.getElementById("message") as HTMLElement;
//     messageElement.textContent = "Game over!";

//     const currentQuestion = questionsArray[stage - 1];
//     const correctAnswer = currentQuestion.correctAnswer;
//     messageElement.textContent += " The correct answer was: " + correctAnswer;

//     stage = 0;

//     const playButton = document.getElementById("play") as HTMLElement;
//     playButton.style.display = "block";
//   } catch (error) {
//     console.error(error);
//   }
// }
