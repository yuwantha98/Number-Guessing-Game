function changRange() {
  let min = parseInt(document.getElementById("numberRangeStart").value);
  let max = parseInt(document.getElementById("numberRangeEnd").value);

  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  console.log(randomNumber);
}

function getNumber() {
  var number = parseInt(document.getElementById("numberInput").value, 10);
  if (number === randomNumber) {
    document.getElementById("print").innerHTML =
      "You guessed the number correctly!";
  } else if (number > randomNumber) {
    document.getElementById("print").innerHTML =
      "Your guess is greater than the number.";
  } else if (number < randomNumber) {
    document.getElementById("print").innerHTML =
      "Your guess is less than the number.";
  }
}
