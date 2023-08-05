//checking answers - פונקציה שבודקת אם המשתמש ענה נכון או לא
// handle result - היא מופעלת על פי מה שהתקבל בפונקציה למעלה  תנאי - TRUE|FALSE  פונקציה
//-אם התשובה לא נכונה הפונקציה תפנה ל handle lose - המשחק נגמר
// אם התשובה נכונה - הפונקציה מפנה ל- handle win והשחקן עולה שלב
// correct answer - עולה שלב בסכום שנצבר + בסולם
// let stage: number = 0;
// function checkAnswer(questionId: string, userAnswer: string | null): boolean {
//   const currentQuestion = questionsArray.find((question) => question.id === questionId);
//   return userAnswer === currentQuestion.correctAnswer;
//   const question = questionsArray.find((q) => q.id === questionId);
//   try {
//     if (!question) {
//       throw new Error("Invalid question ID");
//     }
//     const correctAnswer = question.correctAnswer;
//     if (userAnswer === correctAnswer) {
//       loadNextQuestion();
//       //   return true;
//     } else {
//       endGame();
//       //   return false;
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }
var stage = 0;
function checkAnswer(questionId, userAnswer) {
    try {
        var question = questionsArray.find(function (q) { return q.id === questionId; });
        if (!question) {
            throw new Error("Invalid question ID");
        }
        var correctAnswer = question.correctAnswer;
        if (userAnswer === correctAnswer) {
            // User answered correctly
            // Add your logic here for correct answer
            console.log("Correct answer");
            loadNextQuestion();
            return true;
        }
        else {
            // User answered incorrectly
            // Add your logic here for incorrect answer
            console.log("Incorrect answer");
            endGame();
            return false;
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
