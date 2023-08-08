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
    var rootHeadline = document.querySelector(".container__headline");
    if (!rootHeadline)
        throw new Error("Could not find root element");
    var usersFromLocalStorage = getUsers();
    rootHeadline.innerHTML = "<h2>Hello " + usersFromLocalStorage[0].userName + "! you are now in stage " + (i + 1) + "<br> " + dinamicText() + "</h2>";
    var rootQuestions = document.querySelector(".question");
    if (!rootQuestions)
        throw new Error("Could not find root element");
    rootQuestions.innerHTML = "<div class=\"question__text\">\n  <h2>" + questionsArray[i].questionText + "</h2>\n</div><div class=\"question__answers\"><button onclick=\"checkAnswer('" + questionsArray[i].id + "', '" + questionsArray[i].answerA + "')\" class=\"answer\">\n" + questionsArray[i].answerA + "\n</button>\n<button onclick=\"checkAnswer('" + questionsArray[i].id + "', '" + questionsArray[i].answerB + "')\" class=\"answer\">" + questionsArray[i].answerB + "</button>\n</div>\n<div class=\"question__answers\">\n<button onclick=\"checkAnswer('" + questionsArray[i].id + "', '" + questionsArray[i].answerC + "')\" class=\"answer\">" + questionsArray[i].answerC + "</button>\n<button onclick=\"checkAnswer('" + questionsArray[i].id + "', '" + questionsArray[i].answerD + "')\" class=\"answer\">" + questionsArray[i].answerD + "</button>\n</div>\n<div class=\"message\" id=\"message\"></div>";
    i++;
}
function dinamicText() {
    var text;
    switch (i) {
        case 0:
            text = "this is so cool!";
            break;
        case 1:
            text = "nice!";
            break;
        case 2:
            text = "wow very good!";
            break;
        case 3:
            text = "YOU ARE GOOD!";
            break;
        case 4:
            text = "very nice!";
            break;
        case 5:
            text = "WELL DONE!";
            break;
        case 6:
            text = "it's crazy!";
            break;
        case 7:
            text = "no words!";
            break;
        case 8:
            text = "I can't believe it!";
            break;
        case 9:
            text = "WOW! ONE MORE TIME! YOU ARE ABOUT TO GET RICHHH";
            break;
    }
    return text;
}
