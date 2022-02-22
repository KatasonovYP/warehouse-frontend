import React from 'react';
import Navbar from './Navbar';
import cl from './Header.module.css';
import Logo from '../Logo/Logo';
import Profile from './Profile';

const Header = () => {
    return (
        <div className={cl.header}>
            <Logo/>
            <Navbar/>
            <Profile/>
        </div>
    );
};

export default Header;
