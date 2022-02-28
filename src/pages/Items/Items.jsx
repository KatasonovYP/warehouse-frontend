import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header/Header';
import MainModal from './../../components/MainModal/MainModal';
import MainBtn from './../../components/button/MainBtn/MainBtn';
import YInput from '../../components/input/YInput';
import ItemCard from './../../components/ItemCard/ItemCard';

function Items() {
    const [modal, setModal] = useState(false);
    const [items, setItems] = useState([]);

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
            <MainModal name='Вещи' visible={modal} setVisible={setModal}>
                <YInput type='text' placeholder='id' />
                <YInput type='text' placeholder='title' />
                <YInput type='text' placeholder='text' />
                <YInput type='text' placeholder='price' />
                <div>
                    <MainBtn
                        color='blue'
                        onClick={() => {
                            let data = new FormData();
                            console.log(data);
                        }}
                    >
                        Да
                    </MainBtn>
                    <MainBtn color='white' onClick={() => setModal(false)}>
                        нет
                    </MainBtn>
                </div>
            </MainModal>
        </div>
    );
}

export default Items;
