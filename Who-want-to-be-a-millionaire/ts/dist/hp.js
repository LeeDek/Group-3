var audioPlayed = false; // Flag to track if audio has played
function playSound() {
    if (!audioPlayed) {
        console.log("Trying to play audio...");
        var audio = new Audio('/Who-want-to-be-a-millionaire/audio/intro.mp3');
        audio.play()
            .then(function () {
            console.log("Audio played successfully!");
            audioPlayed = true; // Set the flag to true after playing once
            var bodyElement = document.querySelector('body');
            bodyElement.removeEventListener("mouseenter", playSound); // Remove the event listener
        })["catch"](function (error) { return console.error("Error playing audio:", error); });
    }
}
// const playButton = document.getElementById('play') as HTMLElement;
// playButton.addEventListener("click", playSound);
var bodyElement = document.querySelector('body');
bodyElement.addEventListener("mouseenter", playSound);
