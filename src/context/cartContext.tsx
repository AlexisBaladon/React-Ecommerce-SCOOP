import React, { useState } from 'react'

import ItemTicket from '../dataTypes/itemTicket';

const CartContext = React.createContext<{items: ItemTicket[],addItem(i: ItemTicket): void}>
                                       ({items: []          ,addItem: () => {}});


const CartProvider: React.FC<{}> = ({children}) => {
  const [cartItems, setCartItems] = useState<ItemTicket[]>([]);

  const addItem = (newItem: ItemTicket) => {
    if (cartItems.every(i => i.id !== newItem.id)) {
      setCartItems([...cartItems, newItem]);
    }
  }

  return (
    <CartContext.Provider value={{items: cartItems, addItem: addItem}}>
      {children}
    </CartContext.Provider>
  )
}

export {CartProvider,CartContext}