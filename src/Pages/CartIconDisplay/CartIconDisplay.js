import { faBook ,faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartIconDisplay = (props) => {
    let navigation = useNavigate();
    function goToBookingPage(){
        let url = '/bookingCart';
        navigation(url);
    }
    let quantity = 0;
    props.cart.map(index=>{
        quantity = quantity + index.quantity;
    })

    let productQuantity = 0;
    props.basket.map(index=>{
        productQuantity = productQuantity + index.quantity;
    })
    console.log(props.basket);
    return (
        <div className="booking-cart-display-parent">
                <div draggable onClick={goToBookingPage} className="booking-cart-display">
                    <div className="booking-cart-number-parent">
                    <span><FontAwesomeIcon icon={faBook} /></span>
                        <p  className='booking-cart-number'>{quantity}</p>
                    </div>
                </div>
                <div draggable onClick={goToBookingPage} className="booking-cart-display mt-3">
                    <div className="booking-cart-number-parent">
                    <span><FontAwesomeIcon icon={faCartShopping} /></span>
                        <p  className='booking-cart-number'>{productQuantity}</p>
                    </div>
                </div>
            </div>
    );
};

export default CartIconDisplay;