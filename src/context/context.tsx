import React, { useContext, useState } from 'react'
import ItemList from '../components/items/list/itemList';
import Item from '../dataTypes/item';

const CartContext = React.createContext<{items: Item[],addItem: Function}>
                                       ({items: [],addItem: () => {}});

const CartProvider: React.FC<{}> = ({children}) => {
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const addItem = (newItem: Item) => {
    if (cartItems.every(i => i.id !== newItem.id)) {
        console.log(1)
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