import React from 'react';
import './Footer.css';
import { FaFacebook } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';

const Footer = () => {
    return (
        <div className='container-fluid  mt-5'>
            <div className="row footer-area">
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
                        <li><a target='_blank' href='https://www.facebook.com/'><FaFacebook /></a></li>
                        <li><a target='_blank' href='https://www.shakshor@gmail.com'><FaEnvelope /></a></li>
                    </ul>
                </div>
                <div className="col-md-4 footer-item">
                    <h4 className='text-uppercase mb-2 text-warning'>Contact</h4>
                    <ul>
                        <li><FaPhone style={{ 'marginRight': '10px' }}></FaPhone>01580293626</li>
                        <li><GoLocation style={{ 'marginRight': '10px' }}></GoLocation>Uttar Baluchor.Sylhet</li>
                        <li></li>
                    </ul>
                </div>
                <hr />
                <p className='text-center'><small>SPHOTOGRAPHY &copy;{new Date().getFullYear()} copyrights preserved..</small></p>
            </div>

        </div>
    );
};

export default Footer;