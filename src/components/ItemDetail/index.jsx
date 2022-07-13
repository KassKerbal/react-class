import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../context/ShopContext';
import ItemCount from '../ItemCount';
import styles from "./styles.module.scss";


function ItemDetail({ item }) {

    const [cartCounter, setCartCounter] = useState(0);
    const { addItem } = useContext(Shop);
    const navigate = useNavigate();

    const onAdd = (counter) => {
        setCartCounter(counter);
    }

    const handleTerminate = () => {
        addItem(item, cartCounter);
        navigate('/cart')
    }


    return (
        <div className={styles.main}>
            <div className={styles.imageContainer}>
                <img src={item.image} alt="product" />
            </div>
            <div className={styles.container}>
                <div className={styles.infoWrap}>
                    <div className={styles.title}>Product: {item.title}</div>
                    <div className={styles.subTitle}>Brand: <span>{item.brand}</span></div>
                    <div className={styles.description}>{item.description}</div>
                    <div className={styles.subTitle}>Category: <span>{item.category}</span></div>
                </div>
                <div className={styles.addCartWrap}>
                    <div className={styles.price}><span>{item.price} €</span></div>
                    {
                        !cartCounter ?
                            <div className={styles.itemCountWrap}>
                                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                            </div>
                            :
                            <div className={styles.btnCartWrap}>
                                <div className={styles.btnCart} onClick={handleTerminate}>Terminar Compra</div>
                            </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default ItemDetail