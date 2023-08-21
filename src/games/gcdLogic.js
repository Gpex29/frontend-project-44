import gameEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return findGCD(num2, num1 % num2);
};

const playRound = () => {
  const num1 = getRandomNumber(0, 25);
  const num2 = getRandomNumber(0, 25);
  const question = `Question: ${num1} ${num2}`;
  const answer = String(findGCD(num1, num2));
  return [question, answer];
};

export default gameEngine(description, playRound);
