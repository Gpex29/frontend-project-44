import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What number is missing in the progression?';

const createProgression = (start, step, length) => {
  const array = [];
  for (let i = start; array.length < length; i += step) {
    array.push(i);
  }
  return array;
};

const generateRound = () => {
  const progressionLength = getRandomNumber(5, 10);
  const progressionStart = getRandomNumber(0, 15);
  const progressionStep = getRandomNumber(1, 5);
  const progression = createProgression(progressionStart, progressionStep, progressionLength);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const questionString = progression.join(' ');
  return [questionString, answer];
};

export default () => runEngine(description, generateRound);
