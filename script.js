const choices = ['rock', 'paper', 'scissor'];
const computerChoiceDisplay = document.querySelector('.computer');
const playerChoiceDisplay = document.querySelector('.player');
const buttons = document.querySelectorAll('button');
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const finalResult = document.querySelector('.final-result');

let userChoice;
let computerChoice;
let userScore = 0;
let compScore = 0;

computerScore.textContent = compScore;
playerScore.textContent = userScore;

function handleClick(e) {
    userChoice = e.target.id;
    playerChoiceDisplay.textContent = userChoice;
    getComputerChoice();
    getResult(userChoice, computerChoice);
    
}

buttons.forEach((button) => {
    button.addEventListener('click', handleClick)
});

function getComputerChoice() {
    const computer = choices[Math.floor(Math.random() * choices.length)];
    computerChoice = computer;
    computerChoiceDisplay.textContent = computerChoice;
}

function getResult(player, computer) {
    if (player === computer) {
        finalResult.textContent = 'Tie';
        playerScore.textContent = userScore;
        computerScore.textContent = compScore;
    } else
        if ((player == 'rock' && computer == 'scissor') ||
            (player == 'paper' && computer == 'rock') ||
            (player == 'scissor' && computer == 'paper')) {
                finalResult.textContent = 'You win';
                playerScore.textContent = userScore++ +1;
            } else {
                finalResult.textContent = 'Computer win';
                computerScore.textContent = compScore++ +1;
            }
}




