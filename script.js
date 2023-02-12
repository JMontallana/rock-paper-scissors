const choices = ['rock', 'paper', 'scissor'];
const computerChoiceDisplay = document.querySelector('.computer');
const playerChoiceDisplay = document.querySelector('.player');
const buttons = document.querySelectorAll('button');
const finalResult = document.querySelector('.final-result');

let useChoice;

function handleClick(e) {
    useChoice = e.target.id;
    playerChoiceDisplay.textContent = useChoice;
    getComputerChoice();
}

buttons.forEach((button) => {
    button.addEventListener('click', handleClick)
});

function getComputerChoice() {
    const computer = choices[Math.floor(Math.random() * choices.length)];
    computerChoiceDisplay.textContent = computer;
}






