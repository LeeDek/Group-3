function endGame() {
  try {
 
window.location.replace("./game-over.html")    
    // const messageElement = document.getElementById("message") as HTMLElement;
    // messageElement.textContent = "Game over!";
    // const currentQuestion = questionsArray[stage];
    // const correctAnswer = currentQuestion.correctAnswer;
    // messageElement.textContent += " The correct answer was: " + correctAnswer;
    // // stage = 0;
    // const playButton = document.getElementById("play") as HTMLElement;
    // playButton.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}