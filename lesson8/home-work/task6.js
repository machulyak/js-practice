import chalk from "chalk"

const numbersList = [1, 9, -2, 2, 4, 5, 77, 19]

const sortedNumbersList = [...numbersList].sort((a, b) => a - b)

console.log(chalk.green("Original array:"), numbersList)
console.log(chalk.green("Sorted array:"), sortedNumbersList)