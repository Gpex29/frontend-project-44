import readlineSync from 'readline-sync';

const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
const needForWin = 3;

function greeting() {
  return `Hello, ${userName}!`;
}

function getWrong(userAnswer, correctAnswer) {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
}

function gameLauncher(correctCount, game) {
  if (correctCount === needForWin) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const [userAnswer, correctAnswer] = game();
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    gameLauncher(correctCount + 1, game);
  } else {
    console.log(getWrong(userAnswer, correctAnswer));
  }
}

export {
  greeting, gameLauncher,
};
