
const options = ["Rock", "Paper", "Scissors"];

function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)];

}

function playRound() {

    const playerSelection = toTitleCase(prompt("What's your choice?: "));
    const computerSelection = getComputerChoice();

    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") {
            console.log("Draw! Rock vs Rock."); 
            return "D";
        } else if (computerSelection === "Paper") {
            console.log("You Lose! Paper beats Rock.");
            return "C";
        } else {
            console.log("You Win! Rock beats Scissors");
            return "P";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            console.log("You Win! Paper beats Rock.");
            return "P";
        } else if (computerSelection === "Paper") {
            console.log("Draw! Paper vs Paper.");
            return "D";
        } else {
            console.log("You Lose! Scissors beats Paper.");
            return "C";
        }
    } else {
        if (computerSelection === "Rock") {
            console.log("You Lose! Rock beats Scissors."); 
            return "C";
        } else if (computerSelection === "Paper") {
            console.log("You Win! Scissors beats Paper.");
            return "P";
        } else {
            console.log("Draw! Scissors vs Scissors.");
            return "D";
        }
    }
    
}

function game() {
    var playerScore = 0;
    var computerScore = 0;

    for (let i=0; i<5; i++) {
        result = playRound();
        if (result === "P") {
            playerScore ++; 
        } else if (result === "C") {
            computerScore ++;
        }; 
    }
    
    var scoreBoard = `Player ${playerScore} : Computer ${computerScore}`;
    
    if (playerScore > computerScore) {        
        return "You Win the Round! " + scoreBoard;
    } else if (playerScore < computerScore) {
        return "You Lose the Round. " + scoreBoard;
    } else {
        return "Draw! " + scoreBoard;
    }
}
