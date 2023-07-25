//checking answers - פונקציה שבודקת אם המשתמש ענה נכון או לא  

// handle result - היא מופעלת על פי מה שהתקבל בפונקציה למעלה  תנאי - TRUE|FALSE  פונקציה

//-אם התשובה לא נכונה הפונקציה תפנה ל handle lose - המשחק נגמר 

// אם התשובה נכונה - הפונקציה מפנה ל- habdle win והשחקן עולה שלב

// correct answer - עולה שלב בסכום שנצבר + בסולם

let stage = 0

function checkAnswer() {
    
    const correctAnswer = true;
    const wrongAnswer = false;

    if (correctAnswer) {
        stage++;
    }
    else if (wrongAnswer) {
        stage--;
    }
}

//handleWin function - מה קורה כשנבחרה תשובה נכונה

//handleLose function - מה קורה כשנבחרה תשובה לא נכונה

