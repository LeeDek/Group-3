
const playButton = document.getElementById("play") as HTMLElement;
        playButton.addEventListener("click", () => {

            loadNextQuestion();

            playButton.style.display = "none";
        });


