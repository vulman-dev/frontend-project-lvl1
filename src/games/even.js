import getRandomInt from '../getRandomInt.js';
import gameRounds from '../index.js';

const rulesGame = 'Answer "yes" if the number is even otherwise answer "no"';

const isEven = (randomNumber) => {
    if (randomNumber % 2 === 0) {
        return true;
    }
    return false;
};

export const brainEven = () => {
    const randomNumber = getRandomInt(1, 20);
    const rightAnswer = (isEven(randomNumber) ? 'yes' : 'no');
    return [randomNumber, rightAnswer];
};

const startBrainEvenGame = () => {
    gameRounds(rulesGame, brainEven);
};

export default startBrainEvenGame;
