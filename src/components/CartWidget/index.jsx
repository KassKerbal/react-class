import React from 'react'
import './styles.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget() {
  return (
    <div className="shoppingCartIcon">
      <ShoppingCartIcon fontSize="large"/>
    </div>
  )
}

export default CartWidget