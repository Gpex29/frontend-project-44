import readlineSync from 'readline-sync';
import {
  greeting, gameLauncher,
} from './index.js';
import getRandom from './helpers.js';

const gameConditions = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return findGCD(num2, num1 % num2);
};

const gameGCD = () => {
  const num1 = getRandom(0, 25);
  const num2 = getRandom(0, 25);
  const question = `Question: ${num1} ${num2}`;
  const correctAnswer = findGCD(num1, num2);
  const userAnswer = Number(readlineSync.question(`${question}\nYour answer: `));
  return [userAnswer, correctAnswer];
};

export default () => {
  console.log(greeting());
  console.log(gameConditions);
  console.log(gameLauncher(0, gameGCD));
};
