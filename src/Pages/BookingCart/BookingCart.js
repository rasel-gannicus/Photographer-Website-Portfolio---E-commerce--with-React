import React, { useEffect, useState } from 'react';
import './BookingCart.css';
import BookingCartDisplay from './BookingCartDisplay/BookingCartDisplay';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus,faTrash } from '@fortawesome/free-solid-svg-icons';

const BookingCart = (props) => {
    
    return (
        <div>
            <div onClick={props.clearBookingAll} className="delete-booking-div">
                <p>Clear All</p>
                <span><FontAwesomeIcon icon={faTrash} /></span>
            </div>
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