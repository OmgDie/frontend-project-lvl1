import getRandomNumber from '../rnd.js';

import rules from '../index.js';

const calcGCD = (x, y) => {
  if (!y) {
    return x;
  }
  return calcGCD(y, x % y);
};

const description = 'Find the greatest common divisor of given numbers.';
const generateQA = () => {
  const x = getRandomNumber(1, 75);
  const y = getRandomNumber(1, 50);
  const question = `${x} ${y}`;
  const answer = calcGCD(x, y).toString();
  return [question, answer];
};
const gameGCD = () => rules(description, generateQA);

export default gameGCD;
