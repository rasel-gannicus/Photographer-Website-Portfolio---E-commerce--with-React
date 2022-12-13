import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCart.css';
import ProductCartDisplay from './ProductCartDisplay/ProductCartDisplay';

const ProductCart = (props) => {
    // console.log(props.basket);
    return (
        <div className="">
            <div className='product-card-parent-div mx-auto my-4'>
            {
                props.basket.map(index => <ProductCartDisplay
                    index={index}
                    key={index.img}
                    addProduct={props.addProduct}
                    decreaseProduct={props.decreaseProduct}
                    deleteProduct={props.deleteProduct}
                ></ProductCartDisplay>)
            }

            {/* showing "Back to Home" when cart is empty */}
            {props.basket.length == 0 && <div className="back-to-homepage">
                <h2>No item in Cart</h2>
                <Link to='/'>Back To Home Page</Link>
            </div>}
        </div>
        
        <div className="cart-calculation">
                <h2>Price : </h2>
            </div>
        </div>
        
    );
};

export default ProductCart;