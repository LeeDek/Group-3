// const button = document.querySelector('#button') as HTMLElement;
// function confetti(){
// const canvas = document.querySelector('#confetti');
// const jsConfetti = new JSConfetti();
// button.addEventListener('click', () => {
//   jsConfetti.addConfetti()
// })
// }
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
//   const answerOptions = document.querySelectorAll('#button');
//   function handleAnswerClick(event) {
//     const correctAnswerClass = '.d';
//     const selectedAnswer = event.target;
//     const isCorrect = selectedAnswer.classList.contains(correctAnswerClass);
//     if (!isCorrect) {
//       playSound('/Who-want-to-be-a-millionaire/audio/won-one-million.mp3');
//     }
//     answerOptions.forEach(answer => {
//       answer.removeEventListener('click', handleAnswerClick);
//     });
//   }
//   answerOptions.forEach(answer => {
//     answer.addEventListener('click', handleAnswerClick);
//   });
