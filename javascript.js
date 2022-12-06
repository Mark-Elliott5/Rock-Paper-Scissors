function getComputerChoice() {
    const weapons = ['rock', 'paper', 'scissors'];
    let computerChoice = '';
    let indexNumber = Math.floor(Math.random()*3);
    return computerChoice = weapons[indexNumber];
}

function createGame (playerSelection = prompt(), computerSelection = getComputerChoice()) {
    const weapons = ['rock', 'paper', 'scissors'];
    playerSelection = playerSelection.toLowerCase();
    console.log('The computer chose ' + computerSelection);
    console.log('The player chose ' + playerSelection);
    if (playerSelection == computerSelection) {
        console.log('Draw! Refresh the page to try again.')
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            console.log('Rock beats Scissors! You win!');
            return;
        }
        else if (computerSelection == 'paper') {
            console.log('Paper beats Rock! Get owned son!');
            return;
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            console.log('Paper beats Rock! You win!');
            return;
        } else if (computerSelection == 'scissors') {
            console.log('Scissors beats Paper. This dude brought paper to a scissors fight.');
            return;
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            console.log('Scissors beats Paper! You win!');
            return;
        } else if (computerSelection == 'rock') {
            console.log('Rock beats Scissors nerd. Destroyed.');
            return;
        }
    } else if (!(weapons.includes(playerSelection))) {
        console.log('You can\'t use that weapon in Rock Paper Scissors sir. Refresh the page to try again.');
        return;
    }
}

createGame()


