import React, {useState} from 'react';
import {Button} from 'react-bootstrap';

import './itemCount.css'

interface IProps {
  stock: number;
  initial: number;
  onAdd(num: number, set: React.Dispatch<number>): void;
  onSub(num: number, set: React.Dispatch<number>): void;
}

const ItemCount: React.FC<IProps> = ({stock, initial, onAdd, onSub}: IProps) => {
  const [productCount, setProductCount] = useState<number>(initial);
  const add = () => {if (productCount < stock) onAdd(productCount, setProductCount)};
  const sub = () => {if (productCount >     0) onSub(productCount, setProductCount)};

  return <> <div className="item-count input-group">
              <span className="item-count-span" onClick={sub}>
                  <Button className="item-count-btn item-count-element">-</Button>
              </span>
              <input type="text" name="cantItems" 
                     className="item-count-element form-control input-number" 
                     readOnly value={productCount} min="0" max={stock} />
                <span className="item-count-span" onClick={add}>
                  <Button className="item-count-btn item-count-element">+</Button>
                </span>
            </div>
        </>
        
}

export default ItemCount;