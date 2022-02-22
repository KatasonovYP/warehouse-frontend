import React from 'react';
import cl from './StorageCard.module.css'
import MainBtn from '../button/MainBtn/MainBtn';

function StorageCard({props}) {
    return (  
        <div className={cl.storageCard}>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <div className={cl.btns}>
                <MainBtn color='blue'>Редактировать</MainBtn>
                <MainBtn color='white'>Удалить</MainBtn>
            </div>
        </div>
    );
}

export default StorageCard;