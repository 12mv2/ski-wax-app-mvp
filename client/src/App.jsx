// setup routes to render specific components based on the url
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // import react router
import HomePage from './components/HomePage'; // import Home component from components folder to render on home route
import WaxRecommendation from './components/WaxRecommendation'; // import WaxRecommendation component from components folder to render on wax recommendation route

// App component that renders the home page and wax recommendation page based on the url
// define routes that render specific components based on the url
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} /> // render the home page component on the home route
        <Route path="/recommendation" element= {<WaxRecommendation />} /> // render the wax recommendation component on the wax recommendation route 
      </Routes>
    </Router>
  );
}

export default App;