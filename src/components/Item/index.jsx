import React, { useEffect, useState } from 'react';
import styles from "./styles.module.scss";

function Item({ item, onClickNavigate }) {

    const [description, setDescription] = useState("");

    useEffect((() => {
        if (item.description.length > 120) {
            const shortDescription = item.description.slice(0, 120) + "...";
            setDescription(shortDescription);
        } else setDescription(item.description)
    }),
    [])

    return (
        <div className={styles.main}  onClick={() => onClickNavigate(`/item/${item.id}`)}>
            <div className={styles.imageContainer}>
                <img src={item.image} alt="product"/>
            </div>
            <div className={styles.container}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.price}>{item.price} €</div>
                <span className={styles.description}>{description}</span>
            </div>
        </div>
    )
}

export default Item