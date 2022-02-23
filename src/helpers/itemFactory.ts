import Item from "../dataTypes/items/item";
import ItemCategory from "../dataTypes/items/category";
import ItemTicket from "../dataTypes/items/itemTicket";
import ProductDetail from "../dataTypes/items/ProductDetail";
import Category from "../dataTypes/items/category";
import ProductDetailRecipiente from "../dataTypes/items/ProductDetailRecipiente";
import ProductDetailSimple from "../dataTypes/items/ProductDetailSimple";
import ItemShowcase from "../dataTypes/items/itemShowcase";

const createTicket = (item: ItemShowcase, productDetail: ProductDetail, amount: number): ItemTicket => {
  let res: ItemTicket;
    
  //item destructuring
  const [id, title, price, pictureUrl]: 
  [string, string, number, string] =
  [item.id, item.title, item.price, item.pictureUrl];

  res = new ItemTicket(id, productDetail.getTicketTitle(title), price, pictureUrl, productDetail, amount);

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