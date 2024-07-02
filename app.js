let randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

let guessCount = 0;
const maxGuesses = 3;

function changRange() {
  let min = parseInt(document.getElementById("numberRangeStart").value);
  let max = parseInt(document.getElementById("numberRangeEnd").value);

  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  guessCount = 0;
}

function getNumber() {
  guessCount++;
  var number = parseInt(document.getElementById("numberInput").value, 10);
  if (number === randomNumber) {
    document.getElementById("print").innerHTML =
      "You guessed the number correctly 😊";
  } else if (number > randomNumber) {
    document.getElementById("print").innerHTML =
      "Your guess is greater than the number 😟";
  } else if (number < randomNumber) {
    document.getElementById("print").innerHTML =
      "Your guess is less than the number 😟";
  }
  if (guessCount >= maxGuesses) {
    disableInput();
    if (number !== randomNumber) {
      document.getElementById("print").innerHTML =
        "You've used all your guesses 😟. The number was" + randomNumber;
    }
  }
}
function disableInput() {
  document.getElementById("numberInput").disabled = true;
}
