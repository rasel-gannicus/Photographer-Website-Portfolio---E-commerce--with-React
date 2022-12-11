import React from 'react';
import useProduct from '../../utilities/Hooks/useProduct';
import ShopProuduct from '../MyShop/ShopProuduct/ShopProuduct';
import './Shop.css';

const Shop = (props) => {
    const[product, setProduct] = useProduct();
    return (
        <div>
            <h2>Shop here</h2>
            <div className="product-show-div ">                
                {
                    product.map(index=><ShopProuduct
                        index = {index}
                        key = {index.img}
                        addProduct={props.addProduct}
                    ></ShopProuduct>)
                }
            </div>
        </div>
    );
};

export default Shop;