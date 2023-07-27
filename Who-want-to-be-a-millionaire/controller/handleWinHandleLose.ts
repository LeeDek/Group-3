const answerElements = document.querySelectorAll(".question__answers p");
        answerElements.forEach(answerElement => {
            answerElement.addEventListener("click", () => {
                const userAnswer = answerElement.textContent;
                const currentQuestionId = "question" + (stage + 1);
                const isCorrect = checkAnswer(currentQuestionId, userAnswer);
        
                if (isCorrect) {
                    displayMessage("Correct answer! Proceeding to the next question...");
                    setTimeout(() => {
                        loadNextQuestion();
                    }, 1500);
                } else {
                    displayMessage("Incorrect answer! Game over.");
                    endGame();
                }
            });
        });