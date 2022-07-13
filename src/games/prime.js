import getRandomInt from '../getRandomInt.js';
import gameRounds from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (randomNumber) => {
    for (let i = 2; i < randomNumber; i += 1) {
        if (randomNumber !== i && randomNumber % i === 0) {
            return false;
        }
    }
    return true;
};

export const brainPrime = () => {
    const randomNumber = getRandomInt(2, 10);
    const rightAnswer = (isPrime(randomNumber) ? 'yes' : 'no');

    return [randomNumber, rightAnswer];
};

const startBrainPrimeGame = () => {
    gameRounds(description, brainPrime);
};

export default startBrainPrimeGame;
