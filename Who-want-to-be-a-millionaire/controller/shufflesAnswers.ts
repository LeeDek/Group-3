// This function takes four answers, shuffles them, and returns them in a different order
function shufflesAnswers(answers: Array<Answer>) {
  try {
    const shuffledAnswers: Array<Answer> = [];
    const newAnswer: Answer[] = [...answers];
    for (let i = 0; i < answers.length; i++) {
      let tempAnswer = Math.floor(Math.random() * answers.length);
      if (newAnswer[tempAnswer] !== undefined) {
        shuffledAnswers.push(newAnswer[tempAnswer]);
        newAnswer.splice(tempAnswer, 1);
      } else {
        i--;
      }
    }
    return shuffledAnswers;
  } catch (error) {
    console.error(error);
  }
}

// // Answers
// console.log(shufflesAnswers(numbers));
