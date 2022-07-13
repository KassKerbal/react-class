import React, { useState } from 'react';
import styles from "./styles.module.scss";
import ArrowUp from "../../assets/icons/ArrowUp"
import ArrowDown from "../../assets/icons/ArrowDown"

function ItemCount({ stock, initial, onAdd }) {

    const [value, setValue] = useState(parseInt(initial));

    const handlerAddition = () => {
        if (value < stock) setValue(parseInt(value) + 1);
    }
    const handlerSubtract = () => {
        if (value > 0) setValue(parseInt(value) - 1);
    }

    const handlerChange = (e) => {
        if (e.target.value < stock) {
            setValue(e.target.value);
        } else setValue(stock);
     }

    return (
        <div className={styles.main}>
            
            <div className={styles.counterWrap}>
                <input type="number" className={styles.counterNumber} value={value} onChange={handlerChange} ></input>
                <div className={styles.buttonCounter} >
                    <button onClick={handlerAddition}><ArrowUp /></button>
                    <button onClick={handlerSubtract}><ArrowDown /></button>
                </div>
            </div>
            <div className={styles.buttonAdd}>
                <button onClick={() => onAdd(value)} disabled={value <= 0}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount