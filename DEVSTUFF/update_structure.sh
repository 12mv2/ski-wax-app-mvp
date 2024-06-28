#!/bin/bash

# Create new directory structure
mkdir -p client/public client/src/{components,services,styles} server/{db,models,routes}

# Move files to new locations
mv public/* client/public/ 2>/dev/null
mv src/* client/src/ 2>/dev/null
mv server.js server/index.js 2>/dev/null

# Move specific files
mv client/src/weatherAPI.js client/src/services/ 2>/dev/null
mv App.js client/src/ 2>/dev/null
mv index.js client/src/ 2>/dev/null

# Create empty files if they don't exist
touch client/public/index.html
touch client/src/App.js client/src/index.js
touch server/db/index.js server/models/{User.js,WaxHistory.js} server/routes/api.js server/index.js
touch .env

# Remove old empty directories
rmdir src public 2>/dev/null

echo "File structure updated!"
