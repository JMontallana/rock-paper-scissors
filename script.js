const choices = ['rock', 'paper', 'scissor'];

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    winner = getWinner(playerSelection, computerSelection);
    console.log(winner)
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function validateChoice(choice) {
    return choices.includes(choice)
}

function getPlayerChoice() {
    
    let input = prompt("Enter rock, paper, scissor");
    while ( input == null ) {
        input = prompt("Enter rock, paper or scissor");
    }
    input = input.toLowerCase();
    let check = validateChoice(input);
    console.log(check)
    while (check == false) {
        input = prompt("Invalid input. Please enter rock, paper or scissor");
        while ( input == null ) {
            input = prompt("Enter rock, paper or scissor");
        }
        input = input.toLowerCase();
        check = validateChoice(input);
    }
    return input;
}

function getWinner(choicePlayer, choiceComputer) {
    if (choicePlayer === choiceComputer) {
        return `Its a tie ${choiceComputer} Ties with ${choicePlayer}`
    } else
        if ((choicePlayer == "rock" && choiceComputer == "scissor") ||
            (choicePlayer == "paper" && choiceComputer == "rock") ||
            (choicePlayer == "scissor" && choiceComputer == "paper")) {
                return `Player wins ${choiceComputer} is beaten by ${choicePlayer}`
            } else {
                return `Computer wins ${choicePlayer} is beaten by ${choiceComputer}`
            }
}

function game() {
    for ( let i = 1; i <= 5; i++) {
        playRound();
    }
}
game();


