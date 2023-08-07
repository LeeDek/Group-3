var playAgainButton = document.getElementById("playAgain");
console.log("playAgainButton:", playAgainButton);
if (playAgainButton) {
    document.addEventListener("DOMContentLoaded", function () {
        stage = 0;
        playAgainButton.style.display = "block";
        var winPage = document.getElementById("win-page");
        if (winPage) {
            winPage.style.display = "none";
        }
        var playButton = document.getElementById("playAgain");
        if (playButton) {
            playButton.style.display = "block";
        }
        // Call the function to load the first question when the game starts again
    });
}
