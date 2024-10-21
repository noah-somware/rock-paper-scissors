function getHumanChoice(input) {
    console.log(input);
    if (input !== 'rock' && input !== 'paper' && input !== 'scissors') {
        console.error('Incorrect input. Please enter either "rock", "paper", or "scissors".');
        return;
    } else {
        return input;
    }
}

function getComputerChoice() {
    let num = Math.floor(Math.random() * 100 + 1) % 3;
    switch (num) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

let humanScore = 0;
let computerScore = 0;

const buttonsDiv = document.querySelector('#buttons');

const humanScoreReadout = document.querySelector('#humanScore');
const computerScoreReadout = document.querySelector('#computerScore');

function playRound(event) {
    let input = event.target.id.toLowerCase();

    let humanChoice = getHumanChoice(input);
    let computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
    }

    switch (humanChoice) {
        case 'rock':
            if (computerChoice === 'scissors') {
                console.log('Rock beats scissors!');
                humanScore++;
                break;
            } else {
                console.log('Rock loses to paper!');
                computerScore++;
                break;
            }
        case 'paper':
            if (computerChoice === 'rock') {
                console.log('Paper beats rock!');
                humanScore++;
                break;
            } else {
                console.log('Paper loses to scissors!');
                computerScore++;
                break;
            }
        case 'scissors':
            if (computerChoice === 'paper') {
                console.log('Scissors beat paper!');
                humanScore++;
                break;
            } else {
                console.log('Scissors loses to rock!');
                computerScore++;
                break;
            }
        default:
            console.error('Whoops!');
            return;
    }

    console.info(`CURRENT SCORE
        You: ${humanScore}
        Computer: ${computerScore}`);

    if (Math.max(humanScore, computerScore) > 4) {
        endGame();
        return;
    }

    humanScoreReadout.textContent = humanScore;
    computerScoreReadout.textContent = computerScore;
}

function endGame() {
    if (humanScore > 4) {
        alert('You win!');
    }
    if (computerScore > 4) {
        alert('You lose!');
    }

    humanScore = 0;
    computerScore = 0;

    humanScoreReadout.textContent = '';
    computerScoreReadout.textContent = '';

    buttonsDiv.removeEventListener('click', playRound);
}

function playGame() {
    console.log('Starting game...');

    humanScore = 0;
    computerScore = 0;

    humanScoreReadout.textContent = humanScore;
    computerScoreReadout.textContent = computerScore;

    buttonsDiv.removeEventListener('click', playRound);
    buttonsDiv.addEventListener('click', playRound);

    // while ((computerScore + humanScore < 3) || (computerScore === humanScore)) {
    //     playRound();
    // }

    return;
}

const startButton = document.querySelector('#startNewGame');
startButton.addEventListener('click', playGame);
