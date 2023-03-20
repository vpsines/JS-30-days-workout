// Using console.log() print out the following statement:
let str = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.'
console.log(str)

// Using console.log() print out the following quote by Mother Teresa:
let str1 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(str1)

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof '10')
console.log(typeof 10)
console.log(typeof +'10')

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8'))
console.log(Math.ceil(parseFloat('9.8')))

// Check if 'on' is found in both python and jargon
let str3 = 'python'
let str4 = 'jargon'

console.log(str3.includes('on'))
console.log(str4.includes('on'))

//I hope this course is not full of jargon. Check if jargon is in the sentence.
let str5 = 'I hope this course is not full of jargon.'
console.log(str5.includes('jargon'))

// Generate a random number between 0 and 100 inclusively.

let random = Math.random()
console.log(random)
let number = random * 101
console.log(number)
console.log(Math.floor(number))

// Generate a random number between 50 and 100 inclusively.

let random2 = Math.random()
console.log(random)
let number2 = random * (100 - 50 + 1)
console.log(number2)
console.log(Math.floor(number2+ 50))

//Generate a random number between 0 and 255 inclusively.
let random3 = Math.random()
console.log(random)
let number3 = random * (255 - 0 + 1)
console.log(number3)
console.log(Math.floor(number3))

// Access the 'JavaScript' string characters using a random number.
let str6 = 'JavaScript'
let random4 = Math.floor(Math.random() * (str6.length - 0 +1))
console.log(str6[random4])

// Use console.log() and escape characters to print the following pattern.

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let str7 = 'You cannot end a sentence with because because because is a conjunction'
let substr = 'because because because'

console.log(str7.substr(str7.indexOf('because'),substr.length))