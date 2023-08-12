#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  greeting, getRandom, gameLauncher,
} from '../src/index.js';

const gameConditions = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(number) {
  return number % 2 === 0;
}

function gameIsEven() {
  const questionNumber = getRandom(100);
  const question = `Question: ${questionNumber}`;
  const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`${question}\nYour answer: `);
  return [userAnswer, correctAnswer];
}

console.log(greeting());
console.log(gameConditions);
console.log(gameLauncher(0, gameIsEven));
