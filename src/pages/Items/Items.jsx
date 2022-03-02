import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header/Header';
import CreateItemModal from './CreateItemModal';
import MainBtn from './../../components/button/MainBtn/MainBtn';
import useFetching from './../../hooks/useFetching';
import ItemList from './../../components/ItemList/ItemList';
import axios from 'axios';

function Items() {
    const [items, setItems] = useState([]);
    const [modal, setModal] = useState(false);
    const [fetchItems, isLoading, error] = useFetching(async () => {
        await axios
            .get(`http://127.0.0.1:8000/api/warehouses/${id.toString()}/goods`)
            .then((responses) => setItems(responses.data));
    });

    const id = window.location.href.split('/')[4];

    useEffect(() => fetchItems(), []);

    return (
        <div>
            <Header />
            <h1>Items</h1>
            <MainBtn color='blue' onClick={() => setModal(true)}>
                Create
            </MainBtn>
            <ItemList items={items} isLoading={isLoading} />
            <CreateItemModal
                modal={modal}
                setModal={setModal}
                warehouseId={id}
                fetchItems={fetchItems}
            />
        </div>
    );
}

export default Items;
