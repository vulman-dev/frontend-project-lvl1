import readlineSync from 'readline-sync';

const gameRounds = (rulesGame, brainGame) => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}`);
    console.log(rulesGame);

    const roundsCount = 3;

    for (let i = 0; i < roundsCount; i += 1) {
        const [question, rightAnswer] = brainGame();
        console.log(`Question: ${question}`);
        const answer = readlineSync.question('Your answer: ');
        if (answer === rightAnswer) {
            console.log('Correct!');
        } else if (answer !== rightAnswer) {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
            break;
        }
    }
    console.log(`Congratulations, ${userName}!`);
};

export default gameRounds;
