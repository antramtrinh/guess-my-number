'use strict';

const lowest = 1;
const highest = 20;
const scoreClass = document.querySelector('.score');
const between = document.querySelector('.between');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const number = document.querySelector('.number');
const body = document.querySelector('body');
// const highScoreClass = document.querySelector('.highScore');
let score = highest;
let highScore = 0;
let secretNumber;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

const randomNumber = function (numHighest, numLowest) {
    return Math.floor(Math.random() * (numHighest - numLowest + 1) + numLowest);
};

secretNumber = randomNumber(highest, lowest);
scoreClass.textContent = score;
between.textContent = `(Between ${lowest} and ${highest})`;

console.log(secretNumber);

// check button
btnCheck.addEventListener('click', function () {
    // get value from user input (always be a str)
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        /* BUG guess != 0, guess === 0
            if number is between negative and positive, 
            then num 0 will be available and it's not logic in this IF statement.
        */

        // check if user do not input value
        displayMessage('Input a number, please!');
    } else if (guess >= lowest && guess <= highest) {
        // when win
        if (guess === secretNumber) {
            if (score > highScore) {
                highScore = score;
            }

            displayMessage('Correct number 🏆🏆🏆');
            document.querySelector('.highscore').textContent = highScore;
            number.textContent = secretNumber;

            // change css style
            body.style.backgroundColor = '#46b47f';
            number.style.width = '30rem';
        } else {
            // when wrong guess
            displayMessage(
                guess > secretNumber ? 'Too high⬆️⬆️⬆️' : 'Too low⬇️⬇️⬇️'
            );
            score--;

            if (score < 1) {
                displayMessage('You lost the game, please try again');
                scoreClass.textContent = 0;
                body.style.backgroundColor = '#e4283f';
            } else {
                scoreClass.textContent = score;
            }
        }
    } else {
        displayMessage(`Between ${lowest} & ${highest}`);
    }
});

// again button
btnAgain.addEventListener('click', function () {
    // reset initial value
    score = 20;
    secretNumber = randomNumber(highest, lowest);
    console.log(secretNumber);

    number.textContent = '?';
    document.querySelector('.guess').value = '';
    scoreClass.textContent = score;
    displayMessage('Start guessing...');
    // restore initial css
    body.style.backgroundColor = '#222';
    number.style.width = '15rem';
});
