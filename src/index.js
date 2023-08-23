import readlineSync from 'readline-sync';

export default (description, generateGameRound) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  const correctsCount = 3;

  console.log(`Hello, ${userName}!`);

  console.log(description);

  for (let i = 0; i < correctsCount; i += 1) {
    const [forQuestion, correctAnswer] = generateGameRound();
    const question = `Question: ${forQuestion}`;
    const userAnswer = readlineSync.question(`${question}\nYour answer: `);
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
