import getRandomInt from '../getRandomInt.js';
import engineGame from '../index.js';

const rulesGame = 'What is the result of the expression?';

const calculatingCorrectResult = (number1, number2, selectSign) => {
  switch (selectSign) {
    case '+':
      return String(number1 + number2);
    case '-':
      return String(number1 - number2);
    case '*':
      return String(number1 * number2);
    default:
      throw new Error(`Unknown operator: ${selectSign}`);
  }
};

const getRoundData = () => {
  const sign = ['+', '-', '*'];
  const operatorIndex = getRandomInt(0, (sign.length - 1));
  const selectSign = sign[operatorIndex];
  const number1 = getRandomInt(1, 30);
  const number2 = getRandomInt(1, 30);
  const answer = `${number1} ${selectSign} ${number2}`;
  const rightAnswer = calculatingCorrectResult(number1, number2, selectSign);

  return [answer, rightAnswer];
};

const startBrainCalcGame = () => {
  engineGame(rulesGame, getRoundData);
};

export default startBrainCalcGame;
