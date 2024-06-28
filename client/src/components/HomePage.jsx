import React, { useState, useEffect } from 'react';

function HomePage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="HomePage">
      <h1>{message} //from server/routes/api route//</h1>
      <h2>Welcome to the home page! HomePage.jsx</h2>
      {/* Other home page content */}
    </div>
  );
}

export default HomePage;