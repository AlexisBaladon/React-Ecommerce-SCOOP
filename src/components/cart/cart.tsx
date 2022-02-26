import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/cartContext';
import { ModalContext } from '../../context/modalContext';
import { SessionContext } from '../../context/sessionContext';
import PurchaseModal from './purchaseModal';

import { purchaseItems } from '../../data/purchaseHandler';
import Order from '../../dataTypes/purchase/order';
import PurchaseInfo from '../../dataTypes/purchase/purchaseInfo';
import User from '../../dataTypes/user/user';

import './cart.css'

const deleteIcon = require('./delete.png')

const Cart: React.FC<{}> = () => {
  const sessionContext = useContext(SessionContext);
  const modalContext = useContext(ModalContext);
  const cartContext = useContext(CartContext);

  const { loggedUser } = sessionContext;
  const { openLoginModal, } = modalContext;
  const { items, getNumberOfProducts, getTotalCost, deleteItem, deleteAllItems } = cartContext;


  interface IBuyInfo {
    itemAmount: number
    subtotal: number,
    discount: number,
    shipping: number,
    total: number,
  }

  const [buyInfo, setBuyInfo] = useState<IBuyInfo>({itemAmount: 0, subtotal: 0, discount: 0, shipping: 0, total: 0});
  const [orderId, setOrderId] = useState<string>("");
  const [isPurchaseModalOpened, setPurchaseModalOpened] = useState<boolean>(false);
  
  const onHide = () => setPurchaseModalOpened(false);

  const handlePurchase = () => {
    if (loggedUser) setPurchaseModalOpened(true);
    else openLoginModal();
  }

  const confirmPurchase = (purchaseInfo: PurchaseInfo) => {
    if (items.length < 1) throw new Error("Para realizar una compra debe tener al menos un producto en el carrito.");

    if (loggedUser && loggedUser.email) {
      purchaseItems(new Order(
        purchaseInfo.phoneNumber + purchaseInfo.date.toString(),
        new User(loggedUser.email),
        purchaseInfo,
        items
      ), setOrderId)

      deleteAllItems();
    }
    else {
      throw new Error("El usuario debe haber iniciado sesión para registrar su compra.");
    }
    
  }

  useEffect(() => {
    const bi: IBuyInfo = { itemAmount: getNumberOfProducts(),
                           subtotal  : getTotalCost(),
                           discount  : 0, 
                           shipping  : 0,
                           total     : getTotalCost(),
                          };
    setBuyInfo(bi);
  }, [getNumberOfProducts, getTotalCost])

  const {itemAmount, subtotal, discount, shipping, total}: IBuyInfo = buyInfo;
  
  return <>
    {loggedUser?.email &&
      <PurchaseModal show={isPurchaseModalOpened} onHide={onHide} confirmPurchase={confirmPurchase} orderId={orderId} userEmail={loggedUser.email} />
    }
    <Row className="justify-content-center">
      <Col md="7" sm="12" id="items-cart-container" >
        <Col id="items-inner-cart">
          {itemAmount > 0 ?
          <>
            <Row id="footer-cart" className="py-4">
              <Col sm="4" id="go-back-cart" className=" justify-content-center px-5"> <Link to="/">Volver</Link> </Col>
              <Col sm="4" className="d-flex justify-content-center px-5"><h2>Carrito</h2></Col>

            </Row>
            <Row id="items-row-cart" className="d-flex justify-content-center">
              {items.map((it) => {
                const [id, title, pictureUrl, price, amount] : 
                [string, string, string, number, number] =
                [it.id, it.title, it.pictureUrl, it.price, it.amount];
                
                return (
                  <div className="item-container-cart" key={id + title}>
                  <Row className="item-cart justify-content-start">
                    <Col md="6" className="col-item-cart col-item-img-cart justify-content-center"> <Link to={"/item/"+id}><img className="img-item-cart" src={pictureUrl} alt="Item" /></Link> </Col>
                    <Col md="5" className="item-info-container-cart">
                      <Row className="col-item-cart"> <h5 className="item-title-cart"> {title} </h5></Row>
                      <Row className="col-item-cart"> <p className="item-amount-cart"> Cantidad: {amount} </p> </Row>
                      <Row className="col-item-cart"> <h5 className="item-price-cart">{price*amount}US$</h5></Row>
                    </Col>
                    <Col md="1" className="delete-icon-col-cart  justify-content-end">
                      <Row className="col-item-cart"> <span className="delete-icon-cart" onClick={() => deleteItem(it)}><img src={deleteIcon} alt="Borrar" /></span> </Row>
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
              <Link to="/"><Button className="button-cart">Ir a la tienda</Button></Link>
            </div>
          </>
         }
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
              <Col className="amount-items-buy-info-cart"><p>{itemAmount}</p> </Col> 
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
          <Col md="6" className="summary-button-cart"><Button className="button-cart" onClick={handlePurchase}>Finalizar Compra</Button></Col>
          <Col md="6" className="summary-button-cart"><Button className="button-cart" onClick={deleteAllItems}>Borrar Todo</Button></Col>
        </Row>
      </Col>
    </Row>
  </>
}

export default Cart;