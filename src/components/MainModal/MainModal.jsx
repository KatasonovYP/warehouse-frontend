import React from 'react';
import cl from './MainModal.module.css'

function MainModal(props) {
    return (  
        <div className={cl.mainModal}>
            <div className={cl.header}>
                <h3>{props.name}</h3>
                <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </div>
            {props.children}
        </div>
    );
}

export default MainModal;