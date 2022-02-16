import React, { useState } from 'react'

import ItemTicket from '../dataTypes/itemTicket';
import ProductDetail from '../dataTypes/ProductDetail';

const CartContext = React.createContext<{
    items: ItemTicket[],
    addItem(it: ItemTicket): void,
    deleteItem(it: ItemTicket): void, 
    deleteAllItems(): void, 
    isInCart(id: number, pd: ProductDetail): boolean,
    amountInCart(itemId: number): number,
    getTotalCost(): number,
  }>

  //default values                                    
  ({items: [],
    addItem: (it:ItemTicket)=>{},
    deleteItem: (it:ItemTicket)=>{},
    deleteAllItems: () => {},
    isInCart: (id: number, pd: ProductDetail) => false,
    amountInCart: (itemId: number) => 0,
    getTotalCost: () => 0,
  });


const CartProvider: React.FC<{}> = ({children}) => {
  const [cartItems, setCartItems] = useState<ItemTicket[]>([]);

  const addItem = (newItem: ItemTicket): void => {
    if (cartItems.some(it => it.sameProductAs(newItem))) {
      throw new Error('Este item ya ha sido agregado previamente!');
    }
    else {
      let cartItemsAux = cartItems;
      cartItemsAux.push(newItem)
      setCartItems(cartItemsAux.slice());
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

  const amountInCart = (itemId: number): number => {
    let res = 0;

    cartItems.forEach(it => {
      if (it.id === itemId) res += it.amount;
    })

    return res;
  }

  const getTotalCost = () => {
    let res = 0;

    cartItems.forEach((ci) => res += ci.amount*ci.price);

    return res;
  }

  return (
    <CartContext.Provider 
      value={{items: cartItems,
              addItem: addItem, 
              deleteItem:deleteItem,
              deleteAllItems: deleteAllItems, 
              isInCart: isInCart,
              amountInCart: amountInCart,
              getTotalCost: getTotalCost,
             }}>
      {children}
    </CartContext.Provider>
  )
}

export {CartProvider,CartContext}