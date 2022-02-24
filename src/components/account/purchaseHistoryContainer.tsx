import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { SessionContext } from '../../context/sessionContext';
import { getOrdersByEmail } from '../../data/purchaseHandler';
import Order from '../../dataTypes/purchase/order';
import PurchaseHistory from './purchaseHistory';

const PurchaseHistoryContainer = () => {
  //session context
  const sessionContext = useContext(SessionContext);
  const loggedUser = sessionContext.loggedUser;

  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    let isMounted = true;
    const setIfMounted = (ords: Order[]) => {
      if (isMounted) setOrders(ords);
    }

    if (loggedUser && loggedUser.email) {
      getOrdersByEmail(loggedUser.email, setIfMounted);
    }
    else {
      console.warn("No se puede acceder a una ruta privada sin haber iniciado sesión.");
    }
  
    return () => {isMounted = true;}
  }, [])
  

  return <>
    <div className="py-5">
      <Link to="/">Volver</Link>
    </div>
    <div className="py-2">
      <PurchaseHistory orders={orders} />
    </div>
  </>
}

export default PurchaseHistoryContainer;