// controllers/waxRecCont.js
// uses services on form data to get wax recommendations 

const getCoordinates = require ('../services/geoCodingService');
const getWeatherData = require ('../services/weatherService');
const getWaxes = require ('../services/getWaxesFromDb');

async function getWaxRecommendation(req, res) {
    const { location, date, time } = req.body;
    try {
        console.log(`Fetching coordinates for ${location}`);
        const coordinates = await getCoordinates(location);
        const { lat, lon } = coordinates;
        console.log(`coordinates received-- lat: ${lat}, lon: ${lon}`);

        console.log(`Fetching temperature for--- lat: ${lat}, lon: ${lon}, date: ${date}, time: ${time}`);
        const temperature = await getWeatherData(lon, lat, time);
        console.log(`Temperature received- temp: ${temp}`);

        console.log(`Fetching wax/es from db for- temp: ${temp}`);
        const wax = await getWaxes(temperature);
        console.log(`Wax/es received: ${wax}`);
        
        res.json( { location, date, time, recommendation: wax})
    }   catch (error) {
        console.log('error fetching data from the waxRecCont controller', error);
        res.status(500).json( { error: 'error fetching data from teh waxRecCont controller' } )
    }
};

module.exports = { getWaxRecommendation } 

        

