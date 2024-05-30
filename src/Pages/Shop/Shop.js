import React from 'react';
import { Spinner } from 'react-bootstrap';
import useProduct from '../../utilities/Hooks/useProduct';
import ShopProuduct from '../MyShop/ShopProuduct/ShopProuduct';
import './Shop.css';
import { otherslife, showAll, showCitylife, showStreet, showUrban, showWild } from '../../utilities/functions/forShopPage';


const Shop = (props) => {
    const [product, setProduct] = useProduct();


    return (
        <div>
            <div className="catagory  ">
                <div className="catagory-title ">
                    <p>Catagory : </p>
                </div>
                <div className="catagory-detail ">
                    <button onClick={showUrban}>Urban</button>
                    <button onClick={showStreet}>Street</button>
                    <button onClick={showWild}>Wild Life</button>
                    <button onClick={showCitylife}>City Life </button>
                    <button onClick={otherslife}>Others </button>
                    <button onClick={showAll}>All </button>
                </div>
            </div>
            <p className="spinners hideMe"><Spinner animation="border" variant="primary" /></p>

            <h2 className='my-5'>Showing <span className='product-title'>All</span> Product </h2>
            {/* -------------- This div will show only 'All' catagory ------------ */}
            <div className="product-show-div all-product">
                {
                    product.map(index => <ShopProuduct
                        index={index}
                        key={index.img}
                        addProduct={props.addProduct}
                    ></ShopProuduct>)
                }
            </div>
            {/* -------------- This div will show only 'Urban' catagory ------------ */}
            <div className="product-show-div urban-product hideMe">
                {
                    product.map(index => index.catagory == 'urban' && <ShopProuduct
                        index={index}
                        key={index.img}
                        addProduct={props.addProduct}
                    ></ShopProuduct>)
                }
            </div>

            {/* -------------- This div will show only 'Street' catagory ------------ */}
            <div className="product-show-div street-product hideMe">
                {
                    product.map(index => index.catagory == 'street' && <ShopProuduct
                        index={index}
                        key={index.img}
                        addProduct={props.addProduct}
                    ></ShopProuduct>)
                }
            </div>

            {/* -------------- This div will show only 'Wild' catagory ------------ */}
            <div className="product-show-div wild-product hideMe">
                {
                    product.map(index => index.catagory == 'wild' && <ShopProuduct
                        index={index}
                        key={index.img}
                        addProduct={props.addProduct}
                    ></ShopProuduct>)
                }
            </div>

            {/* -------------- This div will show only 'Citylife' catagory ------------ */}
            <div className="product-show-div citylife-product hideMe">
                {
                    product.map(index => index.catagory == 'citylife' && <ShopProuduct
                        index={index}
                        key={index.img}
                        addProduct={props.addProduct}
                    ></ShopProuduct>)
                }
            </div>

            {/* -------------- This div will show only 'Others' catagory ------------ */}
            <div className="product-show-div others-product hideMe">
                {
                    product.map(index => index.catagory == 'others' && <ShopProuduct
                        index={index}
                        key={index.img}
                        addProduct={props.addProduct}
                    ></ShopProuduct>)
                }
            </div>

        </div>
    );
};

export default Shop;