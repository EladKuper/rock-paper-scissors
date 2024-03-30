function getComputerChoice() {
    const playOptions = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor( Math.random() * playOptions.length);
    return playOptions[random];
}
