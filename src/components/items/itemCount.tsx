import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import './itemCount.css'

interface IProps {
  stock: number;
  initial: number;
  onAdd(num: number, set: React.Dispatch<number>): void;
  onSub(num: number, set: React.Dispatch<number>): void;
}
  

const ItemCount = ({stock, initial, onAdd, onSub}: IProps) => {
  const [itemsCarrito, sumaItemsCarrito] = useState(initial);
  const sumar = () => {if (itemsCarrito < stock) onAdd(itemsCarrito, sumaItemsCarrito)};
  const restar = () => {if (itemsCarrito > 0) onSub(itemsCarrito, sumaItemsCarrito)};

  return <> <div className="item-count input-group">
                <span className="item-count-span" onClick={restar}>
                    <Button className="item-count-btn item-count-element">-</Button>
                </span>
                <input type="text" name="cantItems" 
                        className="item-count-element form-control input-number" 
                        readOnly value={itemsCarrito} min="0" max={stock} />
                 <span className="item-count-span" onClick={sumar}>
                    <Button className="item-count-btn item-count-element">+</Button>
                </span>
            </div>
        </>
        
}

export default ItemCount;