// src.index.js
// import react and react dom, renders the App component to the root element in the index.html file
// render root component to the DOM

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


