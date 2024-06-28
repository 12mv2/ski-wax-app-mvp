// this file will contain all the routes for the API, which will be used to interact with the server, and the client/src/index.js file, which will contain the routes for the client-side application.
// exports a router with my api routes
const express = require('express'); 
const router = express.Router();

router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from the server!, server/routes/api' });
});

// Other routes...

module.exports = router;