import React from 'react';
import './WeddingPackages.css';

const WeddingPackages = (props) => {
    const{id, packageCatagory, packageCatagoryName, cameraMan, duration, thumbImg, price} = props.index;
    return (
        <div className='mx-auto'>
            <div className="wedding-card ">
                <div className="wedding-card-upper">
                    <img src={thumbImg} alt="" />
                </div>
                <div className="wedding-card-lower ">
                    <div className="wedding-card-desc">
                        <h4>{packageCatagoryName}</h4>
                        <div className="package-main-feature">
                            <div className="package-main-feature-left">
                                <p>{cameraMan}</p>
                                <p>Camera Man</p>
                            </div>
                            <div className="package-main-feature-right">
                                <p>{duration}</p>
                                <p>Hours Shooting</p>
                            </div>
                        </div>
                        <div onClick={()=>props.handleAddToBooking(id)} draggable className="book-button">
                            <p>Add to Booking</p>
                        </div>
                    </div>
                {/* <div className="package-feature">
                    <div className="package-features">
                        <ul>
                            <li>Calendar Containing Wedding Photos</li>
                            <li>Diary Containing Your Wedding Photos</li>
                        </ul>
                    </div>
                </div> */}
                </div>
                <div className="wedding-card-icon border">
                    <div className="wedding-card-icon-inner">
                        <p>${price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeddingPackages;