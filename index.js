var random_num = Math.floor(Math.random() * 6) + 1;//1-6

var randomDiceImage = "dice" + random_num + ".png";

var imageUrl1 = "images/" + randomDiceImage;

document.querySelectorAll("img")[0].setAttribute("src", imageUrl1);


var randomeNum2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomeNum2 + ".png";
var imageUrl2 = "images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", imageUrl2);
console.log(document.querySelectorAll("h1"));
if (random_num > randomeNum2) {
    document.querySelectorAll("h1")[0].innerHTML = "Player1 won!";
} else if (random_num < randomeNum2) {
    document.querySelectorAll("h1")[0].innerHTML = "Player2 won!";
} else {
    document.querySelectorAll("h1")[0].innerHTML = "Draw!";
}