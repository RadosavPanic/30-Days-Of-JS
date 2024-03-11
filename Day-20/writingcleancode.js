// Variables
const firstName = "Radosav",
  lastName = "Panic",
  country = "Serbia",
  city = "Belgrade";

const PI = Math.PI.toPrecision(6);
console.log(PI); // 3.14159
const gravity = 9.81;

// Arrays (plural names)
const names = ["John", "Peter", "Bob", "Michael"];
const numbers = [0, 4.12, 9.81, 37, 98.6];
const countries = ["Finland", "Denmark", "Sweden", "Iceland"];
const languages = ["Serbian", "English", "French", "Spanish"];
const fruits = ["banana", "orange", "mango", "lemon"];

// Functions
const printFullName = (firstName, lastName) => firstName + " " + lastName;
const calcSquare = (n) => n * n;

const generateHexColor = () => {
  const str = "0123456789abcdef";
  let hexColor = "#";
  let index;
  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * str.length);
    hexColor += str[index];
  }
  return hexColor;
};

console.log(generateHexColor()); // #36744d (this time)

const showDateTime = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");

  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");

  const dateTimeFormat = `${date}.${month}.${year} ${hours}:${minutes}`;
  return dateTimeFormat;
};

console.log(showDateTime()); // 11.03.2024 06:26

// Loops
for (let i = 0; i < names.length; i++) {
  console.log(names[i].toUpperCase());
} // JOHN PETER BOB MICHAEL

for (const name of names) {
  console.log(name.toUpperCase());
} // JOHN PETER BOB MICHAEL

names.forEach((name) => console.log(name.toUpperCase())); // JOHN PETER BOB MICHAEL

// Objects

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 35,
  country: "Finland",
  city: "Helsinki",
  skills: ["HTML", "CSS", "JS", "React", "Node", "MongoDB"],
};

for (const key in person) {
  console.log(key);
} // firstName lastName age country city skills

// Conditional
let num = 3;
if (num > 0) console.log(`${num} is a positive number`);
else if (num === 0) console.log(`${num} is zero`);
else console.log(`${num} is a negative number`);

let dayUserInput = "Wednesday";
let day = dayUserInput.toLowerCase();

switch (day) {
  case "monday":
    console.log("Today is Monday");
    break;
  case "tuesday":
    console.log("Today is Tuesday");
    break;
  case "wednesday":
    console.log("Today is Wednesday");
    break;
  case "thursday":
    console.log("Today is Thursday");
    break;
  case "friday":
    console.log("Today is Friday");
    break;
  case "saturday":
    console.log("Today is Saturday");
    break;
  case "sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Input is not valid. Please enter a week day.");
}

let isRaining = true;
isRaining
  ? console.log(`You need umbrella.`)
  : console.log(`You don't need umbrella.`);

// Classes
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get getFirstName() {
    return this.firstName;
  }

  get getLastName() {
    return this.lastName;
  }
}
