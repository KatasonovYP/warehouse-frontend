import React from 'react';
import cl from './CountBtn.module.css';

function BtnBlue({ children, ...props }) {
    return (
        <button className={cl.btn + ' ' + cl.blue} {...props}>
            {children}
        </button>
    );
}

export default BtnBlue;
