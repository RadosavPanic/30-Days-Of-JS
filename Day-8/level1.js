const dog = new Object(); // {}
console.log(dog); // {}

dog.name = "Jacky";
dog.legs = 4;
dog.color = "white";
dog.age = 8;
dog.bark = function () {
  return `woof woof`;
};

console.log(
  `Name: ${dog.name}, age: ${dog.age}, color: ${dog.color}, legs: ${
    dog.legs
  }, barks: ${dog.bark()}`
); // Name: Jacky, age: 8, color: white, legs: 4, barks: woof woof

dog.breed = "Labrador";
dog.getDogInfo = function () {
  console.log(
    `Name: ${dog.name}, age: ${dog.age}, color: ${dog.color}, legs: ${dog.legs}, breed: ${dog.breed}`
  );
};

dog.getDogInfo(); // Name: Jacky, age: 8, color: white, legs: 4, breed: Labrador
