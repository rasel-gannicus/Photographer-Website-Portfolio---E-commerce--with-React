import React, { useEffect, useState } from 'react';
import { addToBookingDb } from '../../../utilities/Local Storage/bookings-storage';
import './MyServices.css';
import WeddingPackages from './WeddingPackages/WeddingPackages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import usePackages from '../../../utilities/Hooks/usePackages';

const MyServices = (props) => {
    const [packages, setPackages] = usePackages();  
    
    return (
        <div className=' myServices-div my-5 mx-auto '>
            <h2>My Services</h2>
            <div className="wedding-packages-div">
                {
                    packages.map(index => index.mainCatagory == 'wedding' && <WeddingPackages
                        index={index}
                        key={index.id}
                        handleAddToBooking={props.handleAddToBooking}
                    ></WeddingPackages>)
                }
            </div>
            <div className="portrait-packages-div">
                {
                    packages.map(index => index.mainCatagory == 'wedding' && <WeddingPackages
                        index={index}
                        key={index.id}
                        handleAddToBooking={props.handleAddToBooking}
                    ></WeddingPackages>)
                }
            </div>
        </div>
    );
};

export default MyServices;