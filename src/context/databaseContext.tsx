import React, { useState } from 'react'
import {addDoc, collection, doc, DocumentData, DocumentSnapshot, getDoc, getDocs, getFirestore, limit, orderBy, query, QuerySnapshot, Timestamp, where} from 'firebase/firestore';
import ItemShowcase from '../dataTypes/items/itemShowcase';
import Category from '../dataTypes/items/category';
import Flavor from '../dataTypes/items/flavor';
import Order from '../dataTypes/purchase/order';
import PurchaseInfo from '../dataTypes/purchase/purchaseInfo';
import User from '../dataTypes/user/user';
import ItemPurchase from '../dataTypes/items/itemPurchase';
import PaymentMethod from '../dataTypes/purchase/paymentMethod';

const DatabaseContext = React.createContext<{
    getItem(itemId: string, setItem: (item: ItemShowcase) => void): Promise<void | DocumentSnapshot<DocumentData>>,
    getItems(setItems: (item: ItemShowcase[]) => void): Promise<void | QuerySnapshot<DocumentData>>,
    getItemsByCategory(category: Category, setItems: (item: ItemShowcase[]) => void): Promise<void | QuerySnapshot<DocumentData>>,
    getFlavors(setFlavors: (item: Flavor[]) => void): void,
    getNumberOfFlavors(setAmount: (amount: number) => void, recipienteId: string): void,
    getOrdersByEmail(email: string, setOrders: (orders: Order[]) => void): void,
    purchaseItems(order: Order, setOrderId: (id: string) => any): Promise<void>,
  }>
  ({
    getItem: (itemId: string, setItem: (item: ItemShowcase) => void) => new Promise<void>(() => {}),
    getItems: (setItems: (item: ItemShowcase[]) => void) => new Promise<void>(() => {}),
    getItemsByCategory: (category: Category, setItems: (item: ItemShowcase[]) => void) => new Promise<void>(() => {}),
    getFlavors: (setFlavors: (item: Flavor[]) => void) => {},
    getNumberOfFlavors: (setAmount: (amount: number) => void, recipienteId: string) => {},
    getOrdersByEmail: (email: string, setOrders: (orders: Order[]) => void) => {},
    purchaseItems: (order: Order, setOrderId: (id: string) => any) => new Promise<void>(() => {}),
  });

