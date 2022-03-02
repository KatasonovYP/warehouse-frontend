import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import cl from './Storages.module.css';
import Header from '../../components/Header/Header/Header';
import StorageCard from '../../components/StorageCard/StorageCard';

function Storages() {
    const [storages, setStorages] = useState([]);

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/users/admin/warehouses')
            .then((res) => setStorages(res.data));
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
