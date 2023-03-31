// Check the speed difference among the following loops: while, for, for of, forEach
let  arr1 = [1,2,3,4,5]

console.time('While loop')
let i=0
while(i<arr1.length){
    console.log(i)
    i++
}
console.timeEnd('While loop')

console.time('For loop')
for(let i=0; i<arr1.length; i++){
    console.log(i)
}
console.timeEnd('For loop')

console.time('For of loop')
for(let i of arr1){
    console.log(i)
}
console.timeEnd('For of loop')


console.time('For each')
arr1.forEach((e) => console.log(e))
console.timeEnd('For each')
