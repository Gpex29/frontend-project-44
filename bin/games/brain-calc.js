#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  greeting, getRandom, gameLauncher,
} from '../../src/index.js';

const gameConditions = 'What is the result of the expression?';

function generateRandomOperator() {
  const operators = ['+', '-', '*'];
  return operators[getRandom(operators.length)];
}

function calculateExpression(num1, operator, num2) {
  switch (operator) {
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return num1 + num2;
  }
}

function calculator() {
  const operand1 = getRandom(5);
  const operand2 = getRandom(5);
  const operator = generateRandomOperator();
  const question = `Question: ${operand1} ${operator} ${operand2}`;
  const correctAnswer = calculateExpression(operand1, operator, operand2);
  const userAnswer = Number(readlineSync.question(`${question}\nYour answer: `));
  return [userAnswer, correctAnswer];
}

console.log(greeting());
console.log(gameConditions);
console.log(gameLauncher(0, calculator));
