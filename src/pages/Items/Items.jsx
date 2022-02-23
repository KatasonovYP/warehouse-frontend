import React from 'react';
import { useState } from 'react';
import Header from "../../components/Header/Header/Header";
import MainModal from './../../components/MainModal/MainModal';
import MainBtn from './../../components/button/MainBtn/MainBtn';
import YInput from '../../components/input/YInput';

function Items() {

    const [modal, setModal] = useState(false)

    return ( 
        <div>
            <Header/>
                <h1>Items</h1>
            <MainBtn color='blue' onClick={() => setModal(true)}>Create</MainBtn>
            <MainModal name='Вещи' visible={modal} setVisible={setModal}>
                <YInput type="text" placeholder='Name' />
                <YInput type="text" placeholder='desctiption' />
                <YInput type="text" placeholder='surname' />
                <div>
                    <MainBtn>Да</MainBtn>
                    <MainBtn>нет</MainBtn>
                </div>
            </MainModal>
        </div>
     );
}

export default Items;