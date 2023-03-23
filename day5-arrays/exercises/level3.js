// The following is an array of 10 students ages:

 const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
ages.sort()
console.log('max: '+ages[ages.length -1])
console.log('min: '+ages[0])

// Find the median age(one middle item or two middle items divided by two)
let median = 0
if(ages.length % 2 == 0){
    let mid = ages.length/2
    median = (ages[mid] + ages[mid-1]) / 2
}else{
    median = ages[ages.length/2]/2
}

console.log(median)

// Find the average age(all items divided by number of items)
console.log(ages.reduce((total,age) => total +age,0))
let avg = ages.reduce((total,age) => total +age,0)/ages.length
console.log(avg)

// Find the range of the ages(max minus min)
let max = ages[ages.length -1]
let min = ages[0]
console.log(ages[ages.length -1] + '-' + ages[0])

// Compare the value of (min - average) and (max - average), use abs() method 1.
let minAvg = Math.abs(min - avg)
let maxAvg = Math.abs(max - avg)
if(minAvg > maxAvg){
    console.log('minAvg is greater')
}else{
    console.log('maxAvg is greater')
}

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
//Slice the first ten countries from the countries array

console.log(countries.slice(0,10))

// Find the middle country(ies) in the countries array
console.log(Math.floor(5))
let mid = Math.floor(countries.length/2)
if(countries.length % 2 == 0){
    console.log(countries[mid],countries[mid-1])
}else{
    console.log(countries[mid])
}

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

if(countries.length % 2 ==0 ){
    let firstHalf = countries.slice(0,mid)
    console.log(firstHalf)
    let secondHalf = countries.slice(mid,countries.length)
    console.log(secondHalf)
}else{
    let firstHalf = countries.slice(0,mid)
    firstHalf.push('India')
    console.log(firstHalf)
    let secondHalf = countries.slice(mid,countries.length)
    console.log(secondHalf)
}