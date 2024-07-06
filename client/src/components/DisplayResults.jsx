import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, ListGroup, Row, Col, Form } from 'react-bootstrap';

const DisplayResults = () => {
    const location = useLocation();
    const { waxes } = location.state || { waxes: [] };
    const [volume, setVolume] = useState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = volume / 100;
        }
    }, [volume]);

    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
    };

    return (
        <Container fluid className="mt-3">
            <h2 className="mb-3">Wax Recommendations</h2>
            <Row>
                <Col xs={12} md={2} className="mb-3 mb-md-0">
                    {waxes.length > 0 ? (
                        <ListGroup className="small-text">
                            {waxes.map((wax, index) => (
                                <ListGroup.Item key={index} className="p-2">
                                    <h6>{wax.name}</h6>
                                    <p className="mb-1">Temp: {wax.min_temperature}° - {wax.max_temperature}°</p>
                                    {wax.picture && <img src={`/skiWaxPics/${wax.image_path}`} alt={wax.name} className="img-fluid mb-2" />}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    ) : (
                        <p>No wax recommendations available</p>
                    )}
                </Col>
                <Col xs={12} md={10}>
                    <video
                        ref={videoRef}
                        width="100%"
                        height="auto"
                        autoPlay
                        loop
                        muted={volume === 0}
                        playsInline
                    >
                        <source src="/SalomonOriginalMusic.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <Form.Group className="mt-3">
                        <Form.Label>Volume</Form.Label>
                        <Form.Range
                            min="0"
                            max="100"
                            value={volume}
                            onChange={handleVolumeChange}
                        />
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    );
};

export default DisplayResults;