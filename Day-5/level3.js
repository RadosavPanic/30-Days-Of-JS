const studentsAges = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

studentsAges.sort((a, b) => a - b);
console.log(studentsAges); // [19, 19, 20, 22, 24, 24, 24, 25, 25, 26]

let maxAge = Math.max(...studentsAges);
let minAge = Math.min(...studentsAges);
console.log(`Min age: ${minAge}, max age: ${maxAge}`); // Min age: 19, max age: 26

let medianAge =
  (Math.floor(studentsAges.at(studentsAges.length / 2)) +
    Math.ceil(studentsAges.at(studentsAges.length / 2))) /
  2;
console.log(medianAge); // 24

let ageAvg =
  studentsAges.reduce((acc, cur) => acc + cur, 0) / studentsAges.length;
console.log(`Average age: ${ageAvg}`); // Average age: 22.8

let ageGap = maxAge - minAge;
console.log(`Max and min age gap: ${ageGap}`); // Max and min age gap: 7

console.log(Math.abs(minAge - ageAvg) > Math.abs(maxAge - ageAvg)); // true
console.log(
  +Math.abs(minAge - ageAvg).toPrecision(2),
  +Math.abs(maxAge - ageAvg).toPrecision(2)
); // 3.8 3.2

console.log(countries.slice(0, 10)); // ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria']

let middleIndex = Math.floor(countries.length / 2);

const middleCountries = countries.slice(middleIndex - 1, middleIndex + 1);
console.log(middleCountries); // ['Lebanon', 'Lesotho']

let firstHalf;
let secondHalf;

if (countries.length % 2 === 0) {
  firstHalf = countries.slice(0, countries.length / 2);
  console.log(countries.length / 2);
  secondHalf = countries
    .slice(countries.length / 2, -1)
    .concat(countries.at(-1));
} else {
  firstHalf = countries.slice(0, Math.floor(countries.length / 2) + 1);
  console.log(countries.length / 2);
  secondHalf = countries
    .slice(Math.floor(countries.length / 2) + 1, -1)
    .concat(countries.at(-1));
}

// there are 193 countries
console.log(firstHalf); // 97 countries
console.log(secondHalf); // 96 countries
