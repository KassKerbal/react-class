import React from 'react';
import Item from '../Item';
import styles from "./styles.module.scss";
import { useNavigate } from 'react-router-dom';

function ItemList({ items }) {

  const navigate = useNavigate();

  const handleNavigate = (e) => {
    navigate(e);
  }

  const itemListMap = items.map((e) => {
    return (

      <Item
        onClickNavigate={handleNavigate}
        item={e}
        key={e.id}
      />
    )}
  );

  return (
    <div className={styles.main}>
      {itemListMap}
    </div>
  )
}

export default ItemList