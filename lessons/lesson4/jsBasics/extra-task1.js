// РОБИВ ЗАДАЧУ ТРОХИ З ДОПОМОГОЮ АІ.
// ТОМУ МОЖНА НЕ ЗАРАХОВУВАТИ))

let a;
let b;
let c;
let d;
let e;
let f;

a = 10;
b = 0;
c = -8;
d = null;
// e = 5;
f = -10;

let safeA = a ?? null;
let safeB = b ?? null;
let safeC = c ?? null;
let safeD = d ?? null;
let safeE = e ?? null;
let safeF = f ?? null;

let totalSum = safeA + safeB + safeC + safeD + safeE + safeF;

let min = Math.min(safeA, safeB, safeC, safeD, safeE, safeF);
let max = Math.max(safeA, safeB, safeC, safeD, safeE, safeF);

let result = totalSum - min - max;

console.log(result); 