import React from 'react';
import './MyShop.css';
import ShopProuduct from './ShopProuduct/ShopProuduct';

const MyShop = () => {
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/shafik720/rest-api/main/photographer-product-list.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div className='my-5'>
            <h2 className='my-5'>Some Of My Product <br />You Can Buy To Decorate Your Home</h2>
            <div className="product-show-div ">
                <ShopProuduct></ShopProuduct>
                <ShopProuduct></ShopProuduct>
                <ShopProuduct></ShopProuduct>
            </div>
        </div>
    );
};

export default MyShop;