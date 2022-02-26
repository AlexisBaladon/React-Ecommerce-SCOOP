import React, { useState } from 'react';
import {Button} from 'react-bootstrap';

import './itemCount.css'

interface IProps {
  stock: number;
  initial: number
  increase(productCount: number, setProductCount:(pc: number) => any): void;
  decrease(productCount: number, setProductCount:(pc: number) => any): void;
  onAdd(quantityToAdd: number): void;
}

const ItemCount: React.FC<IProps> = ({stock, initial, increase, decrease, onAdd}: IProps) => {
  const [productCount, setProductCount] = useState<number>(initial);
  const decreaseHandler = () => decrease(productCount, setProductCount);
  const increaseHandler = () => increase(productCount, setProductCount);
  const onAddHandler = () => onAdd(productCount);

  return <> <div className="item-count input-group">
              <span className="item-count-span" onClick={decreaseHandler}>
                  <Button className="item-count-btn item-count-element">-</Button>
              </span>
              <input type="text" name="cantItems" 
                     className="item-count-element form-control input-number" 
                     readOnly value={productCount} min="0" max={stock} />
                <span className="item-count-span" onClick={increaseHandler}>
                  <Button className="item-count-btn item-count-element">+</Button>
                </span>
            </div>
            <div className ="add-cart-container input-group py-2 display-content-center">
              <Button className = "add-cart" variant="primary" onClick={onAddHandler}>Agregar al carro</Button>
            </div>
        </>
        
}

export default ItemCount;