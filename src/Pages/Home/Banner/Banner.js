import React from 'react';
import './Banner.css';
import bannerImg from '../../../utilities/img/bg.png';

const Banner = () => {
    return (
        <div className='banner-div container'>
            <div className="row g-3">
            <div className="col-lg-6">
                <div className="h-100">
                    <div className="banner-left h-100">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem consequuntur veniam aliquid. Minima facilis veniam consequatur sed itaque? Ipsa, sapiente facilis sunt voluptatibus exercitationem quo nemo, repellendus sit architecto culpa expedita soluta mollitia amet temporibus dolor totam numquam autem maxime quae dolorum doloremque aspernatur. Animi deserunt delectus vero ea nihil blanditiis vel, laborum quo necessitatibus? Ullam alias deleniti minima rerum eaque non numquam debitis. Modi, porro aliquid! Veniam, iure ut?</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="h-100">
                    <div className="banner-right">
                        <div className="banner-img">
                            <img src={bannerImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;