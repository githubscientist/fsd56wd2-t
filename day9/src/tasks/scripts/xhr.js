// require the library xhr2
const XMLHttpRequest = require('xhr2');

// create a connection object to XMLHttpRequest
const xhr = new XMLHttpRequest();

// open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');

// send the request
xhr.send();

// // get the response on onLoad
// xhr.onload = function () {
//     let countries = JSON.parse(xhr.response);

//     // get all the countries with a population less than 2 lakhs
//     let filteredCountries = countries.filter(country => country.population < 200000);

//     // filteredCountries.forEach(country => {
//     //     console.log(country.name.common);
//     // });

//     console.log(filteredCountries.map(country => country.population));
// }


// get the response on onLoad
xhr.onload = function () {
    let countries = JSON.parse(xhr.response);

    console.log(`Countries that uses USD dollars as currency: `);

    // get all the countries whose currencies are US Dollars USD
    console.log(countries.filter(country => {
        let currencies;
        if (country.currencies) {
            currencies = Object.keys(country.currencies);
            return currencies.includes('USD');
        }
    }).map(country => country.name.common).join('\n'));
}

