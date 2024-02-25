let numbers = [1, 2, 3];

const [firstNum, secondNum, thirdNum] = numbers;
console.log(firstNum, secondNum, thirdNum); // 1 2 3

const names = ["John", "Bob", "Peter", "Marley"];
const [firstPerson, secondPerson, , thirdPerson] = names;
console.log(firstPerson, secondPerson, thirdPerson); // John Bob Marley

const fullStack = [
  ["html", "css", "js", "react"],
  ["node", "express", "mongoDB"],
];

const [frontend, backend] = fullStack;
console.log(frontend); // ['html', 'css', 'js', 'react']
console.log(backend); // ['node', 'express', 'mongoDB']

const fullStackFlat = fullStack
  .flat(1)
  .map((tech) => tech.replace(tech[0], tech[0].toUpperCase()));
console.log(fullStackFlat); // ['Html', 'Css', 'Js', 'React', 'Node', 'Express', 'MongoDB']

// Switching values
let [num1, num2] = [36, 15];
console.log(num1); // 36
console.log(num2); // 15

[num2, num1] = [num1, num2];

console.log(num1); // 15
console.log(num2); // 36

let [val1 = "John", val2, val3] = [undefined, "Brandon", "Bill"];
console.log(val1); // John, we can use default value if array indexed value is undefined
console.log(val2, val3); // Brandon Bill

// REST operator
numbers = [1, 2, 3, 4, 5, 6, 7];
let [f, s, t, ...otherNums] = numbers;
console.log(f, s, t); // 1 2 3
console.log(otherNums); // [4, 5, 6, 7]

// Spreading
let extendedNumbers = [...numbers, 8, 9, 10];
console.log(extendedNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Destructuring objects
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};

let { width, height, area, perimeter = 60 } = rectangle;
console.log(width, height); // 20 10
console.log(area, perimeter); // 200 60

// With renaming
let { width: w } = rectangle;
console.log(w); // 20
let { height: heightOfRect, area: areaOfRect } = rectangle;
console.log(heightOfRect, areaOfRect); // 10 200
