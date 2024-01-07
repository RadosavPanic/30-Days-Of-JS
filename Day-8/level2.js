const usersL2 = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

const loggedInUsers = [];
let loggedInCount = 0;
const usersWith50PlusPoints = [];
let usersWith50PlusPointsCount = 0;
const usersWithManySkills = [];
let usersWithManySkillsCount = 0;

for (const [key, value] of Object.entries(usersL2)) {
  if (value.isLoggedIn == true) {
    loggedInUsers.push(key);
    loggedInCount++;
  }
  if (value.points >= 50) {
    usersWith50PlusPoints.push(key);
    usersWith50PlusPointsCount++;
  }
  if (value.skills.length > 4) {
    usersWithManySkills.push(key);
    usersWithManySkillsCount++;
  }
}

console.log(`Logged in users: ${loggedInUsers.join(", ")}`); // Logged in users: Brook, John
console.log(`Logged in count: ${loggedInCount}`); // Logged in count: 2

console.log(
  `Users with 50 or more points: ${usersWith50PlusPoints.join(", ")}`
); // Users with 50 or more points: Asab, Brook, John
console.log(
  `Users with 50 or more points count: ${usersWith50PlusPointsCount}`
); // Users with 50 or more points count: 3

console.log(`Users with many skills: ${usersWithManySkills.join(", ")}`); // Users with many skills: Asab, Brook, John, Paul
console.log(`Users with many skills count: ${usersWithManySkillsCount}`); // Users with many skills count: 4

// Find MERN Stack users
const mernStackUsers = [];
let mernStackUsersCount = 0;
for (const [key, value] of Object.entries(usersL2)) {
  let skillCount = 0;
  for (const skill of value.skills) {
    if (
      skill.includes("MongoDB") ||
      skill.includes("Express") ||
      skill.includes("Node") ||
      skill.includes("React")
    ) {
      skillCount++;
    }
  }
  if (skillCount == 4) {
    mernStackUsers.push(key);
    mernStackUsersCount++;
  }
}

console.log(`MERN stack users: ${mernStackUsers.join(", ")}`); // MERN Stack users: Asab, Paul
console.log(`MERN stack users count: ${mernStackUsersCount}`); // MERN Stack users count: 2

// Set my name without modifying original users object
const updatedUsersL2 = {
  ...usersL2,
  Radosav: {
    email: "radosav@radosav.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Python",
    ],
    age: 22,
    isLoggedIn: true,
    points: 70,
  },
};

const userKeys = Object.keys(updatedUsersL2);
console.log(userKeys); // ['Alex', 'Asab', 'Brook', 'Daniel', 'John', 'Thomas', 'Paul', 'Radosav']

const userValues = Object.values(updatedUsersL2);
console.log(userValues); // (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}] (8 objects containing users data)

for (const [key, value] of Object.entries(countries)) {
  console.log(
    `Name: ${value.name}\nCapital: ${value.capital}\nPopulation: ${
      value.population
    }\nLanguages: ${value.languages.join(", ")}`
  );
}
// each of 250 countries are printed in below format:

/* Name: Venezuela (Bolivarian Republic of)
Capital: Caracas
Population: 31028700
Languages: Spanish */
