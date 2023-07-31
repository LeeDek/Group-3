var playButton = document.getElementById("play");
playButton.addEventListener("click", function () {
    // Call the function to load the first question when the game starts
    loadNextQuestion();
    // Optionally, you can also hide the "Play" button after starting the game
    playButton.style.display = "none";
});
