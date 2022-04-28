import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    // set the state for services
    const [services, setServices] = useState([]);

    // load the data
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return (
        <div id='services' className='container'>
            <div className="row">
                <h2 className='text-center text-primary py-5'>Services</h2>
                <div className="services-container">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Services;