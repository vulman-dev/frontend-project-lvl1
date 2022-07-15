import getRandomInt from '../getRandomInt.js';
import engineGame from '../index.js';

const description = 'What number is missing in the progression?';

const generatingProgress = (progressionLength, iterationOfProgress, firstElementOfProgress) => {
    const arrayOfProgress = [];
    arrayOfProgress.push(firstElementOfProgress);
    for (let i = 0; i < progressionLength; i += 1) {
        arrayOfProgress.push(arrayOfProgress[i] + iterationOfProgress);
    }

    return arrayOfProgress;
};

const getRoundData = () => {
    const progressionLength = getRandomInt(5, 10);
    const iterationOfProgress = getRandomInt(1, 10);
    const firstElementOfProgress = getRandomInt(1, 10);

    // eslint-disable-next-line max-len
    let progression = generatingProgress(progressionLength, iterationOfProgress, firstElementOfProgress);

    const hiddenNumberIndexi = getRandomInt(5, progressionLength);
    let rightAnswer = progression[hiddenNumberIndexi];
    progression[hiddenNumberIndexi] = '..';
    progression = progression.join(' ');
    rightAnswer = String(rightAnswer);

    return [progression, rightAnswer];
};

const startBrainProgressionGame = () => {
    engineGame(description, getRoundData);
};

export default startBrainProgressionGame;
