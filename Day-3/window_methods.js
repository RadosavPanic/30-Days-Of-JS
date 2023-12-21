//alert("30 days of js");

let number = +prompt("Enter number", "Optional text placeholder");

const agree = confirm(`You entered: ${number}. Do you want to proceed?`);

if (agree) console.log(`Your number: ${number}`);
console.log(`Confirm value (true=OK, false=Cancel): ${agree}`);
