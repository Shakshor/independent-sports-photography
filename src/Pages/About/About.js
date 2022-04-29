import React from 'react';
import './About.css';
import img from '../../../src/images/personal/personal.png'


const About = () => {
    return (
        <div className='self-area container'>
            <h2 className='text-center text-primary my-3 fw-bold fs-1 text-uppercase'>About Myself</h2>
            <div className='row self-section'>
                <div className="col-md-4 area-1">
                    <img className='text-center w-75 img-fluid' src={img} alt="" />
                </div>
                <div className="col-md-8 area-2">
                    <h3>I am Shakshor Sarker.</h3>
                    <p>I want to be a full-stack web developer. When i started this course, my goal was working at least 6-8 hours per day..At first it was very tough for me to be consistent.But i tried to try my best.Sometimes i couldn't follow the right path. I somehow learned that to be a good developer i should be consistent. So my goal is now to be honest with myself and work hard and to be consistent.</p>
                    <p>I want to work hard as much as possible for my goal. First i will set my mind and a fixed time hours. I will try heart and soul to be consistent. Because I understand that it is very important to be consistent. That's the small steps i must follow  to achieve my goal..</p>
                </div>

            </div>
        </div>
    );
};

export default About;