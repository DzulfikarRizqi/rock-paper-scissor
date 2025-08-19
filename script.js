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

let humanChoice = getHumanChoice();
console.log(humanChoice);
let computerChoice = getComputerChoice();
console.log(computerChoice);