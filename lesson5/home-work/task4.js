function isUpperCase(str) {
  return str === str.toUpperCase();
}

const string1 = "c";
const string2 = "C";
const string3 = "hello I AM DONALD";
const string4 = "HELLO I AM DONALD";
const string5 = "ACSKLDFJSgSKLDFJSKLDFJ";
const string6 = "ACSKLDFJSGSKLDFJSKLDFJ";

console.log(`"${string1}" ->`, isUpperCase(string1)); //  false
console.log(`"${string2}" ->`, isUpperCase(string2)); //  true
console.log(`"${string3}" ->`, isUpperCase(string3)); //  false
console.log(`"${string4}" ->`, isUpperCase(string4)); //  true
console.log(`"${string5}" ->`, isUpperCase(string5)); //  false
console.log(`"${string6}" ->`, isUpperCase(string6)); //  true