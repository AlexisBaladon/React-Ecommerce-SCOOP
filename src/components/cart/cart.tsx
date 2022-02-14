import React, { useContext } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

import './cart.css'
const deleteIcon = require('./delete.png')

const Cart = () => {
  const cartData = useContext(CartContext);
  const items = cartData.items;

  return (
    <div>
      <Col id="container-cart">
        <Row id="title-cart">
          <Col className="d-flex justify-content-start px-5"> <h1>Carrito</h1> </Col>
          <Col id="amount-items-cart" className="d-flex justify-content-end px-5"> {items.length} items </Col>
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
                [it.id, it.title, it.pictureUrl, it.price, it.amount];

          return (
            <div className="item-container-cart" key={id + title}>
            <Row className="item-cart">
              <Col md="3"> <Link to={"/item/"+id}><img width="150px" src={pictureUrl} alt="Item" /></Link> </Col>
              <Col md="3"> {title} </Col>
              <Col md="2"> {amount} </Col>
              <Col md="3"> <h5 className="item-price-cart">{price*amount}US$</h5></Col>
              <Col md="1"> <span className="delete-icon-cart" onClick={() => cartData.deleteItem(it)}><img width="35px" src={deleteIcon} alt="Borrar" /></span> </Col>
            </Row>
            </div>
          )
        })}
        </Row>
        <Row id="footer-cart" className="py-3">
          <Col className="d-flex justify-content-start px-5"> <Link to="/"> Volver </Link> </Col>
          <Col className="d-flex justify-content-end px-5"> <Button onClick={cartData.deleteAllItems}>Borrar todo</Button> </Col>
        </Row>
      </Col>

      
      
    </div>
  )
}

export default Cart;