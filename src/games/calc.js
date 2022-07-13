import getRandomNumber from '../rnd.js';

import rules from '../index.js';

const calculating = (firstNum, op, secondNum) => {
  let result;
  switch (op) {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    case '*':
      result = firstNum * secondNum;
      break;

    default:
  }
  return result;
};
const description = 'What is the result of the expression?';
const ops = ['+', '-', '*'];
const generateQA = () => {
  const firstNum = getRandomNumber(10, 15);
  const secondNum = getRandomNumber(2, 10);
  const op = ops[getRandomNumber(0, 3)];
  const question = `${firstNum} ${op} ${secondNum}`;
  const answer = calculating(firstNum, op, secondNum).toString();
  return [question, answer];
};

const gameCalc = () => rules(description, generateQA);

export default gameCalc;
