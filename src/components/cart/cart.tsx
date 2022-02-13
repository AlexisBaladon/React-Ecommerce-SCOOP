import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext';

const Cart = () => {
  const cartData = useContext(CartContext);
  const items = cartData.items;

  return (
    <div>
      {items.map((it) => {
        
        //item destructuring
        const [id, title, amount] : [number, string, number] =
        [it.id, it.getTicketTitle(), it.amount];

        return (
          <div key={id}>
            <h1>{title}</h1>
            <h2>{amount}</h2>
          </div>
        )
      })}
      
    </div>
  )
}

export default Cart;