#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  greeting, getRandom, gameLauncher,
} from '../../src/index.js';

const gameConditions = 'Find the greatest common divisor of given numbers.';

function findGCD(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return findGCD(num2, num1 % num2);
}

function gameGCD() {
  const num1 = getRandom(25);
  const num2 = getRandom(25);
  const question = `Question: ${num1} ${num2}`;
  const correctAnswer = findGCD(num1, num2);
  const userAnswer = Number(readlineSync.question(`${question}\nYour answer: `));
  return [userAnswer, correctAnswer];
}

console.log(greeting());
console.log(gameConditions);
console.log(gameLauncher(0, gameGCD));
