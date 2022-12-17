const weapons = document.querySelectorAll('button');
weapons.forEach((weapon) => {
    
    weapon.addEventListener('click', playRound);
    
  });

function playRound (buttonClicked) {
    const playerScore = document.querySelector('#player-score');
    const computerScore = document.querySelector('#computer-score');
    const outcomeText = document.querySelector('#outcome-text')
    const matchText = document.querySelector('#match-text')
    const playerSelection = buttonClicked.currentTarget.id
    const weapons = ['rock', 'paper', 'scissors'];
    //This is an Immediately Invoked Function Expression:
    const computerSelection = (() => {return weapons[Math.floor(Math.random() * 3)];})()

    console.log('The computer chose ' + computerSelection);
    console.log('The player chose ' + playerSelection);
    if ((playerScore.textContent == 5) || (computerScore.textContent == 5)) {
        playerScore.textContent = '0';
        computerScore.textContent = '0';
        matchText.textContent = '';
    } if (playerSelection == computerSelection) {
        outcomeText.textContent = ('Draw! Let\'s try again...');
        return;
    } if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            outcomeText.textContent = 'Rock beats Scissors! You win!';
            playerScore.textContent = ((parseInt(playerScore.textContent)) + 1);
        } else if (computerSelection == 'paper') {
            outcomeText.textContent = 'Paper beats Rock! Get owned son!';
            computerScore.textContent = ((parseInt(computerScore.textContent)) + 1);
        }
    } if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            outcomeText.textContent = 'Paper beats Rock! You win!';
            playerScore.textContent = ((parseInt(playerScore.textContent)) + 1);
        } else if (computerSelection == 'scissors') {
            outcomeText.textContent = 'Scissors beats Paper. This dude brought paper to a scissors fight.';
            computerScore.textContent = ((parseInt(computerScore.textContent)) + 1);
        }
    } if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            outcomeText.textContent = 'Scissors beats Paper! You win!';
            playerScore.textContent = ((parseInt(playerScore.textContent)) + 1);
        } else if (computerSelection == 'rock') {
            outcomeText.textContent = 'Rock beats Scissors nerd. Destroyed.';
            computerScore.textContent = ((parseInt(computerScore.textContent)) + 1);
        }
    } if (playerScore.textContent == 5) {
        matchText.textContent = 'You won the match! Click a button to play again.';
    } if (computerScore.textContent == 5) {
        matchText.textContent = 'You lost the match. Click a button to play again.';
    }    
}