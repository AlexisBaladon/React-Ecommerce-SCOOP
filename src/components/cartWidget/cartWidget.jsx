import React from 'react';
import icon from './icon.png';

const CartWidget = (props) => {

  return (
  <>
    <img id="cart" src={icon} alt={props.alt}/>
  </>
  );
};

export default CartWidget;