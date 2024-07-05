// routes/api/weather.js
// Remove the temporary logic for wax recommendations from the route file.
// Import and use the weather controller we've created.
// Simplify the route handlers to delegate most of the logic to the controller.

// this file will contain all the routes for the API, which will be used to interact with the server, and the client/src/index.js file, which will contain the routes for the client-side application.
// exports a router with my api routes
const express = require('express'); 
const router = express.Router();
const weatherController = require('../../controllers/waxRecCont.js');

router.get('/', weatherController.getWeatherForecast);





// router.get('/hello', (req, res) => {
//   res.json({ message: 'Hello from the server!, server/routes/api' });
// });

// // POST request from InputForm.jsx // this route will be used to get the wax recommendations from the server 
// router.post('/', async(req, res, next) => {

//   const { location, date, time } = req.body;

//   // use getCoordinates helper 
//   const coordinates = await getCoordinates(location);

//     try {
//       // dynamically import node-fetch
//       // const fetch = (await import('node-fetch')).default;
//       // // call the weather API
//       // const weatherResponse = await fetch( `weather_api_url?location=${location}&date=${date}&time={time}&appid=weather_api_key` );  
//       let temperature = 30;
//       let waxRecommendation;
      
//       // if(!weatherResponse.ok) {
//       //   throw new Error('Error fetching weather data');
//       // }

//       // const weatherData = await weatherResponse.json();
//       // const temperature = weatherData.main.temp; // may need to setup, just making up at this point



//       // Send Recommendation back to client
//       res.json( { location, date, time, recommendation: waxRecommendation } )

//         } catch (error) {
//           console.log('Error fetching weather data:', error)
//           return next(error)
//         }
// });


// module.exports = router;

