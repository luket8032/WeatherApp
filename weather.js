const btn = document.querySelector('button');
const searchBar = document.getElementById('search');
const container = document.getElementById('container');
const url = 'http://api.weatherapi.com/v1/forecast.json?key=e462c7619cbe421f908144015230606&q=';

async function getForecast() {
    let searchParams = searchBar.value;
    let urlWithSearch = url + searchParams;
    try {
        const forecast = await fetch(urlWithSearch, {mode:'cors'});
        const forecastData = await forecast.json();
        createForecastElement(forecastData);
    } catch (error) {
        showError(error);
    }
}

function createForecastElement(data) {
    container.innerHTML = ''

    const forecastContainer = document.createElement('div');
    const location = document.createElement('h1');
    const localtime = document.createElement('p');
    const tempF = document.createElement('p');
    const tempC = document.createElement('p');
    const condition = document.createElement('p');

    location.textContent = `${data.location.name}, ${data.location.country}`;
    localtime.textContent = data.location.localtime;
    tempF.textContent = `${data.current.temp_f} \u00B0F`;
    tempC.textContent = `${data.current.temp_c} \u00B0C`;
    condition.textContent = `Condition: ${data.current.condition.text}`;

    forecastContainer.className = 'forecast-container';

    forecastContainer.append(location, localtime, tempF, tempC, condition);
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