// РОБИВ ЗАДАЧУ З АІ. УМОВА БУЛА ЩОБ БЕЗ ОПЕРАТОРА IF
// ТОМУ МОЖНА НЕ ЗАРАХОВУВАТИ))

let a
let b
let c
let d
let e

a = 1;
b = 0;
c = -34;
d = null;
// e = 5;

let totalSum = a + b + c + d + e;

// Вбудовані команди самі знаходять мінімум і максимум серед довільних чисел
let min = Math.min(a, b, c, d, e);
let max = Math.max(a, b, c, d, e);
let result = totalSum - min - max;

console.log(result);