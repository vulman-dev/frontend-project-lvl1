import getRandomInt from '../getRandomInt.js';
import engineGame from '../index.js';

const rulesGame = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (number1, number2) => {
    if (!number2) {
        return number1;
    }

    return calculateGcd(number2, number1 % number2);
};

const getRoundData = () => {
    const randomNumber1 = getRandomInt(1, 50);
    const randomNumber2 = getRandomInt(1, 50);
    const randomNumbers = `${randomNumber1} ${randomNumber2}`;

    const rightAnswer = String(calculateGcd(randomNumber1, randomNumber2));
    return [randomNumbers, rightAnswer];
};

const startBrainGcdGame = () => {
    engineGame(rulesGame, getRoundData);
};

export default startBrainGcdGame;
