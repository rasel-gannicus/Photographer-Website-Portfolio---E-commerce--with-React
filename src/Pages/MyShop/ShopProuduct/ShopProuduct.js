import React from 'react';
import './ShopProuduct.css';

const ShopProuduct = () => {
    return (
        <div className='product-img-parent'>
            <div className="product-img">
                <img src="https://i.ibb.co/wYJfLSQ/amirhossein-soltani-YQWYD7-M2vy-E-unsplash-1.jpg" alt="" />
            </div>
            <div className="product-first-div">
                <button>Add to Cart</button>
            </div>
            <div className="product-second-div">
                <button>Add to Wishlist</button>
            </div>
        </div>
    );
};

export default ShopProuduct;