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
for (country of countries) {
  countriesUpper.push(country.toUpperCase());
}
console.log(countriesUpper); // ['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']

const countriesLength = Array();
for (country of countries) {
  countriesLength.push(country.length);
}
console.log(countriesLength); // [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

const countriesMarkAndLength = [];
for (country of countries) {
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
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
*/
