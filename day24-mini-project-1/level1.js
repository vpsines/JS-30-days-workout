document.body.style.backgroundImage = "url('images/galaxy.gif')";

const planets = [
  { name: "Mercury", g: 3.7, image: "mercury.png" },
  { name: "Venus", g: 8.9, image: "venus.png" },
  { name: "Earth", g: 9.8, image: "earth.png" },
  { name: "Moon", g: 1.6, image: "moon.png" },
  { name: "Mars", g: 3.7, image: "mars.png" },
  { name: "Jupiter", g: 23.1, image: "jupiter.png" },
  { name: "Saturn", g: 9, image: "saturn.png" },
  { name: "Uranus", g: 8.7, image: "uranus.png" },
  { name: "Neptune", g: 11, image: "neptune.png" },
  { name: "Pluto", g: 0.7, image: "pluto.png" },
];

const indexOfEarth = planets.findIndex((e) => e.name == "Earth");
let currentPlanet;

const heading = document.createElement("h1");
heading.textContent = "Calculate a weight of an object on a planet";
heading.style.fontSize = "42px";
heading.style.fontWeight = "bold";
heading.style.textAlign = "center";
heading.style.letterSpacing = "1px";
heading.style.color = "white";
heading.style.textShadow = "2px 0px 2px white";
document.body.appendChild(heading);

const inputDiv = document.createElement("div");
inputDiv.style.width = "40%";
inputDiv.style.margin = "auto";
inputDiv.style.paddingTop = "40px";

const mass = document.createElement("input");
mass.style.width = "50%";
mass.placeholder = "Mass In killogram";
mass.style.display = "inline-block";
mass.style.height = "30px";
inputDiv.appendChild(mass);

const planetDropDown = document.createElement("select");
planetDropDown.style.width = "25%";
planetDropDown.style.display = "inline-block";
planetDropDown.style.height = "34px";
planetDropDown.style.margin = "0px 8px";
planetDropDown.style.borderRadius = "5px";

for (let i = 0; i < planets.length; i++) {
  if (i == 0) {
    const placeHolderItem = document.createElement("option");
    placeHolderItem.style.background = "grey";
    placeHolderItem.style.padding = "2px";
    placeHolderItem.value = "";
    placeHolderItem.selected = true;
    placeHolderItem.disabled = true;

    placeHolderItem.textContent = "-- select planet --";
    planetDropDown.appendChild(placeHolderItem);
  }
  const item = document.createElement("option");
  item.style.background = "grey";
  item.style.padding = "2px";
  item.value = planets[i].name;
  item.textContent = planets[i].name;
  planetDropDown.appendChild(item);
}
inputDiv.appendChild(planetDropDown);

const generateButton = document.createElement("button");
generateButton.style.width = "20%";
generateButton.style.height = "30px";
generateButton.style.borderRadius = "5px";
generateButton.textContent = "Calculate Weight";
generateButton.style.color = "white";
generateButton.style.fontWeight = "bold";
generateButton.style.fontSize = "12px";
generateButton.style.background = "grey";
generateButton.style.display = "inline-block";
planetDropDown.style.padding = "2px";

inputDiv.appendChild(generateButton);
document.body.appendChild(inputDiv);

const outputDiv = document.createElement("div");
outputDiv.style.width = "70%";
outputDiv.style.margin = "20px auto";
outputDiv.style.padding = "40px";
outputDiv.style.height = "450px";
outputDiv.style.backgroundColor = "rgba(192,192,192,0.2)";
outputDiv.style.display = "flex";
outputDiv.style.alignItems = "center";
outputDiv.style.justifyContent = 'center'

const planetImage = document.createElement("div");
planetImage.style.width = "50%";
planetImage.style.height = "100%";

planetImage.style.backgroundImage = "url('images/earth.png')";
planetImage.style.backgroundRepeat = "no-repeat";
planetImage.style.backgroundSize = "contain";
outputDiv.appendChild(planetImage);

const outputBox = document.createElement("div");
outputBox.style.width = "40%";
outputBox.style.margin = "auto";
outputBox.style.padding = "10px";
outputBox.style.alignItems ='center'
outputBox.style.justifyContent ='center'
outputBox.style.display = "none";
outputBox.style.backgroundColor = "rgba(192,192,192,0.1)";
outputBox.style.flexDirection = "column"
const outputTitle = document.createElement("div");
outputTitle.style.textAlign = "center";
outputTitle.style.color = "white";
outputTitle.style.fontSize = "18px";
outputTitle.style.padding = "10px 0";
outputTitle.style.letterSpacing = "1px";

const planetName = document.createElement("span");
planetName.style.fontWeight = "bold";
planetName.style.color = "white";
planetName.style.letterSpacing = "1px";
outputTitle.appendChild(planetName);

outputBox.appendChild(outputTitle);

const planetWeight = document.createElement("div");

planetWeight.style.textAlign = "center";
planetWeight.style.lineHeight = "120px";

planetWeight.style.margin = "auto";
planetWeight.style.width = "120px";
planetWeight.style.height = "120px";
planetWeight.style.fontWeight = "bold";
planetWeight.style.fontSize = "22px";
planetWeight.style.borderRadius = "50%";
planetWeight.style.color = "white";
planetWeight.style.backgroundColor = "rgba(192,192,192,0.2)";
planetWeight.style.letterSpacing = "1px";

outputBox.appendChild(planetWeight);

outputDiv.appendChild(outputBox);
document.body.appendChild(outputDiv);

generateButton.addEventListener("click", (e) => {
  const isPlanetImageHidden = planetImage.getAttribute("hidden");
  const isOutputBoxHidden = planetImage.getAttribute("hidden");
  const isPlanetWeightHidden = planetImage.getAttribute("hidden");

  if (mass.value) {
    if (planetDropDown.value) {
      const selectedPlanetIndex = planets.findIndex(
        (p) => p.name == planetDropDown.value
      );
      planetImage.style.backgroundImage = `url('images/${planets[selectedPlanetIndex].image}')`;
      planetImage.removeAttribute("hidden");
      outputBox.style.display = 'flex';
      planetWeight.removeAttribute("hidden");
      outputTitle.textContent = "The weight of the object on ";

      const weight = (
        planets[selectedPlanetIndex].g * parseFloat(mass.value)
      ).toFixed(2);
      planetName.textContent = `${planets[selectedPlanetIndex].name}`;
      outputTitle.appendChild(planetName)
      planetWeight.textContent = `${weight} N`;
    } else {
      outputBox.style.display = 'flex';
      planetImage.setAttribute("hidden", "hidden");
      planetWeight.setAttribute("hidden", "hidden");
      outputTitle.textContent = "You have not chosen planet yet.";
    }
  } else {
    outputBox.style.display = 'flex';
    planetWeight.setAttribute("hidden", "hidden");
    planetImage.setAttribute("hidden", "hidden");
    outputTitle.textContent = "Mass is required";
  }
});
