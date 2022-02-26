import ProductDetail from './ProductDetail';

class ProductDetailSimple extends ProductDetail {
    
  equals(pd: ProductDetail): boolean {
    return (pd instanceof ProductDetailSimple); 
  }

  getTicketTitle(title: string): string {
    return title;
  } 
}

export default ProductDetailSimple;