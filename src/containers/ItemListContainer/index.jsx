import React from "react";
import "./styles.css"


function ItemListContainer({elementContainer}) {

    return (
        <div className="itemListMain">
                {elementContainer}
        </div>
    )
}

export default ItemListContainer;

