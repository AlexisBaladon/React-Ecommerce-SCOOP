abstract class ProductDetail {

  abstract equals(pd: ProductDetail): boolean;

  getTicketTitle(title: string): string {
    return title;
  }
}
  
  export default ProductDetail;