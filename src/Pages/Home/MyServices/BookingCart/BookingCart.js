import React, { useEffect, useState } from 'react';
import usePackages from '../../../../utilities/Hooks/usePackages';
import './BookingCart.css';
import {getBookingItems} from '../../../../utilities/Local Storage/bookings-storage'
import BookingCartDisplay from './BookingCartDisplay/BookingCartDisplay';

const BookingCart = () => {
    const [packages, setPackages] = usePackages();
    
    let[cart, setCart] = useState([]);
    useEffect(()=>{
        let items = getBookingItems();
        let freshCart = [];
        for(let id in items){
            let addedProduct = packages.find(index=> index.id == id);
            if(addedProduct){
                addedProduct.quantity = items[id];
                freshCart.push(addedProduct);            
            }
            setCart(freshCart);
        }
    },[packages])
    console.log(cart);
    return (
        <div>
            <h2>Booking Cart Here : {cart?.length}</h2>
            <BookingCartDisplay></BookingCartDisplay>
        </div>
    );
};

export default BookingCart;