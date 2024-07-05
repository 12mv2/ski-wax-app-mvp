// waxRecCont.js 
// controller for middleware having to do with weather
// It uses services / middleware and client input form data to first get coordinates based on location, then temperateure based on coordinates and hour, responds to a post request on the routes/api/weather route
// handles errors with try catch and next

const getWeatherData = require('../services/weatherService.js') 
const getCoordinates = require('../services/geoCodingService.js')

module.exports = { 
    getWeatherForecast : async(req, res, next) => {
    try {
        // extract query parameters
        const { location, date, time, hour } = req.query; 

        // Get coordinates for given location
        const coordinates = await getCoordinates(location);

        // Get temperature for given coordinates and hour
        const temperature = await getWeatherData(coordinates, hour);     

        // prepare and send response
        response = {
            temperature: temperature,
            coordinates: coordinates,
            date: date,
            time: time,
            hour: hour
        }
        // save to locals then use next
        res.json(response);

    // handle errors and pass to error handling middleware
    } catch (error) {
        console.error('error in the weatherController controller: ', error);
        next(error);
    }
}
}    

        

        

        

