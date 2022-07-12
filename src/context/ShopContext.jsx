import React, { createContext, useState } from 'react'

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

  return (
    <Shop.Provider value={{cart, addItem, removeItem, clear}}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProvider