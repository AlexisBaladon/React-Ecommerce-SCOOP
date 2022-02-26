import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { SessionContext } from '../../context/sessionContext';
import PurchaseHistory from './purchaseHistory';
import Error from '../errors/error';
import Loading from '../loading/loading';

import { getOrdersByEmail } from '../../data/purchaseHandler';
import Order from '../../dataTypes/purchase/order';

import './purchaseHistoryContainer.css'

const PurchaseHistoryContainer = () => {
  const sessionContext = useContext(SessionContext);
  const { loggedUser } = sessionContext;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    let isMounted = true;
    const setIfMounted = (ords: Order[]) => {
      if (isMounted) setOrders(ords);
      setIsLoading(false);
    }

    if (loggedUser && loggedUser.email) {
      getOrdersByEmail(loggedUser.email, setIfMounted);
    }
    else {
      console.warn("No se puede acceder a una ruta privada sin haber iniciado sesión.");
    }
  
    return () => {isMounted = true;}
  }, [loggedUser])
  

  return <>
  {loggedUser?
    <>
      {isLoading?
        <Loading />
        :
        <>
        {orders.length > 0?
        <>
        <Row id="header-history-container" className="py-5">
          <Col md="4">
            <Link to="/">Volver</Link>
          </Col>
          <Col md="4">
            <h1 className="my-3">Historial de compra</h1>
          </Col>
        </Row>
          <div className="pt-2">
            <PurchaseHistory orders={orders} />
          </div>
        </>
        :
        <div id="no-orders-history">
            <h3 className="py-5" style={{color: "gray"}}>No hay compras en tu historial!</h3>
            <Link to="/"><Button id="button-history">Ir a la tienda</Button></Link>
          </div>
        }
      </>
      }
    </>
    :
    <Error title="Esta es una ruta privada" description="Debes estar registrado para acceder a esta página!" />
  }
  </>
}

export default PurchaseHistoryContainer;