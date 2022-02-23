import React from 'react';
import Auth from '../../components/Auth/Auth';

function SignIn() {
    return (
        <Auth
            title='Авторизация'
            inputs={[
                { id: 0, type: 'text', placeholder: 'Логин' },
                { id: 1, type: 'password', placeholder: 'Пароль' },
            ]}
            btnText='Авторизироваться'
            path='/storages'
        />
    );
}

export default SignIn;
