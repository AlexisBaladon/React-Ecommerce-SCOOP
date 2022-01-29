import React, { FunctionComponent } from 'react';
import {Card, Button} from 'react-bootstrap';
import DtItem from '../../dataTypes/item';
import './item.css';
import ItemCount from './itemCount'


interface IProps {
  item: DtItem;
  setSelectedItem: React.Dispatch<DtItem> | null;
  initial: number;
  onClick: Function;
  onAdd(num: number, set: React.Dispatch<number>): void;
  onSub(num: number, set: React.Dispatch<number>): void;
}

const Item: FunctionComponent<IProps> = 
  ({item, setSelectedItem, initial, onClick, onAdd, onSub}: IProps) => {
  
  const [imagen, nombre, cantStock]: [string, string, number] =
      [item.pictureUrl, item.title, 1];
  
  const selectItem = (): void => {
    if (setSelectedItem) setSelectedItem(item);
    if (onClick) onClick()
  };

  return <>
    <Card id="carta" className="" >
      <Card.Img variant="top" src={imagen}/>
      <Card.Body style={{padding: "0 0 0.5rem 0"}}>
        <Card.Title id="titulo-carta" className="btn stretched-link" onClick={selectItem}>
          <strong>{nombre}</strong>
        </Card.Title>
        <hr></hr>
        <Card.Text className ="texto-carta">
          Stock: {cantStock ? cantStock : 0} 
        </Card.Text>
        <div className = "item-count-container">
          <ItemCount 
            stock = {cantStock}
            initial = {initial}
            onAdd = {onAdd}
            onSub = {onSub}
          />
        </div>
        <div className ="aniadir-carro-container input-group py-2 display-content-center">
          <Button className = "aniadir-carro" variant="primary">Agregar al carro</Button>
        </div>
      </Card.Body>
    </Card>
  </>;
};

export default Item;
