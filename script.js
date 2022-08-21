'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const imgEl = document.querySelector('img');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

score1El.textContent = 0;
score0El.textContent = 0;
let currentScore = 0;

diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  imgEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
  }
});
