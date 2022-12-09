import React, { useEffect, useState } from 'react';
import './BookingCart.css';
import BookingCartDisplay from './BookingCartDisplay/BookingCartDisplay';

const BookingCart = (props) => {
    
    return (
        <div>
            <div className="">
                {
                    props.cart.map(index=><BookingCartDisplay 
                        index = {index}
                        key={index.id}
                        handleAddToBooking={props.handleAddToBooking}
                        decreaseBooking={props.decreaseBooking}
                    ></BookingCartDisplay>)
                }
            </div>
        </div>
    );
};

export default BookingCart;