// HomePage component

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col>
          <h1>Welcome to the Ski Wax App</h1>
          <p>This app helps you choose the best ski wax based on the weather conditions.</p>
          <video width={600} autoPlay loop muted 
            source src="/SalomonOriginalMusic.mp4" type="video/mp4" />
          <Button href="/input" variant="primary">Get Started</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;




// // home page 

// import React from 'react';

// function HomePage () {
//     console.log('HomePage component rendering');
//     return (
//         <div>
//             <h1>Welcome to Ski Wax App</h1>
//             <video width="600" autoPlay loop muted>
//                 <source src = "/SalomonOriginalMusic.mp4" type = "video/mp4" /> 
//             </video>
//         </div>
//     )
// }

// // export Home component
// export default HomePage;
