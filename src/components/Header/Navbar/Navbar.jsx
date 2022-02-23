import React from 'react';
import cl from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={cl.navbar}>
            <Link to='/tasks'>Задачи</Link>
            <Link to='/storages'>Склады</Link>
            <Link to='/items'>Аналитика</Link>
            <Link to='/'>Информация</Link>
        </nav>
    );
};

export default Navbar;
