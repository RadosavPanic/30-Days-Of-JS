/* Assignment and arithmetic operators */

let x = 5,
  y = 15;

// Assignment
console.log(`X: ${x}, Y: ${y}, x = y: ${(x = y)}`); // X: 5, Y: 15, x = y: 15

// Addition and assignment
console.log(`X: ${x}, Y: ${y}, x += y: ${(x += y)}`); // X: 15, Y: 15, x += y: 30

// Subtraction and assignment
console.log(`X: ${x}, Y: ${y}, x -= y: ${(x -= y)}`); // X: 30, Y: 15, x -= y: 15

// Multiplication and assignment
console.log(`X: ${x}, Y: ${y}, x *= y: ${(x *= y)}`); // X: 15, Y: 15, x *= y: 225

// Division and assignment
console.log(`X: ${x}, Y: ${y}, x /= y: ${(x /= y)}`); // X: 225, Y: 15, x /= y: 15

// Exponentiation and assignment
console.log(`X: ${x}, Y: ${y}, x **= y: ${(x **= y)}`); // X: 15, Y: 15, x **= y: 437893890380859400

// Modulus and assignment
console.log(`X: ${x}, Y: ${y}, x %= y: ${(x %= y)}`); // X: 437893890380859400, Y: 15, x %= y: 2

/* Calculation of circle area */
const PI = 3.14;
let radius = 10; // length in meter
const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle); // 314

/* Calculation of object's weight */
const gravity = 9.81;
let mass = 72;
const weight = mass * gravity;
console.log(weight); // 706.32

/* Comparison operators */

console.log(3 > 2, 3 >= 2); // true, true
console.log(3 < 2, 2 < 3, 2 <= 3); // false, true, true
console.log(3 == 2, 3 != 2); // false, true

console.log(3 == "3", 3 === "3"); // true (loose equality), false (strict equality, also data type)
console.log(3 != "3", 3 !== "3"); // false, true
console.log(3 != 3, 3 !== 3); // false, false

console.log(0 == false); // true
console.log(0 === false); // false, number != boolean

console.log(0 == "", 0 == " "); // true, true
console.log(0 === ""); // false, number != string

console.log(1 == true, 1 === true); // true, false (number != boolean)

console.log(undefined == null); // true
console.log(undefined === null); // false, undefined != object

console.log(NaN == NaN, NaN === NaN, typeof NaN); // false, false, number (usually number==number is true, but NaN is not a number only)

console.log(3 !== "3"); // true
console.log(3 != "3"); // false
console.log(3 !== 3); // false
console.log(3 != 3); // false
