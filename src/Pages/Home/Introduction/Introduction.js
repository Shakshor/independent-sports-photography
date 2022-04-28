import React from 'react';
import './Introduction.css';
import img from '../../../images/personal/photographer.jpg';


const Introduction = () => {
    return (
        <section className='introduction-area'>
            <div className="introduction-details">
                <h1 className='introduction-title'>With my camera<br></br>I capture Moments.</h1>
                <p>I am Shakshor. I am a professional photographer. I love photography. I am from Bangladesh.</p>
            </div>
            <div className="introduction-pic">
                <img src={img} alt="" />
            </div>
        </section>
    );
};

export default Introduction;