import React from 'react';
import CountBtn from '../button/CountBtn/CountBtn';
import cl from './ItemCard.module.css';

function ItemCard({ props }) {
    return (
        <div className={cl.itemCard}>
            <input type="checkbox" />
            <h3>{props.title}</h3>
            <p>{props.id}</p>
            <div>
                <CountBtn>+</CountBtn>
                <CountBtn>-</CountBtn>
            </div>
        </div>
    );
}

export default ItemCard;
