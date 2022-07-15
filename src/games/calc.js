import getRandomInt from '../getRandomInt.js';
import engineGame from '../index.js';

const rulesGame = 'What is the result of the expression?';

const getRoundData = () => {
   const sign = ['+', '-', '*'];
   let answer = '';
   const operatorIndex = getRandomInt(0, (sign.length - 1));
   const selectSign = sign[operatorIndex];
   const number1 = getRandomInt(1, 30);
   const number2 = getRandomInt(1, 30);
   answer = `${number1} ${selectSign} ${number2}`;

   let rightAnswer = 0;
   switch (selectSign) {
    case '+':
            rightAnswer = number1 + number2;
            break;
        case '-':
            rightAnswer = number1 - number2;
            break;
        case '*':
            rightAnswer = number1 * number2;
            break;
        default:
            return Error;
    }

    rightAnswer = String(rightAnswer);
    return [answer, rightAnswer];
};

const startBrainCalcGame = () => {
    engineGame(rulesGame, getRoundData);
};

export default startBrainCalcGame;
