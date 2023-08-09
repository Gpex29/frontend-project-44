#!/usr/bin/env node

import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');
let calcCorrect = 0;
const needForWin = 3;

function greeting() {
  const hello = `Hello, ${userName}!`;
  const gameConditions = 'Answer "yes" if the number is even, otherwise answer "no".';
  return `${hello}\n${gameConditions}`;
}

function isEven(number) {
  return number % 2 === 0;
}

function game() {
  const questionNumber = Math.floor(Math.random() * 100);
  const question = `Question: ${questionNumber}`;
  const answer = readlineSync.question(`${question}\nYour answer: `);
  if (
    (isEven(questionNumber) && answer === 'yes')
    || (!isEven(questionNumber) && answer === 'no')
  ) {
    console.log('Correct!');
    calcCorrect += 1;
    return calcCorrect === needForWin
      ? `Congratulations, ${userName}!`
      : game();
  }
  return `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}`;
}

console.log(greeting());
console.log(game());
