// Randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’ for the computer.
function getComputerChoice() {
    const computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {
        return "rock";
    } if (computerSelection === 1) {
        return "paper";
    } if (computerSelection === 2) {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Start the game by typing either rock, paper, or scissors: ").toLowerCase();
    if (playerSelection === computerSelection) {
        console.log("Tie.");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
      console.log("You win. Rock beats scissors!");
      playerScore += 1
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
       console.log("You win. Paper beats rock!");
       playerScore += 1
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
       console.log("You win. Scissors beats paper!");
       playerScore += 1
    }
    else {
       console.log("You lose. The computer chose " + computerSelection + ".")
       computerScore += 1
    } 
}

function gameEnd() {
    if (playerScore > computerScore) {
        console.log("You win the game!")
    }
    else if (playerScore < computerScore) {
        console.log("The computer won the game. Better luck next time!")
    }
    else if (playerScore === computerScore) {
        console.log("It's a tie!")
    }
}

function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    gameEnd();
 }

computerScore = 0
playerScore = 0
game();