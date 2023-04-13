//Visualize the countries array as follows
document.body.style.margin = "0"

let filteredCountries = []
let searchWithStarting = false
let searchWithWord = false
let isSortInReverse = false

const searchDiv = document.createElement('div')
searchDiv.style.width = "100%"
searchDiv.style.height = "350px"
searchDiv.style.backgroundImage = "url('images/globe-2.jpg')"
searchDiv.style.backgroundRepeat = 'no-repeat'
searchDiv.style.backgroundSize = "cover"
searchDiv.style.paddingTop = '100px'
searchDiv.style.paddingBottom = '50px'

const heading = document.createElement('h1')
heading.textContent = 'WORLD COUNTRIES LIST'
heading.style.textAlign = 'center'
heading.style.fontWeight = 'bold'
heading.style.fontSize = '48px'
heading.style.color = 'white'
heading.style.letterSpacing = '8px'
heading.style.marginBottom = "0"
searchDiv.appendChild(heading)

const subHeading = document.createElement('h4')
subHeading.textContent = `Total number of countries: ${countries.length}`
subHeading.style.textAlign = 'center'
subHeading.style.fontWeight = 'bold'
subHeading.style.fontSize = '18px'
subHeading.style.color = 'white'
subHeading.style.marginTop = "10px"
subHeading.style.marginBottom = "0"
searchDiv.appendChild(subHeading)

const result = document.createElement('h4')
result.textContent = ``
result.style.fontWeight = 'normal'
result.style.textAlign = 'center'
result.style.fontSize = '18px'

result.style.color = 'white'
result.style.marginTop = "10px"
searchDiv.appendChild(result)


const buttonBar = document.createElement('div')
buttonBar.style.width = "30%"
buttonBar.style.margin = "auto"

const startWithButton = document.createElement('button')
startWithButton.style.height = "40px"
startWithButton.textContent = "STARTING WORD"
startWithButton.style.borderStyle = "none"
startWithButton.style.background = "orchid"
startWithButton.style.color = "white"

startWithButton.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"

buttonBar.appendChild(startWithButton)

startWithButton.addEventListener('click',(e)=>{
    startWithButton.style.background = 'purple'
    anyWordButton.style.background = 'orchid'
    searchWithStarting = true
    searchWithWord = false
})

const anyWordButton = document.createElement('button')
anyWordButton.style.height = "40px"
anyWordButton.textContent = "SEARCH WITH ANY WORD"
anyWordButton.style.borderStyle = "none"
anyWordButton.style.background = "orchid"
anyWordButton.style.color = "white"
anyWordButton.style.margin = "0 2px"
anyWordButton.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"

buttonBar.appendChild(anyWordButton)

anyWordButton.addEventListener('click',(e)=>{
    anyWordButton.style.background = 'purple'
    startWithButton.style.background = 'orchid'
    searchWithStarting = false
    searchWithWord = true
})

const sortButton = document.createElement('button')
sortButton.style.height = "40px"
sortButton.style.width = "40px"
sortButton.style.borderStyle = "none"
sortButton.style.background = "orchid"
sortButton.style.color = "white"
sortButton.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
sortButton.innerHTML = `<i class="fa fa-sort-alpha-asc" aria-hidden="true"></i>`
buttonBar.appendChild(sortButton)

sortButton.addEventListener('click',(e)=>{
    isSortInReverse = !isSortInReverse
    if(isSortInReverse){
        sortButton.style.background = 'purple'
    }else{
        sortButton.style.background = 'orchid'
    }
    filteredCountries = filteredCountries.reverse()
    gridDiv.innerHTML = ''
    for(const country of filteredCountries){
        const countryItem = document.createElement('div')
        countryItem.style.backgroundImage = "url('images/map_image.jpg')"
        countryItem.style.backgroundSize = 'cover'

        countryItem.style.width = "120px"
        countryItem.style.height = "20px"
        countryItem.style.margin = "5px 20px"
        countryItem.style.color = "black"
        countryItem.style.padding = "50px 10px"
        
        countryItem.style.backgroundRepeat = 'no-repeat'
        countryItem.textContent = country.toUpperCase()
        countryItem.style.textAlign = "center"
        countryItem.style.fontWeight = 'bold'

        countryItem.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
        gridDiv.appendChild(countryItem)
    }
})

searchDiv.appendChild(buttonBar)

const searchBar = document.createElement('div')
searchBar.style.width = "40%"
searchBar.style.margin = '10px auto'
searchBar.style.display = 'flex'
searchBar.style.justifyContent = 'center'
searchBar.style.alignItems= 'center'

const searchField = document.createElement('input')
searchField.style.width = "70%"
searchField.style.height = "40px"
searchField.style.borderColor =  'blue' 
searchField.style.borderRadius = '30px'
searchField.placeholder = 'Search countries...'
searchField.style.padding = "0 15px"
searchField.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
searchBar.appendChild(searchField)

const searchIcon = document.createElement('div')
searchIcon.style.height = "25px"
searchIcon.style.width = "25px"
searchIcon.style.textAlign ="center"
searchIcon.style.margin = "10px"
searchIcon.style.color = "white"

searchIcon.innerHTML = `<i class="fa fa-search fa-lg" aria-hidden="true"></i>`
searchBar.appendChild(searchIcon)

searchDiv.appendChild(searchBar)

document.body.appendChild(searchDiv)

const gridDiv = document.createElement('div')
gridDiv.style.display = 'flex'
gridDiv.style.width = '80%'
gridDiv.style.margin = "80px auto"
gridDiv.style.flexFlow = "row wrap"
document.body.appendChild(gridDiv)

searchField.addEventListener('input',(e)=>{
    if(e.target.value){
        gridDiv.innerHTML = ''
        if(searchWithWord){
            filteredCountries = countries.filter((country) => country.toLowerCase().includes(e.target.value.toLowerCase()))
            result.innerHTML = `Countries containing  <span style="color:red">${e.target.value}</span> are <span style="color:green">${filteredCountries.length}</span>.`
        }
    
        if(searchWithStarting){
            filteredCountries = countries.filter((country) => country.toLowerCase().startsWith(e.target.value.toLowerCase()))
            result.innerHTML = `Countries starting with <span style="color:red">${e.target.value}</span> are <span style="color:green">${filteredCountries.length}</span>.`
        }
    
        if(isSortInReverse){
            filteredCountries= filteredCountries.reverse();
        }
    
        for(const country of filteredCountries){
            const countryItem = document.createElement('div')
            countryItem.style.backgroundImage = "url('images/map_image.jpg')"
            countryItem.style.backgroundSize = 'cover'
    
            countryItem.style.width = "120px"
            countryItem.style.height = "20px"
            countryItem.style.margin = "5px 20px"
            countryItem.style.color = "black"
            countryItem.style.padding = "50px 10px"
            countryItem.style.backgroundRepeat = 'no-repeat'
            countryItem.textContent = country.toUpperCase()
            countryItem.style.textAlign = "center"
            countryItem.style.fontWeight = 'bold'

            countryItem.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
            gridDiv.appendChild(countryItem)
        }

    }
})