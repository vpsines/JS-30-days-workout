// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
const p1 = document.querySelector('p')
console.log(p1)

// Get each of the the paragraph using document.querySelector('#id') and by their id
console.log(document.querySelector('#p1'))
console.log(document.querySelector('#p2'))
console.log(document.querySelector('#p3'))
console.log(document.querySelector('#p4'))

// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const paragraphs = document.querySelectorAll('p')
paragraphs.forEach((e)=>console.log(e))

// Loop through the nodeList and get the text content of each paragraph
paragraphs.forEach((e)=>console.log(e.textContent))

// Set a text content to paragraph the fourth paragraph,Fourth Paragraph
paragraphs[3].textContent = 'Forth paragraph updated'

// Set id and class attribute for all the paragraphs using different attribute setting methods
for(let i=0; i< paragraphs.length; i++){
    paragraphs[i].setAttribute('id',`${i}th`)
    paragraphs[i].setAttribute('class','paragraph')
}

paragraphs.forEach((p)=>{
    console.log(p.id)
    console.log(p.className)
})