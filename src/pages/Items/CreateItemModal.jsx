import React from 'react';
import MainModal from './../../components/MainModal/MainModal';
import MainBtn from './../../components/button/MainBtn/MainBtn';
import YInput from '../../components/input/YInput';
import { useForm } from 'react-hook-form';

function CreateItemModal({ modal, setModal }) {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => postItem(data);

    function postItem(body) {
        const options = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        console.log(options);
        fetch(`http://127.0.0.1:8000/api/goods`, options)
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
            {/* <input type='text' placeholder='id' {...register('id')} /> */}
            <input type='text' placeholder='title' {...register('title')} />
            <input
                type='number'
                placeholder='warehouse'
                {...register('warehouse')}
            />
            {/* <input type='text' placeholder='text' {...register('text')} />
            <input type='text' placeholder='price' {...register('price')} />
            <select {...register('unit')}>
                <option value='kg'>kg</option>
                <option value='PCS'>PCS</option>
                <option value='g'>g</option>
            </select> */}
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
    );
}

export default CreateItemModal;
