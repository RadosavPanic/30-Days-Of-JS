// Higher-order function takes function as a parameter (callback) or returns a function as a value

const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatever = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatever;
  };
  return doSomething;
};

console.log(higherOrder(2)(3)(10)); // 23

const numbers = [1, 2, 3, 4, 5];

const sumArray = (arr) => {
  let sum = 0;

  const callback = function (element) {
    sum += element;
  };

  arr.forEach(callback);

  return sum;
};

console.log(sumArray(numbers));

function sayHello() {
  console.log(`Hello`);
}

// setInterval(sayHello, 1000);

setTimeout(sayHello, 2000);

/* Functional programming concepts */

// forEach
numbers.forEach((val, i, arr) => {
  console.log(`Value: ${val}, index: ${i}, array: ${arr}`);
}); // Value: 1, index: 0, array: 1,2,3,4,5

// map
const modifiedNumbers = numbers.map((val) => val * 3);
console.log(modifiedNumbers); // [3, 6, 9, 12, 15]

// filter
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const countriesContainingLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesContainingLand); // ['Finland', 'Ireland']

// reduce
const sumOfNums = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sumOfNums); // 15

// every
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const allAreStr = names.every((name) => typeof name === "string");
console.log(allAreStr); // true
