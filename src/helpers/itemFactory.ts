import ItemTicket from "../dataTypes/items/itemTicket";
import ProductDetail from "../dataTypes/items/ProductDetail";
import Category from "../dataTypes/items/category";
import ProductDetailRecipiente from "../dataTypes/items/ProductDetailRecipiente";
import ProductDetailSimple from "../dataTypes/items/ProductDetailSimple";
import ItemShowcase from "../dataTypes/items/itemShowcase";
import Flavor from "../dataTypes/items/flavor";

const createTicket = (item: ItemShowcase, productDetail: ProductDetail, amount: number): ItemTicket => {
  let res: ItemTicket;
    
  //item destructuring
  const [id, title, price, pictureUrl, stock]: 
  [string, string, number, string, number] =
  [item.id, item.title, item.price, item.pictureUrl, item.stock];

  res = new ItemTicket(id, productDetail.getTicketTitle(title), price, pictureUrl, stock, productDetail, amount);

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

//JSON parsed items don't have functions. instancing new items solves the problem.
const reconstructItems = (deadItems: ItemTicket[]) => {
  const reconstructedItems: ItemTicket[] = [];
  
  deadItems.forEach(it => {
    let productDetail: ProductDetail;
    const anyProduct: any = it.productDetail;
    
   if (anyProduct.flavors) {
    const flavors: Flavor[] = [];

    anyProduct.flavors.forEach((flavor: any) => {
      if (flavor.id && flavor.title && flavor.pictureUrl) {
        flavors.push(new Flavor(flavor.id, flavor.title, flavor.pictureUrl));
      }
      else {
        throw new Error("Un dato de este item está mal definido");
      }
    })

    productDetail = new ProductDetailRecipiente(flavors);
  } 
  else {
    productDetail = new ProductDetailSimple();
  }

  reconstructedItems.push(new ItemTicket(it.id, it.title, it.price, it.pictureUrl, it.stock, productDetail, it.amount));
  })

  return reconstructedItems;
}

export {createTicket, createProductDetail, reconstructItems};