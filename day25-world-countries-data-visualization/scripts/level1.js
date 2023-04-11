// Visualize the ten most populated countries and the ten most spoken languages in the world using DOM(HTML, CSS, JS)

//filter top 10 populated countries

const countriesCopy = [...countries_data]

const topPopulatedCountries = countriesCopy
  .sort((a, b) => {
    if (a.population > b.population) {
      return 1
    } else if (b.population > a.population) {
      return -1
    } else {
      return 0
    }
  })
  .slice(countriesCopy.length - 1 - 10, countriesCopy.length)
  .reverse()

const languages = []
for (const country of countriesCopy) {
  for (const language of country.languages) {
    const index = languages.findIndex((e) => e.language == language)
    if (index == -1) {
      languages.push({ language, count: 1 })
    } else {
      languages[index].count += 1
    }
  }
}

languages.sort((a, b) => {
  if (a.count > b.count) {
    return -1
  } else if (b.count > a.count) {
    return 1
  } else {
    return 0
  }
})

const topSpokenLanguages = languages.splice(0, 10)

// heading
const heading = document.createElement("h1")
heading.textContent = "World Countries Data"
heading.style.fontSize = "42px"
heading.style.color = "orange"
heading.style.textAlign = "center"
heading.style.letterSpacing = "2px"
heading.style.marginTop = "30px"
heading.style.marginBottom = "10px"
document.body.appendChild(heading)

// no of countries

const subHeading = document.createElement("div")
subHeading.textContent = `Currently, we have ${countries_data.length} countries`
subHeading.style.textAlign = "center"
subHeading.style.fontSize = "16px"
subHeading.style.letterSpacing = "1px"
subHeading.style.marginTop = "0"
subHeading.style.marginBottom = "10px"
document.body.appendChild(subHeading)

const menuDiv = document.createElement("div")
menuDiv.style.boxShadow = "0 2px 8px 0 rgba(0, 0, 0, 0.2)"
menuDiv.style.textAlign = "center"
menuDiv.style.padding = "10px 0"

const buttonBar = document.createElement("div")
buttonBar.style.display = "flex"
buttonBar.style.justifyContent = "center"
buttonBar.style.padding = "10px 0"

// shows population graph on click
const populationButton = document.createElement("button")
populationButton.textContent = "POPULATION"
populationButton.style.background = "orange"
populationButton.style.textAlign = "center"
populationButton.style.letterSpacing = "1px"
populationButton.style.padding = "5px 10px"
populationButton.style.borderStyle = "none"
populationButton.style.marginRight = "10px"
populationButton.style.borderRadius = "2px"
buttonBar.appendChild(populationButton)

// shows language graph on click
const languagesButton = document.createElement("button")
languagesButton.textContent = "LANGUAGES"
languagesButton.style.background = "orange"
languagesButton.style.textAlign = "center"
languagesButton.style.letterSpacing = "1px"
languagesButton.style.padding = "5px 10px"
languagesButton.style.borderStyle = "none"
languagesButton.style.marginRight = "10px"
languagesButton.style.borderRadius = "2px"
buttonBar.appendChild(languagesButton)

menuDiv.appendChild(buttonBar)

// graph description
const description = document.createElement("h8")
description.textContent = "10 Most poulated countries in the world"
menuDiv.appendChild(description)

document.body.appendChild(menuDiv)

// population graph
const populationGraph = document.createElement("div")
populationGraph.style.boxShadow = "0 2px 8px 0 rgba(0, 0, 0, 0.2)"
populationGraph.style.margin = "auto"
populationGraph.style.padding = "20px 120px 50px 120px"

// calculate total population
const totalPopulation = countries_data.reduce(
  (total, country) => total + country.population,
  0
)

// add world bar grapg item
const totalPopulationItem = document.createElement("div")
totalPopulationItem.style.display = "flex"
totalPopulationItem.style.width = "100%"
totalPopulationItem.style.padding = "4px"

// bar item name
const itemName = document.createElement("div")
itemName.style.flexGrow = "1"
itemName.style.width = "15%"
itemName.textContent = "World"
totalPopulationItem.appendChild(itemName)

// bar graph for world
const bar = document.createElement("div")
bar.style.flexGrow = "1"
bar.style.width = "70%"
const barLine = document.createElement("div")
barLine.style.height = "30px"
barLine.style.width = "100%"
barLine.style.background = "orange"
barLine.style.borderStyle = "none"
barLine.style.textAlign = "center"
bar.appendChild(barLine)
totalPopulationItem.appendChild(bar)

