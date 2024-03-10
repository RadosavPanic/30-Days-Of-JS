class Person {
  constructor(firstName, lastName, age) {
    console.log(this); // Person {}
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.score = 0;
    this.skills = [];
  }

  getFullInfo() {
    console.log(
      `First name: ${this.firstName}\nLast name: ${this.lastName}\nAge: ${this.age}`
    );
  }

  get getScore() {
    return this.score;
  }

  get getSkills() {
    return this.skills;
  }

  set setScore(score) {
    this.score += score;
  }

  set setSkill(skill) {
    this.skills.push(skill);
  }

  static showDateTime() {
    const now = new Date();
    return `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`;
  }
}

const person = new Person("John", "Doe", 30);

console.log(person); // Person {firstName: 'John', lastName: 'Doe', age: 30}

person.getFullInfo();
/*
First name: John
Last name: Doe
Age: 30 
*/

console.log(person.getScore); // 0
console.log(person.getSkills); // 0
person.setScore = 20;
person.setScore = 21;
console.log(person.getScore); // 41
person.setSkill = "Swimming";
console.log(person.getSkills); // ['Swimming']
person.setSkill = "Tennis";
console.log(person.getSkills); // ['Swimming', 'Tennis']

console.log(Person.showDateTime()); // 10/2/2024

class Student extends Person {
  constructor(firstName, lastName, age, gender, course) {
    super(firstName, lastName, age);
    this.gender = gender;
    this.course = course;
  }

  get getGender() {
    return this.gender;
  }

  get getCourse() {
    return this.course;
  }

  set setCourse(course) {
    this.course = course;
  }
}

const student1 = new Student(
  "Peter",
  "Parker",
  32,
  "Male",
  "Information Technologies"
);

console.log(student1); // Student {firstName: 'Peter', lastName: 'Parker', age: 32, score: 0, skills: Array(0), …}

console.log(student1.getCourse); // Information Technologies
console.log(student1.getGender); // Male

student1.setCourse = "Pharmacy";
console.log(student1.getCourse); // Pharmacy

class Statistics {
  constructor(sample) {
    this.sample = sample;
  }

  count() {
    return this.sample.length;
  }
  sum() {
    return this.sample.reduce((acc, cur) => acc + cur, 0);
  }
  min() {
    return Math.min(...this.sample);
  }
  max() {
    return Math.max(...this.sample);
  }
  range() {
    return this.max() - this.min();
  }
  mean() {
    return (this.sum() / this.sample.length).toPrecision(2);
  }
  median() {
    const sortedData = this.sample.toSorted((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
      return sortedData[middle - 1] + sortedData[middle] / 2;
    } else {
      return sortedData[middle];
    }
  }
}

ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

const statistics = new Statistics(ages);

console.log(statistics.sum()); // 744
console.log(statistics.count()); // 25
console.log(statistics.min()); // 24
console.log(statistics.max()); // 38
console.log(statistics.range()); // 14
console.log(statistics.mean()); // 30
console.log(statistics.median()); // 29
