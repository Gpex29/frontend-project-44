#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  greeting, getRandom, gameLauncher, getRandomBetween,
} from '../../src/index.js';

const gameConditions = 'What number is missing in the progression?';

function createProgression() {
  const randomLength = getRandomBetween(5, 10);
  const randomStart = getRandom(15);
  const randomStep = getRandomBetween(1, 5);
  const arr = [randomStart];
  let count = randomStart + randomStep;
  while (arr.length < randomLength) {
    arr.push(count);
    count += randomStep;
  }
  return arr;
}

function gameProgression() {
  const array = createProgression();
  const i = getRandom(array.length);
  const hiddenNum = array[i];
  array[i] = '..';
  const question = `Question: ${array.join(' ')}`;
  const correctAnswer = hiddenNum;
  const userAnswer = Number(readlineSync.question(`${question}\nYour answer: `));
  return [userAnswer, correctAnswer];
}

console.log(greeting());
console.log(gameConditions);
console.log(gameLauncher(0, gameProgression));
