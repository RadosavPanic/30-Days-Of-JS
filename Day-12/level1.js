let incomeText =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month";

let incomes = incomeText.match(/\d+/g); // ['4000', '10000', '5500']
incomes = incomes.map((val) => Number(val));
console.log(incomes); //  [4000, 10000, 5500]

const totalIncome = incomes.reduce((acc, cur) => acc + cur, 0);
console.log(totalIncome); // 19500

let axisText =
  "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in \
the negative direction, 0 at origin, 4 and 8 in the positive direction. \
Extract these numbers and find the distance between the two furthest particles.";

let points = axisText.match(/-?\d+/g);
console.log(points); // ['-12', '-4', '-3', '-1', '0', '4', '8']
points = points.map((val) => Number(val));
console.log(points); // [-12, -4, -3, -1, 0, 4, 8]

let sortedPoints = points.toSorted((a, b) => a - b);
console.log(sortedPoints); // [-12, -4, -3, -1, 0, 4, 8]

const distance = sortedPoints.at(-1) - sortedPoints.at(0);
console.log(distance); // 20

const is_valid_variable = function (variableNameInput) {
  let validVariablePattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

  return validVariablePattern.test(variableNameInput);
};

console.log(is_valid_variable("first_name")); // true
console.log(is_valid_variable("first-name")); // false
console.log(is_valid_variable("1first_name")); // false
console.log(is_valid_variable("firstname")); // true
