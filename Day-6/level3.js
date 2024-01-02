const countriesCopy = countries.slice();
console.log(countriesCopy);
// ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']

const sortedCountries = countriesCopy.toSorted();
console.log(sortedCountries);

console.log(webTechs); // ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']
console.log(mernStack); // ['MongoDB', 'Express', 'React', 'Node']

const sortedWebTechs = webTechs.toSorted();
console.log(sortedWebTechs); // ['CSS', 'HTML', 'JavaScript', 'MongoDB', 'Node', 'React', 'Redux']

const sortedMernStack = mernStack.toSorted();
console.log(sortedMernStack); // ['Express', 'MongoDB', 'Node', 'React']

console.log(countriesCopy.filter((country) => country.includes("land"))); // ['Finland', 'Ireland']

let longestCharCountry = "";
for (const country of countriesCopy) {
  if (longestCharCountry.length < country.length) longestCharCountry = country;
}

console.log(
  `Longest character countrty is ${longestCharCountry}, and it's length is: ${longestCharCountry.length}.`
);
// Longest character countrty is Ethiopia, and it's length is: 8.

console.log(countriesCopy.filter((country) => country.length == 5)); // ['Japan', 'Kenya']

const countriesReversed = countriesCopy
  .map((country) => country.replace(country[0], country[0].toLowerCase()))
  .toReversed();

console.log(countriesReversed); // ['kenya', 'japan', 'ireland', 'hungary', 'germany', 'finland', 'ethiopia', 'denmark', 'canada', 'bolivia', 'albania']
