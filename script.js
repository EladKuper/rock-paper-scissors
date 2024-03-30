function getComputerChoice() {
    const playOptions = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor( Math.random() * playOptions.length);
    return playOptions[random];
}

function playARound() {
    let input = prompt("Please choose an option between 'Rock', 'Paper', and 'Scissors'", "Rock");
    let playerSelection = input.toLowerCase();
    console.log(input);
    console.log(playerSelection);
}

console.log(playARound());