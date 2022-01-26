import React from 'react';
import {Card} from 'react-bootstrap';
import './item.css';


const Item = ({item, setSelectedItem, onClick}) => {
  const [imagen, nombre, enStock, descuento] = [item.imagen, item.nombre, item.enStock, item.descuento];
  
  const selectItem = () => {
    if (setSelectedItem) setSelectedItem(item);
    if (onClick) onClick()
  };

  return <>
    <Card id="carta" className="" >
      <Card.Img variant="top" src={imagen}/>
      <Card.Body>
        <Card.Title id="titulo-carta" className="btn stretched-link" onClick={selectItem}>
          <strong>{nombre}</strong>
        </Card.Title>
        <hr></hr>
        <Card.Text>
          {enStock ? 'En stock':'Sin stock'} 
        </Card.Text>
      </Card.Body>
      {descuento?
        <Card.Footer>
          <small className="text-muted">{descuento}% de descuento </small>
        </Card.Footer>
        : null
      }
    </Card>
  </>;
};

export default Item;
