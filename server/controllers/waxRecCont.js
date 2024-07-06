// controllers/waxRecCont.js
// uses services on form data to get wax recommendations 

const getCoordinates = require ('../services/geoCodingService');
const getWeatherData = require ('../services/weatherService');
const getWaxes = require ('../services/getWaxesFromDb');
const getWaxesByTemperature = require('../services/getWaxesFromDb');

async function getWaxRecommendation(req, res) {
    const { location, date, time } = req.body;
    try {

        console.log(`Fetching coordinates for ${location}`);
        const coordinates = await getCoordinates(location);
        const { lat, lng } = coordinates;
        console.log(`coordinates received-- lat: ${lat}, lon: ${lng}`);

        console.log(`Fetching temperature for--- lat: ${lat}, lon: ${lng}, date: ${date}, time: ${time}`);
        const temperature = await getWeatherData(lng, lat, time);
        console.log(`Temperature received- temp: ${temperature}`);

        console.log(`Fetching wax/es from db for- Math.round(temperateure): ${Math.round(temperature)}`);
        const wax = await getWaxesByTemperature(Math.round(temperature));
        console.log(`Wax/es received: ${JSON.stringify(wax, null, 4)}`);

        res.json( { location, date, time, recommendation: wax})
    }   catch (error) {
        console.log('error fetching data from the waxRecCont controller', error);
        res.status(500).json( { error: 'error fetching data from teh waxRecCont controller' } )
    }
};

module.exports = { getWaxRecommendation } 

        

