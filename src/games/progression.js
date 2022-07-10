import getRandomInt from '../getRandomInt.js';
import gameRounds from '../index.js';

const description = 'What number is missing in the progression?';

const progressionGen = (progressionLength, iterationOfProgress, firstElementOfProgress) => {
    const arrayOfProgress = [];
    arrayOfProgress.push(firstElementOfProgress);
    for (let i = 0; i < progressionLength; i += 1) {
        arrayOfProgress.push(arrayOfProgress[i] + iterationOfProgress);
    }

    return arrayOfProgress;
};

export const brainPrograssion = () => {
    const progressionLength = getRandomInt(5, 10);
    const iterationOfProgress = getRandomInt(1, 10);
    const firstElementOfProgress = getRandomInt(1, 10);

    // eslint-disable-next-line max-len
    let progression = progressionGen(progressionLength, iterationOfProgress, firstElementOfProgress);

    const i = getRandomInt(5, progressionLength);
    let rightAnswer = progression[i];
    progression[i] = '..';
    progression = progression.join(' ');
    rightAnswer = String(rightAnswer);

    return [progression, rightAnswer];
};

const startBrainProgressionGame = () => {
    gameRounds(description, brainPrograssion);
};

export default startBrainProgressionGame;
