// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
// implemented using index.html

// First remove all the punctuations and change the string to array and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.split(" ")
console.log(text.length)

// In the following shopping cart add, remove, edit items

 const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// add 'Meat' in the beginning of your shopping cart if it has not been already added
if(!shoppingCart.includes('Meat')){
    shoppingCart.unshift('Meat')
}
console.log(shoppingCart)

// add Sugar at the end of you shopping cart if it has not been already added
if(!shoppingCart.includes('Sugar')){
    shoppingCart.push('Sugar')
}
console.log(shoppingCart)

// remove 'Honey' if you are allergic to honey
let indexOfHoney = shoppingCart.indexOf('Honey')
shoppingCart.splice(indexOfHoney,1)
console.log(shoppingCart)

// modify Tea to 'Green Tea'
let indexOfTea = shoppingCart.indexOf('Tea')
shoppingCart[indexOfTea] = 'Green Tea'
console.log(shoppingCart)

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
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

  if(countries.includes('Ethiopia')){
    console.log('ETHIOPIA')
  }else{
    countries.push('Ethiopia')
  }

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

if(webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess')
}else{
    webTechs.push('Sass')
    console.log(webTechs)
}

// Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)

 console.log(fullStack)
