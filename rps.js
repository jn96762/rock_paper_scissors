
const options = ["Rock", "Paper", "Scissors"];

var playerScore = 0;
var computerScore = 0;

function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

function getComputerChoice() {
    return options[Math.floor(Math.random()*3)];

} 

function playRound(click) {

    const playerSelection = click;
    const computerSelection = getComputerChoice();

    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") {
            document.querySelector(".announcer").textContent = "Draw! Rock vs Rock."
            return "D";
        } else if (computerSelection === "Paper") {
            document.querySelector(".announcer").textContent = "You Lose! Paper beats Rock.";
            return "C";
        } else {
            document.querySelector(".announcer").textContent = "You Win! Rock beats Scissors";
            return "P";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            document.querySelector(".announcer").textContent = "You Win! Paper beats Rock.";
            return "P";
        } else if (computerSelection === "Paper") { 
            document.querySelector(".announcer").textContent = "Draw! Paper vs Paper.";
            return "D";
        } else {
            document.querySelector(".announcer").textContent = "You Lose! Scissors beats Paper.";
            return "C";
        }
    } else {
        if (computerSelection === "Rock") {
            document.querySelector(".announcer").textContent = "You Lose! Rock beats Scissors."; 
            return "C";
        } else if (computerSelection === "Paper") {
            document.querySelector(".announcer").textContent = "You Win! Scissors beats Paper.";
            return "P";
        } else {
            document.querySelector(".announcer").textContent = "Draw! Scissors vs Scissors.";
            return "D";
        }
    }
    
}

function game(click) {
        
    result = playRound(click);
    if (result === "P") {
        playerScore ++; 
    } else if (result === "C") {
        computerScore ++;
    }; 
   
    
    var scoreBoard = `Player ${playerScore} : Computer ${computerScore}`;
    document.querySelector(".scoreboard").textContent = scoreBoard; 

    
    // if (playerScore > computerScore) {        
    //     return "You Win the Round! " + scoreBoard;
    // } else if (playerScore < computerScore) {
    //     return "You Lose the Round. " + scoreBoard;
    // } else {
    //     return "Draw! " + scoreBoard;
    // }
}
for (let i = 0; i < document.querySelectorAll(".choice").length; i++) {
    document.querySelectorAll(".choice")[i].addEventListener("click", function() {
        game(this);
    });
}

document.querySelector(".reset").addEventListener("click", function() {
    playerScore = 0;
    computerScore = 0;
    document.querySelector(".scoreboard").textContent = "Player 0 : Computer: 0";
    document.querySelector(".announcer").textContent = "Click one of the three choices"
})
