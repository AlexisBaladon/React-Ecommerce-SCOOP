import React, { useRef, useState, useContext, useEffect } from 'react'
import { Alert, Button, CloseButton, Form, ListGroup, Modal } from 'react-bootstrap';

import { CartContext } from '../../context/cartContext';

import PaymentMethod from '../../dataTypes/purchase/paymentMethod';
import PurchaseInfo from '../../dataTypes/purchase/purchaseInfo';

import './purchaseModal.css'

interface IProps {
  show: boolean;
  onHide: () => any;
  confirmPurchase: (purchaseInfo: PurchaseInfo) => any;
  orderId: string;
  userEmail: string;
}

const PurchaseModal: React.FC<IProps> = ({show, onHide, confirmPurchase, orderId, userEmail}) => {

  interface IAlert {
    message: string;
    variant: string;
  }

  const [alertMessage, setAlertMessage] = useState<IAlert | null>(null);

  const cartContext = useContext(CartContext);
  const {items, getTotalCost} = cartContext;

  const phoneRef         = useRef<HTMLInputElement>(null);
  const countryRef       = useRef<HTMLInputElement>(null);
  const cityRef          = useRef<HTMLInputElement>(null);
  const postalCodeRef    = useRef<HTMLInputElement>(null);
  const paymentMethodRef = useRef<HTMLInputElement>(null);

  const handleHide = () => {
    setAlertMessage(null);
    onHide();
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
 
    try {
      const [phone, country, city, postalCode, paymentMethod]: 
            [string | undefined, string | undefined, string | undefined, number | undefined, string | undefined] = 
            [phoneRef?.current?.value, countryRef.current?.value, cityRef.current?.value, Number(postalCodeRef.current?.value),  paymentMethodRef.current?.value];

      if (phone          === undefined) throw new Error("El campo de Teléfono debe ser completado.");
      if (country        === undefined) throw new Error("El campo de País debe ser completado.");
      if (city           === undefined) throw new Error("El campo de Ciudad debe ser completado.");
      if (postalCode     === undefined) throw new Error("El campo de Código Postal debe ser completado.");
      if (paymentMethod  === undefined) throw new Error("El campo de Método de pago debe ser completado.");
      if (!Number(phone)) throw new Error("El teléfono ingresado debe ser un número");
      // Checks if the string is an instance of PaymentMethod 
      if (Object.values(PaymentMethod).every((pm => pm !== paymentMethod))) throw new Error("El campo de Método de pago ingresado es inválido.");

      confirmPurchase(new PurchaseInfo(Number(phone), country, city, postalCode, (paymentMethod as PaymentMethod), new Date(), getTotalCost()))
    }
    catch(err: any) {
      if (err instanceof Error) {
        setAlertMessage({message: err.message, variant: "danger"});
      }
    }
  }

  useEffect(() => {
    if (orderId) {
      setAlertMessage({message: `Compra realizada! Será informado a la brevedad sobre el estado de su envío. Su código de orden es: ${orderId}`, 
                       variant: "success"});
    }
  }, [orderId])
  
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
                    <p className="item-price-purchase-modal">{it.price * it.amount}US$</p>
                  </ListGroup.Item>
                )}
              </ListGroup>
            <Form.Label className="w-100 my-3 justify-content-center" style={{display: "inline-flex"}}>
              Total: <h5 id="total-cost-purchase-modal" className="mx-1">{cartContext.getTotalCost()}US$</h5>
            </Form.Label>
          </Form.Group>
          {alertMessage && <Alert variant={alertMessage.variant}>{alertMessage.message}</Alert>}
          <Button className="button-purchase-modal w-100" type="submit" onClick={handleSubmit}>Confirmar compra ({userEmail})</Button>
        </Form>
      </Modal.Body>
  </Modal>
}

export default PurchaseModal;