import React from 'react';
import cl from './Tasks.module.css';
import Header from '../../components/Header/Header/Header';
import TaskArea from '../../components/TaskArea/TaskArea';
import TaskCard from '../../components/TaskCard/TaskCard';
import { useState } from 'react';

function Tasks() {
    const [tasks, setTasks] = useState([
        {
            id: 0,
            name: 'Первый',
            address: 'Baumanskaya 1',
            customer: 'Ivanov',
        },
        {
            id: 1,
            name: 'Второй',
            address: 'Baumanskaya 2',
            customer: 'Alekseev',
        },
    ]);

    return (
        <div>
            <Header />
            <h1> задачи </h1>
            <p> Здесь будут ваши задачи</p>
            <div className={cl.TaskAreas}>
                <TaskArea>
                    {tasks.map((task) => (
                        <TaskCard key={task.id} props={task} />
                    ))}
                </TaskArea>
                <TaskArea>
                    {tasks.map((task) => (
                        <TaskCard key={task.id} props={task} />
                    ))}
                </TaskArea>
                <TaskArea>
                    {tasks.map((task) => (
                        <TaskCard key={task.id} props={task} />
                    ))}
                </TaskArea>
            </div>
        </div>
    );
}

export default Tasks;
