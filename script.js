let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    let random = Math.random();
    if (random < 0.33) {
        return "Rock";
    }
    else if (random <0.67) {
        return "Paper";
    }
    else {
        return "Scissor";
    }
}

const getHumanChoice = () => {
    let validation = prompt("Enter your choice: Rock, Paper, or Scissor", "");
    if (validation === null) {
        alert("You cancelled the game.");
        return;
        
    } else if (validation !== "Rock" && validation !== "Paper" && validation !== "Scissor") {
        alert("Invalid choice. Please enter Rock, Paper, or Scissor.");
        return getHumanChoice();
    } else {
        return validation;
    }
}

const playRound = (humanSelection, computerSelection) => {
    if(humanSelection === computerSelection) {
        return "It's a tie!";
    } else if ((humanSelection === "Rock" && computerSelection === "Scissor") ||
               (humanSelection === "Paper" && computerSelection === "Rock") ||
               (humanSelection === "Scissor" && computerSelection === "Paper")) {
        humanScore++;
        return `You win! ${humanSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${humanSelection}.`;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore)
        alert("Congratulations! You won the game!");
    else if (humanScore < computerScore)
        alert("Sorry! You lost the game.");
    else
        alert("It's a draw!");
}

playGame();
console.log(`Human Score: ${humanScore}`);
console.log(`Computer Score: ${computerScore}`);