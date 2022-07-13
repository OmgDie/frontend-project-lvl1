import getRandomNumber from '../rnd.js';

import rules from '../index.js';

const prime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const generateQA = () => {
  const question = getRandomNumber(1, 100);
  const answer = prime(question) ? 'yes' : 'no';
  return [question, answer];
};

const gamePrime = () => rules(description, generateQA);

export default gamePrime;
