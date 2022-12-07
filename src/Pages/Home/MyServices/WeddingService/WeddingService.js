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