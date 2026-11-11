let length = 88.08;
let width = 55.77;

let areaRectangle = length * width;
let fix1AreaRectangle = areaRectangle.toFixed(2);
let fix2AreaRectangle = Math.round(areaRectangle * 100) / 100; // дає число

console.log("Area rectangle first: " + (areaRectangle).toFixed(2) + " mm2")
console.log("Area rectangle fix 1: " + fix1AreaRectangle + " mm2");
console.log("Area rectangle fix 2: " + fix2AreaRectangle + " mm2");  
console.log(fix2AreaRectangle);  // число










