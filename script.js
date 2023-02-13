const choices = ['rock', 'paper', 'scissor'];
const computerChoiceDisplay = document.querySelector('.computer');
const playerChoiceDisplay = document.querySelector('.player');
const buttons = document.querySelectorAll('button');
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const finalResult = document.querySelector('.final-result');
const finalResultStyle = document.querySelector('.final-result').style;//use to style dom

let userChoice;
let computerChoice;
let userScore = 0;
let compScore = 0;

computerScore.textContent = compScore;
playerScore.textContent = userScore;

//event to handle the function everytime we press button
function handleClick(e) {
    userChoice = e.target.id;
    playerChoiceDisplay.textContent = userChoice;
    getComputerChoice();
    getResult(userChoice, computerChoice);

    //solution to reset the game when it reach to five wins
    if(userScore == 5) {
        compScore = 0;
        userScore = 0;
        computerScore.textContent = compScore; //set score 
        playerScore.textContent = userScore; //set score
        finalResult.textContent = 'Congratulations Player wins';
        finalResultStyle.color = 'Green';
        
    } else
        if (compScore == 5){
            compScore = 0;
            userScore = 0;
            computerScore.textContent = compScore;
            playerScore.textContent = userScore;
            finalResult.textContent = 'Game Over! Computer wins';
            finalResultStyle.color = 'Red';    
        }
}

buttons.forEach((button) => {
    button.addEventListener('click', handleClick)
});

//get a random value from array choices
function getComputerChoice() {
    const computer = choices[Math.floor(Math.random() * choices.length)];
    computerChoice = computer;
    computerChoiceDisplay.textContent = computerChoice;
}

//sulotion to get the result 
function getResult(player, computer) {
    if (player === computer) {
        finalResultStyle.color = 'black';
        finalResult.textContent = 'Tie';
        playerScore.textContent = userScore;
        computerScore.textContent = compScore;
    } else
        if ((player == 'rock' && computer == 'scissor') ||
            (player == 'paper' && computer == 'rock') ||
            (player == 'scissor' && computer == 'paper')) {
                finalResultStyle.color = 'black';
                finalResult.textContent = 'You win';
                playerScore.textContent = userScore++ +1; //added +1 because default value is 0
            } else {
                finalResultStyle.color = 'black';
                finalResult.textContent = 'Computer win';
                computerScore.textContent = compScore++ +1; 
            }
}






