document.body.style.backgroundImage = "url('images/galaxy.gif')"

const planets = [
    {name:'Earth',g:9.8,image:'earth.png'},
    {name:'Pluto',g:0.7,image:'pluto.png'}
]

const heading = document.createElement('h1')
heading.textContent = 'Calculate a weight of an object on a planet'
heading.style.fontSize = '42px'
heading.style.fontWeight = 'bold'
heading.style.textAlign = 'center'
heading.style.letterSpacing = '1px'
heading.style.color = 'white'
heading.style.textShadow = '2px 0px 2px white'
document.body.appendChild(heading)

const inputDiv = document.createElement('div')
inputDiv.style.width = '40%'
inputDiv.style.margin = 'auto'
inputDiv.style.paddingTop = '40px'

const mass = document.createElement('input')
mass.style.width = '50%'
mass.placeholder = 'Mass In killogram'
mass.style.display = 'inline-block'
mass.style.height = '30px'
inputDiv.appendChild(mass)

const planetDropDown = document.createElement('select')
planetDropDown.style.width = '25%'
planetDropDown.style.display = 'inline-block'
planetDropDown.style.height = '34px'
planetDropDown.style.margin = '0px 8px'
planetDropDown.style.borderRadius = '5px'

for(const planet of planets){
    const item = document.createElement('option')
    item.value = planet.name
    item.textContent = planet.name
    item.style.background= 'grey'
    item.style.padding= '2px'
    planetDropDown.appendChild(item)
}
inputDiv.appendChild(planetDropDown)

const generateButton = document.createElement('button')
generateButton.style.width = '20%'
generateButton.style.height = '30px'
generateButton.style.borderRadius = '5px'
generateButton.textContent = 'Calculate Weight'
generateButton.style.color = 'white'
generateButton.style.fontSize = '12px'
generateButton.style.background = 'grey'
generateButton.style.display = 'inline-block'
planetDropDown.style.padding = '2px'

inputDiv.appendChild(generateButton)

document.body.appendChild(inputDiv)


const outputDiv = document.createElement('div')
outputDiv.style.width = '70%'
outputDiv.style.margin = 'auto'
outputDiv.style.padding = '100px 0'
outputDiv.style.height = '300px'

document.body.appendChild(outputDiv)
