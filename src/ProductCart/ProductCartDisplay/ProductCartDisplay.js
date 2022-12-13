import React from 'react';
import './ProductCartDisplay.css';

const ProductCartDisplay = (props) => {
    const { price, img, quantity } = props.index;
    console.log(props.index);
    return (
        <div>
            <div className="product-card">
                <img src={img} alt="" />
                <p>Price Per Unit : <span className='bold-text'>$ {props.index.price}</span> </p>
            </div>
        </div>
    );
};

export default ProductCartDisplay;