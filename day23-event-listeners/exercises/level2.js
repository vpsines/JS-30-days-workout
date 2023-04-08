// Generating the keyboard code code using even listener. The image below.

document.body.style.paddingTop = "20%";

const keyCard = document.createElement("div");
keyCard.textContent = "Press any keyboard key";
keyCard.style.textAlign = "center";
keyCard.style.margin = "auto";
keyCard.style.width = "40%";
keyCard.style.height = "50px";
keyCard.style.padding = "30px";
keyCard.style.color = "black";
keyCard.style.fontWeight = "bold";
keyCard.style.fontSize = "56px";
keyCard.style.textShadow = '2px 2px 4px'
keyCard.style.boxShadow  = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

document.body.appendChild(keyCard);

const keyCodeCard = document.createElement("div");
keyCodeCard.style.margin = "30px auto 0";
keyCodeCard.style.width = "9%";
keyCodeCard.style.height = "150px";
keyCodeCard.style.textAlign = "center";
keyCodeCard.style.padding = '30px 0'
keyCodeCard.style.color = "green";
keyCodeCard.style.fontWeight = "bold";
keyCodeCard.style.fontSize = "56px";
keyCodeCard.style.textShadow = '2px 2px 4px black'
keyCodeCard.style.boxShadow  = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

document.body.addEventListener("keypress", (e) => {
  keyCodeCard.textContent = e.keyCode;
  keyCard.textContent = `You pressed `;

  const keyName = document.createElement("span");
  if(e.key == ' '){
    keyName.textContent = e.code;
  }else{
    keyName.textContent = e.key;
  }
  keyName.style.color = "green";
  keyName.style.fontWeight = "bold";
  keyName.style.fontSize = "56px";
  keyName.style.textShadow = '2px 2px 4px black'

  keyCard.appendChild(keyName);
  document.body.appendChild(keyCodeCard);
});
