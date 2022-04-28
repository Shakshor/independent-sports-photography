import React from 'react';
import './Footer.css';
import { FaFacebook } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';

const Footer = () => {
    return (
        <div className='container my-5'>
            <div className="row   footer-area">
                <div className="col-md-4 footer-item">
                    <h4 className='text-uppercase 
                    mb-2 text-warning'>Help</h4>
                    <ul>
                        <li><a href='#services'>Services</a></li>
                    </ul>

                </div>
                <div className="col-md-4 footer-item">
                    <h4 className='text-uppercase mb-2 text-warning'>Follow </h4>
                    <ul>
                        <li><a href='#'><FaFacebook /></a></li>
                        <li><a href='#'><FaEnvelope /></a></li>
                    </ul>
                </div>
                <div className="col-md-4 footer-item">
                    <h4 className='text-uppercase mb-2 text-warning'>Contact</h4>
                    <ul>
                        <li><FaPhone></FaPhone>01580293626</li>
                        <li><GoLocation></GoLocation>Uttar Baluchor.Sylhet</li>
                        <li></li>
                    </ul>
                </div>
                <p className='text-center'><small>SPHOTOGRAPHY &copy;{new Date().getFullYear()} copyrights preserved..</small></p>
            </div>


        </div>
    );
};

export default Footer;