import {collection, doc, Firestore, getDocs, getFirestore, orderBy, query} from 'firebase/firestore';
import Category from '../dataTypes/category';
import ItemShowcase from '../dataTypes/itemShowcase';

const getItems = (setItems: (item: ItemShowcase[]) => void): void => {
  const db = getFirestore()
  const itemCollection = query(collection(db,"items"),orderBy("type"));

  getDocs(itemCollection).then(snapshot => {
    const newItems = snapshot.docs.map(doc => {
      
      //Destructuring
      const [id, title, description, price, pictureUrl, category, stock]: 
            [string, string | undefined, string | undefined, number | undefined, string | undefined, Category | undefined, number | undefined] =
            [doc.id, doc.get("title"), doc.get("description"), doc.get("price"), doc.get("pictureUrl"), doc.get("type"), doc.get("stock")]
      
      //If items are well defined
      if (title === undefined || description === undefined || price === undefined || pictureUrl === undefined || category === undefined || stock === undefined ) {
          console.log(id,title,description,price,pictureUrl,category,stock)
          throw new Error("Parámetros de items de base de datos erroneos");
      }
      else {
          const newItem = new ItemShowcase(id, title, description, price, pictureUrl, category, stock);
          return newItem; //map return
      }
    })
    setItems(newItems);
  })
}

export {getItems};

