import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import ItemDetail from "../../components/ItemDetail";
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {

    const [itemDetail, setItemDetail] = useState([])
    const params = useParams();

    const onAdd = (counter) => {
        let numberOfStock = counter;
        console.log(numberOfStock);
      }
    
    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${params.itemId}`);
                const getItem = await response.json();
                setItemDetail(getItem);
            } catch (err) {
                console.log(err);
            }
        }
        getProducts();
    }, []);

    return (
        <div className={styles.main}>
            { itemDetail.length !== 0 ?
                <ItemDetail item={itemDetail} onAdd={onAdd} /> 
                :
                <h1 className={styles.loader}>... Loading</h1>
            }
        </div>
    )
}

export default ItemDetailContainer;