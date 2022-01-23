import React from 'react';
import {Card, Button} from 'react-bootstrap';

const Item = (props) => {
  let item = props.item;
  const [imagen, nombre, enStock] = [item.imagen, item.nombre, item.enStock];
  return <>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text> {enStock ? 'En stock':'Sin stock'} </Card.Text>
            <Button variant="primary">Ver producto</Button>
        </Card.Body>
    </Card>
  </>;
};

export default Item;
