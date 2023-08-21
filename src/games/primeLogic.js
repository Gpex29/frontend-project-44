import gameEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const playRound = () => {
  const num = getRandomNumber(0, 20);
  const question = `Question: ${num}`;
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};

export default gameEngine(description, playRound);
