// Write a program which tells the number of days in a month.

let month = prompt("Enter month:");
month = month.toLowerCase()
switch (month) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${month} has 31 days`);
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    console.log(`${month} has 30 days`);
    break;
  case "february":
    console.log(`${month} has 28 days`);
    break;
  default:
    console.log("Not a valid month");
    break;
}

// Write a program which tells the number of days in a month, now consider leap year.

let month1 = prompt("Enter month:");
month1 = month1.toLowerCase()
switch (month1) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${month1} has 31 days`);
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    console.log(`${month1} has 30 days`);
    break;
  case "february":
    console.log(`${month1} has 29 days`);
    break;
  default:
    console.log("Not a valid month");
    break;
}