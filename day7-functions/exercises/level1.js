// Declare a function fullName and it print out your full name.

function printFullName() {
  console.log("Vyshnav Sasidharan");
}
printFullName();

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
  console.log(firstName + " " + lastName);
}

fullName("Erwin", "Smith");

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1, num2) {
  return num1 + num2;
}

console.log(addNumbers(1, 2));

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function calculatRectangleArea(length, width) {
  console.log(length * width);
}

calculatRectangleArea(9, 10);

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function calculatePerimeterOfRectangle(length, width) {
  console.log(2 * (length + width));
}
calculatePerimeterOfRectangle(2, 3);

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function calculateVolumeOfPrism(length, width, height) {
  console.log(length * width * height);
}
calculateVolumeOfPrism(1, 2, 3);

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius) {
  console.log(Math.PI * radius ** 2);
}
areaOfCircle(2);

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function calculateCircuference(radius) {
  console.log(2 * Math.PI * radius);
}
calculateCircuference(4);

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function calculateDensity(mass, volume) {
  console.log(mass / volume);
}
calculateDensity(10, 5);

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function calculateSpeed(distance, time) {
  console.log(distance / time);
}
calculateSpeed(10, 2);

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function calculateWeight(mass, gravity) {
  console.log(mass * gravity);
}
calculateWeight(10, 9);

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(temperatureInC) {
  console.log((temperatureInC * 9) / 5 + 32);
}
convertCelsiusToFahrenheit(5);

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function calculateBmi(weight, height) {
  let bmi = weight / height ** 2;
  console.log("bmi :" + bmi);
  if (bmi < 18.5) {
    console.log("Condition : Underweight");
  } else if (bmi >= 18.5 && bmi < 25) {
    console.log("Condition : Normal weight");
  } else if (bmi >= 25 && bmi < 30) {
    console.log("Condition : Overweight");
  } else {
    console.log("Condition : Obese");
  }
}
calculateBmi(60, 120);

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
  switch (month) {
    case "January":
    case "February":
    case "March":
      console.log("Autmn");
      break;
    case "April":
    case "May":
    case "June":
    case "July":
      console.log("Autmn");
      break;
    case "August":
    case "September":
      console.log("Summer");
      break;
    case "October":
    case "November":
    case "December":
      console.log("Winter");
      break;
    default:
      console.log("Invalid");
  }
}
checkSeason("November");

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > c) {
    return b;
  } else {
    return c;
  }
}
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));
