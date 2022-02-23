import React from 'react';
import Auth from '../../components/Auth/Auth';

function SignUp() {
    return (  
        <Auth
            title='Зарегестрироваться'
            inputs={[
                { id: 0, type: 'text', placeholder: 'Логин' },
                { id: 1, type: 'email', placeholder: 'email' },
                { id: 2, type: 'password', placeholder: 'Пароль' },
            ]}
            btnText='Зарегестрироваться'
            path='/storages'
        />
    );
}

export default SignUp;