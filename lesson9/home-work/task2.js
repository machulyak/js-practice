import chalk from "chalk";

const book = {
    title: "Tini zabutykh predkiv",
    author: "Mykhailo Kotsiubynskyi",
    year: 2022,
    owner: "Machuliak Volodymyr"
};

const {title, author} = book;

console.log(chalk.yellowBright("title: ") + title);
console.log(chalk.yellowBright("author: ") + author);