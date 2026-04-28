import { GUIFactory } from './factories';
import { Button, Checkbox } from './products';
export class MacButton implements Button { render() { console.log('Mac Button'); } }
export class MacCheckbox implements Checkbox { render() { console.log('Mac Checkbox'); } }
export class MacFactory implements GUIFactory {
  createButton(): Button { return new MacButton(); }
  createCheckbox(): Checkbox { return new MacCheckbox(); }
}
