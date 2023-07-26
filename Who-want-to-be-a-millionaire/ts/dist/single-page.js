var audioPlayed = false;
function playSound() {
    if (!audioPlayed) {
        console.log("Trying to play audio...");
        var audio = new Audio('/Who-want-to-be-a-millionaire/audio/intro.mp3');
        audio.play()
            .then(function () {
            console.log("Audio played successfully!");
            audioPlayed = true;
            var bodyElement = document.querySelector('body');
            bodyElement.removeEventListener("mouseenter", playSound);
        })["catch"](function (error) { return console.error("Error playing audio:", error); });
    }
}
var bodyElement = document.querySelector('body');
bodyElement.addEventListener("mouseenter", playSound);
