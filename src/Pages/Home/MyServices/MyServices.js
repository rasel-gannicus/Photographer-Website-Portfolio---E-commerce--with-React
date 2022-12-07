import React, { useEffect, useState } from 'react';
import './MyServices.css';
import WeddingPackages from './WeddingPackages/WeddingPackages';
import WeddingService from './WeddingService/WeddingService';

const MyServices = () => {
    const[packages, setPackages] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/shafik720/rest-api/main/photographer-package.json')
        .then(res=>res.json())
        .then(data=>setPackages(data))
    },[])

    function handleAddToBooking(id){
        console.log(id);
    }
    return (
        <div className=' myServices-div my-5 mx-auto border'>
            <h2>My Services</h2>
            {/* <WeddingService></WeddingService> */}
            <div className="wedding-packages-div">
                {
                    packages.map(index=><WeddingPackages
                        index = {index}
                        key = {index.id}
                    ></WeddingPackages>)
                }
            </div>
        </div>
    );
};

export default MyServices;