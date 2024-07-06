// TESTING
const axios = require('axios');
const API_KEY = process.env.GOOGLE_MAPS_API_KEY; // Replace with your actual API key

// Function to make geolocation request using location data from form getting coordinates in response
async function getCoordinates(location) {
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
            params: {
                address: location,
                key: API_KEY
            }
        });
        
        const data = response.data;

        // Log the full response data for debugging
        console.log('Geocoding API Response:', JSON.stringify(data, null, 2));

        if (!data || data.status !== 'OK' || !data.results || data.results.length === 0) {
            throw new Error('Could not find location at specified address');
        }

        const coordinates = data.results[0].geometry.location;
        return coordinates;
    } catch (error) {
        console.log('Error occurred while fetching coordinates:', error.message);
        throw new Error('Error occurred while fetching coordinates');
    }
}

module.exports = getCoordinates;






// // servicves/geoCodingService.js
// const API_KEY = 'AIzaSyD-RE8TGsbn7YSLce5FmHpr5gLFquGUL1E';
// const axios = require('axios');

// // function to make geolocation request using location data from form gettting coordinates in response
// async function getCoordinates(location) {

//     try {
//         const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=YOUR_${API_KEY}`);
//         const data = response;
//         if(!data || data.status === 'ZERO_RESULTS') {
//             throw new Error( 'Could not find location at specified address')
//         }
//         console.log(data.results)
//         const coordinates = data.results[0].geometry.location;
//         return coordinates;
//     } catch (error) {
//         console.log('error occured while fetching coordinates', error);
//         throw new Error( 'error occured while fetching coordinates' )
//   }

// } 

// module.exports = getCoordinates;