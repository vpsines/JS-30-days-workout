//Declare an empty array;
let arr = Array()

//Declare an array with more than 5 number of elements
arr = ['a','b','c','d','e','f','g']

// Find the length of your array
console.log(arr.length)

// Get the first item, the middle item and the last item of the array
let first = 0
let last = arr.length -1
let mid = (last - first)/2 

console.log(arr[first],arr[last],arr[mid])

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = [1,'2','three',4.0,5.6,false]
console.log(mixedDataTypes.length)

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']

// Print the array using console.log()
console.log(itCompanies)

// Print the number of companies in the array
console.log(itCompanies.length)

//Print the first company, middle and last company
let f = 0
let l = itCompanies.length -1
let m = (l - f)/2 

console.log(itCompanies[f],itCompanies[l],itCompanies[m])

// Print out each company
console.log(itCompanies[0],itCompanies[1],itCompanies[2],itCompanies[3],itCompanies[4],itCompanies[5],itCompanies[6])

// Change each company name to uppercase one by one and print them out
itCompanies[0]=itCompanies[0].toUpperCase()
itCompanies[1]=itCompanies[1].toUpperCase()
itCompanies[2]=itCompanies[2].toUpperCase()
itCompanies[3]=itCompanies[3].toUpperCase()
itCompanies[4]=itCompanies[4].toUpperCase()
itCompanies[5]=itCompanies[5].toUpperCase()
itCompanies[6]=itCompanies[6].toUpperCase()
console.log(itCompanies[0],itCompanies[1],itCompanies[2],itCompanies[3],itCompanies[4],itCompanies[5],itCompanies[6])

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

let str = `${itCompanies.slice(0,itCompanies.length -1).join(', ')} and ${itCompanies[itCompanies.length-1]} are big IT companies.`
console.log(str)

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let isNetflixPresent = itCompanies.includes('Netflix')
isNetflixPresent ? console.log('Netflix') : console.log('Company is not found')

// Filter out companies which have more than one 'o' without the filter method
// TODO

//Sort the array using sort() method
console.log(itCompanies.sort())

// Reverse the array using reverse() method
console.log(itCompanies.reverse())

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3))

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 3,itCompanies.length))

// Slice out the middle IT company or companies from the array
if(itCompanies.length % 2 == 0){
    console.log(itCompanies.slice(m-1,m+1))
}else{
    console.log(itCompanies.slice(m,m+1))
}

// Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies)

// Remove the middle IT company or companies from the array
if(itCompanies.length % 2 == 0){
    console.log(itCompanies.splice(m-1,2))
}else{
    console.log(itCompanies.splice(m,1))
}
console.log(itCompanies)

//Remove the last IT company from the array
itCompanies.pop()
console.log(itCompanies)

//Remove all IT companies
itCompanies.splice(0,itCompanies.length)
console.log(itCompanies)