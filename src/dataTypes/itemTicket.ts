import Item from './item';
import ProductDetail from './ProductDetail';
import Category from './category';

class ItemTicket extends Item {
  amount: number;
  productDetail: ProductDetail;
  
  constructor(id: number, title: string, price: number, pictureUrl: string, category: Category, productDetail: ProductDetail, amount: number) {
    super(id, title, price, pictureUrl, category);
    this.productDetail = productDetail;
    this.amount = amount;
  }

  sameDetails(pd: ProductDetail) {
    return pd.equals(this.productDetail);
  }

  sameProductAs(it: ItemTicket): boolean {
    return it.equals(this) && it.sameDetails(this.productDetail);
  }

}

export default ItemTicket;