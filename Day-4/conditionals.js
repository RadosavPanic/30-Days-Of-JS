let a = 0;

if (a > 0) console.log(`${a} is a positive number.`);
else if (a < 0) console.log(`${a} is a negative number.`);
else if (a == 0) console.log(`${a} is zero.`);
else console.log(`${a} is not a number.`);
// 0 is zero.

let weather = "sunny";

if (weather === "rainy") console.log("You need a rain coat.");
else if (weather === "cloudy")
  console.log("It might be cold, you need a jacket.");
else if (weather === "sunny") console.log("Go out freely.");
else console.log("No need for a rain coat.");
// Go out freely.

let dayUserInput = prompt("What day is today?");
let day = dayUserInput.toLowerCase();

switch (day) {
  case "monday":
    console.log("Today is Monday");
    break;
  case "tuesday":
    console.log("Today is Tuesday");
    break;
  case "wednesday":
    console.log("Today is Tuesday");
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
    console.log("Entered day is not a week day");
}

let isRaining = false;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");

// Check driver age function
const checkIsDriverAge = (age) =>
  age >= 18
    ? console.log("You are old enough to drive.")
    : console.log("You are left with 3 years to drive.");

let personAge = +prompt("Enter your age:");
personAge &&
  personAge != "NaN" &&
  typeof personAge === "number" &&
  checkIsDriverAge(personAge);

// Check even number function
const checkIsNumberEven = (number) =>
  number % 2 == 0
    ? console.log(`${number} is even number.`)
    : console.log(`${number} is odd number.`);

let promptNum = +prompt("Enter your number:");
promptNum &&
  promptNum != "NaN" &&
  typeof promptNum === "number" &&
  checkIsNumberEven(promptNum);

// Check season function (Autumn, Winter, Spring, Summer)
const CheckSeasonOfYear = (monthInput) => {
  if (monthInput === null || monthInput === undefined) return;

  let month = monthInput.toLowerCase();
  month = month.replace(month[0], month[0].toUpperCase());

  switch (month) {
    case "September":
    case "October":
    case "November":
      console.log(`Season for month ${month} is Autumn.`);
      break;
    case "December":
    case "January":
    case "February":
      console.log(`Season for month ${month} is Winter.`);
      break;
    case "March":
    case "April":
    case "May":
      console.log(`Season for month ${month} is Spring.`);
      break;
    case "June":
    case "July":
    case "August":
      console.log(`Season for month ${month} is Summary.`);
      break;
    default:
      console.log("Entered month is not valid.");
  }
};

let monthOfYear = prompt("Enter month");
CheckSeasonOfYear(monthOfYear);

// Check day function (working or weekend)
const checkIsWorkingOrWeekendDay = (dayInput) => {
  if (dayInput === null || dayInput === undefined) return;

  let day = dayInput.toLowerCase();
  day = day.replace(day[0], day[0].toUpperCase());

  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      console.log(`${day} is a working day.`);
      break;
    case "Saturday":
    case "Sunday":
      console.log(`${day} is a weekend day.`);
      break;
    default:
      console.log("Entered day is not valid.");
  }
};

let dayInput = prompt("Enter your day:");
checkIsWorkingOrWeekendDay(dayInput);

// Check student grading function
const checkStudentGrade = (points) => {
  let grade;
  if (points >= 90 && points <= 100) grade = "A";
  else if (points >= 70 && points <= 89) grade = "B";
  else if (points >= 60 && points <= 69) grade = "C";
  else if (points >= 50 && points <= 59) grade = "D";
  else if (points >= 0 && points <= 49) grade = "F";
  else console.log("Entered points are out of bounds.");

  grade && console.log(`Your points: ${points} (grade ${grade})`);
};

let studentPoints = +prompt("Enter student points");
studentPoints &&
  studentPoints != "NaN" &&
  typeof studentPoints === "number" &&
  checkStudentGrade(studentPoints);
