// server/index.js
// main server file / express application entry point
// setup express app and connect everytyhing together

const express = require('express')
const path = require('path');
const cors = require('cors'); // allows for cross origin requests
require('dotenv').config(); // so we cna use .env file

const app = express()
const PORT = process.env.PORT || 5001;

app.use(cors());    // enable cors so that app can communicate with server and external api
app.use(express.json()); // parses incoming requests with JSON payloads
app.use(express.static(path.join(__dirname, '../client/build'))); // ensures express server can serve static files from the client/public directory

//import api routes
// const apiRoutes  = require('./routes/api/clothing');
const waxApiRoutes = require('./routes/api/wax')

// use api routes in the app if the url starts with /api
app.use('/api/wax', waxApiRoutes);

// to check if server is running and returns hello world to the browser
// app.get('/', (req, res) => {
//   res.send('Hello World! from the express backend server main server file and express application entry point')
// })

// catch all 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

// starts serveer and designates port 
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})



