// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
    firstName:"Praveen",
    lastName:"P",
    age:21,
    skills:["Excel","Word"],
    country:"India",
    enrolled:true
}

console.log(localStorage)

localStorage.setItem('student',JSON.stringify(student,undefined,4))

console.log(localStorage)