import getRandomNumber from '../rnd.js';

import rules from '../index.js';

const even = (number) => number % 2 === 0;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const generateQA = () => {
  const question = getRandomNumber(201);
  const answer = even(question) ? 'yes' : 'no';
  return [question, answer];
};

const gameEven = () => rules(description, generateQA);

export default gameEven;
