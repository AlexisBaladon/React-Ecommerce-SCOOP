import Item from './item';
import ProductDetail from './ProductDetail';
import Category from './category';

class ItemTicket extends Item {
  pictureUrl: string;
  amount: number;
  productDetail: ProductDetail;
  
  constructor(id: string, title: string, price: number, pictureUrl: string, productDetail: ProductDetail, amount: number) {
    super(id, title, price);
    this.pictureUrl = pictureUrl;
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