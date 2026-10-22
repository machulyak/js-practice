import chalk from 'chalk';

function handleNum(number, evenCallback, oddCallback) {
    if (number === 0) {
        errorArg();
    } else if (number % 2 === 0) {
        evenCallback(number);
    } else {
        oddCallback(number);
    }

}
function errorArg() {
    console.log(chalk.redBright("[WARN] Invalid input: 0 is not allowed."))
}

function handleEven(number) {
    console.log(`your number is ${number} / number is even`);
}

function handleOdd(number) {
    console.log(`your number is ${number} / number is odd`);
}

let number1 = 0
let number2 = 1
let number3 = 2

handleNum(number1, handleEven, handleOdd);
handleNum(number2, handleEven, handleOdd);
handleNum(number3, handleEven, handleOdd);


