import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import ItemList from "../../components/ItemList";
import { useParams } from 'react-router-dom';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

function ItemListContainer() {

    const [items, setItems] = useState([]);
    const params = useParams();

    useEffect(() => {
        const getProducts = async () => {
            try {
                const q = query(collection(db, "products"));
                const querySnapshot = await getDocs(q);
                const products = [];
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    products.push({ id: doc.id, ...doc.data() });
                    if (params?.categoryId) {
                        const filterProducts = products.filter(item => item.category === params.categoryId);
                        setItems(filterProducts);
                    } else {
                        setItems(products);
                    }
                });

            } catch (err) {
                console.log(err);
            }
        }
        getProducts();
    }, [params.categoryId]);

    return (
        <div className={styles.main}>
            {items.length !== 0 ?
                <ItemList items={items} />
                :
                <h1 className={styles.loader}>... Loading</h1>
            }
        </div>
    )
}

export default ItemListContainer;

