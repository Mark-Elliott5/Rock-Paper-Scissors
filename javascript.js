function getComputerChoice() {
    let weapon = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = '';
    let indexNumber = Math.floor(Math.random()*3);
    return computerChoice = weapon[indexNumber];
}

function createGame (playerSelection = prompt(), computerSelection = getComputerChoice()) {
    console.log('The computer chose ' + computerSelection);
    console.log('The player chose ' + playerSelection);
    if (playerSelection == computerSelection) {
        console.log('Draw! Refresh the page to try again.')
    } else if (playerSelection == 'Rock') {
        if (computerSelection == 'Scissors') {
            console.log('Rock beats Scissors! You win!');
            return;
        }
        else if (computerSelection == 'Paper') {
            console.log('Paper beats Rock! Get owned son!');
            return;
        }
    } else if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock') {
            console.log('Paper beats Rock! You win!');
            return;
        } else if (computerSelection == 'Scissors') {
            console.log('Scissors beats Paper. This dude brought paper to a scissors fight.');
            return;
        }
    } else if (playerSelection == 'Scissors') {
        if (computerSelection == 'Paper') {
            console.log('Scissors beats Paper! You win!');
            return;
        } else if (computerSelection == 'Rock') {
            console.log('Rock beats Scissors nerd. Destroyed.');
            return;
        }
    } 
}

createGame()


