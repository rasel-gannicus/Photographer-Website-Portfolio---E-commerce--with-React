import React from 'react';
import './MyShop.css';
import ShopProuduct from './ShopProuduct/ShopProuduct';

const MyShop = () => {
    return (
        <div className='my-5'>
            <h2 className='my-5'>Some Of My Product <br />You Can Buy To Decorate Your Home</h2>
            <div className="product-show-div ">
                <ShopProuduct></ShopProuduct>
                <ShopProuduct></ShopProuduct>
                <ShopProuduct></ShopProuduct>
            </div>
        </div>
    );
};

export default MyShop;