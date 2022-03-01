import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header/Header';
import MainBtn from './../../components/button/MainBtn/MainBtn';
import ItemCard from './../../components/ItemCard/ItemCard';
import CreateItemModal from './CreateItemModal';

function Items() {
    const [items, setItems] = useState([]);
    const [modal, setModal] = useState(false);

    const id = window.location.href.split('/')[4];

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/warehouses/${id.toString()}/goods`)
            .then((response) => response.json())
            .then((responses) => setItems(responses));
    }, []);

    return (
        <div>
            <Header />
            <h1>Items</h1>
            <MainBtn color='blue' onClick={() => setModal(true)}>
                Create
            </MainBtn>
            <div>
                {items.map((item) => (
                    <ItemCard key={item.id} props={item} />
                ))}
            </div>
            <CreateItemModal
                modal={modal}
                setModal={setModal}
                warehouseId={id}
            />
        </div>
    );
}

export default Items;
