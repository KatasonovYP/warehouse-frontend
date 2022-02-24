import React from 'react';
import cl from './StorageCard.module.css';
import MainBtn from '../button/MainBtn/MainBtn';
import { useNavigate } from 'react-router-dom';

function StorageCard({ props }) {
    const navigate = useNavigate();
    return (
        <div
            className={cl.storageCard}
            onClick={() => navigate(`/storages/${props.id}`)}
        >
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <div className={cl.btns}>
                <MainBtn color='blue'>Редактировать</MainBtn>
                <MainBtn color='white'>Удалить</MainBtn>
            </div>
        </div>
    );
}

export default StorageCard;
