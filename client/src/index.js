import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

console.log('index.js file rendering');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// front end entry point, imports the App component and renders it to the root element in the index.html file, renders root component to the DOM

// client/src/components/index.js

