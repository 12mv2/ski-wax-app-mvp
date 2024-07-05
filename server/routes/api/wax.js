// routes/api/wax.js

const express = require('express'); 
const router = express.Router(); // creates a router to define the routes
const { getWaxRecommendation } = require('../../controllers/waxRecCont.js'); // import utility function to get coordinates from a location api

router.get('/hello', (req, res) => { // test route to see if server is running
  res.json({ message: 'Hello from the server!, server/routes/api' });
});

  // const { location, date, time } = req.body; // destructure
  router.post('/', getWaxRecommendation);

module.exports = router;

