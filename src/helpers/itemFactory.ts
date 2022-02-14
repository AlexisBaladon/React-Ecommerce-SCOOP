import Item from "../dataTypes/item";
import ItemCategory from "../dataTypes/category";
import ItemTicket from "../dataTypes/itemTicket";
import ProductDetail from "../dataTypes/ProductDetail";

const createTicket = (item: Item, productDetail: ProductDetail, amount: number): ItemTicket => {
  let res: Item = item;
    
  if (!(item instanceof ItemTicket)) {

    //item destructuring
    const [id, title, price, pictureUrl, category]: 
    [number, string, number, string, ItemCategory] =
    [item.id, item.title, item.price, item.pictureUrl, item.category];

    res = new ItemTicket(id, productDetail.getTicketTitle(title), price, pictureUrl, category, productDetail, amount);
  }

  if (!(res instanceof ItemTicket)) {
      throw new Error("The returned Item is not an ItemTicket!")
  }  

  return res;
}
  
export {createTicket};