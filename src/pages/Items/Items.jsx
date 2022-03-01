import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header/Header';
import CreateItemModal from './CreateItemModal';
import MainBtn from './../../components/button/MainBtn/MainBtn';
import useFetching from './../../hooks/useFetching';
import ItemList from './../../components/ItemList/ItemList';

function Items() {
    const [items, setItems] = useState([]);
    const [modal, setModal] = useState(false);
    const [fetchItems, isLoading, error] = useFetching(async () => {
        await fetch(
            `http://127.0.0.1:8000/api/warehouses/${id.toString()}/goods`
        )
            .then((response) => response.json())
            .then((responses) => setItems(responses));
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
            />
        </div>
    );
}

export default Items;
