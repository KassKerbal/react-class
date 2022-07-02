import React from 'react';
import ItemCount from '../ItemCount';
import styles from "./styles.module.scss";

function ItemDetail({ item, onAdd }) {

    return (
        <div className={styles.main}>
            <div className={styles.imageContainer}>
                <img src={item.images[0]} alt="product"/>
            </div>
            <div className={styles.container}>
                <div className={styles.infoWrap}>
                    <div className={styles.title}>Product: {item.title}</div>
                    <div className={styles.stock}>Stock: {item.stock}</div>
                    <div className={styles.price}>{item.price} €</div>
                    <div className={styles.discountPercentage}>Discount: {item.discountPercentage} %</div>
                    <div className={styles.description}>{item.description}</div>
                </div>
                <div className={styles.itemCountWrap}>
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                </div>

            </div>
        </div>
    )
}

export default ItemDetail