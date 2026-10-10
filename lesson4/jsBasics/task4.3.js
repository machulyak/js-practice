let radius = 99.97;
let height = 100;

let cylinderVolume = Math.PI * radius ** 2 * height;
let fix1CylinderVolume = cylinderVolume.toFixed(2);
let fix2CylinderVolume = Math.round(cylinderVolume * 100) / 100; // дає число

console.log("Volume cylinder first: " + (cylinderVolume).toFixed(2) + " mm3")
console.log("Volume cylinder fix 1: " + fix1CylinderVolume + " mm3");
console.log("Volume cylinder fix 2: " + fix2CylinderVolume + " mm3");
console.log(fix2CylinderVolume);  // число







