'use strict';

/* console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = 
"Correct Number 🦁 "
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value); */



let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;


document.querySelector(".check").addEventListener("click", function() {

    const guess = Number (document.querySelector(".guess").value);
    document.querySelector(".number").textContent = "?";
    console.log(highscore, score);

    if (!guess) {
      document.querySelector(".message").textContent = "⛔️ No number";

      // When the player wins
    } else if (guess === secretNumber) {
      document.querySelector(".message").textContent = "Yeahh! The number is correct";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
        if (score > highscore) {
          highscore = score
          document.querySelector(".highscore").textContent = highscore;
        }
      //When the guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
          guess > secretNumber 
          ? document.querySelector(".message").textContent = "The number is too high"
          : document.querySelector(".message").textContent = "The number is too low";
          score--;
          document.querySelector(".score").textContent = score;
        }
       
    } else { 
      document.querySelector(".message").textContent = "You lost the game";
    }
  });

  // Reseting the game

  document.querySelector(".again").addEventListener("click", 
  function() {
      document.querySelector("body").style.backgroundColor = "#222";
      document.querySelector(".message").textContent = "Start guessing...";
      document.querySelector(".number").style.width = "15rem";
      document.querySelector(".number").textContent = "?";
      score = 20;
      document.querySelector(".score").textContent = score;
      secretNumber = Math.trunc(Math.random()*20) + 1;
      document.querySelector(".number").textContent = "?";
      document.querySelector(".guess").value = " ";
  }
  
  );