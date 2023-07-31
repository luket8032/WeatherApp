

const dom = (() => {
    const container = document.getElementById('container');
    const loader = document.getElementById('loader');

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

    function createThreeDayElementF(data) {
        const threeDaysData = data.forecast.forecastday;
        const threeDayContainer = document.createElement('div');
        const threeDayWrapper = document.createElement('div');
        const threeDayHeading = document.createElement('h1');

        threeDaysData.forEach(day => {
            const dayForecast = createDayElementF(day.date, day.day)
            threeDayWrapper.append(dayForecast)
        })

        threeDayHeading.textContent = '3-Day Forecast'

        threeDayWrapper.className = 'three-day-wrapper'

        threeDayContainer.append(threeDayHeading, threeDayWrapper);
        container.append(threeDayContainer);
    }

    function createDayElementF(date, dayData) {
        const dayContainer = document.createElement('div');
        const dayDate = document.createElement('h3');
        const conditionText = document.createElement('p');
        const conditionIcon = document.createElement('img');
        const hiTemp = document.createElement('p');
        const loTemp = document.createElement('p');

        dayDate.textContent = date;
        conditionText.textContent = dayData.condition.text;
        conditionIcon.src = dayData.condition.icon;
        loTemp.textContent = `Low: ${dayData.mintemp_f} \u00B0F`;
        hiTemp.textContent = `High: ${dayData.maxtemp_f} \u00B0F`;

        dayContainer.append(dayDate, conditionText, conditionIcon, loTemp, hiTemp);
        
        return dayContainer
    }

    function createForecastElementC(data) {
        container.innerHTML = ''
    
        const forecastContainer = document.createElement('div');
        const tempContainer = document.createElement('div');
        const conditionContainer = document.createElement('div');
        const conditionIcon = document.createElement('img');
        const location = document.createElement('h1');
        const localtime = document.createElement('p');
        const tempF = document.createElement('p');
        const condition = document.createElement('p');
        const secondaryData = createSecondaryDataC(data);
    
        location.textContent = `${data.location.name}, ${data.location.country}`;
        localtime.textContent = data.location.localtime;
        tempF.textContent = `${data.current.temp_c} \u00B0C`;
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

    function createSecondaryDataC(data) {
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
    
        wind.textContent = `${data.current.wind_kph} kph`;
        visibility.textContent = `${data.current.vis_km} km.`;
        humidity.textContent = `${data.current.humidity} %`;
        uv.textContent = data.current.uv;
        cloudiness.textContent = `${data.current.cloud} %`;
        pressure.textContent = `${data.current.pressure_mb} mb.`;
    
        windContainer.textContent = 'Wind KPH';
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

    function createThreeDayElementC(data) {
        const threeDaysData = data.forecast.forecastday;
        const threeDayContainer = document.createElement('div');
        const threeDayWrapper = document.createElement('div');
        const threeDayHeading = document.createElement('h1');

        threeDaysData.forEach(day => {
            const dayForecast = createDayElementC(day.date, day.day)
            threeDayWrapper.append(dayForecast)
        })

        threeDayHeading.textContent = '3-Day Forecast'

        threeDayWrapper.className = 'three-day-wrapper'

        threeDayContainer.append(threeDayHeading, threeDayWrapper);
        container.append(threeDayContainer);
    }

    function createDayElementC(date, dayData) {
        const dayContainer = document.createElement('div');
        const dayDate = document.createElement('h3');
        const conditionText = document.createElement('p');
        const conditionIcon = document.createElement('img');
        const hiTemp = document.createElement('p');
        const loTemp = document.createElement('p');

        dayDate.textContent = date;
        conditionText.textContent = dayData.condition.text;
        conditionIcon.src = dayData.condition.icon;
        loTemp.textContent = `Low: ${dayData.mintemp_c} \u00B0C`;
        hiTemp.textContent = `High: ${dayData.maxtemp_c} \u00B0C`;

        dayContainer.append(dayDate, conditionText, conditionIcon, loTemp, hiTemp);
        
        return dayContainer
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

    function showLoader() {
        loader.display = 'inline-block';
    }

    function hideLoader() {
        loader.display = 'none'
    }

    return {
        createForecastElementF, 
        createThreeDayElementF,
        createForecastElementC,
        createThreeDayElementC,
        showError, 
        showLoader, 
        hideLoader
    }
})();

export { dom }