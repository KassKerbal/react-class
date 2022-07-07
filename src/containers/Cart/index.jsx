import React, { useContext } from 'react'
import { Shop } from '../../context/ShopContext';
import styles from './styles.module.scss';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

  const cartMap = cart.map(e => {
    return (
      <tbody key={e.id}>
        <tr>
          <td>{e.title}</td>
          <td>{e.price} €</td>
          <td>{e.quantity}</td>
          <td><Button variant="contained" onClick={() => removeItem(e.id)}><DeleteIcon /></Button></td>
        </tr>
      </tbody>
    )
  }
  )
  const pato = [];
  return (
    <div>
      {(cart.length !== 0) ?
        <div className={styles.main}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            {cartMap}
          </table>
          <div className={styles.clearWrap}>
            <ThemeProvider theme={theme}>
              <Button variant="contained" color="red" onClick={clear}> CLEAR ALL </Button>
            </ThemeProvider>
          </div>
        </div>
        : null
      }
    </div>
  )
}

export default Cart