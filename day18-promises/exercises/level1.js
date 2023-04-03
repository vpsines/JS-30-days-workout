const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

// Read the countries API using fetch and print the name of country, capital, languages, population and area.

fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => {
    for(let country of data){
        console.log(`Name:${country.name}`)
        console.log(`Capital: ${country.capital}`)
        console.log(`Languages: ${country.languages.map((e)=>e.name)}`)
        console.log(`Population: ${country.population}`)
        console.log(`Area: ${country.area}`)
    }
  })
  .catch((err) => console.log(err));
