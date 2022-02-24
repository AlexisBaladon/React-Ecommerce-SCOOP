import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import ItemPurchase from '../../dataTypes/items/itemPurchase';
import Order from '../../dataTypes/purchase/order';
import PaymentMethod from '../../dataTypes/purchase/paymentMethod';
import PurchaseInfo from '../../dataTypes/purchase/purchaseInfo';
import createPDF from '../../helpers/pdf';

import './purchaseHistory.css'

const pdfIcon = require('./pdf-icon.png');

interface IProps {
  orders: Order[];
}

const PurchaseHistory: React.FC<IProps> = ({orders}) => {  
  const [pdfsData, setPdfsData] = useState<Uint8Array[]>([]);
  const [urls, setUrls] = useState<string[]>([]);

  useEffect(() => {
    //FALTA IS MOUNTED
    orders.forEach((ord, i) => {
      const setPdfData = (pdfDt: Uint8Array) => {
        let pdfsDataAux = pdfsData;
        pdfsDataAux[i] = pdfDt;
        setPdfsData(pdfsDataAux.slice());
      }
      createPDF(ord, setPdfData);
    })
  }, [orders])

  useEffect(() => {
    orders.forEach((ord, i) => {
      const urlBlob = window.URL.createObjectURL(new Blob([pdfsData[i]], {type: 'application/pdf'}));
      let urlsAux = urls;
      urlsAux[i] = urlBlob;
      setUrls(urlsAux.slice());
    });
  }, [pdfsData])
    
  return <div id="purchase-history" className="">
    <Table id="table-purchase-history" responsive striped bordered hover>
      <thead>
        <tr>
        <th>ID de compra</th>
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
              <td>{ord.id}</td>
              <td>{city}</td>
              <td>{postalCode}</td>
              <td>{date.toString()}</td>
              <td>{paymentMethod}</td>
              <td>{phoneNumber}</td>
              <td>{cost}US$</td>
              <td><a download={"Recibo - " + ord.id} href={urls[i]}><img width="45px" src={pdfIcon} /></a></td>
          </tr>
        })}
      </tbody>
    </Table>
  </div>
}

export default PurchaseHistory;