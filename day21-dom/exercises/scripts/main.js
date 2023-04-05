// Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

// The year color is changing every 1 second
// The date and time background color is changing every on seconds
// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red

const colors = ['red','green','yellow','blue']

function changeYearColor(){
    const yearElement = document.querySelector('.year')
    const index = Math.floor(Math.random() * colors.length)
    yearElement.style.color = colors[index]
}

setInterval(changeYearColor,1000)

function changeDateAndTimeColor(){
    const date = Date.now()
    const dateElement = document.getElementById('date')

    const index = Math.floor(Math.random() * colors.length )

    dateElement.textContent = date
    dateElement.style.background = colors[index]
}

setInterval(changeDateAndTimeColor,1000)

const challengeList = document.querySelectorAll('li')
challengeList.forEach((challenge)=>{
    const textContents = challenge.textContent.split(" ")
    if(textContents[2] == 'Done'){
        challenge.style.background = 'green'
    }else if(textContents[2] == 'Ongoing'){
        challenge.style.background = 'yellow'
    }else if(textContents[2] == 'Coming'){
        challenge.style.background = 'red'
    }else{
        // do nothing
    }
})