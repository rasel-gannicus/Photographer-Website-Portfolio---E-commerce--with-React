import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import menuLogo from '../../utilities/img/banner-bg.png';
import headerLogo from '../../Logo Icon/photographer.png';
import auth from '../../utilities/firebase.init';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';


const Header = () => {
    //---------------- this function will show menu when the bar icon will be clicked in mobile view
    function showMenu() {
        const headerParent = document.querySelector('.header-main-parent');
        const headerIcon = document.querySelector('.header-icon');
        const headerMain = document.querySelector('.header-main');

        headerMain.classList.add('active');
        headerParent.classList.add('active');
        headerIcon.classList.add('hidden');
    }
    //---------------- this function will hide menu when the X-Mark icon will be clicked in mobile view
    function hideMenu() { 
        const headerParent = document.querySelector('.header-main-parent');
        const headerIcon = document.querySelector('.header-icon');
        const headerMain = document.querySelector('.header-main');

        headerMain.classList.remove('active');
        headerParent.classList.remove('active');
        headerIcon.classList.remove('hidden');
    }

    let navigation = useNavigate();
    function goHome(){
        let url = '/';
        navigation(url);
    }
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);

    return (
        <div className='header-div'>
            <div className="header-main-parent">
                <span onClick={hideMenu} className='cross-icon'><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon> </span>
                <div className="header-main">
                    <div className="menu-logo">
                        <img src={menuLogo} alt="" />
                    </div>
                    <NavLink onClick={hideMenu} to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>

                    <NavLink onClick={hideMenu} to="/shop" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Shop Now</NavLink>

                    <NavLink onClick={hideMenu} to="/wishlist" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Wishlist</NavLink>
                    
                    <NavLink onClick={hideMenu} to="/blogs" className={({ isActive }) => (isActive ? 'active' : 'inactive')} >Blogs</NavLink>
                    
                    <NavLink onClick={hideMenu} to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')} >About Me</NavLink>
                    
                    {user ? <a onClick={signOut} href="#">Logout</a> : <NavLink onClick={hideMenu} to="/login" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Login</NavLink>}
                </div>
            </div>
            <div className="header-icon">
                <div onClick={goHome} draggable className="header-icon-left">
                    <img src={headerLogo} alt="" />
                    <h2>Jonathan Wick</h2>
                </div>
                <span onClick={showMenu}> <FontAwesomeIcon icon={faBars}></FontAwesomeIcon> </span>
            </div>
        </div>
    );
};

export default Header;