import React, { useContext, useEffect, useState } from 'react'
import { Shop } from '../../context/ShopContext';
import styles from './styles.module.scss';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import backArrow from '../../assets/icons/backArrow.png'
import LenguageCategoryEs from '../../scripts/LenguageCategoryEs';

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
    const category = LenguageCategoryEs(e);

    return (
      <div className={styles.itemWrap} key={e.id}>
        <div className={styles.itemInfo}>
          <div className={styles.productImg} style={{ backgroundImage: `url(${e.image})` }}></div>
          <div className={styles.titleContainer}>
            <div>{e.title}</div>
            <div>{category}</div>
            <div className={styles.remove}><span onClick={() => removeItem(e.id)}>Eliminar</span></div>
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
      const totalValue = Object.values(cart).reduce((t, obj) => t + (obj.price * 100 * obj.quantity) / 100, 0);
      const roundedPrice = (Math.round(totalValue * 100)) / 100
      setTotalPrice(roundedPrice);
    }
    priceReduce();
  }, [cart])

  return (
    <>
      {(cart.length !== 0) ?
        <div className={styles.main}>

          <div className={styles.shoppingWrap}>
            <div className={styles.shoppingHeader}>
              <span>Carro De Compras</span>
              <span>Productos</span>
            </div>

            <div className={styles.shoppingDetails}>
              <span className={styles.shopBox}>Detalles del Producto</span>
              <span className={styles.shopBox}>Cantidad</span>
              <span className={styles.shopBox}>Precio</span>
              <span className={styles.shopBox}>Total</span>
            </div>

            {cartMap}
            <div className={styles.shoppingFooter}>
              <div className={styles.continueShopping}>
                <Link to='/' className={styles.linkContinueShopping}><img src={backArrow} alt={"back"} />Seguir Comprando</Link>
              </div>
              <div className={styles.totalPrice}>Precio Total<div> {totalPrice} €</div> </div>
            </div>

            <div className={styles.clearWrap}>
              <ThemeProvider theme={theme}>
                <Button variant="contained" color="red" onClick={clear}> BORRAR TODO </Button>
              </ThemeProvider>
            </div>
          </div>
        </div>
        :
        <div className={styles.noCartMain}>
          <h2>¡Tu carrito está vacío!</h2>
          <Link className={styles.noCartLink} to="/">Seguir Comprando</Link>
        </div>
      }
    </>
  )
}

export default Cart