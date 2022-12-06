import React from 'react';
import './PotraitDisplay.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PotraitDisplay = () => {
    return (
        <div className='portraitdiv-parent'>
            <h2>Show Potrait</h2>
            <Carousel>
                <div className='carousel-img-div border border-3'>
                    <img src="https://i.ibb.co/zFF2s3G/robbie-down-f3vw-AXn7pgg-unsplash-1.jpg" alt=''/>
                </div>                
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/mCmYHqm/taylor-QPOFrbtoy-OQ-unsplash-1.jpg" alt=''/>
                </div>                
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/z4ZW13j/bekah-allmark-Qt0og-Pnh-GWY-unsplash-1.jpg" alt=''/>
                </div>                
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/mykk3S4/elijah-hiett-umfp-Fo-Kx-IVg-unsplash-2-1.jpg" alt=''/>
                </div>                
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/L1wbTcn/albert-dera-ILip77-Sbm-OE-unsplash-3-1.jpg" alt=''/>
                </div>                
            </Carousel>
        </div>
    );
};

export default PotraitDisplay;