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
            <div className="row gx-0 gy-4 showcaseDiv-child h-100">
                <div className="col-lg-6 h-100">
                    <div className="h-100 layer-parent">
                        <PortraitShowcase></PortraitShowcase>
                        <div className="layer">
                            <h1>Portrait <br /> Photography</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 h-100">
                    <div className="h-100 layer-parent">
                        <StreetShowcase></StreetShowcase>
                        <div className="layer layer-2">
                            <h1>Street <br /> Photography</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 h-100">
                    <div className="h-100 layer-parent">
                        <WeddingShowcase></WeddingShowcase>
                        <div className="layer layer-3">
                            <h1>Portrait <br /> Photography</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 h-100">
                    <div className="h-100 layer-parent">
                        <WildlifeShowcase></WildlifeShowcase>
                        <div className="layer">
                            <h1>Portrait <br /> Photography</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCase;