import React from 'react';
import MainModal from './../../components/MainModal/MainModal';
import MainBtn from './../../components/button/MainBtn/MainBtn';
import YInput from '../../components/input/YInput';
import { useForm } from 'react-hook-form';

function CreateItemModal({ modal, setModal, warehouseId, fetchItems }) {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => postItem(data, warehouseId);

    function postItem(body, id) {
        const options = {
            method: 'POST',
            body: JSON.stringify({ warehouse: Number(id), ...body }),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        console.log(options);
        fetch('http://127.0.0.1:8000/api/goods/', options)
            .then((response) => response.json())
            .then((responses) => console.log(responses));
    }

    return (
        <MainModal
            name='Вещи'
            visible={modal}
            setVisible={setModal}
            onSubmit={handleSubmit(onSubmit)}
        >
            <input placeholder='title' {...register('title')} />
            <div>
                <MainBtn
                    type='submit'
                    color='blue'
                    onClick={() => {
                        setTimeout(() => fetchItems(), 1000)
                        setModal(false);
                    }}
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
    );
}

export default CreateItemModal;
