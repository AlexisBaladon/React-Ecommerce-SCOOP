import React, { useState } from 'react'
import Category from '../dataTypes/category';

import ItemTicket from '../dataTypes/itemTicket';
import ProductDetail from '../dataTypes/ProductDetail';

const CartContext = React.createContext<{
    items: ItemTicket[],
    addItem(it: ItemTicket): void,
    deleteItem(it: ItemTicket): void, 
    deleteAllItems(): void, 
    isInCart(id: number, pd: ProductDetail): boolean,
  }>

  //default values                                    
  ({items: [],
    addItem: (it:ItemTicket)=>{},
    deleteItem: (it:ItemTicket)=>{},
    deleteAllItems: () => {},
    isInCart: (id: number, pd: ProductDetail) => false,
  });


const CartProvider: React.FC<{}> = ({children}) => {
  const [cartItems, setCartItems] = useState<ItemTicket[]>([]);

  const addItem = (newItem: ItemTicket): void => {
    if (cartItems.some(it => it.sameProductAs(newItem))) {
      throw new Error('Este item ya ha sido agregado previamente!');
    }
    else {
      setCartItems([...cartItems, newItem]);
    }
  }

  const deleteItem = (deletedItem: ItemTicket): void => {
    setCartItems(cartItems.filter((it: ItemTicket) => {
      return !(it.equals(deletedItem) && it.sameProductAs(deletedItem));
    }));
  }

  const deleteAllItems = (): void => {
    setCartItems([]);
  }

  const isInCart = (itemId: number, productDetail: ProductDetail): boolean => {
    return cartItems.some((it) => it.id === itemId && it.sameDetails(productDetail));
  }

  return (
    <CartContext.Provider 
      value={{items: cartItems,
              addItem: addItem, 
              deleteItem:deleteItem,
              deleteAllItems: deleteAllItems, 
              isInCart: isInCart}}>
      {children}
    </CartContext.Provider>
  )
}

export {CartProvider,CartContext}