// Type conversion

let number1 = "10"; // right now it's string of '10'
let number2 = "9.81";

// Number
console.log(Number(number1)); // 10
console.log(+number1); // implicit conversion to Number, either use operator + or Number constructor

// parseInt
console.log(parseInt(number1)); // 10
console.log(Number.parseInt(number2)); // 9, more concise way, because Number gives a namespace to a method parseInt and is more concise

// parseFloat
console.log(parseFloat(number2)); // 9.81
console.log(Number.parseFloat(number2)); // 9.81

// BigInt
/* Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers. */
/* BigInt values cannot be used with methods in Math object and cannot be mixed with Number value in operations. 
There need to be an explicit conversion, also precision of BigInt value may be lost in conversion to number.*/

let number3 = 12345678910123456; // not concise and may loose precision with larger numbers

console.log(typeof number3); // number

console.log(typeof BigInt(number3)); // bigint, using constructor
console.log(typeof 123n); // bigint, using 'n' to specific bigint value

console.log(number3 + BigInt(1234)); // TypeError: Cannot mix BigInt and other types, use explicit conversions
