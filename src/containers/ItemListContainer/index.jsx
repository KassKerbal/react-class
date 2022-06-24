import React, { useEffect, useState } from "react";
import "./styles.scss"
import ItemList from "../../components/ItemList";

function ItemListContainer() {

    const [items, setItems] = useState(false)

    const getProducts = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products?limit=10');
            const getItems = await response.json();
            setItems(getItems);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="itemListMain">
            {items ? <ItemList items={items.products} /> : null}
        </div>
    )
}

export default ItemListContainer;

