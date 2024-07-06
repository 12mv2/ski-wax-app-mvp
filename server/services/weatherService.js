// services/weatherService.js
// making post request to weather api using coordinates from location helper and date + time from inputForm
const axios = require('axios');
const roundedHour = require('../utils/timeUtility');
const API_KEY = process.env.OPEN_WEATHER_API_KEY;
// require the variable that location helper got back
// const coordinates = 
async function getWeatherData(lon, lat, time) {
    const hour = roundedHour(time); console.log('hour: ', hour)
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall`, {
            params: { // paramaterization aka passing paramaters
                    lat, 
                    lon, 
                    exclude: 'current,minutely,daily,alerts', 
                    appid: API_KEY, 
                    units: 'imperial'
                    }
        })  
        console.log('complete weather data, response.data', response.data)
        const temperature = response.data.hourly[hour].temp;
        console.log('temperature line 19 getWeatherData service', temperature);// debugging
        return temperature;
        
    } catch (error) {
        console.log('error fetching weather data: ', error.message);
        throw error;
    }
}

module.exports = getWeatherData;

// usage
// getWeatherData(0.00, 0.00, 5)
// .then(temp => console.log('temperature: ', temp))
// .catch(err => console.log('error: ', err.messages))
// module.exports = forecast;
