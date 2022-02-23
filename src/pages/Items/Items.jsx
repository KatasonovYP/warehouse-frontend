import React from 'react';
import Header from "../../components/Header/Header/Header";
import MainModal from './../../components/MainModal/MainModal';
import MainBtn from './../../components/button/MainBtn/MainBtn';

function Items() {
    return ( 
        <div>
            <Header/>
                <h1>Items</h1>
            <MainModal name='Вещи'>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <div>
                    <MainBtn>Да</MainBtn>
                    <MainBtn>нет</MainBtn>
                </div>
            </MainModal>
        </div>
     );
}

export default Items;