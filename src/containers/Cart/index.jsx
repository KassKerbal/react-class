import React, { useContext, useEffect, useState } from 'react'
import { Shop } from '../../context/ShopContext';
import styles from './styles.module.scss';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import backArrow from '../../assets/icons/backArrow.png'
import LenguageCategoryEs from '../../utils/LenguageCategoryEs';
import Theme from '../../assets/themes/Themes';
import UserForm from '../../components/userForm';
import GenerateOrder from '../../utils/GenerateOrder';
import SaveOrder from '../../utils/SaveOrder';

function Cart() {

  const { cart, remplaceItemQuantity, removeItem, clear, calcTotalPrice } = useContext(Shop);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isMakeOrder, setMakeOrder] = useState(false);
  const [isValidation, setValidation] = useState({ status: "idle", items: [] });

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
        <div className={styles.itemBox}>{Math.round(e.price * e.quantity * 100) / 100} €</div>
      </div>
    )
  }
  )

  useEffect(() => {
    const total = calcTotalPrice()
    setTotalPrice(total);
  }, [cart])

  const handleClose = (e) => {
    setMakeOrder(e);
  }

  const handleOrder = (user) => {
    const order = GenerateOrder(user, cart, totalPrice);
    SaveOrder(cart, order, (e) => setValidation(e));
  }

  useEffect(() => {
    switch (isValidation.status) {
      case "OrderCompleated":
        clear()
        break;
      case "BuyRemaining":
        isValidation.items.forEach((product) => {
          remplaceItemQuantity(product.id, product.stock);
        })
        break;
      case "OutOfStock":
        isValidation.items.forEach((product) => {
          removeItem(product.id);
        })
        break;

      default:
        break;
    }
  }, [isValidation])

  return (
    <>
      {(cart.length !== 0) ?
        <> {isMakeOrder && <div className={styles.userFormWrap}> <UserForm generateOrder={handleOrder} handlerClose={handleClose} /> </div>}
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

              <div className={styles.optionsWrap}>
                <ThemeProvider theme={Theme}>
                  <Button variant="contained" color="red" onClick={clear}> BORRAR TODO </Button>
                </ThemeProvider>

                <ThemeProvider theme={Theme}>
                  <Button variant="contained" color="green" onClick={() => handleClose(true)}> REALIZAR PEDIDO </Button>
                </ThemeProvider>

              </div>
            </div>
          </div>
        </>
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