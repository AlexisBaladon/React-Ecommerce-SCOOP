import {addDoc, collection, DocumentData, DocumentSnapshot, getDocs, getFirestore, orderBy, query, Timestamp, where} from 'firebase/firestore';
import Item from '../dataTypes/items/item';
import ItemPurchase from '../dataTypes/items/itemPurchase';
import ItemTicket from '../dataTypes/items/itemTicket';
import Order from '../dataTypes/purchase/order';
import PaymentMethod from '../dataTypes/purchase/paymentMethod';
import PurchaseInfo from '../dataTypes/purchase/purchaseInfo';
import User from '../dataTypes/user/user';

const createOrderAux = (document: DocumentSnapshot<DocumentData>): Order => {
  let newOrder = null;

  //Destructuring
  const [id, buyer, items, purchaseInfo]: 
  [string, 
   {email: string},
   {id: string, amount: number, price: number, title: string}[] | undefined,
   {city: string, country: string, date: Timestamp, paymentMethod: PaymentMethod, phone: number, postalCode: number, totalCost: number} | undefined,
  ] =
  [document.id, document.get("buyer"), document.get("items"), document.get("purchaseInfo")]

  //If items are well defined
  if (buyer === undefined || items === undefined || purchaseInfo === undefined) {
    throw new Error("Parámetros de orden de compra de base de datos erróneos");
  }
  else {
    //deconstruction
    const [email] = [buyer.email];
    const [city, country, date, paymentMethod, phone, postalCode, totalCost] = [purchaseInfo.city, purchaseInfo.country, purchaseInfo.date, purchaseInfo.paymentMethod, purchaseInfo.phone, purchaseInfo.postalCode, purchaseInfo.totalCost];

    if (email === undefined || country === undefined || date === undefined || paymentMethod === undefined || phone === undefined || postalCode === undefined || totalCost === undefined) {
      throw new Error("Parámetros de detalles de compra de base de datos erróneos");
    }
    
    const itemTickets: ItemPurchase[] = [];
    items.forEach(it => {
      itemTickets.push(new ItemPurchase(it.id, it.title, it.price, it.amount));
    })

    newOrder = new Order(id, new User(email),
                             new PurchaseInfo(phone, country, city, postalCode, paymentMethod, date.toDate(), totalCost),
                             itemTickets);
  }
  
  return newOrder;
}

//Read Function
const getOrdersByEmail = (email: string, setOrders: (orders: Order[]) => void): void => {
  const db = getFirestore()
  const orderCollection = query(collection(db,"orders"),where("buyer.email","==",email),orderBy("purchaseInfo.date"));

  getDocs(orderCollection).then(snapshot => {
    const newOrders = snapshot.docs.map(doc => {
      return createOrderAux(doc);
    })
    setOrders(newOrders);
  })
}

//Write function
const purchaseItems =  async (order: Order, setOrderId: (id: string) => any) => {
  const db = getFirestore()
  const newOrder = collection(db,"orders");

  //Order destructuring
  const [buyer, purchaseInfo, items] = [order.buyer, order.purchaseInfo, order.items];
  
  //Convert array of classes (prevents firebase exception)
  const notClassItems: {id: string, title: string, price: number, amount: number}[] = 
    items.map((it => {
      return {id: it.id, title: it.title, price: it.price, amount: it.amount};
    }))

  addDoc(newOrder, {
    buyer: {
      email: buyer.email,
    },
    purchaseInfo: {
      phone: purchaseInfo.phoneNumber,
      country: purchaseInfo.country,
      city: purchaseInfo.city,
      postalCode: purchaseInfo.postalCode,
      paymentMethod: purchaseInfo.paymentMethod,
      date: Timestamp.fromDate(purchaseInfo.date),
      totalCost: purchaseInfo.totalCost,
    },
    items: notClassItems,
  }).then(response => {
    setOrderId(response.id);
  })
  
}

export {purchaseItems, getOrdersByEmail};
