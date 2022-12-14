import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
import facebookLogo from '../../Logo Icon/facebook.svg'

const Footer = () => {
    return (
        <div className='footer mt-5'>
            <div className="footer-upper"></div>
            <div className="footer-bottom">
                <div className="social-div fb-icon">
                    <span><img src={facebookLogo} alt="" /></span>
                </div>
            </div>
        </div>
    );
};

export default Footer;