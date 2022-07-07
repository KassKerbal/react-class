import React, { useContext } from 'react';
import styles from './styles.module.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Shop} from '../../context/ShopContext';

function CartWidget() {

  const {cart} = useContext(Shop);

  return (
    <div className={styles.main}>
      <ShoppingCartIcon fontSize="large"/>
      <span className={styles.amount}>{(cart.length !== 0) ? cart.length : null}</span>
    </div>
  )
}

export default CartWidget