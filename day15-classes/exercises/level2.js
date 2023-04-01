// Override the method you create in Animal class

class Giraffe extends Animal{
    constructor(name,age,color,legs,height){
        super(name,age,color,legs)
        this.height = height
    }

    getInfo(){
        console.log(`${this.height} feet Giraffe`)
    }
}


const giraffe = new Giraffe('Giraffe',11,'orange',4,440)
giraffe.getInfo()