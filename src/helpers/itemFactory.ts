import Item from "../dataTypes/item";
import ItemCategory from "../dataTypes/category";
import ItemTicket from "../dataTypes/itemTicket";
import ProductDetail from "../dataTypes/ProductDetail";
import Category from "../dataTypes/category";
import ProductDetailRecipiente from "../dataTypes/ProductDetailRecipiente";
import ProductDetailSimple from "../dataTypes/ProductDetailSimple";

const createTicket = (item: Item, productDetail: ProductDetail, amount: number): ItemTicket => {
  let res: Item = item;
    
  if (!(item instanceof ItemTicket)) {

    //item destructuring
    const [id, title, price, pictureUrl, category]: 
    [string, string, number, string, ItemCategory] =
    [item.id, item.title, item.price, item.pictureUrl, item.category];

    res = new ItemTicket(id, productDetail.getTicketTitle(title), price, pictureUrl, category, productDetail, amount);
  }

  if (!(res instanceof ItemTicket)) {
    throw new Error("El item creado no es de tipo ItemTicket!")
  }  

  return res;
}

const createProductDetail = (category: Category): ProductDetail => {
  let newProductDetail: ProductDetail;
  
  switch(category) {
    case Category.Recipiente:
      newProductDetail = new ProductDetailRecipiente([]);
      break;
    default: 
      newProductDetail = new ProductDetailSimple();
      break;
  }

  return newProductDetail;
}
export {createTicket, createProductDetail};