import React from 'react';
import {Button} from 'react-bootstrap';

import './itemCount.css'

interface IProps {
  stock: number;
  productCount: number;
  increase(): void;
  decrease(): void;
  onAdd(): void;
}

const ItemCount: React.FC<IProps> = ({stock, productCount, increase, decrease, onAdd}: IProps) => {

  return <> <div className="item-count input-group">
              <span className="item-count-span" onClick={decrease}>
                  <Button className="item-count-btn item-count-element">-</Button>
              </span>
              <input type="text" name="cantItems" 
                     className="item-count-element form-control input-number" 
                     readOnly value={productCount} min="0" max={stock} />
                <span className="item-count-span" onClick={increase}>
                  <Button className="item-count-btn item-count-element">+</Button>
                </span>
            </div>
            <div className ="add-cart-container input-group py-2 display-content-center">
              <Button className = "add-cart" variant="primary" onClick={onAdd}>Agregar al carro</Button>
            </div>
        </>
        
}

export default ItemCount;