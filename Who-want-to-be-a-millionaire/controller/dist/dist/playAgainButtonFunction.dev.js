"use strict";

var playAgainButton = document.getElementById("play-again");

if (playAgainButton) {
  playAgainButton.addEventListener("click", function () {
    stage = 0;
    playButton.style.display = "block";
    var winPage = document.getElementById("win-page");

    if (winPage) {
      winPage.style.display = "none";
    }
  });
}