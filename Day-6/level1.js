let iterator = 0;

console.log(`--for loop-- 0 to 10`);
for (iterator = 0; iterator <= 10; iterator++) console.log(iterator);

console.log(`--while loop-- 0 to 10`);
iterator = 0;
while (iterator <= 10) {
  console.log(iterator);
  iterator++;
}

console.log(`--do while loop-- 0 to 10`);
iterator = 0;
do {
  console.log(iterator);
  iterator++;
} while (iterator <= 10);

console.log(`--for loop-- 10 to 0`);
for (iterator = 10; iterator >= 0; iterator--) console.log(iterator);

console.log(`--while loop-- 10 to 0`);
iterator = 10;
while (iterator >= 0) {
  console.log(iterator);
  iterator--;
}

console.log(`--do while loop-- 10 to 0`);
iterator = 10;
do {
  console.log(iterator);
  iterator--;
} while (iterator >= 0);

for (iterator = 1; iterator <= 7; iterator++) console.log(`#`.repeat(iterator));
/*  
#
##
###
####
#####
######
####### 
*/

for (iterator = 0; iterator <= 10; iterator++)
  console.log(`${iterator} * ${iterator} = ${iterator * iterator}`);
/* 
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/

for (iterator = 0; iterator <= 10; iterator++) {
  if (iterator == 0) console.log(`i\ti^2\ti^3`);
  console.log(
    `${iterator}\t${Math.pow(iterator, 2)}\t${Math.pow(iterator, 3)}`
  );
}
/* 
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
*/

// Even numbers 0 to 100
console.log(`--Even numbers-- 0 to 100`);
for (iterator = 0; iterator <= 100; iterator++) {
  if (iterator % 2 == 0) console.log(iterator);
}

// Odd numbers 0 to 100
console.log(`--Odd numbers-- 0 to 100`);
for (iterator = 0; iterator <= 100; iterator++) {
  if (iterator % 2 != 0) console.log(iterator);
}

// Prime numbers 0 to 100
console.log(`--Prime numbers-- 0 to 100`);
for (iterator = 2; iterator <= 100; iterator++) {
  let isPrime = true;

  for (let j = 2; j <= Math.sqrt(iterator); j++) {
    if (iterator % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) console.log(iterator);
} // 2 3 5 7 11 13 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97

// Sum of all numbers
let sumAll = 0;
for (iterator = 0; iterator <= 100; iterator++) sumAll += iterator;

console.log(`Sum of all numbers from 0 to 100 is: ${sumAll}`); // Sum of all numbers from 0 to 100 is: 5050

// sum even and sum odd numbers
let sumEvens = 0;
let sumOdds = 0;
for (iterator = 0; iterator <= 100; iterator++) {
  if (iterator % 2 == 0) sumEvens += iterator;
  else {
    sumOdds += iterator;
  }
}

console.log(`Sum of all evens is: ${sumEvens}, and all odds is: ${sumOdds}`); // Sum of all evens is: 2550, and all odds is: 2500

// generate an array of 5 random numbers
const random5 = [];
for (iterator = 0; iterator < 5; iterator++) {
  random5.push(Number.parseInt(Math.random() * 100));
}

console.log(random5); // [38, 72, 62, 99, 59], random 5 numbers are like this (this time)

// generate an array of 5 random numbers that are unique
const random5Unique = [];
for (iterator = 0; iterator < 5; iterator++) {
  const randomNumber = Number.parseInt(Math.random() * 100);

  if (!random5Unique.includes(randomNumber)) {
    random5Unique.push(randomNumber);
  }
}

console.log(random5Unique);

// generate 5 letters random id
const generateRandomId = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomId = "";

  for (iterator = 0; iterator < 6; iterator++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
};

const randomId = generateRandomId();
console.log(randomId); // JhjuW6 (this time, other time random)
