// let x = 60
// if (x > 0) {
//     console.log("x is positive")
// }
// if (x > 5) {
//     console.log("x is positive")
//     if (x === 6) {
//         console.log("x is positive")

//     } else {
//         console.log("x is not positive")
//     }
// }

// 0-5 night    
// 6-10 morning
// 11-18 day    
// 19-24 evening

let time = 20;
let greeting;

if (time >= 0 && time <= 5) {
    greeting = "Good night!";
} else if (time <= 10) {
    greeting = "Good morning!";
} else if (time <= 18) {
    greeting = "Good day!";
} else if (time <= 24) {
    greeting = "Good evening!";
} else {
    greeting = "Invalid time";
}

console.log(greeting);