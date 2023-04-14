// Create the following using HTML, CSS, and JavaScript

const colors = [
    "aqua",
    " black",
    " blue",
    " fuchsia",
    " gray",
    " green",
    " lime",
    " maroon",
    " navy",
    " olive",
    " purple",
    " red",
    " silver",
    " teal",
    " yellow",
  ];

document.body.style.padding = '20px 150px 100px 150px'

// heading 
const heading = document.createElement('h1')
heading.textContent = `${data.firstName} ${data.lastName}`
heading.style.fontSize = '64px'
heading.style.letterSpacing = '15px'
document.body.appendChild(heading)

// titles

const titleBar = document.createElement('div')
titleBar.style.height = "60px"
titleBar.style.width = "100%"
titleBar.style.background = 'silver'
titleBar.style.padding = "40px 0 0 20px"
titleBar.style.fontSize = '18px'
let titleIndex = 0
titleBar.textContent = data.titles[titleIndex][0]
const titleName = document.createElement('span')
titleName.style.fontSize = '18px'
titleName.style.letterSpacing = '2px'
titleName.textContent = data.titles[titleIndex][1]
titleName.style.animation = "titleanimation 3s infinite"
titleName.style.animationTimingFunction = "ease-in"
titleBar.appendChild(titleName)

document.body.appendChild(titleBar)

setInterval(()=>{
    if(titleIndex == data.titles.length-1){
        titleIndex =0
    }else{
        titleIndex += 1
    }
    titleBar.textContent = data.titles[titleIndex][0]
    titleName.textContent = data.titles[titleIndex][1]
    titleBar.appendChild(titleName)
},3000)
// bio

const bio = document.createElement('div')
bio.style.marginTop = '30px'
bio.width ="100%"
bio.innerHTML = data.bio
bio.style.fontSize = "18px"
bio.style.letterSpacing = '1px'
bio.style.lineHeight = '32px'
document.body.appendChild(bio)

// courses section

const courses = document.createElement('div')
courses.style.width = "100%"
courses.style.textAlign = 'center'

for(const social of data.socialLinks){
    const socialItem = document.createElement('div')
    socialItem.style.height = "10px"
    socialItem.style.width = "150px"
    socialItem.textContent = social.social.toUpperCase()
    socialItem.style.textAlign = 'center'
    socialItem.style.margin = "30px 30px"
    socialItem.style.padding = "70px 0"

    socialItem.style.hove

    socialItem.style.borderStyle = "solid"
    socialItem.style.borderColor = "rgba(0, 0, 0, 0.2)" 
    socialItem.style.borderWidth = '1px'
    socialItem.style.display = 'inline-block'
    courses.appendChild(socialItem)

    socialItem.addEventListener('mouseover',(e)=>{
        socialItem.style.background = 'silver'
    })

    socialItem.addEventListener('mouseleave',(e)=>{
        socialItem.style.background = 'white'
    })
}
document.body.appendChild(courses)

let index = 0
const techSkills = document.createElement('h8')
techSkills.textContent = 'The technologies I have experience with '
techSkills.style.marginTop = '10px'
const tech = document.createElement('span')
tech.textContent = data.skills[index].toUpperCase()
tech.style.fontSize = '32px'
tech.style.color = 'red'
tech.style.fontWeight = 'bold'
tech.style.animation = "techanimation 4s infinite"
tech.style.animationTimingFunction = "ease-in"

techSkills.appendChild(tech)
document.body.appendChild(techSkills)

setInterval(()=>{
    const colorIndex = Math.floor(Math.random() * colors.length)
    tech.style.color = colors[colorIndex]
    if(index == data.skills.length-1){
        index = 0
    }else{
        index += 1
    }
    tech.textContent = data.skills[index].toUpperCase()
},4000)