const DatabaseProvider: React.FC<{}> = ({children}) => {
  const [flavors, setFlavorsDB] = useState<Flavor[]>([]);
  const [items, setItemsDB] = useState<ItemShowcase[]>([]);
  const [numberOfFlavors, setNumberOfFlavors] = useState<Map<string, number>>(new Map());

  const createItemAux = (document: DocumentSnapshot<DocumentData>): ItemShowcase => {
    let newItem = null;
  
    const [id, title, description, price, pictureUrl, category, stock]: 
    [string, string | undefined, string | undefined, number | undefined, string | undefined, Category | undefined, number | undefined] =
    [document.id, document.get("title"), document.get("description"), document.get("price"), document.get("pictureUrl"), document.get("type"), document.get("stock")]
  
    if (title === undefined || description === undefined || price === undefined || pictureUrl === undefined || category === undefined || stock === undefined ) {
      throw new Error("Parámetros de items de base de datos erróneos");
    }
    else {
      newItem = new ItemShowcase(id, title, description, price, pictureUrl, category, stock);
    }
    
    return newItem;
  }
  
  const getItem = async (itemId: string, setItem: (item: ItemShowcase) => void): Promise<void | DocumentSnapshot<DocumentData>> => {
    if (items.length > 0) {
      const searchedItem = items.find(it => it.id === itemId);
      if (searchedItem) setItem(searchedItem)
      else throw new Error("El item buscado no existe en la base de datos");
    }
    else {
      const db = getFirestore()
      const itemRef = doc(db, "items", itemId);
    
      await getDoc(itemRef).then(snapshot => {
        if (snapshot.exists()) {
          const item = createItemAux(snapshot);
          setItem(item);
        }
        else {
          throw new Error("El item buscado no existe en la base de datos")
        }
      })
    }
  }
  
  const getItems = async (setItems: (item: ItemShowcase[]) => void): Promise<void | QuerySnapshot<DocumentData>> => {
    if (items.length > 0) {
      setItems(items);
    }
    else {
      const db = getFirestore()
      const itemCollection = query(collection(db,"items"),orderBy("type"),orderBy("price"));
    
      await getDocs(itemCollection).then(snapshot => {
        if (snapshot.empty) {
          throw new Error("No se han encontrado items en la base de datos!")
        }
        else {
          const newItems = snapshot.docs.map(doc => {
            return createItemAux(doc);
          })
          setItems(newItems);
          setItemsDB(newItems);
        }
      })
    }
  }
  
  const getItemsByCategory = async (category: Category, setItems: (item: ItemShowcase[]) => void): Promise<void | QuerySnapshot<DocumentData>> => {
    if (items.length > 0) {
      const filteredItems = items.filter((it => it.category === category));
      setItems(filteredItems);
    }
    else {
      const db = getFirestore()
      const itemCollection = query(collection(db,"items"),where("type","==",category),orderBy("price"));
    
      await getDocs(itemCollection).then(snapshot => {
        if (snapshot.empty) {
          throw new Error("No se han encontrado items en la base de datos!")
        }
        else {
          const newItems = snapshot.docs.map(doc => {
            return createItemAux(doc);
          })
          setItems(newItems);
        } 
      })
    }
  }
  
  const createFlavorAux = (document: DocumentSnapshot<DocumentData>): Flavor => {
    let newFlavor = null;
  
    const [id, title, pictureUrl]: 
    [string | undefined, string | undefined, string | undefined] =
    [document.id, document.get("title"), document.get("pictureUrl")]
  
    if (title === undefined || pictureUrl === undefined) {
      throw new Error("Parámetros de items de base de datos erróneos");
    }
    else {
      newFlavor = new Flavor(id, title, pictureUrl);
    }
  
    return newFlavor;
  }
  
  const getFlavors = (setFlavors: (item: Flavor[]) => void): void => {
    if (flavors.length > 0) {
      setFlavors(flavors);
    }
    else {
      const db = getFirestore()
      const itemCollection = query(collection(db,"flavors"));
    
      getDocs(itemCollection).then(snapshot => {
        const newFlavor = snapshot.docs.map(doc => {
          return createFlavorAux(doc);
        })
        setFlavors(newFlavor);
        setFlavorsDB(newFlavor);
      })
    }
  }

  const getNumberOfFlavors = (setAmount: (amount: number) => void, recipienteId: string): void => {
    const num = numberOfFlavors.get(recipienteId);
    if (num) {
      setAmount(num);
    }
    else {
      const db = getFirestore()
      const itemCollection = query(collection(db,"numberOfFlavors"), where("recipienteID","==",recipienteId), limit(1));
  
      getDocs(itemCollection).then(snapshot => {
        const amount: number | undefined = snapshot.docs[0]?.get("amount");
        
        if (amount === undefined) throw new Error("Este documento no presenta campo 'amount'");
        setAmount(amount);
        setNumberOfFlavors(numberOfFlavors.set(recipienteId, amount));
      })
    }
  }

    
  const createOrderAux = (document: DocumentSnapshot<DocumentData>): Order => {
    let newOrder = null;

    const [id, buyer, items, purchaseInfo]: 
    [string, 
    {email: string},
    {id: string, amount: number, price: number, title: string}[] | undefined,
    {city: string, country: string, date: Timestamp, paymentMethod: PaymentMethod, phone: number, postalCode: number, totalCost: number} | undefined,
    ] =
    [document.id, document.get("buyer"), document.get("items"), document.get("purchaseInfo")]

    if (buyer === undefined || items === undefined || purchaseInfo === undefined) {
      throw new Error("Parámetros de orden de compra de base de datos erróneos");
    }
    else {
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

  const purchaseItems =  async (order: Order, setOrderId: (id: string) => any) => {
    const db = getFirestore()
    const newOrder = collection(db,"orders");

    const [buyer, purchaseInfo, items] = [order.buyer, order.purchaseInfo, order.items];
    
    //Converts array of classes (prevents firebase exception)
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
  
  return (
    <DatabaseContext.Provider 
      value={{getItem: getItem,
              getItems: getItems,
              getItemsByCategory: getItemsByCategory,
              getFlavors: getFlavors,
              getNumberOfFlavors: getNumberOfFlavors,
              getOrdersByEmail: getOrdersByEmail,
              purchaseItems: purchaseItems,
             }}>
      {children}
    </DatabaseContext.Provider>
  )
}

export {DatabaseContext, DatabaseProvider}