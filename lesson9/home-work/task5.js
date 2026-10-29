import chalk from "chalk";

const users = [
    { name: "Mike", lastName: "Fender", email: "fender@b.com", age: 18 },
    { name: "Oleksandr", lastName: "Gibson", email: "gibson@b.com", age: 16 },
    { name: "Yaroslava", lastName: "Jackson", email: "jackson@g.com", age: 11 }
];

for(const user of users) {
    const { name, lastName, email } = user; {
        console.log(
            chalk.green("name: ") +
            chalk.yellow(name) +
            chalk.yellow(` ${lastName}`) +
            chalk.green(" email: ") +
            chalk.yellow(email)
        );
    }
}
