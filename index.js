const getComputerChoice = function(){
    let randomAnswer = Math.floor(Math.random() * 3) + 1;
    console.log(randomAnswer)
    switch (randomAnswer) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}


let computerChoice = getComputerChoice()
console.log(computerChoice)

let playerChoice = prompt('what is you choice?').toLowerCase()

console.log(playerChoice)

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

console.log(gameStart(playerChoice, computerChoice))