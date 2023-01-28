let hand = ["Rock","Paper","Scissors"];

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

console.log(hand[getComputerChoice()]);