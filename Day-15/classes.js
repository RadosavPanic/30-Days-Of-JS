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
