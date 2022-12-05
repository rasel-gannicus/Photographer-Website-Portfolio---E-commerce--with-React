import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    //---------------- this function will show menu when the bar icon will be clicked in mobile view
    function showMenu(){
        const headerParent = document.querySelector('.header-main-parent');
        headerParent.classList.add('active');
    }
    return (
        <div className='header-div'>
            <div className="header-main-parent">
                <div className="header-main">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
                    <NavLink to="/reviews" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Reviews</NavLink>
                    <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Dashboard</NavLink>
                    <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Blogs</NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')} >About</NavLink>
                </div>
            </div>
            <div className="header-icon">
                <h2>PhotoGrapher</h2>
                <span onClick={showMenu}> <FontAwesomeIcon icon={faBars}></FontAwesomeIcon> </span>
            </div>
        </div>
    );
};

export default Header;