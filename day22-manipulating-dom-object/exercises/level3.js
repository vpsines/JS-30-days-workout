// Check the requirement of this project from both images(jpg and gif). All the data and CSS has been implemented using JavaScript only. The data is found on starter folder project_3. The drop down button has been created using details HTML element.
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
  " white",
  " yellow",
];

document.body.style.padding = "0 30px";

const heading = document.createElement("h1");
heading.textContent = `${asabenehChallenges2020.challengeTitle} in `;
heading.style.fontSize = "32px";
heading.style.fontWeight = "bold";
heading.style.textAlign = "center";

const yearTitle = document.createElement("span");
yearTitle.id = "year-title";
yearTitle.textContent = asabenehChallenges2020.challengeYear;
yearTitle.style.fontSize = "64px";
heading.appendChild(yearTitle);
document.body.appendChild(heading);

const yearColor = function changeYearColor() {
  const index = Math.floor(Math.random() * colors.length);
  yearTitle.style.color = colors[index];
};

setInterval(yearColor, 1000);

const subTitle = document.createElement("h4");
subTitle.textContent = asabenehChallenges2020.challengeSubtitle;
subTitle.style.textDecorationLine = "underline";
subTitle.style.textAlign = "center";
subTitle.style.color = "red";
document.body.appendChild(subTitle);

const date = document.createElement("h4");
date.style.textAlign = "center";
date.style.maxWidth = "150px";
date.style.margin = "auto";
document.body.appendChild(date);

const changeDateColor = function changeDateBackgroundColor() {
  const dateTime = new Date();
  date.textContent = dateTime.toDateString();
  const index = Math.floor(Math.random() * colors.length);
  date.style.background = colors[index];
};

setInterval(changeDateColor, 1000);

const challengesDiv = document.createElement('div')
challengesDiv.style.width = '80%'
challengesDiv.style.margin = 'auto'
challengesDiv.style.padding = '10px 0'

for(const challenge of asabenehChallenges2020.challenges){
    const challengeBox = document.createElement('div')
    challengeBox.style.background = challenge.status == 'Done' ? 'green' : challenge.status == 'Ongoing'? 'yellow':'red'
    challengeBox.style.margin = '3px 0px'
    challengeBox.style.padding = '15px'

    const boxTitle = document.createElement('div')
    boxTitle.style.display = 'inline-block'
    boxTitle.style.width = '20%'
    boxTitle.style.margin = 'auto'
    boxTitle.textContent = challenge.name
    if(challenge.status == 'Done' || challenge.status == 'Ongoing'){
        boxTitle.style.textDecoration = 'underline'
    }

    challengeBox.appendChild(boxTitle)

    const skills = document.createElement('div')
    skills.style.display = 'inline-block'
    skills.style.width = '50%'
    skills.style.margin = 'auto 100px'

    const detailsElement = document.createElement('details')
    
    const summary = document.createElement('summary')
    summary.textContent = challenge.topics[0]
    detailsElement.appendChild(summary)

    for(const topic of challenge.topics){
        const topicItem = document.createElement('h6')
        topicItem.textContent = topic
        detailsElement.appendChild(topicItem)
    }
    
    skills.append(detailsElement)
    challengeBox.appendChild(skills)

    const status = document.createElement('div')
    status.style.width = '10%'
    status.style.display = 'inline-block'
    status.style.margin = 'auto'
    status.textContent = challenge.status
    challengeBox.appendChild(status)

    challengesDiv.appendChild(challengeBox)
}

document.body.appendChild(challengesDiv)

const author = document.createElement('h2')
author.textContent = `${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName}`
author.style.fontWeight = 'bold'
author.style.fontSize = '32px'
author.style.textAlign = 'center'
document.body.appendChild(author)

const socials = document.createElement('div')
socials.id = 'socials'
socials.style.width = '10%'
socials.style.margin ='auto'

for(const social of asabenehChallenges2020.author.socialLinks){
    const socialIcon = document.createElement('a')
    socialIcon.href = social.url
    socialIcon.innerHTML = social.fontawesomeIcon
    socialIcon.style.padding = '10px'
    socials.appendChild(socialIcon)
}
document.body.appendChild(socials)

const bio = document.createElement('p')
bio.textContent = `${asabenehChallenges2020.author.bio}`
bio.style.fontSize = '14px'
bio.style.textAlign = 'center'
bio.style.margin = 'auto'
bio.style.width = '40%'
bio.style.padding = '50px 0'
document.body.appendChild(bio)


