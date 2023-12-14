let word = "JavaScript";
// word[0] = "Y"; will raise an error, primitives are immutable (non-modifiable)

let numOne = 3,
  numTwo = 3;
console.log(numOne == numTwo); // true

let js = "JavaScript",
  py = "Python";
console.log(js == py); // false

let lightOn = true,
  lightOff = false;
console.log(lightOn == lightOff); // false
