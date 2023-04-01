// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal{
    constructor(name,age,color,legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }

    getInfo(){
        return `${this.name} is a ${this.color} in colo, ${this.age} years old with ${this.legs}`;
    }
}

const animal1 = new Animal('Dog',4,'brown',4);
console.log(animal1)
console.log(animal1.getInfo())

// Create a Dog and Cat child class from the Animal Class.

class Dog extends Animal{
    constructor (name='Dog',age,color,legs,breed){
        super(name,age,color,legs)
        this.breed = breed
    }

    get getBreed(){
        return this.breed
    }
}

const dash = new Dog('Dog',3,'black',4,'Dash')
console.log(dash.getBreed)

class Cat extends Animal{
    constructor(name,age,color,legs,eyeColor){
        super(name,age,color,legs)
        this.eyeColor = eyeColor
    }

    getEyeColor(){
        return `${this.eyeColor} colored cat`;
    }
}

const persian = new Cat('Cat',4,'persian',4,'blue')
console.log(persian.getEyeColor())