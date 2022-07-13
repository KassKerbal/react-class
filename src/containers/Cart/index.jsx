import React, { useContext, useEffect, useState } from 'react'
import { Shop } from '../../context/ShopContext';
import styles from './styles.module.scss';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import backArrow from '../../assets/icons/backArrow.png'

function Cart() {

  const theme = createTheme({
    palette: {
      red: {
        main: '#ff0000',
        contrastText: '#fff',
      },
    },
  });

  const { cart, removeItem, clear } = useContext(Shop);
  const [totalPrice, setTotalPrice] = useState(0);

  const cartMap = cart.map(e => {
    console.log(e)
    return (
      <div className={styles.itemWrap} key={e.id}>
        <div className={styles.itemInfo}>
          <div className={styles.productImg} style={{ backgroundImage: `url(${e.image})` }}></div>
          <div className={styles.titleContainer}>
            <div>{e.title}</div>
            <div>{e.category}</div>
            <div className={styles.remove}><span onClick={() => removeItem(e.id)}>Remove</span></div>
          </div>
        </div>
        <div className={styles.itemBox}>{e.quantity}</div>
        <div className={styles.itemBox}>{e.price} €</div>
        <div className={styles.itemBox}>{e.price * e.quantity} €</div>
      </div>
    )
  }
  )

  useEffect(() => {
    const priceReduce = () => {
      const totalValue = Object.values(cart).reduce((t, obj) => t + (obj.price * obj.quantity), 0);
      console.log(totalValue);
      setTotalPrice(totalValue);
    }
    priceReduce();
  }, [cart])

  return (
    <div>
      {(cart.length !== 0) ?
        <div className={styles.main}>

          <div className={styles.shoppingWrap}>
            <div className={styles.shoppingHeader}>
              <span>Shopping Cart</span>
              <span>Items</span>
            </div>

            <div className={styles.shoppingDetails}>
              <span className={styles.shopBox}>Product Details</span>
              <span className={styles.shopBox}>Quantity</span>
              <span className={styles.shopBox}>Price</span>
              <span className={styles.shopBox}>Total</span>
            </div>

            {cartMap}
            <div className={styles.shoppingFooter}>
              <div className={styles.continueShopping}>
                <Link to='/' className={styles.linkContinueShopping}><img src={backArrow} alt={"back"}/>Continue Shopping </Link>
              </div>
              <div className={styles.totalPrice}>Total Price<div> {totalPrice} €</div> </div>
            </div>

            <div className={styles.clearWrap}>
              <ThemeProvider theme={theme}>
                <Button variant="contained" color="red" onClick={clear}> CLEAR ALL </Button>
              </ThemeProvider>
            </div>
          </div>
        </div>
        :
        <div className={styles.noCartMain}>
          <h2>Cart is empty!</h2>
          <Link className={styles.noCartLink} to="/">Continue Shopping</Link>
        </div>
      }
    </div>
  )
}

export default Cart