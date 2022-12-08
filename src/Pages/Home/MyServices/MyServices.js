import React, { useEffect, useState } from 'react';
import { addToBookingDb } from '../../../utilities/Local Storage/bookings-storage';
import './MyServices.css';
import WeddingPackages from './WeddingPackages/WeddingPackages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const MyServices = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/shafik720/rest-api/main/photographer-package.json')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    let [booking, setBooking] = useState([]);
    function handleAddToBooking(id) {
        addToBookingDb(id);
        let booked = [];
        booked = [...booking, id];
        setBooking(booked);
    }
    useEffect(() => {
        let bookingCartNumber = document.querySelector('.booking-cart-number');
        bookingCartNumber.innerText = booking.length;
    }, [booking])
    return (
        <div className=' myServices-div my-5 mx-auto border'>
            <h2>My Services</h2>
            {/* <WeddingService></WeddingService> */}
            <div className="wedding-packages-div">
                {
                    packages.map(index => <WeddingPackages
                        index={index}
                        key={index.id}
                        handleAddToBooking={handleAddToBooking}
                    ></WeddingPackages>)
                }
            </div>
            <div className="booking-cart-display-parent">
                <div className="booking-cart-display">
                    <div className="booking-cart-number-parent">
                    <span><FontAwesomeIcon icon={faBook} /></span>
                        <p  className='booking-cart-number'></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyServices;