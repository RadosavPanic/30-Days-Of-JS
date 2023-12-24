// Array creation of empty values
let arr1 = Array(); // 1st way, output: []
arr1 = new Array(); // using new keyword, output: []
arr1 = []; // using array literal of square brackets, output: []

console.log(arr1, typeof arr1); // [], 'object'
console.log(arr1 instanceof Array, arr1 instanceof Object); // true, true
