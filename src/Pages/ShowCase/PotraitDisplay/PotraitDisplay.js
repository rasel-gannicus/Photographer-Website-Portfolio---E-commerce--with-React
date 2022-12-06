import React from 'react';
import './PotraitDisplay.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PotraitDisplay = () => {
    return (
        <div className='portraitdiv-parent'>
            <h2>Show Potrait</h2>
            <Carousel>
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/gRcPr6d/tyler-nix-ZGa9d1a-4t-A-unsplash-1.jpg" />
                </div>                
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/qsFHB2f/umar-kashif-u0g-H1-D-GJw-E-unsplash-2.jpg" />
                </div>                
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/JRw7CcC/christopher-campbell-Cp-LUHPRp-WM-unsplash.jpg" />
                </div>                
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/3dctc3Y/umar-kashif-GTHf-D5-Xbk-Sw-unsplash.jpg" />
                </div>                
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/843HCxZ/albert-dera-ILip77-Sbm-OE-unsplash-1.jpg" />
                </div>                
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/XjysBcs/elijah-hiett-umfp-Fo-Kx-IVg-unsplash-1.jpg" />
                </div>                
            </Carousel>
        </div>
    );
};

export default PotraitDisplay;