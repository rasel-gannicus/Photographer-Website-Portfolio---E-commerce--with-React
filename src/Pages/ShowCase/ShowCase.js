import React from 'react';
import PortraitShowcase from './PortraitShowcase/PortraitShowcase';
import PotraitDisplay from './PotraitDisplay/PotraitDisplay';
import './ShowCase.css';
import StreetShowcase from './StreetShowcase/StreetShowcase';
import WeddingShowcase from './WeddingShowcase/WeddingShowcase';
import WildlifeShowcase from './WildlifeShowcase/WildlifeShowcase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import StreetDisplay from './StreetDisplay/StreetDisplay';
import WeddingDisplay from './WeddingDisplay/WeddingDisplay';
import WildDisplay from './WildDisplay/WildDisplay';
import { hidePopup, showPortrait, showStreet, showWedding, showWild } from '../../utilities/functions/functions';

const ShowCase = () => {

    return (
        <div className='container showCase-div mx-auto'>
            <h2 className='fw-bold my-5'>My Works</h2>
            <div className="row gx-0 gy-4 showcaseDiv-child h-100">
                <div onClick={showPortrait} draggable className="col-lg-6 h-100 clickable-div">
                    <div className="h-100 layer-parent">
                        <PortraitShowcase></PortraitShowcase>
                        <div className="layer">
                            <h1>Portrait <br /> Photography</h1>
                        </div>
                    </div>
                </div>
                <div onClick={showStreet} draggable className="col-lg-6 h-100 clickable-div">
                    <div className="h-100 layer-parent">
                        <StreetShowcase></StreetShowcase>
                        <div className="layer layer-2">
                            <h1>Street <br /> Photography</h1>
                        </div>
                    </div>
                </div>
                <div onClick={showWedding} draggable className="col-lg-6 h-100 clickable-div">
                    <div className="h-100 layer-parent">
                        <WeddingShowcase></WeddingShowcase>
                        <div className="layer layer-3">
                            <h1>Wedding <br /> Photography</h1>
                        </div>
                    </div>
                </div>
                <div onClick={showWild} draggable className="col-lg-6 h-100 clickable-div">
                    <div className="h-100 layer-parent">
                        <WildlifeShowcase></WildlifeShowcase>
                        <div className="layer layer-4">
                            <h1>Wildlife <br /> Photography</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/*-------------- Div for  Pop up display ---------------*/}
            <div className="showcase-popup-parent">
                {/*-------------- Div for Potrait photography works Pop up display ---------------*/}
                <div className="show-popup-portrait">
                    <PotraitDisplay></PotraitDisplay>
                    <div className="close-icons">
                        <span onClick={hidePopup} className='close-icon'><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon> </span>
                    </div>
                </div>

                {/*--------------------- Div for Street photography works Pop up display ---------------*/}
                <div className="show-popup-street">
                    <StreetDisplay></StreetDisplay>
                    <div className="close-icons">
                        <span onClick={hidePopup} className='close-icon'><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon> </span>
                    </div>
                </div>

                {/*--------------------- Div for Wedding photography works Pop up display ---------------*/}
                <div className="show-popup-wedding">
                    <WeddingDisplay></WeddingDisplay>
                    <div className="close-icons">
                        <span onClick={hidePopup} className='close-icon'><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon> </span>
                    </div>
                </div>

                {/*--------------------- Div for Wild photography works Pop up display ---------------*/}
                <div className="show-popup-wild">
                    <WildDisplay></WildDisplay>
                    <div className="close-icons">
                        <span onClick={hidePopup} className='close-icon'><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon> </span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ShowCase;