import React from 'react';
import MainBtn from '../button/MainBtn/MainBtn'
import cl from './TaskCard.module.css'

function TaskCard({props}) {
    return (
        <div className={cl.TaskCard}>
            <h3>{props.name}</h3>
            <p>{props.address}</p>
            <p>{props.customer}</p>
            <MainBtn color='blue'>Info</MainBtn>
        </div>
    );
}

export default TaskCard;