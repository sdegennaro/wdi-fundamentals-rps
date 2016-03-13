////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (!move == false) {
        return move;
    } else {
        return getInput();
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (!move == false) {
        return move;
    } else {
        return randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (computerMove === playerMove) {
        winner = 'tie';
    } else {
        switch (playerMove) {
        case 'rock':
            if (computerMove === 'scissors') {
                winner = 'player';
            } else {
                winner = 'computer';
            }
            break;
        case 'paper':
            if (computerMove === 'scissors') {
                winner = 'computer';
            } else {
                winner = 'player';
            }
            break;
        case 'scissors':
            if (computerMove === 'paper') {
                winner = 'player';
            } else {
                winner = 'computer';
            }   
            break;
        }
    }
    return winner;
}

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors.");
    var playerWins = 0;
    var computerWins = 0;
    while(playerWins < 5 && computerWins < 5) {
        playerMove = getInput();
        computerMove = randomPlay();
        console.log('Player chose '+ playerMove + ', Computer chose ' + computerMove + '.');
        if (getWinner(playerMove, computerMove) === 'player') {
            playerWins += 1;
            console.log('Player wins.');
        } else if (getWinner(playerMove, computerMove) === 'computer'){
            computerWins += 1;
            console.log('Computer wins.');
        } else {
            console.log('It is a tie.')
        }
        console.log('The current score is ' + playerWins + ' to ' + computerWins + '.')
    }
    return [playerWins, computerWins];
}

