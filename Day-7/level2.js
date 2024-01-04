// Linear equation
const solveLinEquation = (a, b, c, x, y) => a * x + b * y + c;

console.log(solveLinEquation(1, 4, 4, 2, 3)); // 18

function solveQuadEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    return [root];
  } else {
    const realPart = -b / (2 * a);
    const imaginaryPart = Math.sqrt(Math.abs(discriminant)) / (2 * a);
    const root1 = `${realPart} + ${imaginaryPart}i`;
    const root2 = `${realPart} - ${imaginaryPart}i`;
    return [root1, root2];
  }
}

console.log(solveQuadEquation(1, -3, 2)); // [2, 1]

function printArray(arr) {
  for (const val of arr) {
    console.log(val);
  }
}

printArray([5, 17.2, "JavaScript", true]); // prints each value

function showDateTime() {
  const date = new Date("August 01, 2020 04:08");
  console.log(date); // Sat Aug 01 2020 04:08:00 GMT+0200 (Central European Summer Time)
  // Expected format: 08/01/2020 04:08

  function calcLeadingZero(num) {
    return String(num).padStart(2, "0");
  }
  const year = date.getFullYear(); // 2020
  const month = calcLeadingZero(date.getMonth() + 1); // '08'
  const day = calcLeadingZero(date.getDate()); // '01'
  const hour = calcLeadingZero(date.getHours()); // '04'
  const mins = calcLeadingZero(date.getMinutes()); // '08'

  const formattedDate = `${month}/${day}/${year} ${hour}:${mins}`;

  return formattedDate;
}

const dateTime1 = showDateTime();
console.log(dateTime1); // 08/01/2020 04:08

function swapValues(x, y) {
  let pom;
  pom = x;
  x = y;
  y = pom;

  return [x, y];
}

let x = 10;
let y = 21;
[x, y] = swapValues(x, y);

console.log(x, y); // 21 10

function reverseArray(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }

  return arr;
}

let fruits = ["banana", "orange", "apple", "mango"];
let fruitsReversed = reverseArray(fruits);
console.log(fruitsReversed); // ['mango', 'apple', 'orange', 'banana']

function capitalizeArray(arr) {
  arr = arr.map((val) => val.toUpperCase());

  return arr;
}

fruitsReversed = capitalizeArray(fruitsReversed);
console.log(fruitsReversed); // ['MANGO', 'APPLE', 'ORANGE', 'BANANA']

function addItem(item, arr) {
  arr.push(item);
}

addItem("cherry", fruits);
console.log(fruits); // ['mango', 'apple', 'orange', 'banana', 'cherry']

function removeItem(index, arr) {
  arr.splice(index, 1);
}

removeItem(2, fruits);
console.log(fruits); // ['mango', 'apple', 'banana', 'cherry']

function generateRandomUserIPAdress() {
  const octet1 = Math.floor(Math.random() * 256);
  const octet2 = Math.floor(Math.random() * 256);
  const octet3 = Math.floor(Math.random() * 256);
  const octet4 = Math.floor(Math.random() * 256);

  const ipAdress = `${octet1}.${octet2}.${octet3}.${octet4}`;

  return ipAdress;
}

const randomUserIpAddr1 = generateRandomUserIPAdress();
console.log(randomUserIpAddr1); // 168.104.95.134 (this time)

function generateRandomMacAddress() {
  const getRandomHexDigit = () => Math.floor(Math.random() * 16).toString(16);
  const macAddressParts = Array.from({ length: 6 }, getRandomHexDigit);

  const macAddress = macAddressParts.join(":");
  return macAddress;
}

const randomMacAddress1 = generateRandomMacAddress();
console.log(randomMacAddress1); // f:7:0:d:8:a (this time)
