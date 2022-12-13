import React from 'react';
import './ProductCart.css';
import ProductCartDisplay from './ProductCartDisplay/ProductCartDisplay';

const ProductCart = ({basket}) => {
    // console.log(basket);
    return (
        <div>
            {
                basket.map(index=><ProductCartDisplay
                    index = {index}
                    key = {index.img}
                ></ProductCartDisplay>)
            }
        </div>
    );
};

export default ProductCart;