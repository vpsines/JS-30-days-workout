// Create an empty object called dog
let dog = {}

// Print the the dog object on the console
console.log(dog)
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Ruby'
dog.legs = 4
dog.color = 'black'
dog.age =2
dog.bark = function(){
    return 'woof woof'
}

console.log(dog.bark())

// Get name, legs, color, age and bark value from the dog object
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark)

// Set new properties the dog object: breed, getDogInfo
dog.breed = 'Pomerian'
dog.getDogInfo = function (){
    console.log(`${this.name} is a ${this.age} year old ${this.breed} ${this.color} dog. By the way, he has ${this.age} legs`)
}

console.log(dog)
dog.getDogInfo()