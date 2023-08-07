

const playAgainButton = document.getElementById("playAgain");
console.log("playAgainButton:", playAgainButton);
if (playAgainButton) {
  document.addEventListener("DOMContentLoaded", () => {
    stage = 0;
    playAgainButton.style.display = "block";
    const winPage = document.getElementById("win-page");
    if (winPage) {
      winPage.style.display = "none";
      
    }

    const playButton = document.getElementById("playAgain");
    if (playButton) {
      playButton.style.display = "block";
    }

    // Call the function to load the first question when the game starts again
    loadNextQuestion();

    
  });
}
