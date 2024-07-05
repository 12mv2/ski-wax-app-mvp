// services/weatherService.js
// making post request to weather api using coordinates from location helper and date + time from inputForm
const axios = require('axios');
const API_KEY = 'd8ab23e9a5dcb795ca44d4cf563807cd';
// require the variable that location helper got back
// const coordinates = 
async function getWeatherData(lon, lat, hour) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall`, {
            // paramaterization aka passing paramaters
            params: { 
                    lat, 
                    lon, 
                    exclude: 'current,minutely,daily,alerts', 
                    appid: API_KEY  
                    }
    })  
    
        return response.data.hourly[hour].temp;
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
