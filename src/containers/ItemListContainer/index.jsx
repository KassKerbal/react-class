import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import ItemList from "../../components/ItemList";
import { useParams } from 'react-router-dom';

function ItemListContainer() {

    const [items, setItems] = useState([]);
    const params = useParams();

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products?limit=40');
                const fetchProducts = await response.json();
                if (params?.categoryId) {
                    const filterProducts = fetchProducts.products.filter( product => product.category === params.categoryId);
                    setItems(filterProducts);
                } else {
                     setItems(fetchProducts.products);
                }
            } catch (err) {
                console.log(err);
            }
        }
        getProducts();
    }, [params.categoryId]);

    return (
        <div className={styles.main}>
            { items.length !== 0 ?
                <ItemList items={items} /> 
                :
                <h1 className={styles.loader}>... Loading</h1>
            }
        </div>
    )
}

export default ItemListContainer;

