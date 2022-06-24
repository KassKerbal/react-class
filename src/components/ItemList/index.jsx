import React, { useState } from 'react';
import Item from '../Item';
import "./styles.scss";

function ItemList({ items }) {

  const [isFocus, setItemFocus] = useState(0);
  const handlerProductSelect = (e) => {
    setItemFocus(e)
  };

  const onAdd = (counter) => {
    let numberOfStock = counter;
    console.log(numberOfStock);
  }

  const itemListMap = items.map((e) => <Item focus={isFocus} onClickEvent={handlerProductSelect} item={e} key={e.id} onAdd={onAdd} />);

  return (
    <div className='itemListWrap'>
      {itemListMap}
    </div>
  )
}

export default ItemList