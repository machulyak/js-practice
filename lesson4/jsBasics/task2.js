import chalk from 'chalk';

let person1 = "Mykhailo";
let person2 = "Oleksandr";
let greetingConcat = "Moin " + person1 + " and " + person2 + "!";
let greetingTemplate = `Moin ${person1} and ${person2}!`;


console.log(chalk.yellow.bold(greetingConcat));
console.log(chalk.blue.bold(greetingTemplate));  