const div = document.createElement("div");
document.body.append(div);

let numbers;
for (let i = 0; i <= 101; i++) {
  numbers = document.createElement("p");
  numbers.textContent = i;
  numbers.classList.add("number");

  if (i % 2 == 0) {
    numbers.classList.add("even");
  } else {
    numbers.classList.add("odd");
  }
  if (isPrime(i)) {
    numbers.classList.add("prime");
  }
  div.append(numbers);
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
