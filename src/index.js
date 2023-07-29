import "./style.css";
import { dom } from "./dom";

const btn = document.querySelector('button');
const searchBar = document.getElementById('search');
const url = 'http://api.weatherapi.com/v1/forecast.json?key=e462c7619cbe421f908144015230606&q=';

async function getForecast() {
    let searchParams = searchBar.value;
    let urlWithSearch = url + searchParams;
    try {
        const forecast = await fetch(urlWithSearch, {mode:'cors'});
        const forecastData = await forecast.json();
        dom.createForecastElementF(forecastData);
    } catch (error) {
        dom.showError(error);
    }
}

btn.addEventListener('click', getForecast);