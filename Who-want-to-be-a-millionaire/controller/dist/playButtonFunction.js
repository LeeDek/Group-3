var playButton = document.getElementById("play");
playButton.addEventListener("click", function () {
    loadNextQuestion();
    playButton.style.display = "none";
});
