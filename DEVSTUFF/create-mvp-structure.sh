#!/bin/bash

# Create root directory
mkdir ski-wax-app-mvp

# Create subdirectories
mkdir -p ski-wax-app-mvp/{public,src/{components,services,utils,styles}}

# Create files
touch ski-wax-app-mvp/public/{index.html,favicon.ico}
touch ski-wax-app-mvp/src/components/{HomePage.jsx,InputPage.jsx,WeatherDisplay.jsx,WaxRecommendation.jsx,NavBar.jsx}
touch ski-wax-app-mvp/src/services/weatherAPI.js
touch ski-wax-app-mvp/src/utils/waxCalculations.js
touch ski-wax-app-mvp/src/styles/{global.css,HomePage.css,InputPage.css,WaxRecommendation.css}
touch ski-wax-app-mvp/src/{App.jsx,index.js}
touch ski-wax-app-mvp/{.babelrc,.eslintrc.js,.gitignore,package.json,README.md,webpack.config.js}

echo "MVP project structure created in ski-wax-app-mvp/"
