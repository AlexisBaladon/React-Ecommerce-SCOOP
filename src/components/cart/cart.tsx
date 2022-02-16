import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

import './cart.css'
const deleteIcon = require('./delete.png')

const Cart: React.FC<{}> = () => {
  const cartContext = useContext(CartContext);
  const items = cartContext.items;

  interface IBuyInfo {
    subtotal: number,
    discount: number,
    shipping: number,
    total: number,
  }

  const [buyInfo, setBuyInfo] = useState<IBuyInfo>({subtotal: 0, discount: 0, shipping: 0, total: 0});
  
  useEffect(() => {
    const bi: IBuyInfo = {subtotal: cartContext.getTotalCost(),
                          discount: 0, 
                          shipping: 0,
                          total: cartContext.getTotalCost(),};
    setBuyInfo(bi);
  }, [cartContext])

  const {subtotal, discount, shipping, total}: IBuyInfo = buyInfo;
  
  return (
    <Row className="justify-content-center">
      <Col md="7" sm="12" id="items-cart-container" >
        <Col id="items-inner-cart">
          {/* Conditional item render */}
          {items.length > 0 ?
          <>
            <Row id="footer-cart" className="py-3">
              <Col sm="4" id="go-back-cart" className=" justify-content-center px-5"> <Link to="/">Volver</Link> </Col>
              <Col sm="4" className="d-flex justify-content-center px-5"><h2>Carrito</h2></Col>

            </Row>
            <Row id="items-row-cart" className="d-flex justify-content-center">
              {items.map((it) => {
                //item destructuring
                const [id, title, pictureUrl, price, amount] : 
                [number, string, string, number, number] =
                [it.id, it.title, it.pictureUrl, it.price, it.amount];
                
                return (
                  <div className="item-container-cart" key={id + title}>
                  <Row className="item-cart justify-content-start">
                    <Col md="6" className="col-item-cart col-item-img-cart"> <Link to={"/item/"+id}><img className="img-item-cart" src={pictureUrl} alt="Item" /></Link> </Col>
                    <Col md="5" className="item-info-container-cart">
                      <Row className="col-item-cart"> <h5 className="item-title-cart"> {title} </h5></Row>
                      <Row className="col-item-cart"> <p className="item-amount-cart"> Cantidad: {amount} </p> </Row>
                      <Row className="col-item-cart"> <h5 className="item-price-cart">{price*amount}US$</h5></Row>
                    </Col>
                    <Col md="1" className="delete-icon-col-cart">
                      <Row className="col-item-cart justify-content-end"> <span className="delete-icon-cart" onClick={() => cartContext.deleteItem(it)}><img src={deleteIcon} alt="Borrar" /></span> </Row>
                    </Col>
                  </Row>
                  </div>
                )
              })}
            </Row>
          </>
          :
          <>
            <div id="no-items-cart">
              <h1>No hay items en tu carrito!</h1>
              <Link to="/"><Button className="button-cart">Compra un item</Button></Link>
            </div>
          </>
         } {/* End of conditional render*/}
        </Col>
      </Col>
      <Col md="5" sm="12" id="container-cart">
        <Row id="products-info-cart" className="justify-content-center">
          <Row id="title-cart">
            <Col className="d-flex justify-content-start px-4"> <h1>Resumen</h1> </Col>
          </Row>
          <Row id="column-names-cart">
            <Row className="buy-info-cart"> 
              <Col className="items-buy-info-cart"><p>Items:</p></Col>
              <Col className="amount-items-buy-info-cart"><p>{items.length}</p> </Col> 
            </Row>
            <Row className="buy-info-cart"> 
              <Col className="title-buy-info-cart"><p>Subtotal</p></Col>
              <Col className="result-buy-info-cart"><p>{subtotal}US$</p> </Col> 
            </Row>
            <Row className="buy-info-cart"> 
              <Col className="title-buy-info-cart"><p>Descuento</p></Col>
              <Col className="result-buy-info-cart"> <p>{discount}US$</p> </Col>
            </Row>
            <Row className="buy-info-cart"> 
              <Col className="title-buy-info-cart"><p>Envío</p></Col> 
              <Col className="result-buy-info-cart"> <p>{shipping > 0 ? shipping : "Gratis"}</p> </Col>
            </Row>
            <hr/>
            <Row className="buy-info-cart">
              <Col className="title-buy-info-cart"><p>Total</p></Col>
              <Col className="result-buy-info-cart"> <p>{total}US$</p> </Col>
            </Row>
          </Row>
        </Row>
        <Row id="button-container-cart" className="justify-content-around">
          <Col md="6" className="summary-button-cart"><Button className="button-cart" >Finalizar Compra</Button></Col>
          <Col md="6" className="summary-button-cart"><Button className="button-cart" onClick={cartContext.deleteAllItems}>Borrar Todo</Button></Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Cart;