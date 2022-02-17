import {collection, doc, DocumentData, DocumentSnapshot, Firestore, getDoc, getDocs, getFirestore, orderBy, query, where} from 'firebase/firestore';
import Flavor from '../dataTypes/flavor';


  const createItemAux = (document: DocumentSnapshot<DocumentData>): Flavor => {
  let newFlavor = null;
  
  //Destructuring
  const [id, title, pictureUrl]: 
  [string | undefined, string | undefined, string | undefined] =
  [document.id, document.get("title"), document.get("pictureUrl")]
  
  //If items are well defined
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

  export {getFlavors};