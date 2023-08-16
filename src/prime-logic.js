import readlineSync from 'readline-sync';
import {
  greeting, gameLauncher,
} from './index.js';
import getRandom from './helpers.js';

const gameConditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gamePrime = () => {
  const num = getRandom(0, 20);
  const question = `Question: ${num}`;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`${question}\nYour answer: `);
  return [userAnswer, correctAnswer];
};

export default () => {
  console.log(greeting());
  console.log(gameConditions);
  console.log(gameLauncher(0, gamePrime));
};
