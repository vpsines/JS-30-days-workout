// examples

// 1 try catch block
try {
  let lastName = "Yetayeh";
  let fullName = fistName + " " + lastName;
} catch (err) {
  console.log(err);
}

// 2  try-catch -finally block

try {
  let lastName = "Fred";
  let name = firstName + " " + lastName;
} catch (err) {
  console.log(err);
} finally {
  console.log("Anyways i will be executed");
}

// 3 - name and message keys
try {
  let num = 0;
  let sum = num + anotherNum;
} catch (err) {
  console.log("name:", err.name);
  console.log("message:", err.message);
} finally {
  console.log("Finally executed");
}

// 4 throw statement
const throwErrorExampleFun = () => {
  let message;
  let x = prompt("Enter a number: ");
  try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (err) {
    console.log(err);
  }
};
throwErrorExampleFun();

// TYPES OF ERROR

// 5 reference error

try {
  let lastName = "Asabeneh";
  let fullName = firstName + " " + lastName;
  console.log(fullName);
} catch (err) {
  console.log(err.name);
}

// 6 - syntax error
// let square = 2 x 2
// console.log(square)
// console.log('Hello, world")

// 7 - type error

try {
  let num = 10;
  console.log(num.toLowerCase());
} catch (error) {
  console.log(error.name);
}
