const btn = document.querySelector('button');
const container = document.getElementById('container')
const searchBar = document.getElementById('search');
const url = 'http://api.weatherapi.com/v1/forecast.json?key=e462c7619cbe421f908144015230606&q=';

async function getForecast() {
    let searchParams = searchBar.value;
    let urlWithSearch = url + searchParams;
    try {
        const forecast = await fetch(urlWithSearch, {mode:'cors'});
        const forecastData = await forecast.json();
        createForecastElementF(forecastData);
    } catch (error) {
        showError(error);
    }
}

function createForecastElementF(data) {
    container.innerHTML = ''

    const forecastContainer = document.createElement('div');
    const tempContainer = document.createElement('div');
    const conditionContainer = document.createElement('div');
    const conditionIcon = document.createElement('img');
    const location = document.createElement('h1');
    const localtime = document.createElement('p');
    const tempF = document.createElement('p');
    const condition = document.createElement('p');
    const secondaryData = createSecondaryDataF(data);

    location.textContent = `${data.location.name}, ${data.location.country}`;
    localtime.textContent = data.location.localtime;
    tempF.textContent = `${data.current.temp_f} \u00B0F`;
    condition.textContent = data.current.condition.text;
    conditionIcon.src = data.current.condition.icon;

    conditionContainer.className = 'condition-container';
    tempContainer.className = 'temp-container';
    forecastContainer.className = 'forecast-container';

    conditionContainer.append(tempF, conditionIcon)
    tempContainer.append(conditionContainer, condition)
    forecastContainer.append(tempContainer, secondaryData);
    container.append(location, localtime, forecastContainer);
}

function createSecondaryDataF(data) {
    const secondaryData = document.createElement('div');
    const windContainer = document.createElement('div');
    const visibilityContainer = document.createElement('div');
    const humidityContainer = document.createElement('div');
    const uvContainer = document.createElement('div');
    const cloudinessContainer = document.createElement('div');
    const pressureContainer = document.createElement('div'); 
    const wind = document.createElement('p');
    const visibility = document.createElement('p');
    const humidity = document.createElement('p');
    const uv = document.createElement('p');
    const cloudiness = document.createElement('p');
    const pressure = document.createElement('p');

    wind.textContent = `${data.current.wind_mph} mph`;
    visibility.textContent = `${data.current.vis_miles} mi.`;
    humidity.textContent = `${data.current.humidity} %`;
    uv.textContent = data.current.uv;
    cloudiness.textContent = `${data.current.cloud} %`;
    pressure.textContent = `${data.current.pressure_in} in.`;

    windContainer.textContent = 'Wind MPH';
    windContainer.append(wind);
    visibilityContainer.textContent = 'Visibility';
    visibilityContainer.append(visibility);
    humidityContainer.textContent = 'Humidity';
    humidityContainer.append(humidity);
    uvContainer.textContent = 'UV Index'
    uvContainer.append(uv);
    cloudinessContainer.textContent = 'Cloudiness';
    cloudinessContainer.append(cloudiness);
    pressureContainer.textContent = 'Pressure';
    pressureContainer.append(pressure);

    secondaryData.className = 'secondary-data'

    secondaryData.append(
        windContainer,
        visibilityContainer,
        humidityContainer,
        uvContainer,
        cloudinessContainer,
        pressureContainer
    )

    return secondaryData
}

function showError(error) {
    container.innerHTML = '';
    console.log(error)

    const errorContainer = document.createElement('div');
    const errorNotif = document.createElement('h1');
    const errorMsg = document.createElement('p');

    errorNotif.textContent = 'Uh oh, there was an error';
    errorMsg.textContent = 'No results found';

    errorContainer.className = 'error-container'

    errorContainer.append(errorNotif, errorMsg);
    container.append(errorContainer);
}

btn.addEventListener('click', getForecast);