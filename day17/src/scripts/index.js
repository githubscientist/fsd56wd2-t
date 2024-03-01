/*
    fetch API -> modern way to make HTTP requests rather than using XMLHttpRequest (XHR)
*/
let fetchCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then((response) => {
            return response.json();
        })
        .catch(() => {
            console.log('Data fetching failed');
        })
        .then((countries) => {
            let container = document.querySelector('.container');

            let table = document.createElement('table');

            table.setAttribute('cellpadding', '10');
            table.classList.add('table');

            let headRow = document.createElement('tr');

            let firstHead = document.createElement('th');
            firstHead.textContent = 'Name';

            let secondHead = document.createElement('th');
            secondHead.textContent = 'Capital';

            let thirdHead = document.createElement('th');
            thirdHead.textContent = 'Region';

            let fourthHead = document.createElement('th');
            fourthHead.textContent = 'Population';

            let fifthHead = document.createElement('th');
            fifthHead.textContent = 'Flag';

            headRow.append(
                firstHead,
                secondHead,
                thirdHead,
                fourthHead, 
                fifthHead
            );

            table.append(headRow);

            countries.forEach(country => {
                let row = document.createElement('tr');

                let name = document.createElement('td');
                name.textContent = country.name.common ? country.name.common : 'N/A';

                let capital = document.createElement('td');
                if (country.capital) {
                    capital.textContent = country.capital[0];
                } else {
                    capital.textContent = 'N/A';
                }

                let region = document.createElement('td');
                region.textContent = country.region;

                let population = document.createElement('td');
                population.textContent = country.population;

                let flag = document.createElement('td');
                flag.innerHTML = `<img src="${country.flags.png}" alt="${country.name.common}" width="50px" height="50px">`;

                row.append(
                    name, capital, region, population, flag
                )
                
                table.appendChild(row);

            })
            container.append(table);
        })
};

fetchCountries();