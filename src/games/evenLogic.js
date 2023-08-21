import gameEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const playRound = () => {
  const questionNumber = getRandomNumber(0, 100);
  const question = `Question: ${questionNumber}`;
  const answer = isEven(questionNumber) ? 'yes' : 'no';
  return [question, answer];
};

export default gameEngine(description, playRound);
