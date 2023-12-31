import readlineSync from 'readline-sync';

export default (description, generateGameRound) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  const roundsCount = 3;

  console.log(`Hello, ${userName}!`);

  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const [forQuestion, correctAnswer] = generateGameRound();
    const question = `Question: ${forQuestion}`;
    console.log(`${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
