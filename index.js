const getComputerChoice = function(){
    let randomAnswer = Math.floor(Math.random() * 3) + 1;
    switch (randomAnswer) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

const gameStart = function(playerSelection, computerSelection){
    let result;
    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors'){
        return 'please make a valid input';
    }
    switch (playerSelection){
        case 'paper':
            if (computerSelection == 'rock') {
                result = 'win'
            } else if (computerSelection == 'scissors'){
                result = 'loss'
            } else {
                result = 'draw'
            }
            break;
        case 'rock':
            if (computerSelection == 'paper') {
                result = 'loss'
            } else if (computerSelection == 'scissors'){
                result = 'win'
            } else {
                result = 'draw'
            }
            break;
        case 'scissors':
            if (computerSelection == 'rock') {
                result = 'loss'
            } else if (computerSelection == 'paper'){
                result = 'win'
            } else {
                result = 'draw'
            }
            break;
    }
    return result
}
let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
    let playerChoice = prompt('what is you choice?').toLowerCase()
    while (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
        playerChoice = prompt('what is you choice?').toLowerCase()
    }
    let round = gameStart(playerChoice, getComputerChoice())
    if (round == 'win') {
        playerScore++
    } else if (round == 'loss') {
        computerScore++
    } else {
        computerScore++
        playerScore++
    }
}

if (playerScore > computerScore) {
    console.log('You are the champion! :D')
} else if (computerScore > playerScore) {
    console.log('The computer won!') 
} else {
    console.log('its a draw!')
}