function playSound() {
    console.log("Trying to play audio...");
    var audio = new Audio("./ts/dist/intro.mp3");
    audio
        .play()
        .then(function () { return console.log("Audio played successfully!"); })["catch"](function (error) { return console.error("Error playing audio:", error); });
}
var playButton = document.querySelector("#play");
playButton.addEventListener("click", playSound);
