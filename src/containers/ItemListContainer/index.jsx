import React from "react";
import "./styles.scss"
import ItemCount from "../../components/ItemCount";

function ItemListContainer({elementContainer, stock}) {

    stock = 10;

    const onAdd = (counter) => {
        let numberOfStock = counter;
        console.log(numberOfStock);
    }

    return (
        <div className="itemListMain">
                {elementContainer}
                <ItemCount stock={stock} onAdd={onAdd}></ItemCount>
        </div>
    )
}

export default ItemListContainer;

