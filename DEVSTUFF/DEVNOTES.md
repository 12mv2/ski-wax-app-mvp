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
sh
Copy code
java -jar /path/to/bfg.jar --delete-files '*.mp4'
Clean the repository:

Run Git commands to clean up the repository:
sh
Copy code
git reflog expire --expire=now --all
git gc --prune=now --aggressive
Push the changes to GitHub:

Force push the cleaned repository:
sh
Copy code
git push --force
By following these steps, you should be able to remove the large .mp4 files from your repository's history and push the cleaned repository to GitHub. If you encounter any issues, please let me know!

