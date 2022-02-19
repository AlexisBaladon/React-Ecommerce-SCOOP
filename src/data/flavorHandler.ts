import {collection, DocumentData, DocumentSnapshot, getDocs, getFirestore, limit, query, where} from 'firebase/firestore';
import Flavor from '../dataTypes/flavor';

const createItemAux = (document: DocumentSnapshot<DocumentData>): Flavor => {
  let newFlavor = null;

  //Destructuring
  const [id, title, pictureUrl]: 
  [string | undefined, string | undefined, string | undefined] =
  [document.id, document.get("title"), document.get("pictureUrl")]

  //If flavors are well defined
  if (title === undefined || pictureUrl === undefined) {
    throw new Error("Parámetros de items de base de datos erróneos");
  }
  else {
    newFlavor = new Flavor(id, title, pictureUrl);
  }

  return newFlavor;
}

const getFlavors = (setFlavors: (item: Flavor[]) => void): void => {
  const db = getFirestore()
  const itemCollection = query(collection(db,"flavors"));

  getDocs(itemCollection).then(snapshot => {
    const newFlavor = snapshot.docs.map(doc => {
      return createItemAux(doc);
    })
    setFlavors(newFlavor);
  })
}

const getNumberOfFlavors = (setAmount: (amount: number) => void, recipienteId: string): void => {
  const db = getFirestore()
  const itemCollection = query(collection(db,"numberOfFlavors"), where("recipienteID","==",recipienteId), limit(1));

  getDocs(itemCollection).then(snapshot => {
    const amount: number | undefined = snapshot.docs[0]?.get("amount");
    
    //If documents are well defined
    if (amount === undefined) throw new Error("Este documento no presenta campo 'amount'");
    setAmount(amount);
  })
}

export {getFlavors, getNumberOfFlavors};