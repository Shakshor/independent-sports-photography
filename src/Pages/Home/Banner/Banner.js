import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner3 from '../../../images/banner/soccer3.avif';
import banner2 from '../../../images/banner/sprint-min.jpg';
import banner1 from '../../../images/banner/swimmer-min.jpg';
import './Banner.css';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className='banner-area'>
            <Carousel.Item>
                <img
                    className="d-block img-fluid w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className=' my-md-5 my-sm-2'>
                    <h3>Sink Or Swim</h3>

                    <p>Swimming as an exercise is popular as an all-around body developer and is particularly useful in therapy and as exercise for physically handicapped persons.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption className='my-md-5 my-sm-2'>
                    <h3>No Pain. No Gain</h3>
                    <p>Better Sleep. A Strong Heart. Improved Lung Function. Increased Confidence. Reduces Stress. Improve Mental Health</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption className='my-md-5 my-sm-2'>
                    <h3>Let The Feet Do The Talking</h3>
                    <p>
                        Football is the world's most popular ball game in numbers of participants and spectators. Simple in its principal rules and essential equipment, the sport can be played almost anywhere, from official football playing fields (pitches) to gymnasiums, streets, school playgrounds, parks, or beaches.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;