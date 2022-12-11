import React, { useEffect, useState } from 'react';
import './MyShop.css';
import ShopProuduct from './ShopProuduct/ShopProuduct';

const MyShop = () => {
    const[product, setProduct] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/shafik720/rest-api/main/photographer-product-list.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div className='my-5'>
            <h2 className='my-5'>Some Of My Product <br />You Can Buy To Decorate Your Home</h2>
            <div className="product-show-div ">                
                {
                    product.map(index=><ShopProuduct
                        index = {index}
                    ></ShopProuduct>)
                }
            </div>
        </div>
    );
};

export default MyShop;