import { Button } from './products';
import { Checkbox } from './products';
export interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}
