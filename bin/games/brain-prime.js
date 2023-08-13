#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  greeting, getRandom, gameLauncher,
} from '../../src/index.js';

const gameConditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  if (num <= 1) {
    return 'no';
  }
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}

function gamePrime() {
  const num = getRandom(20);
  const question = `Question: ${num}`;
  const correctAnswer = isPrime(num);
  const userAnswer = readlineSync.question(`${question}\nYour answer: `);
  return [userAnswer, correctAnswer];
}

console.log(greeting());
console.log(gameConditions);
console.log(gameLauncher(0, gamePrime));
