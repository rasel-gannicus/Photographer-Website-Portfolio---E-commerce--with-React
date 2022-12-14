import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
import facebookLogo from '../../Logo Icon/facebook.svg'
import facebookLogo2 from '../../Logo Icon/facebook (1).svg'
import twitter from '../../Logo Icon/twitter (1).svg'
import twitter2 from '../../Logo Icon/twitter (3).svg'
import instagram from '../../Logo Icon/instagram.svg'
import instagram2 from '../../Logo Icon/instagram (1).svg'
import whatsapp from '../../Logo Icon/whatsapp.svg'
import whatsapp2 from '../../Logo Icon/whatsapp (1).svg'
import linkedIn from '../../Logo Icon/likedin.svg'
import linkedIn2 from '../../Logo Icon/likedin (1).svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-upper">
                <div className="social-div fb-icon">
                    <span className='first-logo'><img src={facebookLogo} alt="" /></span>
                    <span className='second-logo'><img src={facebookLogo2} alt="" /></span>
                </div>
                <div className="social-div fb-icon">
                    <span className='first-logo'><img src={twitter} alt="" /></span>
                    <span className='second-logo'><img src={twitter2} alt="" /></span>
                </div>
                <div className="social-div fb-icon">
                    <span className='first-logo'><img src={instagram} alt="" /></span>
                    <span className='second-logo'><img src={instagram2} alt="" /></span>
                </div>
                <div className="social-div fb-icon">
                    <span className='first-logo'><img src={whatsapp} alt="" /></span>
                    <span className='second-logo'><img src={whatsapp2} alt="" /></span>
                </div>
                <div className="social-div fb-icon">
                    <span className='first-logo'><img src={linkedIn} alt="" /></span>
                    <span className='second-logo'><img src={linkedIn2} alt="" /></span>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className='mb-0'>All Right &copy; Reserved By Shafiqul Hasan Russell </p>
            </div>
        </div>
    );
};

export default Footer;