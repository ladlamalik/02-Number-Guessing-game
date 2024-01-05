#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
// console.log("Hello World");
console.log(chalk.white.bgGreen('>>>> Game: Lets guess a number between 1 and 10 '));
let randNum = Math.floor(Math.random() * 10 + 1);
// console.log('rand num is: ', randNum);
let actualAnswer = randNum;
let totalTries = 3;
let play = true;
while (play) {
    while (totalTries > 0) {
        const answers = await inquirer.prompt([
            {
                name: 'meraGuess',
                message: 'Number Dalo bhai:',
                type: 'number',
            },
        ]);
        if (answers.meraGuess == actualAnswer) {
            console.log(chalk.green.bold('Hurray! You Guessed it right. Game Ended'));
            totalTries = 0;
        }
        else {
            console.log(chalk.red.bold('You Guessed it wrong'));
            if (actualAnswer > answers.meraGuess)
                console.log(chalk.yellow(`The number is greater than ${answers.meraGuess}`));
            else {
                console.log(chalk.yellow(`The number is lower than ${answers.meraGuess}`));
            }
            console.log(chalk.yellow(`You Have ${chalk.white.bold(totalTries - 1)} tries left`));
        }
        totalTries--;
    }
    const playAgainAnswer = await inquirer.prompt([
        {
            name: 'playAgain',
            message: 'Wana Play Again?',
            type: 'confirm',
        },
    ]);
    // console.log('playAgain', 'playAgainAnswer');
    if (playAgainAnswer.playAgain == true) {
        totalTries = 3;
        randNum = Math.floor(Math.random() * 10 + 1);
        actualAnswer = randNum;
    }
    else {
        console.log('Exiting Game....');
        play = false;
    }
}
// Check if it's Game Over after the loop
// if (totalTries === 0) {
//   console.log(chalk.red.bold('Game Over. You have no more tries left.'));
// }
