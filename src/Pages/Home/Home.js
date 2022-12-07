import React from 'react';
import About from '../About/About';
import ShowCase from '../ShowCase/ShowCase';
import Banner from './Banner/Banner';
import './Home.css';
import MyServices from './MyServices/MyServices';

const Home = () => {
    return (
        <div className='home-div'>
            <Banner></Banner>
            <About></About>
            <ShowCase></ShowCase>
            <MyServices></MyServices>
        </div>
    );
};

export default Home;