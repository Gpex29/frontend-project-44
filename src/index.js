#!/usr/bin/env node

import readlineSync from 'readline-sync';

const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
const needForWin = 3;

function greeting() {
  return `Hello, ${userName}!`;
}

function getRandom(range) {
  return Math.floor(Math.random() * range);
}

function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getWrong(userAnswer, correctAnswer) {
  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
}

function gameLauncher(correctCount, game) {
  if (correctCount === needForWin) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const [userAnswer, correctAnswer] = game();
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    gameLauncher(correctCount + 1, game);
  } else {
    console.log(getWrong(userAnswer, correctAnswer));
  }
}

export {
  userName, needForWin, greeting, getRandom, gameLauncher, getRandomBetween,
};
