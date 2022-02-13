abstract class ProductDetail {
  
  constructor() {
  }

  abstract equals(pd: ProductDetail): boolean;

  getTicketTitle(title: string): string {
    return title;
  }
}
  
  export default ProductDetail;