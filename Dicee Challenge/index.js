var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
console.log(randomNumber1);

//random dice images
var randomDiceNumber = "dice" + randomNumber1 + ".png";

//random src for images
var randomSourceImage = "images/" + randomDiceNumber;

//set images randomly for left dice image
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomSourceImage);

//dice 2 -- refactoring code (short code)
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomSourceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomSourceImage2);

//changing the heading for winner

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " Player 1 wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = " Player 2 wins ";
} else {
  document.querySelector("h1").innerHTML = " 🏁 Its a draw!!";
}
