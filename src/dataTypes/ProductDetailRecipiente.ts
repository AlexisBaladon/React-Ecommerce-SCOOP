import Flavor from './flavor'
import ProductDetail from './ProductDetail';

class ProductDetailRecipiente extends ProductDetail {
  flavors: Flavor[];
  
  constructor(flavors: Flavor[]) {
    super();
    this.flavors = flavors;
  }
    
  //Two details are equal only if their flavors are the same.
  equals(pd: ProductDetail): boolean {
    let res: boolean = false;

    if (pd instanceof ProductDetailRecipiente) {
      res = !(this.flavors.some((f,i) => pd.flavors[i].id !== f.id)) ;
    }
    
    return res;
  }

  //The title isnt enough to identify a 'Recipiente' item.
  getTicketTitle(title: string): string {
    let res = title;
    this.flavors.forEach((f) => res += " - " + f.title);
    return res;
  } 
}

export default ProductDetailRecipiente;