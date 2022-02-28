import React from 'react';
import cl from './YInput.module.css';

function YInput(props) {
    return <input {...props} className={cl.yInput} />;
}

export default YInput;
