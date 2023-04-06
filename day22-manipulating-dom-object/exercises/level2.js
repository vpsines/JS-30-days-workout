// Use the countries array to display all the countries.See the design

const title = document.createElement('h1')
title.textContent = 'WORLD COUNTRIES LIST'
title.style.textAlign = 'center'
title.style.fontSize = '32px'
title.style.letterSpacing = '4px'
title.style.fontWeight = 'bold'
document.body.appendChild(title)

const subHeading1 = document.createElement('h4')
subHeading1.textContent = `Total number of countries: ${countries.length}`
subHeading1.style.textAlign = 'center'
subHeading1.style.fontWeight = 'bold'
subHeading1.style.fontSize = '12px'
subHeading1.id = 'sub-heading'
document.body.appendChild(subHeading1)

const subHeading2 = document.createElement('h4')
subHeading2.textContent = `30DaysOfJavaScript:DOM-Day-2`
subHeading2.style.textAlign = 'center'
subHeading2.style.fontSize = '12px'
subHeading2.id = 'sub-heading'
document.body.appendChild(subHeading2)

const subHeading3 = document.createElement('h4')
subHeading3.textContent = `Author : Vyshnav Sasidharan`
subHeading3.style.textAlign = 'center'
subHeading3.style.fontSize = '12px'
subHeading3.className = 'sub-heading'
subHeading3.style.padding = '0px 0px'
document.body.appendChild(subHeading3)

const gridDiv = document.createElement('div')
gridDiv.className = 'parent'
gridDiv.style.padding = '50px'
gridDiv.style.display = 'grid'
gridDiv.style.gap = '20px'
gridDiv.style.gridTemplateColumns = 'auto auto auto auto auto auto'
gridDiv.style.gridTemplateRows = 'auto auto auto auto auto auto' 

for(const country of countries){
    const gridItem = document.createElement('div')
    gridItem.className = 'item'
    gridItem.style.padding = '30px'
    gridItem.textContent = country.name
    gridItem.style.textAlign = 'center'
    gridItem.style.fontSize = '14px'
    gridItem.style.fontWeight = 'bold'
    gridItem.style.textTransform = 'uppercase'
    gridItem.style.boxShadow = '1px 1px 1px 1px lightblue'
    gridDiv.appendChild(gridItem)    
}

document.body.appendChild(gridDiv)






