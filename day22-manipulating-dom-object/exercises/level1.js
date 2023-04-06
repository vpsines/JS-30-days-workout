// Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
// Even numbers background is green
// Odd numbers background is yellow
// Prime numbers background is red

const isPrime = function checkPrime(n){
    for(let i=2;i<n;i++){
        if(n%i == 0){
            return false
        }
    }
    return true
}

let headLine = document.createElement('h2')
headLine.textContent = 'Number generator'
headLine.style.textAlign = 'center'
document.body.appendChild(headLine)

let div = document.createElement('div')
div.className = 'parent'
div.style.display = 'grid'
div.style.grid = 'auto / auto auto auto'
div.style.padding = '30px'
div.style.gap = '5px'

div.style.gridTemplateColumns = 'auto auto auto auto'
for(let i=0; i<=100; i++){
    let child = document.createElement('div')
    child.className = 'child'
    child.textContent = i
    if(isPrime(i)){
        child.style.background = 'red'
    }else if(i % 2 == 0){
        child.style.background = 'green'
    }else{
        child.style.background = 'yellow'
    }
    child.style.textAlign = 'center'
    child.style.color = 'white'
    child.style.fontSize = '35px'
    child.style.height = '100px'
    child.style.padding = '50px 0'
    div.appendChild(child)
}
document.body.appendChild(div)