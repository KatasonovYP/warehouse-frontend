import React from 'react';
import cl from './ItemCard.module.css'

function ItemCard({props}) {
    return (  
        <div>
            <h3>{props.title}</h3>
            <p>{props.id}</p>
        </div>
    );
}

export default ItemCard;