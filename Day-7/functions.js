// Function declaration

function square() {
  let num = 2;
  let squareResult = num * num;

  console.log(`Number squared: ${squareResult}`); // Number squared: 4
}

square();

function printFullName() {
  let firstName = "Radosav";
  let lastName = "Panic";
  let space = " ";

  let fullName = firstName + space + lastName;

  return fullName;
}

console.log(printFullName()); // Radosav Panic

function areaOfCircle(radius) {
  let area = Math.PI * radius * radius;

  return area;
}

console.log(areaOfCircle(10)); // 314.1592653589793

function sumArrayValues(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

const numbers = [1, 2, 3, 4, 5];

console.log(sumArrayValues(numbers)); // 15

// arbitrary arguments function (arguments object)
function sumAllNums() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

console.log(sumAllNums(5, 20, 1, 64, 12)); // 102

// Arrow function, unlimited arguments (spread operator)
const sumNums = (...args) => {
  let sum = 0;

  for (const num of args) {
    sum += num;
  }

  return sum;
};

console.log(sumNums(41, 30, 90, 12)); // 173

// Anonymous function expression
const cubicRes = function (number) {
  return Math.pow(number, 3);
};

console.log(cubicRes(5)); // 125

// IIFE (Immediately Invoked Function Expression) - Self Invoking Functions
(function (n) {
  console.log(`IIFE squared number: ${n * n}`);
})(5); // IIFE squared number: 25

let concatTwoStrings = (function (material) {
  return "Stainless " + material;
})("Steel");

console.log(concatTwoStrings); // Stainless Steel

// Default parameters
const weightOfObject = (mass, gravity = 9.81) => mass * gravity + " N";

console.log(weightOfObject(100)); // 981 N
console.log(weightOfObject(61, 13)); // 793 N

const calculateAge = (birthYear, currentYear = 2024) => currentYear - birthYear;

console.log(calculateAge(1984)); // 40
console.log(calculateAge(1984, 2016)); // 32
