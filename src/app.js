/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let suit = ["♦", "♥", "♠", "♣"];
  let value = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let randomSuit = getRandomElement(suit);
  let randomValue = getRandomElement(value);
  let showSuit = document.querySelectorAll(".Suit");
  let showValue = document.querySelector(".number");
  showValue.innerHTML = randomValue;

  for (let index = 0; index < showSuit.length; index++) {
    showSuit[index].innerHTML = randomSuit;
    if (randomSuit === "♦" || randomSuit === "♥") {
      showSuit[index]. = "red";
    }
  }
  console.log(randomSuit, randomValue, randomSuit);

  function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
};
