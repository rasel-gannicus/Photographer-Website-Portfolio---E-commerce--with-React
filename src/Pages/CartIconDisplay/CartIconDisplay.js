import { faBook, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CartIconDisplay.css';

const CartIconDisplay = (props) => {
    // this function will move user to 'Booking cart' page 
    let navigation = useNavigate();
    function goToBookingPage() {
        let url = '/bookingCart';
        navigation(url);
    }
    // this will show 'Package Cart' Quantity 
    let quantity = 0;
    props.cart.map(index => {
        quantity = quantity + index.quantity;
    })

    // this will show 'Product Cart' Quantity 
    let productQuantity = 0;
    props.basket.map(index => {
        productQuantity = productQuantity + index.quantity;
    })
    // this function will move user to 'Product cart' page 
    function goToProductCartPage() {
        let url = '/productCart';
        navigation(url);
    }
    return (
        <div className="booking-cart-display-parent">
            <div className="booking-cart-display-parent-one">
                <div draggable onClick={goToBookingPage} className="booking-cart-display">
                    <div className="booking-cart-number-parent">
                        <span><FontAwesomeIcon icon={faBook} /></span>
                        <p className='booking-cart-number'>{quantity}</p>
                    </div>
                </div>

            </div>
            <div className="booking-cart-display-parent-two ">
                <div draggable onClick={goToProductCartPage} className="booking-cart-display mt-3">
                    <div className="booking-cart-number-parent">
                        <span><FontAwesomeIcon icon={faCartShopping} /></span>
                        <p className='booking-cart-number'>{productQuantity}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CartIconDisplay;