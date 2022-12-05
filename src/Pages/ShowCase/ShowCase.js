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
            <div className="row">
                <div className="col-lg-6 ">
                    <div className="">
                        <PortraitShowcase></PortraitShowcase>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="">
                        <StreetShowcase></StreetShowcase>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="">
                        <WeddingShowcase></WeddingShowcase>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="">
                        <WildlifeShowcase></WildlifeShowcase>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCase;