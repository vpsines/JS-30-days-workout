// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Vyshnav'
let lastName = 'Sasidharan'
let country = 'India'
let city = 'Madurai'
let age = 30
let isMarried = false
let year = 1999
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof year)
console.log(typeof isMarried)

//Check if type of '10' is equal to 10
console.log(typeof '10' == typeof 10)

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10)

// Write three JavaScript statement which provide truthy value.
let character = 'o'
let value = true
let num = 10

// Write three JavaScript statement which provide falsy value.
let unknown
let valueFalse = 0
let empty = ''

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log("====")
console.log(4 > 3) // true
console.log(4 >= 3) // true
console.log(4 < 3) // false
console.log(4 <= 3) // false
console.log(4 == 4) // true
console.log(4 === 4) // true
console.log(4 != 4) // false
console.log(4 !== 4) // false
console.log(4 != '4') // false
console.log(4 == '4') // true
console.log(4 === '4') // false
console.log('python'.length != 'jargon'.length)

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log('%%%')
console.log(4 > 3 && 10 < 12) // true
console.log(4 > 3 && 10 > 12) // false
console.log(4 > 3 || 10 < 12) // true
console.log(4 > 3 || 10 > 12) // true
console.log(!(4 > 3)) // false
console.log(!(4 < 3)) // true
console.log(!(false)) // true
console.log(!(4 > 3 && 10 < 12)) // false
console.log(!(4 > 3 && 10 > 12)) // true
console.log(!(4 === '4')) // true
console.log(!('dragon'.includes('on') && 'python'.includes('on')))

// Use the Date object to do the following activities
let today =new Date();

// What is the year today?
console.log(today.getFullYear())

//What is the month today as a number?
console.log(today.getMonth())

//What is the date today?
console.log(today.getDate())
//What is the day today as a number?
console.log(Date.now())
//What is the hours now?
console.log(today.getHours())
//What is the minutes now?
console.log(today.getMinutes())

//Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(today.getTime())