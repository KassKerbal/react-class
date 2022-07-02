import React, { useState } from 'react';
import styles from "./styles.module.scss";
import addIcon from "../../assets/icons/add.png";
import subsIcon from "../../assets/icons/minus.png";

function ItemCount({ stock, initial, onAdd }) {

    const [counter, setCounter] = useState(parseInt(initial));

    const handlerAddition = () => {
        if (counter < stock) setCounter(counter + 1);
    }
    const handlerSubtract = () => {
        if (counter > 0) setCounter(counter - 1);
    }

    return (
        <div className={styles.main}>
            <div className={styles.counterWrap}>
                <button className={styles.buttonCounter} onClick={handlerAddition}><img alt="add" src={addIcon}></img></button>
                <span className={styles.counterNumber}>{counter}</span>
                <button className={styles.buttonCounter} onClick={handlerSubtract}><img alt="subs" src={subsIcon}></img></button>
            </div>
            <div className={styles.buttonAdd}>
                <button onClick={() => onAdd(counter)} disabled={counter <= 0}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount