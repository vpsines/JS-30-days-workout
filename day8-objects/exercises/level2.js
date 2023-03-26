const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

// Find the person who has many skills in the users object.
let keys = Object.keys(users)

console.log(keys)
let userWithMoreSkills = keys[0]
for(let key of keys){
    if(users[userWithMoreSkills].skills.length < users[key].skills.length){
        userWithMoreSkills = key
    }
}
console.log(userWithMoreSkills)

// Count logged in users, count users having greater than equal to 50 points from the following object.
let loggedInUsers = 0
let usersWith50MorePoints = 0

for(let key of keys){
    if(users[key].isLoggedIn){
        loggedInUsers +=1
    }
    if(users[key].points >= 50){
        usersWith50MorePoints += 1
    }
}
console.log(loggedInUsers)
console.log(usersWith50MorePoints)

// Find people who are MERN stack developer from the users object

let mernStackDevs = 0
for(let key of keys){
    if(users[key].skills.includes('MongoDB') && users[key].skills.includes('Node') && users[key].skills.includes('Express') && users[key].skills.includes('React') ){
        mernStackDevs += 1
    }
}
console.log(mernStackDevs)

// Set your name in the users object without modifying the original users object
users['Vyshnav'] = {}
console.log(users['Vyshnav'])

// Get all keys or properties of users object
console.log(Object.keys(users))

// Get all the values of users object
console.log(Object.values(users))

// Use the countries object to print a country name, capital, populations and languages.
const countries = {
    'India': {
        name:'India',
        languages:['Hindi','Malayalam'],
        capital:'New Delhi',
        populations:40
    },
    'UK': {
        name:'England',
        languages:['English',],
        capital:'London',
        populations:10
    }
}

console.log(countries['India'].name)
console.log(countries['India'].languages)
console.log(countries['India'].capital)
console.log(countries['India'].populations)