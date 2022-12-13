import React from 'react';
import './ProductCartDisplay.css';

const ProductCartDisplay = (props) => {
    // console.log(props.basket)
    return (
        <div>
            <h2>Product cart : {props.index.price} </h2>
        </div>
    );
};

export default ProductCartDisplay;