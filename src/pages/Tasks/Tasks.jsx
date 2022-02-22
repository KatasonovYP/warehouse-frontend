import React from 'react';
import cl from './Tasks.module.css';
import Header from '../../components/Header/Header/Header';
import TaskArea from '../../components/TaskArea/TaskArea';

function Tasks() {
    return (
        <div>
            <Header />
            <h1> задачи </h1>
            <p> Здесь будут ваши задачи</p>
            <div className={cl.TaskAreas}>
                <TaskArea>asdf</TaskArea>
                <TaskArea>asdfasdf</TaskArea>
                <TaskArea>asdf</TaskArea>
            </div>
        </div>
    );
}

export default Tasks;
