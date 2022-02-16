import React, { useContext } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

import './cart.css'
const deleteIcon = require('./delete.png')

const Cart = () => {
  const cartContext = useContext(CartContext);
  const items = cartContext.items;

  return (
    <Row className="justify-content-center">
      <Col md="7" sm="12" id="items-cart-container" >
        <Col id="items-inner-cart">
          <Row id="footer-cart" className="py-3">
            <Col sm="4" id="go-back-cart" className="d-flex justify-content-start px-5"> <Link to="/">Volver</Link> </Col>
            <Col sm="4" className="d-flex justify-content-center px-5"><h2>Carrito</h2></Col>

          </Row>
          <Row>
            {items.map((it) => {
              //item destructuring
              const [id, title, pictureUrl, price, amount] : 
                    [number, string, string, number, number] =
                    [it.id, it.title, it.pictureUrl, it.price, it.amount];

              return (
                <div className="item-container-cart" key={id + title}>
                <Row className="item-cart">
                  <Col md="6" className="col-item-cart col-item-img-cart"> <Link to={"/item/"+id}><img className="img-item-cart" src={pictureUrl} alt="Item" /></Link> </Col>
                  <Col md="5" className="item-info-container-cart">
                    <Row className="col-item-cart"> <h5 className="item-title-cart"> {title} </h5></Row>
                    <Row className="col-item-cart"> <p className="item-amount-cart"> Cantidad: {amount} </p> </Row>
                    <Row className="col-item-cart"> <h5 className="item-price-cart">{price*amount}US$</h5></Row>
                  </Col>
                  <Col md="1" className="d-flex justify-content-start">
                    <Row className="col-item-cart justify-content-end"> <span className="delete-icon-cart" onClick={() => cartContext.deleteItem(it)}><img src={deleteIcon} alt="Borrar" /></span> </Row>
                  </Col>
                </Row>
                </div>
              )
            })}
          </Row>
        </Col>
      </Col>
      <Col md="5" sm="12" id="container-cart">
        <Row id="products-info-cart">
          <Row id="title-cart">
            <Col className="d-flex justify-content-start px-4"> <h1>Resumen</h1> </Col>
          </Row>
          <Row id="column-names-cart">
            <Row className="buy-info-cart"> <Col className="title-buy-info-cart">Subtotal</Col> <Col className="result-buy-info-cart"> {cartContext.getTotalCost()}US$ </Col> </Row>
            <Row className="buy-info-cart"> <Col className="title-buy-info-cart">Descuento</Col> <Col className="result-buy-info-cart"> 0US$ </Col></Row>
            <Row className="buy-info-cart"> <Col className="title-buy-info-cart">Envío</Col> <Col className="result-buy-info-cart"> Gratis </Col></Row>
            <Row className="buy-info-cart"> <Col className="title-buy-info-cart">Total</Col> <Col className="result-buy-info-cart"> {cartContext.getTotalCost()}US$ </Col></Row>
          </Row>
          <Row id="button-container-cart" className="justify-content-center">
            <Col><Button className="button-cart" >Finalizar Compra</Button></Col>
            <Col><Button className="button-cart" onClick={cartContext.deleteAllItems}>Borrar Todo</Button></Col>
          </Row>
        </Row>
      </Col>
    </Row>
  )
}

export default Cart;