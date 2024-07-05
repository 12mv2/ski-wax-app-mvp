// home page 

import React from 'react';

function HomePage () {
    console.log('HomePage component rendering');
    return (
        <div>
            <h1>Welcome to Ski Wax App</h1>
            <video width="600" autoPlay loop muted>
                <source src = "/SalomonOriginalMusic.mp4" type = "video/mp4" /> 
            </video>
        </div>
    )
}

// export Home component
export default HomePage;
