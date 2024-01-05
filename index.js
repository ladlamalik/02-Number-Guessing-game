#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
// console.log("Hello World");
console.log(chalk.bgMagenta.bold('>>>> Game: Lets guess a number between 1 and 10 '));
// creating a random number between 1 and 10
let randNum = Math.floor(Math.random() * 10 + 1);
let actualAnswer = randNum;
let totalTries = 3;
let play = true;
//this is where the real magic is happening
while (play) {
    while (totalTries > 0) {
        const answers = await inquirer.prompt([
            {
                name: 'meraGuess',
                message: 'Enter Your Number:',
                type: 'number',
            },
        ]);
        // begin of the logic
        if (answers.meraGuess == actualAnswer) {
            console.log(chalk.bgMagenta.bold(' Hurray! You Guessed it right. Game Ended '));
            totalTries = 0;
        }
        else {
            console.log(chalk.bgRed('You Guessed it wrong'));
            if (actualAnswer > answers.meraGuess)
                console.log(chalk.yellow(`The number is greater than ${answers.meraGuess}`));
            else {
                console.log(chalk.yellow(`The number is lower than ${answers.meraGuess}`));
            }
            console.log(chalk.yellow(`You Have ${chalk.bold.white(totalTries - 1)} tries left`));
        }
        totalTries--;
    }
    // asking the player, if they wants to play again
    const playAgainAnswer = await inquirer.prompt([
        {
            name: 'playAgain',
            message: 'Wana Play Again?',
            type: 'confirm',
        },
    ]);
    // console.log('playAgain', 'playAgainAnswer');
    // Check if user wants to play again
    if (playAgainAnswer.playAgain == true) {
        totalTries = 3;
        randNum = Math.floor(Math.random() * 10 + 1);
        actualAnswer = randNum;
    }
    else {
        console.log(chalk.bold.blueBright(' Exiting Game.... '));
        play = false;
    }
}
