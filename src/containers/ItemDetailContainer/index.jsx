import React from "react";
import styles from "./styles.module.scss";
import ItemDetail from "../../components/ItemDetail";
import { useParams } from 'react-router-dom';
import UseProductHook from "../../utils/UseProductHook";

function ItemDetailContainer() {

    const params = useParams();
    const  [productHook, error] = UseProductHook(params.itemId);
    error && console.log(error);

    const initial = (productHook.stock) > 0 ? 1 : 0;
    
    return (
        <div className={styles.main}>
            {Object.keys(productHook).length !== 0 ?
                <ItemDetail item={productHook} initial={initial}/>
                :
                <h1 className={styles.loader}>... Cargando</h1>
            }
        </div>
    )
}

export default ItemDetailContainer;