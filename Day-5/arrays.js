// Array creation of empty values
let arr1 = Array(); // 1st way, output: []
arr1 = new Array(); // using new keyword, output: []
arr1 = []; // using array literal of square brackets, output: []

console.log(arr1, typeof arr1); // [], 'object'
console.log(arr1 instanceof Array, arr1 instanceof Object); // true, true

arr1 = ["Finland", "Estonia", "Denmark"];
console.log(arr1.length); // 3

arr1 = [
  "JavaScript",
  250,
  true,
  { country: "Serbia", city: "Belgrade" },
  [1, true, "JS"],
];
console.log(arr1); // ['JavaScript', 250, true, {…}, Array(3)]

// Array creation using split string method
arr1 = "JavaScript";
let charsInJS = arr1.split("");
console.log(charsInJS); // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

arr1 = "Facebook, Google, Microsoft, Apple, IBM, Oracle";
charsInJS = arr1.split(", ");
console.log(charsInJS); // ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle']

// Accessing array items with index
const countries = ["Bolivia", "Canada", "Denmark", "Finland"];
console.log(countries[2], countries.at(2)); // Denmark, Denmark, at(index) method for accessing elements
console.log(countries[countries.length - 1], countries.at(-1)); // Denmark, Denmark

/* Array methods */

// Empty values reservation with Array constructor
arr1 = Array(8);
console.log(arr1); // [empty × 8]

// Creating static values with fill
arr1.fill("X"); // could re-initialize as arr1 = Array(4).fill("X");
console.log(arr1); // ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'], fills all empty places with strings 'X'

// Concatenating using concat
arr1 = ["JS", "Py"];
arr1 = arr1.concat(["Java", "C#"]);
console.log(arr1); // ['JS', 'Py', 'Java', 'C#']

// indexOf(searchElement, fromIndex?)
console.log(arr1.indexOf("Java")); // 2
console.log(arr1.indexOf("Py", 2)); // -1, started searching from index of 2

// lastIndexOf(searchElement, fromIndex?)
arr1 = [1, 2, 5, 10, 2];
console.log(arr1.lastIndexOf(2)); // 4

// includes(searchElement, fromIndex?)
console.log(arr1.includes(5)); // true

// Array.isArray() -> checking if the data type is Array
console.log(Array.isArray(arr1)); // true

// Converting array to string (returns a string represenatation of array)
console.log(arr1.toString()); // "1,2,5,10,2"
