function playSound() {
    console.log("Trying to play audio...");
    const audio = new Audio('/Who-want-to-be-a-millionaire/audio/intro.mp3');
    audio.play()
        .then(() => console.log("Audio played successfully!"))
        .catch(error => console.error("Error playing audio:", error));
}

// const playButton = document.getElementById('play') as HTMLElement;
// playButton.addEventListener("click", playSound);

window.addEventListener("load", playSound);