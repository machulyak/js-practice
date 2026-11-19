// // function sayHello() {
// //   console.log('Hello, World!');
// //   console.log('Hello, Seven!');
// // } 

// // sayHello();


// function printSum(a, b) {
//     let sum = a + b;
//   console.log(a);
//   console.log(b);
//   console.log('sum: ' + sum);
// }

// printSum(5, 10);



// const sayHello = function() {
//   console.log('Hello, World!');
//   console.log('Hello, Seven!');
// }

// sayHello();


// const sayHello = () => {
//   console.log('Hello, World!');
//   console.log('Hello, Seven!');
// }   

// sayHello();


// // Стрілочна функція з одним параметром

// const getSum = num => num*2;
// console.log(getSum(5));


// function getRandomNumber(min, max ) {
// return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomNumber(10, 100));
// console.log(getRandomNumber(100, 200));
// console.log(getRandomNumber(-200, 100));



// function deviderNumbers(a, b) {
//     if (b === 0) {
//         console.log('Error: Division by zero is not allowed.');
//         throw new Error('Division by zero is not allowed.');

//     } else {

//         return a / b;
//     }
// }
// console.log(deviderNumbers(10, 0));



// function divideNumbers(number, divider) {
//     if (divider === 0) {
//         throw new Error('It is impossible to divide by zero');
//     } else {
//         return number / divider;
//     }
// }

// try {
//     const result = divideNumbers(10, 0);
//     console.log(result);
// } catch (error) {
//     console.error('Error happened', error.message);
// }

// // console.log(divideNumbers(10, 0));


// const greet = function (name = 'Anonymous') {
//     console.log(`Hello, ${name}`);
// }

// greet('Seven');



// function sum (...numbers) {
//     console.log(numbers);

//     sum (10,20, 30, 40, 50);
// }



// function sum(...numbers) {
//             console.log(arguments);
// }
// sum(10, 20, 30, 40, 50);



