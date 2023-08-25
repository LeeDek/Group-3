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


