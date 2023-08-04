function updateStageClimbing(amountWon) {
    const moneyLadder = document.querySelectorAll('.win__amount');
  
    moneyLadder.forEach((money, index) => {
      if (index * 50000 < amountWon) {
        money.classList.add('won');
      } else {
        money.classList.remove('won');
      }
    });
  }