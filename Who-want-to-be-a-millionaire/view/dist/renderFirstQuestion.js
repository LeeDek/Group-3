// const rootQuestions = document.querySelector(".question");
// if (!rootQuestions) throw new Error("Could not find root element");
// window.onload = () => {
//   rootQuestions.innerHTML = `<div class="question__text">
//   <h2>${questionsArray[i].questionText}</h2>
// </div><div class="question__answers"><button onclick="checkAnswer(${questionsArray[i].id}, ${questionsArray[i].answerA})" class="answer">
// ${questionsArray[i].answerA}
// </button>
// <button onclick="checkAnswer(${questionsArray[i].id}, ${questionsArray[i].answerB})" class="answer">${questionsArray[i].answerB}</button>
// </div>
// <div class="question__answers">
// <button onclick="checkAnswer(${questionsArray[i].id}, ${questionsArray[i].answerC})" class="answer">${questionsArray[i].answerC}</button>
// <button onclick="checkAnswer(${questionsArray[i].id}, ${questionsArray[i].answerD})" class="answer">${questionsArray[i].answerD}</button>
// </div>
// <div class="message" id="message"></div>`;
// };
var i = 0;
window.onload = function () {
    renderQuestions();
};
function renderQuestions() {
    var rootQuestions = document.querySelector(".question");
    if (!rootQuestions)
        throw new Error("Could not find root element");
    rootQuestions.innerHTML = "<div class=\"question__text\">\n  <h2>" + questionsArray[i].questionText + "</h2>\n</div><div class=\"question__answers\"><button onclick=\"checkAnswer('" + questionsArray[i].id + "', '" + questionsArray[i].answerA + "')\" class=\"answer\">\n" + questionsArray[i].answerA + "\n</button>\n<button onclick=\"checkAnswer('" + questionsArray[i].id + "', '" + questionsArray[i].answerB + "')\" class=\"answer\">" + questionsArray[i].answerB + "</button>\n</div>\n<div class=\"question__answers\">\n<button onclick=\"checkAnswer('" + questionsArray[i].id + "', '" + questionsArray[i].answerC + "')\" class=\"answer\">" + questionsArray[i].answerC + "</button>\n<button onclick=\"checkAnswer('" + questionsArray[i].id + "', '" + questionsArray[i].answerD + "')\" class=\"answer\">" + questionsArray[i].answerD + "</button>\n</div>\n<div class=\"message\" id=\"message\"></div>";
    i++;
}
