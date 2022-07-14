import getRandomInt from '../getRandomInt.js';
import engineGame from '../index.js';

const rulesGame = 'Answer "yes" if the number is even otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const getRoundData = () => {
    const randomNumber = getRandomInt(1, 20);
    const rightAnswer = (isEven(randomNumber) ? 'yes' : 'no');
    return [randomNumber, rightAnswer];
};

const startBrainEvenGame = () => {
    engineGame(rulesGame, getRoundData);
};

export default startBrainEvenGame;
