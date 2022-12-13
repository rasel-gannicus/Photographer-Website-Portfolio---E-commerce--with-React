import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ProductCartDisplay.css';

const ProductCartDisplay = (props) => {
    const { price, img, quantity } = props.index;
    let costPerUnit = quantity * price;

    
    return (
        <div>
            <div className="product-card">
                <img src={img} alt="" />
                <p className='mt-3'>Price Per Unit : <span className='bold-text'>$ {props.index.price}</span> </p>
                <p>Quantity : {quantity} </p>
                <p>Cost : {costPerUnit} </p>
                <div className="increment-div my-3 mx-auto">
                        <span draggable className='increment-icon'><FontAwesomeIcon icon={faMinus} /></span>
                        <div> <span className='blue-text'>{quantity}</span>  Unit </div>
                        <span onClick={()=>props.addProduct(img)} draggable className='increment-icon'><FontAwesomeIcon icon={faPlus} /></span>
                    </div>
            </div>
        </div>
    );
};

export default ProductCartDisplay;