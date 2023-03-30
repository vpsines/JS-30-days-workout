// Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

function cleanText(str){
    let pattern = /[@#%;&!$]/g
    return sentence.replace(pattern,"")
}
const newSentence = cleanText(sentence)
console.log(newSentence)

function mostFrequentWords(str,n=10){
    let pattern = /[^ .][A-Za-z]*/g
    let words=[]
    for(let word of str.match(pattern)){
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

    return words.slice(words.length-n,words.length).reverse()
}

for(let word of mostFrequentWords(newSentence,3)){
    console.log(word)
}