// APP.jsx 
// setup routes to render specific components based on the url
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // import react router
import HomePage from './HomePage'; // import Home component from components folder to render on home route
import WaxRecommendation from './WaxRecommendation'; // import WaxRecommendation component from components folder to render on wax recommendation route
import InputForm from './InputForm'; // import InputForm component from components folder to render on input route
import AppNavbar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


// App component that renders the home page and wax recommendation page based on the url
// define routes that render specific components based on the url
function App() {
  console.log('App component rendering');
  return (
    <div>
      <h1>App is loaded</h1>
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> // render the home page component on the home route
        <Route path="/recommendation" element= {<WaxRecommendation />} /> // render the wax recommendation component on the wax recommendation route 
        <Route path="/input" element= {<InputForm />} /> // render the input form component on the input route
      </Routes>
      <AppNavbar />
    </Router>
    </div>
  );
}

export default App;