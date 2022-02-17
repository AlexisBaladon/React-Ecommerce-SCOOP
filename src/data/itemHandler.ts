import {collection, doc, DocumentData, DocumentSnapshot, Firestore, getDoc, getDocs, getFirestore, orderBy, query, where} from 'firebase/firestore';
import Category from '../dataTypes/category';
import ItemShowcase from '../dataTypes/itemShowcase';

const createItemAux = (document: DocumentSnapshot<DocumentData>): ItemShowcase => {
  let newItem = null;

  //Destructuring
  const [id, title, description, price, pictureUrl, category, stock]: 
  [string, string | undefined, string | undefined, number | undefined, string | undefined, Category | undefined, number | undefined] =
  [document.id, document.get("title"), document.get("description"), document.get("price"), document.get("pictureUrl"), document.get("type"), document.get("stock")]

  //If items are well defined
  if (title === undefined || description === undefined || price === undefined || pictureUrl === undefined || category === undefined || stock === undefined ) {
  console.log(id,title,description,price,pictureUrl,category,stock)
  throw new Error("Parámetros de items de base de datos erróneos");
  }
  else {
    newItem = new ItemShowcase(id, title, description, price, pictureUrl, category, stock);
  }
  
  return newItem;
}

const getItem = (itemId: string, setItem: (item: ItemShowcase) => void): void => {
  const db = getFirestore()
  const itemRef = doc(db, "items", itemId);
  console.log(itemRef)
  getDoc(itemRef).then(snapshot => {
    if (snapshot.exists()) {
      const item = createItemAux(snapshot);
      setItem(item);
    }
    else {
      throw new Error("El item buscado no existe en la base de datos")
    }
  })
}

const getItems = (setItems: (item: ItemShowcase[]) => void): void => {
  const db = getFirestore()
  const itemCollection = query(collection(db,"items"),orderBy("type"));

  getDocs(itemCollection).then(snapshot => {
    const newItems = snapshot.docs.map(doc => {
      return createItemAux(doc);
    })
    setItems(newItems);
  })
}

const getItemsByCategory = (category: Category, setItems: (item: ItemShowcase[]) => void): void => {
  const db = getFirestore()
  const itemCollection = query(collection(db,"items"),where("type","==",category));

  getDocs(itemCollection).then(snapshot => {
    const newItems = snapshot.docs.map(doc => {
      return createItemAux(doc);
    })
    setItems(newItems);
  })
}

export {getItem,getItems,getItemsByCategory};

