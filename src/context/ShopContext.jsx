import React, { createContext, useState } from 'react'
import Swal from 'sweetalert2'

export const Shop = createContext();

function ShopProvider({children}) {

  const [cart, setCart] = useState([]);

  const addItem = (item, amount) => { 
    const isProduct = isInCart(item.id);
    if (isProduct) {
      isProduct.quantity += amount;
      setCart([...cart])
    } else setCart ([...cart, {...item, quantity: amount}]);
  }

  const remplaceItemQuantity = (itemId, quantity) => {
    const isProduct = isInCart(itemId)
    if (isProduct && quantity > 0) {
      isProduct.quantity = quantity;
      setCart([...cart])
    } else {
      removeItem(itemId);
      Swal.fire({
        icon: 'error',
        title: 'No queda stock',
      })
    }
  }

  const removeItem = (itemId) => {
    const filterItems = cart.filter( (e) => e.id !== itemId ); 
    setCart(filterItems);
  }

  const isInCart = (id) => {
    return cart.find(e => e.id === id);
  }

  const clear = () => {
    setCart([])
  }

  const calcTotalPrice = () => {
    const totalValue = Object.values(cart).reduce((t, obj) => t + (obj.price * 100 * obj.quantity) / 100, 0);
    const roundedPrice = (Math.round(totalValue * 100)) / 100
    return roundedPrice;
  }

  return (
    <Shop.Provider value={{cart, addItem, removeItem, clear, calcTotalPrice, remplaceItemQuantity}}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProvider