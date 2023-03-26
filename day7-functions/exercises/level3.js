// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '

// const userIdGeneratedByUser = ()=>{
//     let noOfCharacters = prompt('Enter no of characters:')
//     let noOfIds = prompt('Enter no of ids:')

//     for(let j=0;j<noOfIds;j++){
//         let userId = ''
//         while(userId.length < noOfCharacters){
//             let random = 48 + Math.floor(Math.random() * 75)
//             if(random < 58 || random > 64 && random < 91 || random > 97 ){
//                 userId = userId.concat(String.fromCharCode(random))
//             }
//         }
//         console.log(userId)
//     }
// }
// userIdGeneratedByUser()

// Write a function name rgbColorGenerator and it generates rgb colors.

// rgbColorGenerator()
// rgb(125,244,255)

const rgbColorGenerator =()=>{
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    console.log(`rgb(${r},${g},${b})`)
}
rgbColorGenerator()

// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(n){
    let colors = []
    for(let i =0; i<n; i++){
        let hexaColor = '#'
        for(let j=0; j<6; j++){
            let random = Math.floor(Math.random() * 16)
            let c = random > 9 ? String.fromCharCode(97 + (random%10)): random
            hexaColor = hexaColor.concat(c)
        }
        colors.push(hexaColor)
    }
    return colors
}
console.log(arrayOfHexaColors(3))

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(n){
    let rgbColors = []
    for(let i=0; i<n; i++){
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        rgbColors.push(`rgb(${r},${g},${b})`)
    }
    return rgbColors
}
console.log(arrayOfRgbColors(5))

// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hexColor){
    let rgb = []
    for(let i=1; i<hexColor.length -1 ;i=i+2){
        let f = hexColor[i].charCodeAt()
        let s = hexColor[i+1].charCodeAt()
        f= (f > 47 && f<58) ? f % 48 : 10 +f%97
        s = (s > 47 && s<58) ? s % 48 : 10+s%97

        rgb.push(f * 16 + s )
    }
    console.log(`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`)
}
convertHexaToRgb('#a3e12f')

// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

function getHex(value){
    let h = value.toString(16)
    return h.length === 1 ? `0${h}`:h
}

function convertRgbToHexa(r,g,b){
    return `#${getHex(r)}${getHex(g)}${getHex(b)}`
}
console.log(convertRgbToHexa(5, 55, 175))

// Write a function generateColors which can generate any number of hexa or rgb colors.

// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
function generateColors(type,n){
    if(type == 'hexa'){
        return arrayOfHexaColors(n)
    }else if(type == 'rgb'){
        return arrayOfRgbColors(n)
    }else{
        console.log('Not a valid type')
    }
}
console.log(generateColors('rgb', 3))

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(arr){
    for(let i = 0; i<arr.length; i++){
        let random = Math.floor(Math.random() * arr.length)
        let temp = arr[i]
        arr[i] = arr[random]
        arr[random] = temp
    }
    console.log(arr)
}
shuffleArray([1,2,3,4,5])

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(n){
    let res = 1
    while(n >= 1){
        res = res * n
        n =n- 1
    }
    return res
}
console.log(factorial(4))

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(a){
    if(a.length == 0){
        console.log('It is empty')
    }else{
        console.log('It is not empty')
    }
}
isEmpty('AS')

// Call your function sum, it takes any number of arguments and it returns the sum.
function sum(...args){
    let sum =0
    for(let i of args){
        sum += i
    }
    return sum
}
console.log(sum(2,3,4))

// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(arr){
    let sum =0 
    for(let i of arr){
        if(typeof i == 'number'){
            sum += i
        }else{
            console.log('All elements are not int')
            return
        }
    }
   return sum
}
let a = [1,2,3]
console.log(sumOfArrayItems('a'))

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(arr){
    let sum =0 
    for(let i of arr){
        if(typeof i == 'number'){
            sum += i
        }else{
            console.log('All elements are not int')
            return
        }
    }
   return sum/arr.length
}
let b = [1,2,3]
console.log(average(b))

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'

function modifyArray(arr){
    if(arr.length < 5){
        console.log('Not found')
    }else{
        arr[4] = arr[4].toUpperCase()
        console.log(arr)
    }
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))

// Write a function called isPrime, which checks if a number is prime number.
function isPrime(n){
    for(let i=2; i<n;i++){
        if(n % i == 0){
            console.log('Not prime')
            return false
        }
    }
    console.log('No is prime')
    return true
}
isPrime(13)

// Write a functions which checks if all items are unique in the array.
function checkUnique(arr){
    let arr1 =[]
    for(let i of arr){
        if(arr1.includes(i)){
            console.log('not unique')
            return false
        }else{
            arr1.push(i)
        }
    }
    console.log('unique')
    return true
}

checkUnique([1,1,2,3,4,4])

// Write a function which checks if all the items of the array are the same data type.
function checkSameDataType(arr){
    let datatype = typeof arr[0]
    for(let i of arr){
        if(typeof i != datatype){
            console.log('not same data type')
            return false
        }
    }
    console.log('same datatypes')
    return true
}
checkSameDataType([true,2,3,4,'5',6])

// JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable(variableName){
    if(typeof variableName !== 'string'){
        return false
    }

    let f = variableName[0]

    if(!((f >= 'a' && f <= 'z') || (f>='A' && f<='Z') || f == '_')){
        return false
    }
    
    for(let i=1; i<variableName.length; i++){
        if(!((variableName[i] >= 'a' && variableName[i] <= 'z') || (variableName[i]>='A' && variableName[i]<='Z') || variableName[i] == '_' || variableName[i]=='$' || (variableName[i]>'0' && variableName<'9'))){
            return false
        }
    }

    return true
}
console.log(isValidVariable("h/i"))

// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]
function generate7Numbers(){
    let arr =[]
    while(arr.length != 7){
        let random = Math.floor(Math.random() * 10)
        if(!arr.includes(random)){
            arr.push(random)
        }
    }
    console.log(arr)
}
generate7Numbers()

// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
function reverseCountries(countries){
    let arr = []
    arr = arr.concat(countries)
    arr.reverse()
    return arr
}
let c = ['France','India','Australia']
console.log(reverseCountries(c))
console.log(c)