// population count of the world
const populationCount = document.createElement("div")
populationCount.style.flexGrow = "1"
populationCount.style.width = "15%"
populationCount.style.paddingLeft = "30px"
populationCount.textContent = totalPopulation
totalPopulationItem.appendChild(populationCount)
populationGraph.appendChild(totalPopulationItem)

// add bar graphs for 10 most populated countries
for (const country of topPopulatedCountries) {
  const item = document.createElement("div")
  item.style.display = "flex"
  item.style.width = "100%"
  item.style.padding = "4px"

  // add country name
  const name = document.createElement("div")
  name.style.flexGrow = "1"
  name.style.width = "15%"
  name.textContent = country.name
  item.appendChild(name)

  // add bar graph of the country
  const itemBar = document.createElement("div")

  // calculate width of the bar
  const percent = country.population / totalPopulation
  const width = percent * 100

  itemBar.style.flexGrow = "1"
  itemBar.style.width = "70%"

  // add bar graph for the country
  const itemBarLine = document.createElement("div")
  itemBarLine.style.height = "30px"
  itemBarLine.style.width = `${width}%`
  itemBarLine.style.background = "orange"
  itemBarLine.style.borderStyle = "none"
  itemBarLine.style.textAlign = "center"

  itemBar.appendChild(itemBarLine)
  item.appendChild(itemBar)

  // add population count of the country
  const itemPopulationCount = document.createElement("div")
  itemPopulationCount.style.flexGrow = "1"
  itemPopulationCount.style.width = "15%"
  itemPopulationCount.textContent = country.population
  itemPopulationCount.style.paddingLeft = "30px"
  item.appendChild(itemPopulationCount)
  populationGraph.appendChild(item)
}
document.body.appendChild(populationGraph)

// language graph
const languageGraph = document.createElement("div")
languageGraph.style.boxShadow = "0 2px 8px 0 rgba(0, 0, 0, 0.2)"
languageGraph.style.margin = "auto"
languageGraph.style.padding = "20px 120px 50px 120px"

// add bar graph for each spoken 10 most spoken language
for (const language of topSpokenLanguages) {
  const item = document.createElement("div")
  item.style.display = "flex"
  item.style.width = "100%"
  item.style.padding = "4px"

  // add language name
  const name = document.createElement("div")
  name.style.flexGrow = "1"
  name.style.width = "15%"
  name.textContent = language.language
  item.appendChild(name)

  // add bar graph for the language
  const itemBar = document.createElement("div")

  // calculate width of the bar
  const percent = language.count / languages.length
  const width = percent * 100
  itemBar.style.flexGrow = "1"
  itemBar.style.width = "70%"

  const itemBarLine = document.createElement("div")
  itemBarLine.style.height = "30px"
  itemBarLine.style.width = `${width}%`
  itemBarLine.style.background = "orange"
  itemBarLine.style.borderStyle = "none"
  itemBarLine.style.textAlign = "center"

  itemBar.appendChild(itemBarLine)
  item.appendChild(itemBar)

  // add language count
  const itemLanguageCount = document.createElement("div")
  itemLanguageCount.style.flexGrow = "1"
  itemLanguageCount.style.width = "15%"
  itemLanguageCount.textContent = language.count
  itemLanguageCount.style.paddingLeft = "30px"
  item.appendChild(itemLanguageCount)
  languageGraph.appendChild(item)
}

document.body.appendChild(languageGraph)

// set language graph as hidden initially
languageGraph.setAttribute("hidden", "hidden")

// add onclick listener for population button
populationButton.addEventListener("click", (e) => {
  // set description
  description.textContent = "10 Most populated countries in the world"

  const isPopulationGraphHidden = populationGraph.getAttribute("hidden")
  const isLanguageGraphHidden = languageGraph.getAttribute("hidden")

  // make population graph visible, if hidden
  if (isPopulationGraphHidden) {
    populationGraph.removeAttribute("hidden")
  }

  // hide language graph, if not
  if (!isLanguageGraphHidden) {
    languageGraph.setAttribute("hidden", "hidden")
  }
})

// add onclick listener for language button
languagesButton.addEventListener("click", (e) => {
  //set descritpion
  description.textContent = "10 Most spoken languages in the world"
  const isPopulationGraphHidden = populationGraph.getAttribute("hidden")
  const isLanguageGraphHidden = languageGraph.getAttribute("hidden")

  // make language graph visible, if hidden
  if (isLanguageGraphHidden) {
    languageGraph.removeAttribute("hidden")
  }

  // hide population graph, if not
  if (!isPopulationGraphHidden) {
    populationGraph.setAttribute("hidden", "hidden")
  }
});
