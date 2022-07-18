import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import ItemList from "../../components/ItemList";
import { useParams } from 'react-router-dom';

import UseProductHook from "../../scripts/UseProductHook";

function ItemListContainer() {

    const [items, setItems] = useState([]);
    const params = useParams();
    const  [productHook, error] = UseProductHook();

    useEffect((() => {
        error && console.log(error);
        if (params?.categoryId) {
            const products = [...productHook];
            const filterProducts = products.filter(item => item.category === params.categoryId);
            setItems(filterProducts);
        } else setItems(productHook);
    }), [productHook, params]);

    return (
        <div className={styles.main}>
            {items.length !== 0 ?
                <ItemList items={items} />
                :
                <h1 className={styles.loader}>... Cargando</h1>
            }
        </div>
    )
}

export default ItemListContainer;

