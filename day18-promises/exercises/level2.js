const catsAPI = "https://api.thecatapi.com/v1/breeds";

// Print out all the cat names in to catNames variable.

const fetchCatsApi = async () => {
  try {
    const response = await fetch(catsAPI)
    const data = await response.json()
    let catNames = []
    for(let cat of data){
        catNames.push(cat.name)
    }
    console.log(catNames)
  } catch (err) {
    console.log(err);
  }
};

fetchCatsApi()
