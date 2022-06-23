import React, {useState} from 'react'
import "./styles.scss"
import addIcon from "../../assets/icons/add.png";
import subsIcon from "../../assets/icons/minus.png";

function ItemCount({stock, onAdd}) {

    const [counter, setCounter] = useState(0);

    const handlerAddition = () => {
        if (counter < stock) setCounter(counter + 1);
    }
    const handlerSubtract = () => {
        if (counter > 0) setCounter(counter - 1); 
    }

    return (
        <div className='itemCountMain'>
            <div className="counterBoxWrap">
                <button className="buttonCounterBox" onClick={handlerAddition}><img alt="add" src={addIcon}></img></button>
                <span>{counter}</span>
                <button className="buttonCounterBox" onClick={handlerSubtract}><img alt="subs" src={subsIcon}></img></button>
            </div>
            <div className="buttonAddCartWrap">
                <button onClick={() => onAdd(counter)} disabled={counter <= 0}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount