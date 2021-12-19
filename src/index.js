import "./styles.css";

// let countriesInfo = [
//   {
//     name: "India",
//     population: " 1,394,975,829",
//     region: "Asia",
//     flag:
//       "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
//     capital: "New delhi"
//   },
//   {
//     name: "Germany",
//     population: "81,770,900",
//     region: "Europe",
//     flag:
//       "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
//     capital: "Berlin"
//   },
//   {
//     name: "United states",
//     population: "323,947,000",
//     region: "Americas",
//     flag:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
//     capital: "Washington D.C"
//   },
//   {
//     name: "Brazil",
//     population: "206,135,893",
//     region: "Americas",
//     flag:
//       "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
//     capital: "Brasilia"
//   },
//   {
//     name: "Iceland",
//     population: "334,300",
//     region: "Europe",
//     flag:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
//     capital: "Reykjavik"
//   }
// ];

// No HTML
// only JS or CSS
// append vs appendChild
// time - 12:45

// DRY - Dont Repeat Yourself
// const countryName = document.createElement("h2");
// countryName.innerText = "India";
// // document.body.append(countryName)

// const Population = document.createElement("p");
// Population.innerText = "Population: 1,394,975,829";
// // document.body.append(Population);

// const Region = document.createElement("p");
// Region.innerText = "Region: Asia";
// // document.body.append(Region);

// const Capital = document.createElement("p");
// Capital.innerText = "Capital: New delhi";
// // document.body.append(Capital);

// document.body.append(countryName, Population, Region, Capital);

// createElement - avoid

const countryName = "India";
const population = "1,394,975,829";

// fetch - returns promise object - then

// fetch("https://restcountries.com/v3.1/all")
//   .then((data) => data.json()) // .then -> will always returns Promise object

//   // data -> Response object
//   .then((countries) => {
//     countries.forEach((country) => {
//       // const countryAdapater = {
//       //   flag: country.flags.svg,
//       //   name: country.name.common,
//       //   population: country.population,
//       //   region: country.region,
//       //   capital: country.capital
//       // };

//       const countryAdapater = {
//         ...country,
//         flag: country.flags.svg,
//         name: country.name.common
//       };

//       // spread operator - copy stuff

//       createCountry(countryAdapater);
//     });
//   });

async function listFlags() {
  const data = await fetch("https://restcountries.com/v3.1/all");
  const countries = await data.json();
  countries.forEach((country) => {
    const countryAdapater = {
      ...country,
      flag: country.flags.svg,
      name: country.name.common
    };
    createCountry(countryAdapater);
  });
}

listFlags();

// 3rd package
function createCountry({ flag, name, population, region, capital }) {
  // const {flag, name, population, region, capital} = country;

  document.body.innerHTML += `
  <div class="container">
    <img src="${flag}" alt="${name} flag" class="flag" />
    <div class="info">
      <h2>${name}</h2>
      <p><span>Population: </span>${population}</p>
      <p><span>Region: </span>${region}</p>
      <p><span>Capital: </span> ${capital}</p>
    </div>
  </div> 
  `;
}

// function createCountry({ flags, name, population, region, capital }) {
//   // const {flag, name, population, region, capital} = country;

//   document.body.innerHTML += `
// <div class="container">
//   <img src="${flags.svg}" alt="${name.common} flag" class="flag" />
//   <div class="info">
//     <h2>${name.common}</h2>
//     <p><span>Population: </span>${population}</p>
//     <p><span>Region: </span>${region}</p>
//     <p><span>Capital: </span> ${capital}</p>
//   </div>
// </div>
// `;
// }

// function createCountry(country) {
//   document.body.innerHTML += `
// <div class="container">
//   <img src="${country.flag}" alt="${country.name} flag" class="flag" />
//   <div class="info">
//     <h2>${country.name}</h2>
//     <p><span>Population: </span>${country.population}</p>
//     <p><span>Region: </span>${country.region}</p>
//     <p><span>Capital: </span> ${country.capital}</p>
//   </div>
// </div>
// `;
// }
