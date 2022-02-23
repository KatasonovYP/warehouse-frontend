import React from 'react';
import cl from './MainModal.module.css'

function MainModal(props) {
    return (
        <div className={cl.modal__wrapper}>
            <div className={cl.mainModal}>
                <div className={cl.header}>
                    <h3>{props.name}</h3>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className={cl.body}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default MainModal;