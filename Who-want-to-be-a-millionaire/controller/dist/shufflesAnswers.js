var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// This function takes X answers, shuffles them, and returns them in a different order
function shufflesAnswers(answers) {
    try {
        var shuffledAnswers = [];
        var newAnswer = __spreadArrays(answers);
        for (var i = 0; i < answers.length; i++) {
            var tempAnswer = Math.floor(Math.random() * answers.length);
            if (newAnswer[tempAnswer] !== undefined) {
                shuffledAnswers.push(newAnswer[tempAnswer]);
                newAnswer.splice(tempAnswer, 1);
            }
            else {
                i--;
            }
        }
        return shuffledAnswers;
    }
    catch (error) {
        console.error(error);
    }
}
