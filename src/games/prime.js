import getRandomInt from '../getRandomInt.js';
import engineGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (randomNumber) => {
  for (let i = 2; i < randomNumber; i += 1) {
  if (randomNumber !== i && randomNumber % i === 0) {
    return false;
  }
}
  return true;
};

const getRoundData = () => {
  const randomNumber = getRandomInt(2, 10);
  const rightAnswer = (isPrime(randomNumber) ? 'yes' : 'no');

  return [randomNumber, rightAnswer];
};

const startBrainPrimeGame = () => {
  engineGame(description, getRoundData);
};

export default startBrainPrimeGame;
