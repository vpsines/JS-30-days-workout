// Iterate 0 to 10 using for loop, do the same using while and do while loop

//for loop
console.log('using for loop')
for(let i=0; i<=10; i++){
    console.log(i+" ")
}

// while loop
console.log('using while loop')
let i=0
while(i<=10){
    console.log(i)
    i++
}

// using do while
console.log('using do while loop')
i=0
do{
    console.log(i)
    i++
}while(i<=10)


// Iterate 10 to 0 using for loop, do the same using while and do while loop

//using for loop
console.log('using for loop')
for(let j=10;j>=0;j--){
    console.log(j)
}

//using while loop
console.log('using while loop')
let j=10
while(j >= 0){
    console.log(j--)
}

//using do while loop
console.log('using do while loop')
j=10
do{
    console.log(j--)
}while(j >= 0)

//Iterate 0 to n using for loop

let n =5
for(i=0;i<=n;i++){
    console.log(i)
}

// Write a loop that makes the following pattern using console.log():

// #
// ##
// ###
// ####
// #####
// ######
// #######

for(i=1; i<=7;i++){
    console.log('#'.repeat(i))
}

// Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for(i=0; i<= 10; i++){
    console.log(`${i} x ${i} = ${i*i}`)
}

// Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

console.log('i i^2 i^3')
for(i=0; i<=10; i++){
    console.log(`${i} ${i ** 2} ${i ** 3}`)
}

//Use for loop to iterate from 0 to 100 and print only even numbers
for(i=0; i<= 100; i++){
    if(i % 2==0){
        console.log(i)
    }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
i=0
while(i<=100){
    if(i%2 == 1){
        console.log(i)
    }
    i++
}

// Use for loop to iterate from 0 to 100 and print only prime numbers
i=1
let isPrime = true
while(i<=100){
    isPrime = true
    for(j=2; j<i;j++){
        if(i%j == 0){
            isPrime = false
            break
        }
    }
    if(isPrime){
        console.log(i)
    }
    i++
}

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0
for(let i =0; i<= 100; i++){
    sum += i
}
console.log('The sum of all numbers from o to 100 is '+sum)

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let oddSum =0
let evenSum =0
for(let i = 0; i<=100;i++){
    if(i %2 == 0){
        evenSum+= i
    }else{
        oddSum += i
    }
}
console.log("The sum of all evens from 0 to 100 is "+evenSum+". And the sum of all odds from 0 to 100 is "+oddSum+".")

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
sum = [0,0]
for(let i = 0; i<=100;i++){
    if(i %2 == 0){
        sum[0]+= i
    }else{
        sum[1] += i
    }
}
console.log(sum)

// Develop a small script which generate array of 5 random numbers

for(i=0; i<5;i++){
let random = Math.random()
let number = Math.floor(random * 11)
console.log(number)
}

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
const arr = []
while(arr.length <5){
    let r = Math.floor(Math.random() * 11)
    if(!arr.includes(r)){
        arr.push(r)
    }
}
console.log(arr)

// Develop a small script which generate a six characters random id:
let arr1 = []
while(arr1.length <6){
    let r = 65+ Math.floor(Math.random() * 26)
    let char = String.fromCharCode(r)
    arr1.push(char)
}
console.log(arr1.join(""))