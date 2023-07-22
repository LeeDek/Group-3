"use strict";

function playSound() {
  var audio = new Audio('/Who-want-to-be-a-millionaire/audio/into.mp3');
  audio.play();
}

var playButton = document.getElementById('play');
playButton.addEventListener("click", playSound);