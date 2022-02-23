import React, { useEffect, useState } from 'react';
import cl from './Storages.module.css';
import Header from '../../components/Header/Header/Header';
import StorageCard from '../../components/StorageCard/StorageCard';

function Storages() {
    const [storages, setStorages] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/users/admin/warehouses')
            .then((response) => response.json())
            .then((responses) => setStorages(responses));
    }, []);

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
