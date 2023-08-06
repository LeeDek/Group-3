const button = document.querySelector('#button') as HTMLElement;
function confetti(){
const canvas = document.querySelector('#confetti');
const jsConfetti = new JSConfetti();
button.addEventListener('click', () => {
  jsConfetti.addConfetti()
})
}
let audioWin: boolean = false;
function playSound(soundPath: string) {
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
document.addEventListener('DOMContentLoaded', () => {
  const answerOptions = document.querySelectorAll('#button');
  function handleAnswerClick(event) {
    const correctAnswerClass = '.d';
    const selectedAnswer = event.target;
    const isCorrect = selectedAnswer.classList.contains(correctAnswerClass);
    if (!isCorrect) {
      playSound('/Who-want-to-be-a-millionaire/audio/won-one-million.mp3');
    }
    answerOptions.forEach(answer => {
      answer.removeEventListener('click', handleAnswerClick);
    });
  }
  answerOptions.forEach(answer => {
    answer.addEventListener('click', handleAnswerClick);
  });
});