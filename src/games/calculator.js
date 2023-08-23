import runEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, (operators.length - 1))];
  const operand1 = getRandomNumber(0, 5);
  const operand2 = getRandomNumber(0, 5);
  const questionString = `${operand1} ${operator} ${operand2}`;
  const answer = String(calculate(operand1, operand2, operator));
  return [questionString, answer];
};

export default () => runEngine(description, generateRound);
