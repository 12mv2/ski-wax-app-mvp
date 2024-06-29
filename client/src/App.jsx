// setup routes to render specific components based on the url
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // import react router
import HomePage from './HomePage'; // import Home component from components folder to render on home route
import WaxRecommendation from './WaxRecommendation'; // import WaxRecommendation component from components folder to render on wax recommendation route

// App component that renders the home page and wax recommendation page based on the url
// define routes that render specific components based on the url
function App() {
  return (
    <Router>
      <switch>
        <Route exact path="/" component={HonePage} /> 
        <Route path="/wax-recommendation" component={WaxRecommendation} />
      </switch>
    </Router>
  );
}