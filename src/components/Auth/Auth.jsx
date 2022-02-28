import React from 'react';
import cl from './Auth.module.css';
import MainBtn from './../../components/button/MainBtn/MainBtn';
import YInput from './../../components/input/YInput';
import { Link } from 'react-router-dom';

function Auth({ title, inputs, btnText, path }) {
    return (
        <div className={cl.auth}>
            <div className={cl.window}>
                <div className={cl.img} />
                <div className={cl.body}>
                    <h2>{title}</h2>
                    <div className={cl.inputs}>
                        {inputs.map((input) => (
                            <YInput key={input.id} {...input} />
                        ))}
                    </div>
                    <div>
                        <Link to={path}>
                            <MainBtn color='blue'>{btnText}</MainBtn>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;
