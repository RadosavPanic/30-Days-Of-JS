for (let i = 0; i <= 5; i++) console.log(i); // 0 1 2 3 4 5
for (let i = 5; i >= 0; i--) console.log(i); // 5 4 3 2 1 0

for (let i = 0; i <= 5; i++) console.log(`${i} * ${i} = ${i * i}`);
/* 
0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25
*/

// Sum of numbers
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum); // 15

// Creating new array based on old
const countriesArr = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
let newArr = [];

for (let i = 0; i < countriesArr.length; i++) {
  newArr.push(countriesArr[i].toUpperCase());
}

console.log(newArr); // ['FINLAND', 'SWEDEN', 'DENMARK', 'NORWAY', 'ICELAND']

newArr = [];
for (let i = 0; i < numbers.length; i++) {
  newArr.push(numbers[i] ** 2);
}

console.log(newArr); // [1, 4, 9, 16, 25]

// While and do while loops
let i = 0;

while (i <= 5) {
  console.log(i); // 0 1 2 3 4 5
  i++;
}

i = 0;
do {
  console.log(i);
  i++;
} while (i <= 5); // 0 1 2 3 4 5

// for of loop
for (const num of numbers) console.log(num); // 1 2 3 4 5

sum = 0;
for (const num of numbers) sum += num;

console.log(sum); // 15

// break, continue
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
} // 0 1 2

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
} // 0 1 2 4 5
