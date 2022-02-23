import React, { useRef, useState, useContext } from 'react'
import { Alert, Button, CloseButton, Form, ListGroup, Modal, Row } from 'react-bootstrap';
import { CartContext } from '../../context/cartContext';

import './purchaseModal.css'

interface IProps {
  show: boolean;
  onHide: () => any;
  confirmPurchase: () => any;
}

const PurchaseModal: React.FC<IProps> = ({show, onHide, confirmPurchase}) => {

  interface IAlert {
    message: string;
    variant: string;
  }

  const [alertMessage, setAlertMessage] = useState<IAlert | null>(null);
  const phoneRef         = useRef<HTMLInputElement>(null);
  const countryRef       = useRef<HTMLInputElement>(null);
  const cityRef          = useRef<HTMLInputElement>(null);
  const postalCodeRef    = useRef<HTMLInputElement>(null);
  const paymentMethodRef = useRef<HTMLInputElement>(null);

  // Handlers
  const handleHide = () => {
    setAlertMessage(null);
    onHide();
  }

  const handleSubmit = (e: React.FormEvent) => {
    //Prevents page reload
    e.preventDefault();
 
    try {
      //Ref destructuring
      const [phone, country, city, postalCode, paymentMethod]: 
            [string | undefined, string | undefined, string | undefined, string | undefined, string | undefined] = 
            [phoneRef?.current?.value, countryRef.current?.value, cityRef.current?.value, postalCodeRef.current?.value, paymentMethodRef.current?.value];

      if (phone          === undefined) throw new Error("El campo de Teléfono debe ser completado.");
      if (country        === undefined) throw new Error("El campo de País debe ser completado.");
      if (city           === undefined) throw new Error("El campo de Ciudad debe ser completado.");
      if (postalCode     === undefined) throw new Error("El campo de Código Postal debe ser completado.");
      if (paymentMethod  === undefined) throw new Error("El campo de Método de pago debe ser completado.");

      //signup(email, password1);
      setAlertMessage({message: "Compra realizada! Su pedido llegará en menos de 30 minutos a la direción indicada.", 
                       variant: "success"});
    }
    catch(err: any) {
      if (err instanceof Error) {
        setAlertMessage({message: err.message, variant: "danger"});
      }
    }
  }

  const cartContext = useContext(CartContext);
  const items = cartContext.items;

  return <Modal id="modal-purchase"
                show={show}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
      <Modal.Header id="header-purchase">
        <Modal.Title> Confirmar compra </Modal.Title>
        <CloseButton variant="white" onClick={handleHide} />
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="my-2">
            <Form.Label> Teléfono </Form.Label>
            <Form.Control type="number" ref={phoneRef} required></Form.Control>
          </Form.Group>
          <Form.Group className="my-2">
            <Form.Label> País </Form.Label>
            <Form.Control type="text" ref={countryRef} required></Form.Control>
          </Form.Group>
          <Form.Group className="my-2">
            <Form.Label> Ciudad </Form.Label>
            <Form.Control type="text" ref={cityRef} required></Form.Control>
          </Form.Group>
          <Form.Group className="my-2">
            <Form.Label> Código postal </Form.Label>
            <Form.Control type="number" ref={postalCodeRef} required></Form.Control>
          </Form.Group>
          <Form.Group className="my-2">
            <Form.Label> Forma de pago </Form.Label>
            <Form.Control type="text" ref={paymentMethodRef} value={"Efectivo"} required disabled></Form.Control>
          </Form.Group>
          <Form.Group className="my-2">
            <Form.Label> Productos agregados: </Form.Label>
              <ListGroup className="my-2 product-list-purchase-modal">
                {items.map(it =>
                  <ListGroup.Item key={it.id + it.title} className="item-purchase-modal justify-content-between">
                    <p >{it.amount} x</p>  
                    <h6 >{it.title}</h6> 
                    <p className="item-price-purchase-modal">{it.price}US$</p>
                  </ListGroup.Item>
                )}
              </ListGroup>
            <Form.Label className="w-100 my-3 justify-content-center" style={{display: "inline-flex"}}>
              Total: <h5 id="total-cost-purchase-modal" className="mx-1">{cartContext.getTotalCost()}US$</h5>
            </Form.Label>
          </Form.Group>
          {alertMessage && <Alert variant={alertMessage.variant}>{alertMessage.message}</Alert>}
          <Button className="button-purchase-modal w-100" type="submit" onClick={confirmPurchase}>Confirmar compra</Button>
        </Form>
      </Modal.Body>
  </Modal>
}

export default PurchaseModal;