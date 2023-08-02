const rootQuestions = document.querySelector(".question");
if (!rootQuestions) throw new Error("Could not find root element");
window.onload = () => {
  rootQuestions.innerHTML = `<div class="question__text">
  <h2>${questionsArray[0].questionText}</h2>
</div><div class="question__answers"><button onclick="checkAnswer(${questionsArray[0].id}, ${questionsArray[0].answerA})" class="answer">
${questionsArray[0].answerA}
</button>
<button onclick="checkAnswer(${questionsArray[0].id}, ${questionsArray[0].answerB})" class="answer">${questionsArray[0].answerB}</button>
</div>
<div class="question__answers">
<button onclick="checkAnswer(${questionsArray[0].id}, ${questionsArray[0].answerC})" class="answer">${questionsArray[0].answerC}</button>
<button onclick="checkAnswer(${questionsArray[0].id}, ${questionsArray[0].answerD})" class="answer">${questionsArray[0].answerD}</button>
</div>
<div class="message" id="message"></div>`;
};
