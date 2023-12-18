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

/* Logical operators, Short curcuiting */

// AND (&&) -> all conditions need to be true to evaluate true, otherwise false
console.log(4 > 3 && 10 > 5); // true && true -> true
console.log(4 < 3 && 10 > 5); // false && true -> false, short curcuits right after first condition evaluates to false

// OR (||) -> any of condition is true to evaluate to true, if all are false then false
console.log(4 > 3 || 10 < 5); // true || false -> true, short curcuits right after first condition is true
console.log(4 < 3 || 10 < 5); // false || false -> false, keeps until the end to find at least one true, if none then evaluates to false

// Negation (!) -> negates, makes true to false, and false to true, so opposite value
console.log(4 > 3, !(4 > 3)); // true, false
console.log(!true); // false
console.log(!false); // true
console.log(!34); // false, coercion (converts 34 that is truthy value to boolean of true, then !true is false)

/* Increment (+1) and Decrement (-1) */
let count = 0;

// Pre-increment -> increases value first then finishes current evaluation
console.log(++count); // 1
console.log(count); // 1

// Post-increment -> first finishes current evaluation then increases value
count = 0;
console.log(count++); // 0
console.log(count); // 1

// Pre-decrement -> subtracts value first then finishes current evaluation
count = 0;
console.log(--count); // -1
console.log(count); // -1

// Post-decrement -> first finishes current evaluation then subtracts value
count = 0;
console.log(count--, count); // 0, -1
