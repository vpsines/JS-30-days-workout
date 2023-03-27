const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Explain the difference between forEach, map, filter, and reduce.
// forEach : takes a callback, used for iteration
// map : takes a callback, returns a modified array
// filter : filter outs elements meeting the condition and returns a new array
// reduce : takes in accumulator,current and inital value, returns single value

// Define a callback function before you use it in forEach, map, filter or reduce.
let sum= 0

function findSum(val) {
 return sum += val
}

numbers.forEach(findSum)
console.log(sum)

let newSum = numbers.map(findSum)
console.log(newSum)

function filterCondition(num){
    return num %2==0
} 
console.log(numbers.filter(filterCondition))

function calculateSum(sum,val){
    return sum + val
}
console.log(numbers.reduce(calculateSum,0))

// Use forEach to console.log each country in the countries array.
countries.forEach((country) => console.log(country))

// Use forEach to console.log each name in the names array.
names.forEach((val)=>console.log(val))

// Use forEach to console.log each number in the numbers array.
numbers.forEach((number)=>console.log(number))

// Use map to create a new array by changing each country to uppercase in the countries array.
let newCountries = countries.map((country)=> country.toUpperCase())
console.log(newCountries)

// Use map to create an array of countries length from countries array.
let lengthOfCountries = countries.map((country) => country.length)
console.log(lengthOfCountries)

// Use map to create a new array by changing each number to square in the numbers array
let squares = numbers.map((number)=>number**2)
console.log(squares)

// Use map to change to each name to uppercase in the names array
let newNames = names.map((val)=> val.toUpperCase())
console.log(newNames)

// Use map to map the products array to its corresponding prices.
let prices = products.map((product) => product.price)
console.log(prices)

// Use filter to filter out countries containing land.
let countriesWithLand = countries.filter((country)=>country.includes('land'))
console.log(countriesWithLand)

// Use filter to filter out countries having six character.
let countriesWith6Char = countries.filter((country) => country.length ==6)
console.log(countriesWith6Char)

// Use filter to filter out countries containing six letters and more in the country array.
let countriesWith6orMoreChar = countries.filter((country) => country.length >=6)
console.log(countriesWith6orMoreChar)

// Use filter to filter out country start with 'E';
let countriesWithE = countries.filter((country)=>country.charAt(0)==='E')
console.log(countriesWithE)

// Use filter to filter out only prices with values.
let priceWithValues = products.filter((product)=> typeof product.price == 'number')
console.log(priceWithValues)

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr){
    return arr.filter((val) => typeof val == 'string')
}
console.log(getStringLists(names))

// Use reduce to sum all the numbers in the numbers array.
console.log(numbers.reduce((sum,val)=> sum+val,0))

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
let result = countries.reduce((newStr,str)=>{
    if(countries.indexOf(str)==countries.length-1){
        return newStr.concat(`and ${str} are north European countries.`)
    }else{
        return newStr.concat(`${str}, `)
    }
},'')
console.log(result)

// Explain the difference between some and every

// some returns true if some of the elements satisfy the condition
// every returns true only if every elements satisfy the condition

// Use some to check if some names' length greater than seven in names array
console.log(names.some((val)=> val.length>7))

// Use every to check if all the countries contain the word land
console.log(countries.every((country)=> country.includes('land')))

// Explain the difference between find and findIndex.

// find returns the first element of the array that satisfies the condition
// findIndex returns the index of the element that satisfies the condition

// Use find to find the first country containing only six letters in the countries array
console.log(countries.find((country)=> country.length == 6))

// Use findIndex to find the position of the first country containing only six letters in the countries array
console.log(countries.findIndex((country)=>country.length ==6))

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
console.log(countries.findIndex((country)=> country === 'Norway'))

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
console.log(countries.findIndex((country)=> country === 'Russia'))