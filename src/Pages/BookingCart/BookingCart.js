import React, { useEffect, useState } from 'react';
import useCart from '../../utilities/Hooks/useCart';
import './BookingCart.css';
import BookingCartDisplay from './BookingCartDisplay/BookingCartDisplay';

const BookingCart = () => {
    let [cart, setCart] = useCart();
    console.log(cart);
    return (
        <div>
            <h2>Booking Cart Here : {cart?.length}</h2>
            <div className="">
                {
                    cart.map(index=><BookingCartDisplay 
                        index = {index}
                        key={index.id}
                    ></BookingCartDisplay>)
                }
            </div>
        </div>
    );
};

export default BookingCart;