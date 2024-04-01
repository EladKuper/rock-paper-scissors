function getComputerChoice() {
    const playOptions = ['rock', 'paper', 'scissors'];
    let random = Math.floor( Math.random() * playOptions.length);
    return playOptions[random];
}

function capitalFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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



function playGame() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        let roundResult = playRound();
        console.log(roundResult); 
        if (roundResult.slice(0, 5) === "You w") {
            playerWins++;
        }
        else if (roundResult.slice(0, 5) === "You l") {
            computerWins++;
        }
        console.log("round "+i+"   player wins: "+playerWins+", computer wins: "+computerWins);
    }
    if (playerWins > computerWins) {
        return "You are the winner!";
    } 
    else if (computerWins > playerWins) {
        return "You are the loser!";
    }
    else {
        return "It's a tie!";
    }
}

console.log(playGame());