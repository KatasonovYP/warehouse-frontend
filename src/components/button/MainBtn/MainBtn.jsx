import React from 'react';
import cl from './MainBtn.module.css';

function BtnBlue(props) {
    return (
        <button className={cl.btn + ' ' + cl[props.color]}>
            {props.children}
        </button>
    );
}

export default BtnBlue;
