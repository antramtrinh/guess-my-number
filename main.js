'use strict';

/*
document.querySelector('.message').textContent = 'Correct number 🎉🎉🎉';
document.querySelector('.score').textContent = 10;
document.querySelector('.highscore').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let rndInt = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// check button
document
    .querySelector('.check')
    .addEventListener('click', function () /*if func has a name = check*/ {
        const guess = Number(document.querySelector('.guess').value);
        console.log(typeof guess);

        if (!guess) {
            document.querySelector('.message').textContent =
                'Please! input a number (❁´◡`❁)';

        } else if (guess === rndInt) { /* When win */
            document.querySelector('.message').textContent =
                'Correct number 🎉🎉🎉';
            document.querySelector('.number').textContent = rndInt;

            // Display high score when the game end
            if (score > highscore) {
                document.querySelector('.highscore').textContent = score;
            }

            // change css style when win
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
        } else {
            if (guess > rndInt) { /* when too high & low */
                document.querySelector('.message').textContent = 'Too high 👎';
            } else {
                document.querySelector('.message').textContent = 'Too low 👎';
            }
            score--;
            if (score > 0) {
                document.querySelector('.score').textContent = score;
            } else {
                score = 0;
                document.querySelector('.score').textContent = score;
                document.querySelector('.message').textContent =
                    'You lost the game, please try again!';
            }
            // document.querySelector('.highscore').textContent = score;
        }
    });

// again button
document.querySelector('.again').addEventListener('click', function () {
    rndInt = Math.trunc(Math.random() * 20) + 1;
    // restore initial value
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    score = 20;
    document.querySelector('.score').textContent = score;

    // restore initial css
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

// document.querySelector('.check').addEventListener('keypress', function (e) {
//   if (e.key === 'Enter') {
//     check();
//   }
// });