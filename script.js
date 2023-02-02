const choice = ['rock', 'paper', 'scissor'];

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    winner = getWinner(playerSelection, computerSelection);
    console.log(winner)
}

function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)]
}

function getPlayerChoice() {
    let input = prompt("Enter rock, paper, scissor")
    input = input.toLowerCase();
    return input;
}

function getWinner(choicePlayer, choiceComputer) {
    if (choicePlayer === choiceComputer) {
        return "Tie"
    } else
        if ((choicePlayer == "rock" && choiceComputer == "scissor") ||
            (choicePlayer == "paper" && choiceComputer == "rock") ||
            (choicePlayer == "scissor" && choiceComputer == "paper")) {
                return "Player wins"
            } else {
                return "Computer wins"
            }
}

function game() {
    for ( let i = 1; i <= 5; i++) {
        playRound();
    }
}
game();


