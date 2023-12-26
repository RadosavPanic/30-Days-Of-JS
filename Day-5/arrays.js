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
const countriesArray = ["Bolivia", "Canada", "Denmark", "Finland"];
console.log(countriesArray[2], countriesArray.at(2)); // Denmark, Denmark, at(index) method for accessing elements
console.log(countriesArray[countriesArray.length - 1], countriesArray.at(-1)); // Denmark, Denmark

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

// Array.isArray(arg) -> checking if the data type is Array
console.log(Array.isArray(arr1)); // true

// Converting array to string (returns a string represenatation of array)
console.log(arr1.toString()); // "1,2,5,10,2"

// join(separator?) -> joins array elements to turn them into a string using specified separator that we specify
console.log(arr1.join("->")); // "1->2->5->10->2'
console.log(arr1.join("_")); // "1_2_5_10_2"

// slice(start?, end?) -> returns a new sliced array without modifying old array
console.log(arr1.slice(1, 4)); // [2, 5, 10]
console.log(arr1.slice(0, -2)); // [1, 2, 5]

// splice(start, deleteCount, ...items) -> modifies old array and returns new array after deleted sliced items, as well as items inserted in place if specified
console.log(arr1.splice(0, 2, "a", "b"));
console.log(arr1); // ['a', 'b', 5, 10, 2]

// Adding items to an array
arr1.push("js"); // adds new item to the end (and returns new length of array - integer)
console.log(arr1); // ['a', 'b', 5, 10, 2, 'js']
arr1.unshift("py"); // adds new item to the start (and returns new length of array - integer)
console.log(arr1); // ['py', 'a', 'b', 5, 10, 2, 'js']

// Removing items from an array
arr1.pop(); // removes 1 item from the end (and returns it)
console.log(arr1); // ['py', 'a', 'b', 5, 10, 2]
arr1.shift(); // removes 1 item from the start (and returns it)
console.log(arr1); // ['a', 'b', 5, 10, 2]

// reverse() -> reverses the order of an array, and modifies the old array
console.log(arr1.reverse()); // [2, 10, 5, 'b', 'a']
console.log(arr1); // [2, 10, 5, 'b', 'a']

// sort(callbackfn)
arr1 = [1, 15, 6, 27, 19];
arr1.sort((a, b) => a - b); // sorting in ascending order
console.log(arr1); // [1, 6, 15, 19, 27]

arr1.sort((a, b) => b - a); // sorting in descending order
console.log(arr1); // [27, 19, 15, 6, 1]

// findLast(callbackfn) -> iterates array in reverse order and returns value of first element that matches criteria
console.log(countriesArray); // ['Bolivia', 'Canada', 'Denmark', 'Finland']
console.log(countriesArray.findLast((country) => country.includes("Can"))); // "Canada"

/* Assignments */
const countriesList = [
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

const webTechsList = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// First, middle, last items
console.log(
  webTechsList.at(0),
  webTechsList.at(webTechsList.length / 2),
  webTechsList.at(-1)
);

const itCompanies = [
  "facebook",
  "google",
  "microsoft",
  "apple",
  "ibm",
  "oracle",
  "amazon",
];

console.log(`Number of IT Companies: ${itCompanies.length}`); // 7
console.log(
  `First: ${itCompanies.at(0)}, Middle: ${itCompanies.at(
    itCompanies.length / 2
  )}, Last: ${itCompanies.at(-1)}`
); // First: facebook, Middle: apple, Last: amazon

itCompanies.forEach((company) => console.log(company)); // facebook google microsoft apple ibm oracle amazon

itCompanies[0] = itCompanies
  .at(0)
  .replace(itCompanies.at(0).at(0), itCompanies.at(0).at(0).toUpperCase());
itCompanies[1] = itCompanies
  .at(1)
  .replace(itCompanies.at(1).at(0), itCompanies.at(1).at(0).toUpperCase());
itCompanies[2] = itCompanies
  .at(2)
  .replace(itCompanies.at(2).at(0), itCompanies.at(2).at(0).toUpperCase());
itCompanies[3] = itCompanies
  .at(3)
  .replace(itCompanies.at(3).at(0), itCompanies.at(3).at(0).toUpperCase());
itCompanies[4] = itCompanies
  .at(4)
  .replace(itCompanies.at(4).at(0), itCompanies.at(4).at(0).toUpperCase());
itCompanies[5] = itCompanies
  .at(5)
  .replace(itCompanies.at(5).at(0), itCompanies.at(5).at(0).toUpperCase());
itCompanies[6] = itCompanies
  .at(6)
  .replace(itCompanies.at(6).at(0), itCompanies.at(6).at(0).toUpperCase());

console.log(itCompanies); // ['Facebook', 'Google', 'Microsoft', 'Apple', 'Ibm', 'Oracle', 'Amazon']

console.log(
  `${itCompanies.slice(0, -1).join(", ")} and ${itCompanies.at(
    -1
  )} are big IT companies.`
); // Facebook, Google, Microsoft, Apple, Ibm, Oracle and Amazon are big IT companies.

itCompanies.includes("Google")
  ? console.log(itCompanies.find((company) => company.includes("Google")))
  : console.log(`Company is not found.`); // Google

// Check if companies have more than 1 'o'

// using filter
const hasMoreThanOneO = (company) => {
  const oCount = company
    .split("")
    .filter((char) => char.toLowerCase() === "o").length;
  return oCount === 1;
};

const filteredCompanies = itCompanies.filter(hasMoreThanOneO);
console.log(filteredCompanies); // ['Oracle', 'Amazon']

// without filter
function hasMoreOLetters(companies) {
  const result = [];

  for (let i = 0; i < companies.length; i++) {
    const companyName = companies[i];
    let countO = 0;

    for (let j = 0; j < companyName.length; j++) {
      if (companyName[j].toLowerCase() === "o") {
        countO++;
        if (countO > 1) {
          break;
        }
      }
    }

    if (countO === 1) {
      result.push(companyName);
    }
  }

  return result;
}

const filteredCompanies2 = hasMoreOLetters(itCompanies);
console.log(filteredCompanies2); // ['Oracle', 'Amazon']

console.log(itCompanies); // ['Facebook', 'Google', 'Microsoft', 'Apple', 'Ibm', 'Oracle', 'Amazon']
console.log(itCompanies.reverse()); // ['Amazon', 'Oracle', 'Ibm', 'Apple', 'Microsoft', 'Google', 'Facebook']

console.log(itCompanies.slice(0, 3)); // ['Amazon', 'Oracle', 'Ibm']
console.log(itCompanies.slice(-3)); // ['Microsoft', 'Google', 'Facebook']

// New method (doesn't mutate original array)
const itCompanies2 = itCompanies.toReversed();
console.log(itCompanies2); // ['Facebook', 'Google', 'Microsoft', 'Apple', 'Ibm', 'Oracle', 'Amazon']

console.log(
  itCompanies2.slice(itCompanies2.length / 2, itCompanies2.length / 2 + 1) // ['Apple']
);

itCompanies2.shift();
console.log(itCompanies2); // ['Google', 'Microsoft', 'Apple', 'Ibm', 'Oracle', 'Amazon']

itCompanies2.splice(itCompanies2.length / 2, 1);
console.log(itCompanies2); // ['Google', 'Microsoft', 'Apple', 'Oracle', 'Amazon']

itCompanies2.pop(); // ['Google', 'Microsoft', 'Apple', 'Oracle']

itCompanies2.splice(0, itCompanies2.length); // removing all IT companies
console.log(itCompanies2); // []
