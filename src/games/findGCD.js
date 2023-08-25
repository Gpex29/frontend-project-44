import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return findGCD(number2, number1 % number2);
};

const generateRound = () => {
  const number1 = getRandomNumber(0, 25);
  const number2 = getRandomNumber(0, 25);
  const question = `${number1} ${number2}`;
  const answer = String(findGCD(number1, number2));
  return [question, answer];
};

export default () => runEngine(description, generateRound);
