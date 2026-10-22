import chalk from "chalk";

function countToZero(num) {
    if (num <= 0) {
        return;
    }
    
    console.log(`number is ${num.toFixed(1)}`);

    countToZero(Number(num - 0.1));
}
console.log(chalk.green`----------- NEW START -----------`);

countToZero(3)

console.log(chalk.red`-------------- END --------------`);