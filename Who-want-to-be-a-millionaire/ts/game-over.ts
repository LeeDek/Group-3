let audioGameOver: boolean = false;

function playSound(soundPath: string) {
  try {
    if (!audioGameOver) {
      console.log("Trying to play audio...");
      const audio = new Audio('/Who-want-to-be-a-millionaire/audio/wrong-anser.mp3');
      audio.play()
        .then(() => {
          console.log("Audio played successfully!");
          audioGameOver = true;
        })
        .catch(error => console.error("Error playing audio:", error));
    }

  } catch (error) {
    console.error(error)

  }
}

document.addEventListener('DOMContentLoaded', () => {
  const answerOptions = document.querySelectorAll('.answer-option');

  function handleAnswerClick(event) {
    try {
      const correctAnswerClass = '.d';
      const selectedAnswer = event.target;
      const isCorrect = selectedAnswer.classList.contains(correctAnswerClass);

      if (!isCorrect) {
        playSound('/Who-want-to-be-a-millionaire/audio/wrong-answer.mp3');
      }

      answerOptions.forEach(answer => {
        answer.removeEventListener('click', handleAnswerClick);
      });
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  answerOptions.forEach(answer => {
    answer.addEventListener('click', handleAnswerClick);
  });
});