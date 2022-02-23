import React from 'react';
import cl from './MainModal.module.css';

function MainModal({ children, visible, setVisible, ...props }) {
    const rootClasses = [cl.modal__wrapper];
    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div
            className={rootClasses.join(' ')}
            onClick={() => setVisible(false)}
        >
            <div className={cl.mainModal} onClick={(e) => e.stopPropagation()}>
                <div className={cl.header}>
                    <h3>{props.name}</h3>
                    <i
                        onClick={() => setVisible(false)}
                        className='fa-solid fa-xmark'
                    ></i>
                </div>
                <div className={cl.body}>{children}</div>
            </div>
        </div>
    );
}

export default MainModal;
