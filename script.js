function getComputerChoice() {
    const playOptions = ['rock', 'paper', 'scissors'];
    let random = Math.floor( Math.random() * playOptions.length);
    return playOptions[random];
}

function playerWonOrLost(player, computer) {
    if (player === "rock") {
        if (computer === "scissors") return "won";
        else if (computer === "paper") return "lost";
        else return "tie";
    }
    else if (player === "paper") {
        if (computer === "rock") return "won";
        else if (computer === "scissors") return "lost";
        else return "tie";
    }
    else if (player === "scissors") {
        if (computer === "paper") return "won";
        else if (computer === "rock") return "lost";
        else return "tie";
    }
    else return false;
}

function playRound() {
    let input = prompt("Please choose an option between 'Rock', 'Paper', and 'Scissors'", "Rock");
    let playerSelection = input.toLowerCase();
    let computerSelection = getComputerChoice();

    let playerIsWinner = playerWonOrLost(playerSelection, computerSelection);
    if (playerIsWinner === "won") {
        return "You won! " +playerSelection+ " beats " +computerSelection; 
    }
    else if (playerIsWinner === "lost") {
        return "You lost! " +computerSelection+ " beats " + playerSelection;
    }
    else if (playerIsWinner === "tie") {
        return "It's a tie!"
    }
    else return "Check your spelling"
}                                                                               

const buttons = document.querySelector("#buttons");

const btnRock = document.createElement('button');
btnRock.id = 'rock';
btnRock.textContent = 'Rock';
buttons.appendChild(btnRock);
const btnPaper = document.createElement('button');
btnPaper.id = 'paper';
btnPaper.textContent = 'Paper';
buttons.appendChild(btnPaper);
const btnScissors = document.createElement('button');
btnScissors.id = 'scissors';
btnScissors.textContent = 'Scissors';
buttons.appendChild(btnScissors);

buttons.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            
    }
})

console.log(playRound());