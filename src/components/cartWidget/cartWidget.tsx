import React from 'react';
const icon = require('./icon.png');

interface IProps {
  id: string;
  alt: string;
}

const CartWidget: React.FC<IProps> = ({id,alt}: IProps) => {
  return <>
    <img id={id} src={icon} alt={alt}/>
  </>
};

export default CartWidget;