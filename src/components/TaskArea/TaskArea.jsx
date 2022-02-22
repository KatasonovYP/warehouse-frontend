import React from 'react';
import cl from './TaskArea.module.css';

function TaskArea(props) {
    return <div className={cl.task__area}>{props.children}</div>;
}

export default TaskArea;
