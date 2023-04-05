// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
for(let i=0; i< paragraphs.length;i++){
    paragraphs[i].style.color = 'blue'
    paragraphs[i].style.background = 'black'
    paragraphs[i].style.border = 'green'
    paragraphs[i].style.fontSize = '18px'
    paragraphs[i].style.fontFamily = 'Roboto'
}

// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
for(let i=0; i< paragraphs.length; i++){
    if(i==0 || i==2){
        paragraphs[i].style.color = 'green'
    }else{
        paragraphs[i].style.color = 'red'
    }
}

// Set text content, id and class to each paragraph
for(let i=0; i< paragraphs.length; i++){
    paragraphs[i].setAttribute('id',`${i}`)
    paragraphs[i].setAttribute('class','para')
    paragraphs[i].textContent = `${i} para`
}