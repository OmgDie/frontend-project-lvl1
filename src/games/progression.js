import getRandomNumber from '../rnd.js';

import rules from '../index.js';

const getProgression = (start, delta, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + delta * i);
  }
  return result;
};

const description = 'What number is missing in the progression?';
const generateQA = () => {
  const progression = getProgression(
    getRandomNumber(1, 7),
    getRandomNumber(3, 6),
    getRandomNumber(6, 10),
  );
  const hiding = getRandomNumber(1, 10);
  const answer = progression[hiding].toString();
  progression[hiding] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const gameProgression = () => rules(description, generateQA);

export default gameProgression;
