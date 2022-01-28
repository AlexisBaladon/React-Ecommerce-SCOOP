import React from 'react';
import {Card, Button} from 'react-bootstrap';
import './item.css';
import ItemCount from './itemCount.jsx'


const Item = ({item, setSelectedItem, onClick, 
               initial, onAdd, onSub}) => {
  const [imagen, nombre, cantStock] = [item.imagen, item.nombre, item.cantStock];
  
  const selectItem = () => {
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
