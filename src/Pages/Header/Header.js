import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header-div'>
            <NavLink    to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
                <NavLink    to="/reviews" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Reviews</NavLink>
                <NavLink   to="/dashboard" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Dashboard</NavLink>
                <NavLink   to="/blogs" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Blogs</NavLink>
                <NavLink   to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')} >About</NavLink>
        </div>
    );
};

export default Header;