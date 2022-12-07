import React from 'react';
import './WeddingService.css';

const WeddingService = () => {
    return (
        <div className='container'>
            <div className="wedding-card border">
                <div className="wedding-card-upper border">
                    <img src="https://i.ibb.co/YBKKKww/dollar-gill-T-PUQa-J8-YEw-unsplash-1.jpg" alt="" />
                </div>
                <div className="wedding-card-lower border">
                    <div className="wedding-card-desc">
                        <h4>Regular Package</h4>
                        <div className="package-main-feature">
                            <div className="package-main-feature-left">
                                <p>02</p>
                                <p>Camera Man</p>
                            </div>
                            <div className="package-main-feature-right">
                                <p>03</p>
                                <p>Hours Shooting</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wedding-card-icon border">
                    <div className="wedding-card-icon-inner">2</div>
                </div>
            </div>
        </div>
    );
};

export default WeddingService;