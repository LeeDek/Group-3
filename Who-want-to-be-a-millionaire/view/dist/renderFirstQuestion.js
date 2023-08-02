var rootQuestions = document.querySelector(".question");
if (!rootQuestions)
    throw new Error("Could not find root element");
window.onload = function () {
    rootQuestions.innerHTML = "<div class=\"question__text\">\n  <h2>" + questionsArray[0].questionText + "</h2>\n</div><div class=\"question__answers\"><button onclick=\"checkAnswer(" + questionsArray[0].id + ", " + questionsArray[0].answerA + ")\" class=\"answer\">\n" + questionsArray[0].answerA + "\n</button>\n<button onclick=\"checkAnswer(" + questionsArray[0].id + ", " + questionsArray[0].answerB + ")\" class=\"answer\">" + questionsArray[0].answerB + "</button>\n</div>\n<div class=\"question__answers\">\n<button onclick=\"checkAnswer(" + questionsArray[0].id + ", " + questionsArray[0].answerC + ")\" class=\"answer\">" + questionsArray[0].answerC + "</button>\n<button onclick=\"checkAnswer(" + questionsArray[0].id + ", " + questionsArray[0].answerD + ")\" class=\"answer\">" + questionsArray[0].answerD + "</button>\n</div>\n<div class=\"message\" id=\"message\"></div>";
};
