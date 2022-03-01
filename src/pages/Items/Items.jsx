import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
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

    function postItem(body) {
        const options = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        fetch(`http://127.0.0.1:8000/api/goods`, options)
            .then((response) => response.json())
            .then((responses) => console.log(responses));
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => postItem(data);

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
            <MainModal
                name='Вещи'
                visible={modal}
                setVisible={setModal}
                onSubmit={handleSubmit(onSubmit)}
            >
                <input type='text' placeholder='id' {...register('id')} />
                <input type='text' placeholder='title' {...register('title')} />
                <input type='text' placeholder='text' {...register('text')} />
                <input type='text' placeholder='price' {...register('price')} />
                <select {...register('unit')}>
                    <option value='kg'>kg</option>
                    <option value='PCS'>PCS</option>
                    <option value='g'>g</option>
                </select>
                <div>
                    <MainBtn
                        type='submit'
                        color='blue'
                        onClick={() => setModal(false)}
                    >
                        Да
                    </MainBtn>
                    <MainBtn
                        type='button'
                        color='white'
                        onClick={() => setModal(false)}
                    >
                        нет
                    </MainBtn>
                </div>
            </MainModal>
        </div>
    );
}

export default Items;
