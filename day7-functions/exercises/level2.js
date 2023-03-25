// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(){
    // TODO
}

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}
function solveQuadEquation(a=0,b=0,c=0){
    let d = Math.sqrt(b **2 - (4 * a * c))
    let x1 = (-(b) + d) / (2 * a)
    let x2 = (-(b) - d) / (2 * a)
    console.log(x1,x2)
}
solveQuadEquation()

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
const printArray= (arr) =>{
    for(let a of arr){
        console.log(a)
    }
}

printArray(['a','b'])

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime(){
    let today = new Date()
    let date = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`
    console.log(date)
}
showDateTime()

// Declare a function name swapValues. This function swaps value of x to y.
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

function swapValues(a,b){
    [a,b] = [b,a] 
    console.log(a,b)   
}

let c =6,d=7
swapValues(c,d)

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']

const reverseArray = (arr)=>{
    arr.reverse()
    return arr
}
console.log(reverseArray(['A', 'B', 'C']))

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
const capitalizeArray = (arr) => {
    const newArr = []
    for(let i = 0; i<arr.length; i++){
        newArr.push(arr[i].toUpperCase())
    }
    return newArr
}

console.log(capitalizeArray(['a','b','c']))

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
const addItem = (arr,item)=>{
    arr.push(item)
    return arr
}

console.log(addItem([],'a'))

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
const removeItem = (arr,index) => {
if(index == 0){
    return arr.slice(1,arr.length)
}

    let newArr = index == arr.length -1 ? arr.slice(0,index) : arr.slice(0,index).concat(arr.slice(index+1,arr.length))
    return newArr
}

console.log(removeItem([1,2,3,4],3))

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
const sumOfNumbers=(number) => {
    let sum =0
    for(let i=1; i <=number; i++){
        sum += i
    }
    return sum
}
console.log(sumOfNumbers(4))

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
const sumOfOdds=(number) => {
    let sum =0
    for(let i=1; i <=number; i++){
        if(i %2 ==0 ){
            sum += i
        }
    }
    return sum
}
console.log(sumOfOdds(4))

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
const sumOfEven=(number) => {
    let sum =0
    for(let i=1; i <=number; i++){
        if(i %2 != 0 ){
            sum += i
        }
    }
    return sum
}
console.log(sumOfEven(4))

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
const evensAndOdds = (n)=>{
    let evenCount =0;
    let oddCount = 0;

    for(let i=0; i<=n; i++){
        if(i % 2 == 0){
            evenCount++
        }else{
            oddCount++
        }
    }

    console.log(`The number of odds are ${oddCount}`)
    console.log(`The number of evens are ${evenCount}`)
}

evensAndOdds(100)

// Write a function which takes any number of arguments and return the sum of the arguments

// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
function sum(...args){
    let s = 0
    for(let i of args){
        s += i
    }
    return s
}
console.log(sum(1,2,3,4,5))

// Writ a function which generates a randomUserIp.
function genrateRandomIp(){
    let ip = ''
    for(let i=0; i<4; i++){
        let random = Math.floor(Math.random() * 256)
        if(i==3){
            ip =ip.concat(random)
        }else{
            ip = ip.concat(`${random}.`)
        }
    }
    console.log(ip)
}
genrateRandomIp()

// Write a function which generates a randomMacAddress
function genrateRandomMac(){
    let macAddress = ''
    for(let i=0; i<12; i++){
        let random = Math.floor(Math.random() * 16)
        let c = random > 9 ?  String.fromCharCode(98+ random % 10) : random
        if(i%2 == 0 || i ==11){
            macAddress = macAddress.concat(c)
        }else{
            macAddress = macAddress.concat(`${c}:`)
        }
    }
    console.log(macAddress)
}
genrateRandomMac()

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
const randomHexaNumberGenerator =()=>{
    let num = '#'
    for(let i=0; i<6; i++){
        let random = Math.floor(Math.random() * 16)
        let c = random > 9 ? String.fromCharCode(97+(random % 10)) : random
        num = num.concat(c)
    }
    return num
}
console.log(randomHexaNumberGenerator())

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
// console.log(userIdGenerator());
// 41XTDbE

const userIdGenerator = ()=>{
    let userId = ''
    while(userId.length < 8){
        let random = 48 + Math.floor(Math.random() * 75)
        if(random < 58 || random > 64 && random < 91 || random > 97 ){
            userId = userId.concat(String.fromCharCode(random))
        }
    }
    return userId
}

console.log(userIdGenerator())