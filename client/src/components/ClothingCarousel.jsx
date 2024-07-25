import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

const ClothingCarousel = ({ temperature }) => {
    const [clothing, setClothing] = useState([]);
    const [topIndex, setTopIndex] = useState(0);
    const [bottomIndex, setBottomIndex] = useState(0);

    useEffect(() => {
        const fetchClothing = async () => {
            try {
                const response = await axios.get('/api/clothing', {
                    params: { temperature }
                });
                setClothing(response.data);
            } catch (error) {
                console.error('Error fetching clothing data', error);
            }
        };

        fetchClothing();
    }, [temperature]);

    const handleSelectTop = (selectedIndex) => {
        setTopIndex(selectedIndex);
    };

    const handleSelectBottom = (selectedIndex) => {
        setBottomIndex(selectedIndex);
    };

    const topClothing = clothing.filter(item => item.type === 'top');
    const bottomClothing = clothing.filter(item => item.type === 'bottom');

    return (
        <div>
            <h2>Clothing Recommendations</h2>
            <div className="clothing-carousel">
                <div className="video-section">
                    {topClothing[topIndex]?.top_video_url && (
                        <video width="320" height="240" controls>
                            <source src={`/public/${topClothing[topIndex].top_video_url}`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                    {bottomClothing[bottomIndex]?.bottom_video_url && (
                        <video width="320" height="240" controls>
                            <source src={`/public/${bottomClothing[bottomIndex].bottom_video_url}`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
                <Carousel activeIndex={topIndex} onSelect={handleSelectTop} indicators={false}>
                    {topClothing.map((item, idx) => (
                        <Carousel.Item key={item.id}>
                            <img className="d-block w-100" src={item.top_image_url} alt={item.name} />
                            <Carousel.Caption>
                                <h3>{item.name}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
                <Carousel activeIndex={bottomIndex} onSelect={handleSelectBottom} indicators={false}>
                    {bottomClothing.map((item, idx) => (
                        <Carousel.Item key={item.id}>
                            <img className="d-block w-100" src={item.bottom_image_url} alt={item.name} />
                            <Carousel.Caption>
                                <h3>{item.name}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default ClothingCarousel;
