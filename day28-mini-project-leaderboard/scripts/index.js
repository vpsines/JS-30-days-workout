// Create the following using HTML, CSS, and JavaScript

let players = [];

const heading = document.createElement("div");
heading.textContent = "30 Days of Javascript Challenge Leaderboard";
heading.style.textAlign = "center";
heading.style.fontSize = "32px";
heading.style.padding = "20px 0 20px 0";
document.body.appendChild(heading);

const inputDiv = document.createElement("div");
inputDiv.style.width = "60%";
inputDiv.style.margin = "auto";
inputDiv.style.display = "flex";

// first name
const firstName = document.createElement("input");
firstName.type = "text";
firstName.placeholder = "First Name";
firstName.style.height = "40px";
firstName.style.paddingLeft = "10px";
firstName.style.marginLeft = "10px";
inputDiv.appendChild(firstName);

const lastName = document.createElement("input");
lastName.type = "text";
lastName.placeholder = "Last Name";
lastName.style.height = "40px";
lastName.style.paddingLeft = "10px";
lastName.style.marginLeft = "10px";
inputDiv.appendChild(lastName);

const country = document.createElement("input");
country.type = "text";
country.placeholder = "Country";
country.style.height = "40px";
country.style.paddingLeft = "10px";
country.style.marginLeft = "10px";
inputDiv.appendChild(country);

const playerScore = document.createElement("input");
playerScore.type = "text";
playerScore.placeholder = "Player Score";
playerScore.style.height = "40px";
playerScore.style.paddingLeft = "10px";
playerScore.style.marginLeft = "10px";
inputDiv.appendChild(playerScore);

const addPlayerButton = document.createElement("button");
addPlayerButton.type = "text";
addPlayerButton.textContent = "Add Player";
addPlayerButton.style.textAlign = "center";
addPlayerButton.style.background = "rgb(255, 204, 204)";
addPlayerButton.style.height = "40px";
addPlayerButton.style.width = "150px";
addPlayerButton.style.paddingLeft = "10px";
addPlayerButton.style.marginLeft = "10px";
addPlayerButton.style.borderStyle = "none";
addPlayerButton.style.color = "white";

inputDiv.appendChild(addPlayerButton);

document.body.appendChild(inputDiv);

const errorMessage = document.createElement("div");
errorMessage.style.width = "150px";
errorMessage.style.margin = "auto";
errorMessage.style.color = "red";
errorMessage.style.fontWeight = "bold";
errorMessage.style.padding = "20px 0";
document.body.appendChild(errorMessage);

const playersTable = document.createElement("div");
document.body.append(playersTable);

