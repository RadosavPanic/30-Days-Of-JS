function fullName(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;

  return fullName;
}

console.log(fullName("John", "Doe")); // 'John Doe'

function addNumbers(num1, num2) {
  const sum = num1 + num2;

  return sum;
}

console.log(addNumbers(31, 46)); // 77

function areaOfRectangle(length, width) {
  const area = length * width;

  return area;
}

console.log(areaOfRectangle(15, 4)); // 60

function perimeterOfRectangle(length, width) {
  const perimeter = 2 * (length + width);

  return perimeter;
}

console.log(perimeterOfRectangle(24, 12)); // 72

function volumeOfRectPrism(length, width, height) {
  const volume = length * width * height;

  return volume;
}

console.log(volumeOfRectPrism(20, 9, 13)); // 2340

function areaOfCircle(radius) {
  const area = Math.PI * radius * radius;

  return area;
}

console.log(+areaOfCircle(10).toPrecision(5)); // 314.16

function circumOfCircle(radius) {
  const circumference = 2 * Math.PI * radius;

  return circumference;
}

console.log(+circumOfCircle(14).toPrecision(4)); // 87.96

function objectSpeed(totalDistanceCovered, totalTimeTaken) {
  const speed = totalDistanceCovered / totalTimeTaken;

  return speed;
}

console.log(+objectSpeed(200, 7).toPrecision(4)); // 28.57

function calcWeight(mass, gravity = 9.81) {
  const weight = mass * gravity;

  return weight;
}

console.log(+calcWeight(45).toPrecision(5)); // 441.5

function convertCelsiusToFarenheit(tempCelsius) {
  const tempFarenheit = (tempCelsius * 9) / 5 + 32;

  return tempFarenheit;
}

console.log(convertCelsiusToFarenheit(25)); // 77

function calcBMICategory(weight, height) {
  const bmi = +(weight / (height * height)).toPrecision(4);
  let category;

  bmi < 18.5
    ? (category = "Underweight")
    : bmi >= 18.5 && bmi <= 24.9
    ? (category = "Normal weight")
    : bmi >= 25 && bmi <= 29.9
    ? (category = "Overweight")
    : bmi >= 30
    ? (category = "Obese")
    : (category = "Not specified");

  console.log(`Bmi is: ${bmi}`);

  return category;
}

// Bmi is: 25.71
console.log(calcBMICategory(70, 1.65)); // Overweight

function checkSeason(month) {
  let season;

  switch (month) {
    case "December":
    case "January":
    case "February":
      season = "Winter";
      break;
    case "March":
    case "April":
    case "May":
      season = "Spring";
      break;
    case "June":
    case "July":
    case "August":
      season = "Summer";
      break;
    case "September":
    case "October":
    case "November":
      season = "Autumn";
      break;
    default:
      season = "Invalid month";
  }

  return season;
}

console.log(checkSeason("October")); // Autumn

function findMax(args) {
  let max = args[0];

  for (const arg of args) {
    if (max < arg) max = arg;
  }

  return max;
}

console.log(findMax([15, 24, 33, 32])); // 33
