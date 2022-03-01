import React from 'react';
import Loader from '../Loader/Loader';
import ItemCard from '../ItemCard/ItemCard';
import cl from './ItemList.module.css';

function ItemList({ items, isLoading }) {
    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : items.length !== 0 ? (
                items.map((item) => <ItemCard key={item.id} props={item} />)
            ) : (
                <div className={cl.wrapper}>
                    <h2>Ничего нет</h2>
                </div>
            )}
        </div>
    );
}

export default ItemList;
