// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let age = parseInt(prompt('Enter your age:'))
if(age >= 18){
    console.log('You are old enough to drive.')
}else{
    console.log(`You are left with ${18-age} years to drive.`)
}

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let age1 = parseInt(prompt('Enter your age:'))
let myAge = 23
if(age1 > myAge){
    console.log(`You are ${age1-myAge} years older than me.`)
}else{
    console.log(`I am ${myAge-age1} years older than you.`)
}

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
//using if else

let a=5
let b =9

if(a >b){
    console.log('a is greater than b')
}else{
    console.log('a is less than b')
}

//ternary operator.

a > b ? console.log('a is greater than b') : console.log('a is less than b')

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let num =4
if(num%2 == 0){
    console.log('Number is even')
}else{
    console.log('Number is odd')
}
