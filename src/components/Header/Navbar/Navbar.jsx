import React from 'react';
import cl from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={cl.navbar}>
            <Link to='/'>Задачи</Link>
            <Link to='/storages'>Склады</Link>
            <Link to='/items'>Аналитика</Link>
            <Link to='/'>Средства</Link>
        </nav>
    );
};

export default Navbar;
