import { getRandomInt } from '../getRandomInt.js';
import gameRounds from '../index.js';

const rulesGame = 'Find the greatest common divisor of given numbers.';

const gcdCalc = (number1, number2) => {
    let result = 0;
    let randomNumber1 = number1;
    let randomNumber2 = number2;
    while (randomNumber1 !== 0 && randomNumber2 !== 0) {
        if (randomNumber1 > randomNumber2) {
            randomNumber1 %= randomNumber2;
        } else {
            randomNumber2 %= randomNumber1;
        }
    }
    result = randomNumber1 + randomNumber2;
    return result;
};

export const brainGcg = () => {
    const randomNumber1 = getRandomInt(50);
    const randomNumber2 = getRandomInt(50);
    const randomNumbers = `${randomNumber1} ${randomNumber2}`;

    let rightAnswer = gcdCalc(randomNumber1, randomNumber2);
    rightAnswer = String(rightAnswer);
    return [randomNumbers, rightAnswer];
};

const startBrainGcdGame = () => {
    gameRounds(rulesGame, brainGcg);
};

export default startBrainGcdGame;
