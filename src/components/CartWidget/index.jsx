import React, { useContext } from 'react';
import styles from './styles.module.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Shop} from '../../context/ShopContext';


function CartWidget({navigate}) {

  const {cart} = useContext(Shop);

  const totalItems = Object.values(cart).reduce((t, obj) => t + parseInt(obj.quantity), 0);

  return (
    <div className={styles.main} onClick={() => navigate('/cart')}>
      <ShoppingCartIcon fontSize="large"/>
      {
        cart.length !== 0 && <span className={styles.amount}>{totalItems}</span>
      }
    </div>
  )
}

export default CartWidget