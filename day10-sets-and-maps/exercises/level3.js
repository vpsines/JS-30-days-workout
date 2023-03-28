// How many languages are there in the countries object file.
const languages = new Set()
for(let country of countries){
    country.languages.forEach((e)=>languages.add(e))
}
console.log(languages.size)

// *** Use the countries data to find the 10 most spoken languages:

//    // Your output should look like this
//    console.log(mostSpokenLanguages(countries, 10))
//    [
//      { English: 91 },
//      { French: 45 },
//      { Arabic: 25 },
//      { Spanish: 24 },
//      { Russian: 9 },
//      { Portuguese: 9 },
//      { Dutch: 8 },
//      { German: 7 },
//      { Chinese: 5 },
//      { Swahili: 4 },
//      { Serbian: 4 }
//    ]

//   // Your output should look like this
//   console.log(mostSpokenLanguages(countries, 3))
//   [
//   {English:91},
//   {French:45},
//   {Arabic:25}
//   ]

function mostSpokenLanguages(countries,n){
    let spokenLanguages = new Map()
    for(let country of countries){
        country.languages.forEach((e)=>{
            if(spokenLanguages.has(e)){
                spokenLanguages.set(e,spokenLanguages.get(e)+1)
            }else{
                spokenLanguages.set(e,1)
            }
        })
    }


    let spokenLanguagesArray = []
    for(const l of spokenLanguages){
        spokenLanguagesArray.push({language:l[0],count:l[1]})  
    }

    spokenLanguagesArray.sort((a,b)=>{
        if(a.count > b.count){
            return -1
        }
        if(a.count < b.count){
            return 1
        }
        return 0
    })
    spokenLanguagesArray = spokenLanguagesArray.slice(0,n)
    let result =[]
    spokenLanguagesArray.forEach((e)=>{
        let l = {}
        l[e.language] = e.count
        result.push(l)
     })

     console.log(result)

    }
mostSpokenLanguages(countries,3)