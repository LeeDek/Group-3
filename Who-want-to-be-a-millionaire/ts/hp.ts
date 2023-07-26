let audioPlayed = false; // Flag to track if audio has played

function playSound() {
    if (!audioPlayed) {
        console.log("Trying to play audio...");
        const audio = new Audio('/Who-want-to-be-a-millionaire/audio/intro.mp3');
        audio.play()
            .then(() => {
                console.log("Audio played successfully!");
                audioPlayed = true; // Set the flag to true after playing once
                const bodyElement:HTMLBodyElement | null = document.querySelector('body');
                bodyElement.removeEventListener("mouseenter", playSound); // Remove the event listener
            })
            
            .catch(error => console.error("Error playing audio:", error));
    }
}

// const playButton = document.getElementById('play') as HTMLElement;
// playButton.addEventListener("click", playSound);

const bodyElement = document.querySelector('body') as HTMLElement;
bodyElement.addEventListener("mouseenter", playSound);