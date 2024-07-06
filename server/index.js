// main server file / express application entry point
// setup express app and connect everytyhing together
require('dotenv').config(); // dotenv looks for .env, config parses from .env into an object process.env

const express = require('express')
const cors = require('cors'); // allows for cross origin requests
const path = require('path');
require('dotenv').config(); // so we cna use .env file
      
const app = express()
const PORT = process.env.PORT || 5001;

app.use(express.static(path.join(__dirname, '..client/build'))); // ensures express server can serve static files from the client/public directory

app.use(cors()); // enable cors so that app can communicate with server and external api
app.use(express.json()); // parses incoming requests with JSON payloads
 
const waxApiRoutes = require('./routes/api/wax') //import api routes to route to the wax api routes

app.use('/api/wax', waxApiRoutes); // this directs all calls to teh api/wax to the waxApiRoutes

app.get('/', (req, res) => { // chacks if server is running
  res.send('Hello World! from the express backend server main server file and express application entry point')
})

// Catch-all handler to serve the React app for any other request, and send back the main index.html file so that the client-side application can be loaded
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

// starts serveer and designates port 
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})



