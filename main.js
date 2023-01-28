let hand = ["rock","paper","scissors"];

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function playRound(playerChoice, computerChoice){
    if (playerChoice.toLowerCase() == computerChoice){
        return "Draw!";
    } else if ((playerChoice.toLowerCase() == "rock" && computerChoice == "paper")
    || (playerChoice.toLowerCase() == "paper" && computerChoice == "scissors")
    || (playerChoice.toLowerCase() == "scissors" && computerChoice == "rock")) {
        return "Computer wins!";
    } else if (playerChoice.toLowerCase() != "rock" || "paper" || "scissors") {
        return "You did it wrong, goofy! Refresh the page."
    } else {
        return "Player wins!"
    }
}

let computerChoice = hand[getComputerChoice()];
let playerChoice = prompt();

console.log(playRound(playerChoice, computerChoice));