import React from 'react';
import usePackages from '../../../../utilities/Hooks/usePackages';
import './BookingCart.css';

const BookingCart = () => {
    const [packages, setPackages] = usePackages();
    return (
        <div>
            <h2>Booking Cart Here</h2>
        </div>
    );
};

export default BookingCart;