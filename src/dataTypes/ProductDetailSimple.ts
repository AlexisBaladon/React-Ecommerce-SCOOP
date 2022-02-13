import ProductDetail from './ProductDetail';

class ProductDetailSimple extends ProductDetail {
  
  constructor() {
    super();
  }
    
  equals(pd: ProductDetail): boolean {
    return (pd instanceof ProductDetailSimple); 
  }

  getTicketTitle(title: string): string {
    return title;
  } 
}

export default ProductDetailSimple;