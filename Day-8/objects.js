console.log(`----OBJECTS----`);

const obj1 = {}; // Object literal (Empty)

const person = {
  firstName: "Radosav",
  lastName: "Panic",
  age: 125,
  country: "Serbia",
  city: "Belgrade",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Firebase",
    "GraphQL",
  ],
  isMarried: false,
  // Object method
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  // ES6 enhanced object literals (easier method declaration)
  getSkills() {
    console.log(`Skills of ${this.firstName}:`);
    for (const skill of this.skills) {
      console.log(skill);
    }
  },
};

console.log(person);

// Accessing values using dot (.) notation
console.log(person.age, person.skills); // 125, ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', 'Firebase', 'GraphQL']

// Accessing values using bracket notation (key name inside brackets)
console.log(person["firstName"], person["country"]); // Radosav Serbia

person.getSkills(); // displays skills for each

// Setting new keys
person.title = "Programmer";
person.skills.push("Sass");

console.log(person["title"]); // Programmer
console.log(person["skills"]); // ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', 'Firebase', 'GraphQL', 'Sass']

// Copying object
const copyPerson = Object.assign({}, person);

// Object.keys, Object.values, Object.entries
const copyPersonKeys = Object.keys(copyPerson);
console.log(copyPersonKeys); // ['firstName', 'lastName', 'age', 'country', 'city', 'skills', 'isMarried', 'getFullName', 'getSkills', 'title']

const copyPersonValues = Object.values(copyPerson);
console.log(copyPersonValues); // ['Radosav', 'Panic', 125, 'Serbia', 'Belgrade', Array(9), false, ƒ, ƒ, 'Programmer']

const copyPersonEntries = Object.entries(copyPerson);
console.log(copyPersonEntries); // [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
// [['firstName', 'Radosav'], ['lastName', 'Panic'], ['age', 125], ['country', 'Serbia'], ['city', 'Belgrade'], ['skills', Array(9)],
// ['isMarried', false], ['getFullName', ƒ], ['getSkills', ƒ], ['title', 'Programmer']]

// hasOwnProperty -> check if specific key or property exist in an object
console.log(copyPerson.hasOwnProperty("score")); // false
console.log(copyPerson.hasOwnProperty("age")); // true
