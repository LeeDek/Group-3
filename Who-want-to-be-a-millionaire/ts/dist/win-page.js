var audio = new Audio('/Who-want-to-be-a-millionaire/audio/won-one-million.mp3');
var audioWin = false;
function playWinSound() {
    if (!audioWin) {
        console.log("Trying to play audio...");
        var audio_1 = new Audio('/Who-want-to-be-a-millionaire/audio/won-one-million.mp3');
        audio_1.play()
            .then(function () {
            console.log("Audio played successfully!");
            audioWin = true;
        })["catch"](function (error) { return console.error("Error playing audio:", error); });
    }
}
var jsConfetti = new JSConfetti();
var audioPlayer = document.getElementById('audioPlayer');
function confetti() {
    jsConfetti.addConfetti();
}
document.addEventListener('DOMContentLoaded', function () {
    audioPlayer.play()
        .then(function () {
        console.log("Audio played successfully!");
        confetti(); // Trigger confetti animation when audio starts playing
    })["catch"](function (error) { return console.error("Error playing audio:", error); });
});
