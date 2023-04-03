const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

// Read the cats api and find the average weight of cat in metric unit.

const findAverageWeight = async ()=>{
    try{
        const response = await fetch(catsAPI)
        const data = await response.json()
        for(const cat of data){
            let metricRange = cat.weight.metric
            let values = metricRange.split(" ")
            let firstValue = parseInt(values[0])
            let secondValue = parseInt(values[2])
            let averageWeight = (firstValue + secondValue)/2

            console.log(`Name: ${cat.name} Avg weight in metric unit:${averageWeight}`)
        }
    }catch(err){
        console.log(err)
    }
}

findAverageWeight()

// Read the countries api and find out the 10 largest countries

const fetchCountries = async ()=>{
    try{
        const response = await fetch(countriesAPI)
        const data = await response.json()
        return data
    }catch(error){
        console.log(error)
    }
}

const find10LargestCountries = async ()=>{
    try{
        const countries = await fetchCountries()
        countries.sort((a,b)=>{
            if(!a.area){
                return -1
            }
            
            if(!b.area){
                return 1
            }
            if(a.area > b.area){
                return 1
            }else if(a.area < b.area){
                return -1
            }else{
                return 0
            }
        })

        const largestCountries = countries.slice(countries.length -10,countries.length).reverse()
        largestCountries.forEach((e)=> console.log(e.name))
    }catch(error){
        console.log(error)
    }

}

find10LargestCountries()

// Read the countries api and count total number of languages in the world used as officials.

const countOfficialLanguages = async () =>{
    try{
        const countries = await fetchCountries()

        let languages = []

        countries.forEach((country)=>{
            for(let l of country.languages){
                let index = languages.findIndex((e) => e.language == l.name)
            if(index != -1){
                languages[index].count += 1
            }else{
                languages.push({language:l.name,count:1})
            }
            }
        })

        console.log(`Total no of languages used as officials : ${languages.length}`)
    }catch(error){
        console.log(error)
    }
}

countOfficialLanguages()