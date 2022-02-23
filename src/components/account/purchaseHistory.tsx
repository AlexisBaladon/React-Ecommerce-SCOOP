import React from 'react'
import { Table } from 'react-bootstrap';
import ItemPurchase from '../../dataTypes/items/itemPurchase';
import Order from '../../dataTypes/purchase/order';
import PaymentMethod from '../../dataTypes/purchase/paymentMethod';
import PurchaseInfo from '../../dataTypes/purchase/purchaseInfo';

import './purchaseHistory.css'

interface IProps {
  orders: Order[];
}

const PurchaseHistory: React.FC<IProps> = ({orders}) => {
  return <div id="purchase-history" className="">
    <Table id="table-purchase-history" responsive striped bordered hover>
      <thead>
        <tr>
        <th>#</th>
        <th>Ciudad</th>
        <th>Código Postal</th>
        <th>Fecha</th>
        <th>Medio</th>
        <th>Teléfono</th>
        <th>Costo</th>
        <th>Productos</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((ord, i) => {
         
          // PurchaseInfo destructuring
          const [purchaseInfo, items]: [PurchaseInfo, ItemPurchase[]] = [ord.purchaseInfo, ord.items];
          const [city, postalCode, date, paymentMethod, phoneNumber, cost]: [string, number, Date, PaymentMethod, number, number] =
                [purchaseInfo.city, purchaseInfo.postalCode, purchaseInfo.date, purchaseInfo.paymentMethod, purchaseInfo.phoneNumber, purchaseInfo.totalCost]

          return <tr key={ord.id}>
              <td>{i+1}</td>
              <td>{city}</td>
              <td>{postalCode}</td>
              <td>{date.toString()}</td>
              <td>{paymentMethod}</td>
              <td>{phoneNumber}</td>
              <td>{cost}US$</td>
              <td>PDF</td>
          </tr>
        })}
      </tbody>
    </Table>
  </div>
}

export default PurchaseHistory;