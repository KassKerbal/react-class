import React from "react";
import styles from "./styles.module.scss";
import ItemDetail from "../../components/ItemDetail";
import { useParams } from 'react-router-dom';
import UseProductHook from "../../scripts/UseProductHook";

function ItemDetailContainer() {

    const params = useParams();
    const  [productHook, error] = UseProductHook(params.itemId);
    error && console.log(error);
    
    return (
        <div className={styles.main}>
            {Object.keys(productHook).length !== 0 ?
                <ItemDetail item={productHook} />
                :
                <h1 className={styles.loader}>... Cargando</h1>
            }
        </div>
    )
}

export default ItemDetailContainer;