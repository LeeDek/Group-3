interface Question {
  uid: string | undefined;
  questionText: string;
  answerA: string;
  answerB: string;
  answerC: string;
  answerD: string;
  correctAnswer: string;
}

const questionsArray: Question[] = [
  {
    uid: generateUid(),
    questionText: "What is the capital city of Colombia?",
    answerA: "Buenos Aires",
    answerB: "Lima",
    answerC: "Sao Paolo",
    answerD: "Bogota",
    correctAnswer: "Bogota",
  },

  {
    uid: generateUid(),
    questionText:
      "In the medical profession, what do the initials 'GP' stand for?",
    answerA: "Good Practitioner",
    answerB: "Garden Practitioner",
    answerC: "General Practitioner",
    answerD: "Graded Practitioner",
    correctAnswer: "General Practitioner",
  },

  {
    uid: generateUid(),
    questionText: "What is the smallest country in the world?",
    answerA: "Seychelles",
    answerB: "Iceland",
    answerC: "Spain",
    answerD: "Vatican City",
    correctAnswer: "Vatican City",
  },

  {
    uid: generateUid(),
    questionText: "In what year was the first iPhone released?",
    answerA: "2009",
    answerB: "2004",
    answerC: "2007",
    answerD: "2000",
    correctAnswer: "2007",
  },

  {
    uid: generateUid(),
    questionText: "How many million miles away is the sun from the Earth?",
    answerA: "93 million",
    answerB: "12 million",
    answerC: "136 million",
    answerD: "200 million",
    correctAnswer: "93 million",
  },

  {
    uid: generateUid(),
    questionText: "Which city will host the 2028 olympic games?",
    answerA: "Rome",
    answerB: "Oslo",
    answerC: "Paris",
    answerD: "Los Angeles",
    correctAnswer: "Los Angeles",
  },

  {
    uid: generateUid(),
    questionText:
      "What is the name of the famous tower in Italy that leans to one side?",
    answerA: "Eiffel Tower",
    answerB: "CN Tower",
    answerC: "Leaning Tower of Pisa",
    answerD: "Tokyo Tower",
    correctAnswer: "Leaning Tower of Pisa",
  },

  {
    uid: generateUid(),
    questionText: "What is the smallest continent in the world?",
    answerA: "Antartica",
    answerB: "Africa",
    answerC: "Australia",
    answerD: "South America",
    correctAnswer: "Australia",
  },

  {
    uid: generateUid(),
    questionText: "What is the tallest animal in the world?",
    answerA: "Hippopotamus",
    answerB: "Giraffe",
    answerC: "Rhine",
    answerD: "Elephant",
    correctAnswer: "Giraffe",
  },

  {
    uid: generateUid(),
    questionText: "What is the largest continent in the world?",
    answerA: "Africa",
    answerB: "Asia",
    answerC: "North America",
    answerD: "South America",
    correctAnswer: "Asia",
  },
];
