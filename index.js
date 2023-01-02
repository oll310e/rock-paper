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

console.log(getComputerChoice())