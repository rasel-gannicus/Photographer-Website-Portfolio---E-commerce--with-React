import React, { useEffect, useState } from 'react';
import useCart from '../../utilities/Hooks/useCart';
import './BookingCart.css';
import BookingCartDisplay from './BookingCartDisplay/BookingCartDisplay';

const BookingCart = (props) => {
    
    return (
        <div>
            <h2>Booking Cart Here : {props.cart?.length}</h2>
            <div className="">
                {
                    props.cart.map(index=><BookingCartDisplay 
                        index = {index}
                        key={index.id}
                        handleAddToBooking={props.handleAddToBooking}
                    ></BookingCartDisplay>)
                }
            </div>
        </div>
    );
};

export default BookingCart;