import { Adapter } from './adapter';
import { Adaptee } from './adaptee';
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
console.log('Adapter result:', adapter.request());
