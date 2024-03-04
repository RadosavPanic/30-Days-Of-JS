/* 
Regular Expressions ways:
- RegExp Constructor (RequiredSearchPattern, Flag)
- Two forward slashes with optional flag (/string/flag)
 */

// With Constructor

let pattern = "love";
let regExp1 = new RegExp(pattern);

console.log(regExp1); // /love/

let flag = "gi"; // search global, ignore case

let regExp2 = new RegExp(pattern, flag);
console.log(regExp2); // /love/gi

// Without Constructor

let regExp3 = /love/gi;

/* RegExp Object Methods */

// test(): Tests for match in a string, returns True/False
let str1 = "I love JavaScript";
pattern = /love/;

let result1 = pattern.test(str1);
console.log(result1); // true

// match(): Returns array containing all matches including capturing groups, or null if no match is found
// without global flag, match() returns array with pattern, index, input and groups

pattern = /love/;
let result2 = str1.match(pattern);
console.log(result2); // ['love', index: 2, input: 'I love JavaScript', groups: undefined]

pattern = /love/g;
let result3 = str1.match(pattern);
console.log(result3); // ['love']

// search(): Tests for a match in a string, returns index of match or -1 if none
let result4 = str1.search(pattern);
console.log(result4); // 2
