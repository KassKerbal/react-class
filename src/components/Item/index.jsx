import React from 'react'
import ItemCount from '../ItemCount';
import "./styles.scss";

function Item({ item, onAdd, focus, onClickEvent }) {

    return (
        <div className={focus === item.id ? "itemCardWrap" : "itemCardWrap itemCardOffFocus"}  onClick={() => onClickEvent(item.id)}>
            <div className='itemImageContainer'>
                <img src={item.images[0]} alt="product"/>
            </div>
            <div className='itemInfoContainer'>
                <div className='itemCardTitle'>{item.title}</div>
                <div className='itemCardPrice'>{item.price} €</div>
                <div className='itemCardDescription'>{item.description}</div>
            </div>
        
            <div className={ focus === item.id ? "itemCountWrap" : "itemCountDisable"}>
                <div className='itemCountFade'>
                    { focus === item.id ? <ItemCount stock={item.stock} onAdd={onAdd} initial={1} /> : null }
                </div>
            </div>
        </div>
    )
}

export default Item