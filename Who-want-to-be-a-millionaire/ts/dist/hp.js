// let audioPlayed: boolean = false; 
// function playSound() {
//   if (!audioPlayed) {
//     console.log("Trying to play audio...");
//     const audio = new Audio('/Who-want-to-be-a-millionaire/audio/intro.mp3');
//     audio.play()
//       .then(() => {
//         console.log("Audio played successfully!");
//         audioPlayed = true; 
//         const bodyElement: HTMLBodyElement | null = document.querySelector('body');
//         bodyElement.removeEventListener("mouseenter", playSound); 
//       })
//       .catch(error => console.error("Error playing audio:", error));
//   }
// }
// const bodyElement = document.querySelector('body') as HTMLElement;
// bodyElement.addEventListener("mouseenter", playSound);
