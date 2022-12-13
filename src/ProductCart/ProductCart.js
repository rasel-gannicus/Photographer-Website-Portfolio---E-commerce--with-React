import React from 'react';
import './ProductCart.css';
import ProductCartDisplay from './ProductCartDisplay/ProductCartDisplay';

const ProductCart = (props) => {
    // console.log(props.basket);
    return (
        <div className='product-card-parent-div'>
            {
                props.basket.map(index=><ProductCartDisplay
                    index = {index}
                    key = {index.img}
                ></ProductCartDisplay>)
            }
        </div>
    );
};

export default ProductCart;