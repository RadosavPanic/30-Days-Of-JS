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

// replace(): Searches and replaces matched substring with a replacement substring
let sentence1 =
  "Python is one of the best languages for coding. I recommend python as a first programming language.";

let matchReplaced1 = sentence1.replace(/Python|python/, "JavaScript"); // only first occurence, not using g flag (global flag)
console.log(matchReplaced1);
// JavaScript is one of the best languages for coding. I recommend python as a first programming language.

let matchReplaced2 = sentence1.replace(/Python/gi, "JavaScript"); // all occurences with gi flags, also replaceAll() new method
console.log(matchReplaced2);
// JavaScript is one of the best languages for coding. I recommend JavaScript as a first programming language.

let sentence2 =
  "%I a%m te%%a%%che%r% a%n%d %%I l%o%ve te%ach%ing.\
 T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
 I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
 D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.";

let matchReplaced3 = sentence2.replace(/%/g, "");
console.log(matchReplaced3);
// I am teacher and I love teaching.There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher.

/* 
Symbols
-------
[] - A set of characters (e.g: [a-z], [0-9], [A-Za-z0-9])
\d - match where string contains digits (0-9), \D - match where string doesn't contain digits
^ - starts with substring, $ - ends with
* - 0 or more times, + - one or more times, ? - zero or one times
\b - word bounder, matches with beginning or ending of a word
{3} - exactly 3 characters, {3,} - at least 3 characters, {3-8} - 3 to 8 characters
| - either or another (r'apple|banana') mean either apple or banana
() - capture and group
*/

pattern = "[Aa]pple";
let sentence3 =
  "Apple and banana are fruits. If you want a softer fruit, take an apple.";
let matched = sentence3.match(pattern);
console.log(matched);
// ['Apple', index: 0, input: 'Apple and banana are fruits. If you want a softer fruit, take an apple.', groups: undefined]

pattern = /[Aa]pple/g;
matched = sentence3.match(pattern);
console.log(matched); // ['Apple', 'apple']

pattern = /[Aa]pple|[Bb]anana/g;
matched = sentence3.match(pattern);
console.log(matched); // ['Apple', 'banana', 'apple']
