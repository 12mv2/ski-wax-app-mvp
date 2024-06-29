// main server file / express application entry point
// setup express app and connect everytyhing together

const express = require('express')
const app = express()
const cors = require('cors'); // allows for cross origin requests
const PORT = process.env.PORT || 5001;
require('dotenv').config(); // so we cna use .env file

app.use(express.static('client/public')); // ensures express server can serve static files from the client/public directory
 
//import api routes
const apiRoutes  = require('./routes/api');

app.use(cors());    // enable cors so that app can communicate with server and external api
app.use(express.json()); // parses incoming requests with JSON payloads

// use api routes in the app if the url starts with /api
app.use('/api', apiRoutes);

// to check if server is running and returns hello world to the browser
app.get('/', (req, res) => {
  res.send('Hello World! from the express backend server main server file and express application entry point')
})

// starts serveer and designates port 
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})



