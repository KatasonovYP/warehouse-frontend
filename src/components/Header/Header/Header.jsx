import React from 'react';
import Navbar from '../Navbar/Navbar';
import cl from './Header.module.css';
import Logo from '../../Logo/Logo';
import Profile from '../Profile/Profile';

const Header = () => {
    return (
        <div className={cl.header}>
            <Logo />
            <Navbar />
            <Profile />
        </div>
    );
};

export default Header;
