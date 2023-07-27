const btn = document.querySelector('button');
const searchBar = document.getElementById('search');
const container = document.getElementById('container');
const url = 'http://api.weatherapi.com/v1/current.json?key=e462c7619cbe421f908144015230606&q=';

async function getForecast() {
    let searchParams = searchBar.value;
    let urlWithSearch = url + searchParams;
    try {
        const forecast = await fetch(urlWithSearch, {mode:'cors'});
        const forecastData = await forecast.json();
        createForecastElement(forecastData)
    } catch (error) {
        showError(error);
    }
}

function createForecastElement(data) {
    container.innerHTML = ''
    const forecastContainer = document.createElement('div');
    const location = document.createElement('h1');
    const divider = document.createElement('hr');
    const tempF = document.createElement('p');
    const tempC = document.createElement('p');
    const condition = document.createElement('p');
    const conditionIcon = document.createElement('img');

    location.textContent = data.location.name;
    tempF.textContent = `Fahrenheit: ${data.current.temp_f}`;
    tempC.textContent = `Celcius: ${data.current.temp_c}`;
    condition.textContent = `Condition: ${data.current.condition.text}`;
    conditionIcon.src = data.current.condition.icon;

    forecastContainer.className = 'forecast-container';

    forecastContainer.append(location, divider, tempF, tempC, condition, conditionIcon)
    container.append(forecastContainer);
}

function showError(error) {
    container.innerHTML = '';

    const errorContainer = document.createElement('div');
    const errorNotif = document.createElement('h1');
    const errorMsg = document.createElement('p');

    errorNotif.textContent = 'Uh oh, there was an error';
    errorMsg.textContent = error;

    errorContainer.className = 'error-container'

    errorContainer.append(errorNotif, errorMsg);
    container.append(errorContainer);
}

btn.addEventListener('click', getForecast);