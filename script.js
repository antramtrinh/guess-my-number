'use strict';

const lowest = 1;
const highest = 20;
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
document.querySelector('.score').textContent = score;
document.querySelector(
    '.between'
).textContent = `(Between ${lowest} and ${highest})`;

console.log(secretNumber);

// check button
document.querySelector('.check').addEventListener('click', function () {
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
            document.querySelector('.number').textContent = secretNumber;

            // change css style
            document.querySelector('body').style.backgroundColor = '#46b47f';
            document.querySelector('.number').style.width = '30rem';
        } else {
            // when wrong guess
            displayMessage(
                guess > secretNumber ? 'Too high⬆️⬆️⬆️' : 'Too low⬇️⬇️⬇️'
            );
            score--;

            if (score < 1) {
                displayMessage('You lost the game, please try again');
                document.querySelector('.score').textContent = 0;
                document.querySelector('body').style.backgroundColor =
                    '#e4283f';
            } else {
                document.querySelector('.score').textContent = score;
            }
        }
    } else {
        displayMessage(`Between ${lowest} & ${highest}`);
    }
});

// again button
document.querySelector('.again').addEventListener('click', function () {
    // reset initial value
    score = 20;
    secretNumber = randomNumber(highest, lowest);
    console.log(secretNumber);

    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    // restore initial css
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
