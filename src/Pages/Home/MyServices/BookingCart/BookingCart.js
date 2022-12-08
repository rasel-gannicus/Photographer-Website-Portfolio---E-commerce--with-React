import React, { useEffect } from 'react';
import usePackages from '../../../../utilities/Hooks/usePackages';
import './BookingCart.css';
import {getBookingItems} from '../../../../utilities/Local Storage/bookings-storage'

const BookingCart = () => {
    const [packages, setPackages] = usePackages();
    
    useEffect(()=>{
        let items = getBookingItems();
        console.log(items);
    },[packages])
    return (
        <div>
            <h2>Booking Cart Here</h2>
        </div>
    );
};

export default BookingCart;