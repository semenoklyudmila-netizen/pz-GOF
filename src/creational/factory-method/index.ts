/* Factory Method demo */
import { Creator } from './creator';
const creator = new Creator();
const product = creator.createProduct();
product.use();
