// InputForm component to render a form with input fields for the user to enter the location, date, and time of their ski trip. The form has a submit button that sends the data to the back-end server to get the wax recommendation. The component uses the useState hook to manage the state of the location, date, time, and wax recommendation. The component uses the useNavigate hook to navigate to the wax recommendation page with the wax recommendation as a query parameter.

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // to access search property 
import { Container, Form, Button } from 'react-bootstrap';

const InputForm = () => {
  const [location, setLocation] = useState(''); // useState hook to hook into the state of the location
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [recommendation, setRecommendation] = useState('no recommendation yet'); // to store the wax recommendation
  const [error, setError] = useState(null); // to store error messages
  const navigate = useNavigate(); // hook being used ot navigate to the wax recommendation page
  
  const handleSubmit = async (e) => { // async function to handle form submission
    e.preventDefault(); // prevent the default form submission
    console.log(location, date, time);

    try {
      const response = await fetch('/api/wax', { // fetch to the back end server to get the wax recommendation
        method: 'POST',
        headers: { // set the headers to send JSON data
          'Content-Type': 'application/json'  // set content type header to application/json to send JSON data
            },
            body: JSON.stringify({ location, date, time }) // convert the location and date to a JSON string and send it as the request body
      })
      if (!response.ok) {
        throw new Error(`error status: ${response.status}`); 
      }
      const data = await response.json();
      console.log(`success! this data is in response to inputForm data sent: ${data}`);
      setRecommendation(data.recommendation);
      navigate('/results', { state: { waxes : data.recommendation }}); // NAVIGATE TO THE RESULTS PAGE WITH THE WAX RECOMMENDATIONS
      setError(null);
      } catch(error) {
      console.error(`error: ${error}`)
      setError('Failed to retrieve wax recommendation data'); // set / store the error message in state
      }
    };

  return (
    <Container className="mt-5">
      <h2>Enter Your Ski Details</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTime">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default InputForm;






// // input component form for user to input data

// import React from 'react';
// // useNavigate hook to navigate to different routes without using a link component
// import { useNavigate } from 'react-router-dom';

// // export default function to define a function component in React, it creates a React component that can render UI elements, including a form with input fields for user data input

// function InputForm() {
//     const navigate = useNavigate();

//     async function handleSubmit(e) {
//         e.preventDefault();  // prevent browser from reloadin page
//         const formData = new FormData(e.target); // read form data, create a new FormData object from the form element
//         const location = formData.get('location'); // get the value of the location input field
//         const date = formData.get('date'); // get the value of the date input field
//         const time = formData.get('time'); // get the time from the input field
        
//         // navigate to the wax recommendation pade with the location and date as query parameters

//         try {
//             const response = await fetch('/api/wax', { // make a POST request to the server with the location and date as the request body at the /api/waxApiRoutes endpoint
//                 method: 'POST',
//                 headers: {
//                     contentType: 'application/json', // set content type header to application/json to send JSON data
//                 },
//                 body: JSON.stringify({ location, date }), // convert the location and date to a JSON string and send it as the request body
//                 });

//             if (response.ok) {
//                 const data = await response.json(); // parse the JSON response
//                 // navigate to the wax recommendation page with (data) the location and date as query parameters
//                 navigate('recommendation', { state : { waxData : data } }); // with waxData as the state
//             } else {
//                 // error handling
//                 console.error('Failed to retriece wax recommendation data from the server');
//             }
//         } catch (error) {
//             console.log('Error:', error);
//         }
//     }
//     // return a form element with input fields for location and date, and a submit button
//     return (
//         <form onSubmit = {handleSubmit}> // call handleSubmit when form is submitted
//             <input name = 'location' type = 'text' placeholder = 'Location' required /> 
//             <input name = 'date' type = 'date' required /> 
//             <input name = 'time' type = 'time' required />
//             <button type = 'submit'>Get wax recommendation</button>
//         </form>
//     )
// }

// export default InputForm; 
