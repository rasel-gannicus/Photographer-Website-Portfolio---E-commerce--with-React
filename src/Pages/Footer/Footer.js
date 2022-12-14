import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
import facebookLogo from '../../Logo Icon/facebook.svg'
import facebookLogo2 from '../../Logo Icon/facebook (1).svg'

const Footer = () => {
    return (
        <div className='footer mt-5'>
            <div className="footer-upper"></div>
            <div className="footer-bottom">
                <div className="social-div fb-icon">
                    <span className='first-logo'><img src={facebookLogo} alt="" /></span>
                    <span className='second-logo'><img src={facebookLogo2} alt="" /></span>
                </div>
            </div>
        </div>
    );
};

export default Footer;