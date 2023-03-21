// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let breadth = prompt('Enter base:')
let height = prompt('Enter height:')
let area = 0.5 * breadth * height
console.log(`The area of triangle is ${area}`)

//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let a = parseInt(prompt("Enter side a:"))
let b = parseInt(prompt("Enter side b:"))
let c = parseInt(prompt("Enter side c:"))
let perimeter = a + b +c
console.log(`The perimeter of triangle is ${perimeter}`)

//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = parseInt(prompt("Enter length:"))
let width = parseInt(prompt("Enter width:"))
let areaR = length * width
console.log(`The area of rectangle is ${areaR}`)
let perimeterR = 2 *(length + width)
console.log(`The perimeter of rectangle is ${perimeterR}`)

//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = parseInt(prompt("Enter radius:"))
const PI =3.14
let circumference = 2 * PI * radius
let areaC = PI * (radius ** 2)
console.log(`The area of circle is ${areaC}`)
console.log(`The circumference of circle is ${circumference}`)

//Calculate the slope, x-intercept and y-intercept of y = 2x -2
let slope = 2
let y = -2
let x = (0+2)/2

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let slope1 = (10-2)/(6-2)
console.log(slope)

// Compare the slope of above two questions.
console.log(slope > slope1)

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let yValue = 0 ** 2 + 6 * 0 + 9  // yValue = 9 for x =0
let y2 = 0
let xValue = 3

//Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = parseInt(prompt("Enter hours:"))
let rate = parseFloat(prompt("Enter rate per hour:"))
let pay = hours * rate
console.log(pay)

// If the length of your name is greater than 7 say, your name is long else say your name is short.
let name ="Vyshnav"
name.length > 7 ? console.log("Your name is long") : console.log("Your name is short")

// Compare your first name length and your family name length and you should get this output.
let firstName = "Vyshnav"
let familyName = "Non"
if(firstName.length > familyName.length){
    console.log(`Your first name, ${firstName} is longer than your family name, ${familyName}`)
}


//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250
let yourAge = 12
console.log(`I am ${myAge} years older than you.`)

//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

let year = parseInt(prompt("Enter birth year:"))
let age = new Date().getFullYear() - year
if(age > 18){
    console.log(`You are ${age}. You are old enough to drive`)
}else{
    console.log(`You are ${age}. You will be allowed to drive after ${18-age} years.`)
}

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let years = parseInt(prompt("Enter number of years you live:"))
let secondsLived = years * 365 * 24 * 60 *60
console.log(`You lived ${secondsLived} seconds.`)

// Create a human readable time format using the Date time object

//YYYY-MM-DD HH:mm
//DD-MM-YYYY HH:mm
//DD/MM/YYYY HH:mm

let date = new Date()
let year1 = date.getFullYear()
let month = date.getMonth() > 9 ?`${date.getMonth()+1}`:`0${date.getMonth()+1}`
let day = date.getDate() > 9 ?`${date.getDate()}`:`0${date.getDate()}`
let hour = date.getHours() > 9 ?`${date.getHours()}`:`0${date.getHours()}`
let min = date.getMinutes() > 9 ?`${date.getMinutes()}`:`0${date.getMinutes()}`

console.log(`${year1}-${month}-${day} ${hour}:${min}`)
console.log(`${day}-${month}-${year1} ${hour}:${min}`)
console.log(`${day}/${month}/${year1} ${hour}:${min}`)
