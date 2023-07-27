const forecastElement = document.getElementById('forecast');
const btn = document.querySelector('button');
const searchBar = document.getElementById('search');
const url = 'http://api.weatherapi.com/v1/current.json?key=e462c7619cbe421f908144015230606&q=';

async function getForecast() {
    let searchParams = searchBar.value;
    let urlWithSearch = url + searchParams;

    try {
        const forecast = await fetch(urlWithSearch, {mode:'cors'});
        const forecastData = forecast.json();
        console.log(forecastData);
    } catch (error) {
        console.log(error);

    }
}

btn.addEventListener('click', getForecast);