addPlayerButton.addEventListener("click", () => {
  // validate data
  if (validateFields()) {
    const today = new Date();
    let player = {
      name: `${firstName.value} ${lastName.value}`.toUpperCase(),
      country: country.value.toUpperCase(),
      score: parseInt(playerScore.value),
      date: formatDate(today),
      id: players.length + 1,
    };

    players.push(player);

    // player row
    const playerRow = document.createElement("div");
    playerRow.style.width = "60%";
    playerRow.style.margin = "8px auto";
    playerRow.style.background = "rgb(255, 204, 204)";
    playerRow.style.padding = "10px";
    playerRow.style.textAlign - "center";
    playerRow.style.display = "flex";
    playerRow.id = player.id;

    const playerNameDiv = document.createElement("div");
    playerNameDiv.style.flex = "2";
    playerNameDiv.style.padding = "10px 0";
    playerNameDiv.style.marginLeft = "10px";

    // player name 
    const playerName = document.createElement("div");
    playerName.textContent = `${player.name}`;
    playerName.style.letterSpacing = "1px";
    playerName.style.marginBottom = "5px";
    playerNameDiv.appendChild(playerName);

    // date of creation
    const date = document.createElement("div");
    date.textContent = `${player.date}`;
    date.style.color = "rgb(140, 140, 140)";
    playerNameDiv.appendChild(date);

    playerRow.appendChild(playerNameDiv);

    // country name
    const playerCountry = document.createElement("div");
    playerCountry.style.flex = "1";
    playerCountry.textContent = `${player.country}`;
    playerCountry.style.letterSpacing = "1px";
    playerCountry.style.marginBottom = "5px";
    playerCountry.style.padding = "15px 0";
    playerRow.appendChild(playerCountry);

    // score
    const score = document.createElement("div");
    score.style.flex = "1";
    score.textContent = `${player.score}`;
    score.style.letterSpacing = "1px";
    score.style.marginBottom = "5px";
    score.style.padding = "15px 0";
    playerRow.appendChild(score);

    // action buttons
    const actionButtonsDiv = document.createElement("div");
    actionButtonsDiv.style.textAlign = "center";
    actionButtonsDiv.style.marginRight = "15px";
    actionButtonsDiv.style.padding = "5px 0";
    actionButtonsDiv.style.flex = "2";

    //button to delete player from table
    const deleteAction = document.createElement("div");
    deleteAction.style.background = "white";
    deleteAction.style.width = "50px";
    deleteAction.style.borderRadius = "50%";
    deleteAction.style.marginRight = "8px";
    deleteAction.style.display = "inline-block";
    deleteAction.style.padding = "15px 0";
    deleteAction.innerHTML = '<i class="fa fa-trash"></i>';
    deleteAction.style.color = "red";
    actionButtonsDiv.appendChild(deleteAction);

    deleteAction.addEventListener("click", (e) => {
      playersTable.removeChild(playerRow);
    });

    deleteAction.addEventListener("mouseenter", (e) => {
      deleteAction.style.background = "rgb(51, 255, 51)";
    });

    deleteAction.addEventListener("mouseleave", (e) => {
      deleteAction.style.background = "white";
    });

    //button to add 5 points to current score
    const plusFiveAction = document.createElement("div");
    plusFiveAction.textContent = "+5";
    plusFiveAction.style.background = "white";
    plusFiveAction.style.width = "50px";
    plusFiveAction.style.borderRadius = "50%";
    plusFiveAction.style.marginRight = "8px";
    plusFiveAction.style.display = "inline-block";
    plusFiveAction.style.padding = "15px 0";
    actionButtonsDiv.appendChild(plusFiveAction);

    plusFiveAction.addEventListener("click", (e) => {
      player.score += 5;
      score.textContent = player.score;
    });

    plusFiveAction.addEventListener("mouseenter", (e) => {
      plusFiveAction.style.background = "rgb(51, 255, 51)";
    });

    plusFiveAction.addEventListener("mouseleave", (e) => {
      plusFiveAction.style.background = "white";
    });

    // button to subtracts 5 from current score
    const minusFiveAction = document.createElement("div");
    minusFiveAction.textContent = "-5";
    minusFiveAction.style.background = "white";
    minusFiveAction.style.width = "50px";
    minusFiveAction.style.borderRadius = "50%";
    minusFiveAction.style.marginRight = "8px";
    minusFiveAction.style.display = "inline-block";
    minusFiveAction.style.padding = "15px 0";
    actionButtonsDiv.appendChild(minusFiveAction);

    minusFiveAction.addEventListener("click", (e) => {
      player.score -= 5;
      if (player.score < 0) {
        player.score = 0;
      }
      score.textContent = player.score;
    });

    minusFiveAction.addEventListener("mouseenter", (e) => {
      minusFiveAction.style.background = "rgb(51, 255, 51)";
    });

    minusFiveAction.addEventListener("mouseleave", (e) => {
      minusFiveAction.style.background = "white";
    });

    playerRow.appendChild(actionButtonsDiv);

    playersTable.appendChild(playerRow);

    clearInputFields()
  }
});

// function to validate input fields
const validateFields = () => {
  const fNameValue = firstName.value;
  const lNameValue = lastName.value;
  const countryValue = country.value;
  const scoreValue = playerScore.value;

  if (!fNameValue || !lNameValue || !countryValue || !scoreValue) {
    errorMessage.textContent = "All fields are required";
    return false;
  }

  errorMessage.textContent = "";
  return true;
};

const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']

// returns formatted date
const formatDate = (date)=>{
  const month = date.getMonth()
  const day = getFormatedNumber(date.getDate())
  const year = date.getFullYear()
  const hour = getFormatedNumber(date.getHours())
  const minutes = getFormatedNumber(date.getMinutes())

  return `${months[month]} ${day}, ${year} ${hour}:${minutes}`
}

// return number in two digit format for numbers < 10
const getFormatedNumber = (num)=>{
  return num > 9 ? num : `0${num}` 
}

// clears input fields
clearInputFields = ()=>{
  firstName.value = ''
  lastName.value = ''
  country.value = ''
  playerScore.value = ''
}