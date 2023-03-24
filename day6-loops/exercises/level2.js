// Develop a small script which generate any number of characters random id 122 -48

let n = Math.floor(Math.random() * 15)
const arr = [] // 48 57
for(let i = 0; i<n;i++){
    let r = 48 + Math.floor(Math.random() * 74)
    while(true){
        if(r >= 48 && r <= 122 && (r <=57 || r >= 98)){
            break
        }
        r = 48 + Math.floor(Math.random() * 74)
    }
    let char = String.fromCharCode(r)
    arr.push(char)
}
console.log(arr.join(""))

// Write a script which generates a random hexadecimal number.

let str = '#'
for(let i=0;i<6;i++){
    let r = Math.floor(Math.random() * 16)
    if(r > 9){
        r = 98 + r % 10;
    }
    str = str.concat(r>9?String.fromCharCode(r):r)
}
console.log(str)

// Write a script which generates a random rgb color number.

let r = Math.floor(Math.random() * 256)
let g = Math.floor(Math.random() * 256)
let b = Math.floor(Math.random() * 256)

console.log(`rgb(${r},${g},${b})`)

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
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// Using the above countries array, create the following new array.
//["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

let newCountries = []
for(let i=0; i<countries.length;i++){
    newCountries.push(countries[i].toUpperCase())
}
console.log(newCountries)

// Using the above countries array, create an array for countries length'.

let countriesLengths = []

for(let i=0;i<countries.length; i++){
    countriesLengths.push(countries[i].length)
}
console.log(countriesLengths)

// Use the countries array to create the following array of arrays:
// [
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Iceland', 'ICE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5]
//   ]

let result = []
for(let i=0; i< countries.length; i++){
    result.push([countries[i],countries[i].toUpperCase().slice(0,3),countries[i].length])
}
console.log(result[0])

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let countriesWithLand = []
for(let i =0; i< countries.length; i++){
    if(countries[i].includes("land")){
        countriesWithLand.push(countries[i])
    }
}

if(countriesWithLand.length > 0){
    console.log(countriesWithLand)
}else{
    console.log('All these countries are without land')
}

//In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

let countriesEndingWithIa = []
for(let i=0; i< countries.length; i++){
    if(countries[i].endsWith('ia')){
        countriesEndingWithIa.push(countries[i])
    }
}

if(countriesEndingWithIa.length > 0){
    console.log(countriesEndingWithIa)
}else{
    console.log('These are countries ends without ia')
}

// Using the above countries array, find the country containing the biggest number of characters.

let ans = countries[0]
for(let country of countries){
    if(ans.length < country.length){
        ans = country
    }
}
console.log(ans)

// Using the above countries array, find the country containing only 5 characters.

const countriesWith5Char = Array()
for(const country of countries){
    if(country.length == 5){
        countriesWith5Char.push(country)
    }
}
console.log(countriesWith5Char)

// Find the longest word in the webTechs array

let longestWord = webTechs[0]
for(const webTech of webTechs){
    if(longestWord.length <  webTech.length){
        longestWord = webTech
    }
}
console.log(longestWord)

// Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

let resultA = []
for(let webTech of webTechs){
    resultA.push([webTech,webTech.length])
}

console.log(resultA[0])

// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

let word = ''
for(const stack of mernStack){
    word = word.concat(stack[0].toUpperCase())
}
console.log(word)

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

let stacks =  ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for(const stack of stacks){
    console.log(stack)
}

//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruits = ['banana', 'orange', 'mango', 'lemon']
for(let i =fruits.length-1; i>=0;i--){
    console.log(fruits[i])
}

// Print all the elements of array as shown below.

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

  for(const stackList of fullStack){
    for(const stack of stackList){
        console.log(stack.toUpperCase())
    }
  }