import gameEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What number is missing in the progression?';

const createProgression = (start, step, length) => {
  const array = [start];
  let count = start + step;
  while (array.length < length) {
    array.push(count);
    count += step;
  }
  return array;
};

const playRound = () => {
  const randomLength = getRandomNumber(5, 10);
  const randomStart = getRandomNumber(0, 15);
  const randomStep = getRandomNumber(1, 5);
  const array = createProgression(randomStart, randomStep, randomLength);
  const i = getRandomNumber(0, array.length);
  const hiddenNum = String(array[i]);
  array[i] = '..';
  const question = `Question: ${array.join(' ')}`;
  return [question, hiddenNum];
};

export default gameEngine(description, playRound);
