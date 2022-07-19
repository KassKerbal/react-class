import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../context/ShopContext';
import ItemCount from '../ItemCount';
import styles from "./styles.module.scss";
import LenguageCategoryEs from '../../utils/LenguageCategoryEs';

function ItemDetail({ item, initial }) {

    const [cartCounter, setCartCounter] = useState(0);
    const { addItem } = useContext(Shop);
    const navigate = useNavigate();

    const onAdd = (counter) => {
        setCartCounter(counter);
        addItem(item, counter);
    }

    const handleTerminate = () => {
        navigate('/cart')
    }

    const category = LenguageCategoryEs(item);

    return (
        <div className={styles.main}>
            <div className={styles.imageContainer}>
                <img src={item.image} alt="product" />
            </div>
            <div className={styles.container}>
                <div className={styles.infoWrap}>
                    <div className={styles.title}>Producto: {item.title}</div>
                    <div className={styles.subTitle}>Marca: <span>{item.brand}</span></div>
                    <div className={styles.description}>{item.description}</div>
                    <div className={styles.subTitle}>Categoría: <span>{category}</span></div>
                </div>
                <div className={styles.addCartWrap}>
                    <div className={styles.price}><span>{item.price} €</span></div>
                    {
                        !cartCounter ?
                            <div className={styles.itemCountWrap}>
                                <ItemCount stock={item.stock} initial={initial} onAdd={onAdd} />
                            </div>
                            :
                            <div className={styles.btnCartWrap}>
                                <button onClick={handleTerminate}>Terminar Compra</button>
                            </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default ItemDetail