const skillSetsDiv = document.createElement('div')
skillSetsDiv.style.width = '60%'
skillSetsDiv.style.margin = 'auto'
skillSetsDiv.style.display = 'flex'

const titlesDiv = document.createElement('div')
titlesDiv.style.display = 'inline-block'
titlesDiv.style.width = '20%'
titlesDiv.style.margin = '0 auto 0'

const titlesHeading = document.createElement('h4')
titlesHeading.style.fontSize = '18px'
titlesHeading.style.fontWeight='bold'
titlesHeading.textContent = 'Titles'
titlesHeading.style.marginBottom = '0'
titlesDiv.appendChild(titlesHeading)

const titleList = document.createElement('ul')
titleList.style.listStyleType = 'none'
titleList.style.padding = '0'
titleList.style.margin = '4px 0 0 0'
for(const title of asabenehChallenges2020.author.titles){
    const listItem = document.createElement('li')
    listItem.textContent = `${title[0]} ${title[1]}`
    listItem.style.fontSize = 14
    titleList.appendChild(listItem)
}
titlesDiv.appendChild(titleList)  

skillSetsDiv.appendChild(titlesDiv)

const skillsDiv = document.createElement('div')
skillsDiv.display = 'inline-block'
skillsDiv.style.width = '20%'
skillsDiv.style.margin = '0 auto 0'
const skillsTitle = document.createElement('h4')
skillsTitle.style.fontSize = '18px'
skillsTitle.style.fontWeight='bold'
skillsTitle.textContent = 'Skills'
skillsTitle.style.marginBottom = '0'
skillsDiv.appendChild(skillsTitle)


const skillList = document.createElement('ul')
skillList.style.listStyleType = 'none'
skillList.style.padding = '0'
skillList.style.margin = '4px 0 0 0'
for(const skill of asabenehChallenges2020.author.skills){
    const listItem = document.createElement('li')
    listItem.textContent = `✅ ${skill}`
    listItem.style.fontSize = 14
    skillList.appendChild(listItem)
}
skillsDiv.appendChild(skillList)
skillSetsDiv.appendChild(skillsDiv)

const qualificationsDiv = document.createElement('div')
qualificationsDiv.display = 'inline-block'
qualificationsDiv.style.width = '40%'
qualificationsDiv.style.margin = '0 auto 0'
const qualificationssHeading = document.createElement('h4')
qualificationssHeading.style.fontSize = '18px'
qualificationssHeading.style.fontWeight='bold'
qualificationssHeading.textContent = 'Qualifications'
qualificationssHeading.style.marginBottom = '0'
qualificationsDiv.appendChild(qualificationssHeading)

const qualificationList = document.createElement('ul')
qualificationList.style.listStyleType = 'none'
qualificationList.style.padding = '0'
qualificationList.style.margin = '4px 0 0 0'
for(const qualification of asabenehChallenges2020.author.qualifications){
    const listItem = document.createElement('li')
    const isOngoing = qualification.split(" ").includes('Ongoing')
    listItem.textContent = isOngoing ? `📖 ${qualification}`:`👨‍🎓 ${qualification}`
    listItem.style.fontSize = 14
    qualificationList.appendChild(listItem)
}
qualificationsDiv.appendChild(qualificationList)

skillSetsDiv.appendChild(qualificationsDiv)

document.body.appendChild(skillSetsDiv)

const keywords = document.createElement('h4')
keywords.textContent = `Keywords`
keywords.style.fontWeight = 'bold'
keywords.style.fontSize = '18px'
keywords.style.margin = 'auto'
keywords.style.width = '50%'

keywords.style.padding = '50px 0 25px 0'
document.body.appendChild(keywords)


const keyWordItems = document.createElement('div')
keyWordItems.style.margin = '0 auto 20px auto'
keyWordItems.style.width = '45%'

for(const key of asabenehChallenges2020.keywords){
    const keyWordItem = document.createElement('div')
    keyWordItem.textContent = `# ${key}`
    keyWordItem.style.textAlign = 'center'
    const index = Math.floor(Math.random() * colors.length)
    keyWordItem.style.background = colors[index]
    keyWordItem.style.padding = "8px 20px"
    keyWordItem.style.display = 'inline-block'
    keyWordItem.style.margin = "3px"
    keyWordItem.style.borderRadius = '30px'
    keyWordItems.appendChild(keyWordItem)
}
document.body.appendChild(keyWordItems)
