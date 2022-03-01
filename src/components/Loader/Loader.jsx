import React from 'react';
import cl from './Loader.module.css';

function Loader() {
    return (
        <div className={cl.wrapper}>
            <span className={cl.loader} />
        </div>
    );
}

export default Loader;
