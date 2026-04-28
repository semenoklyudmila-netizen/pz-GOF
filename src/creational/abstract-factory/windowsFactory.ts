import { GUIFactory } from './factories';
import { Button, Checkbox } from './products';
export class WinButton implements Button { render() { console.log('Windows Button'); } }
export class WinCheckbox implements Checkbox { render() { console.log('Windows Checkbox'); } }
export class WindowsFactory implements GUIFactory {
  createButton(): Button { return new WinButton(); }
  createCheckbox(): Checkbox { return new WinCheckbox(); }
}
