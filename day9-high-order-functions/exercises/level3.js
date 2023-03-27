// Use the countries information, in the data folder. Sort countries by name, by capital, by population
let copyCountries = [].concat(countries)

console.log('Sort by name')

copyCountries.sort((a,b)=>{
    if(a.name > b.name){
        return 1
    }
    if(b.name > a.name){
        return -1
    }
    return 0
})
console.log(copyCountries.forEach((e)=>console.log(e)))

console.log('Sort by capital')
copyCountries.sort((a,b)=>{
    if(a.capital > b.capital){
        return 1
    }
    if(b.capital > a.capital){
        return -1
    }
    return 0
})
console.log(copyCountries.forEach((e)=>console.log(e)))

console.log('sort by population')

copyCountries.sort((a,b)=>{
    if(a.population > b.population){
        return 1
    }
    if(b.population > a.population){
        return -1
    }
    return 0
})
console.log(copyCountries.forEach((e)=>console.log(e)))

// *** Find the 10 most spoken languages:

// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 10))
// [
// {country: 'English',count:91},
// {country: 'French',count:45},
// {country: 'Arabic',count:25},
// {country: 'Spanish',count:24},
// {country:'Russian',count:9},
// {country:'Portuguese', count:9},
// {country:'Dutch',count:8},
// {country:'German',count:7},
// {country:'Chinese',count:5},
// {country:'Swahili',count:4}
// ]

// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 3))
// [
// {country: 'English',count: 91},
// {country: 'French',count: 45},
// {country: 'Arabic',count: 25},
// ]```

function mostSpokenLanguages(arr,n){
    let languages = []
    arr.forEach(element => {
       for(let language of element.languages){
        let index = languages.indexOf(e => e.country === language)
        if(index == -1){
            languages.push({country: language, count : 1})
        }else{
            languages[index].count += 1
        }
       } 
    });
    languages.sort((a,b)=>{
        if(a.count > b.count) return 1
        if(a.count < b.count) return -1
        return 0
    })

    languages.slice(0,n).forEach((e)=> console.log(e))
}

// *** Use countries_data.js file create a function which create the ten most populated countries

// console.log(mostPopulatedCountries(countries, 10))

// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000},
// {country: 'Indonesia', population: 258705000},
// {country: 'Brazil', population: 206135893},
// {country: 'Pakistan', population: 194125062},
// {country: 'Nigeria', population: 186988000},
// {country: 'Bangladesh', population: 161006790},
// {country: 'Russian Federation', population: 146599183},
// {country: 'Japan', population: 126960000}
// ]

// console.log(mostPopulatedCountries(countries, 3))
// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000}
// ]
// ```
function mostPopulatedCountries(arr,n){
    let populationData = []
    arr.forEach(element => populationData.push({country:element.name,population:element.population}));
    populationData.sort((a,b)=>{
        if(a.count > b.count) return 1
        if(a.count < b.count) return -1
        return 0
    })

    populationData.slice(0,n).forEach((e)=> console.log(e))
}

// *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// console.log(statistics.describe())
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

const statistics = {
    count: function (){
        return ages.length
    },
    sum:function (){
        return ages.reduce((sum,age)=>sum+age,0)
    },
    min: function (){
        let minValue = ages[0]
        ages.forEach(e =>{
            if(minValue > e){
                minValue = e
            }
        })
        return minValue
    },
    max: function (){
        let maxValue = ages[0]
        ages.forEach(e =>{
            if(maxValue < e){
                maxValue = e
            }
        })
        return maxValue
    },
    range: function (){
        return this.max() - this.min()
    },
    mean: function (){
        return this.sum()/ this.count()
    },
    median: function (){
        let m = 0
        ages.sort()
        if(this.count() % 2==0){
            m = (ages[(ages.length-1)/2] + ages[age.length/2])/2
        }else{
            m = ages[(ages.length-1)/2]
        }
        return m
    },
    mode: function (isOcucrences){
        let occurences = []
        ages.forEach((e)=>{
            let index = occurences.findIndex(o => o.value == e)
            if(index == -1){
                occurences.push({value:e,occurence:1})
            }else{
                occurences[index].occurence += 1
            }
        })
        if(isOcucrences){
            return occurences;
        }

        let max = occurences[0]
        occurences.forEach((e)=>{
            if(e.occurence > max.occurence){
                max = e
            }
        })

        return `(${max.value},${max.occurence})`
    },
    var: function (){
        return this.std() ** 2
    },
    std: function (){
        let val = ages.map((e) => (e-this.mean())**2)
        return Math.sqrt(val.reduce((total,i)=> total+i,0)/(this.count()-1))
    },
    freqDist: function (){
        occurences = this.mode(true)
        let freqDistribution = []
        occurences.forEach((e)=> freqDistribution.push(`(${e.value},${e.occurence})`))
        return freqDistribution
    },
    describe:function(){
        console.log('Count:', statistics.count()) // 25
        console.log('Sum: ', statistics.sum()) // 744
        console.log('Min: ', statistics.min()) // 24
        console.log('Max: ', statistics.max()) // 38
        console.log('Range: ', statistics.range()) // 14
        console.log('Mean: ', statistics.mean()) // 30
        console.log('Median: ',statistics.median()) // 29
        console.log('Mode: ', statistics.mode(false)) // {'mode': 26, 'count': 5}
        console.log('Variance: ',statistics.var()) // 17.5
        console.log('Standard Deviation: ', statistics.std()) // 4.2
        console.log('Variance: ',statistics.var()) // 17.5
        console.log('Frequency Distribution: ',statistics.freqDist().join(',\n')) 
    }
}

statistics.describe()