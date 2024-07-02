// home page 

import React from 'react';

function HomePage () {
    return (
        <div>
            <h1>Welcome to Ski Wax App</h1>
            <video width="600" autoPlay loop muted>
                <source src = "/SalomonSupershortA.mp4" type = "video/mp4" /> 
            </video>
            {/* input form component */}
        </div>
    )
}

// export Home component
export default HomePage;
