//checking answers - פונקציה שבודקת אם המשתמש ענה נכון או לא  

// handle result - היא מופעלת על פי מה שהתקבל בפונקציה למעלה  תנאי - TRUE|FALSE  פונקציה

//-אם התשובה לא נכונה הפונקציה תפנה ל handle lose - המשחק נגמר 

// אם התשובה נכונה - הפונקציה מפנה ל- habdle win והשחקן עולה שלב

// correct answer - עולה שלב בסכום שנצבר + בסולם

let stage = 0;

function checkAnswer(questionId: string, userAnswer: string): boolean {
    const question = questionsArray.find(q => q.id === questionId);

    if (!question) {
        throw new Error("Invalid question ID");
    }

    const correctAnswer = question.correctAnswer;

    if (userAnswer === correctAnswer) {
        stage++;
        return true;
    } else {
        stage--;
        return false;
    }
}

const userAnswer = "Bogota";
const isAnswerCorrect = checkAnswer("1", userAnswer);

if (isAnswerCorrect) {
    console.log("Congratulations! Your answer is correct.");
} else {
    console.log("Oops! Your answer is incorrect.");
}

console.log("Current stage:", stage);

//handleWin function - מה קורה כשנבחרה תשובה נכונה

//handleLose function - מה קורה כשנבחרה תשובה לא נכונה

