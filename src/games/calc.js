import { getRandomInt } from '../getRandomInt.js';
import gameRounds from '../index.js';

const rulesGame = 'What is the result of the expression?';

const randomOperationGenerator = () => {
    const operation = ['+', '-', '*'];
    let result = '';
    const i = getRandomInt(3);
    result = `${getRandomInt(30)} ${operation[i]} ${getRandomInt(20)}`;
    return result;
};

export const brainCalc = () => {
    const randomOperation = randomOperationGenerator();
    const separator = ' ';
    const operation = randomOperation.split(separator);
    const operator = operation[1];
    const number1 = Number(operation[0]);
    const number2 = Number(operation[2]);
    let rightAnswer = 0;
    switch (operator) {
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
            break;
    }

    rightAnswer = String(rightAnswer);
    return [randomOperation, rightAnswer];
};

const startBrainCalcGame = () => {
    gameRounds(rulesGame, brainCalc);
};

export default startBrainCalcGame;
