import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import ItemDetail from "../../components/ItemDetail";
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

function ItemDetailContainer() {

    const [itemDetail, setItemDetail] = useState({})
    const params = useParams();
    useEffect(() => {
        const getProducts = async () => {
            try {
                const docRef = doc(db, "products", params.itemId);
                const docSnap = await getDoc(docRef);
                const productDetail = {id: docSnap.id, ...docSnap.data()};
                if (docSnap.exists()) {
                    setItemDetail(productDetail);
                    console.log(productDetail)
                } else {
                    console.log("No such document!");
                }
            } catch (err) {
                console.log(err);
            }
        }
        getProducts();
    }, [])

    return (
        <div className={styles.main}>
            {Object.keys(itemDetail).length !== 0 ?
                <ItemDetail item={itemDetail} />
                :
                <h1 className={styles.loader}>... Loading</h1>
            }
        </div>
    )
}

export default ItemDetailContainer;