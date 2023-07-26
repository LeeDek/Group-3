

interface Question {
    id: string;
    questionText: string;
    answerA: string;
    answerB: string;
    answerC: string;
    answerD: string;
    correctAnswer: string;
}

const questionsArray: Question[] = [

    {
        id: "1",
        questionText: "What is the capital city of Colombia?",
        answerA: "Buenos Aires",
        answerB: "Lima",
        answerC: "São Paulo",
        answerD: "Bogota",
        correctAnswer: "Bogota",
    },

    {
        id: "2",
        questionText: "In the medical profession, what do the initials 'GP' stand for?",
        answerA: "Good Practitioner",
        answerB: "Garden Practitioner",
        answerC: "General Practitioner",
        answerD: "Graded Practitioner",
        correctAnswer: "General Practitioner",
    },

    {
        id: "3",
        questionText: "What is the smallest country in the world?",
        answerA: "Seychelles",
        answerB: "Iceland",
        answerC: "Spain",
        answerD: "Vatican City",
        correctAnswer: "Vatican City",
    },

    {
        id: "4",
        questionText: "In what year was the first iPhone released?",
        answerA: "2009",
        answerB: "2004",
        answerC: "2007",
        answerD: "2000",
        correctAnswer: "2007",
    },

    {
        id: "5",
        questionText: "How many million miles away is the sun from the Earth?",
        answerA: "93 million",
        answerB: "12 million",
        answerC: "136 million",
        answerD: "200 million",
        correctAnswer: "93 million",
    },

    {
        id: "6",
        questionText: "Which city will host the 2028 olympic games?",
        answerA: "Rome",
        answerB: "Oslo",
        answerC: "Paris",
        answerD: "Los Angeles",
        correctAnswer: "Los Angeles",
    },

    {
        id: "7",
        questionText: "What is the name of the famous tower in Italy that leans to one side?",
        answerA: "Eiffel Tower",
        answerB: "CN Tower",
        answerC: "Leaning Tower of Pisa",
        answerD: "Tokyo Tower",
        correctAnswer: "Leaning Tower of Pisa",
    },

    {
        id: "8",
        questionText: "What is the smallest continent in the world?",
        answerA: "Antartica",
        answerB: "Africa",
        answerC: "Australia",
        answerD: "South America",
        correctAnswer: "Australia",
    },

    {
        id: "9",
        questionText: "What is the tallest animal in the world?",
        answerA: "Hippopotamus",
        answerB: "Giraffe",
        answerC: "Rhine",
        answerD: "Elephant",
        correctAnswer: "Giraffe",
    },

    {
        id: "10",
        questionText: "What is the largest continent in the world?",
        answerA: "Africa",
        answerB: "Asia",
        answerC: "North America",
        answerD: "South America",
        correctAnswer: "Asia",
    }
];


interface Answers {
    uid: Question;
    questionName: string;
}

interface Stage {
    amount: number;
    totalAmount: number;
}
