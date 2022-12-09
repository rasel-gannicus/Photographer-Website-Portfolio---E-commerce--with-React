import React, { useEffect, useState } from 'react';
import usePackages from '../../../../utilities/Hooks/usePackages';
import './BookingCart.css';
import {getBookingItems} from '../../../../utilities/Local Storage/bookings-storage'
import BookingCartDisplay from './BookingCartDisplay/BookingCartDisplay';
import useCart from '../../../../utilities/Hooks/useCart';

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