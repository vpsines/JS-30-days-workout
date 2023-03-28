const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
// create an empty set
const set = new Set()
console.log(set)

// Create a set containing 0 to 10 using loop
for(let i =0;i<11;i++){
    set.add(i)
}
console.log(set)

// Remove an element from a set
set.delete(0)
console.log(set)

// Clear a set
set.clear()
console.log(set)

// Create a set of 5 string elements from array
const strArray = ['apple','orange','grapes','banana','peach']
const strSet = new Set(strArray)
console.log(strSet)

// Create a map of countries and number of characters of a country
const mapOfCountries = new Map()
for(let country of countries){
    mapOfCountries.set(country,country.length)
}
console.log(mapOfCountries)