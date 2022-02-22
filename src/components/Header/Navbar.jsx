import React from 'react';
import cl from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={cl.navbar}>
            <a href='/'>Задачи</a>
            <a href='/storages'>Склады</a>
            <a href='/items'>Аналитика</a>
            <a href='/'>Средства</a>
        </nav>
    );
};

export default Navbar;
