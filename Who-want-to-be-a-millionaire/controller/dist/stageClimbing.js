function updateStageClimbing(amountWon) {
    var moneyLadder = document.querySelectorAll('.win__amount');
    moneyLadder.forEach(function (money, index) {
        if (index * 50000 < amountWon) {
            money.classList.add('won');
        }
        else {
            money.classList.remove('won');
        }
    });
}
