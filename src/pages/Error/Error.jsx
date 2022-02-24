import React from 'react';
import cl from './Error.module.css'
import { Link } from 'react-router-dom';
import MainBtn from '../../components/button/MainBtn/MainBtn'

function Error() {
    return (
        <div className={cl.error}>
            <h1>Ошибка 404</h1>
            <h2>Что-то пошло не так...</h2>
            <Link to='/'><MainBtn color='white'>На главную</MainBtn></Link>
        </div>
    );
}

export default Error;
