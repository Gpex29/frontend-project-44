#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  greeting, gameLauncher,
} from './index.js';
import getRandom from './helpers.js';

const gameConditions = 'What number is missing in the progression?';

const createProgression = () => {
  const randomLength = getRandom(5, 10);
  const randomStart = getRandom(0, 15);
  const randomStep = getRandom(1, 5);
  const arr = [randomStart];
  let count = randomStart + randomStep;
  while (arr.length < randomLength) {
    arr.push(count);
    count += randomStep;
  }
  return arr;
};

const gameProgression = () => {
  const array = createProgression();
  const i = getRandom(0, array.length);
  const hiddenNum = array[i];
  array[i] = '..';
  const question = `Question: ${array.join(' ')}`;
  const correctAnswer = hiddenNum;
  const userAnswer = Number(readlineSync.question(`${question}\nYour answer: `));
  return [userAnswer, correctAnswer];
};

export default () => {
  console.log(greeting());
  console.log(gameConditions);
  console.log(gameLauncher(0, gameProgression));
};
