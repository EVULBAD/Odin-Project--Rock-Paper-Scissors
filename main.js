let hand = ["rock","paper","scissors"];

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function playRound(playerChoice, computerChoice){
    if (playerChoice.toLowerCase() == computerChoice){
        return null
    } else if ((playerChoice.toLowerCase() == "rock" && computerChoice == "paper")
    || (playerChoice.toLowerCase() == "paper" && computerChoice == "scissors")
    || (playerChoice.toLowerCase() == "scissors" && computerChoice == "rock")) {
        return "comwin"
    } else if (playerChoice.toLowerCase() != ("rock" || "paper" || "scissors")) {
        return "bad"
    } else {
        return "playwin"
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        let computerChoice = hand[getComputerChoice()];
        let playerChoice = prompt();
        if (playRound(playerChoice, computerChoice) == "comwin") {
            computerScore = computerScore + 1;
        } else if (playRound(playerChoice, computerChoice) == "playwin") {
            playerScore = playerScore + 1;
        } else if (playRound(playerChoice, computerChoice) == "bad") {
            if (i < 0) {
                // do nothing
            } else {
                i = i - 1;
            }
        } else {
            // do nothing
        }
    }
    if (computerScore > playerScore) {
        return "Computer wins!"
    } else if (playerScore > computerScore) {
        return "Player wins!"
    } else if (playerScore === computerScore) {
        return "Draw!"
    } else {
        // do nothing
    }
}

console.log(game());