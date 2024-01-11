// Higher-order function takes function as a parameter (callback) or returns a function as a value

const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatever = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatever;
  };
  return doSomething;
};

console.log(higherOrder(2)(3)(10)); // 23

const numbers = [1, 2, 3, 4, 5];

const sumArray = (arr) => {
  let sum = 0;

  const callback = function (element) {
    sum += element;
  };

  arr.forEach(callback);

  return sum;
};

console.log(sumArray(numbers));

function sayHello() {
  console.log(`Hello`);
}

// setInterval(sayHello, 1000);

setTimeout(sayHello, 2000);
