// closure is a trick that makes variable remember its former environment and everything related even after a function is executed

function outerFunction() {
  let count = 0;
  function innerFunction() {
    count++;
    return count;
  }

  return innerFunction;
}

const innerFc = outerFunction();
console.log(innerFc);

console.log(innerFc()); // 1
console.log(innerFc()); // 2
console.log(innerFc()); // 3

function secondOuter() {
  let count = 0;
  function plusOne() {
    count++;
    return count;
  }

  function minusOne() {
    count--;
    return count;
  }

  return {
    plusOne: plusOne(),
    minusOne: minusOne(),
  };
}

const fnChoice = secondOuter();
console.log(fnChoice.plusOne); // 1
console.log(fnChoice.minusOne); // 0
