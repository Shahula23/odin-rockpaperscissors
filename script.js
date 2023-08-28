let computerScore = 0;
let playerScore = 0;


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

    if (playerSelection === computerSelection) {
        document.getElementById("playerScore").innerHTML = "You: " + playerScore;
        document.getElementById("computerScore").innerHTML = "Computer: " + computerScore;
        document.getElementById("result").innerHTML = "Tie!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        document.getElementById("playerScore").innerHTML = "You: " + playerScore;
        document.getElementById("computerScore").innerHTML = "Computer: " + computerScore;
        document.getElementById("result").innerHTML = "You win! Rock beats scissors!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        document.getElementById("playerScore").innerHTML = "You: " + playerScore;
        document.getElementById("computerScore").innerHTML = "Computer: " + computerScore;
        document.getElementById("result").innerHTML = "You win. Paper beats rock!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        document.getElementById("playerScore").innerHTML = "You: " + playerScore;
        document.getElementById("computerScore").innerHTML = "Computer: " + computerScore;
        document.getElementById("result").innerHTML = "You win. Scissors beats paper!";
    }
    else {
       computerScore += 1
       document.getElementById("playerScore").innerHTML = "You: " + playerScore;
       document.getElementById("computerScore").innerHTML = "Computer: " + computerScore;
       document.getElementById("result").innerHTML = "You lose. The computer chose " + computerSelection + ".";
    }

    if (playerScore === 5 || computerScore === 5) {
        gameEnd();
    }
}

function gameEnd() {
    const container = document.querySelector("#container");
    const playAgain = document.createElement("BUTTON");
    playAgain.classList.add("playAgain");
    playAgain.textContent = "Play Again";
    container.appendChild(playAgain)
    playAgain.addEventListener("click", () => {
    reset()
});

    if (playerScore > computerScore) {
        document.getElementById("finalResult").innerHTML = "You win the game!"
    }
    else if (playerScore < computerScore) {
        document.getElementById("finalResult").innerHTML = "The computer won the game. Better luck next time!"
    }
}

function reset() {
    location.reload()
}

 const rock = document.querySelector("#rock");
 rock.addEventListener("click", () => {
    if (playerScore < 5 && computerScore < 5){
        playRound("rock")
    }
 });

 const paper = document.querySelector("#paper");
 paper.addEventListener("click", () => {
    if (playerScore < 5 && computerScore < 5){
        playRound("paper")
    }
 });

 const scissors = document.querySelector("#scissors");
 scissors.addEventListener("click", () => {
    if (playerScore < 5 && computerScore < 5){
        playRound("scissors")
    }
});