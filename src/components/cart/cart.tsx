import React, { useContext } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

import './cart.css'

const Cart = () => {
  const cartData = useContext(CartContext);
  const items = cartData.items;

  return (
    <div>
      <Col id="container-cart">
        <Row id="title-cart">
          <Col> <h1>Carrito</h1> </Col>
          <Col> {items.length} items </Col>
        </Row>
        <Row id="column-names-cart">
          <Col md="3"> Producto </Col>
          <Col md="3"> Título </Col>
          <Col md="2"> Cantidad </Col>
          <Col md="3"> Precio </Col>
          <Col md="2"></Col>
        </Row>
        <Row id="items-cart-container">
        {items.map((it) => {
          //item destructuring
          const [id, title, pictureUrl, price, amount] : 
                [number, string, string, number, number] =
                [it.id, it.getTicketTitle(), it.pictureUrl, it.price, it.amount];

          return (
            <div key={id + title}>
            <Row className="item-cart">
              <Col md="3"> <img width="150px" src={pictureUrl} alt="Item" /> </Col>
              <Col md="3"> {title} </Col>
              <Col md="2"> {amount} </Col>
              <Col md="3"> <h5 className="item-price-cart">{price*amount}US$</h5></Col>
              <Col md="1"> <Button onClick={() => cartData.deleteItem(it)}>X</Button> </Col>
            </Row>
            <hr />
            </div>
          )
        })}
        </Row>
        <Row id="footer-cart" className="justify-content-start d-flex">
          <Col> <Link to="/"> Volver </Link> </Col>
          <Col> <Button onClick={cartData.deleteAllItems}>Borrar todo</Button> </Col>
        </Row>
      </Col>

      
      
    </div>
  )
}

export default Cart;