const API_KEY = 'AIzaSyDyWVc8TOqRJl7lgVHZ2SpvXm_FCOLqeXo';

const axios = require('axios');

// function to make geolocation request using location data from form gettting coordinates in response
async function getCoordinates(location) {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=YOUR_${API_KEY}`);

    const data = response;

    if(!data || data.status === 'ZERO_RESULTS') {
        const error = new error(// http error 'Could not find location at specified address' status 422)
        
        );
        throw error;
    }
    const coordinates = data.results[0].geometry.location;

    return coordinates;
} 

module.exports = getCoordinates;