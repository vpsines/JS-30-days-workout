/*Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/

let scores = parseInt(prompt("Enter scores:"));

if (scores > 80) {
  console.log("A");
} else if (scores >= 70 && scores <= 89) {
  console.log("B");
} else if (scores >= 60 && scores <= 69) {
  console.log("C");
} else if (scores >= 50 && scores <= 59) {
  console.log("D");
} else {
  console.log("F");
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//September, October or November, the season is Autumn.
//December, January or February, the season is Winter.
//March, April or May, the season is Spring

let month = prompt("Enter month:");
month = month.toLowerCase();

if (month == "september" || month == "october" || month == "november") {
  console.log("Autmn");
} else if (month == "december" || month == "january" || month == "february") {
  console.log("Winter");
} else if (month == "march" || month == "april" || month == "may") {
  console.log("Spring");
} else {
  console.log("Not a valid month");
}

// Check if a day is weekend day or a working day. Your script will take day as an input.

let day = prompt("Enter day:");
day = day.toLowerCase();
if (
  day == "monday" ||
  day == "tuesday" ||
  day == "wednesday" ||
  day == "thursday" ||
  day == "friday"
) {
  console.log(`${day} is a working day`);
} else if (day == "saturday" || day == "sunday") {
  console.log(`${day} is a weekend`);
} else {
  console.log("Not a valid day");
}
