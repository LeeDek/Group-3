var playAgainButton = document.getElementById("playAgain");
if (playAgainButton) {
    playAgainButton.addEventListener("click", function () {
        // Reset the game to the initial state
        stage = 0;
        // Other logic to reset UI elements if needed
        // Hide the playAgainButton
        playAgainButton.style.display = "none";
        // Display the start button again
        window.location.href = " /Who-want-to-be-a-millionaire/view/single-page.html";
        // Optionally, reset any other UI elements or game state
    });
}
