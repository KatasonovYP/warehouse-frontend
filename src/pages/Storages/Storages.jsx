import React, { useState } from 'react';
import cl from './Storages.module.css';
import Header from '../../components/Header/Header/Header';
import StorageCard from '../../components/StorageCard/StorageCard';

function Storages() {
    const [storages, setStorages] = useState([
        {
            id: 0,
            name: 'Первый',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facilis accusantium perspiciatis perferendis ducimus quia magni alias!',
        },
        {
            id: 1,
            name: 'Второй',
            description:
                'Iste quos iure et obcaecati! Fugit quasi minus expedita, iure sapiente a perferendis. Corrupti, magni tempore odit assumenda consequuntur recusandae illum nemo cum corporis at? Iste quos iure et obcaecati!',
        },
    ]);
    return (
        <div>
            <Header />
            <h1>Ваши склады</h1>
            <p>Здесь будут ваши склады и управление ими</p>
            <div className={cl.storage__list}>
                {storages.map((storage) => (
                    <StorageCard key={storage.id} props={storage} />
                ))}
            </div>
        </div>
    );
}

export default Storages;
