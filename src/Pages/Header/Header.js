import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faXmark } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    //---------------- this function will show menu when the bar icon will be clicked in mobile view
    function showMenu(){
        const headerParent = document.querySelector('.header-main-parent');
        const headerIcon = document.querySelector('.header-icon');
        
        headerParent.classList.add('active');
        headerIcon.classList.add('hidden');
    }
    function hideMenu(){
        const headerParent = document.querySelector('.header-main-parent');
        const headerIcon = document.querySelector('.header-icon');
        
        headerParent.classList.remove('active');
        headerIcon.classList.remove('hidden');
    }
    return (
        <div className='header-div'>
            <div className="header-main-parent">
                <span  onClick={hideMenu} className='cross-icon'><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon> </span>
                <div className="header-main">
                    <NavLink onClick={hideMenu} to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
                    <NavLink onClick={hideMenu} to="/reviews" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Reviews</NavLink>
                    <NavLink onClick={hideMenu} to="/dashboard" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Dashboard</NavLink>
                    <NavLink onClick={hideMenu} to="/blogs" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Blogs</NavLink>
                    <NavLink onClick={hideMenu} to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')} >About</NavLink>
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