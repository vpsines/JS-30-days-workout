//Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
//     [
//     {word:'love', count:6},
//     {word:'you', count:5},
//     {word:'can', count:3},
//     {word:'what', count:2},
//     {word:'teaching', count:2},
//     {word:'not', count:2},
//     {word:'else', count:2},
//     {word:'do', count:2},
//     {word:'I', count:2},
//     {word:'which', count:1},
//     {word:'to', count:1},
//     {word:'the', count:1},
//     {word:'something', count:1},
//     {word:'if', count:1},
//     {word:'give', count:1},
//     {word:'develop',count:1},
//     {word:'capabilities',count:1},
//     {word:'application', count:1},
//     {word:'an',count:1},
//     {word:'all',count:1},
//     {word:'Python',count:1},
//     {word:'If',count:1}]
// console.log(tenMostFrequentWords(paragraph, 10))
// [{word:'love', count:6},
// {word:'you', count:5},
// {word:'can', count:3},
// {word:'what', count:2},
// {word:'teaching', count:2},
// {word:'not', count:2},
// {word:'else', count:2},
// {word:'do', count:2},
// {word:'I', count:2},
// {word:'which', count:1}
// ]
function tenMostFrequentWords(str,n=10){
    let pattern = /[^ .][A-Za-z]*/g
    let words=[]
    for(let word of paragraph.match(pattern)){
        let index = words.findIndex((e)=> e.word == word)
        if(index != -1){
            words[index].count += 1
        }else{
            words.push({word,count:1})
        }
    }

    words.sort((a,b)=>{
        if(a.count > b.count){
            return 1
        }else if(a.count < b.count){
            return -1
        }else{
            if(a.word > b.word){
                return 1
            }else if(a.word < b.word){
                return -1
            }else{
                return 0
            }
        }
    })

    return words.slice(words.length-10,words.length).reverse()
}

for(let word of tenMostFrequentWords(paragraph)){
    console.log(word)
}
