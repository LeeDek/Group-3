var playAgainButton = document.getElementById("playAgain");
if (playAgainButton) {
    playAgainButton.addEventListener("click", function () {
        try {
            stage = 0;
            playAgainButton.style.display = "none";
            window.location.href = " /Who-want-to-be-a-millionaire/view/single-page.html";
        }
        catch (error) {
            console.error("An error occurred:", error);
        }
    });
}
