import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const questionNumber = getRandomNumber(0, 100);
  const answer = isEven(questionNumber) ? 'yes' : 'no';
  return [questionNumber, answer];
};

const start = () => runEngine(description, generateRound);

export default start;
