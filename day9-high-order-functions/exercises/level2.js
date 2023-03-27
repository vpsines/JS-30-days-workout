const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
console.log(
  products
    .filter((product) => typeof product.price == "number")
    .reduce((total, p) => total + p.price, 0)
);

// Find the sum of price of products using only reduce reduce(callback))
console.log(
  products.reduce(
    (sum, p) => (typeof p.price == "number" ? sum + p.price : sum),
    0
  )
);

// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
function categorizeCountries(pattern) {
  return countries.filter((country) => country.name.includes(pattern));
}

categorizeCountries("land").forEach((e)=> console.log(e));

// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
function countLetters() {
  let arr = [];
  countries.forEach((country) => {
    let index = arr.findIndex((e) => e.letter == country.name.charAt(0));
    if (index == -1) {
      arr.push({ letter: country.name.charAt(0), count: 1 });
    } else {
      arr[index].count += 1;
    }
  });
  return arr;
}

countLetters(countries).forEach((e) => console.log(e));
// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
const getFirstTenCountries = () => {
  return countries.slice(0, 10);
};

getFirstTenCountries(countries).forEach((e)=>console.log(e));

// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
const getLastTenCountries = () => {
  return countries.slice(countries.length - 1 - 10, countries.length);
};
getLastTenCountries().forEach((e)=>console.log(e));

// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
let letterCounts = countLetters(countries);
let max = letterCounts[0];
letterCounts.forEach((e) => {
  if (max.count < e.count) {
    max = e;
  }
});

console.log(max.letter);
