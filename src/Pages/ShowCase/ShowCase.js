import React from 'react';
import PortraitShowcase from './PortraitShowcase/PortraitShowcase';
import PotraitDisplay from './PotraitDisplay/PotraitDisplay';
import './ShowCase.css';
import ShowcasePopup from './ShowcasePopup/ShowcasePopup';
import StreetShowcase from './StreetShowcase/StreetShowcase';
import WeddingShowcase from './WeddingShowcase/WeddingShowcase';
import WildlifeShowcase from './WildlifeShowcase/WildlifeShowcase';

const ShowCase = () => {
    function showWorks() {
        let popupParent = document.querySelector('.showcase-popup-parent');
        let showPopPotrait = document.querySelector('.show-popup-portrait');

        popupParent.classList.add('active');
        showPopPotrait.classList.add('active');
    }
    return (
        <div className='container showCase-div mx-auto'>
            <h2 className='fw-bold my-5'>My Works</h2>
            <div className="row gx-0 gy-4 showcaseDiv-child h-100">
                <div onClick={showWorks} draggable className="col-lg-6 h-100 clickable-div">
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
                            <h1>Wedding <br /> Photography</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 h-100">
                    <div className="h-100 layer-parent">
                        <WildlifeShowcase></WildlifeShowcase>
                        <div className="layer layer-4">
                            <h1>Wildlife <br /> Photography</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="showcase-popup-parent">
                <div className="show-popup-portrait">
                    <PotraitDisplay></PotraitDisplay>
                </div>
            </div>
        </div>
    );
};

export default ShowCase;