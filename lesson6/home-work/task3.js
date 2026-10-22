import chalk from 'chalk';

const available = 0;
const ordered = 9999999999;

function checkOrder(available, ordered) {
    if (available < ordered) {
        return chalk.redBright("Your order is too large, we don’t have enough goods.")
    }

    else if (ordered === 0) {
        return chalk.yellowBright("Your order is empty.");
    }
    else if (available >= ordered) {
        return chalk.greenBright("Your order is accepted.")
    };

}

console.log(`Available: ${available}`);
console.log(`Ordered: ${ordered}`);
console.log(checkOrder(available, ordered))
