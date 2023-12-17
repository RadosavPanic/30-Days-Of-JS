/* Sequence of characters under a single, double or back-tick quote.*/

let space = "";
let plang = "JavaScript",
  job = "developer";
let quote = "Belief is what drives us forward.";
let backtickquote = `${plang} is one of the most popular languages for ${job}s.`; //
let firstName = "Radosav",
  lastName = "Panic";

// String concatenation: using addition operator (ES5)
let fullName = firstName + " " + lastName; // Radosav Panic, without space output would be RadosavPanic
console.log(
  firstName +
    " is a " +
    job +
    " that uses " +
    plang +
    " as one of his languages for programming."
); // Radosav is a developer that uses JavaScript as one of his languages for programming.

// String concatenation: Template literals (Template strings) (ES6)
let fullNameBackTick = `${firstName} ${lastName}`; // string interpolation method
console.log(fullName, fullNameBackTick); // output: Radosav Panic

console.log(backtickquote); // JavaScript is one of the most popular languages for developers.

// Escape sequences: \n \t \\ \' \"
console.log(
  `This is backslash symbol: \\\nThese are double quotes around string: \"Hello world\"\nAnd these are single quotes around string:\'Hello world\'`
);

const paragraph =
  "This is a long string that doesn't fit in one line \
and backslash symbol at the end of each line indicates \
that the string will continue on the next line.";
console.log(paragraph);

console.log(`This is a tab symbol\t that has default of 8 spaces.`);
