// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

let text="He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
let pattern = /\d+/g
let incomes = text.match(pattern)
let total =0
for(let income of incomes){
    total += parseInt(income)
}
console.log(total)

// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
// points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
// distance = 12

let text2 = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction."
let pattern2 = /[^a-zA-z.]\d/g
let points = text2.match(pattern2)
console.log(points)

for(let i=0; i< points.length;i++){
    points[i] = parseInt(points[i])
}

console.log(points)
points.sort((a,b)=>{
    if(a>b){
        return 1
    }
    if(a < b){
        return -1
    }
    return 0
})
console.log(points)

const farthestDistance = Math.abs(points[points.length-1] - points[0])
console.log(farthestDistance)


// Write a pattern which identify if a string is a valid JavaScript variable
function is_valid_variable(str){
    let pattern = /^[_a-zA-Z$][a-zA-z0-9_]*$/
    return pattern.test(str)
}
console.log(is_valid_variable('first_!name'))
console.log(is_valid_variable('first-name'))
console.log(is_valid_variable('1first_name'))
console.log(is_valid_variable('firstname'))