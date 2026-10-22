function checkAge(age) {
    if (age >= 18) {
        return "true"
    }
    else {
        return "false"
    }
}

console.log(`Case 1 | Age: 25 | Adult: ${checkAge(25)}`);
console.log(`Case 2 | Age: 15 | Adult: ${checkAge(15)}`);