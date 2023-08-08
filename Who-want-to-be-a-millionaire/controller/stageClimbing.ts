let number: string;
let oldNumber: string;
function numberToWorder(number: string) {
  try {
    switch (number) {
      case "1":
        number = "one";
        break;

      case "2":
        number = "two";
        break;

      case "3":
        number = "three";
        break;

      case "4":
        number = "four";
        break;

      case "5":
        number = "five";
        break;

      case "6":
        number = "six";
        break;

      case "7":
        number = "seven";
        break;

      case "8":
        number = "eight";
        break;

      case "9":
        number = "nine";
        break;
    }
    updateStageClimbing(number);
  } catch (error) {
    console.error(error);
  }
}
function updateStageClimbing(number) {
  try {
    const moneyLadder = document.querySelector(`#${number}`);
    const allAmounts = document.querySelectorAll(".win__amount");
    if (!moneyLadder) throw new Error("No moneyadder");
    allAmounts.forEach((amount) => {
      amount.classList.remove(`won`);
    });
    moneyLadder.classList.add(`won`);
  } catch (error) {
    console.error(error);
  }
}
