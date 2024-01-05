console.log(`----SCOPES----`);

/* Window Global Object */
a1 = "JavaScript"; // accessible anywhere, found in window object
b1 = 10; // accessible anywhere, found in window object

/* GLOBAL SCOPE -> can be accessed anywhere in the same file */
let a2 = "Java";
let b2 = 15;

function scopesF1() {
  console.log(`Caller: ${scopesF1.name}`);
  console.log(a2, b2); // 'Java' 15 (Variable Lookup)

  if (true) {
    let a2 = "Python";
    let b2 = 100;
    console.log(a2, b2); // 'Python' 100 (Block scope, reinitialization only within block of code)
  }

  console.log(a2, b2); // 'Java' 15
}

scopesF1();
console.log(`Global scope: ${a2} ${b2}`); // Global scope: Java 15

/* LOCAL SCOPE (Function or Block) -> can be accessed only in certain block of code */
function scopesF2() {
  console.log(`Caller: ${scopesF2.name}`);
  console.log(a2, b2);

  let value = false;

  if (true) {
    let aa = "Py",
      bb = 20;
    value = !value;
    var b3 = 40; // var is function scoped, wherever declared

    console.log(`Block scope: ${aa} ${bb} ${value} ${b3}`); // Block scope: Py 20 true 40
  }

  console.log(b3); // 40, still accessible within function since its 'var' declared
  //   console.log(aa, bb); // Reference Error: aa, bb is not defined (only accessible in previous block)
}

scopesF2();
