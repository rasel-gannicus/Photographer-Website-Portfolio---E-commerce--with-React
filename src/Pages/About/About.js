import React from 'react';
import './About.css';

const About = () => {
    function showAbout() {
        const secondPart = document.querySelector('.second-part');
        secondPart.classList.add('active');

        const secondPartLeft = document.querySelector('.second-part-left');
        secondPartLeft.classList.add('active');
    }
    function hideAbout() {
        const secondPart = document.querySelector('.second-part');
        secondPart.classList.remove('active');

        const secondPartLeft = document.querySelector('.second-part-left');
        secondPartLeft.classList.remove('active');
    }
    return (
        <div className='container about-div'>
            <div onMouseEnter={showAbout} onMouseLeave={hideAbout} className="container mx-auto">
                <div className="first-part">
                    <h2>Who am i ?</h2>
                    <p>A Professional Photographer from a Small City in Bangladesh. I am a self taught Nerd. I have been doing Photography for more than a Decade. I have won several awards and four International Awards for Photography. </p>
                    <p>Street & Wild-life Photography is my favourite Genre. I also have a good hand In Wedding & Portfolio Area. Some of my sample works are given below.  </p>
                    <div className="second-part">
                        <div className="second-part-left">
                            <h2>Who am I</h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;