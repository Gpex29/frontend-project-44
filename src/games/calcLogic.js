import gameEngine from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What is the result of the expression?';

const calculate = (number1, operator, number2) => {
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

const playRound = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length)];
  const operand1 = getRandomNumber(0, 5);
  const operand2 = getRandomNumber(0, 5);
  const question = `Question: ${operand1} ${operator} ${operand2}`;
  const answer = String(calculate(operand1, operator, operand2));
  return [question, answer];
};

export default gameEngine(description, playRound);
