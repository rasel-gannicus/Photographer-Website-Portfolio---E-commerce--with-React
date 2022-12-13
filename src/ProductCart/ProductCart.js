import React from 'react';
import './ProductCart.css';
import ProductCartDisplay from './ProductCartDisplay/ProductCartDisplay';

const ProductCart = (props) => {
    // console.log(props.basket);
    return (
        <div className='product-card-parent-div mx-auto my-4'>
            {
                props.basket.map(index=><ProductCartDisplay
                    index = {index}
                    key = {index.img}
                    addProduct={props.addProduct}
                    decreaseProduct={props.decreaseProduct}
                    deleteProduct={props.deleteProduct}
                ></ProductCartDisplay>)
            }
        </div>
    );
};

export default ProductCart;