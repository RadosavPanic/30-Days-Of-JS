/* String methods */

let jslang = "JavaScript";
console.log(jslang.length); // 10

// Indexes
console.log(jslang[0]); // J, index starts from 0
console.log(jslang[9]); // t, last character

let lastIndex = jslang.length - 1;
console.log(jslang[lastIndex]); // t, 0-based, so length 10-1 is 9th index, which is the last character

// Text transformation, all to upper case, all to lower case
console.log(jslang.toUpperCase(), jslang.toLowerCase()); // JAVASCRIPT javascript

// substring(startIndex, endIndex) -> endIndex is not included
console.log(jslang.substring(0, 4)); // Java, end index of 4 doesn't include 4th element which is 'S'

// substr(startIndex, numberOfCharactersToSlice)
console.log(jslang.substr(4, 4)); // Scri, starts from 'S' and slices 4 characters for output of Scri

// split -> splits string sentences by specified operator and creates array elements
let array = "This will be array".split(" ");
console.log(array); // ['This', 'will', 'be', 'array']

// trim, trimStart, trimEnd -> cuts spaces on both sides, start or end of the string
console.log(" There are spaces on start and end ".trim()); // 'There are spaces on start and end'
console.log(" This will be trim from left only ".trimStart()); // 'This will be trim from left '
console.log(" This will be trim from right only ".trimEnd()); // ' This will be trim from right'

// includes(substring) -> returns boolean if substring exists in specified string
console.log("30 Days of JS".includes("of")); // true
console.log(jslang.includes("ice")); // false

// replace(searchValue, replaceValue) -> searches for a substring in a string and replaces it with specified string
console.log("30 Days of JavaScript".replace("JavaScript", "Python")); // 30 Days of Python

// replaceAll(searchValue, replaceValue) -> replaces all occurences of a substring and replaces them with specified string
console.log("This is js. This is something.".replaceAll("is", "isnt")); // Thisnt isnt js. Thisnt isnt something.

// charAt(index) -> takes index and returns value at that index
console.log("30 days of js".charAt(4)); // a

// charCodeAt(index) -> takes index and returns char code (ASCII number) of the value at that index
console.log("30 days of js".charCodeAt(4)); // 97

// indexOf(searchString, position?), lastIndexOf(searchString, position?)
console.log("This is JavaScript".indexOf("is")); // 2, returns first occurence index
console.log("This is JavaScript".lastIndexOf("is")); // 5, returns last occurence index
console.log("This is JavaScript".indexOf("Th", 5)); // -1, not found since search started from 5th index, not from 0
