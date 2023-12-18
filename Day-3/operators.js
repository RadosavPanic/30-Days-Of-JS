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
