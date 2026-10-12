let radius = 88;
let areaCircle = Math.PI * radius ** 2;
let fix1AreaCircle = areaCircle.toFixed(2);
let fix2AreaCircle = Math.round (Math.PI * radius * radius * 100) / 100; // дає число


console.log("Area circle first: " + (areaCircle).toFixed(2) + " mm2")
console.log("Area circle fix 1: " + fix1AreaCircle + " mm2");
console.log("Area circle fix 2: " + fix2AreaCircle + " mm2");  
console.log(fix2AreaCircle);  // число








