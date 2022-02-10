

import React, { useContext } from 'react'

const CartContext = React.createContext('red');

const CartComponent = () => {
  const isDark = useContext(CartContext);
  return (
  <div>cartContext: {isDark}</div>
  )
}

export {CartComponent,CartContext}