import { Product } from './product';
export class ConcreteProduct implements Product {
  use(): void {
    console.log('ConcreteProduct: using product');
  }
}
