#Dev notes for self and others

Front-end packages:

react
react-router-dom

Backend packages:

express
cors
dotenv

Development and build tools:

webpack
webpack-cli
webpack-dev-server
babel-loader
@babel/core
@babel/preset-env
@babel/preset-react
css-loader
style-loader
html-webpack-plugin
eslint
eslint-plugin-react
nodemon

Testing packages:

jest
@testing-library/react
@testing-library/jest-dom

--
npm init -y
npm install express cors dotenv
npm install --save-dev nodemon
--
backend / express server running and connected to a react component in the front
about to run webpack to get the front end react server running
webpack ran! port 5000 changed to 5001 as it kept reconnecting even when i killed it

-- 
2/7/2024
TTD 
    API Geocoding
        
    API Weather prediction
        find 
        setup token 
        send post and receive data
    db
        make model
        setup supabase or on local machine
        make READ of CRUD
        connect to api wax route
        
    api wax route
        send chosen wax to front end

    WaxRecommendation component / page
        render chosen wax info

--
repo bloated from past mp4 files I had in the public
cleaning by using BFG
git clone --mirror https://github.com/12mv2/ski-wax-app-mvp.git
cd ski-wax-app-mvp.git

Detailed Steps
Install Java
Download and Install Java:

Go to the Java download page and download the installer for your operating system.
Run the installer and follow the instructions to install Java.
Verify Java Installation:

Open a terminal and verify the installation:
sh
Copy code
java -version
Install and Use BFG Repo-Cleaner
Download BFG Repo-Cleaner:

Download the BFG JAR file:
sh
Copy code
wget https://repo1.maven.org/maven2/com/madgag/bfg/1.13.0/bfg-1.13.0.jar -O bfg.jar
Clone your repository with --mirror:

Clone the repository as a mirror:
sh
Copy code
git clone --mirror https://github.com/12mv2/ski-wax-app-mvp.git
cd ski-wax-app-mvp.git
Run BFG Repo-Cleaner:

Use Java to run the BFG tool:
Use BFG to clean large files:

Ensure you're in the root directory of your repository. Run the BFG command to remove MP4 files from the history:

sh
Copy code
java -jar bfg.jar --delete-files '*.mp4'
After running BFG, clean the repository:

sh
Copy code
cd ski-wax-app-mvp.git
git reflog expire --expire=now --all && git gc --prune=now --aggressive
cd ..
Force push the cleaned history:

sh
Copy code
git push --force --all
git push --force --tags
Remove the local node_modules and clean it up:

Ensure you remove the node_modules folder completely and update the git index:

sh
Copy code
rm -rf node_modules
git rm -r --cached node_modules
git commit -m "Remove node_modules from repository"
Ensure no MP4 files are present locally and commit the changes:

sh
Copy code
find . -name '*.mp4' -exec rm {} \;
git add -u
git commit -m "Remove MP4 files from repository"
Force push these changes as well:

sh
Copy code
git push --force
By following these steps, you should clean up your repository, remove the large files from the history, and ensure they are not tracked in the future.

--------
***********************
npm run dev

---
data working thru the geoLocation service but breaking at the weather service
Next steps are to debug why lon is not gettting to the weather service
--
data flowing and handled up to and including wax recommendation
hard coding in logic in place of db as of now

TTD: 
 make .env file and add api keys
- make postgreSQL supabase db
- make wax table, wax family table, join table 
- READ CRUD on db and pass back to controller
- pass db wax/waxes from controller to front end
- render waxes on front end

--

