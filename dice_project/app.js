const diceTriggerEl = document.querySelector(".dice__trigger");
const diceImageEl = document.querySelector(".dice__image");

function getRandomNumber() {
  return 1 + Math.floor(Math.random() * 6);
}

function rollDice() {
  diceTriggerEl.addEventListener("click", function() {
    let diceNumber = getRandomNumber();
    diceImageEl.src = "images/dice" + diceNumber + ".png";
  })
}

rollDice();