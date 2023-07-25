function playSound() {
    console.log("Trying to play audio...");
    var audio = new Audio('/Who-want-to-be-a-millionaire/audio/intro.mp3');
    audio.play()
        .then(function () { return console.log("Audio played successfully!"); })["catch"](function (error) { return console.error("Error playing audio:", error); });
}
// const playButton = document.getElementById('play') as HTMLElement;
// playButton.addEventListener("click", playSound);
window.addEventListener("load", playSound);
