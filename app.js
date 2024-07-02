let randomNumber = Math.floor(Math.random() * 10 + 1);

console.log(randomNumber);

function getNumber() {
  var number = document.getElementById("numberInput").value;
  console.log("The number entered is: " + number);
}
