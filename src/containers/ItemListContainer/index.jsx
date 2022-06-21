import React, { useEffect, useState } from "react";
import "./styles.scss"
import addIcon from "../../assets/icons/add.png";
import subsIcon from "../../assets/icons/minus.png";

function ItemListContainer({elementContainer, stock}) {

    stock = 10;
    const [counter, setCounter] = useState(0);
    const [isDisabled, setDisabled] = useState(true);

    const handlerAddition = () => {
        if (counter < stock) setCounter(counter + 1);
    }
    const handlerSubtract = () => {
        if (counter > 0) setCounter(counter - 1); 
    }

    useEffect (() => {
        if (counter > 0) setDisabled(false);
        else setDisabled(true);
    }, [counter])

    const onAdd = () => {
        let numberOfStock = counter;
        console.log(numberOfStock);
    }

    return (
        <div className="itemListMain">
                {elementContainer}

                    <div className="counterBoxWrap">
                        <button className="buttonCounterBox" onClick={handlerAddition}><img src={addIcon}></img></button>
                        <span>{counter}</span>
                        <button className="buttonCounterBox" onClick={handlerSubtract}><img src={subsIcon}></img></button>
                    </div>
                <div className="buttonAddCartWrap">
                    <button onClick={onAdd} disabled={isDisabled}>Agregar al carrito</button>
                </div>
        </div>
    )
}

export default ItemListContainer;

