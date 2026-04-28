import { GUIFactory } from './factories';
import { MacFactory } from './macFactory';
import { WindowsFactory } from './windowsFactory';
function demo(factory: GUIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();
  button.render();
  checkbox.render();
}
console.log('AbstractFactory: Mac');
demo(new MacFactory());
console.log('AbstractFactory: Windows');
demo(new WindowsFactory());
