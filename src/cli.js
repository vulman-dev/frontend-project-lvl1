import readlineSync from 'readline-sync';

export const getUserNameAndGreeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
