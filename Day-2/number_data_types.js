const PI = Math.PI;

console.log(PI); // 3.141592653589793

console.log(Math.round(PI)); // 3, if above .5 then rounds to upper number, if less then bottom
console.log(Math.round(9.81)); // 10

console.log(Math.floor(PI), Math.ceil(PI)); // 3, 4, floor always rounds down, ceil always rounds up

console.log(Math.min(-5, 3, 20, 4)); // -5, returns the minimum value
console.log(Math.max(-5, 3, 20, 4)); // 20, returns the maximum value

const randomNumber = Math.random(); // creates a random number between 0 and 0.9999
console.log(randomNumber); // this time 0.06834979391927543, next time program is executed, it returns random again

const dice = Math.floor(Math.random() * 6) + 1; // generates number between 1 and 6 like a dice
console.log(dice); // this time 4, next time again random dice number

console.log(Math.abs(-4)); // 4, absolute value

console.log(Math.sqrt(25)); // 5, square root of 25
console.log(Math.pow(3, 2)); // 9, power (by square this time)

console.log(Math.E); // 2.718, exponential number

// Logarithm, returns natural logarithm of 2 and 10
console.log(Math.log(2), Math.log(10)); // 0.6931471805599453, 2.302585092994046
console.log(Math.LN2, Math.LN10);

// Trigonometry
console.log(Math.sin(0), Math.sin(60)); // 0, -0.3048106211022167
console.log(Math.cos(0), Math.cos(60)); // 1, -0.9524129804151563
