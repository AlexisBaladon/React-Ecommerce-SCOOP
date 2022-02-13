import Flavor from './flavor'
import ProductDetail from './ProductDetail';

class ProductDetailRecipiente extends ProductDetail {
  flavors: Flavor[];
  
  constructor(flavors: Flavor[]) {
    super();
    this.flavors = flavors;
  }
    
  //The title isnt enough to identify a 'Recipiente' item.
  getTicketTitle(title: string): string {
    let res = title;
    this.flavors.forEach((f) => res += " - "+f.title);
    return res;
  } 
}

export default ProductDetailRecipiente;