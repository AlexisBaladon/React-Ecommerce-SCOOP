import Item from './item';
import ProductDetail from './ProductDetail';

class ItemTicket extends Item {
  pictureUrl: string;
  amount: number;
  stock: number;
  productDetail: ProductDetail;
  
  constructor(id: string, title: string, price: number, pictureUrl: string, stock: number, productDetail: ProductDetail, amount: number) {
    super(id, title, price);
    this.pictureUrl = pictureUrl;
    this.productDetail = productDetail;
    this.amount = amount;
    this.stock = stock;
  }

  sameDetails(pd: ProductDetail) {
    return pd.equals(this.productDetail);
  }

  sameProductAs(it: ItemTicket): boolean {
    return it.equals(this) && it.sameDetails(this.productDetail);
  }

  updateAmount(amount: number): void {
    this.amount = amount;
  }

}

export default ItemTicket;