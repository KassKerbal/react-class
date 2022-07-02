import React from 'react';
import styles from "./styles.module.scss";

function Item({ item, onClickNavigate }) {

    return (
        <div className={styles.main}  onClick={() => onClickNavigate(`/item/${item.id}`)}>
            <div className={styles.imageContainer}>
                <img src={item.images[0]} alt="product"/>
            </div>
            <div className={styles.container}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.price}>{item.price} €</div>
                <div className={styles.description}>{item.description}</div>
            </div>
        </div>
    )
}

export default Item