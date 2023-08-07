function displayMessage(message) {
    var messageElement = document.getElementById("message");
    if (messageElement) {
        messageElement.textContent = message;
    }
}
function handleWin() {
    try {
        if (stage === questionsArray.length - 1) {
            // Move to the win-page when the user wins
            window.location.replace("./win-page.html");
        }
        else {
            displayMessage("Correct answer! Proceeding to the next question");
            setTimeout(function () {
                loadNextQuestion();
            }, 1500);
        }
        // if (stage === questionsArray.length - 1) {
        //     const mainPage = document.getElementById("single-page");
        //     const winPage = document.getElementById("win-page");
        //     if (mainPage && winPage) {
        //       mainPage.style.display = "none";
        //       winPage.style.display = "block";
        //     }
        //     const messageElement = document.getElementById("message");
        //     if (messageElement) {
        //         messageElement.textContent = "You Just Won a Million Dollars!";
        //         confetti()
        //     }
        //     const audioElement = document.getElementById("audio");
        //     if (audioElement) {
        //       audioElement.play();
        //     }
        //     // Optionally, you can reset the game and show a "Play Again" button
        stage = 0;
        var playButton = document.getElementById("play");
        if (playButton) {
            playButton.style.display = "block";
        }
        // } else {
        //     displayMessage("Correct answer! Proceeding to the next question");
        //     setTimeout(() => {
        //         loadNextQuestion();
        //     }, 1500);
        // }
    }
    catch (error) {
        console.error(error);
    }
}
var answerElements = document.querySelectorAll(".question__answers p");
answerElements.forEach(function (answerElement) {
    answerElement.addEventListener("click", function () {
        try {
            var userAnswer = answerElement.textContent;
            var currentQuestionId = "question" + (stage + 1);
            var isCorrect = checkAnswer(currentQuestionId, userAnswer);
            if (isCorrect) {
                handleWin();
            }
            else {
                displayMessage("Incorrect answer! Game over.");
                endGame();
            }
        }
        catch (error) {
            console.error(error);
        }
    });
});
