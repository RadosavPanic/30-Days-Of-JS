// Generate random id with arbitrary length
const generateArbitraryLengthRandomId = (idLength) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomId = "";

  for (let i = 0; i < idLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
};

console.log(`Random id (20): ${generateArbitraryLengthRandomId(20)}`); // WAqO8lPbwfEegaI4Slau (this time)
console.log(`Random id (13): ${generateArbitraryLengthRandomId(13)}`); // F3UxAEASsVdmj (this time)

// Generate random hexadecimal number
const generateRandomHexNumber = () => {
  const characters = "0123456789abcdef";
  let randomHexNumber = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomHexNumber += characters.charAt(randomIndex);
  }

  return randomHexNumber;
};

console.log(`Random hexadecimal number: ${generateRandomHexNumber()}`); // #4bd12b (this time)

// Generate random rgb color number
const generateRandomRgbColor = () => {
  let randomRgbNumber = "rgb(";

  for (let i = 0; i < 3; i++) {
    const randomInteger = Math.floor(Math.random() * 255) + 1;
    randomRgbNumber += randomInteger;
    if (i != 2) randomRgbNumber += ", ";
    else {
      randomRgbNumber += ")";
    }
  }

  return randomRgbNumber;
};

console.log(`Random rgb color number: ${generateRandomRgbColor()}`); // rgb(145, 152, 83) (this time)

// Countries level
const countriesUpper = new Array();
for (const country of countries) {
  countriesUpper.push(country.toUpperCase());
}
console.log(countriesUpper); // ['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']

const countriesLength = Array();
for (const country of countries) {
  countriesLength.push(country.length);
}
console.log(countriesLength); // [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

const countriesMarkAndLength = [];
for (const country of countries) {
  countriesMarkAndLength.push([
    country,
    country.slice(0, 3).toUpperCase(),
    country.length,
  ]);
}
console.log(countriesMarkAndLength);
/* 
[
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
*/

// Check if countries contain word "land"
const countriesIncludingLand = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) countriesIncludingLand.push(countries[i]);
}

countriesIncludingLand.length > 0
  ? console.log(countriesIncludingLand)
  : console.log(`All these countries are without land`);
// ['Finland', 'Ireland']

// Check if countries end with word "ia"
const countriesEndingWithIa = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].endsWith("ia")) countriesEndingWithIa.push(countries[i]);
}

countriesEndingWithIa.length > 0
  ? console.log(countriesEndingWithIa)
  : console.log(`All these countries end without ia`);
// ['Albania', 'Bolivia', 'Ethiopia']

// Finding longest country length
let longestCountry = "";
for (const country of countries) {
  if (longestCountry.length < country.length) longestCountry = country;
}
console.log(longestCountry); // Ethiopia

const countriesWith5Chars = [];
for (const country of countries) {
  if (country.length == 5) countriesWith5Chars.push(country);
}

console.log(countriesWith5Chars); // ['Japan', 'Kenya']

// webTechs level
console.log(webTechs); // ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']

// Finding longest web tech length
let longestWebTech = "";
for (const tech of webTechs) {
  if (longestWebTech.length < tech.length) longestWebTech = tech;
}
console.log(longestWebTech); // JavaScript

const webTechsMarkAndLength = [];
for (const tech of webTechs) {
  webTechsMarkAndLength.push([tech, tech.length]);
}
console.log(webTechsMarkAndLength); // [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

// mernStack level
console.log(mernStack); // ['MongoDB', 'Express', 'React', 'Node']

let mernStackAcronym = "";
for (const stack of mernStack) {
  mernStackAcronym += stack.slice(0, 1);
}
console.log(mernStackAcronym); // MERN

// Reversing the array manually
let fruitArray = ["banana", "orange", "mango", "lemon"];
for (let i = 0; i < Math.floor(fruitArray.length / 2); i++) {
  let temp = fruitArray[i];
  fruitArray[i] = fruitArray[fruitArray.length - 1 - i];
  fruitArray[fruitArray.length - 1 - i] = temp;
}

console.log(fruitArray); // ['lemon', 'mango', 'orange', 'banana']
console.log(fruitArray.toReversed()); // ['banana', 'orange', 'mango', 'lemon'], new method (no mutation of original array)

// fullStack level
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

fullStack.flat().forEach((tech) => console.log(tech));
/* 
HTML
CSS
JS
REACT
NODE
EXPRESS
MONGODB
*/
