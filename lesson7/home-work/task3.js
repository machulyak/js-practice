import chalk from "chalk";

function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Error: Both arguments must be numbers!");
    }
    if (denominator === 0) {
        throw new Error("Error: Division by zero is not allowed!");
    }

    let result = numerator / denominator;
    return result;
}

function runDivision(num, den) {
    try {
        let result = divide(num, den);
        console.log("Result:", result);
    } catch (error) {
        console.log(chalk.redBright(error.message));
    } finally {
        console.log(chalk.greenBright(`Work completed`));
    }
}
console.log("--------------------------");
console.log("Case 1");
runDivision(100, 77);

console.log("--------------------------");
console.log("Case 2");
runDivision(456, 0);

console.log("--------------------------");
console.log("Case 3");
runDivision("qwerty", 2);