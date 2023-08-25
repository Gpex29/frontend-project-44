import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = getRandomNumber(0, 20);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => runEngine(description, generateRound);
