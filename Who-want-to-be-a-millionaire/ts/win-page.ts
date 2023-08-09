// const button = document.querySelector('#button') as HTMLElement;
// function confetti(){
// const canvas = document.querySelector('#confetti');
// const jsConfetti = new JSConfetti();
// button.addEventListener('click', () => {
//   jsConfetti.addConfetti()
// })
// }
const audio = new Audio('/Who-want-to-be-a-millionaire/audio/won-one-million.mp3');

let audioWin: boolean = false;

function playWinSound() {
  if (!audioWin) {
    console.log("Trying to play audio...");
    const audio = new Audio('/Who-want-to-be-a-millionaire/audio/won-one-million.mp3');
    audio.play()
      .then(() => {
        console.log("Audio played successfully!");
        audioWin = true;
      })

      .catch(error => console.error("Error playing audio:", error));
  }
}

const jsConfetti = new JSConfetti();
const audioPlayer = document.getElementById('audioPlayer') as HTMLElement;

function confetti() {
  jsConfetti.addConfetti();
}

document.addEventListener('DOMContentLoaded', () => {
  audioPlayer.play()
    .then(() => {
      console.log("Audio played successfully!");
      confetti(); // Trigger confetti animation when audio starts playing
    })
    .catch(error => console.error("Error playing audio:", error));
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
