import readlineSync from 'readline-sync';
import {
  greeting, gameLauncher,
} from './index.js';
import getRandom from './helpers.js';

const gameConditions = 'What is the result of the expression?';

const generateRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandom(0, operators.length)];
};

const calculateExpression = (num1, operator, num2) => {
  switch (operator) {
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return num1 + num2;
  }
};

const calculator = () => {
  const operand1 = getRandom(0, 5);
  const operand2 = getRandom(0, 5);
  const operator = generateRandomOperator();
  const question = `Question: ${operand1} ${operator} ${operand2}`;
  const correctAnswer = calculateExpression(operand1, operator, operand2);
  const userAnswer = Number(readlineSync.question(`${question}\nYour answer: `));
  return [userAnswer, correctAnswer];
};

export default () => {
  console.log(greeting());
  console.log(gameConditions);
  console.log(gameLauncher(0, calculator));
};
