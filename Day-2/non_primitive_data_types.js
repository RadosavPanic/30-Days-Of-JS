/*
Non-primitive data types are modifiable or mutable. Which means the value of non-primitive data types can be modified after it gets created.
*/

let nums = [1, 2, 3];
nums[0] = 10;
console.log(nums); // [10, 2, 3]

let numbers = [10, 2, 3];
console.log(nums == numbers); // false, even when same values, they don't share same memory location in the memory heap

let userOne = {
  name: "John",
  job: "teacher",
  country: "Canada",
};

let userTwo = {
  name: "John",
  job: "teacher",
  country: "Canada",
};

// Non-primitive data types are compared by reference (to memory heap), while primitive are by value
console.log(userOne == userTwo); // false

userTwo = userOne;
console.log(userOne == userTwo); // true, they point to the same location of object, so to the same object
