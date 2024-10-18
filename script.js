function getHumanChoice() {
    let input = prompt('Rock, Paper, or Scissors?').toLowerCase();
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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        let humanChoice = getHumanChoice();
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
                    return;
                } else {
                    console.log('Rock loses to paper!');
                    computerScore++;
                    return;
                }
            case 'paper':
                if (computerChoice === 'rock') {
                    console.log('Paper beats rock!');
                    humanScore++;
                    return;
                } else {
                    console.log('Paper loses to scissors!');
                    computerScore++;
                    return;
                }
            case 'scissors':
                if (computerChoice === 'paper') {
                    console.log('Scissors beat paper!');
                    humanScore++;
                    return;
                } else {
                    console.log('Scissors loses to rock!');
                    computerScore++;
                    return;
                }
            default:
                console.error('Whoops!');
                return;
        }
    }

    while ((computerScore + humanScore < 3) || (computerScore === humanScore)) {
        playRound();
    }

    console.info(`FINAL SCORE
        You: ${humanScore}
        Computer: ${computerScore}`);
    
    return;
}
