import "./style.css";
import { dom } from "./dom";

const btn = document.querySelector('button');
const container = document.getElementById('container');
const searchBar = document.getElementById('search');
const fBtn = document.getElementById('switchF');
const cBtn = document.getElementById('switchC');
let selectedMeasurement = 'F';

async function getForecast() {
    const searchParams = searchBar.value;
    const url = `https://api.weatherapi.com/v1/forecast.json?key=e462c7619cbe421f908144015230606&q=${searchParams}&days=3`;

    try {
        switch(selectedMeasurement) {
            case 'F':
                await fResults(url);
                break;
            case 'C':
                await cResults(url);
                break;
        }
    } catch (error) {
        container.innerHTML = '';
        dom.showError(error);
    }
}

async function fResults(url) {
    container.innerHTML = '';
    dom.showLoader();
    const forecast = await fetch(url, {mode:'cors'});
    const forecastData = await forecast.json();
    dom.createForecastElementF(forecastData);
    dom.createThreeDayElementF(forecastData);
    dom.hideLoader();
}

async function cResults(url) {
    container.innerHTML = '';
    dom.showLoader();
    const forecast = await fetch(url, {mode:'cors'});
    const forecastData = await forecast.json();
    dom.createForecastElementC(forecastData);
    dom.createThreeDayElementC(forecastData);
    dom.hideLoader();
}

function selectF() {
    fBtn.style.border = 'white solid 2px';
    cBtn.style.border = 'none';
    selectedMeasurement = 'F';
}

function selectC() {
    cBtn.style.border = 'white solid 2px';
    fBtn.style.border = 'none';
    selectedMeasurement = 'C';
}

btn.addEventListener('click', getForecast);
fBtn.addEventListener('click', () => {
    selectF();
})

cBtn.addEventListener('click', () => {
    selectC();
})

searchBar.addEventListener('keydown', e => {
    if(e.code === 'Enter') {
        getForecast();
    }
})