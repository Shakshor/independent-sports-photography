import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, text, price } = service;

    const navigate = useNavigate();

    const navigateToCheckout = id => {
        navigate(`/service/${id}`)
    }

    return (
        <div className='service'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>price:{price}</p>
            <p className='service-text'><small>{text}</small></p>
            <button onClick={() => navigateToCheckout(id)} className='btn btn-primary'>Check Details</button>
        </div>
    );
};

export default Service;