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

console.log(areaOfCircle(10).toPrecision(5)); // 314.16

function circumOfCircle(radius) {
  const circumference = 2 * Math.PI * radius;

  return circumference;
}

console.log(circumOfCircle(14)); // 87.96459430051421

function objectSpeed(totalDistanceCovered, totalTimeTaken) {
  const speed = totalDistanceCovered / totalTimeTaken;

  return speed;
}

console.log(objectSpeed(200, 7)); // 28.571428571428573
