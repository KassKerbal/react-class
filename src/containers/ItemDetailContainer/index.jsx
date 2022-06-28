import React, { useEffect, useState } from "react";
import "./styles.scss"
import ItemDetail from "../../components/ItemDetail";

function ItemDetailContainer({idProduct}) {

    const [itemDetail, setItemDetail] = useState(false)

    const getProducts = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${idProduct}`);
            const getItem = await response.json();
            setItemDetail(getItem);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="itemDetailContainerMain">
            {itemDetail ? <ItemDetail item={itemDetail} /> : null}
        </div>
    )
}

export default ItemDetailContainer;

