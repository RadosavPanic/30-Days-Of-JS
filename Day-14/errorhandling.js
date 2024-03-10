try {
  let lastName = "Panic";
  let fullName = firstName + lastName;
} catch (err) {
  console.error(err); // ReferenceError: firstName is not defined
} finally {
  console.log("This is finally block"); // This is finally block, it executes in any case
}

try {
  let lastName = "Panic";
  let fullName = firstName + lastName;
} catch (err) {
  console.error("Name of the error: ", err.name); // Name of the error:  ReferenceError
  console.error("Error message: ", err.message); // Error message:  firstName is not defined
} finally {
  console.log("This is finally block"); // This is finally block, it executes in any case
}

const throwErrFun = () => {
  let x = "";
  try {
    if (x == "") throw new Error("empty input");
    if (isNaN(x)) throw new Error("not a number");
    if (x < 5) throw new Error("too low");
  } catch (error) {
    error.name = "Custom Error";
    console.error(error);
  }
};

throwErrFun(); // Custom Error: empty input

/* Error types: ReferenceError, SyntaxError, TypeError */

try {
  console.log(secondName); // ReferenceError: secondName is not defined
} catch (err) {
  console.error(err);
}

try {
  let num = 10;
  console.log(num.toLowerCase()); // TypeError: num.toLowerCase is not a function
} catch (err) {
  console.error(err);
}

// let square = 2 x 2; // Uncaught SyntaxError: Unexpected identifier 'x'
