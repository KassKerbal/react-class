import React from 'react'
import ItemCount from '../ItemCount';
import "./styles.scss";

function ItemDetail({ item }) {

    return (
        <div className="itemDetailCardWrap">
            <div className='itemDetailImageContainer'>
                <img src={item.images[0]} alt="product"/>
            </div>
            <div className='itemDetailInfoContainer'>
                <div className='itemDetailCardTitle'>{item.title}</div>
                <div className='itemDetailCardStock'>Stock: {item.stock}</div>
                <div className='itemDetailCardPrice'>{item.price} €</div>
                <div className='itemDetailCardDescription'>{item.description}</div>
            </div>
        </div>
    )
}

export default ItemDetail