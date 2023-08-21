import readlineSync from 'readline-sync';

export default (description, game) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  const needForWin = 3;
  let correctCount = 0;

  console.log(`Hello, ${userName}!`);

  console.log(description);

  for (let i = 0; i < needForWin; i += 1) {
    const [question, correctAnswer] = game();
    const userAnswer = readlineSync.question(`${question}\nYour answer: `);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  if (correctCount === needForWin) {
    console.log(`Congratulations, ${userName}!`);
  }
};
