/* eslint-disable */
import "bootstrap";
import "./style.css";

let suits = ["♥", "♠", "♣", "♦"];
let topSuitElement = document.querySelector(".top-suit");
let bottomSuitElement = document.querySelector(".bottom-suit");
let cardNumberElement = document.querySelector(".number")

window.onload = () => {
  startTimer();
  document.querySelector(".card").addEventListener("click", () => {
    changeSuit();
    changeNumber();
  });
};

function changeSuit() {
  let randomIndex = Math.floor(Math.random() * suits.length);
  let selectedSuit = suits[randomIndex];
  topSuitElement.innerHTML = bottomSuitElement.innerHTML = suits[randomIndex];
  if (selectedSuit === "♥" || selectedSuit === "♦") {
    topSuitElement.style.color = "red";
    bottomSuitElement.style.color = "red";
    cardNumberElement.style.color = "red";
  } else {
    topSuitElement.style.color = "black";
    bottomSuitElement.style.color = "black";
    cardNumberElement.style.color = "black";
  }
  bottomSuitElement.style.transform = "rotate(180deg)";

}
function changeNumber() {
  let figures = ["A", "J", "Q", "K"];
  const randomNumber = () => Math.floor(Math.random() * 9) + 2;
  const randomFigures = () => figures[Math.floor(Math.random() * figures.length)];

  let changedCardNumber = Math.random() < 0.5 ? randomNumber() : randomFigures();
  cardNumberElement.innerHTML = changedCardNumber;
}

function startTimer() {
  setInterval(() => {
    changeSuit();
    changeNumber();
  }, 10000);
}
