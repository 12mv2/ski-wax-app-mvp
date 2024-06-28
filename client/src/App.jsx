// fetch data from srver client/src/a

import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
      <h2>from App.jsx</h2>
    </div>
  );
}

export default App;