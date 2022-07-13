import readlineSync from 'readline-sync';

import Greetings from './cli.js';

const rules = (description, generateQA) => {
  const name = Greetings();
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = generateQA();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}. \nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default rules;
