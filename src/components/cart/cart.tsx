import React, { useContext } from 'react'
import { CartContext } from '../../context/context';

const Cart = () => {
  const cartData = useContext(CartContext);
  
  return (
    <div>
      {cartData.items.map((it) =>
        <div key={it.id}>
          <h1>{it.title}</h1>
        </div>   
      )}
    </div>
  )
}

export default Cart;