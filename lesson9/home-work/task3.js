import chalk from "chalk";

const car1 = {
    brand: "ZAZ",
    model: "968M",
    year: 1983
};

const car2 = {
    brand: "Hyundai",
    model: "Palisade",
    owner: "Machuliak Yuliia"
};

const car3 = { ...car1, ...car2 }

console.log(chalk.yellowBright("car3: "), car3);

// якась дичина з умовою задачі і кінцевим результатом)))
