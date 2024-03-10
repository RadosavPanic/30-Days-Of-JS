/* console.log */

console.log("30 days of js, day 13");
console.log("%d %s of JavaScript", 30, "Days"); // substitution
console.log("%cthird example of logging", "color:green"); // log output is green
console.log(
  "%c30 days%c %cOf%c %cJavaScript",
  "color:green",
  "",
  "color:red",
  "",
  "color:orange"
); // mixed log colors styles

/* console.warn */
console.warn("Your package is deprecated. Update to the latest version.");
console.warn(
  "You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM."
);

/* console.error */
console.error("An error occured.");
console.error("We all make mistakes");

/* console.table */
const names = ["John", "Brook", "David", "Peter"];
console.table(names);
const user = {
  firstName: "Radosav",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};
console.table(user);
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
console.table(countries);
const users = [
  user,
  {
    firstName: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
  },
  {
    firstName: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
  },
  {
    firstName: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
  },
];
console.table(users);

/* console.time */
console.time("Regular for loop");
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1]);
}
console.timeEnd("Regular for loop");
// Regular for loop: 0.201171875 ms

console.time("For of loop");
for (const [name, city] of countries) {
  console.log(name, city);
}
console.timeEnd("For of loop");
// For of loop: 0.095947265625 ms

/* console.info */
console.info(
  "This challenge for 30 days is awesome. It's available on GitHub."
);

/* console.assert */
console.assert(4 > 3, "4 is greater than 3");
console.assert(3 > 4, "3 is not greater than 4"); // Assertion failed: 3 is not greater than 4
for (let i = 0; i <= 10; i++) {
  let errorMessage = `${i} is not even`;
  console.log("the # is " + i);
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage });
} // Assertion failed: {number: 9, errorMessage: '9 is not even'} and so on

/* console.group */
console.group("Names");
console.log(names);
console.groupEnd();

console.group("Countries");
console.log(countries);
console.groupEnd();

console.group("Users");
console.log(user);
console.log(users);
console.groupEnd();

/* console.count */
const func1 = () => {
  console.count("Function has been called");
};
func1(); // Function has been called: 1
func1(); // Function has been called: 2
func1(); // Function has been called: 3

/* console.clear */
console.clear(); // Console was cleared
