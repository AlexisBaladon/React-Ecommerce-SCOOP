import React from 'react';
import {Card, Button} from 'react-bootstrap';
import './item.css';

const Item = (props) => {
  let item = props.item;
  const [imagen, nombre, enStock] = [item.imagen, item.nombre, item.enStock];
  return <>
    <Card id="carta" className = "col-12" style={{ width: '13rem'}}>
        <Card.Img className = "" variant="top" src={imagen} />
        <Card.Body className = "row d-flex justify-content-center">
            <Card.Title className = "row d-flex justify-content-center ">{nombre}</Card.Title>
            <Card.Text className = "row d-flex justify-content-center">
              {enStock ? 'En stock':'Sin stock'} 
            </Card.Text>
            <Button variant="outline-info" >Ver producto</Button>
        </Card.Body>
    </Card>
  </>;
};

export default Item;
