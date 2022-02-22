import React from 'react';
import cl from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={cl.navbar}>
            <p>Задачи</p>
            <p>Склады</p>
            <p>Аналитика</p>
            <p>Средства</p>
        </nav>
    );
};

export default Navbar;
