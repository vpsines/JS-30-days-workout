//create heading
const heading = document.createElement('h1')
heading.textContent = 'Number Generator'
heading.style.textAlign = 'center'
heading.style.fontWeight = 'bold'
heading.style.color = 'green'
document.body.appendChild(heading)

//create subheading element
const subHeading = document.createElement('h4')
subHeading.textContent = '30DaysOfJavaScript:DOM Day 3'
subHeading.style.textAlign = 'center'
subHeading.style.fontWeight = 'normal'
subHeading.style.fontSize='18px'
subHeading.style.margin = '0'
document.body.appendChild(subHeading)

// create author
const author = document.createElement('h4')
author.textContent = 'Author : Vyshnav Sasihdaran'
author.style.textAlign = 'center'
author.style.fontWeight = 'normal'
author.style.fontSize='18px'
author.style.margin = '0'
document.body.appendChild(author)

// define error message
const message = document.createElement('p')
message.style.margin = '10px auto'
message.style.width = '50%'
message.style.color='red'
document.body.appendChild(message)

const inputDiv = document.createElement('div')
inputDiv.style.margin = '10px auto'
inputDiv.style.width = '50%'

// input field element
const inputField = document.createElement('input')
inputField.type = 'text'
inputField.style.width = '55%' 
inputField.style.height = '35px' 
inputField.placeholder = 'Generate more numbers'
inputDiv.appendChild(inputField)

// button to generate numbers
const button = document.createElement('button')
button.textContent = 'Generate numbers'
button.style.width = '30%' 
button.style.height = '35px' 
button.style.marginLeft = '20px'
button.style.color = 'white'
button.style.fontSize = '16px'
button.style.background = 'green'
inputDiv.appendChild(button)

document.body.appendChild(inputDiv)

// funtion to check if a no is prime or not
const isPrime = function checkPrime(n){
    if(n < 2){
        return false
    }
    for(let i =2; i<n; i++){
        if(n % i == 0){
            return false
        }
    }
    return true
}


const numbersDiv = document.createElement('div')
numbersDiv.style.width = '60%'
numbersDiv.style.margin = 'auto'
numbersDiv.style.padding = '0'

// add click event listener
button.addEventListener('click', function (e){

    // set initial values
    numbersDiv.innerHTML = ''
    message.textContent = ''
    let isValidNumber = true

    const input = inputField.value
    // check if valid no or not
    for(let i=0; i<input.length;i++){
        let code = input.charCodeAt(i)
        if(!(code > 47 && code <58)){
            isValidNumber = false
        }
    }
    
    // check if input is empty
    if(input.length >0){
        if(!isValidNumber){
            message.textContent = 'Input value must be a number'
        }else{
            // create number element and assign respective color for each
            for(let i = 0;i<=inputField.value;i++){
                const number = document.createElement('div')
                number.style.height = '30px'
                number.style.width = '50px'
                number.textContent = i
                number.style.margin = '2px'
                number.style.textAlign = 'center'
                number.style.display = 'inline-block'
                number.style.color = 'white'
                number.style.fontSize = '28px'
                number.style.fontWeight = 'bold'
                if(isPrime(i)){
                    number.style.background = 'red'
                }else if(i % 2 == 0){
                    number.style.background = 'green'
                }else{
                    number.style.background = 'yellow'
                }
                numbersDiv.appendChild(number)
            }
        }
    }else{
        message.textContent = 'Enter number value on input field to generate numbers'
    }
})

document.body.appendChild(numbersDiv)
