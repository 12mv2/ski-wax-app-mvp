// input component form for user to input data

import React from 'react';
// useNavigate hook to navigate to different routes without using a link component
import { useNavigate } from 'react-router-dom';

// export default function to define a function component in React, it creates a React component that can render UI elements, including a form with input fields for user data input

function InputForm() {
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();  // prevent browser from reloadin page
        const formData = new FormData(e.target); // read form data, create a new FormData object from the form element
        const location = formData.get('location'); // get the value of the location input field
        const date = formData.get('date'); // get the value of the date input field
        
        // navigate to the wax recommendation pade with the location and date as query parameters

        try {
            const response = await fetch('/api/wax-recommendation', { 
                method: 'POST',
                headers: {
                    contentType: 'application/json', // set content type header to application/json to send JSON data
                },
                body: JSON.stringify({ location, date }), // convert the location and date to a JSON string and send it as the request body
                });

            if (response.ok) {
                const data = await response.json(); // parse the JSON response
                // navigate to the wax recommendation page with (data) the location and date as query parameters
                navigate('recommendation', { state : { waxData : data } }); // with waxData as the state
            } else {
                // error handling
                console.error('Failed to retriece wax recommendation data from the server');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }
    // return a form element with input fields for location and date, and a submit button
    return (
        <form onSubmit = {handleSubmit}> // call handleSubmit fundction when form is submitted
            <input name = 'location' type = 'text' placeholder = 'Location' required /> 
            <input name = 'date' type = 'date' required /> 
            <button type = 'submit'>Get wax recommendation</button>
        </form>
    )
}

export default InputForm; 
