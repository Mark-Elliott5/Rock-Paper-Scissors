function getComputerChoice() {
    const weapons = ['rock', 'paper', 'scissors'];
    let computerChoice = '';
    let indexNumber = Math.floor(Math.random() * 3);
    return computerChoice = weapons[indexNumber];
}

function playRound (playerSelection = prompt(), computerSelection = getComputerChoice()) {
    const weapons = ['rock', 'paper', 'scissors'];
    let score = 0;
    playerSelection = playerSelection.toLowerCase();
    console.log('The computer chose ' + computerSelection);
    console.log('The player chose ' + playerSelection);
    if (playerSelection == computerSelection) {
        console.log('Draw! Let\'s try again...')
        return;
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            console.log('Rock beats Scissors! You win!');
            return score += 1;
        }
        else if (computerSelection == 'paper') {
            console.log('Paper beats Rock! Get owned son!');
            return score -= 1;
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            console.log('Paper beats Rock! You win!');
            return score += 1;
        } else if (computerSelection == 'scissors') {
            console.log('Scissors beats Paper. This dude brought paper to a scissors fight.');
            return score -= 1;
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            console.log('Scissors beats Paper! You win!');
            return score += 1;
        } else if (computerSelection == 'rock') {
            console.log('Rock beats Scissors nerd. Destroyed.');
            return score -= 1;
        }
    } else if (!(weapons.includes(playerSelection))) {
        console.log('You can\'t use that weapon in Rock Paper Scissors sir. Let\'s try again...');
        return;
    }
}

function game(gameCount = 5) {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < (gameCount); i++) {
        let result = playRound();
        if (result == 1) {
            playerScore += 1;
            continue;
        } else if (result == -1) {
            computerScore += 1;
            continue;
        } else {
            i--;
        }
    } if (playerScore > computerScore) {
        console.log(`You won the game! The score was ${playerScore} - ${computerScore}`)
    } else {
        console.log(`You lost to the computer. The score was ${playerScore} - ${computerScore}`)
    }
}        
game()

