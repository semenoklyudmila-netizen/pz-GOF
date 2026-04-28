import { Product } from './product';
import { ConcreteProduct } from './concreteProduct';
export class Creator {
  createProduct(): Product {
    return new ConcreteProduct();
  }
}
