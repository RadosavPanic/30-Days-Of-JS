// Changeable data type (let)
console.log(name);
let firstName = "Radosav";
let lastName = "Panic"; // string primitive
let country = "Serbia";
let city = "Obrenovac"; // string primitive
let age = 22; // number primitive
let isMarried = false; // boolean primitive
//console.log(name);
// Constant variables with number values
const gravity = 9.81; // earth gravity in m/s2
const boilingPoint = 100; // water boiling point measured in Celsius
const PI = 3.14; // geometrical constant, all uppercase letters are reserved for constant that will never change

console.log(name); // will be accessed from window object, and will find value of 'Radosav'
console.log(job, consistent); // output be: undefined undefined, because its called before declaration

// Single line declaration
var name = "Radosav", // name is reserved and deprecated keyword, should not be used
  job = "programmer",
  consistent = true; // var is not generally used because of hoisting, global declaration like this moves these variables to globalThis object (window object)

console.log(window); // can find all browser objects here, along with keywords defined with var in global scope
