function generateUid() {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
}
var player1 = {
    userName: "LeeDee",
    password: "Oscar123",
    uid: generateUid()
};
var question1 = {
    uid: generateUid(),
    questionText: "What is the capital city of Colombia?",
    answerA: "Buenos Aires",
    answerB: "Lima",
    answerC: "Sao Paolo",
    answerD: "Bogota",
    correctAnswer: "Bogota"
};
var question2 = {
    uid: generateUid(),
    questionText: "In the medical profession, what do the initials 'GP' stand for?",
    answerA: "Good Practitioner",
    answerB: "Garden Practitioner",
    answerC: "General Practitioner",
    answerD: "Graded Practitioner",
    correctAnswer: "General Practitioner"
};
var question3 = {
    uid: generateUid(),
    questionText: "What is the smallest country in the world?",
    answerA: "Seychelles",
    answerB: "Iceland",
    answerC: "Spain",
    answerD: "Vatican City",
    correctAnswer: "Vatican City"
};
var question4 = {
    uid: generateUid(),
    questionText: "In what year was the first iPhone released?",
    answerA: "2009",
    answerB: "2004",
    answerC: "2007",
    answerD: "2000",
    correctAnswer: "2007"
};
var question5 = {
    uid: generateUid(),
    questionText: "How many million miles away is the sun from the Earth?",
    answerA: "93 million",
    answerB: "12 million",
    answerC: "136 million",
    answerD: "200 million",
    correctAnswer: "93 million"
};
var question6 = {
    uid: generateUid(),
    questionText: "Which city will host the 2028 olympic games?",
    answerA: "Rome",
    answerB: "Oslo",
    answerC: "Paris",
    answerD: "Los Angeles",
    correctAnswer: "Los Angeles"
};
var question7 = {
    uid: generateUid(),
    questionText: "What is the name of the famous tower in Italy that leans to one side?",
    answerA: "Eiffel Tower",
    answerB: "CN Tower",
    answerC: "Leaning Tower of Pisa",
    answerD: "Tokyo Tower",
    correctAnswer: "Leaning Tower of Pisa"
};
var question8 = {
    uid: generateUid(),
    questionText: "What is the smallest continent in the world?",
    answerA: "Antartica",
    answerB: "Africa",
    answerC: "Australia",
    answerD: "South America",
    correctAnswer: "Australia"
};
var question9 = {
    uid: generateUid(),
    questionText: "What is the tallest animal in the world?",
    answerA: "Hippopotamus",
    answerB: "Giraffe",
    answerC: "Rhine",
    answerD: "Elephant",
    correctAnswer: "Giraffe"
};
var question10 = {
    uid: generateUid(),
    questionText: "What is the largest continent in the world?",
    answerA: "Africa",
    answerB: "Asia",
    answerC: "North America",
    answerD: "South America",
    correctAnswer: "Asia"
};
