async function fetchWeather(city) {

    let weatherResults = document.getElementById('weatherResults');

    weatherResults.innerHTML = '';

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9b3abd72af5e8ee4c215adb53b59b0e5`);
    
    let weather = await response.json();

    let location = document.getElementById('location');
    location.innerHTML = `Results for <strong>${weather.name}, ${weather.sys.country}</strong>`;

    let weatherIconCol = document.createElement('div');
    weatherIconCol.classList.add('col');
    weatherIconCol.classList.add('d-flex');
    weatherIconCol.classList.add('align-items-center');
    weatherIconCol.classList.add('justify-content-center');
    let weatherIcon = document.createElement('img');
    weatherIcon.src = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;

    weatherIconCol.appendChild(weatherIcon);
    

    let temp = document.createElement('h1');
    temp.style.fontSize = '3rem';
    temp.classList.add('d-inline')
    temp.innerHTML = `${Math.floor(weather.main.temp - 273.15)}<span class="text-muted fs-6">°C</span>`;
    weatherIconCol.appendChild(temp);
    weatherResults.appendChild(weatherIconCol);

    let descCol = document.createElement('div');
    descCol.classList.add('col');
    let desc = document.createElement('p');
    desc.innerHTML = `Pressure: ${weather.main.pressure} hPa <br> Humidity: ${weather.main.humidity}% <br> Wind: ${weather.wind.speed} m/s`;

    descCol.appendChild(desc);
    weatherResults.appendChild(descCol);


    let timestamp = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        hour: 'numeric',
        minute: '2-digit'
    });
    let timeCol = document.createElement('div');
    timeCol.classList.add('col');
    let time = document.createElement('p');
    time.innerHTML = `<h2>Weather</h2>${timestamp}<br>${weather.weather[0].description[0].toUpperCase()+weather.weather[0].description.slice(1, )}`;

    timeCol.appendChild(time);
    weatherResults.appendChild(timeCol);
}

function getWeather(e) {
    e.preventDefault();
    let city = e.target.elements.city.value;
    fetchWeather(city);
}