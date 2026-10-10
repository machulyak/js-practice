import chalk from 'chalk';

let person1 = "Mykhailo";
let person2 = "Oleksandr";
let greetingConcat = "Hello, " + person1 + " and " + person2 + "!";

console.log(chalk.yellow.bold(greetingConcat));

let greetingTemplate = `Hello, ${person1} and ${person2}!`;
console.log(chalk.blue.bold(greetingTemplate));  