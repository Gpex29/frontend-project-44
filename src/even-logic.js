import readlineSync from 'readline-sync';
import {
  greeting, gameLauncher,
} from './index.js';
import getRandom from './helpers.js';

const gameConditions = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const gameIsEven = () => {
  const questionNumber = getRandom(0, 100);
  const question = `Question: ${questionNumber}`;
  const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`${question}\nYour answer: `);
  return [userAnswer, correctAnswer];
};

export default () => {
  console.log(greeting());
  console.log(gameConditions);
  console.log(gameLauncher(0, gameIsEven));
};
