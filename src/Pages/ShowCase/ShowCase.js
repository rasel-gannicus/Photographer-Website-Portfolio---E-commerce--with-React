import React from 'react';
import PortraitShowcase from './PortraitShowcase/PortraitShowcase';
import './ShowCase.css';
import StreetShowcase from './StreetShowcase/StreetShowcase';
import WeddingShowcase from './WeddingShowcase/WeddingShowcase';
import WildlifeShowcase from './WildlifeShowcase/WildlifeShowcase';

const ShowCase = () => {
    return (
        <div className='container showCase-div border mx-auto'>
            <h2>ShowCase here</h2>
            <div className="row gx-0 gy-4 showcaseDiv-child">
                <div className="col-lg-6 ">
                    <div className="h-100">
                        <PortraitShowcase></PortraitShowcase>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="h-100">
                        <StreetShowcase></StreetShowcase>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="h-100">
                        <WeddingShowcase></WeddingShowcase>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="h-100">
                        <WildlifeShowcase></WildlifeShowcase>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCase;