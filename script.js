function getComputerChoice() {
    const playOptions = ['rock', 'paper', 'scissors'];
    let random = Math.floor( Math.random() * playOptions.length);
    return playOptions[random];
}

function playRound() {
    let input = prompt("Please choose an option between 'Rock', 'Paper', and 'Scissors'", "Rock");
    let playerSelection = input.toLowerCase();
    let computerSelection = getComputerChoice();
    
}

