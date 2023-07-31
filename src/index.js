import "./style.css";
import { dom } from "./dom";

const btn = document.querySelector('button');
const searchBar = document.getElementById('search');

async function getForecast() {
    const searchParams = searchBar.value;
    const url = `http://api.weatherapi.com/v1/forecast.json?key=e462c7619cbe421f908144015230606&q=${searchParams}&days=3`;

    try {
        dom.showLoader();
        const forecast = await fetch(url, {mode:'cors'});
        const forecastData = await forecast.json();
        dom.createForecastElementF(forecastData);
        dom.createThreeDayElementF(forecastData);
        dom.hideLoader();
    } catch (error) {
        dom.showError(error);
    }
}

btn.addEventListener('click', getForecast);