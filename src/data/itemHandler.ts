import {collection, doc, DocumentData, DocumentSnapshot, getDoc, getDocs, getFirestore, orderBy, query, QuerySnapshot, where} from 'firebase/firestore';
import Category from '../dataTypes/items/category';
import ItemShowcase from '../dataTypes/items/itemShowcase';

const createItemAux = (document: DocumentSnapshot<DocumentData>): ItemShowcase => {
  let newItem = null;

  //Destructuring
  const [id, title, description, price, pictureUrl, category, stock]: 
  [string, string | undefined, string | undefined, number | undefined, string | undefined, Category | undefined, number | undefined] =
  [document.id, document.get("title"), document.get("description"), document.get("price"), document.get("pictureUrl"), document.get("type"), document.get("stock")]

  //If items are well defined
  if (title === undefined || description === undefined || price === undefined || pictureUrl === undefined || category === undefined || stock === undefined ) {
    throw new Error("Parámetros de items de base de datos erróneos");
  }
  else {
    newItem = new ItemShowcase(id, title, description, price, pictureUrl, category, stock);
  }
  
  return newItem;
}

const getItem = async (itemId: string, setItem: (item: ItemShowcase) => void): Promise<void | DocumentSnapshot<DocumentData>> => {
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

const getItems = async (setItems: (item: ItemShowcase[]) => void): Promise<void | QuerySnapshot<DocumentData>> => {
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
    }
  })
}

const getItemsByCategory = async (category: Category, setItems: (item: ItemShowcase[]) => void): Promise<void | QuerySnapshot<DocumentData>> => {
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

export {getItem,getItems,getItemsByCategory};

