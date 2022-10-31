import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import p1 from '../../../assests/brands/p1.JPG';
import p2 from '../../../assests/brands/p2.JPG';

const BrandCarousal = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={p1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={p2}
                        alt="Second slide"
                    />


                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default BrandCarousal;