import React from 'react';
import styles from './styles.module.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget() {
  return (
    <div className={styles.main}>
      <ShoppingCartIcon fontSize="large"/>
    </div>
  )
}

export default CartWidget