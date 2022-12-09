import React from 'react';
import './BookingCartDisplay.css';

const BookingCartDisplay = (props) => {
    const { packageCatagoryName, cameraMan, duration, thumbImg } = props.index;
    return (
        <div>
            <div className="cart-card">
                <div className="cart-card-left">
                    <div className="cart-left-img">
                        <img src={thumbImg} alt="" />
                    </div>
                    <div className="cart-left-desc">
                        <p>Plan : {packageCatagoryName} </p>
                    </div>
                </div>
                <div className="cart-card-right">
                    <h4>Quantity</h4>
                </div>
            </div>
        </div>
    );
};

export default BookingCartDisplay;