import readlineSync from 'readline-sync';
import getName from './src/cli.js';
import gameEvenOrNo from './src/games/even.js';
import gameCalculator from './src/games/calc.js';
import gameFindGCD from './src/games/gcd.js';
import gameProgression from './src/games/progression.js';
import gameIsPrime from './src/games/prime.js';

export default function gameBrain(game) {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  const times = 3;
  let func;

  if (game === 'even') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
      func = () => gameEvenOrNo();
  } else if (game === 'calc') {
    console.log('What is the result of the expression?');
      func = () => gameCalculator();
  } else if (game === 'gcd') {
    console.log('Find the greatest common divisor of given numbers.');
      func = () => gameFindGCD();
  } else if (game === 'progression') {
    console.log('What number is missing in the progression?');
      func = () => gameProgression();
  } else if (game === 'prime') {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      func = () => gameIsPrime();
  } else {
    return;
  }
  
  for (let i = 0; i < times; i += 1) {
    const [question, correct] = func();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(correct)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
