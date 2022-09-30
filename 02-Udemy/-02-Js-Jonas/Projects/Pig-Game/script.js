'use strict';

// Selecting elemnts
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');

const current0El = document.querySelector('#current--0');
const current1El = document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

console.log(btnNew);
// Intial data
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let activePlayer = 0;
let currentScore = 0;
let playing = true;
const scores = [0, 0];

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1- Generate dice number
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2- Change dice img
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3- Add the dice number to current
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = Number(!activePlayer);
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 10) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
    } else {
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = Number(!activePlayer);
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
    }
  }
});

btnNew.addEventListener('click', function () {
  currentScore = 0;
  playing = true;
  diceEl.classList.add('hidden');
  for (let i = 0; i < scores.length; i++) {
    scores[i] = 0;
  }
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');

  activePlayer = 0;
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
});

// btnRoll.addEventListener('click', function () {
//   // 1- Generate dice number
//   const dice = Math.trunc(Math.random() * 6) + 1;

//   // 2- Change dice img
//   if (dice !== 1 && player0.classList.contains('player--active')) {
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     // 3- Add the dice number to current
//     currentScore += dice;
//     current0El.textContent = currentScore;
//   } else if (dice !== 1 && player1.classList.contains('player--active')) {
//     diceEl.src = `dice-${dice}.png`;
//     currentScore += dice;
//     current1El.textContent = currentScore;
//   } else if (dice === 1 && player0.classList.contains('player--active')) {
//     diceEl.src = `dice-${dice}.png`;
//     currentScore = 0;
//     current0El.textContent = currentScore;
//     player0.classList.remove('player--active');
//     player1.classList.add('player--active');
//   } else if (dice === 1 && player1.classList.contains('player--active')) {
//     diceEl.src = `dice-${dice}.png`;
//     currentScore = 0;
//     current1El.textContent = currentScore;
//     player0.classList.add('player--active');
//     player1.classList.remove('player--active');
//   }
// });
