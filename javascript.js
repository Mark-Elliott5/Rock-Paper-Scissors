function getComputerChoice() {
    const weapons = ['rock', 'paper', 'scissors'];
    let computerChoice = '';
    let indexNumber = Math.floor(Math.random()*3);
    return computerChoice = weapons[indexNumber];
}

function playRound (playerSelection = prompt(), computerSelection = getComputerChoice()) {
    const weapons = ['rock', 'paper', 'scissors'];
    let playerScore = 0;
    let computerScore = 0;
    playerSelection = playerSelection.toLowerCase();
    console.log('The computer chose ' + computerSelection);
    console.log('The player chose ' + playerSelection);
    if (playerSelection == computerSelection) {
        console.log('Draw! Refresh the page to try again.')
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            console.log('Rock beats Scissors! You win!');
            return playerScore += 1;
        }
        else if (computerSelection == 'paper') {
            console.log('Paper beats Rock! Get owned son!');
            return computerScore += 1;
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            console.log('Paper beats Rock! You win!');
            return playerScore += 1;
        } else if (computerSelection == 'scissors') {
            console.log('Scissors beats Paper. This dude brought paper to a scissors fight.');
            return computerScore += 1;
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            console.log('Scissors beats Paper! You win!');
            return playerScore += 1;
        } else if (computerSelection == 'rock') {
            console.log('Rock beats Scissors nerd. Destroyed.');
            return computerScore += 1;
        }
    } else if (!(weapons.includes(playerSelection))) {
        console.log('You can\'t use that weapon in Rock Paper Scissors sir. Refresh the page to try again.');
        return;
    }
}

playRound()


