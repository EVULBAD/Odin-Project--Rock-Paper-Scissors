let hand = ["rock","paper","scissors"];

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == computerChoice){
        return null
    } else if ((playerChoice == "rock" && computerChoice == "paper")
        || (playerChoice == "paper" && computerChoice == "scissors")
        || (playerChoice == "scissors" && computerChoice == "rock")) {
        return "comwin"
    } else if (playerChoice != "rock"
        && playerChoice != "paper"
        && playerChoice != "scissors") {
        return "bad"
    } else {
        return "playwin"
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i < 6; i++){
        let computerChoice = hand[getComputerChoice()];
        let playerChoice = prompt("rock, paper, scissors, SHOOT");
        if (playRound(playerChoice, computerChoice) == "comwin") {
            computerScore = computerScore + 1;
            console.log("GAME " + i + ":");
            console.log("you played: " + playerChoice);
            console.log("computer played: " + computerChoice);
            console.log("+1 point to computer!")
        } else if (playRound(playerChoice, computerChoice) == "playwin") {
            playerScore = playerScore + 1;
            console.log("GAME " + i + ":");
            console.log("you played: " + playerChoice);
            console.log("computer played: " + computerChoice);
            console.log("+1 point to player!")
        } else if (playRound(playerChoice, computerChoice) == "bad") {
            if (i < 0) {
                console.log("it's rock paper scissors. wtf is " + playerChoice + "?? try again.");;
            } else {
                i = i - 1;
                console.log("it's rock paper scissors. wtf is " + playerChoice + "?? try again.")
            }
        } else {
            console.log("GAME " + i + ":");
            console.log("you both played " + computerChoice + "."); 
            console.log("no points!")
        }
    }
    if (computerScore > playerScore) {
        return "COMPUTER WINS with " + computerScore + " points!"
    } else if (playerScore > computerScore) {
        return "PLAYER WINS with " + playerScore + " points!"
    } else if (playerScore === computerScore) {
        return "DRAW! no winner!"
    } else {
        // do nothing
    }
}

console.log(game());