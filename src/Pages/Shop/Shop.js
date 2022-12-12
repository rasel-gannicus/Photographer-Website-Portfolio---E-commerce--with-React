import React from 'react';
import useProduct from '../../utilities/Hooks/useProduct';
import ShopProuduct from '../MyShop/ShopProuduct/ShopProuduct';
import './Shop.css';

const Shop = (props) => {
    const[product, setProduct] = useProduct();

    //--- This function will show only 'Urban' catagory
    function showUrban(){
        const allProductDiv = document.querySelector('.all-product');
        allProductDiv.classList.add('hideMe');

        const urbanDiv = document.querySelector('.urban-product');
        urbanDiv.classList.remove('hideMe');
        
        const streetDiv = document.querySelector('.street-product');
        streetDiv.classList.add('hideMe');
    }
    
    //--- This function will show only 'Street' catagory
    function showStreet(){
        const allProductDiv = document.querySelector('.all-product');
        allProductDiv.classList.add('hideMe');

        const urbanDiv = document.querySelector('.urban-product');
        urbanDiv.classList.add('hideMe');
        
        const streetDiv = document.querySelector('.street-product');
        streetDiv.classList.remove('hideMe');

    }

    return (
        <div>
            <h2>Shop here</h2>
            <div className="catagory my-3">
                <button onClick={showUrban}>Urban</button>
                <button onClick={showStreet}>Street Photography</button>
            </div>
            <div className="product-show-div all-product">                
                {
                    product.map(index=><ShopProuduct
                        index = {index}
                        key = {index.img}
                        addProduct={props.addProduct}
                    ></ShopProuduct>)
                }
            </div>
    {/* -------------- This div will show only 'Urban' catagory ------------ */}
            <div className="product-show-div urban-product hideMe">                
                {
                    product.map(index=> index.catagory == 'urban' && <ShopProuduct
                        index = {index}
                        key = {index.img}
                        addProduct={props.addProduct}
                    ></ShopProuduct>)
                }
            </div>

    {/* -------------- This div will show only 'Street' catagory ------------ */}
            <div className="product-show-div street-product hideMe">                
                {
                    product.map(index=> index.catagory == 'street' && <ShopProuduct
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