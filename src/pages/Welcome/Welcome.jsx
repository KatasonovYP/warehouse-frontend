import React from 'react';
import MainBtn from './../../components/button/MainBtn/MainBtn';
import { Link } from 'react-router-dom';

function Welcome() {
    return (  
        <div>
            <h1>Ware House</h1>
            <h2>Добро пожаловать</h2>
            <div>
                <Link to='sign_up'>
                    <MainBtn color='blue'>Регистрация</MainBtn>
                </Link>
                <Link to='sign_in'>
                    <MainBtn color='white'>Авторизация</MainBtn>
                </Link>
            </div>
        </div>
    );
}

export default Welcome;