import React from 'react';
import About from '../About/About';
import ShowCase from '../ShowCase/ShowCase';
import Banner from './Banner/Banner';
import './Home.css';

const Home = () => {
    return (
        <div className='home-div'>
            <Banner></Banner>
            <About></About>
            <ShowCase></ShowCase>
        </div>
    );
};

export default Home;